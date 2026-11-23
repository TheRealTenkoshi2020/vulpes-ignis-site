import { ARTICLES } from './data.js';
import { PATHS, getPath, pathProgress } from './paths.js';
import { artPanel, PATH_ART } from './art.js';

const escape = value => String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));

function progress(space, path) {
  const result = pathProgress(space, path.id);
  return `<div class="path-progress"><span>${result.done} of ${result.total} steps marked complete</span><progress max="${result.total}" value="${result.done}" aria-label="${escape(path.name)} progress"></progress></div>`;
}

export function pathCard(space, path) {
  const active = space.activePath === path.id;
  const result = pathProgress(space, path.id);
  return `<article class="journey-card ${path.tone}"><div class="journey-card-top"><span class="eyebrow">${path.theme}</span><span class="journey-flower" aria-hidden="true">✳</span></div><h2><a href="#/paths/${path.id}">${path.name}</a></h2><p>${path.description}</p><span class="journey-time">${path.time} · ${path.steps.length} small steps</span>${result.done || active ? progress(space, path) : ''}<a class="button ${active ? 'primary' : 'secondary'}" href="#/paths/${path.id}">${active ? result.complete ? 'Revisit my path' : 'Continue my path' : 'Explore this path'}</a></article>`;
}

export function continueHome(space) {
  const path = getPath(space.activePath);
  const guide = ARTICLES.find(article => article.id === space.lastGuide);
  if (!path && !guide && !space.saved.length) return '';
  return `<section class="continue-strip" aria-label="Continue your private session"><div><span class="eyebrow">A LITTLE SPACE FOR YOU</span><p>${path ? escape(path.name) : guide ? 'Pick up where you left off.' : 'Your saved guides are here.'}</p>${path ? `<span class="muted">${pathProgress(space, path.id).done} of ${path.steps.length} steps complete · Your pace, always.</span>` : '<span class="muted">Kept in this tab’s session.</span>'}</div><div class="button-row">${path ? `<a class="button primary" href="#/paths/${path.id}">Continue my path</a>` : guide ? `<a class="button primary" href="#/learn/${guide.id}">Return to my guide</a>` : ''}<a class="button secondary" href="#/my-space">My space${space.saved.length ? ` · ${space.saved.length} saved` : ''}</a></div></section>`;
}

export function pathsPage(space) {
  const path = getPath(space.activePath);
  return `<div class="wrap section paths-page"><div class="illustrated-head"><header class="page-hero"><p class="eyebrow">ONE USEFUL STEP IS ENOUGH</p><h1>A place to begin.<br><em>A pace that’s yours.</em></h1><p class="lead">Choose what brought you here. Each path connects a short guide, a practical tool, and a little room to reflect. No quiz required.</p></header>${artPanel('fox-forest-path')}</div>${path ? continueHome(space) : ''}<div class="journey-grid">${PATHS.map(item => pathCard(space, item)).join('')}</div><section class="alternative-paths"><div><p class="eyebrow">STILL FINDING YOUR STARTING POINT?</p><h2>Curiosity is enough.</h2><p>Answer a few optional questions for suggested reading, or explore the whole library in your own order.</p></div><div class="button-row"><a class="button primary" href="#/assessment">Find my spark</a><a class="button secondary" href="#/learn">Browse all guides</a><a class="text-link" href="#/explore">Explore the reflections</a></div></section><p class="session-footnote">Path progress is a record of steps you choose to mark, not a measure of your wellbeing. It stays in this tab’s session. No streaks. No deadlines.</p></div>`;
}

export function pathPage(space, id) {
  const path = getPath(id);
  if (!path) return null;
  const active = space.activePath === id;
  const result = pathProgress(space, id);
  return `<div class="wrap section path-detail"><a class="back-link" href="#/paths">All guided paths</a><div class="path-intro"><header class="page-hero"><p class="eyebrow">${path.theme}</p><h1>${path.name}</h1><p class="lead">${path.description}</p><p class="journey-time">${path.time} · Move through it in any order</p></header><aside class="path-compass"><p class="eyebrow">${active ? result.complete ? 'A LITTLE ROOM TO NOTICE' : 'YOUR NEXT SMALL STEP' : 'MAKE IT YOURS'}</p><h2>${active ? result.complete ? 'You made some space.' : result.next.title : 'One path. Your pace.'}</h2><p>${active ? result.complete ? 'Keep what helped. Revisit anything, choose another path, or leave it here for today.' : result.next.description : 'Follow this path to keep your place in this tab. You can change paths and return without losing your steps.'}</p>${progress(space, path)}${active ? `<a class="button primary" href="${result.next ? '#' + result.next.href : '#/my-space'}">${result.next ? result.next.action : 'Return to my space'}</a>` : `<button class="button primary" data-action="choose-path" data-path="${path.id}">Follow this path</button>`}</aside></div>${artPanel(PATH_ART[id],'path-illustration')}<section class="path-steps" aria-labelledby="steps-title"><div class="section-heading"><h2 id="steps-title">Small steps.<br>Something useful in each.</h2><p class="section-subtitle">You choose when a step feels complete.<br>Skipping or stopping is always an option.</p></div><ol class="journey-steps">${path.steps.map(step => {
    const checked = space.completed[id]?.includes(step.id) ?? false;
    return `<li class="journey-step ${checked ? 'is-done' : ''}"><div class="step-mark"><input id="step-${path.id}-${step.id}" type="checkbox" data-path-step="${step.id}" data-path="${path.id}" aria-label="Mark ${escape(step.title)} complete" ${checked ? 'checked' : ''} ${active ? '' : 'disabled'}></div><div class="step-content"><p class="eyebrow">${step.kind}${checked ? ' · Marked complete' : ''}</p><h3>${step.title}</h3><p>${step.description}</p><a class="text-link" href="#${step.href}">${step.action}</a></div><label class="step-toggle-label" for="step-${path.id}-${step.id}">${checked ? 'Completed' : 'Mark complete'}</label></li>`;
  }).join('')}</ol>${active ? '' : '<p class="session-footnote">Choose “Follow this path” to start marking your steps. You can read or use any resource without starting a path.</p>'}</section><div class="path-bottom"><p>A path is an invitation. Your life gets the final edit.</p><a class="button secondary" href="#/paths">Explore another path</a></div></div>`;
}

