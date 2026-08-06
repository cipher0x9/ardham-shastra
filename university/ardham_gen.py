#!/usr/bin/env python3
"""Ardham Shastra v3 generator — dense mandala packs.
Appends deep content sections to the campus before </main>.
Usage: python3 ardham_gen.py  -> prints HTML fragment (redirect/append)
"""
from pathlib import Path

# Each mandala: (id, kicker_title, h2_title, intro, blocks[])
# blocks are raw HTML strings.

MANDALAS = []

def m(mid, kicker, title, intro, blocks):
    MANDALAS.append((mid, kicker, title, intro, blocks))

# ---------------------------------------------------------------- 17
m("language", "Mandala 17", "Language Mastery — The 9-Way Polyglot Engine",
"""Language is the purest demonstration of the Pāṇini method: a finite grammar generating infinite sentences. Master one language and you have mastered the method; master several and the method becomes obvious.""",
[
"""<div class="card indigo"><h3>The polyglot OS — 9 languages at once</h3>
<p>You can run multiple languages as separate apps on one brain-OS. The trick is <strong>identity isolation + shared grammar awareness</strong>: each language gets its own sound-space, its own sentence-pattern, its own culture — but you deliberately notice the shared skeleton underneath.</p>
<div class="table-wrap"><table>
<tr><th>Language</th><th>Script</th><th>Core sentence pattern</th><th>Special feature</th><th>Difficulty for EN speaker</th></tr>
<tr><td>Telugu (తెలుగు)</td><td>Brahmic</td><td>SOV (Subject-Object-Verb)</td><td>Pathel harmony, agglutinative suffixes, double consonants</td><td>Hard (script+grammar)</td></tr>
<tr><td>Sanskrit (संस्कृतम्)</td><td>Devanagari</td><td>SOV, free order</td><td>8 cases, 3 numbers, 10 verb classes, dual</td><td>Hard but logical</td></tr>
<tr><td>Hindi (हिन्दी)</td><td>Devanagari</td><td>SOV</td><td>Ergative past, gender</td><td>Medium</td></tr>
<tr><td>Tamil (தமிழ்)</td><td>Brahmic</td><td>SOV</td><td>Ancient continuous literature, sandhi</td><td>Hard</td></tr>
<tr><td>Spanish (español)</td><td>Latin</td><td>SVO</td><td>Subjunctive, 2 verbs for 'to be'</td><td>Easy</td></tr>
<tr><td>English</td><td>Latin</td><td>SVO</td><td>Massive vocab, irregular verbs, phrasal verbs</td><td>Native</td></tr>
<tr><td>Mandarin (普通话)</td><td>Hanzi</td><td>SVO</td><td>Tones (4+neutral), classifier system</td><td>Hard (tone+script)</td></tr>
<tr><td>Japanese (日本語)</td><td>Kana+Kanji</td><td>SOV</td><td>3 scripts, politeness levels, particles</td><td>Hard</td></tr>
<tr><td>Arabic (العربية)</td><td>Abjad</td><td>VSO</td><td>Root-and-pattern morphology (exactly like Pāṇini!)</td><td>Hard</td></tr>
</table></div>
<p><strong>The meta-insight:</strong> Arabic's root system (k-t-b → kataba, kitāb, maktab, kātib…) is a living Pāṇini grammar. Sanskrit's 10 verb classes are a grammar of every possible verb. Learning one of these gives you the skeleton of all.</p></div>""",
"""<div class="card emerald"><h3>The 90-day language arc (Śikṣā applied)</h3>
<div class="table-wrap"><table>
<tr><th>Week</th><th>Focus</th><th>Daily practice (45 min)</th><th>Proof</th></tr>
<tr><td>1</td><td>Sound map + script</td><td>15 min sounds (minimal pairs), 30 min script drills</td><td>Read all pathels/cons aloud</td></tr>
<tr><td>2</td><td>Core pattern</td><td>10 sentences pattern-drilled, 10 new words</td><td>50-word active vocab</td></tr>
<tr><td>3</td><td>Present tense</td><td>20 sentences with verbs, speak-aloud shadowing</td><td>5 recordings</td></tr>
<tr><td>4</td><td>Questions + negation</td><td>Dialogues, ask/answer 10 Qs</td><td>1 real conversation</td></tr>
<tr><td>5</td><td>Past tense</td><td>Tell your day in past tense</td><td>1-min monologue</td></tr>
<tr><td>6</td><td>Future + modal</td><td>Plans, promises, polite requests</td><td>Written email/msg</td></tr>
<tr><td>7</td><td>Numbers, time, money</td><td>Shopping, dates, prices</td><td>Role-play</td></tr>
<tr><td>8</td><td>Directions + travel</td><td>Survival scenarios</td><td>Simulated trip</td></tr>
<tr><td>9</td><td>Feelings + opinions</td><td>I like/hate/believe…</td><td>3 opinions spoken</td></tr>
<tr><td>10</td><td>Connectives</td><td>But, because, although, if</td><td>Complex sentences</td></tr>
<tr><td>11</td><td>Story telling</td><td>Retell a short story</td><td>2-min story recorded</td></tr>
<tr><td>12</td><td>Free conversation</td><td>30 min with native/partner</td><td>1 real conversation</td></tr>
</table></div></div>""",
"""<div class="card sky"><h3>Minimal-pair drills (the phonetic firewall)</h3>
<p>Most pronunciation problems come from not <em>hearing</em> the difference first. Drill minimal pairs — words that differ by one sound:</p>
<div class="table-wrap"><table>
<tr><th>Language</th><th>Pair</th><th>Meaning difference</th></tr>
<tr><td>Mandarin</td><td>mā / mà</td><td>mother / scold (tone)</td></tr>
<tr><td>Japanese</td><td>hashi / hashi</td><td>chopsticks / bridge (pitch accent)</td></tr>
<tr><td>Spanish</td><td>pero / perro</td><td>but / dog (rolled r)</td></tr>
<tr><td>Arabic</td><td>qalb / kalb</td><td>heart / dog (emphatic q)</td></tr>
<tr><td>Telugu</td><td>kālu / kāḷu</td><td>leg / time (retroflex)</td></tr>
<tr><td>Hindi</td><td>phūl / phūl</td><td>flower / fruit (aspiration)</td></tr>
</table></div>
<p><strong>Drill:</strong> 5 pairs × 10 reps daily until you can hear + produce the difference blind. This is the Vedic oral-fidelity method for modern learners.</p></div>""",
"""<div class="card violet"><h3>The memory-card deck for words (SM-2 in language)</h3>
<div class="flow">FRONT:  "to run" (Telugu)          BACK:  పరుగెత్తు (parugettu)
FRONT:  పరుగెత్తు (parugettu)        BACK:  "to run"
FRONT:  Sentence: "I run daily"      BACK:  నేను ప్రతి రోజు పరుగెత్తుతాను
NEXT: review 1h → 24h → 7d → 30d → 90d</div>
<p>Make cards BIDIRECTIONAL (target→native AND native→target). The target→native direction is harder and more valuable — that's the retrieval that builds fluency. 20 new cards/day = 600/month = 7,200/year. That's conversational.</p></div>""",
"""<div class="card coral"><h3>Shadowing + immersion (the guru-kuḷa move)</h3>
<ul>
<li><strong>Shadowing:</strong> play a native audio, repeat 0.5s behind, matching intonation exactly. 10 min daily. This is pada-pāṭha for modern ears.</li>
<li><strong>Comprehensible input:</strong> watch/listen at 80-90% comprehension; level up when it feels easy.</li>
<li><strong>Sentence mining:</strong> collect 5 gold sentences daily; internalize them fully.</li>
<li><strong>Speak from day 1</strong> — even alone, out loud. The mouth learns what the ear hears.</li>
<li><strong>Language partner:</strong> exchange 15 min daily via voice (2026: AI voice partners make this free and 24/7).</li>
</ul></div>""",
"""<div class="card indigo"><h3>The grammar table method (Pāṇini per language)</h3>
<p>For ANY language, build this one-page grammar map in week 2 — it's the utsarga layer:</p>
<div class="table-wrap"><table>
<tr><th>Component</th><th>Question it answers</th><th>Example (EN)</th></tr>
<tr><td>Sound system</td><td>What sounds exist?</td><td>24 consonants, 20 pathels</td></tr>
<tr><td>Word order</td><td>Where do S, V, O go?</td><td>SVO</td></tr>
<tr><td>Nouns</td><td>How do case/plural work?</td><td>s/es plural; 's possessive</td></tr>
<tr><td>Pronouns</td><td>Who/whom/whose?</td><td>I/me/my/mine</td></tr>
<tr><td>Verbs</td><td>How do tense/person work?</td><td>run/ran/running; -s for 3rd sg</td></tr>
<tr><td>Adjectives</td><td>Where do they go? Do they agree?</td><td>before noun; no agreement in EN</td></tr>
<tr><td>Negation</td><td>How do you say no?</td><td>not, no, never, un-</td></tr>
<tr><td>Questions</td><td>How do you ask?</td><td>inversion, wh-words</td></tr>
<tr><td>Connectives</td><td>How do you join ideas?</td><td>and, but, because, if</td></tr>
<tr><td>Politeness</td><td>How do levels of respect work?</td><td>please, could, would</td></tr>
</table></div>
<p>Fill this table for your target language. That's 80% of the grammar in one page — the exceptions (apavāda) come later, one at a time.</p></div>""",
"""<div class="green"><b>GREEN gate 17:</b> Build the one-page grammar map for your target language. Create 20 bidirectional word cards. Record yourself shadowing a 30s native clip. Teach the SOV vs SVO insight to someone.</div>""",
])

