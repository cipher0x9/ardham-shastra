# NYĀYA LOGIC DEEP — Epistemology, Syllogism, Fallacies, Evals
## Ardham Shastra Curriculum Pack 03 · CYPHER0X9 · MIT · tat tvam asi

> Full working map of Nyāya as a **reasoning operating system**: what counts as knowledge, how inference is shown to another mind, where arguments fail, and how to audit AI claims in 2026.

**Labels:** SOURCE-FAITHFUL · BRIDGE · INVENTION  
**Related:** PANINI-COMPUTATIONAL.md · AI-LEARNING-2026.md · EVIDENCE-REGISTER.md

---

## 0. Orientation

Nyāya (Gautama’s tradition and later Navya-Nyāya refinements) is not “Indian debate club flavor.” It is a disciplined account of:

1. **Instruments of knowledge** (pramāṇa)  
2. **Objects / categories of inquiry** (including the 16 padārthas of the Nyāya-sūtra framing)  
3. **Public proof structure** (parārthānumāna)  
4. **Defeat conditions** (nigrahasthāna)  
5. **Debate types** (vāda / jalpa / vitaṇḍā)  

**BRIDGE:** Use it as an **eval rubric** for human and machine claims.

---

## 1. The Sixteen Padārthas (Nyāya-sūtra framing)

### 1.1 List with operational meaning (SOURCE-FAITHFUL names; BRIDGE glosses)

| # | Padārtha | Operational gloss |
|---|----------|-------------------|
| 1 | **Pramāṇa** | Means of valid knowledge |
| 2 | **Prameya** | Objects knowable / topics of knowledge |
| 3 | **Saṃśaya** | Doubt — inquiry trigger |
| 4 | **Prayojana** | Purpose — why the inquiry matters |
| 5 | **Dṛṣṭānta** | Example / instance |
| 6 | **Siddhānta** | Established tenet / accepted position |
| 7 | **Avayava** | Members of the syllogism |
| 8 | **Tarka** | Hypothetical / reductio reasoning |
| 9 | **Nirṇaya** | Ascertainment / settled conclusion |
| 10 | **Vāda** | Truth-seeking debate |
| 11 | **Jalpa** | Wrangling debate (win-oriented) |
| 12 | **Vitaṇḍā** | Cavil — attack without establishing own view |
| 13 | **Hetvābhāsa** | Fallacious reason (pseudo-hetu) |
| 14 | **Chala** | Quibbling / equivocation tricks |
| 15 | **Jāti** | Futile rejoinders / sophisticated false replies |
| 16 | **Nigrahasthāna** | Grounds of defeat |

### 1.2 Why sixteen, not “only logic”

The list is a **full epistemic social protocol**: from doubt → purpose → proof → debate hygiene → loss conditions.

**INVENTION campus use:** treat every serious design doc as needing items 1–9 minimum; treat every public argument as needing 10–16 awareness.

---

## 2. Four Pramāṇas (Nyāya)

### 2.1 Overview

| Pramāṇa | Sanskrit | Core idea | Modern cousin (BRIDGE) |
|---------|----------|-----------|------------------------|
| Perception | **Pratyakṣa** | Sensory/contact knowledge | Observation, measurement |
| Inference | **Anumāna** | From mark to marked | Statistical / causal inference |
| Comparison | **Upamāna** | Knowledge via similarity/naming | Analogy, few-shot labeling |
| Testimony | **Śabda** | Reliable verbal knowledge | Documentation, expert report |

*Note:* Other schools count different pramāṇa sets (e.g., Mīmāṃsā adds arthāpatti, abhāva, etc.). This pack is **Nyāya-centered**. Mark cross-school claims carefully.

### 2.2 Pratyakṣa — perception

**Features often taught:**

- Directness (not via mark in the inferential sense)  
- Determinate vs indeterminate discussions in later literature  
- Conditions of defect: distance, darkness, organ damage, distraction  

**AI mapping (BRIDGE):** sensors, logging, ground-truth labels. Hallucination ≠ perception.

### 2.3 Anumāna — inference

Structure centers on **liṅga** (mark) and **sādhya** (what is to be established) via **vyāpti** (invariable concomitance).

```
Smoke (hetu) on hill → Fire (sādhya)
Because wherever smoke, there fire (vyāpti)
As in kitchen hearth (dṛṣṭānta)
```

### 2.4 Upamāna — comparison

Learning a word/object relation via similarity to a known: “gavaya is like a cow but …”

**BRIDGE:** onboarding schemas, analogy-based teaching, prototype matching.

### 2.5 Śabda — testimony

Knowledge from **āpta** (reliable speaker) / trustworthy source.

**Campus rule (INVENTION):**  
- Primary sources > secondary > LLM output  
- LLM output is **candidate śabda**, never automatic āpta  
- Require verification path

---

## 3. Five-Member Syllogism (Pañcāvayava)

