import {useRef,type ReactNode} from 'react';
import {X} from 'lucide-react';
import {Dialog,DialogContent,DialogTitle,DialogDescription} from '../ui/dialog';
export function PersonalOverlay({open,title,description,onClose,children}:{open:boolean;title:string;description?:string;onClose:()=>void;children:ReactNode}){
 const origin=useRef<HTMLElement|null>(null),last=useRef({title,description,children});
 if(open)last.current={title,description,children};
 const content=open?{title,description,children}:last.current;
 return <Dialog open={open} onOpenChange={v=>!v&&onClose()}><DialogContent className="t-dialog" showCloseButton={false} onOpenAutoFocus={()=>{origin.current=document.activeElement as HTMLElement}} onCloseAutoFocus={e=>{e.preventDefault();if(origin.current?.isConnected)origin.current.focus({preventScroll:true});else document.getElementById('today-title')?.focus()}}><div className="t-dialog-heading"><DialogTitle>{content.title}</DialogTitle><button className="t-icon-button" onClick={onClose} aria-label="Close panel"><X size={20}/></button></div><DialogDescription>{content.description||'Keep your place in the same journey.'}</DialogDescription>{content.children}</DialogContent></Dialog>;
}