# ---------------------------------------------------------------- 18
m("math-deep", "Mandala 18", "Mathematics Deep — Derive, Don't Memorize",
"""Mathematics is the purest grammar: a few axioms generate infinite theorems. The Jñāna tradition's move — play, derive, verify — is exactly how mathematicians actually work.""",
[
"""<div class="card indigo"><h3>The hierarchy of understanding (what 'knowing math' means)</h3>
<div class="table-wrap"><table>
<tr><th>Level</th><th>What you can do</th><th>How to reach it</th></tr>
<tr><td>0. Recognize</td><td>You've seen the formula before</td><td>Read once</td></tr>
<tr><td>1. Recall</td><td>You can write it from memory</td><td>Flashcard, 24h review</td></tr>
<tr><td>2. Apply</td><td>You solve standard problems</td><td>Drill with feedback</td></tr>
<tr><td>3. Derive</td><td>You can re-derive it from first principles</td><td>Close the book; derive; check</td></tr>
<tr><td>4. Explain</td><td>You can teach it so a 12-year-old gets it</td><td>Feynman; find the gap</td></tr>
<tr><td>5. Generate</td><td>You can produce NEW results with it</td><td>Explore, conjecture, verify</td></tr>
</table></div>
<p><strong>Target: level 3 minimum for every core result.</strong> A derived theorem is yours; a memorized one is rented.</p></div>""",
"""<div class="card sky"><h3>Worked derivation: the quadratic formula from scratch</h3>
<p>Complete the square — this is the utsarga method. Start from ax²+bx+c=0:</p>
<div class="flow">ax² + bx + c = 0
x² + (b/a)x + (c/a) = 0          [divide by a]
x² + (b/a)x = -(c/a)
x² + (b/a)x + (b/2a)² = (b/2a)² - (c/a)   [add square of half-coefficient]
(x + b/2a)² = b²/4a² - c/a
(x + b/2a)² = (b² - 4ac)/4a²
x + b/2a = ± √(b² - 4ac) / 2a
x = (-b ± √(b² - 4ac)) / 2a      [the formula!]</div>
<p>Derive it yourself 3 times over 3 days (1h → 24h → 7d). On day 7 you will NEVER forget it — because you built it.</p></div>""",
"""<div class="card emerald"><h3>Proof by induction — the recursion of truth</h3>
<p>Claim: 1 + 2 + … + n = n(n+1)/2</p>
<div class="flow">Base case (n=1): 1 = 1(2)/2 = 1 ✓
Inductive step: assume true for n=k:
  1 + 2 + … + k = k(k+1)/2
Add (k+1):
  1 + 2 + … + k + (k+1) = k(k+1)/2 + (k+1)
                        = (k+1)(k/2 + 1)
                        = (k+1)(k+2)/2   ✓ (true for k+1)
Therefore true for all n. ∎</div>
<p><strong>This is Nyāya's anumāna made rigorous:</strong> prove the base (pratyakṣa), prove the step (inference), conclude for all.</p></div>""",
"""<div class="card violet"><h3>Kerala series — π without a circle (the Yuktibhāṣā move)</h3>
<div class="flow">π/4 = 1 - 1/3 + 1/5 - 1/7 + 1/9 - …
(Leibniz-Gregory-Mādhava series; Mādhava of Sangamagrama, ~1400)

π/4 = 1 - 1/3 + 1/5 - 1/7          = 0.7238… (4 terms)
π/4 = 1 - 1/3 + 1/5 - 1/7 + 1/9 … + 1/99  = 0.7873…
converges slowly but surely.</div>
<p><strong>Faster Kerala series (Mādhava):</strong> π = 4(1 - 1/3 + 1/5 - 1/7 + …) with acceleration — the tradition found transformations that converge much faster, centuries before Europe.</p>
<p>Exercise: compute π to 3 decimals using the series with a spreadsheet. You are redoing the Kerala school's work by hand — and feeling why calculus was inevitable.</p></div>""",
"""<div class="card coral"><h3>Mathematical habits of mind (the master's daily loop)</h3>
<ul>
<li><strong>Sanity-check everything:</strong> magnitude, units, edge cases (n=0, n=1, negative, huge)</li>
<li><strong>Specialize then generalize:</strong> solve n=2, n=3, then conjecture the pattern</li>
<li><strong>Draw it:</strong> a picture is a proof sketch (Vaiśeṣika map of the problem)</li>
<li><strong>Change representations:</strong> algebra ↔ geometry ↔ numbers ↔ graphs</li>
<li><strong>Fail fast, learn faster:</strong> every wrong derivation is a data point (asiddha rule)</li>
<li><strong>Keep a conjecture notebook:</strong> write guesses, dates, and verdicts — Rāmānujan style</li>
</ul></div>""",
"""<div class="card indigo"><h3>The math flashcard system (spaced derivation)</h3>
<div class="flow">CARD: "Derive the quadratic formula"     → do it on paper, then check
CARD: "Why does the Kerala series work?"  → explain the tangent/arc argument
CARD: "Prove 1+2+…+n by induction"        → 2-minute derivation
CARD: "State Fermat's Last Theorem"       → recall precisely, then date it
REVIEW: 1h → 24h → 7d → 30d → 90d</div>
<p>Never put a formula on the front of a card. Put a <em>derivation task</em> — the retrieval is the learning.</p></div>""",
"""<div class="green"><b>GREEN gate 18:</b> Derive the quadratic formula from scratch (no peeking). Compute π to 3 decimals with the Kerala series. Prove 1+2+…+n by induction. Teach the 'levels of understanding' hierarchy to someone.</div>""",
])