### 3.1 Members

| # | Member | Sanskrit | Function |
|---|--------|----------|----------|
| 1 | Thesis | **Pratijñā** | State what is to be proved |
| 2 | Reason | **Hetu** | The mark / ground |
| 3 | Example | **Udāharaṇa** | General rule + instance |
| 4 | Application | **Upanaya** | This case is so |
| 5 | Conclusion | **Nigamana** | Therefore thesis stands |

### 3.2 Worked case A — physical (classic style)

1. **Pratijñā:** The hill has fire.  
2. **Hetu:** Because it has smoke.  
3. **Udāharaṇa:** Wherever there is smoke there is fire, as in a kitchen.  
4. **Upanaya:** This hill has smoke of that kind.  
5. **Nigamana:** Therefore this hill has fire.  

### 3.3 Worked case B — software incident (BRIDGE)

1. **Pratijñā:** The SIP call failure is caused by one-way media (not routing).  
2. **Hetu:** Because SDP shows sendonly/recvonly mismatch and RTP flows one direction in capture.  
3. **Udāharaṇa:** In prior incidents, asymmetric RTP + SDP direction mismatch co-occur with one-way audio (lab cases L1–L4).  
4. **Upanaya:** This capture matches that pattern; routing tables show bidirectional signaling OK.  
5. **Nigamana:** Therefore one-way media is the established cause class.  

### 3.4 Worked case C — AI claim audit (INVENTION)

1. **Pratijñā:** Model M is safe to use for medical dosage advice.  
2. **Hetu:** Because it scores high on a general chatbot preference benchmark.  
3. **Udāharaṇa:** ??? (missing domain-valid correlation)  
4. **Upanaya:** fails  
5. **Nigamana:** claim not established — **hetvābhāsa** risk (see §5)  

---

## 4. Svārtha vs Parārtha Anumāna

| Type | For whom | Form |
|------|----------|------|
| **Svārthānumāna** | Own understanding | Can be compressed; internal |
| **Parārthānumāna** | Convincing another | Full five-membered exposition |

**BRIDGE:** research notes may be svārtha; RFCs, design reviews, eval reports must be parārtha-grade.

---

## 5. Hetvābhāsa — Fallacious Reasons

### 5.1 Classical families (learn names; map carefully)

Commonly taught types include (wording varies by textbook):

| Type | Core defect | Modern / AI mapping (BRIDGE) |
|------|-------------|------------------------------|
| **Asiddha** | Reason not established in subject | Feature not actually present; bad metric |
| **Viruddha** | Reason proves opposite | Metric anti-correlates with goal |
| **Anaikāntika** (savyabhicāra) | Reason not invariably concomitant | Confounds; non-specific marker |
| **Prakaraṇasama** | Reason that reopens the issue equally | Question-begging metrics |
| **Kālātīta / Bādhita** styles | Contradicted by stronger knowledge | Known counterexample / hard constraint |

*Exact enumerations differ across sub-traditions; mark textbook source when precision matters.*

### 5.2 Worked fallacies for engineers

**Asiddha:** “System is secure because we have a WAF” — without evidence WAF is correctly configured/present in path.

**Viruddha:** “Model is truthful because users rate answers as fluent” — fluency can anti-correlate with caution.

**Anaikāntika:** “Latency spiked, therefore database is down” — many causes share the mark “latency.”

### 5.3 LLM-specific fallacies (INVENTION catalog)

| Name | Pattern | Mitigation |
|------|---------|------------|
| Citation theater | Fake papers / wrong quotes | Verify sources offline |
| Benchmark cosplay | Wrong benchmark claimed | Check task match |
| Authority laundering | “Experts say” without who | Demand named āpta |
| Smoothness as proof | Eloquence = truth | Score content not style |
| Missing counterexample | No search for bādha | Red-team step required |

---

## 6. Debate Methodology

### 6.1 Three modes

| Mode | Aim | Allowed tactics | Campus policy |
|------|-----|-----------------|---------------|
| **Vāda** | Establish truth | Honest reasons, accept defeat | **Default required** |
| **Jalpa** | Victory | Quibbles, tricks appear | Training only, labeled |
| **Vitaṇḍā** | Destroy other view only | No own thesis | Forbidden in design reviews |

### 6.2 Chala & Jāti (awareness)

- **Chala:** word-twisting, shifting meanings mid-argument.  
- **Jāti:** clever-sounding false rejoinders that block progress.  

**Fix:** define terms (saṃjñā discipline) at start; refuse midstream redefinition without restart.

### 6.3 Nigrahasthāna — defeat conditions (selection)

Examples of defeat grounds taught in the tradition (study full lists in sources):

- Self-contradiction  
- Silence when answer required  
- Changing thesis covertly  
- Irrelevant speech  
- Repeating without advancement  

