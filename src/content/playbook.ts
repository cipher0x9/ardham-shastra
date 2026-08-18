export const LOOP = [
  { id: "expose", sanskrit: "śravaṇa", title: "Expose", detail: "One canonical source. No playlist grazing." },
  { id: "engage", sanskrit: "manana", title: "Engage", detail: "Annotate, question, rebuild the map in your words." },
  { id: "retrieve", sanskrit: "svādhyāya", title: "Retrieve", detail: "Close the book. Produce it. FSRS-6 schedules the next ask." },
  { id: "apply", sanskrit: "abhyāsa", title: "Apply", detail: "A real artifact — not a highlight, a thing that exists." },
  { id: "prove", sanskrit: "pramāṇa", title: "Prove", detail: "Nyāya five-step. RTMA. If you cannot show it, you do not have it." },
  { id: "teach", sanskrit: "adhyāpana", title: "Teach", detail: "One living mind. Transmission is the final exam." },
] as const;

export const SEVEN = [
  { n: 1, title: "Map", detail: "Name the domain as a DAG of primitives. Cut tourist content." },
  { n: 2, title: "Grammar", detail: "Pāṇini move: finite rules that generate infinite cases. Utsarga then apavāda." },
  { n: 3, title: "Reason", detail: "Nyāya move: what counts as evidence, what is a fake reason (hetvābhāsa)." },
  { n: 4, title: "Practice", detail: "Ericsson loop at the edge of ability. Interleave. Productive struggle." },
  { n: 5, title: "Prove", detail: "RTMA — Run, Trace, Metric, Artifact. LICC — Leg, ID, Counter, Capture." },
  { n: 6, title: "Space", detail: "FSRS-6, not vibes. Expanding retrieval across sleep cycles." },
  { n: 7, title: "Teach", detail: "Guru-kula debt: the method continues only if you plant it." },
] as const;

export const NINETY = [
  { phase: "Map & grammar", days: "1–7", focus: "Two canonical sources. Dependency DAG. Vocabulary of the craft." },
  { phase: "Core practice", days: "8–21", focus: "Daily 45–90 min. Retrieval before re-reading. One sandbox." },
  { phase: "Exceptions", days: "22–35", focus: "Apavāda cases. Interleaved problems. Error log." },
  { phase: "Build the thing", days: "36–49", focus: "One complete artifact that a stranger could use." },
  { phase: "Teach & friction", days: "50–63", focus: "Explain publicly. Collect objections. Patch the grammar." },
  { phase: "Edge of domain", days: "64–77", focus: "Hard problems. Failure modes. Adjacent fields." },
  { phase: "Capstone", days: "78–90", focus: "Portfolio proof + teach one person the full loop." },
] as const;

export const RTMA = [
  { id: "run", title: "Run", detail: "Execute the skill under time, not in notes." },
  { id: "trace", title: "Trace", detail: "Show the path, not only the answer." },
  { id: "metric", title: "Metric", detail: "A number that would move if you improved." },
  { id: "artifact", title: "Artifact", detail: "A file, recording, proof, or taught session that exists without you." },
] as const;

export const LICC = [
  { id: "leg", title: "Leg", detail: "Which claim does this evidence actually stand under?" },
  { id: "id", title: "ID", detail: "Can a stranger find the source in 30 seconds?" },
  { id: "counter", title: "Counter", detail: "What would falsify this? Write it before you celebrate." },
  { id: "capture", title: "Capture", detail: "Store the proof where future-you can retrieve it." },
] as const;
