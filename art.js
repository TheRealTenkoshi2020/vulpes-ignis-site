// Owner-supplied artwork. All image requests stay on this site's origin.
const SQUARE = new Set(['conversation-chairs', 'connection-cups', 'curiosity-garden']);
export const ARTWORK = Object.freeze([
  'foxfire-fox', 'rooted-flame', 'connection-ribbons', 'learning-journal',
  'conversation-chairs', 'connection-cups', 'curiosity-garden', 'glass-rose',
  'interwoven-glass', 'moonlit-bloom', 'garden-threshold', 'guiding-foxfire', 'garden-bloom',
  // Sexual fitness artwork (owner-supplied, Nov 24 2026)
  'fitness-mediterranean-dinners', 'fitness-berries-citrus', 'fitness-mixed-nuts', 'fitness-lentil-soup', 'fitness-training-fuel-man', 'fitness-training-fuel-woman', 'fitness-zinc-foods', 'fitness-vitamin-d-research', 'fitness-ashwagandha', 'fitness-pharmacist-conversation', 'fitness-supplement-labels', 'fitness-woodland-walk', 'fitness-supported-strength', 'fitness-supported-hip-mobility', 'fitness-intimacy-pause', 'fitness-bicycle-fit', 'fitness-exercise-timing', 'fitness-pelvic-floor-breathing', 'fitness-breathing-pause', 'fitness-mindful-attention', 'fitness-muscle-relaxation', 'fitness-supported-yoga', 'fitness-after-workout-care', 'fitness-sleep-apnea', 'fitness-diabetes-care', 'fitness-smoking-change',
  // Artwork batch 1 (owner-supplied, Nov 23 2026)
  'sofa-distance', 'rainy-window', 'kintsugi-repair', 'forehead-blanket', 'friends-candlelight', 'hand-on-shoulder', 'satin-feathers', 'satin-robe-mirror', 'couple-kiss', 'masquerade-mask', 'ceramic-heart', 'kitchen-table-talk', 'silver-vanity', 'hand-on-velvet', 'wheelchair-couple-laughing', 'shared-laugh', 'gothic-roses', 'palm-boundary', 'reflecting-pool', 'smoke-fox', 'fox-forest-path', 'fox-over-water', 'foxfire-archway', 'peony-orbs', 'twin-smoke-foxes', 'velvet-lounge', 'fox-flame-crown'
]);

