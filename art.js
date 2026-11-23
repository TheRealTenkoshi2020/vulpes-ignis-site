// Owner-supplied artwork. All image requests stay on this site's origin.
const SQUARE = new Set(['conversation-chairs', 'connection-cups', 'curiosity-garden']);
export const ARTWORK = Object.freeze([
  'foxfire-fox', 'rooted-flame', 'connection-ribbons', 'learning-journal',
  'conversation-chairs', 'connection-cups', 'curiosity-garden', 'glass-rose',
  'interwoven-glass', 'moonlit-bloom', 'garden-threshold', 'guiding-foxfire', 'garden-bloom'
]);

export const GUIDE_ART = Object.freeze({
  'talk-about-needs': 'conversation-chairs',
  'ten-minute-check-in': 'connection-cups',
  'consent-in-practice': 'connection-ribbons',
  'confidence-without-performance': 'rooted-flame',
  'different-desires': 'interwoven-glass',
  'body-curiosity': 'glass-rose',
  'when-intimacy-hurts': 'moonlit-bloom',
  'performance-pressure': 'rooted-flame',
  'sti-conversation': 'conversation-chairs',
  'exploring-dynamics': 'interwoven-glass',
  'thoughtful-product-choices': 'learning-journal',
  'boundaries-are-an-invitation': 'glass-rose',
  'prepare-for-care': 'moonlit-bloom',
  "different-libidos-common-ground": "interwoven-glass",
  "affection-without-expectation": "connection-cups",
  "long-distance-connection-routines": "connection-ribbons",
  "boundaries-at-the-start-of-dating": "glass-rose",
  "emotional-labor-and-fairness": "learning-journal",
  "intimacy-when-life-is-busy": "connection-cups",
  "appreciation-without-flattery": "moonlit-bloom",
  "listening-without-rushing-to-fix": "conversation-chairs"
});

export const TOOL_ART = Object.freeze({
  conversation: 'conversation-chairs', 'check-in': 'connection-cups',
  boundaries: 'glass-rose', reflection: 'moonlit-bloom',
  care: 'garden-bloom', download: 'learning-journal'
});

export const PATH_ART = Object.freeze({
  communication: 'conversation-chairs', connection: 'connection-cups',
  confidence: 'guiding-foxfire', boundaries: 'garden-bloom', curiosity: 'curiosity-garden'
});

export function artImage(name, { hero = false, card = false } = {}) {
  if (!ARTWORK.includes(name)) return '';
  const width = card ? 640 : 1280;
  const height = SQUARE.has(name) ? width : width * 9 / 16;
  return `<img class="site-art-image art-image-${name}" src="assets/art/${name}-${width}.webp" srcset="assets/art/${name}-640.webp 640w, assets/art/${name}-1280.webp 1280w" sizes="${card ? '(max-width:640px) calc(100vw - 48px), (max-width:960px) 30vw, 380px' : '(max-width:760px) calc(100vw - 48px), 46vw'}" width="${width}" height="${height}" alt="${hero ? 'A rose-pink foxfire fox surrounded by sage-green leaves.' : ''}" loading="${hero ? 'eager' : 'lazy'}" decoding="async"${hero ? ' fetchpriority="high"' : ''}>`;
}

export function artPanel(name, className = '') {
  return `<figure class="art-panel${SQUARE.has(name) ? ' art-square' : ''} ${className}" aria-hidden="true">${artImage(name)}</figure>`;
}