export function mySpace(space, flows, card) {
  const path = getPath(space.activePath);
  const saved = space.saved.map(id => ARTICLES.find(article => article.id === id)).filter(Boolean);
  const last = ARTICLES.find(article => article.id === space.lastGuide);
  const reflections = [['journey', 'Find your spark', '/assessment', '/results'], ['dynamics', 'Adult dynamics reflection', '/dynamics', '/dynamics-results']].filter(([key]) => flows[key].completed || flows[key].active);
  return `<div class="wrap section my-space"><div class="illustrated-head"><header class="page-hero"><p class="eyebrow">JUST FOR THIS LITTLE WHILE</p><h1>A little space.<br><em>All your own.</em></h1><p class="lead">A quiet corner for your path, your saved guides, and whatever felt worth returning to. It all stays in this tab’s session; download your reading list if you’d like to keep it.</p></header>${artPanel('velvet-lounge')}</div>${path ? `<section class="space-current" aria-label="Your current guided path">${pathCard(space, path)}<div class="space-note"><p class="eyebrow">NO PERFECT ROUTE REQUIRED</p><h2>You can change<br>your mind here.</h2><p>Choose another path at any time. Steps you’ve already marked stay available in this session, even when you switch.</p><a class="text-link" href="#/paths">See all guided paths</a></div></section>` : `<section class="space-empty"><span class="large-spark" aria-hidden="true">✳</span><div><h2>Begin with what’s on your mind.</h2><p>Five gentle paths connect reading, practical tools, and a little reflection.</p><a class="button primary" href="#/paths">Choose a starting point</a></div></section>`}${last || reflections.length ? `<section class="space-return"><h2>Pick up a thread.</h2><div class="return-links">${last ? `<a href="#/learn/${last.id}"><span>Last opened guide</span><strong>${escape(last.title)}</strong></a>` : ''}${reflections.map(([key, name, intro, result]) => `<a href="#${flows[key].completed ? result : intro}"><span>${flows[key].completed ? 'Your last reflection' : 'Reflection in progress'}</span><strong>${name}</strong></a>`).join('')}</div></section>` : ''}<section class="saved-section" aria-labelledby="saved-title"><div class="section-heading"><div><p class="eyebrow">KEEP A LITTLE CLARITY CLOSE</p><h2 id="saved-title">Your saved guides.</h2></div><span class="saved-count">${saved.length} saved in this session</span></div>${saved.length ? `<div class="article-grid">${saved.map(card).join('')}</div>` : '<div class="saved-empty"><p>Something worth coming back to? Select “Save guide” in the library or on a guide. It will be waiting here while this session lasts.</p><a class="text-link" href="#/learn">Find something to read</a></div>'}</section><section class="space-controls"><div><h2>Yours to keep.<br>Yours to clear.</h2><p>Your reading list includes saved guide titles, links, and current path progress. It excludes your assessment answers and written notes.</p></div><div class="button-row"><button class="button primary" data-action="download-reading-list" ${saved.length || path ? '' : 'disabled'}>Download my reading list</button><button class="button secondary clear-session">Clear my private session</button></div><p class="session-footnote">Closing a tab may end its session, but browsers can restore sessions. Use “Clear my private session” when you want to remove it explicitly. Downloaded files remain on your device.</p></section></div>`;
}

export function pathReturn(space, route) {
  const path = getPath(space.activePath);
  if (!path || !path.steps.some(step => step.href === route || (step.href === '/dynamics' && route === '/dynamics-results'))) return '';
  return `<div class="wrap"><aside class="return-to-path"><div><p class="eyebrow">PART OF YOUR PATH</p><h2>${path.name}</h2><p>Return to your path when you’re ready to mark a step or choose what’s next.</p></div><a class="button secondary" href="#/paths/${path.id}">Return to my path</a></aside></div>`;
}
