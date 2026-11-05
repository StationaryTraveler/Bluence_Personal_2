import {createRoot} from 'react-dom/client';
import {useEffect, useState} from 'react';
import Welcome from './app/welcome/welcome';
import Today from './app/today/today';
import {routes, rememberEntry} from './lib/journey';
import './app/globals.css';
function Application(){
 const [address,setAddress]=useState(location.pathname+location.search);
 const [pathname,query='']=address.split('?');
 const search=query?'?'+query:'';
 const navigate=(path:string)=>{history.pushState(null,'',path);setAddress(location.pathname+location.search)};
 useEffect(()=>{
  const pop=()=>setAddress(location.pathname+location.search);
  const click=(event:MouseEvent)=>{
   if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
   const anchor=(event.target as Element).closest('a');
   if(!anchor||anchor.target==='_blank'||anchor.hasAttribute('download'))return;
   const url=new URL(anchor.href);
   if(url.origin!==location.origin||url.hash)return;
   if(url.pathname.startsWith('/personal/')){
    event.preventDefault();
    if(url.pathname===routes.estimate||url.pathname===routes.signIn)rememberEntry(url.pathname,location.pathname);
    navigate(url.pathname+url.search);
   }
  };
  window.addEventListener('popstate',pop);document.addEventListener('click',click);
  return()=>{window.removeEventListener('popstate',pop);document.removeEventListener('click',click)};
 },[]);
 if(pathname.startsWith('/personal/account')||pathname.startsWith('/personal/today')||pathname.startsWith('/personal/actions')||pathname.startsWith('/personal/footprint')||pathname.startsWith('/personal/check-ups')||new URLSearchParams(search).get('from')==='today')return <Today pathname={pathname} search={search} navigate={navigate}/>;
 return <Welcome signedIn={false} pathname={pathname} onReturn={()=>navigate(routes.welcome)}/>;
}
createRoot(document.getElementById('root')!).render(<Application/>);
