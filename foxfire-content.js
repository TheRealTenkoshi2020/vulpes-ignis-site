// Original educational content; review against linked guide sources before release.
export const FOXFIRE = {
  "schemaVersion": 1,
  "routes": [
    {
      "id": "basics",
      "label": "I want to understand the basics",
      "description": "Start with clear language and core concepts.",
      "topic": "foundations",
      "guideIds": [
        "body-curiosity",
        "consent-in-practice",
        "pleasure-anatomy-without-myths"
      ]
    },
    {
      "id": "self",
      "label": "I want to understand myself",
      "description": "Explore confidence, preferences and identity without needing a label.",
      "topic": "self",
      "guideIds": [
        "confidence-without-performance",
        "orientation-identity-and-language",
        "body-image-without-a-scoreboard"
      ]
    },
    {
      "id": "connection",
      "label": "I want to feel closer to someone",
      "description": "Find a small way to communicate or connect.",
      "topic": "connection",
      "guideIds": [
        "ten-minute-check-in",
        "affection-without-expectation",
        "coach-partner-wont-talk"
      ]
    },
    {
      "id": "desire",
      "label": "I want to understand desire",
      "description": "Learn about differences without assigning blame.",
      "topic": "desire",
      "guideIds": [
        "different-desires",
        "desire-and-arousal-are-different",
        "different-libidos-common-ground"
      ]
    },
    {
      "id": "body",
      "label": "Something about my body has changed",
      "description": "Find educational resources and prepare questions for care.",
      "topic": "wellness",
      "guideIds": [
        "prepare-for-care",
        "when-intimacy-hurts",
        "coach-when-to-seek-professional-help"
      ]
    },
    {
      "id": "explore",
      "label": "I want to explore something new",
      "description": "Learn about curiosity without an expectation to act.",
      "topic": "exploration",
      "guideIds": [
        "fantasy-is-not-an-obligation",
        "yes-maybe-no-list-for-adults",
        "sensory-curiosity-at-your-pace"
      ]
    },
    {
      "id": "boundaries",
      "label": "I need help expressing a boundary",
      "description": "Identify a limit and prepare wording in your own time.",
      "topic": "consent",
      "guideIds": [
        "boundaries-are-an-invitation",
        "consent-in-practice",
        "coach-unsure-about-boundaries"
      ]
    }
  ],
  "modules": [
    {
      "id": "body",
      "title": "Understanding your body",
      "intro": "Learn language for body parts, variation and comfort; understanding does not require sexual experience.",
      "guideIds": [
        "body-curiosity",
        "pleasure-anatomy-without-myths",
        "erections-not-a-report-card"
      ],
      "glossary": [
        {
          "term": "Anatomy",
          "definition": "Body structures"
        },
        {
          "term": "Variation",
          "definition": "Differences between people and across time"
        }
      ],
      "check": {
        "question": "Does everyone need to experience their body in the same way?",
        "options": [
          "No. Variation is expected.",
          "Yes, there is one correct experience."
        ],
        "correctIndex": 0,
        "explanation": "Bodies and experiences differ; the guides explain why comparison is not a useful benchmark."
      },
      "reflection": "Write down one term you want to understand better."
    },
    {
      "id": "desire",
      "title": "Understanding desire",
      "intro": "Explore the distinction between interest, bodily response and choice.",
      "guideIds": [
        "desire-and-arousal-are-different",
        "different-desires",
        "fantasy-is-not-an-obligation"
      ],
      "glossary": [
        {
          "term": "Desire",
          "definition": "Interest or wanting"
        },
        {
          "term": "Arousal",
          "definition": "Bodily or subjective response"
        }
      ],
      "check": {
        "question": "Does a bodily response establish consent?",
        "options": [
          "Yes, a response is enough.",
          "No. Consent requires a willing choice."
        ],
        "correctIndex": 1,
        "explanation": "A response and a freely chosen agreement are different."
      },
      "reflection": "Identify one question about desire you would like to explore."
    },
    {
      "id": "consent",
      "title": "Consent and autonomy",
      "intro": "Learn to ask, decline, change your mind and respect others’ limits.",
      "guideIds": [
        "consent-in-practice",
        "boundaries-are-an-invitation",
        "consent-and-surprises"
      ],
      "glossary": [
        {
          "term": "Consent",
          "definition": "Freely given agreement"
        },
        {
          "term": "Boundary",
          "definition": "A personal limit"
        }
      ],
      "check": {
        "question": "Can consent be withdrawn after an activity starts?",
        "options": [
          "Yes, at any time.",
          "No, an earlier yes remains binding."
        ],
        "correctIndex": 0,
        "explanation": "Anyone can stop or change their mind."
      },
      "reflection": "Practice writing a sentence that makes declining easy."
    },
    {
      "id": "health",
      "title": "Sexual health",
      "intro": "Understand prevention and how to ask informed questions about testing and contraception.",
      "guideIds": [
        "safer-sex-layered-protection",
        "sti-testing-what-to-ask",
        "choosing-contraception-together",
        "hpv-vaccines-and-screening"
      ],
      "glossary": [
        {
          "term": "STI",
          "definition": "Sexually transmitted infection"
        },
        {
          "term": "Contraception",
          "definition": "Methods intended to prevent pregnancy"
        }
      ],
      "check": {
        "question": "Do all contraception methods protect against STIs?",
        "options": [
          "Yes, every method prevents STIs.",
          "No. Different methods serve different purposes."
        ],
        "correctIndex": 1,
        "explanation": "Read the linked prevention guides for distinctions and current guidance."
      },
      "reflection": "Choose one prevention question to bring to a qualified professional."
    },
    {
      "id": "communication",
      "title": "Communication",
      "intro": "Practice specific requests, listening and leaving room for a genuine answer.",
      "guideIds": [
        "talk-about-needs",
        "listening-without-rushing-to-fix",
        "ten-minute-check-in"
      ],
      "glossary": [
        {
          "term": "Request",
          "definition": "An invitation someone can decline"
        },
        {
          "term": "Reflection",
          "definition": "Checking what you understood"
        }
      ],
      "check": {
        "question": "What makes a request different from a demand?",
        "options": [
          "The other person can freely decline.",
          "A request must be accepted if phrased politely."
        ],
        "correctIndex": 0,
        "explanation": "Respectful language does not create an obligation."
      },
      "reflection": "Draft a single request that leaves room for no."
    },
    {
      "id": "comfort",
      "title": "Comfort and pleasure",
      "intro": "Understand that comfort, preference and choice matter more than meeting an expected outcome.",
      "guideIds": [
        "lubrication-and-comfort",
        "when-intimacy-hurts",
        "orgasm-variation-is-normal"
      ],
      "glossary": [
        {
          "term": "Comfort",
          "definition": "Physical and emotional ease"
        },
        {
          "term": "Preference",
          "definition": "Something a person tends to welcome"
        }
      ],
      "check": {
        "question": "Should someone push through pain to complete an activity?",
        "options": [
          "Yes, finishing is more important.",
          "No. Pause and seek appropriate care for persistent concerns."
        ],
        "correctIndex": 1,
        "explanation": "The linked comfort guides explain why pain should not be ignored."
      },
      "reflection": "Identify something you would want to change or pause if uncomfortable."
    },
    {
      "id": "change",
      "title": "Changing bodies",
      "intro": "Learn how life transitions and health concerns can change the circumstances around intimacy.",
      "guideIds": [
        "menopause-intimacy-comfort",
        "disability-chronic-illness-and-intimacy",
        "sleep-fatigue-and-desire",
        "after-birth-intimacy-reconnection"
      ],
      "glossary": [
        {
          "term": "Capacity",
          "definition": "What feels manageable at a given time"
        },
        {
          "term": "Adaptation",
          "definition": "Changing an approach to meet a need"
        }
      ],
      "check": {
        "question": "Does changing capacity automatically mean someone cares less?",
        "options": [
          "No. Capacity and affection are different.",
          "Yes, it proves reduced affection."
        ],
        "correctIndex": 0,
        "explanation": "Avoid assuming motives from a change in capacity."
      },
      "reflection": "Name one adjustment that would make everyday connection easier."
    },
    {
      "id": "identity",
      "title": "Exploration and identity",
      "intro": "Learn about language and preferences without needing to adopt a label or participate.",
      "guideIds": [
        "orientation-identity-and-language",
        "coach-identity-labels-dont-fit",
        "fantasy-is-not-an-obligation"
      ],
      "glossary": [
        {
          "term": "Orientation",
          "definition": "A pattern of attraction or related identity"
        },
        {
          "term": "Label",
          "definition": "Optional language for describing oneself"
        }
      ],
      "check": {
        "question": "Must someone choose a label or act on a curiosity to learn about it?",
        "options": [
          "Yes. Curiosity requires action.",
          "No. Learning and participation are separate choices."
        ],
        "correctIndex": 1,
        "explanation": "Labels and participation are optional."
      },
      "reflection": "Write one thing you want to understand, without committing to action."
    },
    {
      "id": "relationships",
      "title": "Healthy relationships",
      "intro": "Explore reciprocity, respect, repair and personal safety.",
      "guideIds": [
        "emotional-labor-and-fairness",
        "repair-after-an-argument",
        "coach-partner-wont-talk",
        "unsafe-partner-red-flags"
      ],
      "glossary": [
        {
          "term": "Reciprocity",
          "definition": "Mutual participation and regard"
        },
        {
          "term": "Repair",
          "definition": "Accountable action after harm"
        }
      ],
      "check": {
        "question": "Can one person guarantee relationship repair by trying harder?",
        "options": [
          "No. Other people control their own choices.",
          "Yes, enough effort guarantees repair."
        ],
        "correctIndex": 0,
        "explanation": "Individual work has value but cannot substitute for another person’s willingness."
      },
      "reflection": "Identify one thing within your control and one thing that is not."
    },
    {
      "id": "help",
      "title": "Finding reliable help",
      "intro": "Recognize when to seek reliable information and prepare for professional care.",
      "guideIds": [
        "prepare-for-care",
        "coach-when-to-seek-professional-help",
        "reading-beyond-the-label"
      ],
      "glossary": [
        {
          "term": "Evidence",
          "definition": "Information supporting a claim"
        },
        {
          "term": "Clinical review",
          "definition": "Review by an appropriately qualified professional"
        }
      ],
      "check": {
        "question": "Does a persuasive testimonial prove that a product works?",
        "options": [
          "Yes, a confident testimonial establishes effectiveness.",
          "No. It is an individual account, not proof."
        ],
        "correctIndex": 1,
        "explanation": "Look for credible evidence and appropriate professional advice."
      },
      "reflection": "Write one question about a claim you have encountered."
    }
  ],
  "applicationCards": [
    {
      "guideId": "talk-about-needs",
      "title": "Prepare one request",
      "understand": "Think of one recent moment, rather than every past disagreement.",
      "example": "I’d like to talk about one thing that matters to me. Is there a good time?",
      "activity": "Write an observation and one request you can accept a no to.",
      "stop": "If it feels unsafe to ask, keep your notes private and prioritize support.",
      "minutes": 5,
      "tool": "conversation",
      "participation": [
        "individual",
        "shared"
      ],
      "effort": "low"
    },
    {
      "guideId": "ten-minute-check-in",
      "title": "A check-in without a deadline",
      "understand": "You do not need to solve everything today.",
      "example": "Would you be open to a few minutes to check in, without needing to fix anything?",
      "activity": "Privately name what is present, what helped, and one small request. Share only if welcome.",
      "stop": "Either person can decline or choose another time.",
      "minutes": 5,
      "tool": "check-in",
      "participation": [
        "individual",
        "shared"
      ],
      "effort": "low"
    },
    {
      "guideId": "different-desires",
      "title": "Make space for differences",
      "understand": "Differences are not a verdict on either person.",
      "example": "Can we talk about what closeness means to each of us, without deciding anything tonight?",
      "activity": "List one welcome form of connection and one you would rather leave for another time.",
      "stop": "A no is a complete answer; do not turn the list into an agreement to act.",
      "minutes": 5,
      "tool": "conversation",
      "participation": [
        "individual",
        "shared"
      ],
      "effort": "low"
    },
    {
      "guideId": "consent-in-practice",
      "title": "Practice an easy no",
      "understand": "An invitation should leave room for refusal.",
      "example": "Would you like to, or would you rather not? Either answer is okay.",
      "activity": "Write an invitation and a respectful reply to a no.",
      "stop": "Do not continue if willingness is absent or unclear.",
      "minutes": 2,
      "tool": "boundary",
      "participation": [
        "individual",
        "shared"
      ],
      "effort": "low"
    },
    {
      "guideId": "boundaries-are-an-invitation",
      "title": "Put a limit into words",
      "understand": "A boundary describes a limit and what you can control.",
      "example": "I’m comfortable with this, but not with that. If it continues, I’ll step away.",
      "activity": "Write one welcome, one limit and one action you control.",
      "stop": "You do not owe a justification. If enforcing a limit may be unsafe, seek support privately.",
      "minutes": 5,
      "tool": "boundary",
      "participation": [
        "individual",
        "shared"
      ],
      "effort": "low"
    },
    {
      "guideId": "confidence-without-performance",
      "title": "Separate worth from outcome",
      "understand": "You can choose connection without grading yourself.",
      "example": "I’d like us to make room for being present, without a goal we have to meet.",
      "activity": "Write one expectation you would like to release and one supportive alternative.",
      "stop": "Leave the exercise if it increases distress.",
      "minutes": 2,
      "tool": "reflection",
      "participation": [
        "individual",
        "shared"
      ],
      "effort": "low"
    },
    {
      "guideId": "performance-pressure",
      "title": "Remove one expectation",
      "understand": "Name a pressure rather than trying to prove anything.",
      "example": "Could we spend time together without needing a particular outcome?",
      "activity": "Choose one expectation you would like to remove from a future conversation.",
      "stop": "Decline or pause any activity that feels pressured.",
      "minutes": 5,
      "tool": "conversation",
      "participation": [
        "individual",
        "shared"
      ],
      "effort": "low"
    },
    {
      "guideId": "when-intimacy-hurts",
      "title": "Prepare a comfort conversation",
      "understand": "Discomfort deserves attention rather than endurance.",
      "example": "Something has been uncomfortable for me, and I want to pause and understand it.",
      "activity": "Note what you noticed and one question to ask an appropriate professional.",
      "stop": "Stop any activity that hurts; seek appropriate care for persistent or concerning symptoms.",
      "minutes": 5,
      "tool": "care",
      "participation": [
        "individual",
        "shared"
      ],
      "effort": "low"
    },
    {
      "guideId": "prepare-for-care",
      "title": "Take one question to care",
      "understand": "You can ask for help without knowing the cause.",
      "example": "I’ve noticed a change and would like help understanding what might be relevant.",
      "activity": "Write what changed, when it started, and one question.",
      "stop": "This note is not an assessment of urgency; seek urgent care if needed.",
      "minutes": 5,
      "tool": "care",
      "participation": [
        "individual",
        "shared"
      ],
      "effort": "low"
    },
    {
      "guideId": "sleep-fatigue-and-desire",
      "title": "Plan for actual energy",
      "understand": "Capacity can change without changing how much you care.",
      "example": "I’d like connection, but I have limited energy today. Could we keep it simple?",
      "activity": "Choose one low-effort option, including preparation and cleanup, or choose rest.",
      "stop": "Rest or declining is an equally valid outcome.",
      "minutes": 2,
      "tool": "conversation",
      "participation": [
        "individual",
        "shared"
      ],
      "effort": "low"
    },
    {
      "guideId": "disability-chronic-illness-and-intimacy",
      "title": "Ask what is manageable",
      "understand": "Make room for variable capacity without assuming preferences.",
      "example": "Can we check what feels manageable today and leave the rest open?",
      "activity": "Identify one barrier and one optional adjustment, including a nonphysical alternative.",
      "stop": "Stop if symptoms worsen or anyone wants to pause.",
      "minutes": 5,
      "tool": "reflection",
      "participation": [
        "individual",
        "shared"
      ],
      "effort": "low"
    },
    {
      "guideId": "menopause-intimacy-comfort",
      "title": "Explain a change",
      "understand": "Avoid guessing what a change means for attraction.",
      "example": "My comfort has changed. I’d like to talk about what works for me now.",
      "activity": "Note a change and a question you may want to discuss with a clinician.",
      "stop": "Do not continue through pain or pressure.",
      "minutes": 5,
      "tool": "care",
      "participation": [
        "individual",
        "shared"
      ],
      "effort": "low"
    },
    {
      "guideId": "coach-partner-wont-talk",
      "title": "Choose a step you control",
      "understand": "You cannot make another person participate.",
      "example": "I’d welcome a conversation if you’re willing. I’ll give you room to decide.",
      "activity": "Identify one private action, such as reading, reflection or seeking support.",
      "stop": "Do not repeatedly pursue someone who declines; prioritize safety if there is intimidation.",
      "minutes": 5,
      "tool": "reflection",
      "participation": [
        "individual",
        "shared"
      ],
      "effort": "low"
    },
    {
      "guideId": "sensory-curiosity-at-your-pace",
      "title": "Name a sensory preference",
      "understand": "You can understand comfort without acting on curiosity.",
      "example": "I’d like to explain one thing that feels comfortable and one thing I’d rather avoid.",
      "activity": "Name one welcome sensation or environment and one limit.",
      "stop": "Skip any sensation or conversation that feels uncomfortable.",
      "minutes": 5,
      "tool": "boundary",
      "participation": [
        "individual",
        "shared"
      ],
      "effort": "low"
    },
    {
      "guideId": "repair-after-an-argument",
      "title": "Prepare a repair attempt",
      "understand": "Repair is not the same as forgetting harm.",
      "example": "I’d like to acknowledge my part and hear your perspective, if you’re willing.",
      "activity": "Write one specific action you can take responsibility for.",
      "stop": "If there is intimidation, coercion or fear, prioritize safety over joint repair.",
      "minutes": 5,
      "tool": "conversation",
      "participation": [
        "individual",
        "shared"
      ],
      "effort": "low"
    }
  ]
};
export const CONVERSATION = {
  "schemaVersion": 1,
  "title": "Find the words",
  "intro": "Prepare a conversation about something that matters to you. You can use the result privately, share it if you choose, or leave it for another day.",
  "privacy": "Your draft stays in this browser tab's session. It is not sent to a coach or AI service. Browser restoration may preserve it. Copies and downloads are outside our deletion controls.",
  "safetyQuestion": "Would discussing this feel safe for you?",
  "safetyOptions": [
    {
      "id": "yes",
      "label": "Yes, I feel comfortable preparing"
    },
    {
      "id": "unsure",
      "label": "I'm not sure"
    },
    {
      "id": "no",
      "label": "No, I'm worried about the reaction"
    },
    {
      "id": "skip",
      "label": "Prefer not to answer"
    }
  ],
  "safetyResponse": "You do not have to start a conversation or share this draft. If you are worried about intimidation, retaliation or coercion, consider speaking privately with someone you trust or a qualified support service. If you are in immediate danger, contact local emergency services if it is safe to do so.",
  "topics": [
    {
      "id": "desire",
      "label": "Different levels of desire",
      "guide": "different-desires",
      "observation": "I've noticed we sometimes want different kinds or amounts of closeness.",
      "need": "I'd like to understand our preferences without pressure.",
      "request": "Could we each name one form of connection we welcome right now?"
    },
    {
      "id": "connection",
      "label": "Feeling disconnected",
      "guide": "ten-minute-check-in",
      "observation": "I've been missing some of our everyday connection.",
      "need": "I'd like to make room for time together that feels manageable.",
      "request": "Would a short, expectation-free check-in be welcome?"
    },
    {
      "id": "comfort",
      "label": "Physical comfort or changes",
      "guide": "when-intimacy-hurts",
      "observation": "I've noticed that my comfort has changed.",
      "need": "I want to understand what feels safe and comfortable for me.",
      "request": "Could we pause anything uncomfortable and talk about alternatives only if we both want to?"
    },
    {
      "id": "pressure",
      "label": "Performance pressure",
      "guide": "performance-pressure",
      "observation": "I've been noticing expectations that make it harder to feel at ease.",
      "need": "I'd like connection without a particular outcome to achieve.",
      "request": "Could we agree that there is no goal we need to reach?"
    },
    {
      "id": "boundary",
      "label": "A boundary or limit",
      "guide": "boundaries-are-an-invitation",
      "observation": "There is something I want to be clear about.",
      "need": "I need my limits to be respected.",
      "request": "I'd like to explain my limit. I will pause or step away if it is not respected."
    },
    {
      "id": "preferences",
      "label": "A preference or curiosity",
      "guide": "fantasy-is-not-an-obligation",
      "observation": "There is a topic I've been curious about.",
      "need": "I'd like to be able to discuss it without either of us committing to anything.",
      "request": "Would you be comfortable talking about it, or would you rather not?"
    }
  ],
  "tones": [
    {
      "id": "gentle",
      "label": "Gentle",
      "opening": "There is something I'd like to talk about when you feel ready. Is now a good time?"
    },
    {
      "id": "direct",
      "label": "Direct",
      "opening": "I'd like to discuss one thing. Are you available to talk?"
    },
    {
      "id": "casual",
      "label": "Casual",
      "opening": "Hey, could we make a little time to talk about something? No rush if now isn't good."
    },
    {
      "id": "thoughtful",
      "label": "Thoughtful",
      "opening": "I've been reflecting on something that matters to me, and I'd appreciate hearing your perspective if you're willing."
    }
  ],
  "responseSpace": "What is your perspective? It is okay if you need time, disagree or do not want to discuss this.",
  "pause": "We can stop here or revisit this only if we both want to.",
  "boundaryNote": "A boundary does not require mutual agreement. Keep only wording that describes your own limit and action; remove any suggestion that someone must agree before your boundary applies.",
  "soloPrompts": [
    "What have I noticed?",
    "What do I need or value?",
    "What is within my control?",
    "What limit or stopping point matters to me?",
    "Would I like to keep this private, seek support, or consider sharing it later?"
  ],
  "completion": "You've prepared a draft, not made an agreement. You can change it, keep it private, or discard it. There is no obligation to use it.",
  "maxFieldLength": 500
};
