import { approvedLevel } from './foxfire4-levels.js';
import { FOXFIRE, CONVERSATION } from './foxfire-content.js';
export { FOXFIRE, CONVERSATION };
export const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pick=(value,allowed,fallback='')=>allowed.includes(value)?value:fallback;
const text=(value,max=500)=>typeof value==='string'?value.slice(0,max):'';
const array=x=>Array.isArray(x)?x:[];
export const routeIds=FOXFIRE.routes.map(x=>x.id);
export const moduleIds=FOXFIRE.modules.map(x=>x.id);
export const topicIds=CONVERSATION.topics.map(x=>x.id);
export const toneIds=CONVERSATION.tones.map(x=>x.id);
const fields=['opening','observation','need','request','response','pause'];
const soloFields=CONVERSATION.soloPrompts.map((_,i)=>`solo${i}`);
export const blankNavigator=()=>({goal:'',use:'individual',time:'',capacity:'',shown:false});
export const blankWorkshop=()=>({topic:'desire',tone:'gentle',safety:'',use:'individual',fields:{},solo:{},prepared:false,preview:false});
export const emptyFoxfire=()=>({version:1,navigator:blankNavigator(),completed:[],workshop:blankWorkshop()});
export const emptyFilters=()=>({levels:[],situations:[],participation:[]});
export function normalizeNavigator(n={}){n=n||{};return {goal:pick(n.goal,routeIds),use:pick(n.use,['individual','shared','unsure'],'individual'),time:pick(n.time,['2','5','10','15']),capacity:pick(n.capacity,['low','moderate','higher']),shown:n.shown===true};}
export function normalizeWorkshop(w={}){w=w||{};const safety=pick(w.safety,['yes','no','unsure','skip']);const safe=safety==='yes';return {topic:pick(w.topic,topicIds,'desire'),tone:pick(w.tone,toneIds,'gentle'),safety,use:pick(w.use,['individual','shared'],'individual'),fields:safe?Object.fromEntries(fields.filter(k=>typeof w.fields?.[k]==='string').map(k=>[k,text(w.fields[k])])):{},solo:Object.fromEntries(soloFields.filter(k=>typeof w.solo?.[k]==='string').map(k=>[k,text(w.solo[k])])),prepared:!!safety&&w.prepared===true,preview:!!safety&&w.prepared===true&&w.preview===true};}
export function restoreFoxfire(raw){if(!raw||typeof raw!=='object'||raw.version!==1)return emptyFoxfire();return {version:1,navigator:normalizeNavigator(raw.navigator),completed:[...new Set(array(raw.completed).filter(x=>moduleIds.includes(x)))],workshop:normalizeWorkshop(raw.workshop)};}
export function markModule(s,id,checked){if(!moduleIds.includes(id))return s;return {...s,completed:checked?[...new Set([...s.completed,id])]:s.completed.filter(x=>x!==id)};}
export function setWorkshopChoice(w,key,value){const before=normalizeWorkshop(w);if(!['topic','tone','safety','use'].includes(key))return before;const next=normalizeWorkshop({...before,[key]:value,preview:false});if(key==='safety'&&next.safety!==before.safety){next.prepared=false;next.fields={};}return next;}
export function suggestions(w){const t=CONVERSATION.topics.find(x=>x.id===w.topic)||CONVERSATION.topics[0],tone=CONVERSATION.tones.find(x=>x.id===w.tone)||CONVERSATION.tones[0];return {opening:tone.opening,observation:t.observation,need:t.need,request:t.request,response:CONVERSATION.responseSpace,pause:CONVERSATION.pause};}
export function prepareWorkshop(w){w=normalizeWorkshop(w);if(!w.safety)return w;return {...w,prepared:true,preview:false,fields:w.safety==='yes'?suggestions(w):{},solo:w.solo};}
export function updateWorkshopField(w,key,value){w=normalizeWorkshop(w);if(!w.prepared)return w;const safe=w.safety==='yes',valid=safe?fields:soloFields;if(!valid.includes(key))return w;const dest=safe?'fields':'solo';return {...w,[dest]:{...w[dest],[key]:text(value)},preview:false};}
export function workshopText(w){w=normalizeWorkshop(w);if(!w.prepared)return '';if(w.safety!=='yes')return soloFields.map((k,i)=>w.solo[k]?.trim()?`${CONVERSATION.soloPrompts[i]}\n${w.solo[k].trim()}`:'').filter(Boolean).join('\n\n');return fields.map(k=>w.fields[k]?.trim()).filter(Boolean).join('\n\n');}
export function getApplication(id){return FOXFIRE.applicationCards.find(c=>c.guideId===id);}
const routeTools={basics:'#/foundations',self:'#/assessment',connection:'#/tools/conversation-workshop',desire:'#/tools/conversation-workshop',body:'#/tools/care',explore:'#/explore',boundaries:'#/tools/conversation-workshop'};
export const routeTopic={connection:'connection',desire:'desire',boundaries:'boundary'};
export const toolLinks={conversation:'#/tools/conversation-workshop','check-in':'#/tools/check-in',boundary:'#/tools/boundaries',reflection:'#/tools/reflection',care:'#/tools/care',activities:'#/foxfire/activities',adaptive:'#/foxfire/adaptive',desire:'#/foxfire/desire',workshops:'#/foxfire/workshops',decks:'#/foxfire/decks',match:'#/foxfire/match','sensory-reflection':'#/foxfire/reflection/sensory','connection-reflection':'#/foxfire/reflection/connection','boundaries-reflection':'#/foxfire/reflection/boundaries','desire-reflection':'#/foxfire/reflection/desire','curiosity-reflection':'#/foxfire/reflection/curiosity'};
// Conservative auto-classification from public title/excerpt and explicit editorial seeds.
// Unknown is intentional; this is not a clinical or manual whole-article review.
const topicRules={anatomy:/\banatomy\b|\bbody parts\b/,consent:/\bconsent\b|safeword|\bpermission\b|\bdeclin|\brejection\b|clear signals/,boundaries:/boundar|\blimits\b/,communication:/conversation|\bcommunicat|\blisten|\basking\b|check.in|\bflirt|\bcompliment|saying thank you/,relationships:/\brelationship|\btrust\b|\bpartner|\bconnection\b|long.distance|been together|couples who/,desire:/\bdesire\b|\blibido\b|\barousal\b|\bforeplay\b|\banticipation\b/,confidence:/confidence|body.image|insecurity|body.neutral|without performing/,comfort:/\bcomfort|\bpain\b|\bdiscomfort\b|lubrication|\bmassage\b|pelvic.floor|bladder leaks/,wellness:/\bhealth\b|\bwellness\b|\bfitness\b|\bmindfulness\b/, 'safer-sex':/\bsti\b|\bhpv\b|safer.sex|contraception/,care:/\bclinician\b|professional.help|\bcare\b|\btesting\b/,identity:/\bidentity\b|\borientation\b/,exploration:/\bcuriosity\b|\bexplor|\bkissing\b|\bplayfulness\b|\bromance\b|no-pressure weekend/,dynamics:/\bkink\b|\bbdsm\b|power.exchange|power.dynamics|\bdominants?\b|\bsubmissives?\b|sensual.dungeon/,nutrition:/\bnutrition\b|\bdiet\b|\bfood\b|\bmeals\b|\bfueling\b|\bflavonoid|mediterranean-style|\bberries\b|\bcitrus\b/,movement:/\bexercise\b|\bmovement\b|\bwalking\b|\bcycling\b|\bstrength\b|\bmobility\b|\byoga\b/,sleep:/\bsleep\b|\binsomnia\b/,products:/\bproducts?\b|\bsupplements?\b|\btoys\b/,privacy:/\bprivacy\b|\bprivate\b|\bphotos?\b/};
const situationRules={'limited-energy':/low.energy|\bfatigue\b|\bexhaust|limited.energy/,'limited-time':/busy adults|limited.time|work fills the day|\btime pressure\b|five gentle minutes|morning affection/,'changing-comfort':/changing comfort|menopause|when intimacy hurts|physical discomfort|after birth|bladder leaks/,'sensory-preferences':/sensory|textures|touch map/,'performance-pressure':/performance.pressure|without performing|pressure off performance|no-pressure weekend|romance without the expectation/,'partner-unavailable':/partner won.t talk|partner declines/,'limited-privacy':/small.space|limited.privacy|small-space romance/,'changing-mobility':/\bdisability\b|chronic illness|changing mobility|different bodies/,'rebuilding-trust':/rebuilding trust|betrayal|broken agreement/};
export const LEVELS=['foundation','intermediate','advanced','unclassified'];
export const SITUATIONS=Object.keys(situationRules);
export const PARTICIPATION=['individual','shared','either'];
const METADATA_SEEDS={
  'long-distance-connection-routines':{topics:['relationships','communication']},
  'appreciation-without-flattery':{topics:['communication','relationships']},
  'flirting-with-clear-signals':{topics:['communication','consent']},
  'initiating-and-declining-with-care':{topics:['communication','consent','boundaries']},
  'coach-rejection-without-shame':{topics:['communication','consent']},
  'coach-dating-after-trauma':{topics:['care','relationships']},
  'foreplay-without-a-script':{topics:['exploration','desire']},
  'kissing-games':{topics:['exploration']},
  'sensual-massage-basics':{topics:['comfort','exploration']},
  'flirting-long-term':{topics:['relationships','communication']},
  'gentle-rejection':{topics:['communication','consent','boundaries']},
  'body-neutral-intimacy':{topics:['confidence','comfort'],situations:['performance-pressure']},
  'romance-without-pressure':{topics:['relationships'],situations:['performance-pressure']},
  'playful-anticipation':{topics:['exploration','desire']},
  'first-kiss-again':{topics:['exploration','relationships']},
  'compliment-chemistry':{topics:['communication','relationships']},
  'laughing-together':{topics:['relationships']},
  'intimacy-in-small-spaces':{topics:['relationships'],situations:['limited-privacy']},
  'morning-affection-rituals':{topics:['relationships'],situations:['limited-time']},
  'hands-and-attention':{topics:['exploration','comfort']},
  'the-no-pressure-weekend':{topics:['relationships','exploration'],situations:['performance-pressure']},
  'intimacy-without-expensive-products':{topics:['exploration']},
  'emotional-needs':{topics:['dynamics','relationships','communication']},
  'sensual-dungeon-atmosphere':{topics:['dynamics','exploration']},
  'eat-for-circulation':{topics:['nutrition','wellness']},
  'berries-citrus-and-erections':{topics:['nutrition','wellness']},
  'bladder-leaks-and-intimacy':{topics:['care','comfort'],situations:['changing-comfort']},
  'breathing-with-the-pelvic-floor':{topics:['movement','comfort']},
  'mind-wandering-and-mindfulness':{topics:['wellness','comfort']}
};

