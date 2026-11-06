import {useEffect,useState,type ReactNode} from 'react';
import {ArrowLeft,CalendarDays,CheckCircle2} from 'lucide-react';
import Actions,{type ActionsProps} from '../actions/actions';
import {Estimate} from '../footprint/footprint';
import {applicableQuestions,validAnswer,type Answer,type Question} from '../../lib/personal/assessment';
import {displayDate,localDay,recordId,reviewDate,reportingAction,type Command,type CheckIn} from '../../lib/personal/domain';
import './checkups.css';

const root='/personal/check-ups/';
const steps=['What you did','What changed','Your new number','Your next step','Your goal'];
const date=(day:string)=>displayDate(day,{year:'numeric'});
function Button({children,onClick,secondary=false,disabled=false}:{children:ReactNode;onClick:()=>void;secondary?:boolean;disabled?:boolean}){
 return <button className={'t-button'+(secondary?' secondary':'')} disabled={disabled} onClick={onClick}>{children}</button>;
}
function Help({title,children}:{title:string;children:ReactNode}){
 return <details className="g-help"><summary>{title}</summary><p>{children}</p></details>;
}
function Field({q,answer,save}:{q:Question;answer?:Answer;save:(a:Answer)=>Promise<boolean>}){
 const [value,setValue]=useState(answer?.value||'');
 const [message,setMessage]=useState('');
 const saveAnswer=async(a:Answer)=>{
  if(!validAnswer(q,a)){setMessage('Check the value and its units.');return}
  if(await save(a)){setValue(a.value);setMessage('Saved to this check-up.')}
 };
 return <div className="g-field"><label>{q.title}{q.unit&&' · '+q.unit}
 {q.type==='select'?<select value={value} onChange={e=>{setValue(e.target.value);setMessage('Unsaved answer')}}><option value="">Choose an answer</option>{q.options?.map(o=><option key={o}>{o}</option>)}</select>:
 <input type={q.type==='number'?'number':'text'} min={q.min} max={q.max} value={value} onChange={e=>{setValue(e.target.value);setMessage('Unsaved answer')}}/>}</label>
 <p>{q.help}</p><div className="p-row"><Button secondary onClick={()=>saveAnswer({value,quality:'supplied'})}>Confirm answer</Button>
 <button className="t-text-button" onClick={()=>saveAnswer({value:'',quality:'unknown'})}>I don’t know</button></div>
 <small role="status">{message||(answer?.quality==='unknown'?'Recorded as unknown':'')}</small></div>
}
function activity(r:CheckIn){return r.outcome==='activity'?r.quantity+' occurrence'+(r.quantity===1?'':'s'):r.outcome==='obstacle'?'Obstacle · '+(r.obstacle||'Details not supplied'):'Did not do this';}