# ---------------------------------------------------------------- 19
m("ai-eng", "Mandala 19", "AI Engineering Deep — The 2026 Stack",
"""The 2026 AI stack is a new kind of grammar: models, data, context, tools, evals. The same mastery method applies — map the stack, learn the rules, prove with artifacts.""",
[
"""<div class="card indigo"><h3>The full-stack map (Sāṃkhya layers of AI)</h3>
<div class="table-wrap"><table>
<tr><th>Layer</th><th>Components</th><th>Key skill</th></tr>
<tr><td>Model</td><td>LLM, diffusion, reasoning models; open (Llama, DeepSeek, Qwen) vs closed (Grok, GPT, Claude, Gemini)</td><td>Choosing + prompting the right model</td></tr>
<tr><td>Data</td><td>Corpus, chunks, embeddings, RAG store, synthetic data</td><td>Chunking strategy, retrieval quality</td></tr>
<tr><td>Context</td><td>System prompt, tools schema, memory, conversation window</td><td>Context engineering, token budget</td></tr>
<tr><td>Agents</td><td>Loop: observe → decide → act → verify; tool calls; permissions</td><td>Agent control, guardrails, retries</td></tr>
<tr><td>Eval</td><td>Golden sets, metrics, regression, canary, human review</td><td>Eval design — the Nyāya layer</td></tr>
<tr><td>Deploy</td><td>API, edge, on-device, cost, latency, monitoring</td><td>Production discipline</td></tr>
</table></div>
<p><strong>The core loop (grammar of AI engineering):</strong> every AI system is TRY → OBSERVE → CORRECT → VERIFY. Master that loop and you can build on any stack.</p></div>""",
"""<div class="card emerald"><h3>RAG deep — retrieval is the new grammar</h3>
<div class="flow">DOCUMENTS → CHUNK → EMBED → INDEX
QUERY → EMBED → RETRIEVE (top-k) → RERANK → GENERATE → VERIFY CITED</div>
<p>RAG quality depends on: chunk size (256-1024 tokens), overlap (10-20%), embedding model, retrieval k, reranking, and citation verification. <strong>The eval that matters:</strong> out-of-corpus query returns no hallucination; in-corpus query returns the right chunk with citation.</p>
<div class="table-wrap"><table>
<tr><th>Ablation</th><th>What you test</th><th>Metric</th></tr>
<tr><td>chunk=256 vs 1024</td><td>granularity vs context</td><td>answer accuracy</td></tr>
<tr><td>k=3 vs k=10</td><td>precision vs recall</td><td>hit rate, faithfulness</td></tr>
<tr><td>no rerank vs rerank</td><td>ranking quality</td><td>top-1 accuracy</td></tr>
<tr><td>empty retrieval</td><td>graceful refusal</td><td>no hallucination</td></tr>
</table></div></div>""",
"""<div class="card sky"><h3>Agent loop — the five control primitives</h3>
<ul>
<li><strong>Budget:</strong> max iterations, max tokens, max cost — always finite</li>
<li><strong>Permission:</strong> which tools need human approval (never silent destructive ops)</li>
<li><strong>Observation:</strong> read the actual tool output, not the plan</li>
<li><strong>Correction:</strong> allow N retries with different strategy; halt after repeated identical failure</li>
<li><strong>Verification:</strong> prove the side effect happened (stat the file, fetch the URL, check the exit code)</li>
</ul>
<p><strong>The discipline:</strong> an agent that cannot verify its own output is a hetvābhāsa machine — confident, ungrounded. Build verification INTO the loop (this is Nyāya as engineering).</p></div>""",
"""<div class="card violet"><h3>Eval design — the Nyāya layer</h3>
<div class="table-wrap"><table>
<tr><th>Eval type</th><th>What it catches</th><th>Example</th></tr>
<tr><td>Golden set</td><td>Regression on known-good answers</td><td>50 Q/A pairs, exact + semantic scoring</td></tr>
<tr><td>Adversarial</td><td>Hallucination, prompt injection, edge cases</td><td>Out-of-scope queries, malicious prompts</td></tr>
<tr><td>Ablation</td><td>Which component contributes what</td><td>RAG on/off, rerank on/off</td></tr>
<tr><td>Load/latency</td><td>Production readiness</td><td>p95 latency, cost per query</td></tr>
<tr><td>Human calibration</td><td>Are the auto-scores honest?</td><td>Sample of labeled outputs reviewed by human</td></tr>
</table></div>
<p><strong>The 5 pramāṇas as evals:</strong> pratyakṣa = direct check of output; anumāna = inference test; upamāna = analogy/example test; śabda = does it match authoritative source (RAG citation!); each can fail — each needs its own eval.</p></div>""",
"""<div class="card coral"><h3>Prompt patterns that compound (2026)</h3>
<ul>
<li><strong>Role + goal + constraints + format:</strong> the four-part system prompt</li>
<li><strong>Chain of verification:</strong> "state your answer, then list what could make it wrong, then check each"</li>
<li><strong>Few-shot with labeled examples:</strong> give 2-3 good + 1 bad example</li>
<li><strong>Iterative refinement:</strong> "rewrite with more precision", "now simpler", "now for a beginner"</li>
<li><strong>Tool discipline:</strong> for facts, use tools (search/files) not memory</li>
<li><strong>Nyāya audit prompt:</strong> "classify each claim as direct/inference/analogy/unsupported; for unsupported, say so"</li>
</ul></div>""",
"""<div class="card indigo"><h3>Zero-to-production in 30 days (the AI-lab path)</h3>
<div class="table-wrap"><table>
<tr><th>Days</th><th>Milestone</th><th>Artifact</th></tr>
<tr><td>1-3</td><td>Local hello: call an LLM from Python</td><td>hello.py + transcript</td></tr>
<tr><td>4-6</td><td>Tool call: model → calculator/search/file</td><td>tool_demo.py + trace</td></tr>
<tr><td>7-9</td><td>Eval harness: golden set + scoring</td><td>eval.py + 10/10 run</td></tr>
<tr><td>10-14</td><td>RAG ablation: chunk/embed/retrieve/rerank</td><td>rag.py + metrics JSON</td></tr>
<tr><td>15-19</td><td>Bounded agent loop with correction</td><td>agent.py + trace log</td></tr>
<tr><td>20-24</td><td>Voice latency budget (TTS/STT p95)</td><td>voice.py + budget table</td></tr>
<tr><td>25-30</td><td>Production readiness: evals, rollback, canary</td><td>README + final report</td></tr>
</table></div>
<p>This is the exact path in the sibling AI Lab campus — every milestone has an RTMA artifact. Zero API keys needed to start.</p></div>""",
"""<div class="green"><b>GREEN gate 19:</b> Build the eval harness for any model output (10 golden Qs, semantic scoring). Run the empty-retrieval test on a RAG system. Write the agent-loop five primitives for your own project. Teach the 'pramāṇas as evals' mapping.</div>""",
])

