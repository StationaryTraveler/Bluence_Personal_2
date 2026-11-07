import {getChatGPTUser} from '@/app/chatgpt-auth';
export async function visitorIdentity(){const user=await getChatGPTUser();return user?.userId||(import.meta.env.DEV?'local-preview-journey':null)}
export async function rememberedVisitor(userId:string){const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode('bluence-welcome:'+userId));return Array.from(new Uint8Array(bytes)).map(b=>b.toString(16).padStart(2,'0')).join('')}
