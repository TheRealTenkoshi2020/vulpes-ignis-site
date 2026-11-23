import { ARTICLES } from './data.js';

// Original educational sequences. Completion records actions the visitor marks,
// never a health outcome, diagnosis, compatibility score, or daily obligation.
export const PATHS = [
  {
    id: 'communication', name: 'Find the words', theme: 'Words & understanding', tone: 'green',
    description: 'For the conversation you want to have, but don’t quite know how to begin.',
    time: 'About 10 minutes', icon: 'chat',
    steps: [
      { id: 'understand', title: 'Give the conversation a little room', description: 'Read a short guide to making a request that leaves room for an honest answer.', href: '/learn/talk-about-needs', action: 'Read the guide', kind: 'Read' },
      { id: 'open', title: 'Find one question that feels like you', description: 'Choose a conversation card. You can use it privately or invite a willing adult partner to join you.', href: '/tools/conversation', action: 'Open conversation cards', kind: 'Try' },
      { id: 'checkin', title: 'Put one small request into words', description: 'Use the check-in builder to name what is present and one thing you would appreciate.', href: '/tools/check-in', action: 'Make a check-in note', kind: 'Reflect' }
    ]
  },
  {
    id: 'connection', name: 'Make room for connection', theme: 'Together, at your pace', tone: 'pink',
    description: 'A small shared moment, without turning your relationship into another project.',
    time: 'About 15 minutes', icon: 'heart',
    steps: [
      { id: 'read', title: 'Start with ten willing minutes', description: 'Read three questions that make space for both people. Choose another time if today doesn’t work.', href: '/learn/ten-minute-check-in', action: 'Read the check-in guide', kind: 'Read' },
      { id: 'prepare', title: 'Prepare your side of the conversation', description: 'Name one thing on your mind, one moment of connection, and one manageable request.', href: '/tools/check-in', action: 'Prepare a check-in', kind: 'Try' },
      { id: 'notice', title: 'Notice what you want to carry forward', description: 'Reflect privately on what felt useful. An invitation can remain an invitation, even when the answer is no.', href: '/tools/reflection', action: 'Open a private reflection', kind: 'Reflect' }
    ]
  },
  {
    id: 'confidence', name: 'Come back to yourself', theme: 'Confidence & self-understanding', tone: 'green',
    description: 'A little less grading yourself. A little more listening to what you need.',
    time: 'About 10 minutes', icon: 'leaf',
    steps: [
      { id: 'read', title: 'Set down the scoreboard', description: 'Read a short guide to making room for uncertainty without treating yourself as a performance.', href: '/learn/confidence-without-performance', action: 'Read the confidence guide', kind: 'Read' },
      { id: 'reflect', title: 'Give yourself one honest sentence', description: 'Notice what is here, what you’re curious about, and a kind next step. Every prompt is optional.', href: '/tools/reflection', action: 'Make room to reflect', kind: 'Reflect' },
      { id: 'boundary', title: 'Name a limit that supports you', description: 'Find words for something you welcome, something you don’t, and an action you control.', href: '/tools/boundaries', action: 'Find my boundary words', kind: 'Try' }
    ]
  },
  {
    id: 'boundaries', name: 'Stand beside your boundaries', theme: 'Consent & choice', tone: 'pink',
    description: 'Clearer words for your yes, your no, and your “let me think about it.”',
    time: 'About 10 minutes', icon: 'lock',
    steps: [
      { id: 'consent', title: 'Make room for a real choice', description: 'Read how check-ins and changing your mind fit into everyday consent.', href: '/learn/consent-in-practice', action: 'Read about consent', kind: 'Read' },
      { id: 'wording', title: 'Try a boundary in your own words', description: 'The boundary builder gives your words a simple structure. Edit it until it sounds like you.', href: '/tools/boundaries', action: 'Open the boundary builder', kind: 'Try' },
      { id: 'carry', title: 'Take your boundary into real life', description: 'Read about choosing an action you control and respecting another person’s answer.', href: '/learn/boundaries-are-an-invitation', action: 'Read the boundary guide', kind: 'Read' }
    ]
  },
  {
    id: 'curiosity', name: 'Follow your curiosity', theme: 'Explore with intention', tone: 'green',
    description: 'Explore adult preferences with room to be undecided and no label to earn.',
    time: 'About 10–15 minutes', icon: 'spark',
    steps: [
      { id: 'learn', title: 'Start with the conversation', description: 'Read about discussing adult relationship dynamics, choices, and boundaries before adopting a label.', href: '/learn/exploring-dynamics', action: 'Read the exploration guide', kind: 'Read' },
      { id: 'reflect', title: 'Explore some language, if you want to', description: 'The optional adult-dynamics reflection offers vocabulary. Skip any statement, or leave the exercise entirely.', href: '/dynamics', action: 'Open the optional reflection', kind: 'Explore' },
      { id: 'keep', title: 'Keep what feels useful', description: 'Use a private reflection to notice what resonates and what you would rather leave alone.', href: '/tools/reflection', action: 'Reflect in my own words', kind: 'Reflect' }
    ]
  }
];