# ---------------------------------------------------------------- 20
m("uc-eng", "Mandala 20", "Communications Engineering — THE CALL MUST ALWAYS CONNECT",
"""Communications (UC/CC) is the signal temple: every voice carries a soul, and the call must always connect. The engineer's mastery is the Śikṣā loop applied to protocols, reliability, and empathy.""",
[
"""<div class="card indigo"><h3>The stack (the protocol ladder)</h3>
<div class="table-wrap"><table>
<tr><th>Layer</th><th>Component</th><th>Role</th><th>Mnemonic</th></tr>
<tr><td>Call control</td><td>CUCM (CallManager)</td><td>The CNS — registration, dial plan, call routing</td><td>ICM Brain / CUCM CNS</td></tr>
<tr><td>Routing</td><td>ICM / UCCE</td><td>The mind — queuing, skills, IVR, routing decisions</td><td>Routing mind</td></tr>
<tr><td>Border</td><td>CUBE / SBC</td><td>The guardian — SIP normalization, security, interop</td><td>Border guardian</td></tr>
<tr><td>Transport</td><td>SIP / RTP</td><td>The tongue — signaling + media</td><td>Peer tongue</td></tr>
<tr><td>Life</td><td>E911 / RedSky</td><td>The covenant — emergency calls must reach PSAP</td><td>Life covenant</td></tr>
</table></div>
<p><strong>The engineer's path:</strong> THE CALL MUST ALWAYS CONNECT. Every design decision serves that path.</p></div>""",
"""<div class="card emerald"><h3>SIP call flow — the social contract</h3>
<div class="flow">INVITE ──────────────→ (proxy)
100 Trying ←───────────
180 Ringing ←──────────
200 OK ←───────────────
ACK ──────────────────→
   [RTP media flows both ways]
BYE ──────────────────→
200 OK ←───────────────</div>
<p>Learn this one flow and you can debug 80% of SIP issues: which message is missing? Who should have sent it? What would the fix be? (mnemonic: the SIP Rockstar knows every note of the song)</p></div>""",
"""<div class="card sky"><h3>QoS — the traffic laws</h3>
<div class="table-wrap"><table>
<tr><th>Class</th><th>DSCP/PHB</th><th>Traffic</th><th>Why</th></tr>
<tr><td>Voice</td><td>EF (46)</td><td>RTP audio</td><td>Latency < 150ms, jitter < 30ms, zero loss</td></tr>
<tr><td>Video</td><td>AF31</td><td>Video streams</td><td>Low loss, some latency tolerance</td></tr>
<tr><td>Best effort</td><td>BE (0)</td><td>Data</td><td>Anything else</td></tr>
</table></div>
<p><strong>The QoS ladder:</strong> mark at the source, trust/remark at the edge, queue in the network, drop the least important under congestion.</p></div>""",
"""<div class="card violet"><h3>The failure-mode dossier (LICC proof practice)</h3>
<p>Take ONE real failure — say "one-way audio." Build the full dossier:</p>
<div class="table-wrap"><table>
<tr><th>Step</th><th>What you check</th><th>Likely cause</th></tr>
<tr><td>1. Topology</td><td>Where are the endpoints? NAT? SBC?</td><td>Addressing mismatch</td></tr>
<tr><td>2. Signaling</td><td>SDP in INVITE/200 OK — codec, ports</td><td>Codec negotiation fail</td></tr>
<tr><td>3. Media path</td><td>RTP flows? Which direction?</td><td>NAT/firewall, ICE missing</td></tr>
<tr><td>4. Decision tree</td><td>Is it every call? one direction? one phone?</td><td>Fault isolation</td></tr>
<tr><td>5. Counter-evidence</td><td>What would disprove each hypothesis?</td><td>Honest debugging</td></tr>
<tr><td>6. GREEN</td><td>Capture: trace + counters + expected result</td><td>Proven fix</td></tr>
</table></div>
<p>This LICC pattern (Leg · ID · Counter · Capture) turns every incident into a mastery artifact.</p></div>""",
"""<div class="card coral"><h3>2026 direction — the future of UC</h3>
<ul>
<li><strong>CCaaS:</strong> Webex Contact Center, Amazon Connect, Genesys Cloud — cloud routing, AI agents</li>
<li><strong>AI in the loop:</strong> voicebots, sentiment, agent assist, post-call analytics</li>
<li><strong>API-first:</strong> Webex REST APIs, UCCE admin APIs, programmable dial plans</li>
<li><strong>E911 → NG911:</strong> IP-based emergency calls, location-aware routing</li>
<li><strong>Unified identity:</strong> Webex + calling + messaging under one directory</li>
<li><strong>Security:</strong> SIP TLS/SRTP, SBC hardening, fraud (toll fraud) prevention</li>
</ul>
<p>Full roadmap: the sibling UC Lab campus has 272 sections of depth — this mandala is the map.</p></div>""",
"""<div class="green"><b>GREEN gate 20:</b> Recite the SIP call flow from memory (7 messages). Build the one-way-audio decision tree. Explain QoS marking (EF/AF31/BE) to a non-engineer. State the engineer's path and why it matters.</div>""",
])

# ---------------------------------------------------------------- 21
m("health", "Mandala 21", "Body & Mind — The Foundation Engine",
"""No mastery survives a broken body or a scattered mind. Charaka and the yoga tradition understood: the learner is a whole system. Train the body and mind like any other domain — with method, practice, and proof.""",
[
"""<div class="card indigo"><h3>The three pillars (Charaka's tristambha)</h3>
<div class="table-wrap"><table>
<tr><th>Pillar</th><th>Ancient principle</th><th>Modern translation</th><th>Minimum daily dose</th></tr>
<tr><td>Āhāra (food)</td><td>Eat to feed, not to fill</td><td>Whole foods, protein, hydration, timing</td><td>3 meals, 2L water, 0 junk</td></tr>
<tr><td>Nidrā (sleep)</td><td>Sleep is the body's anabolism</td><td>7-9h, consistent schedule, dark room</td><td>7h+ nightly</td></tr>
<tr><td>Brahmacarya (energy)</td><td>Direct energy toward mastery</td><td>Attention budget, focus hygiene</td><td>Deep work 2×90min</td></tr>
</table></div>
<p><strong>The insight:</strong> these are not 'lifestyle tips' — they are the substrate on which every other mandala runs. A sleep-deprived learner is a learner with a broken cache.</p></div>""",
"""<div class="card emerald"><h3>Movement — the thinking enhancer</h3>
<ul>
<li><strong>Exercise & cognition:</strong> aerobic exercise improves hippocampal volume and executive function (replicated meta-analyses)</li>
<li><strong>Walking meetings:</strong> walking boosts creative ideation (~60% more ideas in classic studies)</li>
<li><strong>Posture:</strong> upright posture increases confidence and reduces stress markers</li>
<li><strong>Micro-breaks:</strong> 5 min every 45-60 min prevents attention decay</li>
<li><strong>Yoga/breath:</strong> prāṇāyāma (breath control) lowers stress and sharpens focus — 5 min daily</li>
</ul>
<p><strong>The practice:</strong> 30 min movement daily, 5 min breath before study sessions, walk when stuck.</p></div>""",
"""<div class="card sky"><h3>The mind — attention as a trained muscle</h3>
<div class="table-wrap"><table>
<tr><th>Technique</th><th>What it trains</th><th>Protocol</th></tr>
<tr><td>Focused meditation</td><td>Sustained attention</td><td>10-20 min daily, anchor = breath</td></tr>
<tr><td>Open awareness</td><td>Meta-cognition</td><td>Notice thoughts without chasing</td></tr>
<tr><td>Body scan</td><td>Interoception, calm</td><td>5-10 min before sleep</td></tr>
<tr><td>Diaphragmatic breathing</td><td>Stress down-regulation</td><td>4-7-8 or box breathing</td></tr>
<tr><td>Digital fasting</td><td>Attention budget</td><td>1h phone-free after waking</td></tr>
</table></div>
<p><strong>The proof:</strong> attention is trainable exactly like a muscle — volume × intensity × recovery. Track your distraction-free minutes like a lifting log.</p></div>""",
"""<div class="card violet"><h3>Energy management (the daily waveform)</h3>
<div class="flow">MORNING (peak):  hardest deep work, no phone
MIDDAY:           medium tasks, meetings, movement
AFTERNOON:        practice, review, easy wins
EVENING:          social, teaching, light review
NIGHT:            wind down, sleep 7-9h → consolidation</div>
<p>Match task difficulty to your circadian energy. Schedule creative/deep work at your personal peak (for most: 9-11am and 4-6pm).</p></div>""",
"""<div class="card coral"><h3>The 7-day body log (RTMA for health)</h3>
<pre>DAY {n} · DATE: ____
SLEEP: __h (quality 1-10: _)
FOOD:  3 meals ✓/✗ · water __L · junk ✓/✗
MOVE:  __min (type: ____)
FOCUS: __min deep work · distractions: __
BREATH: __min · mood 1-10: __
PROOF: one sentence on what improved</pre>
<p>Like any RTMA: Run (do it) · Trace (log it) · Metric (numbers) · Artifact (the log). 7 days of data beats 7 years of vague intentions.</p></div>""",
"""<div class="green"><b>GREEN gate 21:</b> Track sleep/food/move/focus for 3 days. Do 5 min breathwork before your next study block. Walk when stuck next time. Teach the tristambha (three pillars) to someone.</div>""",
])

