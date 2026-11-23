export const DIMENSIONS = {
  body:{name:'Understand your body',article:'body-curiosity',reason:'You chose learning about your body or the basics of sexual wellness.'},
  confidence:{name:'Make room for confidence',article:'confidence-without-performance',reason:'You mentioned confidence, pressure, or wanting to feel more at ease.'},
  communication:{name:'Find the words',article:'talk-about-needs',reason:'Your answers point toward talking about needs, boundaries, or something that feels difficult to say.'},
  connection:{name:'Reconnect, gently',article:'ten-minute-check-in',reason:'You’re interested in shared connection or making time to feel closer.'},
  comfort:{name:'Put comfort first',article:'when-intimacy-hurts',reason:'You mentioned physical discomfort or an interest in comfort.'},
  performance:{name:'Take the pressure off',article:'performance-pressure',reason:'You selected performance concerns or a recurring change you want to understand.'},
  desire:{name:'Get curious about desire',article:'different-desires',reason:'You want to understand desire, arousal, or differences in interest.'},
  products:{name:'Choose with understanding',article:'thoughtful-product-choices',reason:'You’re interested in understanding wellness products before choosing one.'},
  care:{name:'Prepare for care',article:'prepare-for-care',reason:'Your answers suggest that a qualified professional could help you explore a persistent concern, discomfort, or possible medication effects.'}
};
const o=(id,label,weights={})=>({id,label,weights});
export const QUESTIONS=[
 {id:'goal',title:'What brings you here today?',note:'Start with what feels most useful. There’s no wrong door.',options:[o('confidence','I want to feel more confident',{confidence:5}),o('connection','I want to feel closer to someone',{connection:5,communication:1}),o('body','I want to understand my body',{body:5}),o('explore','I’m curious about what I enjoy',{desire:3,body:2}),o('concern','I have a concern I want to understand',{care:2,body:2})]},
 {id:'context',title:'Who are you exploring for?',note:'Your relationship structure doesn’t have to fit a box.',options:[o('solo','Myself',{confidence:2,body:1}),o('partner','Myself and a partner or partners',{connection:3,communication:1}),o('both','A little of both',{confidence:1,connection:2}),o('unsure','I’m figuring that out',{body:1})]},
 {id:'interest',title:'Where would a little clarity help?',note:'Pick the one you’d most like to start with.',options:[o('words','Talking about needs or boundaries',{communication:6}),o('desire','Desire or arousal',{desire:6}),o('performance','Performance concerns',{performance:6,confidence:1}),o('comfort','Comfort during intimacy',{comfort:6}),o('products','Understanding wellness products',{products:6})]},
 {id:'duration',title:'How long has this been on your mind?',note:'This helps place your interest in context. It doesn’t identify a cause.',options:[o('curiosity','It’s curiosity, rather than a problem',{body:1}),o('recent','It’s fairly recent',{}),o('months','A few months',{care:1}),o('long','A long time',{care:2}),o('unsure','I’m not sure',{})]},
 {id:'frequency',title:'If there’s a concern, how often does it show up?',note:'Choose “just exploring” if there isn’t a particular concern.',options:[o('exploring','I’m just exploring',{}),o('occasionally','Occasionally',{}),o('often','Often',{care:2}),o('always','Almost every time',{care:3}),o('unsure','It varies, or I’m unsure',{})]},
 {id:'comfort',title:'Is physical discomfort part of this?',note:'Pain is a reason to pause and seek appropriate care. This question doesn’t assess an emergency.',options:[o('no','No',{}),o('sometimes','Sometimes',{comfort:5,care:2}),o('frequent','Frequently or persistently',{comfort:6,care:5}),o('unsure','I’m not sure',{comfort:2}),o('skip','I’d rather not answer',{})]},
 {id:'medication',title:'Could medication or a health change be relevant?',note:'We don’t need names, doses, records, or a diagnosis.',options:[o('no','Not that I know of',{}),o('possible','Possibly',{care:4,body:1}),o('yes','Yes, I’d like to ask a clinician about it',{care:5}),o('unsure','I’m not sure',{}),o('skip','I’d rather not answer',{})]},
 {id:'headspace',title:'What has been taking up the most space?',note:'You can explore these things without explaining your history.',options:[o('pressure','Worry about doing things “right”',{confidence:4,performance:2}),o('distance','Feeling disconnected',{connection:4,communication:2}),o('stress','Stress or low energy',{confidence:2,desire:2}),o('curiosity','Mostly curiosity',{body:2,desire:1}),o('boundaries','Finding my boundaries',{communication:4,confidence:2})]},
 {id:'format',title:'How do you like to take things in?',note:'We’ll offer a useful format alongside your learning paths.',options:[o('read','Give me something clear to read',{}),o('practice','Give me one small thing to try',{}),o('talk','Give me words for a conversation',{communication:1}),o('reflect','Give me space to reflect',{}),o('mix','A little of everything',{})]},
 {id:'readiness',title:'What feels manageable right now?',note:'Your pace belongs to you.',options:[o('learn','Just learning for now',{}),o('small','A gentle, practical exercise',{confidence:1}),o('conversation','A conversation with someone',{communication:2}),o('care','Preparing to seek professional support',{care:5}),o('unsure','I’m not sure yet',{})]},
 {id:'next',title:'What would make this visit worthwhile?',note:'One useful next step is enough.',options:[o('understand','Understanding myself a little better',{body:2,confidence:1}),o('words','Knowing how to start a conversation',{communication:3}),o('together','Having something to try together',{connection:3}),o('comfort','Knowing where to find support',{care:3}),o('curious','Finding something new to explore',{desire:2,products:1})]}
];
export function assess(answers={}){
 const scores=Object.fromEntries(Object.keys(DIMENSIONS).map(k=>[k,0]));
 let answered=0;
 for(const q of QUESTIONS){const option=q.options.find(x=>x.id===answers[q.id]);if(!option)continue;answered++;for(const[k,v]of Object.entries(option.weights))scores[k]+=v;}
 // Context alone must not imply medical need. Care is promoted only when an explicit care signal is present.
 const hasConcern=answers.goal==='concern'||['performance','comfort'].includes(answers.interest);
 const careSignal=['sometimes','frequent'].includes(answers.comfort)||['possible','yes'].includes(answers.medication)||answers.readiness==='care'||answers.next==='comfort'||(hasConcern&&(['often','always'].includes(answers.frequency)||['months','long'].includes(answers.duration)));
 if(!careSignal)scores.care=0;
 const ranked=Object.keys(DIMENSIONS).map((id,index)=>({id,score:scores[id],index,...DIMENSIONS[id]})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score||a.index-b.index);
 const paths=ranked.slice(0,3);
 if(careSignal&&scores.care>0&&!paths.some(x=>x.id==='care'))paths[2]={id:'care',score:scores.care,...DIMENSIONS.care};
 const unique=paths.filter(Boolean).filter((x,i,a)=>a.findIndex(y=>y.id===x.id)===i);
 const comfortNote=['sometimes','frequent'].includes(answers.comfort)?'You mentioned discomfort. Pause anything that hurts. Frequent, persistent, or severe pain deserves a conversation with a qualified clinician; this result is not an urgency assessment.':null;
 const formatTool={practice:'check-in',talk:'conversation',reflect:'reflection',mix:'conversation',read:null}[answers.format]??null;
 return {scores,paths:unique,answered,careSignal,comfortNote,formatTool};
}
export const ROLES={
 dominant:{name:'Dominant',title:'Intentional leadership',description:'Curiosity about taking the lead, within clearly negotiated consent. Leadership includes listening, accountability, and respecting a stop.',article:'consent-in-practice'},
 brat:{name:'Brat',title:'Playful challenge',description:'Interest in teasing, banter, and negotiated pushback. Playful resistance is not permission to ignore a real boundary.',article:'exploring-dynamics'},
 caregiver:{name:'Caregiver',title:'Care as a chosen role',description:'Interest in offering reassurance, structure, and care between consenting adults. Giving care still requires your own boundaries.',article:'boundaries-are-an-invitation'},
 little:{name:'Little',title:'Adult playfulness & receiving care',description:'An adult-only role involving playfulness, comfort, or receiving care. This refers exclusively to consenting adults; labels never remove adult agency.',article:'exploring-dynamics'},
 master:{name:'Master',title:'Structured leadership',description:'Interest in an ongoing, explicitly negotiated leadership role. The title carries no ownership in law and never overrides anyone’s right to leave.',article:'consent-in-practice'},
 pet:{name:'Pet',title:'Playful, symbolic roles',description:'Interest in an adult, symbolic pet role or playfulness within an agreed dynamic. The meaning and limits are for the adults involved to define.',article:'exploring-dynamics'},
 service:{name:'Service',title:'Purpose through chosen giving',description:'Interest in intentional acts of service within an adult relationship or dynamic. Care is freely chosen, and you can renegotiate it.',article:'talk-about-needs'},
 slave:{name:'Slave',title:'Deeply negotiated surrender',description:'An adult consensual role label sometimes used for an extensive power-exchange agreement. You retain full personhood, boundaries, and the right to withdraw consent.',article:'consent-in-practice'},
 switch:{name:'Switch',title:'Freedom to move between roles',description:'Interest in both leading and following, depending on the person or situation. Flexibility is a preference in its own right.',article:'exploring-dynamics'}
};
const dq=(text,weights)=>({text,weights});
export const DYNAMIC_QUESTIONS=[
 dq('I enjoy taking the lead when everyone has agreed on the boundaries.',{dominant:1}),
 dq('Playful teasing and negotiated challenges appeal to me.',{brat:1}),
 dq('Offering reassurance and care feels meaningful to me.',{caregiver:1}),
 dq('I’m curious about an adult role centered on playfulness and receiving care.',{little:1}),
 dq('Clear, ongoing agreements about leadership appeal to me.',{master:1}),
 dq('A playful, symbolic pet role between consenting adults interests me.',{pet:1}),
 dq('Chosen acts of service can feel like a meaningful form of connection.',{service:1}),
 dq('I’m curious about a deeply negotiated surrender role, with the freedom to stop.',{slave:1}),
 dq('I could enjoy leading or following, depending on the situation.',{switch:1}),
 dq('I like planning an experience while checking in with the other adult.',{dominant:1,caregiver:.5}),
 dq('I enjoy witty pushback inside clearly agreed rules.',{brat:1}),
 dq('I’m drawn to a role where I actively offer steady care and structure.',{caregiver:1}),
 dq('I like the idea of setting adult responsibilities aside briefly in a consensual, playful role.',{little:1}),
 dq('I’m interested in defining a structured leadership dynamic over time.',{master:1}),
 dq('Animal-inspired symbolic role play sounds interesting to me.',{pet:1}),
 dq('Thoughtful tasks I choose for someone can be rewarding.',{service:1}),
 dq('I’m interested in discussing extensive power exchange between adults.',{slave:1}),
 dq('A fixed leading or following role would feel too narrow for me.',{switch:1}),
 dq('Responsibility for leading, including listening and renegotiating, appeals to me.',{dominant:1,master:.5}),
 dq('I’m curious about playfully testing agreed expectations, with a clear way to pause.',{brat:1}),
 dq('Receiving care in a playful adult role sounds comforting to me.',{little:1}),
 dq('I might enjoy symbolic pet-role rituals that all adults have chosen together.',{pet:1}),
 dq('Service and negotiated surrender are themes I want to learn about.',{service:1,slave:1}),
 dq('My preferred role could change with the person, day, or context.',{switch:1}),
 dq('Longer-term agreements combining structure and care interest me.',{master:1,caregiver:.5})
].map((q,i)=>({...q,id:'d'+(i+1)}));
export const SCALE=[{value:0,label:'Strongly disagree'},{value:1,label:'Disagree'},{value:2,label:'Neutral / unsure'},{value:3,label:'Agree'},{value:4,label:'Strongly agree'}];
export function scoreDynamics(answers={}){
 const totals=Object.fromEntries(Object.keys(ROLES).map(k=>[k,{earned:0,possible:0,items:0}]));
 let answered=0;
 for(const q of DYNAMIC_QUESTIONS){const value=answers[q.id];if(!Number.isInteger(value)||value<0||value>4)continue;answered++;for(const[k,w]of Object.entries(q.weights)){totals[k].earned+=value*w;totals[k].possible+=4*w;totals[k].items++;}}
 const ranked=Object.keys(ROLES).map((id,i)=>({id,...ROLES[id],score:totals[id].possible?Math.round(totals[id].earned/totals[id].possible*100):null,items:totals[id].items,index:i})).filter(x=>x.score!==null).sort((a,b)=>b.score-a.score||a.index-b.index);
 const ties=ranked.length?ranked.filter(x=>x.score===ranked[0].score).map(x=>x.id):[];
 const signal=ranked.length>0&&ranked[0].score>=60;
 return {answered,ranked,top:signal?ranked.slice(0,3):[],ties,signal,limited:answered<15};
}