export const GUIDE_ART = Object.freeze({
  "eat-for-circulation": "fitness-mediterranean-dinners",
  "berries-citrus-and-erections": "fitness-berries-citrus",
  "go-nuts": "fitness-mixed-nuts",
  "comfort-starts-in-the-gut": "fitness-lentil-soup",
  "training-hard-eating-too-little": "fitness-training-fuel-man",
  "zinc-and-testosterone": "fitness-zinc-foods",
  "vitamin-d-and-erections": "fitness-vitamin-d-research",
  "ashwagandha-stress-and-sexual-health": "fitness-ashwagandha",
  "l-arginine-for-erections": "fitness-pharmacist-conversation",
  "reading-beyond-the-label": "fitness-supplement-labels",
  "walking-and-erectile-health": "fitness-woodland-walk",
  "strength-for-comfortable-intimacy": "fitness-supported-strength",
  "gentle-hip-mobility": "fitness-supported-hip-mobility",
  "bladder-leaks-and-intimacy": "fitness-intimacy-pause",
  "cycling-and-genital-numbness": "fitness-bicycle-fit",
  "exercise-and-antidepressant-sexual-side-effects": "fitness-exercise-timing",
  "breathing-with-the-pelvic-floor": "fitness-pelvic-floor-breathing",
  "five-minute-breathing-pause": "fitness-breathing-pause",
  "mind-wandering-and-mindfulness": "fitness-mindful-attention",
  "progressive-muscle-relaxation": "fitness-muscle-relaxation",
  "yoga-and-sexual-function": "fitness-supported-yoga",
  "after-workout-genital-care": "fitness-after-workout-care",
  "sleep-apnea-and-sexual-health": "fitness-sleep-apnea",
  "diabetes-and-sexual-function": "fitness-diabetes-care",
  "quitting-smoking-and-sexual-response": "fitness-smoking-change",
  'talk-about-needs': 'kitchen-table-talk',
  'ten-minute-check-in': 'connection-cups',
  'consent-in-practice': 'connection-ribbons',
  'confidence-without-performance': 'silver-vanity',
  'different-desires': 'interwoven-glass',
  'body-curiosity': 'glass-rose',
  'when-intimacy-hurts': 'moonlit-bloom',
  'performance-pressure': 'rooted-flame',
  'sti-conversation': 'conversation-chairs',
  'exploring-dynamics': 'interwoven-glass',
  'thoughtful-product-choices': 'learning-journal',
  'boundaries-are-an-invitation': 'palm-boundary',
  'prepare-for-care': 'moonlit-bloom',
  "different-libidos-common-ground": 'twin-smoke-foxes',
  "affection-without-expectation": "connection-cups",
  "long-distance-connection-routines": "connection-ribbons",
  "boundaries-at-the-start-of-dating": "glass-rose",
  "emotional-labor-and-fairness": "learning-journal",
  "intimacy-when-life-is-busy": "connection-cups",
  "appreciation-without-flattery": 'friends-candlelight',
  "listening-without-rushing-to-fix": 'hand-on-shoulder',
  "orientation-identity-and-language": "garden-threshold",
  "repair-after-an-argument": 'kintsugi-repair',
  "trust-after-broken-agreement": "connection-ribbons",
  "fantasy-is-not-an-obligation": 'masquerade-mask',
  "yes-maybe-no-list-for-adults": "learning-journal",
  "power-dynamics-begin-with-agreements": 'gothic-roses',
  "safewords-and-pause-signals": "connection-ribbons",
  "aftercare-is-a-conversation": 'hand-on-velvet',
  "sensory-curiosity-at-your-pace": 'satin-feathers',
  "flirting-with-clear-signals": "moonlit-bloom",
  "initiating-and-declining-with-care": 'couple-kiss',
  "stress-and-intimacy-connection": "garden-bloom",
  "sleep-fatigue-and-desire": "moonlit-bloom",
  "body-image-without-a-scoreboard": 'satin-robe-mirror',
  "coach-unsure-about-boundaries": "learning-journal",
  "coach-rejection-without-shame": 'rainy-window',
  "coach-partner-wont-talk": 'sofa-distance',
  "coach-identity-labels-dont-fit": "curiosity-garden",
  "coach-healing-after-betrayal": "garden-threshold",
  "coach-anxious-about-first-intimacy": "guiding-foxfire",
  "desire-and-arousal-are-different": "rooted-flame",
  "pleasure-anatomy-without-myths": 'ceramic-heart',
  "erections-not-a-report-card": "moonlit-bloom",
  "safer-sex-layered-protection": "connection-ribbons",
  "sti-testing-what-to-ask": "learning-journal",
  "lubrication-and-comfort": "garden-bloom",
  "digital-intimacy-and-privacy": "learning-journal",
  "talking-about-sex-toys": "curiosity-garden",
  "sharing-intimate-photos-consent": "glass-rose",
  "erectile-changes-what-next": "moonlit-bloom",
  "orgasm-variation-is-normal": 'peony-orbs',
  "pelvic-floor-muscles-not-always-stronger": "rooted-flame",
  "menopause-intimacy-comfort": 'forehead-blanket',
  "after-birth-intimacy-reconnection": "connection-cups",
  "disability-chronic-illness-and-intimacy": 'wheelchair-couple-laughing',
  "pain-during-intimacy-do-not-push-through": "moonlit-bloom",
  "coach-asking-for-safer-sex": "conversation-chairs",
  "coach-dating-after-trauma": 'fox-over-water',
  "coach-sti-positive-conversation": "conversation-chairs",
  "coach-when-to-seek-professional-help": "learning-journal",
  // Batch 07 health guides
  "hpv-vaccines-and-screening": "learning-journal",
  "choosing-contraception-together": "kitchen-table-talk",
  // Batch 08 BDSM / power-exchange education
  "power-dynamics-guide": "gothic-roses",
  "safety-protocols": "connection-ribbons",
  "kink-roles": "masquerade-mask",
  "tools-and-toys": "satin-feathers",
  "emotional-needs": "hand-on-velvet",
  "humiliation-versus-shame": "reflecting-pool",
  "consensual-control-and-healing": "kintsugi-repair",
  "guided-kink-journal": "learning-journal",
  "sensual-dungeon-atmosphere": "velvet-lounge",
  "unsafe-partner-red-flags": "palm-boundary"
});