# ---------------------------------------------------------------- 22
m("time", "Mandala 22", "Time & Attention — The True Currency",
"""Time is the only non-renewable resource. Attention is its conversion engine. Master both and every other mandala accelerates.""",
[
"""<div class="card indigo"><h3>The time budget (audit before you optimize)</h3>
<p>For 3 days, log every hour (just a word per hour). Most people discover 30-50% goes to low-value loops. Then build the ideal week:</p>
<div class="table-wrap"><table>
<tr><th>Block</th><th>Hours/day</th><th>Non-negotiable?</th></tr>
<tr><td>Sleep</td><td>7-9</td><td>YES</td></tr>
<tr><td>Deep work (single topic)</td><td>2-4</td><td>YES for mastery</td></tr>
<tr><td>Practice/review</td><td>1-2</td><td>YES for retention</td></tr>
<tr><td>Movement + hygiene</td><td>1-2</td><td>YES</td></tr>
<tr><td>Relationships/social</td><td>1-2</td><td>YES</td></tr>
<tr><td>Admin/errands</td><td>0.5-1</td><td>Compress</td></tr>
<tr><td>Entertainment</td><td>0-1</td><td>Negotiable — count it</td></tr>
</table></div></div>""",
"""<div class="card emerald"><h3>The 2-minute rule + the 5-second start</h3>
<ul>
<li>If a task takes &lt;2 min: do it now (kills the admin pile)</li>
<li>To start big work: count 5-4-3-2-1 and physically begin the FIRST small step</li>
<li>Motivation follows action; don't wait for motivation</li>
<li>Environment: prepare the workspace the night before</li>
</ul></div>""",
"""<div class="card sky"><h3>Attention hygiene (2026 — the phone war)</h3>
<div class="table-wrap"><table>
<tr><th>Threat</th><th>Fix</th></tr>
<tr><td>Notifications</td><td>All off except calls/messages from real people; batch-check 3×/day</td></tr>
<tr><td>Infinite scroll</td><td>App timers, grayscale after 9pm, one-tab rule</td></tr>
<tr><td>Context switching</td><td>50-min blocks, single task, tab/task closure ritual</td></tr>
<tr><td>AI rabbit holes</td><td>Set the goal before opening a chat; end with a written takeaway</td></tr>
<tr><td>Morning hijack</td><td>First hour phone-free: plan, read, practice</td></tr>
</table></div></div>""",
"""<div class="card violet"><h3>Weekly review — the 30-minute compounding ritual</h3>
<div class="flow">1. Wins: 3 things that worked (30s each)
2. Gaps: 3 things that slipped, WITH the why
3. Proof: artifacts produced this week?
4. Next: pick the ONE mastery focus for next week
5. Systems: what needs a better default?</div>
<p>Do this every Sunday. It turns a year of weeks into a compounding machine.</p></div>""",
"""<div class="card coral"><h3>The Pāṇini time-stack (utsarga → apavāda)</h3>
<p><strong>Utsarga (default):</strong> fixed blocks — same time, same place, same ritual every day. <strong>Apavāda (exceptions):</strong> travel/sick/emergency → shrink blocks, don't drop them (15 min counts). <strong>Siddha (proof):</strong> the streak log. A streak is evidence the system works.</p></div>""",
"""<div class="green"><b>GREEN gate 22:</b> Audit 2 days of your time. Build the ideal week with fixed blocks. Do the weekly review ritual this Sunday. Teach the 2-minute rule to someone.</div>""",
])

# ---------------------------------------------------------------- 23
m("money", "Mandala 23", "Money Mastery — Resources for the Mission",
"""Mastery needs runway. Money is stored time — earned, saved, and invested so your learning can compound without fear.""",
[
"""<div class="card indigo"><h3>The money grammar (utsarga rules)</h3>
<div class="table-wrap"><table>
<tr><th>Rule</th><th>Why</th><th>Practice</th></tr>
<tr><td>Spend less than you earn</td><td>The only reliable wealth builder</td><td>Auto-save 10-20% first</td></tr>
<tr><td>Build an emergency fund</td><td>6 months expenses = freedom from panic</td><td>Automate monthly</td></tr>
<tr><td>No high-interest debt</td><td>Interest is negative compounding</td><td>Pay off cards aggressively</td></tr>
<tr><td>Invest for decades</td><td>Compounding needs time, not timing</td><td>Index funds, monthly, ignore noise</td></tr>
<tr><td>Skills are the best asset</td><td>Income capacity beats any stock</td><td>Invest 5%+ of time in learning</td></tr>
</table></div></div>""",
"""<div class="card emerald"><h3>The 50/30/20 budget (simple version)</h3>
<div class="flow">50% needs (housing, food, transport, bills)
30% wants (fun, dining, travel, hobbies)
20% future (savings, investing, debt above minimum, learning)</div>
<p>Adjust to your life, but keep the SAVE FIRST discipline — automate it so it's not a decision.</p></div>""",
"""<div class="card sky"><h3>Free-education economics (the mission's money)</h3>
<ul>
<li>Build free campuses; monetize via services (training, consulting, mentoring), not the knowledge itself</li>
<li>Micro-seeds: plant ≤$0.99 value, never hoard bags of coconuts</li>
<li>Proof portfolio → freelance/consulting → compounding reputation</li>
<li>Tools: the 3 campuses (UC/AI/Ardham) are the calling card; the hub linktr.ee/cyphermonkey is the front door</li>
</ul></div>""",
"""<div class="card violet"><h3>The 12-month money arc</h3>
<div class="table-wrap"><table>
<tr><th>Months</th><th>Focus</th><th>Milestone</th></tr>
<tr><td>1-2</td><td>Audit + budget</td><td>30-day spend log, budget live</td></tr>
<tr><td>3-4</td><td>Emergency fund</td><td>1 month saved</td></tr>
<tr><td>5-6</td><td>Debt kill</td><td>Highest-interest debt gone</td></tr>
<tr><td>7-8</td><td>Invest</td><td>First monthly auto-invest</td></tr>
<tr><td>9-10</td><td>Skills income</td><td>First paid gig/contract from mastery</td></tr>
<tr><td>11-12</td><td>Compound</td><td>Full emergency fund + 12 months of auto-invest</td></tr>
</table></div></div>""",
"""<div class="green"><b>GREEN gate 23:</b> Create the 50/30/20 budget with auto-save. Set up the 12-month arc with dates. Plant one free seed (share a campus/link with someone who needs it). Teach one money rule to someone.</div>""",
])

