import {type Journey,type Result,detailBand} from './domain.ts';
export type Category={id:string;name:string;value?:number;color:string;driver:string;question:string;constraint:string;catalogId?:string};
export function resultLabel(r?:Result){
 if(!r)return 'No saved estimate';
 if(r.coverage<80&&r.range)return `About ${r.range[0].toFixed(1)}–${r.range[1].toFixed(1)}`;
 return typeof r.total==='number'?`About ${r.total.toFixed(1)}`:'Estimate unavailable';
}
export function detailLabel(r:Result){return !Number.isFinite(r.coverage)?'Estimate detail not yet assessed':r.coverage<80?'Add more detail to narrow your estimate':`Estimate detail: ${detailBand(r.coverage)}%`}
export const categoryDefinitions:Category[]=[
 {id:'travel',name:'Travel',color:'#7A3296',driver:'Everyday car journeys',question:'carDistance',constraint:'Safe routes, local transport, accessibility and time affect what is possible.',catalogId:'walk-short'},
 {id:'home',name:'Home energy',color:'#248FF2',driver:'Household energy use',question:'electricity',constraint:'Tenancy, the building and the energy supply may limit your options.',catalogId:'air-dry'},
 {id:'food',name:'Food',color:'#24C9A5',driver:'Your usual dietary pattern',question:'diet',constraint:'Health needs, availability, culture and budget shape food choices.',catalogId:'plant-lunch'},
 {id:'goods',name:'Goods & services',color:'#A7BD36',driver:'Purchases and services',question:'clothing',constraint:'Durability, repair options and essential purchases affect your choices.'},
 {id:'other',name:'Other',color:'#6F6575',driver:'Other included activities',question:'waterData',constraint:'Water and unsupported activities are kept explicit; they are never assumed to be zero.'}
];
/** Visual fixtures only. Never used as a calculator, benchmark or personal input. */
export function categories(s:Journey,sample:boolean):Category[]{return categoryDefinitions.map((c,i)=>({...c,...(sample&&s.footprint?{value:(s.footprint.id==='sample-result-2'?[2.5,1.5,1.1,.8,.2]:[2.7,1.5,1.2,.8,.2])[i]}:{})}))}
export function startingPoint(s:Journey,sample:boolean):Result|undefined{
 if(s.startingPoint)return s.startingPoint;
 if(sample&&s.firstSavedOn)return {id:'sample-start',date:s.firstSavedOn,total:6.4,coverage:85,partial:false};
 return undefined;
}
export function safeOrigin(value?:string){return value?.startsWith('/personal/today')?'/personal/today':'/personal/footprint'}
