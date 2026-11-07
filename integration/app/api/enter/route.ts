import {visitorIdentity,rememberedVisitor} from '@/lib/welcome-routing';
import {chatGPTSignInPath} from '@/app/chatgpt-auth';
export async function GET(req:Request){const id=await visitorIdentity();if(!id)return Response.redirect(new URL(chatGPTSignInPath('/api/enter'),req.url),303);return new Response(null,{status:303,headers:{Location:'/personal/today','Cache-Control':'no-store','Set-Cookie':`bluence_returning=${await rememberedVisitor(id)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=31536000${import.meta.env.DEV?'':'; Secure'}`}})}