// Fallback for guides without a hand-picked image (the 50 playful guides): a stable pick of
// abstract foxfire artwork that matches the guide's colour family, so cards vary but never show people out of context.
const ART_FALLBACK = Object.freeze({
  rose: ['glass-rose', 'peony-orbs', 'moonlit-bloom', 'garden-bloom', 'twin-smoke-foxes', 'foxfire-archway'],
  flame: ['rooted-flame', 'guiding-foxfire', 'fox-flame-crown', 'fox-forest-path', 'smoke-fox'],
  moon: ['moonlit-bloom', 'fox-over-water', 'garden-threshold', 'interwoven-glass'],
  other: ['learning-journal', 'connection-ribbons', 'curiosity-garden', 'interwoven-glass']
});
export function guideArt(article) {
  if (!article) return '';
  if (GUIDE_ART[article.id]) return GUIDE_ART[article.id];
  const pool = ART_FALLBACK[article.art] || ART_FALLBACK.other;
  let h = 0; for (const c of String(article.id)) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return pool[h % pool.length];
}

export const TOOL_ART = Object.freeze({
  conversation: 'conversation-chairs', 'check-in': 'connection-cups',
  boundaries: 'palm-boundary', reflection: 'reflecting-pool',
  care: 'garden-bloom', download: 'learning-journal'
});

export const PATH_ART = Object.freeze({
  communication: 'conversation-chairs', connection: 'shared-laugh',
  confidence: 'guiding-foxfire', boundaries: 'garden-bloom', curiosity: 'curiosity-garden'
});

