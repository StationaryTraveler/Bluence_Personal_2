import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import Welcome from './welcome/welcome';
import {visitorIdentity,rememberedVisitor} from '@/lib/welcome-routing';
export const dynamic='force-dynamic';
export default async function Page(){const id=await visitorIdentity();const jar=await cookies();if(id&&jar.get('bluence_returning')?.value===await rememberedVisitor(id))redirect('/personal/today');return <Welcome signedIn={!!id}/>}