# ---------------------------------------------------------------- 24
m("leadership", "Mandala 24", "Leadership & Service — Mastery Multiplied",
"""Mastery compounds when it serves. Leadership is not a title — it is the willingness to carry others further than they could go alone, which is exactly what teaching is.""",
[
"""<div class="card indigo"><h3>The servant-leader grammar (utsarga)</h3>
<div class="table-wrap"><table>
<tr><th>Principle</th><th>Meaning</th><th>Practice</th></tr>
<tr><td>Listen first</td><td>Understand before prescribing</td><td>Ask 3 questions before 1 opinion</td></tr>
<tr><td>Lead by example</td><td>Your practice is the proof</td><td>Never ask others to do what you won't</td></tr>
<tr><td>Grow others</td><td>Teaching is the highest leverage</td><td>One learner per quarter, real feedback</td></tr>
<tr><td>Own outcomes</td><td>No blaming the weather</td><td>Postmortems, not witch hunts</td></tr>
<tr><td>Stay mystery</td><td>Authority from competence, not noise</td><td>Let proof speak, keep ego quiet</td></tr>
</table></div></div>""",
"""<div class="card emerald"><h3>The Nyāya leader — decisions with reasons</h3>
<p>A leader's decision is a 5-member syllogism: the proposition (what we'll do), the reason (why), the example (evidence it works), the application (here's how it applies to us), the conclusion (therefore).</p>
<p><strong>Practice:</strong> write the syllogism for every significant decision. It forces honesty, invites challenge, and trains your team's reasoning — hetvābhāsa audit included.</p></div>""",
"""<div class="card sky"><h3>Communication — the transmission layer</h3>
<ul>
<li><strong>Plain first:</strong> explain in the simplest words before adding precision (EN trade voice)</li>
<li><strong>Structure:</strong> bottom line first, then evidence, then options</li>
<li><strong>Three tongues, one law:</strong> match the listener's frequency — heart (TE), precision (SA), trade (EN)</li>
<li><strong>Feedback = data:</strong> specific, timely, about behavior not identity</li>
<li><strong>Public speaking:</strong> 3-part arc — promise, proof, path; rehearse aloud 3×</li>
</ul></div>""",
"""<div class="card violet"><h3>The 90-day leadership arc</h3>
<div class="table-wrap"><table>
<tr><th>Days</th><th>Focus</th><th>Proof</th></tr>
<tr><td>1-14</td><td>Listen: map the team/system; 3 questions before opinions</td><td>Listening log</td></tr>
<tr><td>15-30</td><td>Model: do the hard work visibly; teach one skill</td><td>One session delivered</td></tr>
<tr><td>31-60</td><td>Decide: 5-member syllogism for 3 decisions</td><td>3 decision cards</td></tr>
<tr><td>61-90</td><td>Grow: one learner progressed with evidence</td><td>Learner's artifact</td></tr>
</table></div></div>""",
"""<div class="green"><b>GREEN gate 24:</b> Write a 5-member syllogism for your next decision. Deliver one teaching session. Ask 3 questions before giving an opinion today. Teach the servant-leader grammar to someone.</div>""",
])

# ---------------------------------------------------------------- 25
m("philosophy", "Mandala 25", "The Philosophy of Knowledge — Beyond the Method",
"""The deepest layer: why does the method work? What is knowledge, really? The Indian tradition asked these questions with extraordinary rigor — and their answers still illuminate modern AI, science, and learning.""",
[
"""<div class="card indigo"><h3>Epistemology in one table (what counts as knowing)</h3>
<div class="table-wrap"><table>
<tr><th>School</th><th>Answer to 'how do we know?'</th><th>Modern echo</th></tr>
<tr><td>Nyāya</td><td>Four pramāṇas (perception, inference, comparison, testimony)</td><td>Evals, reasoning, analogies, citations</td></tr>
<tr><td>Vaiśeṣika</td><td>Categories of reality are knowable</td><td>Ontologies, embeddings</td></tr>
<tr><td>Sāṃkhya</td><td>Knowing = the observer discriminating from nature</td><td>Meta-cognition, agent vs environment</td></tr>
<tr><td>Advaita</td><td>Ultimate knowledge is identity (tat tvam asi)</td><td>Systems view: observer is part of system</td></tr>
<tr><td>Buddhist</td><td>Knowledge is dependently arisen, impermanent</td><td>Bayesian updating, models as approximations</td></tr>
</table></div></div>""",
"""<div class="card emerald"><h3>The hard problem — consciousness</h3>
<p>How does matter become experience? No one knows. The Upaniṣads called the observer puruṣa; modern neuroscience calls it the hard problem. <strong>The learning lesson:</strong> the mystery is not a bug — it is the frontier. Keep one question you cannot answer; it organizes everything you can.</p></div>""",
"""<div class="card sky"><h3>Time — the loop that learning exploits</h3>
<ul>
<li>Cyclic time (yugas) vs linear time (history) — both are real in different scales</li>
<li>Entropy gives time a direction; memory gives experience a direction</li>
<li>Spaced repetition is time-engineered memory — you ride the curve instead of fighting it</li>
<li>Deep time: build things that outlive you (the I₁₅ ethos: durable artifacts over applause)</li>
</ul></div>""",
"""<div class="card violet"><h3>The meaning question — why master anything?</h3>
<p>Because the universe, through you, is learning itself. Every skill you master is a new way the cosmos can understand itself. That is the Ardham — the meaning — behind every mandala. Learn for the love of meaning; let livelihood follow.</p></div>""",
"""<div class="green"><b>GREEN gate 25:</b> Write your own epistemology — your personal pramāṇas (what do you trust, and why?). Keep one unanswered question alive. Teach the pramāṇa table to someone.</div>""",
])

