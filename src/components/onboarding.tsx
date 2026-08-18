"use client";

import Link from "next/link";
import { useState } from "react";
import { completeOnboarding, setFocusSkill } from "@/lib/progress";
import { useProgress } from "@/lib/use-progress";
import { Button, Panel } from "./ui";

export function Onboarding({ onDone }: { onDone?: () => void }) {
  const { state, commit } = useProgress();
  const [step, setStep] = useState(0);
  const [skill, setSkill] = useState(state.focusSkill ?? "");

  if (state.onboardingDone) return null;

  const steps = [
    {
      title: "This is not a course to binge",
      body: "Forty short rooms teach one method: read once, recall from memory, prove with a real artifact, review on a schedule. Ten honest minutes beats an hour of highlighting.",
    },
    {
      title: "Pick one skill to prove",
      body: "The campus is the method. You still need a live skill — SIP, Sanskrit, math, writing, anything. Name it now. You will run it through the 90-day path later.",
    },
    {
      title: "Your first hour",
      body: "Mandala 01 → 02 → 03 → 04, then Review. Write before you reveal. Rate honestly. Easy means too easy — do not lie to the scheduler.",
    },
  ];

  const current = steps[step];
  if (!current) return null;

  return (
    <Panel className="mb-10 border-saffron/30 p-6 shadow-[0_0_60px_rgba(196,92,38,0.08)]">
      <p className="text-xs uppercase tracking-[0.25em] text-saffron">
        First visit · step {step + 1} of {steps.length}
      </p>
      <h2 className="mt-2 font-serif text-3xl text-palm">{current.title}</h2>
      <p className="mt-3 max-w-2xl text-palm-dim">{current.body}</p>

      {step === 1 ? (
        <input
          value={skill}
          onChange={(event) => setSkill(event.target.value)}
          placeholder="e.g. SIP troubleshooting, Sanskrit, TypeScript, public speaking"
          className="mt-4 w-full max-w-xl rounded-xl border border-palm/15 bg-ink p-3 text-palm outline-none focus:border-gold"
        />
      ) : null}

      <div className="mt-6 flex flex-wrap gap-3">
        {step > 0 ? (
          <Button variant="ghost" onClick={() => setStep((value) => value - 1)}>
            Back
          </Button>
        ) : null}
        {step < steps.length - 1 ? (
          <Button
            onClick={() => {
              if (step === 1 && skill.trim()) commit(setFocusSkill(state, skill));
              setStep((value) => value + 1);
            }}
            disabled={step === 1 && skill.trim().length < 2}
          >
            Continue
          </Button>
        ) : (
          <Button
            onClick={() => {
              commit(completeOnboarding(state));
              onDone?.();
            }}
          >
            Enter campus
          </Button>
        )}
        <Link href="/start/" className="self-center text-sm text-palm-dim hover:text-gold">
          Full guide →
        </Link>
      </div>
    </Panel>
  );
}
