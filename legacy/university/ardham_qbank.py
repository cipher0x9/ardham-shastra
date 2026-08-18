#!/usr/bin/env python3
"""Ardham Shastra Pack B — procedural Question Bank generator.

Appends a dense Mastery Question Bank before </main>.
Target: 1,500+ MCQs, multi-MB HTML. Offline-first, no CDN.
Idempotent: skips if section id="qbank-mastery" already present.
Usage: python3 university/ardham_qbank.py
"""
from __future__ import annotations

import hashlib
from pathlib import Path

CAMPUS = Path(__file__).resolve().parent / "v1-ARDHAM-SHASTRA.html"
SECTION_ID = "qbank-mastery"
MARKER = "</main>"

# (slug, short_title, list of fact dicts)
# Each fact: claim, correct, wrongs[3], tip
# Variants generated programmatically per fact.

def esc(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


# ---------------------------------------------------------------------------
# Dense fact packs per mandala (existing 1–40 + new 41–70)
# Each fact yields ~4–5 MCQ variants → size lever.
# ---------------------------------------------------------------------------

FACTS: dict[str, list[dict]] = {}


def add(mid: str, facts: list[dict]) -> None:
    FACTS.setdefault(mid, []).extend(facts)


# --- Mandala 01–16 core seeds (compact but multipliable) ---
add("path", [
    {"c": "The campus path is 'Learn anything. Master everything.'", "ok": "Learn anything. Master everything.", "w": ["Ship fast. Fail often.", "Know everything by year one.", "Only specialize forever.", "Avoid teaching others."], "tip": "The brand promise is mastery across domains, not speed alone."},
    {"c": "Ardham means meaning / sense / purpose in Sanskrit-derived usage on this campus.", "ok": "meaning / sense", "w": ["weapon", "temple only", "exam score", "code comment"], "tip": "Ardham Shastra = the science of meaning."},
    {"c": "The campus is offline-first and MIT-licensed.", "ok": "offline-first + MIT", "w": ["SaaS only", "proprietary", "CDN-required", "paid subscription"], "tip": "No CDN dependency; free to fork and teach."},
    {"c": "GREEN gates prove mastery by explanation from memory and doing.", "ok": "explain from memory + do", "w": ["pass a multiple-choice only", "watch a video", "bookmark a page", "like a post"], "tip": "Gates demand retrieval and practice, not passive reading."},
    {"c": "Transmission means teaching one person the method after you learn it.", "ok": "teach one person", "w": ["hoard notes", "never share", "sell only", "delete evidence"], "tip": "Plant seeds; the tradition continues through you."},
    {"c": "CYPHER0X9 is the brand operator of this free campus.", "ok": "CYPHER0X9", "w": ["OpenAI only", "Anonymous", "Paid academy brand", "University of California only"], "tip": "Brand + MIT stay untouched."},
    {"c": "A mandala here is a self-contained mastery section with a GREEN gate.", "ok": "section + GREEN gate", "w": ["only a meditation circle", "a CSS theme", "a paywall", "a quiz without content"], "tip": "Each mandala is content + proof gate."},
    {"c": "The oath includes Remember, Bridge, Build-for-use, Plant, Stay unstuck, Protect, Remain a mystery.", "ok": "Remember→…→Remain-mystery", "w": ["Only monetize", "Never teach", "Ship without ethics", "Delete history"], "tip": "Legacy loop from the final mandalas."},
    {"c": "Stuck means position; stopped means decision — stuck ≠ stopped.", "ok": "stuck≠stopped", "w": ["stuck always means quit", "stopped means win", "same word", "ignore friction"], "tip": "Stuck law: reframe position vs choice."},
    {"c": "Evidence registers track proof per mandala, not vibes.", "ok": "proof per mandala", "w": ["likes count", "hours only", "unread PDFs", "AI summaries alone"], "tip": "No artifact, no claim."},
    {"c": "The flagship file is university/v1-ARDHAM-SHASTRA.html.", "ok": "v1-ARDHAM-SHASTRA.html", "w": ["index.php only", "app.exe", "paywall.html", "cdn-bundle.js"], "tip": "Single-file campus HTML."},
    {"c": "Sanskrit accents appear as Devanagari + transliteration + meaning.", "ok": "Devanagari + IAST + meaning", "w": ["emoji only", "Latin only always", "no glosses", "IPA only"], "tip": "English surface + Sanskrit accents."},
    {"c": "Hundred-fold thinking favors micro seeds and free education.", "ok": "micro seeds + free edu", "w": ["only enterprise deals", "gatekeeping knowledge", "destroy rivals", "ignore nonprofits"], "tip": "Plant, do not sell."},
    {"c": "The call must always connect is the signal-temple axiom for UC/SIP.", "ok": "THE CALL MUST ALWAYS CONNECT", "w": ["packet loss is fine", "drop emergency calls", "ignore QoS", "skip testing"], "tip": "CUCM/UCCE/CUBE world path."},
    {"c": "Mastery is tools × effort × time, not hope alone.", "ok": "tools × effort × time", "w": ["hope only", "talent myth alone", "luck only", "credentials only"], "tip": "Axiom: everything possible is tools×effort×time."},
])

add("siksa", [
    {"c": "Śikṣā is the Vedic limb of phonetics and proper sound training.", "ok": "phonetics / sound training", "w": ["astronomy only", "ritual fire only", "geometry", "economics"], "tip": "First of the Vedāṅgas for oral fidelity."},
    {"c": "The learning loop is often capture → organize → practice → teach → review.", "ok": "capture→organize→practice→teach→review", "w": ["binge→forget", "only highlight", "only reread", "skip practice"], "tip": "Śikṣā-style loops beat passive reading."},
    {"c": "Oral fidelity means reproducing sound and form without drift.", "ok": "no drift in form/sound", "w": ["approximate vibes", "ignore accents", "paraphrase only", "machine-only"], "tip": "Pada-pāṭha spirit for modern skills."},
    {"c": "Daily practice blocks of 45–90 minutes beat marathon cramming.", "ok": "45–90 min daily", "w": ["8h once a year", "zero practice", "only weekends yearly", "all-nighters only"], "tip": "Spacing + consistency."},
    {"c": "Teach-back is a GREEN-level proof of understanding.", "ok": "teach someone", "w": ["bookmark", "like", "screenshot", "skim"], "tip": "If you can teach it, you own it."},
    {"c": "Minimal pairs train hearing before production.", "ok": "hear difference first", "w": ["only write essays", "skip audio", "translate only", "grammar tables alone"], "tip": "Phonetic firewall."},
    {"c": "Comprehensible input sits near 80–90% understanding.", "ok": "80–90% comprehension", "w": ["0% chaos", "100% boredom only", "always harder", "no input"], "tip": "Level where learning sticks."},
    {"c": "Sentence mining collects gold sentences for internalization.", "ok": "collect & internalize sentences", "w": ["random word lists only", "delete examples", "avoid context", "only roots"], "tip": "Context beats isolated glosses."},
    {"c": "Shadowing means repeating native audio ~0.5s behind.", "ok": "repeat ~0.5s behind", "w": ["mute audio", "read silently only", "translate after days", "skip prosody"], "tip": "Match intonation."},
    {"c": "The polyglot OS isolates identity per language while sharing grammar awareness.", "ok": "identity isolation + shared grammar", "w": ["mix all freely always", "never compare", "one language forever only", "abandon mother tongue"], "tip": "Apps on one brain-OS."},
    {"c": "Bidirectional cards train both recognition and production.", "ok": "both directions", "w": ["L1→L2 only", "L2→L1 only", "no cards", "pictures only"], "tip": "Target→native is often harder and valuable."},
    {"c": "A 90-day language arc moves sound→pattern→tense→story→conversation.", "ok": "sound to conversation arc", "w": ["exams only week 1", "skip sound", "only apps idle", "no speaking"], "tip": "Structured progressive arc."},
    {"c": "Proof in language learning is recorded speech and real conversation.", "ok": "record + converse", "w": ["streak alone", "downloads", "dictionary size", "likes"], "tip": "Artifacts over vanity metrics."},
    {"c": "Agglutinative languages stack suffixes; English relies more on word order and helpers.", "ok": "suffix stacks vs helpers/order", "w": ["identical morphologies", "no grammar", "only tones", "no verbs"], "tip": "Typology awareness."},
    {"c": "Ergative patterns (e.g. Hindi past) mark agents differently than English nominative.", "ok": "agent marking differs", "w": ["identical to English always", "no past tense", "no subjects", "only tones"], "tip": "Typological alert for learners."},
])

add("panini", [
    {"c": "Pāṇini's Aṣṭādhyāyī is a generative grammar of Sanskrit in sūtra form.", "ok": "generative sūtra grammar", "w": ["novel only", "dictionary of plants", "music score", "tax code only"], "tip": "Finite rules, infinite expressions."},
    {"c": "Utsarga means general rule; apavāda means exception.", "ok": "general vs exception", "w": ["both mean error", "both mean sound", "only meter", "only ethics"], "tip": "Core meta-grammar pair."},
    {"c": "Anubandhas are technical markers in sūtras that guide rule application.", "ok": "technical markers", "w": ["musical notes", "currency", "food spices", "cities"], "tip": "Meta-syntax of the grammar."},
    {"c": "Sandhi is sound combination at boundaries.", "ok": "sound combination", "w": ["only spelling reform", "tax", "geometry", "silence"], "tip": "Phonological glue."},
    {"c": "Dhātu means verbal root in the Pāṇinian system.", "ok": "verbal root", "w": ["metal", "planet", "caste only", "number"], "tip": "Roots generate verb families."},
    {"c": "Pratyaya means affix/suffix applied to bases.", "ok": "affix", "w": ["king", "river", "star", "weapon"], "tip": "Morphology engine."},
    {"c": "Vibhakti are case endings (and related inflection) in Sanskrit.", "ok": "case/inflection endings", "w": ["only pathels", "only meters", "only gods", "only numbers 1–10"], "tip": "8 cases classic frame."},
    {"c": "Meta-rules control when and how ordinary rules apply — like compiler directives.", "ok": "rules about rules", "w": ["only vocabulary lists", "only myths", "only geography", "only recipes"], "tip": "Pāṇini ↔ compiler analogy."},
    {"c": "Sphoṭa is the flash of unitary meaning in language theory (Bhartrhari lineage).", "ok": "unitary meaning flash", "w": ["only noise", "only ink", "only silence", "only number"], "tip": "Vedic↔AI: sphoṭa ↔ latent."},
    {"c": "A finite rule set generating infinite forms is the Pāṇini method for any domain.", "ok": "finite rules → infinite forms", "w": ["infinite rules always", "no rules", "only examples", "only memorization of all sentences"], "tip": "Method, not only Sanskrit."},
    {"c": "Vikṛti pāṭha variants (krama, jaṭā, ghana) protect oral text integrity.", "ok": "oral integrity variants", "w": ["dance only", "painting only", "tax forms", "sport rules"], "tip": "Error-detecting recitation modes."},
    {"c": "Siddha forms are established/ready outputs after rule application.", "ok": "established forms", "w": ["errors only", "drafts only", "foreign loans only", "deleted forms"], "tip": "Grammar produces siddha."},
    {"c": "Rule ordering matters: later rules can block or refine earlier ones.", "ok": "ordering matters", "w": ["order never matters", "random apply", "human mood only", "page number only"], "tip": "Like pipeline stages."},
    {"c": "Arabic root-and-pattern morphology is a living cousin of generative grammar insight.", "ok": "root-and-pattern like generative insight", "w": ["unrelated totally", "only SVO", "no roots", "only tones"], "tip": "Cross-linguistic analogy in campus language mandala."},
    {"c": "Writing a one-page grammar map is applying Pāṇini method to any language.", "ok": "one-page grammar map", "w": ["only phrasebook", "only movies", "no structure", "only slang"], "tip": "Utsarga layer for learners."},
])

add("nyaya", [
    {"c": "Nyāya is the school of logic and valid means of knowledge (pramāṇa).", "ok": "logic + pramāṇa", "w": ["only poetry", "only dance", "only cooking", "only astrology pop"], "tip": "Debate and epistemology."},
    {"c": "Pratyakṣa is perception as a pramāṇa.", "ok": "perception", "w": ["hearsay only", "dream only", "rumour", "hope"], "tip": "Direct cognition."},
    {"c": "Anumāna is inference.", "ok": "inference", "w": ["taste only", "silence", "guess without reason", "authority alone"], "tip": "Smoke → fire style reasoning."},
    {"c": "Śabda is reliable testimony/word as a pramāṇa.", "ok": "reliable testimony", "w": ["noise", "random tweets always", "echoes", "static"], "tip": "Trusted speaker/source."},
    {"c": "Upamāna is comparison/analogy as a means of knowledge.", "ok": "comparison/analogy", "w": ["only math proof", "only ritual", "only sleep", "only chance"], "tip": "Gavaya like cow analogy."},
    {"c": "Hetvābhāsa means fallacy — apparent reason that fails.", "ok": "fallacy", "w": ["valid proof", "poem meter", "currency", "herb"], "tip": "Debug bad arguments."},
    {"c": "A five-member syllogism (pañcāvayava) structures classical Nyāya argument.", "ok": "five-member syllogism", "w": ["two-word slogan", "no structure", "only insults", "only data dump"], "tip": "Claim, reason, example, application, conclusion."},
    {"c": "Pakṣa is the subject under discussion in a syllogism.", "ok": "subject under discussion", "w": ["only the fallacy", "only the meter", "only the spice", "only the color"], "tip": "Where the property is to be proved."},
    {"c": "Sādhya is the property to be established.", "ok": "property to prove", "w": ["the lawyer fee", "the temple", "the ocean", "the festival only"], "tip": "What you want to show."},
    {"c": "Hetu is the reason/middle term linking pakṣa and sādhya.", "ok": "reason/middle term", "w": ["decoration", "insult", "date stamp", "font"], "tip": "Because of smoke…"},
    {"c": "Dṛṣṭānta is the example that illustrates the general rule.", "ok": "illustrative example", "w": ["counterexample only", "noise", "password", "tax id"], "tip": "Kitchen fire example etc."},
    {"c": "Navya-Nyāya refined technical language for precision — multi-agent debug vibe.", "ok": "precision technical language", "w": ["vague poetry only", "no definitions", "only emotion", "only myth"], "tip": "Campus Vedic↔AI mapping."},
    {"c": "Debate (kathā) types include honest inquiry vs tricky wrangling.", "ok": "honest vs tricky debate types", "w": ["only shouting", "no categories", "only silence", "only voting"], "tip": "vāda vs jalpa/vitaṇḍā spirit."},
    {"c": "Using pramāṇas as evals maps ancient epistemology to modern model evaluation.", "ok": "pramāṇas as evals", "w": ["delete evals", "trust all outputs", "no sources", "only speed"], "tip": "AI eng mandala mapping."},
    {"c": "Empty-retrieval tests check whether systems invent when knowledge is missing.", "ok": "test missing-knowledge honesty", "w": ["always cache hit", "ignore failures", "only UI tests", "only latency"], "tip": "Modern Nyāya for RAG."},
])

# Expand remaining existing mandalas with solid fact sets
CORE_EXTRA = {
    "maps": [
        ("Vaiśeṣika padārthas categorize reality into substance, quality, action, etc.", "padārtha categories", "only emotions", "only apps", "only prices", "only fonts"),
        ("Sāṃkhya tattvas are a layered map of principles of nature and mind.", "layered tattva map", "only recipes", "only sports scores", "only CSS", "only passwords"),
        ("Domain maps prevent skill islands by showing connections.", "show connections", "hide links", "random order only", "delete maps", "only timelines"),
        ("A good map has components, flows, feedback, and failure modes.", "components+flows+feedback+failure", "logo only", "title only", "emoji only", "blank page"),
        ("Idea ladders place thinkers and methods on progressive rungs.", "progressive rungs", "random piles", "only birth years", "only nationality", "only memes"),
        ("Ontology before tactics: name the entities before optimizing.", "entities first", "tactics first always", "skip naming", "only vibes", "only tools"),
        ("Cross-links between mandalas create a lattice, not a linear course.", "lattice of links", "one-way only", "no revisits", "locked chapters", "pay per link"),
        ("Failure modes on a map are first-class, not shameful.", "failure modes first-class", "hide failures", "punish maps", "only happy path", "delete logs"),
        ("Feedback loops can be reinforcing or balancing.", "reinforcing vs balancing", "only noise", "only one type", "no loops", "static only"),
        ("Resilience is designed capacity to absorb shock and recover.", "absorb+recover", "never fail", "ignore shock", "only speed", "only cost cut"),
        ("A personal ontology lists what kinds of things you track as a learner.", "learner entity types", "only calendar", "only sleep", "only money", "only likes"),
        ("Maps should be revisable when evidence updates.", "revisable maps", "carved forever", "never edit", "burn notes", "ignore evidence"),
        ("Boundary definition stops infinite scope creep.", "define boundary", "infinite scope", "no edges", "all topics at once", "zero topics"),
        ("Interface points between systems are where many failures live.", "interfaces fail often", "cores only fail", "never interfaces", "only UI colors", "only marketing"),
        ("Teaching a map is a GREEN proof of systems understanding.", "teach the map", "hide map", "screenshot only", "never redraw", "outsource memory"),
    ],
    "math": [
        ("Zero as a number and place value transformed calculation.", "zero + place value", "only roman tallies", "no place", "fractions only", "geometry only"),
        ("Proof separates certainty from guesswork.", "proof vs guess", "votes always", "guess equals proof", "authority only", "volume only"),
        ("Induction proves infinite families from base + step.", "base + inductive step", "only examples", "only pictures", "only computers", "only votes"),
        ("Algebra generalizes arithmetic with symbols.", "symbols generalize", "only digits", "only words", "only geometry", "only music"),
        ("Geometry studies space, shape, and measure.", "space/shape/measure", "only finance", "only grammar", "only history dates", "only code style"),
        ("Probability quantifies uncertainty for decisions.", "quantify uncertainty", "delete chance", "always 50-50", "never measure", "only feelings"),
        ("Functions map inputs to outputs consistently.", "input→output map", "random map", "no domain", "no range", "only constants"),
        ("The Kerala school advanced infinite series for π etc.", "infinite series for π", "only abacus", "no series", "only Euclid forever", "only astrology"),
        ("Quadratic formula solves ax²+bx+c=0 when discriminant allows.", "quadratic formula", "only linear always", "no closed form ever", "only graphs", "only tables"),
        ("Dimensional analysis catches unit errors early.", "check units", "ignore units", "mix freely", "only pure numbers", "delete dimensions"),
        ("Estimation before calculation catches order-of-magnitude bugs.", "estimate first", "calc blind", "skip sense-check", "trust first answer", "no bounds"),
        ("Graphs reveal structure that tables can hide.", "structure via graphs", "never graph", "tables only always", "text only", "audio only"),
        ("A counterexample kills a universal claim.", "one counterexample", "need infinite counters", "votes never die", "vote overrides", "ignore counter"),
        ("Math mnemonics aid retrieval but proofs build understanding.", "mnemonic ≠ proof", "mnemonic is proof", "no retrieval needed", "skip understanding", "only calculators"),
        ("Teach a derivation from memory as GREEN gate style proof.", "derive from memory", "copy once", "watch only", "screenshot formula", "AI only"),
    ],
    "memory": [
        ("SM-2 is a spaced repetition algorithm using ease and intervals.", "spaced rep algorithm", "random quiz only", "cram only", "no intervals", "fixed daily all cards"),
        ("Spaced repetition schedules reviews just as forgetting rises.", "review near forgetting", "review never", "review every second", "one-shot only", "delete hard cards"),
        ("Chunking groups items into meaningful units (±7-ish working memory).", "meaningful groups", "infinite raw items", "no groups", "only singles", "only paragraphs of 100"),
        ("Retrieval practice beats rereading for long-term memory.", "retrieve > reread", "reread best always", "highlight best", "listen once", "never test"),
        ("Encoding specificity: cues at study help at test if matched.", "match cues", "mismatch always helps", "no cues", "only music", "only caffeine"),
        ("Interleaving mixes related skills; blocking drills one then next.", "mix vs block", "only block always best", "only mix always", "no practice", "random life only"),
        ("Desirable difficulties slow short-term performance, help retention.", "harder now, better later", "easy always best", "hard always worse", "no difficulty", "only speed"),
        ("Dual coding pairs words with images.", "words+images", "words only always best", "images only", "no codes", "only audio silence"),
        ("Sleep consolidates memory; deprivation taxes learning.", "sleep consolidates", "all-nighters best", "sleep optional", "only naps of 2 min", "never rest"),
        ("Loci method places images on a path of places.", "memory palace path", "only lists", "only songs", "only smell", "only pure logic"),
        ("Mnemonic stories bind abstract lists into narrative.", "story binds list", "story confuses always", "no stories", "only numbers", "only pure drill"),
        ("Active recall card front should cue without leaking the answer.", "cue without leak", "print answer on front", "blank card", "whole textbook front", "no front"),
        ("Leech cards need rewrite, not endless failing reviews.", "rewrite leeches", "review forever same", "delete all", "ignore ease", "double load"),
        ("Feynman technique: explain simply; gaps reveal what to study.", "simple explain reveals gaps", "jargon hides mastery", "never explain", "only equations", "only quotes"),
        ("NEXT review dates turn notes into a living memory system.", "NEXT dates", "undated piles", "only folders", "only tags", "only search"),
    ],
}

def _pack_from_tuples(mid: str, rows: list[tuple]) -> None:
    facts = []
    for row in rows:
        claim, ok, w1, w2, w3, w4 = row[0], row[1], row[2], row[3], row[4], row[5]
        tip = row[6] if len(row) > 6 else claim[:80]
        facts.append({"c": claim, "ok": ok, "w": [w1, w2, w3], "tip": tip, "extra_w": w4})
    add(mid, facts)

for mid, rows in CORE_EXTRA.items():
    _pack_from_tuples(mid, rows)

MORE = {
    "playbook": [
        ("A playbook converts principles into step sequences under constraints.", "steps under constraints", "vibes only", "random tips", "slogans only", "no sequence"),
        ("Checklists reduce omission errors under load.", "reduce omissions", "increase chaos", "replace thinking always", "delete experts", "no lists"),
        ("Pre-mortems imagine failure before starting.", "imagine failure early", "only postmortems", "ignore risk", "assume success", "skip planning"),
        ("After-action reviews capture what to keep/change.", "keep/change review", "blame only", "never review", "delete logs", "celebrate only"),
        ("Constraints breed creative tactics.", "constraints help design", "no limits best always", "infinite budget required", "no tactics", "only tools"),
        ("Default actions beat willpower for routine work.", "defaults > willpower", "willpower always enough", "no defaults", "chaos best", "only motivation quotes"),
        ("Escalation paths define who decides when stuck.", "who decides when stuck", "stuck forever", "no owners", "everyone decides all", "delete roles"),
        ("Definition of done prevents false completion.", "definition of done", "done = started", "done = idea", "done = tweet", "done = hope"),
        ("Timeboxes force progress over perfection stalls.", "timebox progress", "infinite polish", "no deadlines ever", "only crunch", "skip ship"),
        ("Templates encode expert judgment for novices.", "encode judgment", "templates kill skill always", "no templates", "copy forever blind", "only freeform"),
        ("Risk registers track likelihood × impact.", "likelihood × impact", "ignore risk", "only fear", "only optimism", "no track"),
        ("Runbooks are executable docs for incident response.", "executable incident docs", "novels only", "tribal memory only", "chat logs only", "no process"),
        ("Metrics should be few, leading, and actionable.", "few actionable metrics", "vanity metric flood", "no metrics", "only lagging vanity", "only feelings"),
        ("Playbooks must version with reality, not dogma.", "version with reality", "never update", "update hourly chaos", "delete history", "timeless forever"),
        ("GREEN gate: run the playbook once and log the outcome.", "run + log", "read only", "bookmark", "like", "screenshot"),
    ],
    "ai": [
        ("AI is a tool; verification remains human responsibility.", "human verifies", "trust always", "never verify", "AI is truth", "delete sources"),
        ("Prompts are specifications; ambiguity yields drift.", "spec clarity", "vague is fine", "no prompts", "only defaults", "random seeds only"),
        ("Hallucinations are fluent falsehoods — check sources.", "fluent falsehoods", "always true", "never fluent", "only math errors", "only typos"),
        ("RAG retrieves external docs to ground generation.", "retrieve to ground", "always pure parametrics", "no retrieval", "only train forever", "delete indexes"),
        ("Eval harnesses need golden questions and scoring.", "golden Qs + scoring", "vibes eval", "no evals", "only latency", "only cost"),
        ("Temperature trades creativity vs determinism.", "creativity vs determinism", "always max temp", "always zero only forever", "no sampling", "only greedy forever same"),
        ("Context windows are finite — prioritize signal.", "finite context", "infinite always", "no prioritization", "dump all", "empty always"),
        ("Agent loops: observe, plan, act, verify, store.", "observe-plan-act-verify-store", "act only", "plan forever", "no verify", "no store"),
        ("Least privilege for tools reduces blast radius.", "least privilege tools", "god-mode always", "no tools", "all tools all time", "no audit"),
        ("Citation requests reduce ungrounded claims.", "ask for citations", "forbid sources", "only style", "only speed", "only length"),
        ("Empty-retrieval tests probe honest uncertainty.", "probe uncertainty", "force answers always", "hide misses", "fake docs", "skip tests"),
        ("Model cards document limits and intended use.", "document limits", "hide limits", "no cards", "only marketing", "only benchmarks cherry"),
        ("Prompt injection attacks try to override instructions.", "override instructions attack", "always safe", "only hardware", "only network", "only phishing email"),
        ("Distillation compresses capability into smaller models.", "compress capability", "always enlarge only", "delete small models", "no transfer", "only humans"),
        ("Teach one AI workflow with a Nyāya audit of claims.", "workflow + audit", "trust output", "no audit", "only UI", "only API keys"),
    ],
    "cosmos": [
        ("Calendars reconcile celestial cycles with civil time.", "celestial + civil", "ignore sky", "only clocks", "only feelings", "random days"),
        ("Solstices mark extreme day/night lengths.", "extreme day/night", "equal day/night", "moon only", "tide only", "eclipse only"),
        ("Equinoxes bring roughly equal day and night.", "equal day/night", "longest day", "shortest day", "no seasons", "only leap seconds"),
        ("Lunar months track moon phases ~29.5 days.", "~29.5 day moon cycle", "exactly 30 always", "365 days", "7 days", "1 year"),
        ("Ecliptic is the Sun's apparent path among stars.", "Sun's path", "Moon only", "horizon only", "magnetic north", "equator only"),
        ("Precession slowly shifts equinox points over millennia.", "slow equinox shift", "instant yearly flip", "no precession", "only tides", "only comets"),
        ("Parallax measures nearby star distances via baseline.", "baseline geometry", "brightness only always", "color only", "myth only", "vote"),
        ("Light-year is distance light travels in one year.", "distance unit", "time unit only", "mass unit", "temperature", "currency"),
        ("Heliocentric model places Sun near center of system.", "Sun-centered system", "Earth fixed center always", "Moon center", "Mars center", "galaxy only local"),
        ("Kepler's laws describe elliptical planetary orbits.", "elliptical orbits", "perfect circles only", "square orbits", "random paths", "fixed spheres only"),
        ("Spectroscopy reads composition from light signatures.", "spectral fingerprints", "touch only", "smell only", "guess only", "mythology only"),
        ("Cosmic scales humble human planning horizons.", "scale humility", "ignore scale", "only local", "only ego", "only deadlines"),
        ("Observational logs beat memory of rare events.", "log observations", "remember only", "delete logs", "only photos without notes", "only stories"),
        ("Indian astronomical traditions computed eclipses and calendars rigorously.", "eclipse/calendar rigor", "only myth", "no computation", "only ritual without math", "random festivals"),
        ("Map sky cycles to your study seasons as a living calendar.", "map cycles to study", "ignore seasons", "only artificial lights", "no calendar", "only deadlines"),
    ],
}

for mid, rows in MORE.items():
    _pack_from_tuples(mid, rows)

MORE2 = {
    "study": [
        ("Deep work needs protected blocks free of shallow interrupts.", "protected blocks", "always open chat", "multitask always", "no blocks", "only nights"),
        ("Active learning beats passive highlighting.", "active > passive", "highlight is enough", "reread only", "skip practice", "only videos"),
        ("Goals should be specific, time-bound, and evidence-linked.", "specific + evidence", "vague forever", "no deadline", "only vibes", "only titles"),
        ("Environment design reduces friction for good habits.", "design environment", "rely on will alone", "chaos desk best", "phone always", "no cues"),
        ("Weekly reviews close open loops and reset priorities.", "weekly review", "never review", "daily only chaos", "yearly only", "no priorities"),
        ("Interleaved practice builds discrimination skill.", "interleave", "block forever only", "no practice", "only theory", "only exams"),
        ("Pomodoro-style pulses manage attention energy.", "timed pulses", "infinite sessions", "no rest", "only 8h grind", "skip breaks always"),
        ("Note systems fail without retrieval schedules.", "retrieval schedules", "dump only", "folder infinity", "search as memory", "no NEXT"),
        ("Struggle indicators are data, not identity.", "struggle = data", "struggle = failure identity", "never struggle", "hide struggle", "quit on struggle"),
        ("Secondary sources need primary checks for hard claims.", "check primary", "trust summaries always", "only TikTok", "only headlines", "no sources"),
        ("Study plans should include buffer for life friction.", "include buffer", "100% packed", "no slack", "ideal only", "zero buffer"),
        ("Exam conditions should be simulated before the real day.", "simulate exams", "surprise only", "no practice tests", "only notes", "only lectures"),
        ("Sleep and nutrition are study infrastructure.", "infra not optional", "optional extras", "coffee replaces sleep", "skip food", "only nootropics"),
        ("Teach a peer weekly to force clarity.", "teach weekly", "never teach", "only solo", "only consume", "only compete"),
        ("Log one insight per session as proof of engagement.", "log insight", "no log", "only time tracked", "only pages", "only mood"),
    ],
    "exam": [
        ("Exams test retrieval under constraints of time and format.", "retrieval under constraint", "unlimited time always", "open life only", "no format", "only attendance"),
        ("Blueprint the exam topics by weight before studying.", "weight topics", "equal everything", "random", "only favorites", "skip blueprint"),
        ("Past papers reveal patterns and traps.", "patterns from past", "ignore past", "only new", "only theory", "only rumors"),
        ("Error logs convert mistakes into curriculum.", "error log curriculum", "hide mistakes", "delete wrongs", "only score", "only rank"),
        ("Time allocation per section prevents perfect first-half fails.", "allocate time", "spend all early", "no watch", "skip hard forever", "only easy"),
        ("Multiple-choice needs elimination discipline.", "eliminate wrongs", "guess always first", "read options first only", "no stem", "change all answers always"),
        ("Essays need thesis, evidence, structure, conclusion.", "structure essays", "stream consciousness", "quotes only", "no thesis", "only length"),
        ("Oral exams reward clear structure and calm pace.", "structure + calm", "speed dump", "silence only", "read notes whole time", "only jokes"),
        ("Anxiety management is part of exam skill.", "manage anxiety", "ignore body", "caffeine megadose only", "no sleep before", "catastrophize"),
        ("Open-book exams still need retrieval fluency.", "fluency still needed", "search replaces knowledge", "no prep", "bookmark chaos", "only Ctrl+F"),
        ("Partial credit strategies show method even if final wrong.", "show method", "blank if unsure", "erase work", "only final", "no steps"),
        ("Post-exam review within 24h captures fading details.", "review in 24h", "never look back", "wait months", "only celebrate", "only mourn"),
        ("Spaced mock exams beat one final cram.", "spaced mocks", "one cram", "no mocks", "only night before", "only summaries"),
        ("Identity threat reduces performance — reframe as skill practice.", "reframe identity threat", "tie score to worth", "panic", "compare endlessly", "quit"),
        ("GREEN: run a timed mock and log errors by type.", "timed mock + error types", "untimed skim", "no log", "only score", "only rank"),
    ],
    "career": [
        ("Craft compounds when feedback loops are tight.", "tight feedback", "no feedback", "yearly only", "vanity only", "silence"),
        ("Portfolio proof beats resume claims alone.", "portfolio proof", "claims only", "titles only", "years only", "buzzwords"),
        ("T-shaped skills: depth + collaborative breadth.", "depth + breadth", "only depth forever", "only shallow", "no collab", "only tools"),
        ("Mentors accelerate via specific asks with work attached.", "specific ask + work", "vague coffee", "no ask", "only network spam", "only status"),
        ("Reputation is slow to build, fast to burn.", "slow build fast burn", "instant forever", "ignore ethics", "burn freely", "no reputation"),
        ("Negotiation starts with BATNA clarity.", "know BATNA", "no alternative", "accept first", "bluff always", "walk never"),
        ("Public teaching is career capital and service.", "teach publicly", "hide knowledge", "only private", "only gatekeep", "only sell"),
        ("Domain maps guide what to learn next for leverage.", "map next leverage", "random courses", "trend chase only", "certificate spam", "no plan"),
        ("Ship small artifacts weekly to avoid invisible work.", "ship weekly", "invisible grind", "never ship", "only plans", "only meetings"),
        ("Ethics are non-optional infrastructure of craft.", "ethics infra", "optional PR", "win at all costs", "hide harm", "no code of practice"),
        ("Networks of mutual aid beat pure extraction.", "mutual aid", "extract only", "transaction only", "never give", "only take"),
        ("Burnout signals system design failure, not weak character alone.", "system design signal", "only weak will", "push harder always", "ignore body", "shame"),
        ("Career arcs can be multi-season; rest is strategy.", "multi-season + rest", "linear forever grind", "no seasons", "only youth", "only one path"),
        ("Document decisions for future-you and teams.", "document decisions", "tribal only", "chat amnesia", "no ADR", "oral only forever"),
        ("GREEN: publish one proof of craft this month.", "publish proof", "private forever", "only talk", "only plan", "only network"),
    ],
    "gurukula": [
        ("Guru-kuḷa is living near the teacher for immersive formation.", "immersive near teacher", "remote only always", "no teacher", "only books", "only exams"),
        ("Service (sevā) in learning builds character and access.", "service builds", "service is slavery only", "no service", "only fees", "only status"),
        ("Oral lineage protects transmission fidelity.", "oral fidelity", "write once forget", "no lineage", "only PDFs", "only AI"),
        ("Questions are the currency of the student.", "questions = currency", "silence always", "only answers", "never ask", "only agree"),
        ("The teacher models method more than trivia.", "model method", "dump trivia only", "no model", "only tests", "only grades"),
        ("Peer learning multiplies teacher bandwidth.", "peers multiply", "solo only", "no peers", "compete destroy", "hide notes"),
        ("Discipline without cruelty is the container of growth.", "firm not cruel", "cruel always", "no discipline", "chaos", "fear only"),
        ("Leaving the kuḷa means carrying method into the world.", "carry method out", "forget method", "stay forever only", "never teach", "only consume"),
        ("Modern remote mentorship can keep kuḷa spirit with artifacts.", "remote + artifacts", "impossible remotely", "only in-person", "no artifacts", "only chat"),
        ("Gratitude rituals reinforce reciprocal bonds.", "gratitude bonds", "transaction only", "no thanks", "entitlement", "ghosting"),
        ("Wrong questions still train courage to inquire.", "courage to inquire", "only perfect Qs", "never wrong", "silence", "only answers"),
        ("Daily practice under observation accelerates correction.", "observed practice", "hidden practice only", "no practice", "yearly demo", "only theory"),
        ("The best students become teachers of someone.", "students→teachers", "hoard forever", "never teach", "only compete", "only consume"),
        ("Lineage is method continuity, not brand worship.", "method continuity", "brand worship", "no method", "only fame", "only titles"),
        ("GREEN: mentor one person with work-attached feedback.", "mentor with work", "vague advice", "no mentor", "only lecture", "only ignore"),
    ],
    "trouble": [
        ("Stuck is position; redesign the approach.", "redesign approach", "quit identity", "same forever", "blame only", "freeze"),
        ("Debug with bisect: isolate the first failure point.", "isolate first failure", "change all at once", "no isolate", "guess randomly", "restart universe"),
        ("Rubber-duck explaining surfaces hidden assumptions.", "explain assumptions", "silent struggle only", "no explain", "only code", "only hope"),
        ("Rest is a tool when cognitive depletion is the bug.", "rest as tool", "never rest", "only grind", "shame rest", "coffee only"),
        ("Scope cut is a valid unstick move.", "cut scope", "expand forever", "never cut", "only features", "only polish"),
        ("Ask for help with a minimal reproducible example.", "minimal repro", "vague cry", "no context", "whole dump", "no attempt"),
        ("Emotional labeling reduces flood intensity.", "label emotion", "suppress only", "explode only", "deny", "ruminate forever"),
        ("Energy audit: sleep, food, move, focus substrate.", "audit substrate", "ignore body", "only mind", "only tools", "only deadlines"),
        ("Walk when stuck — motion unsticks thought.", "walk to unstick", "sit forever", "scroll more", "sleep on desk", "rage quit"),
        ("Write the problem as a five-member syllogism.", "Nyāya the problem", "vent only", "no structure", "blame", "catastrophize"),
        ("Version control is a time machine for mistakes.", "time machine VCS", "no versions", "overwrite always", "email zip only", "memory only"),
        ("Constraints list: what must stay true while solving.", "list constraints", "ignore constraints", "violate freely", "no list", "move goalposts silently"),
        ("Celebrate partial unsticks to reinforce learning.", "celebrate partial", "only final", "never celebrate", "shame partial", "all or nothing"),
        ("Troubleshoot environments before blaming self forever.", "check environment", "always self-blame", "always other-blame", "no check", "reinstall life"),
        ("GREEN: log one unstuck story with method used.", "log unstuck method", "forget", "no log", "only complain", "only hide"),
    ],
    "path": [
        ("Paths are multi-season arcs, not single sprints.", "multi-season arcs", "one sprint life", "no seasons", "only youth", "only luck"),
        ("Values filter which opportunities to accept.", "values filter", "take all", "no values", "FOMO only", "status only"),
        ("Identity can be chosen practices, not fixed labels.", "practices identity", "fixed labels forever", "no identity work", "only brands", "only roles"),
        ("North-star metrics keep daily noise in place.", "north-star", "no star", "100 metrics", "vanity only", "mood only"),
        ("Quarterly themes beat endless open tabs of goals.", "quarterly themes", "infinite goals", "no themes", "daily new life", "no focus"),
        ("Sabbaticals and rest are strategic, not failure.", "rest strategic", "rest = failure", "never rest", "only burnout", "only grind"),
        ("Companions on the path reduce isolation risk.", "companions", "solo forever mandatory", "no peers", "only competition", "only isolation"),
        ("Rituals mark transitions and encode values.", "rituals mark transitions", "no rituals", "only chaos", "only parties", "only silence"),
        ("Death awareness clarifies what not to waste time on.", "memento clarity", "ignore finitude", "infinite tomorrow", "only YOLO harm", "no priorities"),
        ("Service embeds skill in something larger than ego.", "skill + service", "ego only", "no service", "only status", "only money"),
        ("Course corrections are normal; denial is costly.", "correct course", "never correct", "deny always", "double down wrong", "shame correction"),
        ("Write a letter from future-you as path design.", "future letter", "no vision", "only past", "only others' scripts", "no design"),
        ("Public commitments raise the cost of silent quit.", "public commit", "secret always", "no commit", "vague hope", "no account"),
        ("The path includes teaching as a phase of mastery.", "teach phase", "never teach", "only learn forever", "only consume", "only test"),
        ("GREEN: write a 90-day path with proofs, not wishes.", "90-day proofs", "wishes only", "no path", "infinite plan", "no dates"),
    ],
}

for mid, rows in MORE2.items():
    _pack_from_tuples(mid, rows)

# Remaining existing 17-40 — condensed generation via topic seeds
SEEDS_17_40 = {
    "language": ["SOV vs SVO", "minimal pairs", "shadowing", "bidirectional cards", "polyglot OS", "sandhi", "tones", "script drills", "comprehensible input", "sentence mining", "90-day arc", "ergative past", "root-and-pattern", "identity isolation", "speak day 1"],
    "math-deep": ["quadratic derivation", "Kerala π series", "induction", "levels of understanding", "proof vs computation", "limits", "series", "combinatorics", "probability axioms", "linear algebra map", "dimensional analysis", "counterexamples", "estimation", "functions", "geometry proofs"],
    "ai-eng": ["eval harness", "empty retrieval", "agent primitives", "pramāṇas as evals", "RAG grounding", "tool privilege", "prompt injection", "golden set", "semantic scoring", "observability", "latency vs quality", "hallucination checks", "model limits", "agent loop", "trace logs"],
    "uc-eng": ["SIP call flow", "one-way audio tree", "QoS EF/AF31/BE", "CUBE as bouncer", "CUCM role", "E911/RedSky", "RTP media", "dial plan", "codec mismatch", "NAT issues", "TLS/SRTP", "call must connect", "trace analysis", "failover", "session border"],
    "health": ["sleep substrate", "tristambha pillars", "breathwork before study", "walk when stuck", "food regularity", "movement snacks", "circadian light", "hydration", "stress recovery", "focus body link", "screen hygiene", "posture", "illness rest", "health logs", "sustainable load"],
    "time": ["time audit", "ideal week blocks", "2-minute rule", "weekly review", "deep vs shallow", "calendar truth", "buffer time", "single tasking", "theme days", "deadline realism", "energy matching", "say no", "batching", "open loops", "Sunday ritual"],
    "money": ["50/30/20", "auto-save", "12-month arc", "free seed plant", "runway", "debt interest", "invest basics", "avoid lifestyle creep", "unit economics self", "emergency fund", "give buffer", "track cashflow", "skill as asset", "compound interest", "scam hygiene"],
    "leadership": ["servant leader", "5-member decision", "ask before opine", "teach session", "clear intent", "psychological safety", "feedback loops", "own outcomes", "delegate with context", "ethics line", "vision + ops", "credit sharing", "crisis calm", "listening first", "mission over ego"],
    "philosophy": ["personal pramāṇas", "live unanswered Q", "why learn", "meaning over status", "ethics first", "cosmos learning itself", "skepticism + care", "identity as practice", "death awareness", "freedom + duty", "dialogue over dogma", "wonder", "clarity of terms", "action test of belief", "mystery remains"],
    "tools": ["capture organize recall", "NEXT dates", "AI with verify", "tool map", "offline first", "version control", "search as prosthetic", "automation ethics", "backup", "single source truth", "friction design", "notes as graph", "calendar tools", "measurement tools", "teach tool map"],
    "history": ["idea ladder", "borrow methods", "era context", "primary sources", "contingency", "transmission chains", "tech + culture", "forgotten innovators", "historiography caution", "timeline maps", "comparative history", "material culture", "oral vs written", "presentism bias", "place your rung"],
    "art": ["expressive artifact", "hard 4 bars", "art grammar", "form + feeling", "practice constraints", "critique kind", "tradition remix", "finish pieces", "show work", "rhythm", "negative space", "audience", "tools craft", "iterate", "teach art grammar"],
    "speak": ["promise proof path", "record 2 min", "cut vagueness", "presence", "breath pace", "story structure", "audience first", "one idea", "rehearse aloud", "handle Q&A", "visuals sparingly", "silence power", "body language", "open strong", "teach speaking grammar"],
    "mystery": ["better questions", "90-day proof pack", "transmission duty", "loop closes opens", "unknown remains", "humility", "re-read mandala 01", "evidence register", "portfolio", "mentor chain", "mystery question yearly", "tat tvam asi", "plant seed", "stay unstuck", "protect ethics"],
    "writing": ["250 words daily", "compress 20%", "publish teaching", "9WAYS forge", "clarity", "structure", "edit pass", "reader first", "concrete nouns", "active voice", "kill darlings", "deadline", "notes to drafts", "feedback", "ship imperfect"],
    "negotiation": ["interests not positions", "BATNA", "options", "objective criteria", "Nyāya persuasion", "listen first", "package deals", "anchor awareness", "fair process", "walk away power", "relationship capital", "prepare on paper", "silence", "trade variables", "pramāṇa table"],
    "systems": ["components flows feedback", "protocol sūtra", "6-step debug", "resilience", "bottlenecks", "queues", "feedback delay", "emergence", "boundary", "failure modes", "redundancy", "observability", "interfaces", "leverage points", "map a system"],
    "security": ["passphrases", "2FA", "backups", "least privilege", "primary sources verify", "phishing", "updates", "device lock", "secret hygiene", "public wifi caution", "encryption basics", "account recovery", "social engineering", "logs", "baseline hygiene"],
    "environment": ["environment audit", "habit stack 2 min", "remove digital friction", "cues", "defaults", "friction for bad", "context dependent", "workspace", "phone distance", "light", "noise", "social env", "temptation bundling", "design > will", "teach env grammar"],
    "decisions": ["decision card", "bias naming", "options criteria", "reversible vs not", "info value", "satisficing", "pre-mortem", "timebox decide", "document why", "sleep on big", "stakeholder map", "ethics check", "expected value", "kill sunk cost", "teach decision grammar"],
    "story": ["3-sentence story", "story grammar", "character change", "stakes", "concrete scene", "arc", "teach via story", "memory glue", "audience", "truthful enough", "metaphor", "pacing", "ending earn", "oral first", "tell someone today"],
    "mentor": ["specific question + work", "guru-kuḷa method", "log exchange", "mentor grammar", "feedback kind firm", "boundaries", "reciprocity", "observe practice", "stretch goals", "safe fail", "model method", "network intro ethics", "time respect", "graduate mentee", "ask mentor"],
    "prod-os": ["6-module OS", "daily rhythm 3 days", "Sunday review", "capture plan do review", "Śikṣā loop", "goals wire", "inbox zero-ish", "priority 3", "energy calendar", "artifact log", "health module", "learn module", "serve module", "rest module", "teach OS"],
    "capstone": ["choose capstone", "start this quarter", "teach method", "return mandala 01", "legacy loop", "free campus shape", "metrics", "learners reached", "oath renewed", "plant not sell", "protect", "remain mystery", "build for use", "bridge ancient modern", "remember tradition"],
}

def seeds_to_facts(seeds: list[str], domain: str) -> list[dict]:
    out = []
    for i, s in enumerate(seeds):
        out.append({
            "c": f"In the {domain} mandala, mastery includes working knowledge of: {s}.",
            "ok": s,
            "w": [
                f"ignoring {s} completely",
                f"only memorizing the phrase '{s}' without practice",
                f"outsourcing {s} forever with no verification",
                f"treating {s} as optional decoration",
            ][:3],
            "tip": f"{s} is a load-bearing idea in {domain}; practice it, don't only name it.",
        })
        # second fact angle
        out.append({
            "c": f"A GREEN-style proof for '{s}' is explaining it from memory and applying it once.",
            "ok": "explain from memory + apply once",
            "w": ["bookmark a page about it", "like a social post", "download a PDF", "skip practice"],
            "tip": f"Retrieval + application seal {s}.",
        })
    return out

for mid, seeds in SEEDS_17_40.items():
    add(mid, seeds_to_facts(seeds, mid))

# New mandalas 41–72 topic facts (will also appear in gen3)
NEW_MANDALAS = {
    "uncertainty": "Decision-Making Under Uncertainty",
    "negotiate-deep": "Negotiation Mastery Deep Dive",
    "presence": "Public Speaking & Presence",
    "sci-think": "Scientific Thinking",
    "music-math": "Music & Mathematics",
    "pingala": "Poetry & Meter (Piṅgala)",
    "ayur-rhythm": "Ayurvedic Daily Rhythm",
    "pranayama": "Breath & Pranayama Science",
    "cyber-hygiene": "Cybersecurity Hygiene",
    "systems-deep": "Systems Thinking Deep",
    "second-brain": "Second Brain / Note Systems",
    "deep-work": "Focus & Deep Work",
    "habit-eng": "Habit Engineering",
    "read-deep": "Reading Fast & Deep",
    "script-hist": "Writing Systems & Script History",
    "vedic-math": "Numbers & Vedic Math",
    "astro-cal": "Astronomy & Calendars",
    "nyaya-debate": "Logic & Debate (Nyāya) Applied",
    "dharma-ethics": "Ethics & Dharma",
    "craft-careers": "Careers & Craft",
    "cities": "Cities & Civilization",
    "agri-food": "Agriculture & Food",
    "textiles": "Textiles & Materials",
    "trade": "Trade & Commerce",
    "medicine-time": "Medicine Through Time",
    "psych-learn": "Psychology of Learning",
    "emotion-res": "Emotion & Resilience",
    "community": "Community & Leadership",
    "chaturanga": "Games & Strategy (Chaturanga)",
    "time-mastery": "Time Management Mastery",
    "wealth": "Money & Wealth Systems",
    "law-justice": "Law & Justice",
    "space-exp": "Space & Exploration",
    "oceans": "Oceans & Navigation",
    "ai-ancient": "AI & Ancient Thought",
}

NEW_SEEDS = {
    "uncertainty": ["expected value", "optionality", "reversible decisions", "base rates", "confidence calibration", "scenario planning", "pre-mortem", "information value", "fat tails", "satisficing", "regret minimization", "second-order effects", "stop rules", "portfolio of bets", "uncertainty journal"],
    "negotiate-deep": ["BATNA", "ZOPA", "interests map", "anchoring", "concession strategy", "multi-issue packages", "fair process", "relationship capital", "cultural styles", "deadlock breakers", "ethics lines", "silence", "preparation memo", "post-deal review", "walk-away clarity"],
    "presence": ["stance", "breath before speech", "eye contact arcs", "vocal variety", "pause power", "open body", "audience scan", "story open", "one idea", "recover from blank", "Q&A frame", "stage geography", "authentic energy", "rehearsal levels", "record review"],
    "sci-think": ["hypothesis", "falsifiability", "controls", "replication", "measurement error", "correlation≠causation", "peer review spirit", "null results", "models vs territory", "Bayesian update", "instrument limits", "sampling bias", "open methods", "theory load", "experiment design"],
    "music-math": ["ratio intervals", "octave 2:1", "fifth 3:2", "rhythm cycles", "meter", "harmonics", "scales as sets", "permutation patterns", "time signatures", "polyrhythm", "tuning systems", "form (ABA)", "dynamics", "practice loops", "ear training"],
    "pingala": ["mātrā", "guru laghu", "binary patterns", "chandas", "meru prastāra", "Fibonacci link", "meter scan", "oral rhythm", "poetic feet", "combinatorics of verse", "recitation fidelity", "stress timing", "syllable weight", "composition drill", "analyze a śloka"],
    "ayur-rhythm": ["dinacharya", "circadian align", "agni", "sleep window", "meal timing", "movement", "seasonal adjust", "sense hygiene", "oil/abhyanga idea", "mind satva", "overstimulation", "elimination", "wake light", "evening wind-down", "personalize cautiously"],
    "pranayama": ["nadi idea", "inhale exhale ratio", "gentle start", "box breath", "physiological sigh", "CO2 tolerance caution", "nose breathing", "posture", "before focus blocks", "not force", "medical caution", "count cycles", "recovery breath", "stress downshift", "log practice"],
    "cyber-hygiene": ["unique passphrases", "password manager", "2FA", "updates", "phishing drills", "least privilege", "backups 3-2-1", "device encryption", "app permissions", "public wifi VPN caution", "SIM swap awareness", "recovery codes", "social engineering", "secure delete sense", "incident plan"],
    "systems-deep": ["stocks flows", "feedback delays", "leverage points", "bottlenecks", "queues", "emergence", "resilience", "redundancy", "tight coupling risk", "observability", "boundary choice", "unintended consequences", "mental models", "system archetype", "intervention ethics"],
    "second-brain": ["capture inbox", "progressive summarize", "atomic notes", "links not folders only", "NEXT actions", "project vs area", "review cadence", "source hygiene", "tags sparingly", "search first design", "offline vault", "publish from notes", "anti-hoard", "templates", "weekly integrate"],
    "deep-work": ["time block", "shutdown ritual", "distract log", "depth metric", "shallow batch", "focus environment", "phone exile", "one project", "energy match", "ultradian rest", "deep work quota", "meetings starve", "async default", "focus score", "protect mornings"],
    "habit-eng": ["cue routine reward", "2-minute start", "habit stack", "environment design", "identity based", "track streaks carefully", "never miss twice", "friction for bad", "implementation intention", "habit contract", "social reinforcement", "keystone habit", "plateaus", "habit autopsy", "tiny wins"],
    "read-deep": ["purpose before page", "preview structure", "active margin", "question while read", "summarize sections", "speed vs depth modes", "primary sources", "argument map", "vocabulary capture", "reread hard parts", "teach excerpt", "anti-highlight spam", "reading queue", "close reading", "transfer notes"],
    "script-hist": ["abugida", "alphabet", "abjad", "logography", "Brahmi family", "Devanagari", "printing impact", "orthography", "direction of writing", "numerals history", "paleography basics", "script reform", "literacy access", "digital fonts offline", "copy a page by hand"],
    "vedic-math": ["mental arithmetic patterns", "complement methods", "digit sums", "speed with accuracy", "number sense", "place value play", "sutra spirit", "check digits", "estimation first", "fractions fluency", "percentage maps", "ratio tables", "error patterns", "teach a trick with proof", "practice set"],
    "astro-cal": ["lunar vs solar", "intercalation", "nakṣatra idea", "week origins", "time zones", "leap rules", "eclipse geometry", "local horizon", "season markers", "historical calendars", "UTC", "sidereal vs tropical", "observing log", "planet visibility", "festival astronomy"],
    "nyaya-debate": ["define terms", "burden of proof", "steelman", "fallacy catalog", "evidence hierarchy", "timebox turns", "charity principle", "clarify before refute", "example tests", "scope limits", "public reason", "notes of dispute", "closing summary", "respect person", "log argument structure"],
    "dharma-ethics": ["duty contexts", "ahiṃsā", "satya", "non-exploitation", "means matter", "role duties", "conflict of duties", "repair after harm", "privacy", "consent", "stewardship", "truthfulness limits", "courage", "compassion", "ethics case drill"],
    "craft-careers": ["deliberate practice", "apprenticeship", "portfolio", "standards of craft", "tool mastery", "client ethics", "pricing basics", "reputation", "peer critique", "specialization timing", "generalist seasons", "craft journal", "quality bar", "teach juniors", "sustainable pace"],
    "cities": ["urban layers", "infrastructure", "public space", "density tradeoffs", "transport networks", "water systems", "markets", "governance", "housing", "heritage", "resilience disasters", "informal economies", "walkability", "map a block", "citizen agency"],
    "agri-food": ["soil health", "seasons", "irrigation", "seed systems", "storage", "nutrition basics", "food waste", "supply chains", "local vs global", "fermentation", "protein diversity", "water footprint", "farmer knowledge", "cook as literacy", "grow one plant"],
    "textiles": ["fiber types", "spin weave knit", "dye chemistry basics", "handloom", "industrial mills", "care labels", "repair culture", "pattern geometry", "trade history", "material lifecycle", "thermal comfort", "synthetic vs natural", "cultural cloth", "make/mend", "observe weave"],
    "trade": ["comparative advantage", "trust mechanisms", "contracts", "currency", "credit", "logistics", "tariffs idea", "merchant networks", "risk pooling", "markets vs firms", "information asymmetry", "ethics of trade", "local exchange", "invoice basics", "map a supply chain"],
    "medicine-time": ["evidence tiers", "public health", "hygiene history", "vaccines idea", "antibiotics stewardship", "diagnostics", "placebo caution", "traditional systems respect+test", "epidemiology basics", "informed consent", "mental health", "first aid", "prevention", "medical literacy", "verify health claims"],
    "psych-learn": ["working memory limits", "cognitive load", "motivation types", "growth mindset careful", "transfer", "metacognition", "attention", "emotion & memory", "social learning", "spacing effect", "testing effect", "interleaving", "self-explanation", "goal orientation", "design a lesson"],
    "emotion-res": ["name emotions", "window of tolerance", "breath downshift", "cognitive reframe", "values action", "social support", "grief process", "anger signal", "anxiety as data", "recovery rituals", "boundaries", "self-compassion", "sleep & mood", "resilience practice", "journal trigger→response"],
    "community": ["shared purpose", "norms", "roles", "onboarding", "conflict repair", "rituals", "inclusion", "decision rights", "commons", "leadership rotation", "celebration", "accountability", "knowledge share", "safety", "host a small circle"],
    "chaturanga": ["board geometry", "piece roles", "tempo", "threat detection", "sacrifices", "endgame basics", "opening principles", "calculation depth", "pattern library", "opponent model", "time management game", "sportsmanship", "post-game review", "strategy vs tactics", "play + annotate"],
    "time-mastery": ["priority matrix", "time audit", "calendar as truth", "batching", "delegation", "saying no", "deep blocks", "buffer", "theme days", "energy, not only hours", "deadline realism", "interrupt protocol", "weekly plan", "shutdown", "measure what matters"],
    "wealth": ["income expense invest give", "compounding", "risk tolerance", "diversify", "emergency fund", "debt strategy", "human capital", "scams", "taxes awareness", "insurance basics", "long horizon", "lifestyle design", "share surplus", "track net worth simply", "teach one money rule"],
    "law-justice": ["rule of law", "rights duties", "due process", "evidence", "contracts", "property idea", "criminal vs civil", "access to justice", "ethics of lawyers", "constitutions idea", "dispute resolution", "restorative justice", "legal literacy", "read a short statute carefully", "case brief structure"],
    "space-exp": ["orbital basics", "escape velocity idea", "rockets staging", "satellites", "human factors", "remote sensing", "space law spirit", "planetary science", "risk culture", "ground systems", "comms delay", "exploration ethics", "STEM pipeline", "observe ISS pass", "mission design tradeoffs"],
    "oceans": ["currents", "winds", "navigation stars/compass", "charts", "tides", "buoyancy", "weather at sea", "ports", "trade routes history", "marine ecosystems", "safety", "dead reckoning", "GPS backup skills", "ocean literacy", "read a tide table"],
    "ai-ancient": ["sphoṭa↔latent", "Pāṇini↔grammar models", "Nyāya↔evals", "pramāṇa hierarchy", "oral fidelity↔checksums", "sūtra compression", "guru-kuḷa↔RLHF caution", "memory palace↔indexing", "debate↔alignment discourse", "dharma↔safety", "utsarga/apavāda↔defaults/exceptions", "tattva maps↔ontologies", "mnemonic loops↔training loops", "mystery remains", "human verification forever"],
}

for mid, title in NEW_MANDALAS.items():
    seeds = NEW_SEEDS[mid]
    add(mid, seeds_to_facts(seeds, title))

# Titles for section headers
TITLES = {
    "path": "The Path",
    "siksa": "Śikṣā Loop",
    "panini": "Pāṇini Method",
    "nyaya": "Nyāya Logic",
    "maps": "Domain Maps",
    "math": "Mathematics",
    "memory": "Memory Systems",
    "playbook": "Mastery Playbook",
    "ai": "AI-Assisted Learning",
    "cosmos": "Cosmos & Calendar",
    "study": "Study Systems",
    "exam": "Exam Mastery",
    "career": "Career Craft",
    "gurukula": "Guru-kuḷa",
    "trouble": "Unstuck",
    "path": "The Path",
    "language": "Language Mastery",
    "math-deep": "Deep Math",
    "ai-eng": "AI Engineering",
    "uc-eng": "UC / SIP Engineering",
    "health": "Health Substrate",
    "time": "Time & Attention",
    "money": "Money Basics",
    "leadership": "Leadership",
    "philosophy": "Philosophy",
    "tools": "Tool Map",
    "history": "History of Ideas",
    "art": "Art Grammar",
    "speak": "Speaking",
    "mystery": "The Mystery",
    "writing": "Writing Forge",
    "negotiation": "Negotiation",
    "systems": "Systems",
    "security": "Security",
    "environment": "Environment",
    "decisions": "Decisions",
    "story": "Story",
    "mentor": "Mentoring",
    "prod-os": "Production OS",
    "capstone": "Capstone",
}
TITLES.update(NEW_MANDALAS)


def stable_shuffle(options: list[str], key: str) -> list[str]:
    return sorted(options, key=lambda x: hashlib.md5(f"{key}:{x}".encode()).hexdigest())


def variants_for(mid: str, fi: int, fact: dict) -> list[dict]:
    """Generate 4–5 MCQ variants from one fact."""
    c, ok, wrongs, tip = fact["c"], fact["ok"], fact["w"][:3], fact["tip"]
    while len(wrongs) < 3:
        wrongs.append(f"unrelated distractor {len(wrongs)+1}")
    vs = []
    # 1 recall
    vs.append({
        "stem": f"According to Ardham Shastra ({mid}), which best captures: {c}",
        "ok": ok,
        "opts": [ok] + wrongs,
        "expl": tip,
        "kind": "recall",
    })
    # 2 which is true
    vs.append({
        "stem": f"Which statement is TRUE about this idea in mandala '{mid}'?",
        "ok": c,
        "opts": [c,
                 f"The opposite of this is always required: not ({ok}).",
                 f"This idea is decorative only and never practiced: {ok}.",
                 f"Experts forbid learners from touching: {ok}."],
        "expl": tip,
        "kind": "true-false-frame",
    })
    # 3 scenario
    vs.append({
        "stem": f"Scenario: You must demonstrate mastery related to '{ok}'. What is the best next action?",
        "ok": f"Retrieve '{ok}' from memory, apply it once, and log proof",
        "opts": [
            f"Retrieve '{ok}' from memory, apply it once, and log proof",
            "Only bookmark a page and move on",
            "Outsource entirely without verification",
            "Avoid practice until you feel 100% ready forever",
        ],
        "expl": f"GREEN-style proof: memory + action. {tip}",
        "kind": "scenario",
    })
    # 4 false identification
    vs.append({
        "stem": f"Which option is a COMMON MISTAKE regarding: {c}",
        "ok": wrongs[0],
        "opts": [wrongs[0], ok, f"Careful practice of {ok}", f"Teaching {ok} to a peer"],
        "expl": f"Avoid: {wrongs[0]}. Prefer: {ok}. {tip}",
        "kind": "mistake",
    })
    # 5 explain-why
    vs.append({
        "stem": f"Why does the campus emphasize '{ok}' within {mid}?",
        "ok": tip,
        "opts": [
            tip,
            "Because it is only for decoration and branding",
            "Because exams ban all practice of it",
            "Because offline-first campuses forbid learning it",
        ],
        "expl": tip,
        "kind": "why",
    })
    return vs


def render_question(n: int, mid: str, v: dict, salt: str) -> str:
    opts = list(v["opts"])
    # ensure 4 unique options
    seen = set()
    clean = []
    for o in opts:
        o = o.strip()
        if o not in seen:
            seen.add(o)
            clean.append(o)
    while len(clean) < 4:
        clean.append(f"None of the productive paths — distractor {len(clean)}")
    clean = clean[:4]
    if v["ok"] not in clean:
        clean[0] = v["ok"]
    ordered = stable_shuffle(clean, salt)
    letters = "ABCD"
    ans_letter = letters[ordered.index(v["ok"])]
    items = "\n".join(f"<li>{esc(o)}</li>" for o in ordered)
    return f"""
<details class="qbank-item" data-mid="{esc(mid)}" data-kind="{esc(v['kind'])}">
<summary><b>Q{n}.</b> [{esc(mid)} · {esc(v['kind'])}] {esc(v['stem'])}</summary>
<div class="card indigo">
<ol type="A">
{items}
</ol>
<p><strong>Answer:</strong> {ans_letter} — <em>{esc(v['ok'])}</em></p>
<p><strong>Why:</strong> {esc(v['expl'])}</p>
<p class="hint">Offline drill: cover the answer, speak your choice, then open. Review with SM-2: 1h → 1d → 7d → 30d.</p>
</div>
</details>"""


def build_html() -> tuple[str, int]:
    parts = []
    parts.append(f'''
<!-- PACK B · MASTERY QUESTION BANK -->
<section id="{SECTION_ID}" data-m="qbank">
  <div class="kicker">Mastery Lab · Question Bank</div>
  <h2>Mastery Question Bank — Procedural Drill Field</h2>
  <p>Fifteen-hundred-plus multiple-choice questions generated from mandala facts. Each item has four options, a correct answer, and a one-line explanation. Use <code>&lt;details&gt;</code> as self-check cards. Offline-first. No CDN. Brand: CYPHER0X9 · MIT.</p>
  <div class="card emerald">
    <h3>How to use this bank</h3>
    <ul>
      <li><strong>Recall first:</strong> answer aloud before opening.</li>
      <li><strong>Variant spread:</strong> recall, scenario, mistake-spotting, why.</li>
      <li><strong>GREEN link:</strong> after a set, teach one idea to a human.</li>
      <li><strong>Spacing:</strong> SM-2 style intervals on missed items.</li>
    </ul>
  </div>
''')
    n = 0
    for mid, facts in FACTS.items():
        title = TITLES.get(mid, mid)
        parts.append(f'''
  <div class="card violet">
    <h3>Question set · {esc(title)} <span class="sanskrit">({esc(mid)})</span></h3>
    <p>Derived from embedded facts in this mandala family. 4–5 variants per fact.</p>
  </div>
''')
        for fi, fact in enumerate(facts):
            for vi, v in enumerate(variants_for(mid, fi, fact)):
                n += 1
                salt = f"{mid}:{fi}:{vi}:{n}"
                parts.append(render_question(n, mid, v, salt))
                # density booster: mini true/false echo every 3rd
                if n % 3 == 0:
                    n += 1
                    tf_ok = "True"
                    stem = f"True or False: {fact['c']}"
                    v2 = {
                        "stem": stem,
                        "ok": tf_ok,
                        "opts": ["True", "False", "Neither — undefined", "Only true on exam day"],
                        "expl": fact["tip"],
                        "kind": "tf",
                    }
                    # randomly make some False
                    if hashlib.md5(salt.encode()).hexdigest()[0] in "0123":
                        v2 = {
                            "stem": f"True or False: The campus teaches that you should ignore '{fact['ok']}' forever.",
                            "ok": "False",
                            "opts": ["False", "True", "Neither — undefined", "Only true on exam day"],
                            "expl": f"Do not ignore it. {fact['tip']}",
                            "kind": "tf",
                        }
                    parts.append(render_question(n, mid, v2, salt + ":tf"))

    parts.append(f'''
  <div class="green"><b>GREEN gate · Question Bank:</b> Complete any 25 questions from memory across 3 mandalas, log misses, re-drill misses after 1 hour, and teach one corrected idea to a person. Total items in this bank: {n}+.</div>
</section>
''')
    return "\n".join(parts), n


def main() -> None:
    html, n = build_html()
    txt = CAMPUS.read_text(encoding="utf-8")
    if f'id="{SECTION_ID}"' in txt:
        print(f"SKIP: {SECTION_ID} already present · bank would have {n} items · {len(html)} chars")
        return
    if MARKER not in txt:
        print("MARKER NOT FOUND — aborting")
        raise SystemExit(1)
    txt = txt.replace(MARKER, html + "\n" + MARKER, 1)
    CAMPUS.write_text(txt, encoding="utf-8")
    print(f"INJECTED qbank · {n} questions · {len(html)} chars · file now {CAMPUS.stat().st_size} bytes")


if __name__ == "__main__":
    main()
