import {useEffect,useRef,useState} from 'react';
import {recordId,emptyJourney,type Journey,type Command} from '../../lib/personal/domain';
import {readJourney,commitJourney,PERSONAL_KEY} from '../../lib/personal/store';
import {sampleJourney,type Scenario} from '../../lib/personal/examples';
export function useJourney(example:Scenario|null){
 const timezone=Intl.DateTimeFormat().resolvedOptions().timeZone;
 const key=example?`bluence.example.${example}.v1`:PERSONAL_KEY;
 const fallback=useRef(example?sampleJourney(example,timezone):emptyJourney(timezone));
 const [state,setState]=useState<Journey>(fallback.current),[error,setError]=useState(''),[loading,setLoading]=useState(true),[available,setAvailable]=useState(false),[busy,setBusy]=useState(false),[lastUndo,setUndo]=useState<{before:Journey;afterRevision:number}|null>(null);
 const current=useRef(state),queue=useRef(Promise.resolve());
 const refresh=()=>{try{const s=readJourney(key,fallback.current);current.current=s;setState(s);setError('');setAvailable(true);setLoading(false)}catch(e){setError(e instanceof Error?e.message:'Saved information is unavailable.');setLoading(false)}};
 useEffect(()=>{refresh();const changed=(event:StorageEvent)=>{if(event.key===key)refresh()};window.addEventListener('storage',changed);return()=>window.removeEventListener('storage',changed)},[key]);
 const mutate=(command:Command,undoable=false):Promise<boolean>=>{
  const eventId=recordId();let resolve!:(ok:boolean)=>void;const result=new Promise<boolean>(r=>resolve=r);
  queue.current=queue.current.then(async()=>{setBusy(true);try{const before=current.current;const next=await commitJourney(key,before,command,eventId);current.current=next;setState(next);setError('');if(undoable)setUndo({before,afterRevision:next.revision});else if(command.type==='undo')setUndo(null);resolve(true)}catch(e){setError(e instanceof Error?e.message:'Could not save. Your input has been retained.');resolve(false)}finally{setBusy(false)}});return result;
 };
 const undo=async()=>lastUndo?mutate({type:'undo',...lastUndo}):false;
 return {state,error,loading,available,busy,mutate,undo,lastUndo,refresh,key};
}
