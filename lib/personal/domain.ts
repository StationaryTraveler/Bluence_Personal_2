import {applyReview,type ReviewCommand,type ReviewDraft,type ReviewEvidence} from './review.ts';
import type {AssessmentDraft,Answers} from './assessment.ts';
/** Browser-local record ID; getRandomValues also works in HTTP development previews. */
export function recordId():string {
 if(typeof crypto.randomUUID==='function')return crypto.randomUUID();
 const bytes=crypto.getRandomValues(new Uint8Array(16));
 bytes[6]=(bytes[6]&15)|64;bytes[8]=(bytes[8]&63)|128;
 const h=Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join('');
 return `${h.slice(0,8)}-${h.slice(8,12)}-${h.slice(12,16)}-${h.slice(16,20)}-${h.slice(20)}`;
}
export type ActionState = 'To do'|'Doing'|'Done'|'Paused';
export type Action = {id:string;catalogId:string;title:string;instruction:string;state:ActionState;recurring:boolean;unit:string;dueOn:string;nextCheckIn:string;periodStart:string;periodEnd:string;timing:string;acceptedOn?:string;changedOn?:string;removed?:boolean;resultId?:string;reportingPlan?:{from:string;firstEnd:string}};
export type CheckIn = {id:string;actionId:string;periodStart:string;periodEnd:string;occurredOn:string;outcome:'activity'|'not-done'|'obstacle';quantity?:number;obstacle?:string;note?:string;voided?:boolean;revision:number};
export type CheckInDraft = Omit<CheckIn,'id'|'revision'> & {editId?:string};
export type Result = {id:string;date:string;total?:number;range?:[number,number];coverage:number;partial:boolean;hotspot?:{category:string;driver:string;explanation:string;provisional:boolean}};
export type Review = {id:string;completedOn:string;summary:string;result:Result;adaptationPending?:boolean;unexpected?:boolean;evidence?:ReviewEvidence;decisions?:string[];goalAtReview?:string};
export type Suggestion = {id:string;title:string;instruction:string;category:string;why:string;impact:'Small'|'Medium'|'Large';basis:string;effort:string;cost:string;timing:string;unit:string};
export type Journey = {
 schemaVersion:1;revision:number;timezone:string;firstSavedOn?:string;nextReviewOn?:string;longAbsence?:boolean;
 weekly?:{day:string;anchor:string};goal?:{statement:string;targetDate:string;reference?:Result;revision:number;savedOn:string};footprint?:Result;startingPoint?:Result;answers?:Answers;actions:Action[];checkIns:CheckIn[];reviews:Review[];catalog:Suggestion[];
 drafts:{assessment?:AssessmentDraft;checkIn?:CheckInDraft;review?:ReviewDraft};
 displayName?:string;
 preferences:{quietCopilot?:boolean; declines:Record<string,string>;reminder:'unasked'|'later'|'enabled';day:string;time:string;restartDismissed?:boolean};
 events:{id:string;kind:string;at:string;actionId?:string;detail?:string;before?:unknown}[];
};
export type Task = {kind:'assessment'|'checkin'|'review'|'action'|'suggestion'|'paused'|'quiet'|'start';title:string;description:string;button?:string;actionId?:string;suggestionId?:string;resume?:boolean};
export function localDay(timezone:string,now=new Date()):string {return new Intl.DateTimeFormat('en-CA',{timeZone:timezone,year:'numeric',month:'2-digit',day:'2-digit'}).format(now)}
export function addDays(day:string,days:number):string {const d=new Date(day+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+days);return d.toISOString().slice(0,10)}
export function monthAfter(day:string,count=3):string {const d=new Date(day+'T12:00:00Z');const original=d.getUTCDate();d.setUTCDate(1);d.setUTCMonth(d.getUTCMonth()+count);const end=new Date(Date.UTC(d.getUTCFullYear(),d.getUTCMonth()+1,0)).getUTCDate();d.setUTCDate(Math.min(original,end));return d.toISOString().slice(0,10)}
export function displayDate(day:string,opts:Intl.DateTimeFormatOptions={}):string {return new Intl.DateTimeFormat('en',{month:'short',day:'numeric',...opts,timeZone:'UTC'}).format(new Date(day+'T12:00:00Z'))}
export function activeActions(s:Journey){return s.actions.filter(a=>!a.removed&&(a.state==='To do'||a.state==='Doing'))}
export function eligibleSuggestions(s:Journey){return s.catalog.filter(c=>!s.preferences.declines[c.id]&&!s.actions.some(a=>a.catalogId===c.id&&!a.removed))}
export function reportingAction(a:Action,today:string):Action {
 if(a.reportingPlan&&today>=a.reportingPlan.from){const p=a.reportingPlan;if(today<=p.firstEnd)return {...a,periodStart:p.from,periodEnd:p.firstEnd};const elapsed=Math.floor((Date.parse(today+'T12:00:00Z')-Date.parse(p.firstEnd+'T12:00:00Z'))/86400000)-1;const start=addDays(p.firstEnd,1+Math.floor(elapsed/7)*7);return {...a,periodStart:start,periodEnd:addDays(start,6)}}
 if(today<=a.periodEnd)return a;
 const elapsed=Math.floor((new Date(today+'T12:00:00Z').getTime()-new Date(a.periodEnd+'T12:00:00Z').getTime())/86400000)-1;
 const start=addDays(a.periodEnd,1+Math.floor(elapsed/7)*7);
 return {...a,periodStart:start,periodEnd:addDays(start,6)};
}
export function periodRecords(s:Journey,a:Action){return s.checkIns.filter(c=>c.actionId===a.id&&!c.voided&&c.occurredOn>=a.periodStart&&c.occurredOn<=a.periodEnd)}
export function periodTotal(s:Journey,a:Action){return periodRecords(s,a).filter(c=>c.outcome==='activity').reduce((n,c)=>n+(c.quantity||0),0)}
export function monthlySummary(s:Journey,today:string){const rows=s.checkIns.filter(c=>!c.voided&&c.occurredOn.startsWith(today.slice(0,7)));return {reports:rows.length,activityReports:rows.filter(c=>c.outcome==='activity').length,obstacles:rows.filter(c=>c.outcome==='obstacle').length}}
export function footprintText(r?:Result):string {
 if(!r)return 'No saved estimate';
 if(r.coverage<80)return r.range?`${r.range[0].toFixed(1)}–${r.range[1].toFixed(1)} t CO₂e / year`:'Range unavailable';
 return typeof r.total==='number'?`About ${r.total.toFixed(1)} t CO₂e / year`:'Estimate unavailable';
}
export function detailBand(coverage:number){return coverage===100?100:Math.min(95,Math.floor(coverage/5)*5)}
export function reviewDate(s:Journey){return s.nextReviewOn||(s.firstSavedOn?addDays(s.firstSavedOn,30):undefined)}
export function nextTask(s:Journey,today:string):Task {
 if(s.drafts.assessment&&!s.footprint&&!s.drafts.assessment.optional)return {kind:'assessment',title:'Pick up where you left off.',description:`Your ${s.drafts.assessment.kind==='E2'?'quick estimate':'footprint check'} is saved at ${s.drafts.assessment.question}.`,button:'Continue my estimate',resume:true};
 if(s.drafts.checkIn){const a=s.actions.find(a=>a.id===s.drafts.checkIn!.actionId);if(a)return {kind:'checkin',title:'Finish your check-in.',description:`${a.title} · ${displayDate(s.drafts.checkIn.periodStart)}–${displayDate(s.drafts.checkIn.periodEnd)}. Your answers are still here.`,button:'Continue check-in',actionId:a.id,resume:true};}
 if(s.drafts.review&&!s.drafts.review.completed)return {kind:'review',title:'Your check-up is ready to continue.',description:`Resume step ${s.drafts.review.step} for ${s.drafts.review.period}.`,button:'Resume check-up',resume:true};
 if(reviewDate(s)&&reviewDate(s)!<=today)return {kind:'review',title:'A little reflection. A fresh starting step.',description:s.reviews.length?'Review what changed since your last check-up.':'Review what changed and fill the most important gaps. You can complete the remaining questions later.',button:'Start check-up'};
 const active=activeActions(s).map(a=>reportingAction(a,today));const due=active.find(a=>a.nextCheckIn<=today);
 if(due)return {kind:'checkin',title:'How did it go this week?',description:`${due.title} · ${displayDate(due.periodStart)}–${displayDate(due.periodEnd)}. Take a moment to notice what worked.`,button:'Check in',actionId:due.id};
 const ready=active.find(a=>a.state==='To do'&&a.dueOn<=today);
 if(ready)return {kind:'action',title:'One small step, at your own pace.',description:ready.instruction,button:'View action',actionId:ready.id};
 if(s.footprint&&!active.length){const paused=s.actions.find(a=>a.state==='Paused');if(paused)return {kind:'paused',title:'Ready to pick something up again?',description:paused.title,button:'Review paused action',actionId:paused.id};const suggestion=eligibleSuggestions(s)[0];if(suggestion)return {kind:'suggestion',title:suggestion.title,description:suggestion.instruction,button:'Try this',suggestionId:suggestion.id};}
 if(!s.footprint)return {kind:'start',title:'Your journey starts with understanding.',description:'Get your first estimate to discover what matters most in your everyday life.',button:'Estimate my footprint'};
 return {kind:'quiet',title:'Nothing to do right now.',description:'There is no daily checklist to catch up on. Make room for the changes you have already chosen.'};
}
export function emptyJourney(timezone:string):Journey {return {schemaVersion:1,revision:0,timezone,actions:[],checkIns:[],reviews:[],catalog:[],drafts:{},preferences:{declines:{},reminder:'unasked',day:'Sunday',time:'18:00'},events:[]}}
export type Command = {type:"profile";name:string}|{type:"preferences";timezone:string;day:string;time:string;quiet:boolean}|{type:"resetSuggestions"}|ReviewCommand | {type:"reviewDecision";reviewId:string;command:Extract<ActionCommand,{type:"add"|"actionState"|"actionTiming"|"goal"}>} | ActionCommand;
export type ActionCommand =
 |{type:'assessmentDraft';patch:Partial<AssessmentDraft>;answer?:{id:string;value:import('./assessment.ts').Answer}}
 |{type:'draft';draft:CheckInDraft}
 |{type:'cancelDraft'}
 |{type:'checkIn';record:CheckInDraft;id:string}
 |{type:'actionState';actionId:string;state:ActionState;pauseId?:string}
 |{type:'actionTiming';actionId:string;day:string;timing:string}
 |{type:'removeAction';actionId:string}
 |{type:'weeklySchedule';day:string}
 |{type:'goal';statement:string;targetDate:string;expectedRevision:number}
 |{type:'restoreSuggestion';catalogId:string}
 |{type:'add';catalogId:string;actionId:string;pauseId?:string}
 |{type:'decline';catalogId:string;reason:string}
 |{type:'schedule';day:string}
 |{type:'reminderLater';day:string;time:string}
 |{type:'dismissRestart'}
 |{type:'undo';before:Journey;afterRevision:number};
