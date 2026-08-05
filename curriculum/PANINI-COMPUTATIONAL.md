# PĀṆINI COMPUTATIONAL — Aṣṭādhyāyī as Formal System
## Ardham Shastra Curriculum Pack 02 · CYPHER0X9 · MIT · tat tvam asi

> Sanskrit grammar as the world's most sophisticated pre-modern rewrite system. This pack maps Aṣṭādhyāyī architecture to computational linguistics, formal language theory, and 2026 Sanskrit NLP — without claiming Pāṇini “invented Python.”

**Labels:** SOURCE-FAITHFUL · BRIDGE · INVENTION  
**Related:** NYAYA-LOGIC-DEEP.md · WISDOM-TRADITION-SOURCES.md · EVIDENCE-REGISTER.md

---

## 0. Why This Matters for Mastery

| Learner | Gain |
|---------|------|
| Linguist | Formal elegance of rule interaction |
| CS student | Rewrite systems, meta-rules, ordered application |
| AI engineer | Grammar engines, morphological analyzers, eval design |
| Sanskrit student | How to *compute* forms, not only memorize them |

---

## 1. Corpus Architecture (SOURCE-FAITHFUL framing)

### 1.1 The machine and its fuel

| Component | Role | Approx. nature |
|-----------|------|----------------|
| **Aṣṭādhyāyī** | Generative rule system (~4000 sūtras) | Ordered, meta-ruled rewrite grammar |
| **Dhātupāṭha** | Verbal roots | Lexicon of bases |
| **Gaṇapāṭha** | Word/class lists | Exception & class membership |
| **Uṇādisūtras** | Primary nominal derivation (aux) | Extended derivational rules |
| **Lingānuśāsana** etc. | Gender etc. | Ancillary |

**BRIDGE:** Think *compiler front-end*: lexicon + ordered rewrite rules + meta-control.

### 1.2 Eight books (adhyāya) — functional map (BRIDGE overview)

Not a chapter-by-chapter substitute for study; a **navigation schema**:

1. **Saṃjñā / paribhāṣā zone** — technical terms, meta-definitions  
2–3. **Derivational morphology** — primary/secondary suffixes, tenses, etc.  
4–5. **Nominal morphology** — taddhita, compounds related zones  
6–8. **Phonology / sandhi / accent / finishing operations** — often late application zones  

Exact sūtra placement is for primary text study; this pack focuses on *computational behavior*.

---

## 2. Sūtra as Instruction

### 2.1 Minimal form

A sūtra is an ultra-compressed rule. Expansion requires:

1. **Anuvṛtti** — carry-forward of words from previous sūtras  
2. **Adhikāra** — governing headings that scope a stretch of rules  
3. **Paribhāṣā** — meta-interpretive rules  
4. **Commentary tradition** — Kāśikā, Patañjali, later Navya analyses  

### 2.2 Example pattern (pedagogical, BRIDGE)

```
IF environment E matches
AND input form matches pattern P
THEN replace / affix / mark according to operation O
UNLESS blocked by higher-priority exception
```

**INVENTION mnemonic:** *Match → Operate → Check asiddha → Yield*.

---

## 3. Pratyāhāra — Abbreviation Algebra

### 3.1 Śiva-sūtras (Maheśvara-sūtras)

The pratyāhāra system compresses sound classes. From the Śiva-sūtra list, a pratyāhāra is typically:

```
first_sound + marker_it → class of sounds between them (excluding markers)
```

### 3.2 Computational view (BRIDGE)

Pratyāhāras ≈ **named character classes / phoneme sets** in a morphology DSL:

```
# Pseudocode INVENTION — not a real parser
class Pratyahara:
    def expand(self, start: Phone, it_marker: Marker) -> Set[Phone]:
        return phones_between(start, it_marker)

# Example conceptual: aC ≈ vowels (traditional teaching expansion)
# Exact expansions must be checked against Śiva-sūtras + tradition
```

### 3.3 Why it matters

- Massive **compression** of rule text  
- **Set-closed** phonological generalizations  
- Natural fit for finite-state / set-based implementations  

---

## 4. Meta-Rule Stack

### 4.1 Utsarga / Apavāda (general / exception)

| Term | Meaning | Computation analogy |
|------|---------|---------------------|
| **Utsarga** | General rule | Default production |
| **Apavāda** | Exception | Higher-priority override |

**Principle (classical):** Exception blocks general where it applies.  
**CS analogy:** specific rule before general; or exception tables.

### 4.2 Siddha / Asiddha

**Asiddhatva:** certain rules are treated as **not effected** for the purpose of other rules — blocking feeding/bleeding interactions.

**BRIDGE to CS:**

- Rule modules with **visibility barriers**  
- Ordered strata (cf. lexical phonology intuitions — careful: analogy only)  
- Transaction isolation: changes not yet “committed” for some listeners  

### 4.3 Anuvṛtti