export const EVIDENCE_TYPES=['public-health-guidance','professional-organization-education','support-organization-education','peer-reviewed-publication','mixed','unclassified'];
const INTERMEDIATE_IDS=new Set(['exploring-dynamics','power-dynamics-begin-with-agreements','safewords-and-pause-signals','aftercare-is-a-conversation','power-dynamics-guide','safety-protocols','kink-roles','humiliation-versus-shame','consensual-control-and-healing','guided-kink-journal','unsafe-partner-red-flags']);
const hostOf=url=>{try{return new URL(url).hostname.replace(/^www\./,'').toLowerCase();}catch{return '';}};
const hostEnds=(h,bases)=>bases.some(b=>h===b||h.endsWith('.'+b));
const PUBLIC_HEALTH=['cdc.gov','nhs.uk','nih.gov','medlineplus.gov','fda.gov','who.int','cancer.gov','womenshealth.gov'];
const PROFESSIONAL_ORG=['acog.org','apa.org','plannedparenthood.org','mayoclinic.org','clevelandclinic.org'];
const SUPPORT_ORG=['thehotline.org','rainn.org','loveisrespect.org','988lifeline.org','ncsfreedom.org'];
const PEER_REVIEWED=['pubmed.ncbi.nlm.nih.gov','pmc.ncbi.nlm.nih.gov','ncbi.nlm.nih.gov','journalofpositivesexuality.org'];
// Exact source verified from its provenance statement; this does not imply clinical review of a guide.
const REVIEWED_SOURCE_TYPES = Object.freeze({
  // Source types verified for the new curriculum references only.
  "https://www.acog.org/womens-health/faqs/vulvovaginal-health": "professional-organization-education",
  "https://health.clevelandclinic.org/is-your-penis-normal": "professional-organization-education",
  "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/01/elective-female-genital-cosmetic-surgery": "professional-organization-education",
  "https://www.betterhealth.vic.gov.au/health/healthyliving/masturbation": "public-health-guidance",
  "https://www.aasect.org/position-sex-addiction": "professional-organization-education",
  "https://my.clevelandclinic.org/health/diseases/9121-sexual-dysfunction": "professional-organization-education",
  "https://pubmed.ncbi.nlm.nih.gov/31483169/": "peer-reviewed-publication",
  "https://www.ashasexualhealth.org/anal-sex-and-stis/": "professional-organization-education",
  "https://www.cdc.gov/condom-use/resources/external.html": "public-health-guidance",
  "https://www.cdc.gov/hiv/prevention/prep.html": "public-health-guidance",
  "https://www.nhs.uk/symptoms/anal-pain/": "public-health-guidance",
  "https://stonewall.org.uk/resources/list-lgbtq-terms": "support-organization-education",
  "https://www.aasect.org/asexual-rights": "professional-organization-education",
  "https://www.nccih.nih.gov/health/know-science": "public-health-guidance",
  "https://www.cdc.gov/condom-use/resources/internal.html": "public-health-guidance",
  "https://www.cdc.gov/contraception/hcp/usspr/emergency-contraception.html": "public-health-guidance",
  "https://www.cdc.gov/std/treatment-guidelines/chlamydia.htm": "public-health-guidance",
  "https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm": "public-health-guidance",
  "https://www.hiv.gov/hiv-basics/hiv-prevention/potential-future-options/long-acting-prep": "public-health-guidance",
  "https://www.cdc.gov/hivnexus/hcp/prep/": "public-health-guidance",
  "https://www.cdc.gov/mmwr/volumes/74/rr/rr7401a1.htm": "public-health-guidance",
  "https://hivinfo.nih.gov/understanding-hiv/fact-sheets/post-exposure-prophylaxis-pep": "public-health-guidance",
  "https://www.cdc.gov/hiv/treatment/index.html": "public-health-guidance",
  "https://www.cdc.gov/sti/hcp/doxy-pep/": "public-health-guidance",
  "https://www.cdc.gov/hepatitis-a/vaccination/index.html": "public-health-guidance",
  "https://www.cdc.gov/hepatitis-b/vaccination/index.html": "public-health-guidance",
  "https://www.cdc.gov/monkeypox/vaccines/index.html": "public-health-guidance",
  "https://www.cdc.gov/herpes/about/index.html": "public-health-guidance",
  "https://www.cdc.gov/herpes/testing/index.html": "public-health-guidance",
  "https://www.cdc.gov/syphilis/about/index.html": "public-health-guidance",
  "https://www.cdc.gov/std/treatment-guidelines/syphilis.htm": "public-health-guidance",
  "https://www.acog.org/womens-health/faqs/emergency-contraception": "professional-organization-education",
  "https://www.cdc.gov/contraception/hcp/usspr/combined-hormonal-contraceptives.html": "public-health-guidance",
  "https://www.cdc.gov/contraception/hcp/usspr/progestin-only-pills.html": "public-health-guidance",
  "https://www.cdc.gov/contraception/hcp/provider-tools/index.html": "public-health-guidance",
  "https://www.nhs.uk/contraception/methods-of-contraception/natural-family-planning/": "public-health-guidance",
  "https://www.nhs.uk/contraception/methods-of-contraception/vasectomy-male-sterilisation/what-is-it/": "public-health-guidance",
  "https://www.nhs.uk/contraception/methods-of-contraception/vasectomy-male-sterilisation/recovery/": "public-health-guidance",
  "https://www.nhs.uk/pregnancy/trying-for-a-baby/doing-a-pregnancy-test/": "public-health-guidance",
  "https://www.nhs.uk/symptoms/vaginal-bleeding-between-periods-or-after-sex/": "public-health-guidance",
  "https://www.acog.org/womens-health/faqs/pregnancy-choices-raising-the-baby-adoption-and-abortion": "professional-organization-education",
  "https://www.cdc.gov/pregnancy/about/index.html": "public-health-guidance",
  "https://www.asrm.org/practice-guidance/practice-committee-documents/fertility-evaluation-of-infertile-women-a-committee-opinion-2026": "professional-organization-education",
  "https://www.reproductivefacts.org/news-and-publications/fact-sheets-and-infographics/diagnostic-testing-for-infertility": "professional-organization-education",
  "https://www.acog.org/womens-health/experts-and-stories/ask-acog/is-it-safe-to-have-sex-during-pregnancy": "professional-organization-education",
  "https://www.tommys.org/pregnancy-information/im-pregnant/sex-pregnancy": "support-organization-education",
  "https://www.nhs.uk/conditions/miscarriage/": "public-health-guidance",
  "https://www.nichd.nih.gov/health/topics/pregnancyloss": "public-health-guidance",
  "https://www.acog.org/womens-health/faqs/hysterectomy": "professional-organization-education",
  "https://www.nhs.uk/tests-and-treatments/hysterectomy/recovery/": "public-health-guidance",
  "https://www.nhs.uk/conditions/vaginitis/": "public-health-guidance",
  "https://www.acog.org/womens-health/faqs/vaginitis": "professional-organization-education",
  "https://www.niddk.nih.gov/health-information/urologic-diseases/bladder-infection-uti-in-adults/symptoms-causes": "public-health-guidance",
  "https://www.niddk.nih.gov/health-information/urologic-diseases/bladder-infection-uti-in-adults/treatment": "public-health-guidance",
  "https://www.nhs.uk/symptoms/post-menopausal-bleeding/": "public-health-guidance",
  "https://www.nhs.uk/symptoms/testicle-pain/": "public-health-guidance",
  "https://www.nhs.uk/symptoms/testicle-lumps-and-swellings/": "public-health-guidance",
  "https://www.gmc-uk.org/professional-standards/the-professional-standards/intimate-examinations-and-chaperones/intimate-examinations-and-chaperones": "professional-organization-education",
  "https://www.nhs.uk/conditions/endometriosis/": "public-health-guidance",
  "https://www.nhs.uk/conditions/vulvodynia/": "public-health-guidance",
  "https://www.nhs.uk/conditions/vaginismus/": "public-health-guidance",
  "https://www.niddk.nih.gov/health-information/urologic-diseases/prostate-problems/prostatitis-inflammation-prostate": "public-health-guidance",
  "https://www.niddk.nih.gov/health-information/urologic-diseases/penile-curvature-peyronies-disease": "public-health-guidance",
  "https://www.nhs.uk/conditions/ejaculation-problems/": "public-health-guidance",
  "https://www.endocrine.org/clinical-practice-guidelines/testosterone-therapy": "professional-organization-education",
  "https://www.monash.edu/medicine/mchri/pcos/guideline": "professional-organization-education",
  "https://integration.asrm.org/globalassets/_asrm/practice-guidance/practice-guidelines/pdf/recommendations_from_the_2023_int_evidence-based_guideline_on_pcos.pdf": "professional-organization-education",
  "https://www.heart.org/en/health-topics/consumer-healthcare/what-is-cardiovascular-disease/sex-and-heart-disease": "professional-organization-education",
  "https://www.cancer.gov/about-cancer/treatment/side-effects/sexuality-women": "public-health-guidance",
  "https://www.cancer.gov/about-cancer/treatment/side-effects/sexuality-men": "public-health-guidance",
  "https://transcare.ucsf.edu/guidelines/stis": "professional-organization-education",
  "https://www.cdc.gov/contraception/hcp/usspr/testosterone-pregnancy-risk.html": "public-health-guidance",
  "https://www.autism.org.uk/advice-and-guidance/family-life-and-relationships/sex-education": "support-organization-education",
  "https://www.nice.org.uk/guidance/CG142/chapter/Recommendations": "public-health-guidance",
  "https://www.nia.nih.gov/health/sexuality/sexuality-and-intimacy-older-adults": "public-health-guidance",
  "https://www.acog.org/womens-health/faqs/pelvic-exams": "professional-organization-education",
  "https://www.aasect.org/certification-types-distinguishing-sexuality-educators-counselors-and-therapists": "professional-organization-education",
  "https://www.ptsd.va.gov/understand/what/trauma_triggers.asp": "public-health-guidance",
  "https://www.thehotline.org/resources/reproductive-coercion/": "support-organization-education",
  "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/disclosures-treatment-payment-health-care-operations/index.html": "public-health-guidance",
  "https://rainn.org/2240/getting-a-sexual-assault-forensic-exam-safe": "support-organization-education",
  "https://www.cdc.gov/std/treatment-guidelines/sexual-assault-adults.htm": "public-health-guidance",
  "https://bphc.hrsa.gov/about-health-center-program/what-health-center": "public-health-guidance",
  "https://reproductivehealthservices.gov/": "public-health-guidance",
  // End curriculum source types.
  'https://stillmed.olympics.com/media/Documents/Athletes/Medical-Scientific/Consensus-Statements/REDs/BJSM-IOC-consensus-statement-on-Relative-Energy-Deficiency-in-Sport-REDs.pdf': 'peer-reviewed-publication'
});
export function classifyEvidence(sources){
  if(!Array.isArray(sources)||!sources.length)return 'unclassified';
  const types=new Set();
  for(const s of sources){
    const reviewed=REVIEWED_SOURCE_TYPES[s?.url];
    if(reviewed){types.add(reviewed);continue;}
    const h=hostOf(s&&s.url);
    if(!h)continue;
    if(hostEnds(h,PUBLIC_HEALTH))types.add('public-health-guidance');
    else if(hostEnds(h,PROFESSIONAL_ORG))types.add('professional-organization-education');
    else if(hostEnds(h,SUPPORT_ORG))types.add('support-organization-education');
    else if(hostEnds(h,PEER_REVIEWED)||h==='pubmed.ncbi.nlm.nih.gov'||h==='pmc.ncbi.nlm.nih.gov')types.add('peer-reviewed-publication');
  }
  if(types.size===0)return 'unclassified';
  if(types.size===1)return [...types][0];
  return 'mixed';
}
export function classifyReview(article){
  if(article&&article.professionalReview===true)return 'professionally-reviewed';
  if(article&&article.sourcesCheckedOn)return 'source-checked';
  return 'unclassified';
}

