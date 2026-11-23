// Activity UI renderer for Conversation & Preferences Engine
// Integrates with existing app patterns. Session-only. Escapes all user content.
import { getActivity } from './activities.js';

const escape = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export function renderActivity(id, state) {
  const activity = getActivity(id);
  if (!activity) return `<div class="wrap"><p>Activity not available.</p><a href="#/learn" class="text-link">Back to library</a></div>`;

  const answers = state.activityAnswers || {};
  let html = `<div class="wrap section activity-page">
    <a class="back-link" href="#/learn/different-desires">← Back to the guide</a>
    <h1>${escape(activity.title)}</h1>
    <p class="fine">${escape(activity.privacy)}</p>
    <div class="notice">${escape(activity.disclaimer)}</div>
    <form id="activity-form" class="activity-form">`;

  activity.steps.forEach(step => {
    html += `<fieldset><legend>${escape(step.prompt)}</legend>`;
    if (step.type === 'choice') {
      step.options.forEach(opt => {
        const checked = (answers[step.id] || (step.id === 'goal' ? 'understand' : 'gentle')) === opt.id ? 'checked' : '';
        html += `<label><input type="radio" name="${step.id}" value="${opt.id}" ${checked}> ${escape(opt.label)}</label>`;
      });
    } else if (step.type === 'freetext') {
      html += `<textarea name="${step.id}" aria-label="${escape(step.prompt)}" maxlength="1000" rows="4" placeholder="${escape(step.placeholder || '')}">${escape(answers[step.id] || '')}</textarea>`;
    }
    html += `</fieldset>`;
  });

  html += `<div class="button-row">
      <button type="submit" class="button primary">Generate suggestion</button>
      <button type="button" data-action="reset-activity" class="button subtle">Reset</button>
    </div></form>`;

  if (answers._generated) {
    html += `<div class="practice activity-output"><h2>Your suggested wording</h2><p class="eyebrow">EDIT BEFORE USING</p>
      <textarea id="generated-text" class="editable-result" aria-label="Editable conversation suggestion" rows="8" maxlength="4000">${escape(answers._generated)}</textarea>
      <div class="button-row">
        <button type="button" data-action="copy-activity" class="button secondary">Copy</button>
        <button type="button" data-action="download-activity" class="button secondary">Download text</button>
      </div>
      <p class="fine">Edit the wording above before using it. This is a starting point only. Copied or downloaded text may remain on your device after you clear this session.</p></div>
      <div class="notice green-notice">
        Related: <a href="#/learn/different-desires">Return to the guide</a> ·
        <a href="#/paths/connection">Guided path: Feel a little closer</a> ·
        <a href="#/my-space">My Space</a>
      </div>`;
  }

  html += `</div>`;
  return html;
}

export function attachActivityHandlers(id, state, persist, toast, download, copy, rerender) {
  const form = document.getElementById('activity-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const answers = {};
      for (const [k, v] of data) answers[k] = typeof v === 'string' ? v.slice(0, k === 'note' ? 1000 : 100) : '';
      if (!answers.goal) answers.goal = 'understand';
      if (!answers.tone) answers.tone = 'gentle';
      const activity = getActivity(id);
      if (activity) {
        answers._generated = activity.generate(answers);
        state.activityAnswers = answers;
        persist();
        toast('Suggestion generated. Edit it as needed.');
        rerender('#generated-text');
      }
    });
  }
  document.querySelector('[data-action="reset-activity"]')?.addEventListener('click', () => {
    state.activityAnswers = {};
    persist();
    toast('Activity reset.');
    rerender('input[name="goal"]');
  });
  document.getElementById('generated-text')?.addEventListener('input', event => {
    state.activityAnswers._generated = event.target.value.slice(0,4000);
    persist();
  });
  document.querySelector('[data-action="copy-activity"]')?.addEventListener('click', () => {
    const text = document.getElementById('generated-text')?.value || '';
    copy(text);
  });
  document.querySelector('[data-action="download-activity"]')?.addEventListener('click', () => {
    const text = document.getElementById('generated-text')?.value || '';
    download('vulpes-ignis-conversation-wording.txt', text);
  });
}
