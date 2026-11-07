import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Bluence · Personal Carbon Copilot',description:'Understand your footprint. Make a plan that fits your life. Bluence Personal Carbon Copilot is a sole property of PLANET-B.',icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body>{children}</body></html>}
