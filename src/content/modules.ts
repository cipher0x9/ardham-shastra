import type { Module, Pillar } from "@/lib/types";

type Draft = {
  slug: string;
  number: number;
  title: string;
  sanskrit: string;
  pillar: Pillar;
  promise: string;
  youWill: string[];
  teach: { heading: string; body: string }[];
  cards: [string, string, string?][];
  gate: { prompt: string; artifact: string };
  pack?: string;
};

function moduleFrom(draft: Draft): Module {
  return {
    slug: draft.slug,
    number: draft.number,
    title: draft.title,
    sanskrit: draft.sanskrit,
    pillar: draft.pillar,
    promise: draft.promise,
    youWill: draft.youWill,
    pack: draft.pack,
    gate: draft.gate,
    lessons: [
      {
        id: `${draft.slug}:core`,
        title: "Core teaching",
        minutes: 12,
        sections: draft.teach,
      },
    ],
    cards: draft.cards.map(([prompt, answer, hint], index) => ({
      id: `${draft.slug}:${index + 1}`,
      prompt,
      answer,
      hint,
    })),
  };
}

const drafts: Draft[] = [
  {
    slug: "the-path",
    number: 1,
    title: "The Path",
    sanskrit: "mārga",
    pillar: "path",
    promise: "There is a method to master anything. This campus is that method, not a content dump.",
    youWill: ["State the campus vow in one breath", "Tell stuck from stopped", "Name the six-move loop"],
    pack: "curriculum/MASTERY-PLAYBOOK-90DAY.md",
    teach: [
      {
        heading: "Why a science of meaning",
        body: "Ardham (అర్థం) is meaning, purpose, the thing a sentence is for. A campus that only stores facts is a warehouse. This one trains the move from confusion → grammar → proof. If you cannot retrieve it, apply it, and teach it, you do not have it.",
      },
      {
        heading: "Stuck is not stopped",
        body: "Stuck is a position: the next primitive is unnamed. Stopped is a decision: you left the loop. The repair for stuck is a smaller grammar, a tighter retrieval, a clearer artifact — not motivation theatre.",
      },
    ],
    cards: [
      ["What is the campus promise in one line?", "There is a method to master anything — retrieve, apply, prove, teach.", "Not 'watch more'."],
      ["What is the six-move loop?", "Expose → Engage → Retrieve → Apply → Prove → Teach."],
      ["Stuck versus stopped?", "Stuck is a missing primitive. Stopped is a choice to leave the loop."],
      ["What counts as having learned something here?", "Closed-book retrieval + a real artifact + teaching one mind."],
    ],
    gate: {
      prompt: "Write the vow and the loop from memory. Then name one skill you will run through the 90-day arc.",
      artifact: "vow.md — vow, loop, chosen domain, first two canonical sources",
    },
  },
  {
    slug: "siksa",
    number: 2,
    title: "Śikṣā — the science of learning",
    sanskrit: "śikṣā",
    pillar: "siksa",
    promise: "Learning is a trained skill: sound, attention, retrieval, and correction — not a vibe.",
    youWill: ["Run a closed-book first pass", "Schedule expanding retrieval", "Treat forgetting as a design constraint"],
    pack: "curriculum/SIKSA-SCIENCE-DEEP.md",
    teach: [
      {
        heading: "Classical limb, modern engine",
        body: "Śikṣā is the Vedāṅga of correct sound — fidelity under recitation. The campus uses it as the operating system of study: hear precisely, reproduce without drift, correct immediately. Roediger & Karpicke’s testing effect is the same law in a lab coat: retrieval modifies memory; re-reading mostly flatters you.",
      },
      {
        heading: "Campus default spacing",
        body: "Expanding schedule after first encoding: +10 min, +1 day, +3, +7, +14, +30, +90. FSRS-6 then takes over from your actual ratings. Massed cramming can win a same-day quiz and still donate the knowledge back to entropy.",
      },
    ],
    cards: [
      ["What is śikṣā, originally?", "The Vedāṅga of phonetics and correct recitation — fidelity of form and sound."],
      ["Why is retrieval stronger than re-study?", "Retrieval is a memory modifier, not a readout. Failed retrieval plus feedback still teaches discrimination."],
      ["Campus expanding schedule?", "T0 → 10 min → 1d → 3d → 7d → 14d → 30d → 90d, then FSRS-6."],
      ["Campus rule after reading?", "Closed-book first. Open notes only after the first retrieval attempt fails."],
    ],
    gate: {
      prompt: "Teach the loop to a person or a voice note. Include one classical bridge and one lab finding.",
      artifact: "siksa-teach.mp3 or a one-page teach-back",
    },
  },
  {
    slug: "panini",
    number: 3,
    title: "Pāṇini — grammar of everything",
    sanskrit: "pāṇini",
    pillar: "panini",
    promise: "Master a domain by writing a finite rule system that generates the infinite cases.",
    youWill: ["Separate utsarga from apavāda", "Write a one-page grammar of any skill", "Treat exceptions as first-class"],
    pack: "curriculum/PANINI-COMPUTATIONAL.md",
    teach: [
      {
        heading: "Aṣṭādhyāyī as compiler",
        body: "Pāṇini’s sūtras are ordered rewrite rules with meta-control: anuvṛtti (carry-forward), adhikāra (scope headings), paribhāṣā (how to read rules). Finite rules, infinite well-formed expressions. That is the method — not a museum of Sanskrit trivia.",
      },
      {
        heading: "Utsarga / apavāda",
        body: "General rule, then exception. Learners who only collect examples never own a generator. Learners who only memorize the general rule drown in edge cases. Write both layers. Then run the generator on fresh inputs.",
      },
    ],
    cards: [
      ["What is anuvṛtti?", "Carry-forward of words from earlier sūtras so later rules stay compressed."],
      ["Utsarga vs apavāda?", "Utsarga is the general rule; apavāda is the exception that blocks or refines it."],
      ["Why is rule order load-bearing?", "Later rules can block, refine, or treat earlier outputs as asiddha — like pipeline stages."],
      ["Pāṇini method for any domain?", "Write a finite grammar that generates the cases, then drill the exceptions."],
    ],
    gate: {
      prompt: "One page: primitives, general rules, exceptions, and three generated examples for your domain.",
      artifact: "grammar-map.md",
    },
  },
  {
    slug: "nyaya",
    number: 4,
    title: "Nyāya — the logic engine",
    sanskrit: "nyāya",
    pillar: "nyaya",
    promise: "Know how you know. A claim without pramāṇa is theatre.",
    youWill: ["List four Nyāya pramāṇas", "Build a five-member proof", "Name a hetvābhāsa in the wild"],
    pack: "curriculum/NYAYA-LOGIC-DEEP.md",
    teach: [
      {
        heading: "Four instruments",
        body: "Pratyakṣa (perception), anumāna (inference), upamāna (comparison), śabda (reliable testimony). Other schools count more. This campus is Nyāya-centered on purpose: a small, strict eval rubric you can run on human and model claims.",
      },
      {
        heading: "Pañcāvayava",
        body: "Proposition, reason, example, application, conclusion. If the conclusion drifts from the proposition, the proof changed mid-air. Hetvābhāsa is an apparent reason that fails — treat it as a debugger, not an insult.",
      },
    ],
    cards: [
      ["Name the four Nyāya pramāṇas.", "Perception, inference, comparison, reliable testimony."],
      ["What is hetvābhāsa?", "A fallacious reason — it looks like a hetu and does not bear the weight."],
      ["Five members of the public syllogism?", "Pratijñā, hetu, udāharaṇa, upanaya, nigamana."],
      ["vāda vs jalpa vs vitaṇḍā?", "Truth-seeking debate vs wrangling to win vs cavil that never establishes a view."],
    ],
    gate: {
      prompt: "Take one claim from your field. Write a five-member Nyāya proof and one defeat condition.",
      artifact: "nyaya-proof.md",
    },
  },
  {
    slug: "maps",
    number: 5,
    title: "Vaiśeṣika & Sāṃkhya — maps of reality",
    sanskrit: "padārtha / tattva",
    pillar: "panini",
    promise: "Name the kinds of things before you optimize tactics.",
    youWill: ["Separate ontology from workflow", "Draw components, flows, feedback, failure", "Revise a map when evidence moves"],
    pack: "curriculum/VAISESIKA-SAMKHYA-MAPS.md",
    teach: [
      {
        heading: "Category maps and layer maps",
        body: "Vaiśeṣika padārthas carve what kinds of things exist. Sāṃkhya tattvas stack layers from unmanifest to mind to world. In a modern skill: entities first, then pipeline, then failure modes. Tactics without ontology is fidgeting.",
      },
    ],
    cards: [
      ["Why ontology before tactics?", "If you cannot name the entities, you will optimize the wrong loop."],
      ["What four things belong on a working map?", "Components, flows, feedback, failure modes."],
      ["When must a map change?", "When evidence updates — maps are revisable instruments, not idols."],
    ],
    gate: {
      prompt: "Draw your domain map with failure modes as first-class nodes.",
      artifact: "domain-map.svg or .md",
    },
  },
  {
    slug: "jnana-mathematics",
    number: 6,
    title: "The jñāna mathematics",
    sanskrit: "gaṇita",
    pillar: "path",
    promise: "Proof, not vibe. Indian mathematics as a lineage of generators.",
    youWill: ["Separate proof from mnemonic", "Name a Kerala-school move", "Estimate before you calculate"],
    pack: "curriculum/INDIAN-MATHEMATICS-HISTORY.md",
    teach: [
      {
        heading: "Generators, not trivia dates",
        body: "Place value and zero change what calculation can be. Piṅgala’s combinatorics, Āryabhaṭa’s astronomy, Yuktibhāṣā’s infinite series — the through-line is a method that produces new results, not a patriotic list. A mnemonic is not a proof. A counterexample kills a universal.",
      },
    ],
    cards: [
      ["What transformed calculation in this lineage?", "Zero as a number plus place value."],
      ["Mnemonic versus proof?", "Mnemonics aid retrieval; proofs establish why a claim must hold."],
      ["What does one counterexample do to a universal claim?", "It kills it."],
    ],
    gate: {
      prompt: "Derive one result from memory and show the estimate you made before the exact form.",
      artifact: "derivation.pdf or handwritten scan",
    },
  },
  {
    slug: "memory",
    number: 7,
    title: "The memory arsenal",
    sanskrit: "smṛti",
    pillar: "memory",
    promise: "Memory is engineered: encoding, error-checking, spacing — not a talent myth.",
    youWill: ["Contrast SM-2 with FSRS-6", "Use a palace only for structured sets", "Treat oral variants as checksums"],
    pack: "curriculum/MEMORY-SCIENCE-SYSTEMS.md",
    teach: [
      {
        heading: "From SM-2 to FSRS-6",
        body: "SM-2 updates an ease factor from a 0–5 grade. FSRS-6 models stability and difficulty per item and predicts retrievability against a target (we use 90%). This campus schedules with FSRS-6. Ratings must reflect actual retrieval, or you poison the model.",
      },
      {
        heading: "Oral checksums",
        body: "Vikṛti pāṭha (krama, jaṭā, ghana) is not mysticism. It is redundant encoding so drift is detectable. Modern analogue: generate, then reconstruct from a different order.",
      },
    ],
    cards: [
      ["What does FSRS-6 track per item?", "Stability and difficulty, to predict retrievability over time."],
      ["Why not rate Easy after peeking?", "The scheduler believes you. False ease inflates intervals and hides holes."],
      ["What are vikṛti pāṭha variants for?", "Error-detecting recitation — oral checksums against drift."],
    ],
    gate: {
      prompt: "Put ten items into the review engine. Rate honestly for three days. Export the log.",
      artifact: "review-log.json (download from Review)",
    },
  },
  {
    slug: "playbook",
    number: 8,
    title: "The universal playbook",
    sanskrit: "sūtra-paddhati",
    pillar: "path",
    promise: "Seven steps that transfer: map, grammar, reason, practice, prove, space, teach.",
    youWill: ["Run the seven steps on a new skill", "Pick two canonical sources", "Refuse third-rate summaries as primary"],
    pack: "curriculum/MASTERY-PLAYBOOK-90DAY.md",
    teach: [
      {
        heading: "Two sources, then the generator",
        body: "Canonical sourcing means two primary texts or specs, not twenty blogs. Build a DAG of primitives. Sandbox. Drill the weak edge. Ship one artifact. Publish proof. The playbook is domain-agnostic on purpose.",
      },
    ],
    cards: [
      ["Name the seven steps in order.", "Map, grammar, reason, practice, prove, space, teach."],
      ["How many canonical sources at the start?", "Two non-redundant primaries. Everything else is auxiliary."],
      ["What is the public proof artifact?", "A thing a stranger can run, read, or be taught — not a private feeling of fluency."],
    ],
    gate: {
      prompt: "Fill the seven steps for one live skill. Dates, sources, first artifact.",
      artifact: "playbook-one-skill.md",
    },
  },
  {
    slug: "ai-learning",
    number: 9,
    title: "AI-assisted learning (2026)",
    sanskrit: "yantra-śikṣā",
    pillar: "nyaya",
    promise: "Use models as sparring partners. Never as pramāṇa.",
    youWill: ["Socratic drill without answer-leak", "Nyāya-check model output", "Keep generation after retrieval"],
    pack: "curriculum/AI-LEARNING-2026.md",
    teach: [
      {
        heading: "Desirable friction",
        body: "If the model does the retrieval for you, you rented competence. Use it to generate questions, counterexamples, and oral exams after you have attempted. Empty-retrieval tests: when knowledge is missing, does the system admit it?",
      },
    ],
    cards: [
      ["When may you open a model while learning?", "After a closed-book attempt, for questions, counters, and feedback — not for first answers."],
      ["What is an empty-retrieval test?", "Ask when the knowledge is absent and check whether the system invents anyway."],
      ["Śabda from a model?", "Not by default. Treat it as untrusted testimony until grounded in a named source."],
    ],
    gate: {
      prompt: "Transcript of a Socratic session where you answered first and the model only audited.",
      artifact: "socratic-transcript.md",
    },
  },
  {
    slug: "cosmos",
    number: 10,
    title: "Cosmos and beyond",
    sanskrit: "jyotiṣa / ākāśa",
    pillar: "path",
    promise: "Wonder with instruments. Astronomy as a school of scale and humility.",
    youWill: ["Separate observational claim from mythic image", "Track one live mission or dataset", "Write a scale ladder from body to cosmos"],
    teach: [
      {
        heading: "From sky tables to instruments",
        body: "Ancient astronomy trained long-horizon observation. Modern cosmology adds instruments and error bars. Keep both: the mood of looking up, and the discipline of a measurement. Consciousness remains an open problem — mark it as open, not as a slogan.",
      },
    ],
    cards: [
      ["What must a cosmic claim carry here?", "An instrument or dataset, or an honest 'unknown'."],
      ["Why keep a scale ladder?", "It fights both cosmic inflation of ego and the numbness of unscaled numbers."],
    ],
    gate: {
      prompt: "One page: a scale ladder plus one observational fact with source ID.",
      artifact: "cosmos-ladder.md",
    },
  },
  {
    slug: "study-systems",
    number: 11,
    title: "Study systems",
    sanskrit: "nitya-vidhi",
    pillar: "siksa",
    promise: "The calendar is the real curriculum.",
    youWill: ["Design a 45–90 min block", "Protect sleep as consolidation", "Run a weekly review"],
    pack: "curriculum/STUDY-SYSTEMS-DEEP.md",
    teach: [
      {
        heading: "Blocks, not marathons",
        body: "Daily 45–90 minutes with a retrieval open beats the heroic weekend. Sleep is not self-care branding; it is consolidation hardware. Weekly review: what is due, what failed, what gets a smaller grammar.",
      },
    ],
    cards: [
      ["Preferred daily block?", "45–90 minutes of deliberate practice, not an annual 8-hour purge."],
      ["What does the weekly review ask?", "What is due, what failed, which grammar must shrink."],
    ],
    gate: {
      prompt: "Publish a one-week calendar with retrieval slots on it.",
      artifact: "week-calendar.md",
    },
  },
  {
    slug: "exam-performance",
    number: 12,
    title: "Exam and performance",
    sanskrit: "parīkṣā",
    pillar: "siksa",
    promise: "Performance is retrieval under constraint. Train the constraint.",
    youWill: ["Build a 30-day exam arc", "Simulate the room", "Separate score from mastery"],
    teach: [
      {
        heading: "Same skill, harder cue",
        body: "An exam is the campus loop with a clock and a stranger’s rubric. Drill with the real cue format. Interleave. Sleep. On the day: first dump, then hunt. A score is a sample, not a soul.",
      },
    ],
    cards: [
      ["How do you train an exam?", "Retrieve under the real cue format and the real time box."],
      ["First move on test day?", "Brain dump of the generators, then hunt items."],
    ],
    gate: {
      prompt: "One timed simulation with error log and next-week patches.",
      artifact: "sim-log.md",
    },
  },
  {
    slug: "career",
    number: 13,
    title: "Career mastery",
    sanskrit: "vyavasāya",
    pillar: "path",
    promise: "Skills that compound. Proof that travels. Free-education mission intact.",
    youWill: ["Keep a LICC proof portfolio", "Pick compounding skills", "Refuse credential-only identity"],
    teach: [
      {
        heading: "Portfolio over folklore",
        body: "Hireable mastery is a trail of artifacts: systems you can explain, numbers you can defend, people you have taught. LICC every claim. The mission of this campus is still free teaching — career is a vehicle, not a replacement god.",
      },
    ],
    cards: [
      ["What is a LICC portfolio?", "Each claim has a leg, a source ID, a counter, and a captured artifact."],
      ["What compounds?", "Skills that generate new skills — grammar, systems, teaching — not isolated tricks."],
    ],
    gate: {
      prompt: "Three proof cards for skills you already have. LICC each.",
      artifact: "career-licc.md",
    },
  },
  {
    slug: "gurukula",
    number: 14,
    title: "Guru-kula — teaching",
    sanskrit: "guru-kula",
    pillar: "path",
    promise: "If it dies with you, it was never a tradition.",
    youWill: ["Run a teach cycle", "Name the three debts", "Find one student"],
    teach: [
      {
        heading: "Transmission is the exam",
        body: "Teaching forces generation, exposes holes, and pays the debt to whoever taught you. One living student beats a thousand unsaved notes. Correction must be specific: which rule failed, which example.",
      },
    ],
    cards: [
      ["Why is teaching the final exam?", "You must generate the grammar for another mind and survive their questions."],
      ["What does a useful correction name?", "The failed rule and a concrete example — not 'try harder'."],
    ],
    gate: {
      prompt: "Teach one module to one person. Capture their question you could not answer.",
      artifact: "first-student.md",
    },
  },
  {
    slug: "troubleshooting",
    number: 15,
    title: "Troubleshooting learning",
    sanskrit: "pratīkāra",
    pillar: "siksa",
    promise: "Plateaus have mechanics. Diagnose before you add volume.",
    youWill: ["Tell overload from boredom", "Keep an error taxonomy", "Change one variable"],
    teach: [
      {
        heading: "Failure-mode table",
        body: "Illusion of mastery: recognition without recall. Overload: too many primitives at once. Boredom: blocked practice below the edge. Avoidance: identity threat. Each has a different patch. Adding hours is not a diagnosis.",
      },
    ],
    cards: [
      ["Illusion of mastery looks like?", "Fluent recognition, failed closed-book production."],
      ["First move on a plateau?", "Diagnose the failure mode, then change one variable."],
    ],
    gate: {
      prompt: "Log one plateau with diagnosis and the single variable you will change.",
      artifact: "plateau-card.md",
    },
  },
  {
    slug: "masters-path",
    number: 16,
    title: "The master's path",
    sanskrit: "90-dina",
    pillar: "path",
    promise: "Ninety days is long enough to prove the method and short enough to finish.",
    youWill: ["Place yourself on the 90-day matrix", "Define RTMA for the capstone", "Schedule reviews into the arc"],
    pack: "curriculum/MASTERY-PLAYBOOK-90DAY.md",
    teach: [
      {
        heading: "Arc, not mood",
        body: "Days 1–7 map and grammar. 8–21 core practice. 22–35 exceptions. 36–49 build. 50–63 teach. 64–77 edge. 78–90 capstone. If you skip proof, you completed a vibe, not a path.",
      },
    ],
    cards: [
      ["What happens in days 36–49?", "Build one complete artifact a stranger could use."],
      ["What closes the ninety days?", "Capstone proof plus teaching one person the full loop."],
    ],
    gate: {
      prompt: "Write your 90-day matrix with dates and the capstone artifact named.",
      artifact: "ninety-day.md",
    },
  },
  {
    slug: "language",
    number: 17,
    title: "Language mastery",
    sanskrit: "bhāṣā",
    pillar: "siksa",
    promise: "Sound first. Grammar as generator. Conversation as proof.",
    youWill: ["Train minimal pairs", "Build a one-page grammar", "Record speech as artifact"],
    teach: [
      {
        heading: "Phonetic firewall",
        body: "Hear the contrast before you produce it. Shadow ~0.5s behind native audio. Bidirectional cards. A 90-day arc: sound → pattern → tense/aspect → story → conversation. Streaks are not proof. Recordings are.",
      },
    ],
    cards: [
      ["What is shadowing?", "Repeating native audio about half a second behind, matching prosody."],
      ["Language proof on this campus?", "Recorded speech and a real conversation — not a streak counter."],
    ],
    gate: {
      prompt: "Sixty-second recording plus the one-page grammar of the target language.",
      artifact: "speech.mp3 + grammar.md",
    },
  },
  {
    slug: "mathematics-deep",
    number: 18,
    title: "Mathematics deep",
    sanskrit: "gaṇita-gambhīra",
    pillar: "panini",
    promise: "Levels of understanding: compute, derive, invent an example, teach.",
    youWill: ["Climb the understanding ladder", "Prefer derivations to formula worship", "Use induction as a generator"],
    teach: [
      {
        heading: "Four altitudes",
        body: "Can you compute it? Derive it? Produce a cousin problem? Teach it without notes? Algebra is a generator over arithmetic. Dimensional analysis is an early checksum. Estimation is a humility device.",
      },
    ],
    cards: [
      ["Four altitudes of mathematical understanding?", "Compute, derive, invent, teach."],
      ["What is induction, operationally?", "A generator: base case plus a step that produces the infinite family."],
    ],
    gate: {
      prompt: "One derivation from memory and one invented cousin problem with solution.",
      artifact: "math-altitude.md",
    },
  },
  {
    slug: "ai-engineering",
    number: 19,
    title: "AI engineering deep (2026)",
    sanskrit: "yantra-śilpa",
    pillar: "nyaya",
    promise: "Evals are pramāṇa. Demos are śabda with a marketing department.",
    youWill: ["Sketch the agent loop", "Write one eval before one feature", "Ablate a RAG claim"],
    teach: [
      {
        heading: "Loop plus evals",
        body: "Map the stack: data, retrieval, model, tools, evals, ops. An agent loop without a stop condition is a burn. Nyāya the output: perception (logs), inference (metrics), testimony (docs), comparison (baselines). Hallucination is not perception.",
      },
    ],
    cards: [
      ["What comes before a new AI feature here?", "An eval that would fail today and pass if the feature worked."],
      ["Name the agent-loop risk this campus flags.", "Unbounded recursion / missing stop condition — a cost and safety hole."],
    ],
    gate: {
      prompt: "One eval card and one ablation: what happens if retrieval is empty?",
      artifact: "eval-card.md",
    },
  },
  {
    slug: "communications",
    number: 20,
    title: "Communications engineering",
    sanskrit: "sambandha-śilpa",
    pillar: "path",
    promise: "THE CALL MUST ALWAYS CONNECT.",
    youWill: ["Name the call path", "Treat QoS as ethics for voice", "Debug from the failure domain"],
    teach: [
      {
        heading: "Signal temple",
        body: "CUCM, CUBE, SIP, E911, contact-center legs — the grammar is a path with failure domains. If a packet can drop a human in an emergency, 'best effort' is a moral claim. Trace, then change one hop.",
      },
    ],
    cards: [
      ["Campus axiom for voice?", "THE CALL MUST ALWAYS CONNECT."],
      ["First debug move?", "Name the failure domain before changing a config."],
    ],
    gate: {
      prompt: "Trace one real or lab call path and mark the failure domains.",
      artifact: "call-path.md",
    },
  },
  {
    slug: "body-mind",
    number: 21,
    title: "Body and mind",
    sanskrit: "śarīra / manas",
    pillar: "siksa",
    promise: "Attention has a physiology. Ignore it and the grammar never lands.",
    youWill: ["Protect sleep and daylight", "Use movement as a reset", "Treat attention as a budget"],
    teach: [
      {
        heading: "Tristambha, modern clothes",
        body: "Charaka’s three pillars (diet, sleep, brahmacarya-as-restraint) are not a wellness brand. They are load-bearing for encoding. Movement, daylight, and a cutoff hour beat another nootropic thread.",
      },
    ],
    cards: [
      ["Why does this campus talk about sleep in a learning OS?", "Sleep is consolidation hardware, not a reward for finishing the grind."],
      ["Attention is treated as?", "A budget with a cutoff — not an infinite stream to monetize."],
    ],
    gate: {
      prompt: "One week log: sleep midpoint, daylight, and one blocked practice session per day.",
      artifact: "soma-log.md",
    },
  },
  {
    slug: "time-attention",
    number: 22,
    title: "Time and attention",
    sanskrit: "kāla / ekāgratā",
    pillar: "siksa",
    promise: "If it has no slot, it is a wish.",
    youWill: ["Make a time budget", "Use a two-minute capture rule", "Close the week with review, not shame"],
    teach: [
      {
        heading: "Hygiene",
        body: "Capture in two minutes so RAM stays free. Deep work gets a named block. Notifications are apavāda, not utsarga. Weekly review is how the DAG stays honest.",
      },
    ],
    cards: [
      ["Two-minute rule here?", "Capture or do it in two minutes so it does not occupy working memory."],
      ["What happens to unscheduled mastery?", "It remains a wish."],
    ],
    gate: {
      prompt: "Publish a time budget with one protected retrieval block.",
      artifact: "time-budget.md",
    },
  },
  {
    slug: "money",
    number: 23,
    title: "Money mastery",
    sanskrit: "artha",
    pillar: "panini",
    promise: "Money has a grammar. Free education is a design choice, not an accident.",
    youWill: ["Write a money grammar", "Separate consume / save / give / build", "Fund learning without a paywall religion"],
    teach: [
      {
        heading: "Artha without capture",
        body: "A simple grammar beats a guru on Twitter: inflow, runway, give, build. 50/30/20 is a starting utsarga, not a commandment. This campus stays MIT so the method cannot be hostage to a billing cycle.",
      },
    ],
    cards: [
      ["Why is the campus MIT-licensed?", "So the method cannot be taken hostage by a paywall."],
      ["Money grammar first cut?", "Name inflow, runway, giving, and building — then exceptions."],
    ],
    gate: {
      prompt: "One-page money grammar with one number you will actually track.",
      artifact: "artha-grammar.md",
    },
  },
  {
    slug: "leadership",
    number: 24,
    title: "Leadership and service",
    sanskrit: "sevā",
    pillar: "nyaya",
    promise: "Authority is a loan. Nyāya it.",
    youWill: ["Decide with named evidence", "Prefer servant loops to status loops", "Make disagreement safe and specific"],
    teach: [
      {
        heading: "Decisions as public proofs",
        body: "A leadership call is a pratijñā. Show hetu and example. Invite defeat conditions. Status games are jalpa. Service is whether people near you become more able.",
      },
    ],
    cards: [
      ["How does Nyāya enter a decision?", "State the claim, the reason, an example, and what would falsify it."],
      ["Signal of servant leadership here?", "People near you become more able, not more dependent."],
    ],
    gate: {
      prompt: "Write one pending decision as a five-member proof.",
      artifact: "decision-nyaya.md",
    },
  },
  {
    slug: "philosophy",
    number: 25,
    title: "Philosophy of knowledge",
    sanskrit: "pramāṇa-śāstra",
    pillar: "nyaya",
    promise: "Know the difference between a model, a myth, and a measurement.",
    youWill: ["Hold an epistemology table", "Mark mysteries as mysteries", "Refuse fake certainty"],
    teach: [
      {
        heading: "The meaning question",
        body: "This campus is named for meaning and still will not fake answers. Consciousness, value, and purpose can be practiced without pretending they are settled physics. Write what would change your mind.",
      },
    ],
    cards: [
      ["What do we do with an open problem?", "Mark it open, and write what evidence would move it."],
      ["Model vs measurement?", "A model is a generator; a measurement is a pratyakṣa with an instrument."],
    ],
    gate: {
      prompt: "Epistemology table for your field: what counts, what is analogical, what is testimony.",
      artifact: "epistemology.md",
    },
  },
  {
    slug: "tools",
    number: 26,
    title: "Tools of the trade (2026)",
    sanskrit: "upakaraṇa",
    pillar: "memory",
    promise: "Offline-first. Capture, organize, retrieve, build, share.",
    youWill: ["Pick one tool per job", "Keep a local copy", "Never let a vendor hold your memory"],
    teach: [
      {
        heading: "Jobs, not apps",
        body: "Capture, organize, retrieve, build, share. One primary tool each. This campus itself stores progress on the machine you control. Sync is a convenience. Capture is a duty.",
      },
    ],
    cards: [
      ["Five tool jobs?", "Capture, organize, retrieve, build, share."],
      ["Where does this campus store your review state?", "On your machine (local storage) — you are the system of record."],
    ],
    gate: {
      prompt: "Your tool map with export paths. If a vendor dies, you still have the notes.",
      artifact: "tool-map.md",
    },
  },
  {
    slug: "history-ideas",
    number: 27,
    title: "History of ideas",
    sanskrit: "itihāsa-buddhi",
    pillar: "path",
    promise: "Place methods on a ladder so you stop reinventing poorly.",
    youWill: ["Sketch 1500 BCE → 2026 as methods, not celebrities", "Find parallel ladders", "Steal generators, not costumes"],
    teach: [
      {
        heading: "Method ladder",
        body: "Oral checksums, sūtra compression, proof culture, instruments, computation, evals. Names are handles. The ladder is what transfers. Parallel ladders exist; this campus refuses a single-civilization cartoon.",
      },
    ],
    cards: [
      ["What transfers from history?", "Generators and checksums — not costumes."],
      ["Why parallel ladders?", "So you do not pretend one lineage owns attention, proof, or number."],
    ],
    gate: {
      prompt: "A one-page ladder with five methods and one you will actually use this month.",
      artifact: "idea-ladder.md",
    },
  },
  {
    slug: "art",
    number: 28,
    title: "Art and expression",
    sanskrit: "kalā",
    pillar: "siksa",
    promise: "Taste is trained. Make, then see, then make again.",
    youWill: ["Write an art grammar", "Practice in public small loops", "Keep a finished piece, not only studies"],
    teach: [
      {
        heading: "Grammar of making",
        body: "Constraints generate style. Deliberate practice still applies: isolate a weak sub-skill, get specific feedback, ship a complete small work. Consumption without production is a mood.",
      },
    ],
    cards: [
      ["What is an art grammar?", "Constraints that generate pieces — palette, rhythm, form — plus exceptions."],
      ["Proof in art on this campus?", "A finished piece plus a note on what rule you were training."],
    ],
    gate: {
      prompt: "One finished small work and the rule it was drilling.",
      artifact: "piece + note.md",
    },
  },
  {
    slug: "speaking",
    number: 29,
    title: "Public speaking and presence",
    sanskrit: "vāc",
    pillar: "siksa",
    promise: "Voice is a trained instrument. Rehearse out loud.",
    youWill: ["Write a speaking grammar", "Rehearse standing", "Record and grade yourself"],
    teach: [
      {
        heading: "Breath, structure, one idea",
        body: "One claim per talk. Proof, story, ask. Rehearse standing. Record. Grade delivery as retrieval: did the structure survive without notes? Breath is not decoration; it is the clock.",
      },
    ],
    cards: [
      ["Speaking grammar in three moves?", "One claim, one proof path, one ask."],
      ["How do you grade a talk here?", "Record it. Could you retrieve the structure without notes?"],
    ],
    gate: {
      prompt: "A three-minute recording of one campus idea, no slides.",
      artifact: "talk.mp3",
    },
  },
  {
    slug: "final-module",
    number: 30,
    title: "The remaining mystery",
    sanskrit: "rahasya",
    pillar: "path",
    promise: "Keep a 90-day proof pack. Transmit. Do not fake the rest.",
    youWill: ["Assemble the proof pack", "Renew the vow", "Leave one mystery marked open"],
    teach: [
      {
        heading: "Transmission",
        body: "The method is the inheritance. Pack: grammar maps, review log, artifacts, one student. What you cannot prove, you may still live with — honestly. Remain a student on purpose.",
      },
    ],
    cards: [
      ["What is in a 90-day proof pack?", "Maps, review log, artifacts, and evidence of teaching one person."],
      ["What do we refuse to fake?", "Settled answers to mysteries that are still mysteries."],
    ],
    gate: {
      prompt: "Zip or folder: maps, logs, artifacts, student note, vow renewed.",
      artifact: "proof-pack/",
    },
  },
  {
    slug: "writing",
    number: 31,
    title: "Writing deep",
    sanskrit: "sūtra-lekha",
    pillar: "panini",
    promise: "Compress without lying. Daily engine.",
    youWill: ["Write sūtra-grade sentences", "Cut decoration that hides the claim", "Keep a daily line"],
    teach: [
      {
        heading: "Sūtra craft",
        body: "A sūtra is maximum meaning per syllable, still recoverable by a trained reader. That is the opposite of vague mystique. One claim per paragraph. Examples after rules. Delete throat-clearing.",
      },
    ],
    cards: [
      ["What is sūtra craft here?", "Maximum recoverable meaning per sentence — compression without fog."],
      ["Daily writing engine?", "One honest line you could retrieve tomorrow, not a word-count ritual."],
    ],
    gate: {
      prompt: "Rewrite one page of your notes as sūtras plus two examples.",
      artifact: "sutra-page.md",
    },
  },
  {
    slug: "negotiation",
    number: 32,
    title: "Negotiation and persuasion",
    sanskrit: "sāma",
    pillar: "nyaya",
    promise: "Interests, BATNA, options, criteria. Persuasion as pramāṇa, not heat.",
    youWill: ["Map interests vs positions", "Name your BATNA", "Argue with examples, not volume"],
    teach: [
      {
        heading: "Public reason",
        body: "Positions are slogans. Interests are the actual constraints. BATNA is the walk-away generator. Criteria should be checkable. Heat is jalpa. A good example is udāharaṇa.",
      },
    ],
    cards: [
      ["Position vs interest?", "Position is the demanded form; interest is the underlying constraint."],
      ["What is BATNA?", "Best alternative to a negotiated agreement — your walk-away generator."],
    ],
    gate: {
      prompt: "One live negotiation mapped: interests, BATNA, one checkable criterion.",
      artifact: "negotiation-map.md",
    },
  },
  {
    slug: "systems",
    number: 33,
    title: "Systems and networks",
    sanskrit: "yantra-jāla",
    pillar: "panini",
    promise: "Protocol sūtras. Fail-soft. Debug the interface.",
    youWill: ["Write a protocol grammar", "Hunt interface failures", "Design a fail-soft path"],
    teach: [
      {
        heading: "Interfaces fail first",
        body: "A system is components plus contracts. Most outages live on the contract. Nyāya debugging: what did we observe, what do we infer, what testimony (logs) is trustworthy? Fail-soft beats fail-loud when humans are on the path.",
      },
    ],
    cards: [
      ["Where do many failures live?", "At interfaces — the contracts between components."],
      ["Fail-soft means?", "Degrade to a safe lesser service instead of a hard stop when possible."],
    ],
    gate: {
      prompt: "A protocol sūtra page for a system you use, with one fail-soft path.",
      artifact: "protocol-sutras.md",
    },
  },
  {
    slug: "privacy-security",
    number: 34,
    title: "Privacy and security",
    sanskrit: "gupti",
    pillar: "nyaya",
    promise: "Assume a hostile reader. Epistemic hygiene for machines and minds.",
    youWill: ["Write a personal baseline", "Separate secrets from notes", "Treat links and models as untrusted śabda"],
    teach: [
      {
        heading: "Baseline",
        body: "Secrets never live in the curriculum repo. Phishing is jalpa with a login form. Models will invent authority. Least privilege, unique credentials, local backups. Curiosity is not a reason to disable the lock.",
      },
    ],
    cards: [
      ["Where do secrets live?", "In a password manager / env — never in notes you might publish."],
      ["Models as śabda?", "Untrusted until grounded. They can invent a confident source."],
    ],
    gate: {
      prompt: "Personal baseline checklist you actually follow this week.",
      artifact: "security-baseline.md",
    },
  },
  {
    slug: "environment",
    number: 35,
    title: "Environment design",
    sanskrit: "āyatana",
    pillar: "siksa",
    promise: "The room is part of the grammar.",
    youWill: ["Audit the room", "Stack one habit on a stable cue", "Remove one friction that kills retrieval"],
    teach: [
      {
        heading: "Architecture of attention",
        body: "Cues start sessions; friction ends them. Phone out of reach is a sūtra. A dedicated retrieval seat beats a new app. Change the room before you lecture yourself.",
      },
    ],
    cards: [
      ["First environment move?", "Change the room — cues and friction — before adding willpower speeches."],
      ["What should the retrieval seat contain?", "The due queue and a closed book. Not a second screen of bait."],
    ],
    gate: {
      prompt: "Photo or sketch of your study seat plus one friction you removed.",
      artifact: "seat.md",
    },
  },
  {
    slug: "decision-science",
    number: 36,
    title: "Decision science",
    sanskrit: "vinirṇaya",
    pillar: "nyaya",
    promise: "Bets with payoffs. Bias as hetvābhāsa with a name.",
    youWill: ["Write decision cards", "Pre-mortem", "Keep a bias radar"],
    teach: [
      {
        heading: "Card before commitment",
        body: "Claim, options, evidence, disconfirmers, review date. Overconfidence is unguarded pratijñā. Sunk cost is an apavāda that pretends to be duty. Small bets that always teach beat one theatrical leap.",
      },
    ],
    cards: [
      ["What is on a decision card?", "Claim, options, evidence, disconfirmers, review date."],
      ["Sunk cost on this campus?", "An apavāda pretending to be duty. Review the live options."],
    ],
    gate: {
      prompt: "One decision card with a dated review.",
      artifact: "decision-card.md",
    },
  },
  {
    slug: "storytelling",
    number: 37,
    title: "Storytelling",
    sanskrit: "kathā",
    pillar: "memory",
    promise: "Story is a memory palace with a moral load. Use it cleanly.",
    youWill: ["Write a story grammar", "Use story to encode a rule", "Refuse story that smuggles a false universal"],
    teach: [
      {
        heading: "Grammar of a teaching story",
        body: "Character wants, meets a constraint, chooses, pays. The rule should survive without the costume. If the story implies always/never, Nyāya it. Palaces hold structure; they do not replace proof.",
      },
    ],
    cards: [
      ["Teaching-story grammar?", "Want, constraint, choice, cost — then the recoverable rule."],
      ["Danger of story?", "It can smuggle a false universal inside a vivid example."],
    ],
    gate: {
      prompt: "One teaching story for a rule in your domain, plus the rule in one sūtra.",
      artifact: "katha.md",
    },
  },
  {
    slug: "mentoring",
    number: 38,
    title: "Mentoring",
    sanskrit: "guru-śiṣya",
    pillar: "path",
    promise: "Exchange, not worship. Evidence log on both sides.",
    youWill: ["Ask for specific correction", "Give specific correction", "Keep an evidence log"],
    teach: [
      {
        heading: "The exchange",
        body: "A mentor who only praises is a mirror. A student who only collects access is a tourist. Schedule work, not coffee. The log: what was attempted, what failed, what rule changed.",
      },
    ],
    cards: [
      ["What do you ask a mentor for?", "Specific correction on a named artifact — not general inspiration."],
      ["What belongs in the evidence log?", "Attempt, failure, rule that changed."],
    ],
    gate: {
      prompt: "Message (unsent is fine) asking a mentor to review one artifact with one question.",
      artifact: "mentor-ask.md",
    },
  },
  {
    slug: "productivity-os",
    number: 39,
    title: "The productivity OS",
    sanskrit: "nitya-karma",
    pillar: "siksa",
    promise: "Capture → plan → do → review → prove → learn. A rhythm, not a brand.",
    youWill: ["Run the six-stage day", "Keep a dashboard of due reviews", "Stop when the block ends"],
    teach: [
      {
        heading: "Rhythm",
        body: "Capture so the head is empty. Plan one generator task. Do the block. Review what the scheduler says is due. Prove with an artifact. Learn: patch the grammar. Dashboards that do not change behavior are altars.",
      },
    ],
    cards: [
      ["Six-stage day?", "Capture, plan, do, review, prove, learn."],
      ["When do you stop?", "When the block ends — so tomorrow still exists."],
    ],
    gate: {
      prompt: "One day run with timestamps and a single artifact.",
      artifact: "day-os.md",
    },
  },
  {
    slug: "capstone",
    number: 40,
    title: "The master's capstone",
    sanskrit: "pūrṇa",
    pillar: "path",
    promise: "Legacy loop: a work, a student, a vow. Then begin again at a higher grammar.",
    youWill: ["Ship the capstone", "Name the student", "Renew the oath without theatre"],
    teach: [
      {
        heading: "The oath, operational",
        body: "Remember, bridge, build for use, plant, stay unstuck, protect the free method, remain a mystery where mystery is honest. The capstone is not a brand film. It is a work someone else can run, plus a person who can restart the loop without you.",
      },
    ],
    cards: [
      ["What two things close the capstone?", "A work someone else can run, and a person who can restart the loop."],
      ["Remain a mystery means?", "Do not fake certainty. Keep a private life. Let the work carry the name."],
    ],
    gate: {
      prompt: "Capstone README: how to run it, whom you taught, vow dated.",
      artifact: "CAPSTONE.md",
    },
  },
];