Words continue into subsequent sūtras until interrupted — like **implicit parameters** in a sequential DSL.

```
# Conceptual
context = {}
for sutra in stream:
    context = update_anuvrtti(context, sutra)
    apply(sutra, context)
```

### 4.4 Adhikāra

A heading sūtra scopes a domain: “rules under X apply with governing condition G.”

**Analogy:** namespace / with-block / section pragma.

### 4.5 Other interaction principles (names to learn)

Students should know these *as research targets* (details in commentaries):

- **nitya / anitya** considerations in conflict  
- **antaraṅga / bahiraṅga** (internal vs external)  
- **pūrvatrāsiddham** style statements (Book 8 related phenomena)  
- **vipratiṣedhe paraṃ kāryam**-type conflict maxims (as taught in tradition)

**Label carefully:** exact conflict resolution is **commentary-dependent**; mark student notes SOURCE-FAITHFUL only when tied to a cited sūtra + accepted interpretation.

---

## 5. Derivation as Rewrite Derivation

### 5.1 Abstract generative pipeline (BRIDGE)

```
Intent (meaning/root + morphosyntactic features)
    → Select dhātu / prātipadika
    → Affixation (kṛt, taddhita, tiṄ, sup, etc.)
    → Morphophonemic operations
    → Sandhi / final phonological adjustments
    → Surface form (+ accent where modeled)
```

### 5.2 Formal language theory placement (careful BRIDGE)

| Claim | Status |
|-------|--------|
| Aṣṭādhyāyī uses ordered rule application with exceptions | SOURCE-FAITHFUL to scholarly consensus framing |
| It is “just CFG” | **False / oversimplified** — too weak a slogan |
| It is a sophisticated **string rewriting / semi-Thue-like** system with meta-control | BRIDGE accepted in computational Indology |
| Equivalent to a modern HPSG implementation | INVENTION if claimed as identity — do not |

**Teaching line:** *More than a phrase-structure grammar; closer to a programmed rewrite engine with lexicon.*

### 5.3 Feeding and bleeding

| Interaction | Definition | Example intuition |
|-------------|------------|-------------------|
| Feeding | Rule A creates environment for B | A enables B |
| Bleeding | Rule A destroys environment for B | A prevents B |
| Counterfeeding/bleeding | Order blocks expected interaction | Opacity |

Asiddhatva and ordering create **opaque** derivations — a known challenge for naive SPE-style or unordered OT slogans.

---

## 6. Implementation Architectures

### 6.1 Historical computational lineage (BRIDGE survey)

| Approach | Idea | Strength | Weakness |
|----------|------|----------|----------|
| FST morphology | Finite-state transducers | Fast analysis | Hard meta-rules |
| Rewriting engines | Explicit sūtra order | Faithful control | Engineering complexity |
| Logic programming | Rules as clauses | Declarative | Performance / opacity |
| Hybrid NLP 2020s | Neural + symbolic | Coverage | Faithfulness loss |
| LLMs 2024–2026 | Generate/analyze forms | Convenience | Hallucinated forms |

### 6.2 Shibuya-style / academic engine pattern (BRIDGE)

Computational Pāṇinian engines typically need:

1. **Sūtra database** with dependencies  
2. **Anuvṛtti reconstruction**  
3. **Conflict resolution module**  
4. **Lexicon** (Dhātupāṭha, gaṇas)  
5. **Trace/derivation printer** (for pedagogy & debug)  

**Campus eval idea (INVENTION):** any Sanskrit form generator must emit a **derivation trace** or be marked untrusted for learning.

### 6.3 Minimal engine interface (INVENTION API sketch)

```text
INPUT:
  root: gam
  lakara: laṭ
  purusha: prathama
  vacana: eka
  prayoga: kartari
  # + optional upasargas, pada requirements

OUTPUT:
  surface: gacchati
  trace:
    - select_dhatu gam
    - apply vikaraṇa / lakāra operations ...
    - sandhi ...
  confidence: symbolic | neural-mixed
  evidence: rule_ids[]
```

---

## 7. Analysis vs Generation

| Direction | Task | Hard parts |
|-----------|------|------------|
| **Generation** | Features → form | Rule order, exceptions |
| **Analysis** | Form → features | Ambiguity, sandhi split |
| **Segmentation** | Continuous text → pada | Sandhi explosion |
| **Parsing** | Sentence → relations | Free word order, compounds |

**Compound (samāsa)** analysis is a major NLP bottleneck: recursive, productive, ambiguous.

---

## 8. Sanskrit NLP 2026 Landscape (BRIDGE + dated)

### 8.1 Task checklist for builders

- [ ] Sandhi splitter  
- [ ] Morphological analyzer (with scores)  
- [ ] Stemmer / lemmatizer for IR  
- [ ] Dependency / kāraka parser  
- [ ] Meter (chandas) detector  
- [ ] Named entity for texts  
- [ ] Commentary alignment  
- [ ] Form verifier (reject illegal generations)  