# ---------------------------------------------------------------- 26
m("tools", "Mandala 26", "Tools of the Trade — 2026 Arsenal",
"""The learner's toolbox: capture, organize, recall, build, share. Every tool serves the Śikṣā loop — none replaces it.""",
[
"""<div class="card indigo"><h3>The tool map (by function)</h3>
<div class="table-wrap"><table>
<tr><th>Function</th><th>Tools (2026)</th><th>Śikṣā loop role</th></tr>
<tr><td>Capture</td><td>Notes app, voice memo, camera, plaintext files</td><td>EXPOSE — get it out of your head</td></tr>
<tr><td>Organize</td><td>Folders, tags, Zettelkasten, wiki (local)</td><td>Map — lattice not pile</td></tr>
<tr><td>Recall</td><td>Anki/SM-2 cards, spreadsheets, paper decks</td><td>RETRIEVE — the core engine</td></tr>
<tr><td>Build</td><td>Code editor, design tools, AI assistants, lab scripts</td><td>APPLY — real artifacts</td></tr>
<tr><td>Share</td><td>GitHub, free campuses, X/LinkedIn, voice notes</td><td>TEACH — the completion</td></tr>
</table></div></div>""",
"""<div class="card emerald"><h3>Capture rules (the pipeline)</h3>
<ul>
<li>Capture immediately — memory is lossy compression</li>
<li>One idea per note; link ideas (lattice)</li>
<li>Every note gets a NEXT review date or it dies</li>
<li>Voice notes for thoughts, text for facts, artifacts for proofs</li>
<li>Weekly: empty the inbox into the lattice (30 min)</li>
</ul></div>""",
"""<div class="card sky"><h3>The AI toolbox (2026 — all free/cheap tiers)</h3>
<div class="table-wrap"><table>
<tr><th>Job</th><th>Tool</th><th>Tip</th></tr>
<tr><td>Reasoning/tutor</td><td>Frontier chat + reasoning models</td><td>Ask for Socratic mode; verify everything</td></tr>
<tr><td>Voice practice</td><td>Voice agents / TTS-STT</td><td>Shadow native audio daily</td></tr>
<tr><td>Code/labs</td><td>Coding agents + local runtimes</td><td>Always run + verify, never trust the summary</td></tr>
<tr><td>Knowledge base</td><td>Local markdown + search; RAG if large</td><td>Offline-first, git-versioned</td></tr>
<tr><td>Image/design</td><td>Image generators</td><td>Use for cards/mnemonics — visuals stick</td></tr>
</table></div></div>""",
"""<div class="card violet"><h3>Offline-first discipline (the freedom rule)</h3>
<ul>
<li>Everything critical lives on YOUR disk, in open formats (HTML/MD/TXT/CSV)</li>
<li>Cloud is backup, not home</li>
<li>No tool that can delete your work silently</li>
<li>The 3 campuses are the model: single-file HTML, works offline forever</li>
</ul></div>""",
"""<div class="green"><b>GREEN gate 26:</b> Set up capture → organize → recall with NEXT dates on every note. Build one artifact with an AI tool and verify it yourself. Teach the tool map to someone.</div>""",
])

# ---------------------------------------------------------------- 27
m("history", "Mandala 27", "History of Ideas — The Long Ladder",
"""You stand on a ladder of learners. Knowing the ladder — who climbed when, what they saw — gives you the map and the courage.""",
[
"""<div class="card indigo"><h3>The idea-ladder (ancient → modern, one line each)</h3>
<div class="table-wrap"><table>
<tr><th>~Era</th><th>Thinker / text</th><th>Idea that changed everything</th></tr>
<tr><td>~1500 BCE</td><td>Vedas</td><td>Oral transmission as technology; sound = knowledge vehicle</td></tr>
<tr><td>~600 BCE</td><td>Upaniṣads</td><td>tat tvam asi — observer and observed are one</td></tr>
<tr><td>~500 BCE</td><td>Pāṇini</td><td>Aṣṭādhyāyī — the first generative grammar</td></tr>
<tr><td>~400 BCE</td><td>Gautama (Nyāya)</td><td>Logic as a science; the 5-member syllogism</td></tr>
<tr><td>~300 BCE</td><td>Kaṇāda (Vaiśeṣika)</td><td>Ontology — categories of what exists</td></tr>
<tr><td>~200 BCE</td><td>Īśvarakṛṣṇa (Sāṃkhya)</td><td>The 25-tattva layer stack</td></tr>
<tr><td>~300 BCE</td><td>Pingala</td><td>Binary enumeration, Fibonacci-like recurrence</td></tr>
<tr><td>476 CE</td><td>Āryabhaṭa</td><td>π, eclipses, reflected light — models beat myth</td></tr>
<tr><td>~500 CE</td><td>Sūrya Siddhānta</td><td>Planetary computation as applied math</td></tr>
<tr><td>1114-1185</td><td>Bhāskara II</td><td>Gravity intuition, calculus seeds, zero mastery</td></tr>
<tr><td>~1400</td><td>Mādhava</td><td>Infinite series for π — calculus arrives in Kerala</td></tr>
<tr><td>~1530</td><td>Jyeṣṭhadeva</td><td>Yuktibhāṣā — proofs, not just results</td></tr>
<tr><td>1637-1687</td><td>Descartes → Newton</td><td>Method, calculus, universal gravitation (European ladder)</td></tr>
<tr><td>1887-1920</td><td>Rāmānujan</td><td>Intuition at the frontier — with proof later</td></tr>
<tr><td>1945+</td><td>Turing → von Neumann → Chomsky</td><td>Computation, information, formal grammars</td></tr>
<tr><td>2017+</td><td>Transformers → LLMs</td><td>Learned grammars at scale — Pāṇini's dream, automated</td></tr>
</table></div>
<p><strong>Reading the ladder:</strong> every rung reused the previous. Your learning can too — stand on Pāṇini when you learn any grammar, on Nyāya when you evaluate any claim.</p></div>""",
"""<div class="card emerald"><h3>The parallel ladders lesson</h3>
<p>Kerala calculus and European calculus developed independently. Great ideas are discovered, not bestowed — and often multiply times. That means: <strong>you can rediscover almost anything.</strong> The method is enough; the source is confirmation, not permission.</p></div>""",
"""<div class="card sky"><h3>Deep-time learning</h3>
<ul>
<li>Build artifacts that would still be useful in 10 years (the I₁₅ ethos)</li>
<li>Document your ladder: what you learned, from whom, when</li>
<li>Credit the tradition: every insight is a transmission, not an invention</li>
</ul></div>""",
"""<div class="green"><b>GREEN gate 27:</b> Place YOUR current mastery topic on the idea-ladder — what rung are you standing on? Name one thinker whose method you borrow daily. Teach the ladder to someone.</div>""",
])

# ---------------------------------------------------------------- 28
m("art", "Mandala 28", "Art & Expression — Mastery Made Beautiful",
"""Expression is mastery's voice. The arts — music, visual, writing — train the same deep circuits as math and code, and they add the emotional layer that makes knowledge human.""",
[
"""<div class="card indigo"><h3>The art grammar (utsarga for any art)</h3>
<div class="table-wrap"><table>
<tr><th>Element</th><th>What it is</th><th>Example (music)</th></tr>
<tr><td>Vocabulary</td><td>The raw elements</td><td>Notes, rhythms, dynamics</td></tr>
<tr><td>Grammar</td><td>How elements combine</td><td>Scales, harmony, form</td></tr>
<tr><td>Style</td><td>Signature choices</td><td>Timbre, articulation, ornament</td></tr>
<tr><td>Expression</td><td>The meaning carried</td><td>Emotion, story, intent</td></tr>
</table></div>
<p>Learn the grammar FIRST (like Pāṇini), then break it deliberately (apavāda — the ornament, the deviation that becomes style).</p></div>""",
"""<div class="card emerald"><h3>Deliberate practice in art (the hard 4 bars)</h3>
<ul>
<li>Find the 4 hardest bars/passages/strokes — practice ONLY those, slowly, with a metronome/timer</li>
<li>Record weekly; listen/watch back; note the delta</li>
<li>Interleave: practice 3 pieces/topics in rotation (spacing for motor skills)</li>
<li>Teach after 3 weeks of any piece — the gaps shout</li>
</ul></div>""",
"""<div class="card sky"><h3>Writing — the sūtra discipline</h3>
<p>Write like Pāṇini compresses: every word must earn its place. The practice: write, then cut 20% without losing meaning. Repeat. Your prose becomes sūtras — dense, clear, unforgettable.</p>
<p><strong>The 9-ways bright forge:</strong> explain one idea 9 ways (story, list, table, diagram, analogy, FAQ, mnemonic, exercise, one-liner) — the 9WAYS method for luminous teaching.</p></div>""",
"""<div class="card violet"><h3>Digital art & design — the 2026 palette</h3>
<ul>
<li>Bright semantic palettes (sky=info, emerald=success, gold=value, violet=deep, coral=warm)</li>
<li>Dark code boxes, glowing cards, gradient headers — visual hierarchy over decoration</li>
<li>Offline-first, single-file artifacts that outlive platforms</li>
<li>Mnemonic imagery: turn concepts into characters (SIP Rockstar, ICM Brain, CUBE Bouncer)</li>
</ul></div>""",
"""<div class="green"><b>GREEN gate 28:</b> Create ONE expressive artifact this week (song, drawing, page, poem) that teaches a concept. Apply the hard-4-bars practice to it. Teach the art grammar table to someone.</div>""",
])