export const MODULES: Module[] = drafts.map(moduleFrom);

export const MODULE_BY_SLUG = new Map(MODULES.map((mod) => [mod.slug, mod]));

export function allCards() {
  return MODULES.flatMap((mod) =>
    mod.cards.map((card) => ({
      ...card,
      moduleSlug: mod.slug,
      moduleTitle: mod.title,
      pillar: mod.pillar,
    })),
  );
}

export const PILLAR_META: Record<
  Pillar,
  { title: string; sanskrit: string; blurb: string }
> = {
  siksa: {
    title: "Śikṣā",
    sanskrit: "discipline of learning",
    blurb: "Attention, sound, retrieval, sleep, the daily loop.",
  },
  panini: {
    title: "Pāṇini",
    sanskrit: "finite rules, infinite forms",
    blurb: "Grammars, maps, generators, exceptions.",
  },
  nyaya: {
    title: "Nyāya",
    sanskrit: "how you know",
    blurb: "Proof, evals, fallacies, public reason.",
  },
  memory: {
    title: "Smṛti",
    sanskrit: "engineered memory",
    blurb: "FSRS-6, palaces, oral checksums.",
  },
  path: {
    title: "Mārga",
    sanskrit: "the path",
    blurb: "Vow, playbook, 90-day arc, transmission.",
  },
};
