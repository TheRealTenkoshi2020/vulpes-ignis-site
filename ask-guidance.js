// Deterministic, offline guidance based only on existing Vulpes Ignis educational guides.
// This is keyword matching, not AI, personalized coaching, triage, or diagnosis.
export const GUIDANCE_TOPICS = Object.freeze([
  {
    id:'communication', label:'Talking about something difficult',
    cue:/\b(talk|communicat\w*|conversation|speak|tell (my|them|him|her)|bring (it|this) up|how (can|do) i say)\b/i,
    context:/\b(partner|spouse|husband|wife|boyfriend|girlfriend|relationship|affection|closeness|intimacy|feelings|need)\b/i,
    summary:'A difficult conversation is more manageable when it begins with one experience and an invitation, rather than a verdict about the other person.',
    action:'Pick one specific thing you want them to understand. Ask whether this is a good time to talk, and leave room for their response.',
    starter:'There is something about how we connect that I would like to talk through. Is now a good time? I would like to understand your side too.',
    guides:['talk-about-needs','ten-minute-check-in'], tool:'conversation'
  },
  {
    id:'connection', label:'Affection and feeling connected',
    cue:/\b(affection|closeness|cuddles?|lonely|distant|disconnect\w*|quality time|feel closer|touch)\b/i,
    context:/\b(want|need|more|less|miss|together|partner|feel|time)\b/i,
    summary:'Closeness can mean different things: attention, conversation, affection, or touch. Naming the kind you miss is more useful than asking someone to guess.',
    action:'Name one small, welcome form of connection and ask what would feel comfortable for each of you this week.',
    starter:'I have been missing some of our smaller moments of closeness. Would you be open to finding one simple way to connect this week, without any expectation beyond that?',
    guides:['ten-minute-check-in','talk-about-needs'], tool:'check-in'
  },
  {
    id:'desire', label:'Different levels of desire',
    cue:/\b(desire|libido|sex drive|sexual interest|want more sex|want less sex|desire mismatch|different sex drives|(?:never|rarely|doesn'?t|does not|don'?t) wants? sex)\b/i,
    context:/\b(partner|different|mismatch|pressure|sex|intimacy|want|relationship)\b/i,
    summary:'Differences in desire are not a debt or a diagnosis. Both people can have real feelings without anyone owing sexual activity.',
    action:'Ask what each of you means by intimacy today. Consider options for connection with no expectation that they lead to sex.',
    starter:'I care about us, and I notice we sometimes want different kinds of closeness. Could we talk about what feels welcome for each of us without deciding that anything has to happen?',
    guides:['different-desires','consent-in-practice'], tool:'conversation'
  },
  {
    id:'boundaries', label:'Boundaries and saying no',
    cue:/\b(boundar\w*|say no|set limits|limits|uncomfortable|not comfortable|pressure|pressured|coerc\w*|respect my no)\b/i,
    context:/\b(partner|touch|intimacy|consent|relationship|say|feel|stop|sexual)\b/i,
    summary:'A boundary describes what you will or will not participate in. It does not require a debate, a justification, or someone else’s approval.',
    action:'Write one clear limit and, if it is useful, one alternative that remains genuinely optional.',
    starter:'I am not comfortable with that. I am happy to talk about what feels good for both of us, but I need this boundary to be respected.',
    guides:['boundaries-are-an-invitation','consent-in-practice'], tool:'boundaries'
  },
  {
    id:'consent', label:'Consent and checking in',
    cue:/\b(consent|permission|safeword|safe word|check in during sex|withdraw consent)\b/i,
    context:/\b(touch|sex|intimacy|stop|ask|partner|yes|no|comfortable)\b/i,
    summary:'Consent needs to be freely chosen, specific to the moment, and changeable. Silence or a previous yes does not guarantee permission now.',
    action:'Ask an open question about what is welcome, and make it easy to pause or change direction.',
    starter:'Are you comfortable with this, or would you rather slow down or stop? Either answer is completely okay.',
    guides:['consent-in-practice','boundaries-are-an-invitation'], tool:'boundaries'
  },
  {
    id:'performance', label:'Sexual performance pressure',
    cue:/\b(performance|erection|erectile|ejaculat\w*|climax|orgasm|finishing|finish too fast|anxiety|(?:get|stay|staying|keep) hard)\b/i,
    context:/\b(sex|sexual|intimacy|partner|bed|pressure|desire|arousal|erection|(?:get|stay|staying|keep) hard)\b/i,
    needsContext:true,
    summary:'Worry about a particular sexual outcome can make connection feel like a test. A person’s worth is not measured by a physical response.',
    action:'Consider setting aside a moment of connection without a target outcome. If a physical change is persistent or concerning, consider discussing it with a qualified clinician.',
    starter:'I sometimes feel pressure to make everything go a certain way. Could we focus on what feels comfortable and connected instead of a specific outcome?',
    guides:['performance-pressure','confidence-without-performance'], tool:'conversation'
  },
  {
    id:'confidence', label:'Body confidence and self-judgment',
    cue:/\b(insecure|confidence|self-esteem|body image|ashamed|embarrassed|appearance|look unattractive|compare my body|nervous|first time)\b/i,
    context:/\b(body|sex|intimacy|partner|feel|attractive|performance|appearance|first time)\b/i,
    summary:'Noticing your body is different from judging it. Confidence does not require liking everything about how you look or feel.',
    action:'Identify one expectation you have been measuring yourself against, and choose a more neutral question about comfort or curiosity.',
    starter:'I have been feeling self-conscious, and I would appreciate a little patience while I figure out what feels comfortable for me.',
    guides:['body-curiosity','confidence-without-performance'], tool:'reflection'
  },
  {
    id:'sti', label:'STI conversations and testing',
    cue:/\b(stis?|stds?|sexually transmitted|sexual health screening|condoms?|testing for infection|chlamydia|gonorrh\w*|syphilis|herpes|hpv|hiv)\b/i,
    context:/\b(partner|test|tested|testing|positive|sex|screening|exposure|prevention|talk|protection)\b/i,
    summary:'Talking about STI testing and protection is a shared health conversation, not an accusation or an assumption about anyone’s history.',
    action:'Ask what each person knows about their testing and protection preferences. For testing schedules or exposure concerns, rely on a qualified clinician or current public-health guidance.',
    starter:'I want us to feel informed and comfortable. Can we talk about testing, protection, and what we each need to feel ready?',
    guides:['sti-conversation','prepare-for-care'], tool:'care'
  },
  {
    id:'health', label:'Pain, discomfort, and asking for care',
    cue:/\b(pain|painful|hurts?|discomfort|bleeding|symptoms?|clinician|doctor|pelvic|genital|medication)\b/i,
    context:/\b(sex|sexual|intimacy|body|partner|appointment|health|medical|vagina|penis|pelvic|genital)\b/i,
    needsContext:true,
    summary:'You do not need to identify a cause before asking for care. This tool cannot assess symptoms, diagnose conditions, or determine urgency.',
    action:'Pause activities that hurt. Write down what you notice and when it occurs to discuss with a qualified healthcare professional. If you think you have an emergency, seek urgent local medical help.',
    starter:'I have noticed a change or discomfort I would like to understand. Could we discuss what might need assessment and what questions I should ask?',
    guides:['when-intimacy-hurts','prepare-for-care'], tool:'care'
  },
  {
    id:'dynamics', label:'Exploring consensual dynamics',
    cue:/\b(kink|bdsm|dominant|submissive|power exchange|roleplay|switching roles|bondage|dynamic)\b/i,
    context:/\b(partner|curious|explore|consent|boundary|role|sex|relationship|try|trying|we|us)\b/i,
    summary:'Curiosity about roles or power dynamics is a conversation, not an obligation. Consent, autonomy, and the ability to stop remain essential.',
    action:'Describe what interests you without presuming interest from anyone else. Discuss boundaries and expectations before deciding whether to explore anything.',
    starter:'There is a kind of dynamic I am curious about. Would you be comfortable talking about it as an idea, without any pressure to try it?',
    guides:['exploring-dynamics','consent-in-practice'], tool:'boundaries'
  },
  {
    id:'products', label:'Choosing intimate products thoughtfully',
    cue:/\b(toy|toys|lube|lubricant|intimacy product|sexual wellness product|sex product|device)\b/i,
    context:/\b(comfort|sexual|intimacy|materials?|clean|safe|buy|use|choose|product|toy)\b/i,
    summary:'Useful choices begin with personal comfort, materials, hygiene, and practical needs—not a promise that any product will solve a relationship or health issue.',
    action:'Identify what you actually want the item to help with, then read reliable care and safety information before choosing.',
    starter:'Before we buy anything, can we talk about what would feel comfortable and what we would actually want it to help with?',
    guides:['thoughtful-product-choices','body-curiosity'], tool:'reflection'
  }
]);
export const GUIDANCE_CHOICES = Object.freeze(GUIDANCE_TOPICS.map(({id,label})=>Object.freeze({id,label})));
const UNCERTAIN = Object.freeze({
  matched:false,id:null,label:'No reliable topic match',
  summary:'That question doesn’t match any of our topics yet. Ask Vulpes is not a chatbot or a search engine, so rather than guess, it leaves this one unanswered. Try choosing a topic instead.',
  action:'Choose a topic from the menu to see a relevant educational starting point, or browse the learning library. If this is about immediate danger, contact local emergency services.',
  starter:'',guides:[],tool:null
});
// Stage 1.1: transparent topic ordering, suggestions for another angle, and safety fallback.
const PRIORITY={communication:1,connection:2,desire:6,boundaries:6,consent:6,performance:5,confidence:3,sti:7,health:9,dynamics:6,products:4};
const REFLECTIONS={
 communication:'What would you most like the other person to understand?',
 connection:'Which small kind of closeness would feel welcome this week?',
 desire:'What kind of connection feels comfortable without an expectation of sex?',
 boundaries:'What limit matters here, and what action can you control?',
 consent:'How could everyone involved feel free to pause or decline?',
 performance:'What would intimacy look like if there were no goal to achieve?',
 confidence:'Which expectation could you set aside for a moment?',
 sti:'What testing or protection question could you discuss with a qualified professional?',
 health:'What change or symptom would you want to describe to a qualified clinician?',
 dynamics:'What would you want to discuss before doing anything?',
 products:'What comfort, material, or hygiene question matters most?'
};
const SAFETY_LANGUAGE=/\b(suicid\w*|kill myself|end my life|self[- ]?harm|sexual assault|raped|rape|threaten(?:ed|ing)? to (?:hurt|kill)|afraid for my safety|being forced to have sex|forced into sex|partner (?:hit|hits|hurt|hurts) me)\b/i;
const UNRELATED=/\b(at work|performance review|my boss|coworker|manager|office job|new job|job interview|wifi|internet connection|train station|software|javascript)\b/i;
const ADULT_CONTEXT=/\b(partner|spouse|husband|wife|boyfriend|girlfriend|relationship|intimacy|affection|closeness|sex|sexual|consent|boundary|bdsm|kink|sti|std|genital|my body)\b/i;
const blank=(message=UNCERTAIN.summary)=>({
 matched:false,safety:false,id:null,label:'No reliable topic match',summary:message,
 action:'Choose a topic to explore our educational guides, or browse the library. If this is an emergency, contact local emergency services.',
 starter:'',guides:[],tool:null,alternatives:[],why:'No reliable topic was identified.',reflection:''
});
export function answerQuestion(question,selectedTopic='auto'){
 const q=typeof question==='string'?question.trim().slice(0,1500):'';
 if(SAFETY_LANGUAGE.test(q))return {
   ...blank('This tool cannot assess a crisis or personal safety. You deserve direct support from someone who can respond.'),
   safety:true,label:'Safety needs a human response',
   action:'If you are in immediate danger, contact local emergency services. If you might harm yourself, contact local crisis support or a trusted person who can stay with you. In the United States, call or text 988 for suicidal crisis support.',
   why:'This kind of question requires human support, not a generated conversation script.'
 };
 const explicit=GUIDANCE_TOPICS.find(x=>x.id===selectedTopic);
 if(!q&&!explicit)return blank();
 if(!explicit&&UNRELATED.test(q)&&!ADULT_CONTEXT.test(q))return blank();
 let topic=explicit,alternatives=[];
 if(!topic){
   const askToTalk=/\b(how (can|do|should) i (talk|tell)|how to (talk|tell)|what (can|should) i say)\b/i.test(q);
   const matches=GUIDANCE_TOPICS.map(item=>{
     const extra=item.id==='desire'&&/\bdesires\b/i.test(q);
     const cue=item.cue.test(q)||extra,context=item.context.test(q);
     const needsContext=item.needsContext||['communication','connection','confidence','dynamics','products','consent'].includes(item.id);
     const score=cue&&(!needsContext||context)?
       3+(context?2:0)+(PRIORITY[item.id]||0)+(item.id==='communication'&&askToTalk?4:0):0;
     return {item,score};
   }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score);
   topic=matches[0]?.item||null;
   alternatives=matches.slice(1,3).map(({item})=>({id:item.id,label:item.label}));
 }
 if(!topic)return blank();
 return {
   matched:true,safety:false,id:topic.id,label:topic.label,
   summary:topic.summary,action:topic.action,starter:topic.starter,
   guides:[...topic.guides],tool:topic.tool,
   reflection:REFLECTIONS[topic.id],alternatives,
   selectedManually:!!explicit,
   why:explicit?'You selected this topic. Suggestions come from existing guides and fixed templates.':'This is a match to predefined topic keywords, not an interpretation of your circumstances.'
 };
}