export default function Checkups(p:ActionsProps){
 const {state:s,mutate,go}=p;
 const today=localDay(s.timezone),next=reviewDate(s),params=new URLSearchParams(p.search);
 const key=p.pathname.slice(root.length),from=params.get('from')||'today';
 const origin=from==='footprint'?'/personal/footprint/over-time':from==='actions'?'/personal/actions':'/personal/today';
 const draft=s.drafts.review,open=draft&&!draft.completed?draft:undefined;
 const review=s.reviews.find(r=>r.id===key),latest=s.reviews.at(-1);
 const [day,setDay]=useState(next&&next>=today?next:today);
 const [status,setStatus]=useState(''),[section,setSection]=useState('Priority gaps');
 const [actionPage,setActionPage]=useState('/personal/actions');
 const start=latest?.completedOn||s.firstSavedOn;
 const periodReports=s.checkIns.filter(r=>!r.voided&&start&&r.occurredOn>=start&&r.occurredOn<=today);
 const currentStep=review&&review===latest?Number(params.get('step')):0;
 const step=key==='new'?open?.step||1:currentStep;
 const answers={...s.answers,...open?.edits},all=applicableQuestions(answers);
 const priority=['carDistance','electricity','diet'].filter(id=>!answers[id]||answers[id].quality==='unknown');
 const fields=all.filter(q=>section==='Priority gaps'?priority.includes(q.id):section==='Situation'?['country','household','homeType'].includes(q.id):q.section===section);
 const edit=(patch:Omit<Extract<Command,{type:'editReview'}>,'id'|'type'>)=>open?mutate({type:'editReview',id:open.id,...patch}):Promise.resolve(false);
 const begin=async()=>{if(open||await mutate({type:'beginReview',id:recordId()}))go(root+'new')};
 const back=<button className="p-back" onClick={()=>go(origin)}><ArrowLeft size={16}/>Back to {from==='footprint'?'Footprint over time':from==='actions'?'Actions':'Today'}</button>;
 const scheduleLink=<button className="t-text-button" onClick={()=>go(root+'schedule')}>View check-up schedule</button>;
 useEffect(()=>{window.scrollTo({top:0})},[key,step]);
 const contextualMutate:ActionsProps['mutate']=(c,u)=>review&&(['goal','actionTiming','actionState','add'].includes(c.type))?mutate({type:'reviewDecision',reviewId:review.id,command:c as Extract<Command,{type:'add'|'goal'|'actionTiming'|'actionState'}>},u):mutate(c,u);
 const finish=async()=>{if(review&&await mutate({type:'finishAdaptation',id:review.id}))go('/personal/today')};
 let content:ReactNode;
 if(key==='schedule'){
  content=<><div className="p-intro"><span className="p-eyebrow">CHECK-UP SCHEDULE</span><h1>Your next check-up.</h1></div>
  <section className="p-card"><CalendarDays/><h2>{next?date(next):'After your first saved estimate'}</h2>
  <p>{latest?'Seasonal check-up · about three months after your last completed review.':'First check-up · 30 calendar days after you first save your footprint.'} {next&&next<=today?'Ready when you are.':''}</p>
  {(open||next&&next<=today)&&<Button onClick={begin}>{open?'Resume check-up':'Start check-up'}</Button>}
  {next&&<div className="g-field"><label>Choose another invitation date<input type="date" min={today} value={day} onChange={e=>{setDay(e.target.value);setStatus('')}}/></label>
  <div className="p-row"><Button disabled={p.busy||!day} onClick={async()=>{if(await mutate({type:'schedule',day}))setStatus('Check-up scheduled for '+date(day)+'.')}}>Save schedule</Button><Button secondary onClick={()=>{setDay(next);go(origin)}}>Cancel</Button></div></div>}</section>
  <section className="p-card"><h2>Weekly check-ins</h2><p>Your actions stay available throughout the review. Your preferred reminder time is {s.preferences.day} at {s.preferences.time} ({s.timezone}). Email delivery is off.</p><button className="t-text-button" onClick={p.onReminders}>Change reminder preferences</button></section></>;
 }else if(review&&(step===4||step===5)){
  const link=(dest:string)=>{if(dest==='/personal/actions/goal')go(root+review.id+'?step=5');else if(dest.startsWith('/personal/actions')){if(step===5)go(root+review.id);else setActionPage(dest)}else go(dest)};
  content=<><span className="p-eyebrow">CHECK-UP COMPLETE · OPTIONAL STEP {step} OF 5</span>
  <h1>{step===4?'What would work for you next?':'Choose a commitment.'}</h1>
  <div className="p-row"><Button secondary onClick={finish}>{step===5?'Skip goal and finish':'Keep my actions and finish'}</Button>{step===4&&<Button secondary onClick={()=>go(root+review.id+'?step=5')}>Want a target?</Button>}</div>
  <Actions {...p} key={step+'-'+actionPage} feedback={undefined} pathname={step===5?'/personal/actions/goal':actionPage} mutate={contextualMutate} go={link} embedded/></>;
 }else if(review){
  const evidence=review.evidence;
  content=<><div className="p-intro"><span className="p-eyebrow">{s.reviews[0].id===review.id?'FIRST':'SEASONAL'} CHECK-UP · {date(review.completedOn)}</span><h1>Check-up completed.</h1>
  {evidence&&<p>{date(evidence.start)} – {date(review.completedOn)}</p>}</div>
  <section className="p-card"><CheckCircle2/><Estimate result={review.result}/><p>{review.summary}</p>
  {evidence&&<p>Previous annual estimate · {date(evidence.prior.date)} · {evidence.prior.total??'Unavailable'} t CO₂e per person.</p>}
  <Help title="Help me understand this check-up">This summary uses the estimate saved on the completion date. Activity reports describe what happened. The available data cannot attribute a footprint difference to an individual action.</Help></section>
  <section className="p-card"><h2>What you did</h2>{evidence?.reports.length?evidence.reports.map(r=><p key={r.id}>{date(r.occurredOn)} · {activity(r)} · <button className="t-text-button" onClick={()=>go('/personal/actions/'+r.actionId)}>{evidence.titles[r.actionId]||'View action'}</button></p>):<p>{evidence?'No reports in this review period.':'An activity snapshot was not supplied with this review.'}</p>}
  <h2>What changed</h2><p>{evidence?'The confirmed sample inputs matched the previous estimate.':review.summary}</p>
  <h3>Resulting actions and goal</h3>{review.decisions?.map((x,i)=><p key={i}>{x}</p>)}{!review.decisions?.length&&<p>No commitment changes recorded at this review.</p>}
  {review===latest&&<Button secondary onClick={()=>go(root+review.id+'?step=4')}>{review.adaptationPending?'Continue adapting actions':'Review next steps'}</Button>}</section>
  <section className="p-card"><h2>Your next check-up</h2><p>{next&&date(next)}</p>{scheduleLink}<div className="p-row"><button className="t-text-button" onClick={()=>go('/personal/footprint/check')}>Continue remaining footprint questions</button><button className="t-text-button" onClick={()=>go('/personal/footprint/over-time')}>Footprint over time</button><button className="t-text-button" onClick={()=>go('/personal/today')}>Back to Today</button></div></section></>;
 }else if(key!=='new'||!open){
  content=<section className="p-card"><span className="p-eyebrow">CHECK-UP</span><h1>{key!=='new'?'Review unavailable':latest?'Your seasonal check-up':'Your first check-up'}</h1><p>{!s.footprint?'Save your first footprint estimate to schedule a review.':next&&next>today?'Your next invitation is on '+date(next)+'.':'Review your activity, update your answers, and choose your next step.'}</p>
  {key==='new'&&s.footprint&&next&&next<=today&&<Button onClick={begin}>Begin review</Button>} {scheduleLink}</section>;
 }else{
  content=<><div className="p-intro"><span className="p-eyebrow">FOOTPRINT REVIEW · {start&&date(start)} – {date(today)}</span>
  <h1>{latest?'Your check-up.':'Your first check-up.'}</h1><p>Review what happened, update what changed, and choose a next step that fits.</p></div>
  <ol className="g-steps" aria-label="Review steps">{steps.map((label,i)=><li key={label} aria-current={i+1===step?'step':undefined}><b>0{i+1}</b> {label}{i>=3&&<small>Optional</small>}</li>)}</ol>
  <section className="p-card"><span className="p-eyebrow">STEP {step} OF 5 · {p.busy?'SAVING':'DRAFT'}</span>
  {step===1?<><h2>What you did</h2><p>Review the check-ins you recorded during this period. You can continue with any gaps.</p>
  {s.actions.map(a=><div className="g-record" key={a.id}><h3>{a.title}</h3><small>{a.state}</small>{periodReports.filter(r=>r.actionId===a.id).map(r=><p key={r.id}>{date(r.occurredOn)} · {activity(r)} <button className="t-text-button" onClick={()=>p.onCheckIn(a,{...r,editId:r.id})}>Correct report</button></p>)}
  {!periodReports.some(r=>r.actionId===a.id)&&<p>Unreported during this period.</p>}{!a.removed&&['Doing','To do'].includes(a.state)&&<button className="t-text-button" onClick={()=>p.onCheckIn(reportingAction(a,today))}>Add a check-in</button>}</div>)}
  {!s.actions.length&&<p>You can review your footprint before choosing your first action.</p>}
  {periodReports.some(r=>r.outcome==='obstacle')&&<Help title="Help me understand what got in the way">Read the obstacle you recorded above. You can correct it here and choose a different action after the review.</Help>}
  <Button disabled={p.busy} onClick={()=>edit({step:2})}>Confirm and continue to what changed</Button></>:
  step===2?<><h2>What changed?</h2><p>Start with the gaps most relevant to travel, household energy and food. Choose another topic only if something changed.</p>
  <label>Review topic<select value={section} onChange={e=>setSection(e.target.value)}>{['Priority gaps','Situation',...new Set(all.map(q=>q.section))].map(x=><option key={x}>{x}</option>)}</select></label>
  {fields.map(q=><Field key={q.id} q={q} answer={answers[q.id]} save={value=>edit({answer:{id:q.id,value}})}/>)}
  {!fields.length&&<p>No priority gaps in this group.</p>}
  <label><input type="checkbox" checked={!!open.boundary} onChange={e=>{void edit({boundary:e.target.checked});setSection('Situation')}}/> My home or household situation changed</label>
  {open.boundary&&<p>A move or household change can affect how the two estimates compare. Your original starting point is retained.</p>}
  <Help title="Tell me what changed">Copilot is unavailable. Select the relevant topic and confirm the fields above. Travel uses a typical week and flights use the reference year.</Help>
  <label><input type="checkbox" checked={!!open.deferred} onChange={e=>edit({deferred:e.target.checked})}/> Complete remaining questions later in Footprint</label>
  <div className="g-record"><Estimate result={s.footprint} caption="LAST SAVED ESTIMATE"/><p>Recalculation needs a connected calculation service. {p.sample?'With unchanged inputs you can preview the saved sample result.':''}</p></div>
  <div className="p-row"><Button secondary onClick={()=>edit({step:1})}>Back</Button><Button disabled={p.busy} onClick={()=>mutate({type:'previewReview',id:open.id})}>{p.sample?'Review updated footprint':'Calculate updated footprint'}</Button></div></>:
  <><h2>Your updated footprint</h2><Estimate result={s.footprint} caption="ILLUSTRATIVE REPLAY · PER PERSON"/>
  <p>The sample uses the same confirmed inputs as the estimate dated {s.footprint&&date(s.footprint.date)}. Its annual estimate shows no change.</p>
  <Help title="About this comparison">Estimate detail describes input coverage. Category changes and numerical attribution are unavailable for this example.</Help>
  <div className="p-row"><Button secondary onClick={()=>edit({step:2})}>Back to answers</Button><Button disabled={p.busy} onClick={async()=>{if(await mutate({type:'saveReview',id:open.id}))go(root+open.id)}}>Save check-up</Button></div></>}
  </section></>;
 }
 return <main id="today-main" className="p-main g-main">{back}{p.error&&<div className="t-error" role="alert">{p.error} <button className="t-text-button" onClick={p.onRefresh}>Refresh saved state</button></div>}{status&&<p role="status" className="t-feedback">{status}</p>}{p.feedback}{content}</main>
}
