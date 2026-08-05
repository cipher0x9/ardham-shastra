# VAIŚEṢIKA–SĀṂKHYA MAPS — Ontology to Graphs, Embeddings, Stacks
## Ardham Shastra Curriculum Pack 04 · CYPHER0X9 · MIT · tat tvam asi

> Category theory of the classical world — not modern mathematical category theory — mapped to **knowledge graphs**, **embedding spaces**, and **system stack layers**. Precision about what is SOURCE-FAITHFUL vs BRIDGE is mandatory here; these mappings are power tools, not identity claims.

**Related:** NYAYA-LOGIC-DEEP.md · AI-LEARNING-2026.md · EVIDENCE-REGISTER.md

---

## 0. Two Systems, Two Jobs

| System | Core job | Classic output |
|--------|----------|----------------|
| **Vaiśeṣika** (Kaṇāda) | Padārtha ontology — what kinds of things exist / how predication works | 6 (later 7) categories |
| **Sāṃkhya** (Īśvarakṛṣṇa etc.) | Tattva evolution — how experience/world unfolds from principles | 25 tattvas |

**BRIDGE rule:** Vaiśeṣika ≈ *schema design*. Sāṃkhya ≈ *generative stack / pipeline*.

---

## 1. Vaiśeṣika Padārthas

### 1.1 Six / Seven categories

| # | Padārtha | Gloss | KG / systems analogy (BRIDGE) |
|---|----------|-------|-------------------------------|
| 1 | **Dravya** | Substance | Entity / node type (particular) |
| 2 | **Guṇa** | Quality | Property / attribute |
| 3 | **Karma** | Action / motion | Event / verb / transition |
| 4 | **Sāmānya** | Universality | Class / type / ontology class |
| 5 | **Viśeṣa** | Particularity / ultimate distinguisher | Instance identity / primary key spirit |
| 6 | **Samavāya** | Inherence | Necessary binding edge (not loose association) |
| 7 | **Abhāva** (later emphasis) | Absence / negation | Negative facts / closed-world gaps |

**Label:** Names and classical roles SOURCE-FAITHFUL to tradition; table’s right column is **BRIDGE/INVENTION pedagogy**.

### 1.2 Dravya list (classical nine often taught)

Earth, water, fire, air, ether (ākāśa), time, space, self (ātman), mind (manas) — as *substance types* in the system’s physics-psychology.

**Do not** flatten to modern chemistry. Treat as **ontological roles** in a historical science.

### 1.3 Guṇa examples (illustrative)

Color, taste, number, contact, disjunction, remoteness, cognition-related qualities in various enumerations — used to show **property attachment**.

### 1.4 Samavāya vs saṃyoga (critical distinction)

| Relation | Nature | Example intuition | Graph modeling |
|----------|--------|-------------------|----------------|
| **Samavāya** | Inherence; intimate | Quality in substance; whole-part of certain kinds | Edge typed `inheres_in`, often non-optional |
| **Saṃyoga** | Contact; separable | Cup on table | Edge typed `contacts`, contingent |

**BRIDGE:** Bad schemas treat all edges as saṃyoga-like. Robust ontologies mark **mandatory vs contingent** structure.

---

## 2. Worked Ontology Examples (Multi-domain)

### 2.1 Telecom call (UC)

| Padārtha | Instance |
|----------|----------|
| Dravya | Call leg object, endpoint device |
| Guṇa | Codec, MOS, jitter value |
| Karma | INVITE sent, media renegotiated |
| Sāmānya | Class `SipSession` |
| Viśeṣa | This Call-ID + From-tag + To-tag bundle |
| Samavāya | Jitter measurement inhering in that media stream interval |
| Abhāva | Absence of 200 OK within timer |

### 2.2 Neural network training run

| Padārtha | Instance |
|----------|----------|
| Dravya | Model checkpoint file, GPU |
| Guṇa | Loss, LR, temperature |
| Karma | Backward pass, weight update |
| Sāmānya | Architecture class `Transformer` |
| Viśeṣa | Run UUID |
| Samavāya | Parameters inhering in that model instance |
| Abhāva | Missing validation labels |

### 2.3 Legal case file

| Padārtha | Instance |
|----------|----------|
| Dravya | Person, document |
| Guṇa | Date, status code |
| Karma | Filing, hearing |
| Sāmānya | Contract type |
| Viśeṣa | Case number |
| Samavāya | Signature binding to instrument (legal fiction careful!) |
| Abhāva | Non-filing by deadline |

