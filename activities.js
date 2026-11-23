// Modular Conversation & Preferences Engine
// Local, rules-based, session-only. No external processing.
export const ACTIVITIES = {
  'different-desires': {
    title: 'Conversation about different desires',
    privacy: 'Your choices and any free-text stay in this tab only. Nothing is sent anywhere.',
    disclaimer: 'These are editable conversation suggestions based on the guide. They are not diagnoses, clinical recommendations, or validated assessments.',
    steps: [
      {
        id: 'goal',
        type: 'choice',
        prompt: 'What would you like help with right now?',
        options: [
          {id: 'understand', label: 'Understand what each of us means by closeness'},
          {id: 'reduce-pressure', label: 'Reduce pressure and talk about options'},
          {id: 'menu', label: 'Start a simple shared menu of welcome closeness'}
        ]
      },
      {
        id: 'tone',
        type: 'choice',
        prompt: 'What tone feels useful?',
        options: [
          {id: 'gentle', label: 'Gentle and curious'},
          {id: 'direct', label: 'Clear and direct'},
          {id: 'warm', label: 'Warm and reassuring'}
        ]
      },
      {
        id: 'note',
        type: 'freetext',
        prompt: 'Optional: anything specific you want to include? (or leave blank)',
        placeholder: 'For example: I have been feeling tired lately'
      }
    ],
    generate: (input) => {
      const answers = input && typeof input === 'object' ? input : {};
      const goal = typeof answers.goal === 'string' ? answers.goal : 'understand';
      const tone = typeof answers.tone === 'string' ? answers.tone : 'gentle';
      const context = typeof answers.note === 'string' ? answers.note.trim().slice(0,1000) : '';
      const note = context ? ` ${context}` : '';
      const openers = {
        understand: {
          gentle: "I’ve been thinking about what closeness means for each of us. Would you be open to talking about that, with no expectation that we decide anything tonight?",
          direct: "I want to understand what kinds of closeness feel good to each of us right now. Can we talk about that?",
          warm: "I care about you and I’d like us to understand each other better about closeness. Is now a good time to talk?"
        },
        'reduce-pressure': {
          gentle: "I’ve been feeling some pressure around intimacy and I’d like us to talk about what feels welcome without any obligation.",
          direct: "I want to take pressure out of this. Can we talk about what kinds of closeness are welcome right now?",
          warm: "I miss feeling close and I also want to make sure neither of us feels pressured. Can we talk about that?"
        },
        menu: {
          gentle: "Would you be open to making a simple list together of kinds of closeness that feel welcome, ones that need a fresh conversation, and ones that are off limits for now?",
          direct: "Let’s make a short shared menu of welcome closeness. What would you like to include?",
          warm: "I’d like us to have a gentle way to know what feels good to each of us. Want to try a simple menu together?"
        }
      };
      const opener = openers[goal]?.[tone] || openers.understand.gentle;
      return `Suggested wording (edit freely):\n\n${opener}${note}\n\nRemember: a no is welcome, and this is just a starting point for conversation.`;
    }
  }
};

export function getActivity(id) {
  return ACTIVITIES[id] || null;
}
