import {ACTIVITIES,DECKS,WORKSHOPS,ADAPTATIONS,REFLECTIONS,MATCH_TOPICS,DESIRE_STEPS} from './expansion-content.js';
export {ACTIVITIES,DECKS,WORKSHOPS,ADAPTATIONS,REFLECTIONS,MATCH_TOPICS,DESIRE_STEPS};
const ids=a=>a.map(x=>x.id), allowed=(v,a,d='')=>a.includes(v)?v:d, list=(v,a)=>Array.isArray(v)?[...new Set(v.filter(x=>a.includes(x)))]:[];
export const e=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const emptyPrefs=()=>({mode:'individual',time:'5',capacity:'any',constraints:[]});
export function normalizePrefs(p){p=p&&typeof p==='object'?p:{};return {mode:allowed(p.mode,['individual','shared'],'individual'),time:allowed(p.time,['2','3','5','10','15','any'],'5'),capacity:allowed(p.capacity,['low','any'],'any'),constraints:list(p.constraints,ADAPTATIONS.map(x=>x[0]))};}
export const emptyExpansion=()=>({version:1,prefs:emptyPrefs(),saved:[],completed:{},desire:[],remember:false});
export function restoreExpansion(raw){if(!raw||raw.version!==1)return emptyExpansion();const completed={};for(const w of WORKSHOPS){const selected=list(raw.completed?.[w.id],w.activities);if(selected.length)completed[w.id]=selected;}return {version:1,prefs:raw.remember===true?normalizePrefs(raw.prefs):emptyPrefs(),saved:list(raw.saved,ids(ACTIVITIES)),completed,desire:list(raw.desire,DESIRE_STEPS.map((_,i)=>String(i))),remember:raw.remember===true};}
export function serialExpansion(s){return restoreExpansion(s);}
export const emptyPrivate=()=>({answers:{},match:emptyMatch(),sharedActivity:null,sharedWorkshop:null,deckIndex:{},showing:null});
export function filterActivities(p,category='',source=ACTIVITIES){p=normalizePrefs(p);const cs=new Set(p.constraints);return source.filter(a=>{if(category&&a.category!==category)return false;const individual=p.mode==='individual'||cs.has('privacy')||cs.has('overwhelm');if(individual&&a.mode==='shared'||!individual&&a.mode==='individual')return false;const budget=Math.min(p.time==='any'?Infinity:Number(p.time),p.capacity==='low'||cs.has('limited-energy')||cs.has('concentration')?2:Infinity);const transition=cs.has('transitions')?2:0;if(a.minutes+a.prep+a.cleanup+transition>budget)return false;if(cs.has('overwhelm')&&a.emotional!=='low')return false;return true;});}
export function getActivity(id){return ACTIVITIES.find(x=>x.id===id)||null;}
export function toggleSaved(s,id){if(!getActivity(id))return s;return {...s,saved:s.saved.includes(id)?s.saved.filter(x=>x!==id):[...s.saved,id]};}
export function markWorkshop(s,wid,aid,checked){const w=WORKSHOPS.find(x=>x.id===wid);if(!w?.activities.includes(aid))return s;const old=s.completed[wid]||[];return {...s,completed:{...s.completed,[wid]:checked?[...new Set([...old,aid])]:old.filter(x=>x!==aid)}};}
export function markDesire(s,i,checked){if(!DESIRE_STEPS[String(i)]||!/^\d$/.test(String(i)))return s;const id=String(i);return {...s,desire:checked?[...new Set([...s.desire,id])]:s.desire.filter(x=>x!==id)};}
export function setReflection(privateState,id,qid,value){const r=REFLECTIONS.find(x=>x.id===id),q=r?.questions.find(x=>x.id===qid);if(!q||value!==''&&!q.options.includes(value))return privateState;const answers={...(privateState.answers[id]||{})};if(value)answers[qid]=value;else delete answers[qid];return {...privateState,answers:{...privateState.answers,[id]:answers}};}
export function reflectionSummary(id,answers){const r=REFLECTIONS.find(x=>x.id===id);if(!r)return [];return r.questions.filter(q=>q.options.includes(answers?.[q.id])).map(q=>({label:q.label,answer:answers[q.id]}));}
export function reflectionText(id,answers){const r=REFLECTIONS.find(x=>x.id===id);const summary=reflectionSummary(id,answers);return r&&summary.length?`${r.title}\nSelf-reported preferences at this moment. Not a diagnosis, compatibility score or consent.\n\n${summary.map(x=>`${x.label}: ${x.answer}`).join('\n')}`:'';}
// Shared-device comparison: no storage, names, links, or network. Ordinary-use concealment only.
export function emptyMatch(){return {stage:'intro',first:[],second:[],result:[]};}
const topicIds=MATCH_TOPICS.map(x=>x[0]);
export function matchStart(m,consent){return m.stage==='intro'&&consent===true?{...emptyMatch(),stage:'first'}:m;}
export function matchSelect(m,id,checked){if(!['first','second'].includes(m.stage)||!topicIds.includes(id))return m;const key=m.stage;return {...m,[key]:checked?[...new Set([...m[key],id])]:m[key].filter(x=>x!==id)};}
export function matchSubmit(m,consent){if(consent!==true)return m;if(m.stage==='first')return {...m,stage:'handoff'};if(m.stage==='second'){const first=new Set(m.first);return {stage:'result',first:[],second:[],result:topicIds.filter(id=>first.has(id)&&m.second.includes(id))};}return m;}
export function matchSecond(m,consent){return m.stage==='handoff'&&consent===true?{...m,stage:'second'}:m;}
export function clearPrivateOnRoute(p,oldPath,newPath){if(oldPath===newPath)return p;return {...p,match:emptyMatch(),sharedActivity:null,sharedWorkshop:null,showing:null};}
export function isExpansionRoute(path){return path==='/foxfire'||path.startsWith('/foxfire/');}
export const routes={hub:'#/foxfire',activities:'#/foxfire/activities',decks:'#/foxfire/decks',workshops:'#/foxfire/workshops',desire:'#/foxfire/desire',adaptive:'#/foxfire/adaptive',reflections:'#/foxfire/reflections',match:'#/foxfire/match'};
