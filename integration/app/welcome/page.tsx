import Welcome from './welcome';
import {visitorIdentity} from '@/lib/welcome-routing';
export const dynamic='force-dynamic';
export default async function Page(){return <Welcome signedIn={!!await visitorIdentity()}/>}
