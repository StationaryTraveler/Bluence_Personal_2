export type Answer={value:string;quality:'supplied'|'approximate'|'unknown'};
export type Answers=Record<string,Answer>;
export type AssessmentDraft={id:string;kind:'E2'|'F2';optional:boolean;question:string;answers?:Answers;step?:string;entryTarget?:string;origin?:string;period?:string;changeReason?:string;savedAt?:string;baseResultId?:string};
export type Question={id:string;section:string;title:string;help:string;unit?:string;type:'number'|'select'|'text';options?:string[];min?:number;max?:number;when?:{id:string;not:string[]}};
export const sections=['Introduction','Home & Energy','Daily Mobility','Flights & Long-Distance Travel','Food & Diet','Water Consumption','Goods & Services','Review'];
const number=(id:string,section:string,title:string,unit:string,help:string,min=0,max=1000000):Question=>({id,section,title,unit,help,type:'number',min,max});
const select=(id:string,section:string,title:string,options:string[],help:string):Question=>({id,section,title,options,help,type:'select'});
const text=(id:string,section:string,title:string,help:string):Question=>({id,section,title,help,type:'text'});
export const questions:Question[]=[
 text('country',sections[1],'Which country or region do you live in?','Used to select a compatible calculation context and country reference when supported data is connected.'),
 number('household',sections[1],'How many people share your home?','people','Household consumption is allocated per person. Include yourself.',1,100),
 select('homeType',sections[1],'What type of home do you live in?',['Apartment','Detached house','Semi-detached / terraced house','Other'],'Choose the closest description.'),
 number('area',sections[1],'What is your home’s floor area?','m²','Use the whole shared home, not only your room.'),
 number('electricity',sections[1],'How much electricity did your household use?','kWh / reference year','Enter annual metered use. If you only have a bill amount, leave this unknown; no bill-to-energy proxy is connected.'),
 select('electricitySource',sections[1],'What is your electricity arrangement?',['Standard grid supply','Renewable tariff','On-site solar','Mixed supply'],'A renewable tariff does not automatically mean zero emissions. Evidence and supported accounting rules are needed.'),
 select('heating',sections[1],'What is your main heating source?',['Natural gas','Heating oil','Electric resistance','Heat pump','District heating','Biomass','No heating'],'This determines relevant energy follow-ups.'),
 {...number('heatingUse',sections[1],'How much energy did your main heating use?','kWh / reference year','Use separately metered heating only. Do not repeat electricity already included in household electricity.'),when:{id:'heating',not:['No heating','Electric resistance','Heat pump']}},
 text('secondaryHeating',sections[1],'Do you use a second heating source?','Describe fuel, amount and units if known. This context is not converted to emissions automatically.'),
 select('cooling',sections[1],'How often do you use home cooling?',['No cooling','Occasionally in warm months','Most days in warm months','Throughout the year'],'Avoid double-counting cooling electricity already included in your annual meter reading.'),
 select('insulation',sections[1],'How would you describe the home’s insulation?',['Well insulated','Some insulation','Little insulation'],'A contextual efficiency characteristic; not an automatic detail-score point.'),
 text('appliances',sections[1],'Any relevant appliance or efficiency details?','For example, a shared tumble dryer or a recent appliance replacement. Optional context.'),
 number('walkCycle',sections[2],'How far do you walk or cycle in a typical week?','km / week','Include everyday journeys. This is activity context, not avoided emissions.'),
 select('vehicle',sections[2],'What personal vehicle do you usually travel in?',['No personal vehicle','Petrol car','Diesel car','Hybrid car','Electric car','Motorcycle'],'Choose your main mode. Shared journeys can be described later.'),
 {...number('carDistance',sections[2],'How far do you travel in that vehicle each week?','km / week','Use total distance, including both legs of return journeys.'),when:{id:'vehicle',not:['No personal vehicle']}},
 {...number('occupancy',sections[2],'How many people usually share those journeys?','people','Include yourself.',1,100),when:{id:'vehicle',not:['No personal vehicle']}},
 {...text('efficiency',sections[2],'Do you know the vehicle’s efficiency?','Include the unit, for example L/100 km or kWh/100 km. No unit conversion is guessed.'),when:{id:'vehicle',not:['No personal vehicle']}},
 number('bus',sections[2],'How far do you travel by bus in a typical week?','passenger-km / week','Enter your own total distance, including return legs.'),
 number('rail',sections[2],'How far do you travel by local rail or metro each week?','passenger-km / week','Exclude intercity journeys reported in the next section.'),
 number('taxi',sections[2],'How far do you travel by taxi or ride-hailing each week?','km / week','Do not repeat trips counted under your personal vehicle.'),
 number('remoteDays',sections[2],'How many days a week do you usually work remotely?','days / week','Context only. This does not automatically subtract commuting.',0,7),
 select('flights',sections[3],'Did you fly during the reference year?',['No flights','One or more flights'],'If you did not fly, flight details are skipped.'),
 {...text('flightRoutes',sections[3],'Which flights did you take?','For each route: origin, destination, number of journeys, one-way or return, and cabin class. Do not include identifying booking details.'),when:{id:'flights',not:['No flights']}},
 number('intercityRail',sections[3],'How far did you travel by intercity rail?','passenger-km / reference year','Include both legs of return journeys. Keep this separate from weekly local rail.'),
 number('coach',sections[3],'How far did you travel by long-distance coach?','passenger-km / reference year','Enter the total for the stated reference year.'),
 select('diet',sections[4],'Which dietary pattern is closest to yours?',['Mixed diet','Lower-meat diet','Pescatarian','Vegetarian','Vegan'],'Choose the closest pattern; the next answers can provide more detail.'),
 number('redMeat',sections[4],'How often do you eat beef or lamb?','meals / week','Enter a typical week. Zero is a valid answer if you do not eat these foods.',0,50),
 number('otherMeat',sections[4],'How often do you eat other meat or fish?','meals / week','Include poultry, pork and fish.',0,50),
 number('dairy',sections[4],'How often do you consume dairy?','servings / week','Use a typical week.',0,100),
 text('sourcing',sections[4],'What do you know about how your food is sourced?','Optional context about seasonality or sourcing. Local food is not automatically assigned a lower footprint.'),
 number('eatingOut',sections[4],'How often do you eat out or order prepared meals?','meals / week','Describe your usual routine.',0,50),
 select('foodWaste',sections[4],'How much edible food does your household usually discard?',['Very little','Some each week','A substantial amount'],'This is a qualitative answer, not a measured waste quantity.'),
 select('wasteDisposal',sections[4],'How is food waste usually handled?',['General waste','Separate food-waste collection','Home composting','Mixed methods'],'Select the closest description.'),
 select('waterData',sections[5],'Do you know your household’s annual water use?',['Meter or bill available','Only an approximate volume','No volume available'],'Water is retained as context until a supported carbon calculation is connected.'),
 {...number('waterVolume',sections[5],'How much water did your household use?','m³ / reference year','Use household volume for the full reference year; household size supplies the allocation context.'),when:{id:'waterData',not:['No volume available']}},
 text('waterHabits',sections[5],'Any useful water-use details?','Optional: showers/baths, laundry, dishwashing, outdoor uses, efficiency or reuse. These do not earn Estimate detail points by themselves.'),
 number('clothing',sections[6],'How many new clothing items did you buy?','items / reference year','Include new purchases. Record second-hand choices in the next question.'),
 text('reuse',sections[6],'What did you buy second-hand, repair or reuse?','Describe useful context. No avoided-carbon credit is inferred.'),
 text('electronics',sections[6],'Which electronics did you buy or replace?','List type, number, and whether new or second-hand during the reference year.'),
 text('householdGoods',sections[6],'Any significant furniture or appliance purchases?','List item type, quantity and how many people share it.'),
 text('services',sections[6],'Any other significant goods or services?','Include the type, amount and units if known. Unsupported items remain context rather than invented carbon totals.')
];
export function applicableQuestions(answers:Answers){return questions.filter(q=>!q.when||!answers[q.when.id]||answers[q.when.id].quality==='unknown'||!q.when.not.includes(answers[q.when.id].value))}
export function validAnswer(q:Question,a:Answer){if(a.quality==='unknown')return true;if(!a.value.trim())return false;if(q.type==='number')return Number.isFinite(Number(a.value))&&Number(a.value)>=(q.min??0)&&Number(a.value)<=(q.max??Infinity);if(q.type==='select')return !!q.options?.includes(a.value);return a.value.length<=1500}
