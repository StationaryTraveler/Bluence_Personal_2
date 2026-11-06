import {useEffect,useState} from 'react';
import {Sun,Moon} from 'lucide-react';
const key='bluence.appearance.v1';
export function usePersonalTheme(){
 const [theme,setTheme]=useState<'dark'|'light'>(()=>{try{return localStorage.getItem(key)==='light'?'light':'dark'}catch{return 'dark'}});
 useEffect(()=>{document.documentElement.dataset.personalTheme=theme;return()=>{delete document.documentElement.dataset.personalTheme}},[theme]);
 useEffect(()=>{const onStorage=(e:StorageEvent)=>{if(e.key===key)setTheme(e.newValue==='light'?'light':'dark')};window.addEventListener('storage',onStorage);return()=>window.removeEventListener('storage',onStorage)},[]);
 const toggle=()=>setTheme(old=>{const next=old==='dark'?'light':'dark';try{localStorage.setItem(key,next)}catch{/* Preference still works for this visit. */}return next});
 return {theme,toggle};
}
export function ThemeButton({theme,toggle}:{theme:'dark'|'light';toggle:()=>void}){return <button className="t-icon-button t-theme-toggle" type="button" onClick={toggle} aria-label={`Switch to ${theme==='dark'?'light':'dark'} mode`} title={`Switch to ${theme==='dark'?'light':'dark'} mode`}>{theme==='dark'?<Sun size={18}/>:<Moon size={18}/>}</button>}