---

## 3. Knowledge Graph Design from Vaiśeṣika (INVENTION method)

### 3.1 Schema checklist

```
[ ] Entity types (dravya classes) listed
[ ] Properties (guṇa) typed with ranges
[ ] Events (karma) as first-class, not only edges
[ ] Taxonomies (sāmānya hierarchy) explicit
[ ] Identity keys (viśeṣa strategy) documented
[ ] Inherence vs association edges separated
[ ] Negative facts policy (abhāva) chosen: open/closed world
```

### 3.2 RDF / property-graph sketch

```text
:Call_42 a :SipSession .                    # sāmānya membership
:Call_42 :hasCallId "abc-..." .             # viśeṣa-ish key
:Call_42 :jitterMs 12 .                     # guṇa
:Event_9 a :InviteSent ; :about :Call_42 .  # karma
:JitterReading_7 :inheresIn :MediaStream_3 . # samavāya-like
```

### 3.3 Common modeling sins

1. Encoding events only as edge timestamps without event nodes  
2. No identity strategy (duplicate entities)  
3. Overloading one edge label for contact and essence  
4. Silent absence (treating unknown as false without policy)  

---

## 4. Embeddings Mapping (Careful BRIDGE)

### 4.1 What embeddings do

Vectors place tokens/entities so that **geometry ≈ statistical affinity**.

### 4.2 Mapping table

| Classical | Embedding reading | Risk if over-identified |
|-----------|-------------------|-------------------------|
| Sāmānya | Cluster / linear subspace for a class | Classes aren't only clusters |
| Viśeṣa | Point identity / ID embedding | Collision, aliasing |
| Guṇa | Dimensions / attributes | Attributes entangle |
| Karma | Trajectory / verb vectors / dynamics | Dynamics under-specified |
| Samavāya | Strong binding constraints | Soft similarity ≠ inherence |
| Abhāva | Hard negatives / contrastive gaps | Absence ≠ far vector always |

**Honest line:** Embeddings are powerful **similarity engines**, not full padārtha metaphysics.

### 4.3 Contrastive learning as abhāva practice (INVENTION)

Hard negatives teach the model what a thing is *not* — a computational cousin of knowing absences.

---

## 5. Sāṃkhya Twenty-Five Tattvas

### 5.1 Core dual

| Principle | Role |
|-----------|------|
| **Puruṣa** | Consciousness / witnessing principle (plural in classical Sāṃkhya) |
| **Prakṛti** | Primordial nature; unmanifest ground of evolutes |

### 5.2 Evolution sketch (standard teaching order)

```
Prakṛti
  → Mahat / Buddhi (intellect)
    → Ahaṃkāra (ego-principle)
       ├─ Sāttvika stream → manas, sense organs, action organs
       ├─ Tāmasa stream → tanmātras → five gross elements
       └─ (presentations vary slightly by manual)
+ Puruṣa (not a product of prakṛti)
= 25 tattvas enumeration in classical lists
```

**Exact lists:** study Īśvarakṛṣṇa’s *Sāṃkhya-kārikā* and commentaries. Do not invent an extra tattva.

### 5.3 Guṇas of prakṛti

| Guṇa | Tendency | Systems metaphor (BRIDGE) |
|------|----------|---------------------------|
| **Sattva** | Clarity, lightness | Observability, clean signals |
| **Rajas** | Activity, drive | Throughput, change rate |
| **Tamas** | Inertia, obscuration | Latency, tech debt, cache staleness |

**INVENTION:** ops health dashboard can be jokingly “guṇa-balanced” — label as pedagogy, not doctrine.

---

## 6. Stack-Layer Mapping (Campus Signature BRIDGE)

Ardham / Akashic campus often maps Sāṃkhya-like layering to engineering stacks. **This is BRIDGE/INVENTION**, not classical exegesis.

| Layer metaphor | Engineering example | Failure mode |
|----------------|---------------------|--------------|
| Puruṣa | Human intent / user consciousness of purpose | Building without purpose |
| Buddhi | Policy / planning / architecture decision | Wrong design |
| Ahaṃkāra | Service identity / auth principal | Identity confusion |
| Manas | Orchestrator / control plane | Control loops thrash |
| Jñānendriya | Telemetry sensors | Blind ops |
| Karmendriya | Actuators / effectors / APIs that *do* | No execution path |
| Tanmātra | Abstract data types / schemas | Schema-less chaos |
| Mahābhūta | Physical compute / network / storage | Hardware limits |