### 8.2 Evaluation metrics that respect the tradition

| Metric | Why |
|--------|-----|
| Exact form match | Strict morphology |
| Feature accuracy | Analysis quality |
| Illegal form rate | Safety for learners |
| Trace completeness | Pedagogical value |
| Ambiguity reporting | Honesty |

**Do not** optimize only BLEU-like scores for morphology.

### 8.3 AI-guru protocol for Pāṇini study (INVENTION)

1. Ask model for form **and** rule justification.  
2. Verify against known paradigms / engine.  
3. Nyāya-check: is the hetu (rule citation) real?  
4. Log errors in personal dhātupāṭha of failures.  

---

## 9. Worked Mini-Cases (Pedagogical)

### 9.1 Why “just concatenate” fails

```
Expected naive: root + suffix
Reality: augments, vowel grades (guṇa/vṛddhi), replacements,
         reduplication, blocking exceptions, sandhi
```

### 9.2 Guṇa / vṛddhi as feature-driven rewrites (BRIDGE)

| Grade | Traditional role | CS view |
|-------|------------------|---------|
| Simple vowel | Base | Identity |
| Guṇa | Strengthening grade | Rewrite table |
| Vṛddhi | Further grade | Rewrite table |

Exact triggers are sūtra-governed — memorize triggers with cards; don't invent tables.

### 9.3 Sandhi as finite-state friendly layer

Many sandhi rules are local and FST-friendly; **global** asiddha interactions less so. Hybrid systems often FST sandhi + procedural morphology core.

---

## 10. Teaching Sequence (90-day module)

| Days | Focus | Proof artifact |
|------|-------|----------------|
| 1–10 | Sounds, Śiva-sūtras, pratyāhāra drills | Expand 20 pratyāhāras cold |
| 11–25 | Technical terms, adhikāra concept | Map 5 adhikāra stretches |
| 26–45 | Noun/verb paradigm generation by hand | 50 forms with rule notes |
| 46–60 | Sandhi intensive | 100 sandhi resolutions |
| 61–75 | Exception hunting (apavāda) | Casebook of 15 exceptions |
| 76–90 | Mini engine or detailed paper trace | Derivation tracer doc |

---

## 11. Comparison Table — Pāṇini vs Modern Formalisms

| Feature | Aṣṭādhyāyī | CFG | FST | OT (classical) | Neural seq2seq |
|---------|------------|-----|-----|----------------|----------------|
| Ordered rules | Yes | N/A | Cascade possible | Ranked constraints | Implicit |
| Exceptions | Explicit apavāda | Extra rules | Priority | Dominate | Soft |
| Meta-rules | Rich | Limited | Limited | Meta-OT rare | None |
| Interpretability | High if traced | High | Medium | Medium | Low |
| Coverage of Sanskrit | Designed for it | Manual | Good morph | Research | Variable |

---

## 12. Common Misconceptions

| Myth | Correction |
|------|------------|
| “Pāṇini wrote a programming language” | Metaphorically rewrite system; not a CPU language |
| “Everything is CFG” | Understates meta-control & phonology |
| “LLM = Pāṇini engine” | LLM lacks guaranteed rule fidelity |
| “No need for commentary” | Anuvṛtti/adhikāra reconstruction needs tradition |
| “One true computational clone exists” | Multiple partial implementations; compare traces |

---

## 13. Exercises

1. Expand five pratyāhāras from Śiva-sūtras without notes.  
2. Take one surface form; list **feature bundle** then regenerate.  
3. Find one utsarga–apavāda pair in your textbook; write the priority.  
4. Implement a **toy** sandhi FST for 5 rules only; document failures.  
5. Ask an AI for `√kṛ` forms; verify 10; compute illegal form rate.  
6. Write a one-page BRIDGE essay: asiddhatva ≈ transaction isolation (label INVENTION where stretched).  

---

## 14. Source Anchor List (see also WISDOM-TRADITION-SOURCES.md)

- Pāṇini — Aṣṭādhyāyī  
- Patañjali — Mahābhāṣya  
- Kātyāyana — vārttikas  
- Kāśikā — commentary access  
- Modern computational Indology papers (Cardona, Kiparsky discussions, Hyman, Scharf, etc. — cite editions carefully)  

**Campus honesty:** When you map to CS, mark **BRIDGE**. When you invent pedagogy, mark **INVENTION**.

---

## 15. Closing

Pāṇini’s genius is not “old syntax.” It is **controlled generativity under extreme compression** — a masterpiece of information architecture. Study it as:

1. Language  
2. Logic of rules  
3. Engineering of exceptions  
4. Ethics of precision  

*Correct form is a moral of clarity.*  

---

**Pack version:** 1.0 · CYPHER0X9 / cipher0x9 · MIT · Offline-first