const guideIds = new Set(ARTICLES.map(article => article.id));
export const getPath = id => PATHS.find(path => path.id === id);
export const emptySpace = () => ({ activePath: null, completed: {}, saved: [], lastGuide: null });

// Accept only current public content IDs; reject stale or malformed stored data.
export function restoreSpace(raw) {
  const space = emptySpace();
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return space;
  space.activePath = getPath(raw.activePath)?.id ?? null;
  space.saved = Array.isArray(raw.saved) ? [...new Set(raw.saved.filter(id => guideIds.has(id)))] : [];
  space.lastGuide = guideIds.has(raw.lastGuide) ? raw.lastGuide : null;
  for (const path of PATHS) {
    const stored = raw.completed?.[path.id];
    if (!Array.isArray(stored)) continue;
    const valid = path.steps.map(step => step.id).filter(id => stored.includes(id));
    if (valid.length) space.completed[path.id] = valid;
  }
  return space;
}

export function choosePath(space, id) {
  const result = restoreSpace(space);
  if (getPath(id)) result.activePath = id;
  return result;
}

export function markStep(space, pathId, stepId, checked) {
  const result = restoreSpace(space);
  const path = getPath(pathId);
  if (!path?.steps.some(step => step.id === stepId)) return result;
  const done = new Set(result.completed[pathId] ?? []);
  checked ? done.add(stepId) : done.delete(stepId);
  result.completed[pathId] = path.steps.filter(step => done.has(step.id)).map(step => step.id);
  return result;
}

export function saveGuide(space, id) {
  const result = restoreSpace(space);
  if (!guideIds.has(id)) return result;
  result.saved = result.saved.includes(id) ? result.saved.filter(guide => guide !== id) : [...result.saved, id];
  return result;
}

export function pathProgress(space, id) {
  const path = getPath(id);
  if (!path) return { done: 0, total: 0, next: null, complete: false };
  const done = new Set(restoreSpace(space).completed[id] ?? []);
  return { done: done.size, total: path.steps.length, next: path.steps.find(step => !done.has(step.id)) ?? null, complete: done.size === path.steps.length };
}

export function readingListText(space) {
  const clean = restoreSpace(space);
  const path = getPath(clean.activePath);
  const sections = ['VULPES IGNIS · MY READING LIST', 'A personal copy. This file stays on your device after you clear the website session.'];
  if (path) {
    const progress = pathProgress(clean, path.id);
    sections.push(`MY PATH: ${path.name}\n${progress.done} of ${progress.total} steps marked complete.\n` + path.steps.map(step => `${clean.completed[path.id]?.includes(step.id) ? '[x]' : '[ ]'} ${step.title}`).join('\n'));
  }
  sections.push('MY SAVED GUIDES\n' + (clean.saved.length ? clean.saved.map(id => {
    const guide = ARTICLES.find(article => article.id === id);
    const base = typeof window !== "undefined" && window.location ? new URL(".", window.location.href).href : "https://therealtenkoshi2020.github.io/vulpes-ignis-site/";
    return `${guide.title}\n${base}#/learn/${guide.id}`;
  }).join('\n\n') : 'No guides saved.'));
  return sections.join('\n\n');
}