**Use:** teaching systems thinking. **Do not** claim Sāṃkhya authors wrote Kubernetes.

---

## 7. Worked Stack Example — Voice Platform

```
Purpose (puruṣa-side): "THE CALL MUST ALWAYS CONNECT"
Buddhi: routing policy, codec policy, emergency prioritization
Ahaṃkāra: cluster identity, certs, tenant IDs
Manas: CUCM/ICM control logic, SIP dialog control
Sensors: CDR, SIP traces, RTP stats, E911 logs
Actuators: route advance, codec renegotiate, failover
Schemas: SIP headers, SDP, alarm taxonomy
Physics: fiber, power, DSP, radio last mile
```

Diagnosis method: find **highest layer that is still coherent**, then first broken layer below — a top-down tattva walk (INVENTION procedure).

---

## 8. Criticism & Modern Reinterpretation

### 8.1 Historical criticisms (aware, not exhaustive)

- Buddhist and other schools attacked substance metaphysics  
- Sāṃkhya’s dualism debated across Vedānta etc.  
- Empirical science replaced elemental physics content  

### 8.2 What survives as method

| Survive | Drop / historicize |
|---------|---------------------|
| Careful category hygiene | Literal five-element chemistry |
| Relation types (inherence vs contact) | Forced modern physics identity |
| Layered emergence thinking | Claiming scientific priority in bad faith |
| Multi-factor quality analysis (guṇas as lens) | Moralizing people via guṇa stereotypes |

### 8.3 Ethical warning

Ontology maps can be abused to **naturalize hierarchy**. Campus oath: use for clarity and teaching, not oppression.

---

## 9. Crosswalk: Vaiśeṣika × Sāṃkhya × Nyāya

| Need | Prefer |
|------|--------|
| What exists / how predicated | Vaiśeṣika |
| How experience evolves / psychology-cosmology ladder | Sāṃkhya |
| How we know & debate | Nyāya |
| How language generates | Pāṇini |

**Campus synthesis (INVENTION):**  
`Map (Vaiśeṣika) → Generate structure (Sāṃkhya stack) → Prove (Nyāya) → Express (Pāṇini/language)`

---

## 10. Practical Exercises

1. Model your desk as padārthas (15 minutes).  
2. Convert a SQL schema into padārtha labels; fix one samavāya/saṃyoga confusion.  
3. Draw 25 tattvas from memory; check against kārikā list.  
4. Take an outage RCA; rewrite as tattva-layer failure.  
5. Build a 20-node KG with explicit abhāva policy.  
6. Write a one-pager: “Where embeddings fail samavāya.”  

---

## 11. 14-Day Mini-Course

| Day | Task |
|-----|------|
| 1–2 | Memorize 6/7 padārthas + definitions |
| 3–4 | Dravya/guṇa/karma casebook (10 cases) |
| 5–6 | Samavāya vs saṃyoga drills |
| 7 | Abhāva & open/closed world |
| 8–9 | 25 tattvas memorization |
| 10 | Guṇa triad applied to a team process |
| 11–12 | Full stack map for your domain |
| 13 | Criticism essay (honest) |
| 14 | Proof artifact: ontology + stack diagram |

---

## 12. Templates

### 12.1 Entity card

```
Name:
Dravya class:
Guṇas:
Possible karmas:
Sāmānya parents:
Identity (viśeṣa strategy):
Inherence links:
Absences tracked:
```

### 12.2 Layer RCA

```
Symptom:
Highest healthy layer:
First broken layer:
Pramāṇa:
Fix:
Prevention:
```

---

## 13. Source Anchors

- Kaṇāda — Vaiśeṣika-sūtra  
- Praśastapāda and later commentaries  
- Īśvarakṛṣṇa — Sāṃkhya-kārikā  
- Gauḍapāda / Vācaspati commentaries (as studied)  
- See WISDOM-TRADITION-SOURCES.md  

---

## 14. Closing

Categories are **freedom tools**: they free attention from mush. Stacks are **responsibility tools**: they show where agency sits. Keep the maps; keep the humility labels.

*Plant ontologies people can live inside without cages.*  

---

**Pack version:** 1.0 · CYPHER0X9 / cipher0x9 · MIT
