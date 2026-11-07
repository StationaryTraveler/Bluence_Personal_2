import type {Answers, Answer} from './assessment.ts';
import {questions,validAnswer} from './assessment.ts';
import type {Journey,Result,CheckIn} from './domain.ts';

export type ReviewDraft = {
 id:string; step:number; period:string; completed?:boolean; base?:string;
 baseAnswers?:string; edits?:Answers; boundary?:boolean; deferred?:boolean;
};
export type ReviewEvidence = {
 start:string; prior:Result; reports:CheckIn[]; titles:Record<string,string>;
 edits:Answers; boundary:boolean; deferred:boolean; sample:boolean;
 decisions?:string[]; goal?:string;
};
export type ReviewCommand =
 | {type:'beginReview'; id:string}
 | {type:'editReview'; id:string; step?:1|2; answer?:{id:string;value:Answer}; boundary?:boolean; deferred?:boolean}
 | {type:'previewReview'; id:string}
 | {type:'saveReview'; id:string}
 | {type:'finishAdaptation'; id:string};

export function applyReview(s:Journey,c:ReviewCommand,today:string,nextDate:string) {
 const prior=s.footprint;
 if(c.type==='finishAdaptation'){
  const saved=s.reviews.find(r=>r.id===c.id);
  if(!saved)throw Error('This check-up is unavailable.');
  saved.adaptationPending=false;
  return;
 }
 if(c.type==='saveReview'&&s.reviews.some(r=>r.id===c.id))return;
 if(!prior||!s.firstSavedOn)throw Error('A saved footprint is needed before a check-up.');
 const existing=s.drafts.review;
 if(c.type==='beginReview'){
  if(existing&&!existing.completed)return;
  s.drafts.review={id:c.id,step:1,period:s.reviews.at(-1)?.completedOn||s.firstSavedOn,base:prior.id,baseAnswers:JSON.stringify(s.answers||{})};
  return;
 }
 if(!existing||existing.completed||existing.id!==c.id)throw Error('Reopen the current check-up.');
 const d=existing;
 if(c.type==='editReview'){
  if(c.answer){
   const q=questions.find(q=>q.id===c.answer!.id);
   if(!q||!validAnswer(q,c.answer.value))throw Error('Check the value and its units.');
   d.edits={...d.edits,[q.id]:c.answer.value};
  }
  if(c.boundary!==undefined)d.boundary=c.boundary;
  if(c.deferred!==undefined)d.deferred=c.deferred;
  d.step=c.step||2;
  d.base=prior.id;
  d.baseAnswers=JSON.stringify(s.answers||{});
  return;
 }
 if(d.base!==prior.id||d.baseAnswers!==JSON.stringify(s.answers||{}))throw Error('The saved inputs have changed. Return to answers and review them again.');
 // The sample can replay a previously supplied result only when its inputs are identical.
 if(!prior.id.startsWith('sample-')||d.boundary||Object.entries(d.edits||{}).some(([id,a])=>JSON.stringify(a)!==JSON.stringify(s.answers?.[id])))throw Error('Recalculation is unavailable. Your answers are saved for retry.');
 if(c.type==='previewReview'){d.step=3;return}
 if(d.step!==3)throw Error('Review the result before saving.');
 const result={...prior,id:'sample-review-result-'+d.id,date:today};
 const start=s.reviews.at(-1)?.completedOn||s.firstSavedOn;
 s.reviews.push({id:d.id,completedOn:today,result,adaptationPending:true,
  summary:'In this sample, the confirmed inputs are unchanged and the annual estimate stays the same.',
  evidence:{start,prior:{...prior},reports:s.checkIns.filter(r=>!r.voided&&r.occurredOn>=start&&r.occurredOn<=today).map(r=>({...r})),titles:Object.fromEntries(s.actions.map(a=>[a.id,a.title])),edits:{...d.edits},boundary:!!d.boundary,deferred:!!d.deferred,sample:true}});
 s.startingPoint??={...prior};
 s.footprint=result;
 s.nextReviewOn=nextDate;
 s.longAbsence=false;
 d.completed=true;
 d.step=4;
}
