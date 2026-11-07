/** Stable journey entry points. No page owns a separate assessment or action record. */
export const routes={welcome:'/personal/welcome',today:'/personal/today',estimate:'/personal/estimate',signIn:'/personal/sign-in',help:'/personal/help',method:'/personal/how-we-calculate',privacy:'/personal/privacy',terms:'/personal/terms'} as const;
export const ENTRY_KEY='bluence.navigation.v1';
/** Navigation context only. This is neither authentication nor consent to save an action. */
export function rememberEntry(destination:string,origin:string){
 try{
  const raw=sessionStorage.getItem(ENTRY_KEY);
  let previous:Record<string,unknown>={};
  if(raw){try{const parsed=JSON.parse(raw);if(parsed&&typeof parsed==='object'&&!Array.isArray(parsed))previous=parsed}catch{return}}
  sessionStorage.setItem(ENTRY_KEY,JSON.stringify({...previous,schemaVersion:1,destination,origin,updatedAt:new Date().toISOString()}));
 }catch{/* Navigation remains usable when browser storage is unavailable. */}
}