# ---------------------------------------------------------------- 29
m("speak", "Mandala 29", "Public Speaking & Presence — The Transmission Art",
"""Every master eventually speaks. The śikṣā tradition was oral-first: presence and voice were the technology. Modern speaking is the same — signal through a human instrument.""",
[
"""<div class="card indigo"><h3>The speaking grammar (utsarga)</h3>
<div class="table-wrap"><table>
<tr><th>Element</th><th>Rule</th><th>Practice</th></tr>
<tr><td>Promise</td><td>Open with the payoff</td><td>First 30s: what will they get?</td></tr>
<tr><td>Structure</td><td>3-part arc</td><td>Promise → Proof → Path</td></tr>
<tr><td>Proof</td><td>Evidence, story, example</td><td>1 concrete case per point</td></tr>
<tr><td>Presence</td><td>Voice + body</td><td>Slow, low, pause; stand grounded</td></tr>
<tr><td>End</td><td>One takeaway + call</td><td>Repeat the one line they should remember</td></tr>
</table></div></div>""",
"""<div class="card emerald"><h3>The rehearsal loop (Feynman for the voice)</h3>
<div class="flow">WRITE → SPEAK ALOUD → RECORD → LISTEN → CUT → SPEAK AGAIN
(3 passes minimum; listening back is the gap-finder)</div>
<p>Every pass removes one vagueness. Three passes = a talk that sounds effortless because it was engineered.</p></div>""",
"""<div class="card sky"><h3>Voice & breath (the prāṇāyāma layer)</h3>
<ul>
<li>Breathe from the diaphragm; speak on the exhale</li>
<li>Pause 1s after every important sentence — let it land</li>
<li>Slow down 20% from your instinct; listeners catch more</li>
<li>Warm-up: hum, lip trills, tongue twisters (2 min)</li>
<li>Nervous? Name it, breathe 4-7-8, start with the promise</li>
</ul></div>""",
"""<div class="card violet"><h3>Teaching talks — the guru-kuḷa format</h3>
<ul>
<li>Never lecture 40 min; teach in 3 chunks with a question after each</li>
<li>Check understanding with a RETRIEVAL question, not 'any questions?'</li>
<li>Use one vivid mnemonic per concept</li>
<li>End by asking learners to TEACH BACK in 60 seconds</li>
</ul></div>""",
"""<div class="green"><b>GREEN gate 29:</b> Record a 2-min talk on any topic (promise→proof→path). Listen back; cut the vagueness; record again. Teach back the speaking grammar to someone.</div>""",
])

# ---------------------------------------------------------------- 30
m("mystery", "Mandala 30", "The Final Mandala — The Mystery That Remains",
"""Every mandala ends where the next begins: with the unknown. The master is not the one who knows everything — the master is the one whose questions are better than before.""",
[
"""<div class="card indigo"><h3>The path renewed</h3>
<p>You came to learn anything. Now you know: <strong>learn anything = learn the method</strong>. The method is this campus — map, grammar, reason, practice, prove, space, teach — powered by meaning, verified by evidence, renewed by mystery.</p>
<div class="quote">"An equation for me has no meaning unless it expresses a thought of God." — Rāmānujan
"tat tvam asi" — you are that.
"THE CALL MUST ALWAYS CONNECT." — the engineer's path, and the learner's.</div></div>""",
"""<div class="card emerald"><h3>The 90-day proof pack (your exit artifact)</h3>
<div class="table-wrap"><table>
<tr><th>#</th><th>Artifact</th><th>Due</th></tr>
<tr><td>1</td><td>Domain map (Vaiśeṣika + Sāṃkhya)</td><td>Day 7</td></tr>
<tr><td>2</td><td>Sūtra card deck (20 cards, SM-2 live)</td><td>Day 14</td></tr>
<tr><td>3</td><td>5 practice artifacts + trace logs</td><td>Day 30</td></tr>
<tr><td>4</td><td>1 flagship project + metrics</td><td>Day 49</td></tr>
<tr><td>5</td><td>1 tutorial taught publicly + feedback log</td><td>Day 63</td></tr>
<tr><td>6</td><td>Evidence register entry per mandala</td><td>Day 77</td></tr>
<tr><td>7</td><td>Portfolio + one learner started</td><td>Day 90</td></tr>
</table></div>
<p>No artifact, no claim. Produce the proof pack and you have mastered the method — in any domain, forever.</p></div>""",
"""<div class="card sky"><h3>The review rhythm (keep the loop alive)</h3>
<ul>
<li>Daily: 45-90 min practice + 5 cards</li>
<li>Weekly: 30-min review + 1 artifact</li>
<li>Monthly: teach one thing publicly</li>
<li>Quarterly: the 90-day arc again, new domain</li>
<li>Yearly: the mystery question — is it better?</li>
</ul></div>""",
"""<div class="card violet"><h3>The transmission (what you owe next)</h3>
<p>You learned from a ladder. Pass it on: share this campus, teach one person, plant one seed. The tradition continues through you. <span class="sanskrit">tat tvam asi</span> — and so it is.</p>
<div class="badges" style="justify-content:flex-start"><span class="badge b3">Sibling: UC Lab</span><span class="badge b2">Sibling: AI Lab</span><span class="badge b1">Hub: linktr.ee/cyphermonkey</span></div></div>""",
"""<div class="green"><b>FINAL GREEN gate 30:</b> Do the 90-day proof pack. When you finish, teach the method to ONE person who has never heard of it — then come back and re-read Mandala 01. The loop closes; a new one opens.</div>""",
])

# ----------------------------------------------------------------
def render():
    out = []
    for mid, kicker, title, intro, blocks in MANDALAS:
        out.append(f'\n<!-- {kicker.upper()} -->\n<section id="{mid}" data-m="{kicker.split()[-1]}">')
        out.append(f'  <div class="kicker">{kicker}</div>')
        out.append(f'  <h2>{title}</h2>')
        out.append(f'  <p>{intro}</p>')
        for b in blocks:
            out.append(b)
        out.append('</section>')
    return "\n".join(out)

if __name__ == "__main__":
    html = render()
    campus = Path("/Users/cypher0x9/Documents/01_🎓_UC_AI_FREE_UNIVERSITY_CAMPUS/_github-publish-ardham/university/v1-ARDHAM-SHASTRA.html")
    txt = campus.read_text(encoding="utf-8")
    marker = "</main>"
    if marker in txt:
        txt = txt.replace(marker, html + "\n" + marker, 1)
        campus.write_text(txt, encoding="utf-8")
        print(f"INJECTED {len(MANDALAS)} mandalas · {len(html)} chars")
    else:
        print("MARKER NOT FOUND — aborting")
        raise SystemExit(1)