// Descriptive alt text for every artwork. Used for page and article art; guide-card images stay decorative (alt="") because the card title names the link.
export const ART_ALT = Object.freeze({
  "fitness-mediterranean-dinners": "Chickpeas, lentils, vegetables, and a fish dinner on dark ceramic dishes.",
  "fitness-berries-citrus": "A bowl of berry-topped oats beside sliced citrus and berries.",
  "fitness-mixed-nuts": "Walnuts, almonds, hazelnuts, and pistachios beside a soft green light.",
  "fitness-lentil-soup": "Lentil and vegetable soup beside oats, berries, and leafy greens.",
  "fitness-training-fuel-man": "A tired adult rests against a gym wall beside a prepared meal and water.",
  "fitness-training-fuel-woman": "An adult rests after exercise beside a meal container and water bottle.",
  "fitness-zinc-foods": "Pumpkin seeds, oysters, beans, and grains beside an unlabelled bottle and magnifying glass.",
  "fitness-vitamin-d-research": "An unlabelled supplement bottle beside research papers and a magnifying glass.",
  "fitness-ashwagandha": "A plant with red berries and exposed roots beside capsules and an open book.",
  "fitness-pharmacist-conversation": "A pharmacist discusses an unlabelled medicine bottle with an adult at a counter.",
  "fitness-supplement-labels": "Unlabelled packets, gummies, and capsules beside a magnifying glass.",
  "fitness-woodland-walk": "An adult walks along a wooded path in warm evening light.",
  "fitness-supported-strength": "Adults demonstrate a wall push-up, a seated resistance-band movement, and rising from a chair.",
  "fitness-supported-hip-mobility": "An adult kneels on a mat with a chair supporting their hands.",
  "fitness-intimacy-pause": "An adult sits on a bed in a softly lit room beside a small pink light.",
  "fitness-bicycle-fit": "An adult inspects a bicycle saddle and seat post.",
  "fitness-exercise-timing": "An adult checks a wristwatch beside an exercise bicycle.",
  "fitness-pelvic-floor-breathing": "An adult rests with supported knees and hands on the abdomen, beneath a soft pink glow.",
  "fitness-breathing-pause": "An adult lies on cushions with bent knees in a softly lit room.",
  "fitness-mindful-attention": "An adult sits quietly on a bed with eyes closed and hands resting together.",
  "fitness-muscle-relaxation": "One hand rests open and the other is loosely curled on soft grey fabric.",
  "fitness-supported-yoga": "Adults explore supported yoga positions using a chair, cushions, blankets, and blocks.",
  "fitness-after-workout-care": "Clean clothing, folded towels, a wash bottle, and water on a dark surface.",
  "fitness-sleep-apnea": "A tired adult sits at the edge of a bed while another person sleeps nearby.",
  "fitness-diabetes-care": "An adult checks a handheld glucose meter beside a meal and walking shoes.",
  "fitness-smoking-change": "An adult walks into a garden while a closed cigarette packet remains on a table.",
  'foxfire-fox': "A rose-pink foxfire fox surrounded by sage-green leaves.",
  'rooted-flame': "A rose-pink flame rising from sage-green roots.",
  'connection-ribbons': "Pink and sage ribbons of light weaving together.",
  'learning-journal': "A dark green journal with handwritten notes, a ribbon and a glowing leaf.",
  'conversation-chairs': "Two armchairs, one rose and one sage, facing each other in a softly lit room.",
  'connection-cups': "Two sage ceramic cups on a wooden table beside a small glowing flower.",
  'curiosity-garden': "A glowing arched doorway opening into a garden of roses.",
  'glass-rose': "A rose made of swirling pink and sage glass.",
  'interwoven-glass': "Two ribbons of pink and sage glass twisting around each other.",
  'moonlit-bloom': "A translucent pink flower turned toward a soft beam of light.",
  'garden-threshold': "A round, rose-lit doorway opening onto a misty forest path.",
  'guiding-foxfire': "A small pink foxfire light floating along a dark forest path.",
  'garden-bloom': "A pink foxfire flame glowing on a garden path lined with green-lit blossoms.",
  'sofa-distance': "A couple sits at opposite ends of a velvet sofa, each turned slightly away.",
  'rainy-window': "A woman in a pink sweater looks out at rain on a window.",
  'kintsugi-repair': "Hands mending a cracked bowl with gold seams, kintsugi style.",
  'forehead-blanket': "An older couple rests foreheads together under a soft pink blanket.",
  'friends-candlelight': "Three friends laugh together on a sofa by candlelight.",
  'hand-on-shoulder': "A hand rests gently on someone's shoulder.",
  'satin-feathers': "Satin, feathers and smooth stones laid out side by side.",
  'satin-robe-mirror': "A woman in a black satin robe regards herself in a mirror.",
  'couple-kiss': "Two people kiss, hands gently holding each other's faces.",
  'masquerade-mask': "A gold masquerade mask with gloves and a single rose.",
  'ceramic-heart': "A ceramic anatomical heart wrapped in leaves and flowers.",
  'kitchen-table-talk': "A couple talks across a kitchen table.",
  'silver-vanity': "A silver-haired woman smiles at her reflection at a vanity.",
  'hand-on-velvet': "A hand resting on velvet beside marble and satin.",
  'wheelchair-couple-laughing': "A couple laughs together on a sofa, a wheelchair beside them.",
  'shared-laugh': "A couple shares a laugh on a sofa, her wheelchair beside her.",
  'gothic-roses': "A couple in dark, gothic clothing sits at a table scattered with roses.",
  'palm-boundary': "A woman in a blazer raises her palm in a calm stop gesture.",
  'reflecting-pool': "A woman in pink stands at the edge of a still reflecting pool.",
  'smoke-fox': "A fox formed from drifting pink smoke.",
  'fox-forest-path': "A glowing fox walks a forest path lit by lanterns.",
  'fox-over-water': "A luminous fox spirit hovers above rippling water.",
  'foxfire-archway': "An archway glowing with green and rose foxfire light.",
  'peony-orbs': "Peonies surrounded by floating green and pink orbs of light.",
  'twin-smoke-foxes': "Two smoke foxes, one pink and one green, face each other.",
  'velvet-lounge': "An empty velvet lounge glowing with soft foxfire light.",
  'fox-flame-crown': "A fox wearing a crown of flame."
});

export function artImage(name, { hero = false, card = false, decorative = false } = {}) {
  if (!ARTWORK.includes(name)) return '';
  const width = card ? 640 : 1280;
  const height = SQUARE.has(name) ? width : width * 9 / 16;
  return `<img class="site-art-image art-image-${name}" src="assets/art/${name}-${width}.webp" srcset="assets/art/${name}-640.webp 640w, assets/art/${name}-1280.webp 1280w" sizes="${card ? '(max-width:640px) calc(100vw - 48px), (max-width:960px) 30vw, 380px' : '(max-width:760px) calc(100vw - 48px), 46vw'}" width="${width}" height="${height}" alt="${decorative || card ? '' : (ART_ALT[name] || '')}" loading="${hero ? 'eager' : 'lazy'}" decoding="async"${hero ? ' fetchpriority="high"' : ''}>`;
}

export function artPanel(name, className = '', { decorative = false } = {}) {
  const hidden = decorative || !ART_ALT[name];
  return `<figure class="art-panel${SQUARE.has(name) ? ' art-square' : ''} ${className}"${hidden ? ' aria-hidden="true"' : ''}>${artImage(name, { decorative: hidden })}</figure>`;
}
