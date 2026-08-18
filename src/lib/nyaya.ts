/**
 * Nyāya pañcāvayava — five-membered public proof.
 * Used as a gate: a claim is not knowledge until it can be shown to another mind.
 */
export type Syllogism = {
  pratijna: string; // proposition
  hetu: string; // reason
  udaharana: string; // example with known vyāpti
  upanaya: string; // application
  nigamana: string; // conclusion
};

export type SyllogismIssue = {
  field: keyof Syllogism;
  message: string;
};

const MIN = 12;

export function auditSyllogism(s: Syllogism): SyllogismIssue[] {
  const issues: SyllogismIssue[] = [];
  const fields: (keyof Syllogism)[] = [
    "pratijna",
    "hetu",
    "udaharana",
    "upanaya",
    "nigamana",
  ];

  for (const field of fields) {
    const value = s[field].trim();
    if (value.length < MIN) {
      issues.push({
        field,
        message: `${field} is too thin — write a full clause, not a slogan.`,
      });
    }
  }

  if (
    s.pratijna.trim() &&
    s.nigamana.trim() &&
    normalize(s.pratijna) !== normalize(s.nigamana) &&
    !normalize(s.nigamana).includes(normalize(s.pratijna).slice(0, 18))
  ) {
    issues.push({
      field: "nigamana",
      message:
        "Conclusion should restate the proposition. If they drift, the proof changed mid-air.",
    });
  }

  if (/\b(always|never|everyone|no one)\b/i.test(s.pratijna) && !s.udaharana.includes("except")) {
    issues.push({
      field: "pratijna",
      message:
        "Universal claim with no exception clause — Nyāya treats unguarded universals as easy to defeat.",
    });
  }

  return issues;
}

export function isSound(s: Syllogism): boolean {
  return auditSyllogism(s).length === 0;
}

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\u0900-\u097F]+/g, " ").trim();
}