export function applyCommand(s:Journey,command:Command,eventId:string,today:string):Journey {
 if(s.events.some(e=>e.id===eventId))return s;
 const n=structuredClone(s);
 if(command.type==='reviewDecision'){
  const review=n.reviews.find(r=>r.id===command.reviewId);
  if(!review||review!==n.reviews.at(-1))throw Error('Open the latest check-up to adjust your commitments.');
  const result=applyCommand(n,command.command,eventId,today);
  const saved=result.reviews.find(r=>r.id===review.id)!;
  const c=command.command;
  const action='actionId' in c?result.actions.find(a=>a.id===c.actionId):undefined;
  const label=c.type==='goal'?c.statement+' · '+c.targetDate:c.type==='add'?'Added '+action?.title:c.type==='actionTiming'?'Rescheduled '+action?.title+' to '+c.day:c.state+' · '+action?.title;
  saved.decisions=[...(saved.decisions||[]),...('pauseId' in c&&c.pauseId?['Paused '+result.actions.find(a=>a.id===c.pauseId)?.title]:[]),label];
  if(c.type==='goal')saved.goalAtReview=label;
  return result;
 }
 if(command.type==='beginReview'||command.type==='editReview'||command.type==='previewReview'||command.type==='saveReview'||command.type==='finishAdaptation')applyReview(n,command,today,monthAfter(today));
 if(command.type==='assessmentDraft'){
  const prior=n.drafts.assessment;
  n.drafts.assessment={id:prior?.id||eventId,kind:'F2',optional:!!n.footprint,question:'Introduction',...prior,...command.patch,answers:{...n.answers,...prior?.answers,...(command.answer?{[command.answer.id]:command.answer.value}:{})},savedAt:new Date().toISOString()};
 }
 if(command.type==='draft')n.drafts.checkIn=command.draft;
 if(command.type==='cancelDraft')delete n.drafts.checkIn;
 if(command.type==='checkIn'){
  const r=command.record,a=n.actions.find(a=>a.id===r.actionId);
  if(!a||(!r.editId&&(a.removed||!(a.state==='To do'||a.state==='Doing'))))throw Error('This action has changed. Refresh before recording activity.');
  if(!validDay(r.occurredOn)||!validDay(r.periodStart)||!validDay(r.periodEnd)||r.occurredOn<r.periodStart||r.occurredOn>r.periodEnd||r.occurredOn>today)throw Error('Choose a date within the reporting period, no later than today.');
  if(r.outcome==='activity'&&(!Number.isInteger(r.quantity)||r.quantity!<1||r.quantity!>1000))throw Error('Enter a whole number between 1 and 1,000.');
  const old=r.editId?n.checkIns.find(c=>c.id===r.editId&&!c.voided):undefined;
  if(r.editId&&(!old||old.actionId!==r.actionId))throw Error('This record is no longer available for correction.');
  if(old&&(old.periodStart!==r.periodStart||old.periodEnd!==r.periodEnd))throw Error('A correction must keep the original reporting period.');
  const clean:CheckIn={id:old?.id||command.id,actionId:r.actionId,periodStart:r.periodStart,periodEnd:r.periodEnd,occurredOn:r.occurredOn,outcome:r.outcome,revision:(old?.revision||0)+1,note:r.note?.slice(0,500),...(r.outcome==='activity'?{quantity:r.quantity}:{}),...(r.outcome==='obstacle'?{obstacle:r.obstacle?.slice(0,500)}:{})};
  if(old)n.checkIns[n.checkIns.indexOf(old)]=clean;else n.checkIns.push(clean);
  if(!old){if(r.outcome==='activity')a.state=a.recurring?'Doing':'Done';a.nextCheckIn=a.reportingPlan&&today<a.reportingPlan.from?a.reportingPlan.from:nextWeeklyDate(n,today);}
  delete n.drafts.checkIn;
 }
 if(command.type==='actionState'){
  const a=n.actions.find(a=>a.id===command.actionId);if(!a)throw Error('Action not found.');
  if(command.pauseId){const other=n.actions.find(x=>x.id===command.pauseId&&x.id!==a.id&&activeActions(n).some(y=>y.id===x.id));if(!other)throw Error('Choose another active action to pause.');other.state='Paused';other.changedOn=today;}
  if((command.state==='Doing'||command.state==='To do')&&!activeActions(n).some(x=>x.id===a.id)&&activeActions(n).length>=3)throw Error('Three actions are active. Pause one before resuming this action.');
  a.state=command.state;a.removed=false;a.changedOn=today;
 }
 if(command.type==='add'){
  const c=n.catalog.find(c=>c.id===command.catalogId);if(!c)throw Error('This suggestion is no longer available.');
  if(n.actions.some(a=>a.id===command.actionId))throw Error('This action identifier already exists.');
  if(n.actions.some(a=>a.catalogId===c.id&&!a.removed))throw Error('This action is already in your journey.');
  if(command.pauseId){const a=n.actions.find(a=>a.id===command.pauseId&&!a.removed);if(!a)throw Error('Choose an active action to pause.');a.state='Paused';a.changedOn=today;}
  if(activeActions(n).length>=3)throw Error('Choose an action to pause before adding another.');
  const next=nextWeeklyDate(n,today);if(!n.weekly)n.weekly={anchor:next,day:weekday(next)};
  n.actions.push({id:command.actionId,catalogId:c.id,title:c.title,instruction:c.instruction,state:'To do',recurring:true,unit:c.unit,dueOn:today,nextCheckIn:next,periodStart:today,periodEnd:addDays(next,-1),timing:c.timing,acceptedOn:today,resultId:n.footprint?.id});
 }
 if(command.type==='actionTiming'){const a=n.actions.find(a=>a.id===command.actionId);if(!a)throw Error('Action not found.');if(!validDay(command.day)||command.day<today||!command.timing.trim())throw Error('Choose a future occurrence date and describe the timing.');a.dueOn=command.day;a.timing=command.timing.trim().slice(0,200);a.changedOn=today;}
 if(command.type==='removeAction'){const a=n.actions.find(a=>a.id===command.actionId);if(!a)throw Error('Action not found.');a.removed=true;a.state='Paused';a.changedOn=today;}
 if(command.type==='weeklySchedule'){
  if(!weekdays.includes(command.day))throw Error('Choose a weekly reporting day.');
  const anchor=nextDay(today,command.day);n.weekly={day:command.day,anchor};
  for(const a of n.actions){
   const current=reportingAction(a,today);
   // An untouched first period may end earlier. Reported dates are never relabelled.
   const earlyFirst=a.acceptedOn===a.periodStart&&!n.checkIns.some(r=>r.actionId===a.id)&&!n.drafts.checkIn&&today<=a.periodEnd&&anchor<=a.nextCheckIn;
   if(earlyFirst){a.periodEnd=addDays(anchor,-1);a.nextCheckIn=anchor;delete a.reportingPlan;continue;}
   const from=addDays(current.periodEnd,1);a.reportingPlan={from,firstEnd:addDays(nextDay(addDays(from,-1),command.day),-1)};
   if(a.reportingPlan.firstEnd<from)a.reportingPlan.firstEnd=addDays(a.reportingPlan.firstEnd,7);
   a.periodStart=current.periodStart;a.periodEnd=current.periodEnd;
   // Retain a due prompt; a future prompt moves only when the preserved period closes.
   if(a.nextCheckIn>today)a.nextCheckIn=addDays(current.periodEnd,1);
  }
 }
 if(command.type==='goal'){if(!n.reviews.length)throw Error('An optional goal is available after your first completed check-up.');if(s.revision!==command.expectedRevision)throw Error('Your context changed. Return to editing and review the goal again.');if(!command.statement.trim()||command.statement.length>400||!validDay(command.targetDate)||command.targetDate<today)throw Error('Enter a commitment and a current or future target date.');n.goal={statement:command.statement.trim(),targetDate:command.targetDate,reference:structuredClone(n.footprint),revision:(n.goal?.revision||0)+1,savedOn:today};}
 if(command.type==='profile'){
  if(command.name.trim().length>80)throw Error('Use up to 80 characters for your name.');
  n.displayName=command.name.trim();
 }
 if(command.type==='preferences'){
  if(!weekdays.includes(command.day)||!/^([01]\d|2[0-3]):[0-5]\d$/.test(command.time))throw Error('Choose a valid day and time.');
  new Intl.DateTimeFormat('en',{timeZone:command.timezone}).format();
  n.timezone=command.timezone;
  Object.assign(n.preferences,{day:command.day,time:command.time,quietCopilot:command.quiet});
 }
 if(command.type==='resetSuggestions')n.preferences.declines={};
 if(command.type==='restoreSuggestion')delete n.preferences.declines[command.catalogId];
 if(command.type==='decline')n.preferences.declines[command.catalogId]=command.reason;
 if(command.type==='schedule'){if(!n.firstSavedOn)throw Error('Save a footprint before scheduling a check-up.');if(!validDay(command.day)||command.day<today)throw Error('Choose today or a future date.');n.nextReviewOn=command.day;}
 if(command.type==='reminderLater'){n.preferences.reminder='later';n.preferences.day=command.day;n.preferences.time=command.time;}
 if(command.type==='dismissRestart')n.preferences.restartDismissed=true;
 if(command.type==='undo'){
  if(s.revision!==command.afterRevision)throw Error('Your journey has changed since this update. Use the current action or record controls to make a correction.');
  const restored=structuredClone(command.before);restored.events=s.events;restored.revision=s.revision;restored.drafts=s.drafts;Object.assign(n,restored);
 }
 if('pauseId' in command&&command.pauseId)n.events.push({id:eventId+':pause',kind:'actionState',at:new Date().toISOString(),actionId:command.pauseId,detail:'Paused while accepting another action',before:s.actions.find(a=>a.id===command.pauseId)});
 n.revision=s.revision+1;n.events=[...n.events,{id:eventId,kind:command.type,at:new Date().toISOString(),...('actionId' in command?{actionId:command.actionId}:command.type==='checkIn'?{actionId:command.record.actionId}:{}),...(['actionState','actionTiming','removeAction','goal','weeklySchedule'].includes(command.type)?{before:command.type==='goal'?s.goal:command.type==='weeklySchedule'?{weekly:s.weekly,actions:s.actions.map(a=>({id:a.id,periodStart:a.periodStart,periodEnd:a.periodEnd,reportingPlan:a.reportingPlan}))}:'actionId' in command?s.actions.find(a=>a.id===command.actionId):undefined,detail:command.type==='actionState'?command.state:command.type==='actionTiming'?command.day:command.type==='weeklySchedule'?command.day:command.type}:{}),...(command.type==='checkIn'?{before:s.checkIns.find(c=>c.id===command.record.editId)}:{})}];return n;
}

export const weekdays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
export function validDay(day:string){return /^\d{4}-\d{2}-\d{2}$/.test(day)&&!Number.isNaN(Date.parse(day+'T12:00:00Z'))&&new Date(day+'T12:00:00Z').toISOString().slice(0,10)===day}
export function weekday(day:string){return weekdays[new Date(day+'T12:00:00Z').getUTCDay()]}
export function nextDay(today:string,day:string){const delta=(weekdays.indexOf(day)-new Date(today+'T12:00:00Z').getUTCDay()+7)%7;return addDays(today,delta||7)}
export function nextWeeklyDate(s:Journey,today:string){if(s.weekly)return nextDay(today,s.weekly.day);const dates=activeActions(s).map(a=>a.nextCheckIn).sort();if(!dates.length)return addDays(today,7);return nextDay(today,weekday(dates[0]))}