export function buildMetadata(articles){return Object.fromEntries(articles.map(a=>{const descriptor=`${a.title||''} ${a.excerpt||''} ${a.practice||''}`.toLowerCase();const topics=Object.entries(topicRules).filter(([,r])=>r.test(descriptor)).map(([k])=>k);for(const r of FOXFIRE.routes)if(r.guideIds.includes(a.id)){const t=({self:'confidence',connection:'relationships'})[r.topic]||r.topic;if(!topics.includes(t))topics.push(t);}const foundation=FOXFIRE.modules.some(m=>m.guideIds.includes(a.id));if(foundation&&!topics.includes('foundations'))topics.push('foundations');const seed=METADATA_SEEDS[a.id]||a.curriculumMetadata;if(seed){for(const x of seed.topics||[])if(!topics.includes(x))topics.push(x);}const situations=Object.entries(situationRules).filter(([,r])=>r.test(descriptor)).map(([k])=>k);if(seed){for(const x of seed.situations||[])if(!situations.includes(x))situations.push(x);}const c=getApplication(a.id);const educationalLevel=approvedLevel(a.id,seed?.level||(foundation?'foundation':INTERMEDIATE_IDS.has(a.id)?'intermediate':'unclassified'));return [a.id,{guideId:a.id,level:educationalLevel,educationalLevel,topics:[...new Set(topics)],situations:[...new Set(situations)],participation:c?(c.participation.length>1?'either':c.participation[0]):seed?.participation||'unknown',physicalEffort:c?.effort||'unknown',emotionalEffort:'unknown',readMinutes:Math.max(2,Math.ceil(String(a.body||'').replace(/<[^>]+>/g,' ').trim().split(/\s+/).filter(Boolean).length/180)),actionMinutes:c?.minutes??null,relatedToolIds:[...new Set([a.tool,c?.tool==='boundary'?'boundaries':c?.tool==='conversation'?'conversation-workshop':c?.tool].filter(Boolean))],evidenceType:classifyEvidence(a.sources),reviewStatus:classifyReview(a),sourceCheckedOn:/^\d{4}-\d{2}-\d{2}$/.test(a.sourcesCheckedOn||'')?a.sourcesCheckedOn:null}];}));}
export function matchesMetadata(meta,filters={}){if(!meta)return false;const levels=array(filters.levels),situations=array(filters.situations),p=array(filters.participation);return (!levels.length||levels.includes(meta.level))&&(!situations.length||situations.some(x=>meta.situations.includes(x)))&&(!p.length||p.some(x=>meta.participation===x||(meta.participation==='either'&&['individual','shared'].includes(x))));}
export function recommend(n,articles,metadata=buildMetadata(articles)){n=normalizeNavigator(n);const route=FOXFIRE.routes.find(x=>x.id===n.goal);if(!route)return {route:null,guide:null,activity:null,href:'#/foundations',fallback:false};const index=new Map(articles.map(a=>[a.id,a]));const guide=route.guideIds.map(id=>index.get(id)).find(Boolean)||articles.find(a=>metadata[a.id]?.topics.includes(({self:'confidence',connection:'relationships'})[route.topic]||route.topic))||null;const limit=n.time?Number(n.time):Infinity;const candidates=route.guideIds.map(getApplication).filter(c=>c&&index.has(c.guideId)&&c.minutes<=limit&&(n.capacity!=='low'||c.effort==='low')&&c.participation.includes(n.use==='shared'?'shared':'individual'));const activity=candidates[0]||null;return {route,guide,activity,href:routeTools[route.id],fallback:!guide||!activity,topic:routeTopic[route.id]||null};}
