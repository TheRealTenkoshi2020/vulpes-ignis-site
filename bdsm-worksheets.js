// Privacy-first interactive learning lab. No network calls, tracking or persistent storage.
import { artPanel } from './art.js';
const groups = {
 agreement: {title:'Power-exchange agreement builder',intro:'A conversation aid, never a binding contract or standing consent.',questions:[
 ['scope','What decisions or activities are actually in scope?'],
 ['limits','What is completely off-limits?'],
 ['duration','When does the agreement begin and end?'],
 ['stop','How can either person pause or stop, including without speaking?'],
 ['care','What support or check-in would each person like afterward?'],
 ['review','When will you review or retire this agreement?']]},
 roles: {title:'Role exploration cards',intro:'Explore vocabulary, not a personality diagnosis. A label is optional.',questions:[
 ['curiosity','Which role or dynamic are you curious about?'],
 ['meaning','What does that role mean to you personally?'],
 ['appeal','What aspect feels meaningful: care, structure, play, service, or flexibility?'],
 ['notme','What assumptions or expectations do not fit you?'],
 ['boundaries','What boundaries would you need to feel comfortable?'],
 ['next','What would you like to learn before trying anything?']]},
 journal: {title:'Private kink curiosity journal',intro:'No judgment, no score, no account. Your words stay on this page unless you export them.',questions:[
 ['notice','What are you noticing about your curiosity today?'],
 ['choice','What makes it easy for you to say yes, no, or not yet?'],
 ['meaning','Which experiences feel meaningful as fantasy only?'],
 ['needs','What reassurance, privacy, or care would you want?'],
 ['learning','What would you like to understand better?'],
 ['next','What is one low-pressure next step?']]},
 atmosphere: {title:'Sensual space & playlist planner',intro:'Build a mood that keeps communication, accessibility, and safety intact.',questions:[
 ['mood','Choose three words for your ideal atmosphere.'],
 ['lighting','What lighting is comfortable and leaves exits visible?'],
 ['music','What music suits arrival, immersion, and wind-down?'],
 ['senses','Any scent, temperature, texture, or accessibility preferences?'],
 ['safety','How will everyone hear check-ins and change the atmosphere?'],
 ['budget','What can you use that you already own?']]},
 safety: {title:'Negotiation and aftercare planner',intro:'Stop means stop. This worksheet does not replace hands-on safety training.',questions:[
 ['yes','What is welcome, if everyone chooses it in the moment?'],
 ['no','What is not welcome?'],
 ['yellow','What signals a pause or adjustment?'],
 ['red','What signals an immediate stop?'],
 ['risks','What risks, health considerations, or emergency plans need discussion?'],
 ['aftercare','What aftercare and later check-in might help?']]}
};
// Red-flag self-check: prompts for observation, not a safety score or risk prediction.
groups.redflags={
 title:'Relationship warning-sign reflection',
 intro:'Recognize patterns without being told what decision to make. This is not a danger assessment. If you are in immediate danger, contact emergency services.',
 questions:[
 ['pressure','Has someone continued to pressure you after a no or a request for time?'],
 ['isolation','Has someone tried to isolate you from friends, family, or independent support?'],
 ['privacy','Has anyone threatened to reveal private information, images, or messages?'],
 ['control','Are your finances, movement, devices, or medical choices being controlled against your wishes?'],
 ['response','How does this person respond when you change your mind or ask to stop?'],
 ['support','Who could you contact safely if you wanted support or a second perspective?']
 ]
};
const escape = s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let current='agreement';
export const KINK_LAB_MODES=Object.freeze(Object.keys(groups));
export function selectKinkLab(mode){if(KINK_LAB_MODES.includes(mode))current=mode;return current;}
export function kinkLabMode(){return current;}
let notes={};
export function clearKinkLab(){notes={};current='agreement';}
function text(){const g=groups[current];return ['VULPES IGNIS · '+g.title.toUpperCase(),'Personal reflection only. Not consent, medical advice, or a binding agreement.','',...g.questions.map(([id,label])=>label+'\n'+(notes[current]?.[id]||'(not answered)')+'\n'),'Everyone retains the right to stop or change their mind at any time.'].join('\n');}
export function kinkLabHTML(){const g=groups[current];return `<div class="wrap section" style="padding-top:0"><div class="illustrated-head"><div class="page-hero"><p class="eyebrow">VULPES IGNIS · PRIVATE INTERACTIVE TOOLKIT</p><h1>A little curiosity.<br>A lot of choice.</h1><p class="lead">Explore at your pace. These are worksheets, not tests, promises, or contracts.</p></div>${artPanel('velvet-lounge')}</div><div class="filters" role="group" aria-label="Choose a worksheet">${Object.entries(groups).map(([key,item])=>`<button type="button" class="filter ${key===current?'active':''}" data-kink-mode="${key}" aria-pressed="${key===current}">${escape(item.title)}</button>`).join('')}</div><section class="practice" style="margin-top:25px"><h2>${escape(g.title)}</h2><p>${escape(g.intro)}</p><p class="fine">No answers are uploaded or saved in browser storage. Switching tools keeps your answers only until you reload or close the page. Clear them before leaving a shared device.</p><form id="kink-lab-form">${g.questions.map(([id,label])=>`<label for="kink-${id}">${escape(label)}</label><textarea id="kink-${id}" name="${id}" rows="3" maxlength="1500" placeholder="Only if you want to answer…">${escape(notes[current]?.[id]||'')}</textarea>`).join('')}<div class="button-row"><button type="button" class="button primary" data-kink-export="download">Download my worksheet</button><button type="button" class="button secondary" data-kink-export="copy">Copy text</button><button type="button" class="button subtle" data-kink-export="clear">Clear this worksheet</button></div><p id="kink-lab-status" role="status" aria-live="polite" class="fine"></p></form></section><p class="fine">Adults 18+ only. These tools do not assess compatibility or guarantee safety. If an activity feels unsafe, stop. <a href="#/learn/unsafe-partner-red-flags">Read about warning signs</a>.</p><p><button type="button" class="button subtle clear-session">Clear my private session</button></p><a href="#/learn" class="text-link">Return to the learning library</a></div>`;}
function renderKinkLab(root,{focusMode=false,focusField=false}={}){const host=root.querySelector('#kink-lab-view')||root;host.innerHTML=kinkLabHTML();bindKinkLab(host);if(focusMode)host.querySelector(`[data-kink-mode="${current}"]`)?.focus();else if(focusField)host.querySelector('#kink-lab-form textarea')?.focus();}
export function bindKinkLab(root){const host=root.querySelector('#kink-lab-form');if(!host)return;root.querySelectorAll('[data-kink-mode]').forEach(button=>button.addEventListener('click',()=>{current=button.dataset.kinkMode;renderKinkLab(root,{focusMode:true});}));host.addEventListener('input',event=>{if(!event.target.name)return;(notes[current]??={})[event.target.name]=event.target.value;});host.querySelectorAll('[data-kink-export]').forEach(button=>button.addEventListener('click',async()=>{const action=button.dataset.kinkExport,status=host.querySelector('#kink-lab-status');if(action==='clear'){delete notes[current];renderKinkLab(root,{focusField:true});return;}const content=text();if(action==='copy'){try{await navigator.clipboard.writeText(content);status.textContent='Copied. Share only where you feel comfortable.';}catch{status.textContent='Clipboard unavailable. Use Download instead.';}return;}const url=URL.createObjectURL(new Blob([content],{type:'text/plain;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download='Vulpes-Ignis-'+current+'-worksheet.txt';host.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);status.textContent='Worksheet downloaded to this device. Remember that downloaded files remain after clearing the page.';}));}