**BRIDGE to meetings:** a design review ends not when voices tire, but when a **nirṇaya** is recorded or a **blocked-on-evidence** state is explicit.

---

## 7. Tarka and Nirṇaya

### 7.1 Tarka

Hypothetical reasoning: “If not-X, then absurd Y; hence lean X.” Useful for pruning, not always for final proof alone.

### 7.2 Nirṇaya

Settled determination after proper instruments and removal of doubt.

**Campus template (INVENTION):**

```markdown
## Nirṇaya Record
- Question:
- Pramāṇas used:
- Competing theses:
- Decisive hetu:
- Counterexamples checked:
- Residual risk:
- Decision:
- Review date:
```

---

## 8. Navya-Nyāya Touch (Later Precision)

Later Nyāya develops extreme precision about:

- Property location (relational abstraction)  
- Limitor / distinguisher technicalities  
- Definition hygiene  

**BRIDGE to multi-agent debug:** force agents to state *exactly* which property is ascribed to which locus — reduces vague blame (“the system is broken”).

**INVENTION practice:** every bug ticket must name:

```
locus (component) + property (failure mode) + pramāṇa (log/metric/repro)
```

---

## 9. Applications to AI Evals (2026)

### 9.1 Eval as parārthānumāna

An eval claims: “Model has property P.”

Must supply:

1. Clear **pratijñā** (what P is)  
2. **Hetu** (score / behavior mark)  
3. **Vyāpti** justification (why mark tracks P)  
4. **Dṛṣṭānta** (calibration sets)  
5. Search for **hetvābhāsa**  

### 9.2 Eval scorecard

| Check | Pass criterion |
|-------|----------------|
| Construct validity | Metric measures intended P |
| Contamination | Test not in train |
| Slice fairness | Subgroups reported |
| Adversarial | Known attacks tried |
| Human agreement | Inter-rater where needed |
| Countermetric | Opposite risk measured |

### 9.3 Learning use

Students should run **weekly Nyāya audit** on one AI answer they trusted (see AI-LEARNING-2026.md).

---

## 10. Comparison with Western Syllogistic (BRIDGE)

| Feature | Aristotle (popular school form) | Nyāya five-member |
|---------|----------------------------------|-------------------|
| Public pedagogy | Major/minor/conclusion | Five avayavas |
| Example role | Often external | Built into udāharaṇa |
| Debate meta | Separate traditions | Inside padārtha list |
| Fallacy system | Rich, different taxonomy | Hetvābhāsa + more |

Do not force identity; practice **translation**, not erasure.

---

## 11. Daily Drills

| Drill | Time | Output |
|-------|------|--------|
| Claim → 5 avayavas | 10 min | Written syllogism |
| Spot hetvābhāsa | 10 min | Named fallacy |
| Pramāṇa tagging | 5 min | Label each sentence’s support |
| Debate mode detect | 5 min | vāda/jalpa/vitaṇḍā |
| Nirṇaya writeup | 15 min | Decision record |

---

## 12. 30-Day Skill Arc

| Week | Goal | Proof |
|------|------|-------|
| 1 | Memorize 16 padārthas + 4 pramāṇas | Closed-book table |
| 2 | Write 10 five-member proofs | Notebook |
| 3 | Fallacy casebook (20 items) | Tagged errors |
| 4 | Full AI/eval audit report | 3-page nirṇaya |

---

## 13. Templates

### 13.1 Argument card

```
PRATIJÑĀ:
HETU:
VYĀPTI:
DṚṢṬĀNTA:
UPANAYA:
NIGAMANA:
ATTACK SURFACE (possible hetvābhāsa):
PRAMĀṆA BASIS:
```

### 13.2 Meeting hygiene

```
Mode: VĀDA only
Definitions locked at T0
Evidence log open
Nigraha watch: no chala, no thesis shift
End state: nirṇaya OR explicit saṃśaya with experiments
```

---

## 14. Exercises

1. Convert a news claim into five avayavas; mark missing parts.  
2. Take a model leaderboard screenshot; write three possible hetvābhāsas.  
3. Role-play jalpa for 5 minutes, then rewrite the same dispute as vāda.  
4. Map a UC troubleshooting tree to pramāṇa types (log=?, user report=?).  
5. Create a personal “āpta list” (trusted sources) and a “non-āpta list.”  

---

## 15. Source Anchors

- Gautama — Nyāya-sūtra  
- Vātsyāyana — Bhāṣya  
- Uddyotakara, Vācaspati, Udayana (lineage study)  
- Later Navya-Nyāya manuals (for definition tech)  
- See WISDOM-TRADITION-SOURCES.md for editions  

---

## 16. Closing Maxim (INVENTION)

> **No hetu, no heat.**  
> **No dṛṣṭānta, no trust.**  
> **No nirṇaya, no merge.**  

*Speak to establish, not to win.*  

---

**Pack version:** 1.0 · CYPHER0X9 / cipher0x9 · MIT
