import {applyCommand,emptyJourney,localDay,type Journey,type Command} from './domain.ts';
export const PERSONAL_KEY='bluence.personal.v1';
export function validateJourney(value:unknown):Journey {
 const s=value as Journey;
 if(!s||s.schemaVersion!==1||!Number.isInteger(s.revision)||!Array.isArray(s.actions)||!Array.isArray(s.checkIns)||!Array.isArray(s.reviews)||!Array.isArray(s.catalog)||!Array.isArray(s.events)||!s.drafts||!s.preferences?.declines||typeof s.timezone!=='string')throw Error('This saved journey cannot be opened safely. Your stored data has not been changed.');
 localDay(s.timezone);return s;
}
export function readJourney(key:string,fallback?:Journey):Journey {
 const raw=localStorage.getItem(key);return raw?validateJourney(JSON.parse(raw)):structuredClone(fallback||emptyJourney(Intl.DateTimeFormat().resolvedOptions().timeZone));
}
export async function commitJourney(key:string,expected:Journey,command:Command,id:string):Promise<Journey> {
 const run=()=>{
  if(expected.revision>0&&localStorage.getItem(key)===null)throw Error('These local records were removed. Refresh before making another change.');
  const current=readJourney(key,expected);
  if(current.events.some(e=>e.id===id))return current;
  if(current.revision!==expected.revision)throw Error('Your journey changed in another tab. Refresh the saved state, then try again. Your input is still here.');
  if(key===PERSONAL_KEY&&(command.type==='previewReview'||command.type==='saveReview'))throw Error('Calculation service unavailable. Your review draft is saved.');
  const next=applyCommand(current,command,id,localDay(current.timezone));
  localStorage.setItem(key,JSON.stringify(next));
  return next;
 };
 return navigator.locks?navigator.locks.request(key,run):run();
}
