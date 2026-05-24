"use client";

import { useState, useTransition } from "react";
import { ArrowRight, GaugeCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  briefMaturity,
  briefObjectives,
  briefSurfaces,
  briefTimelines,
} from "@/lib/site-data";
import type { BriefResponse } from "@/lib/brief-engine";

type PlannerForm = {
  company: string;
  team: string;
  objective: string;
  surface: string;
  timeline: string;
  maturity: string;
  stakeholders: string;
};

const stakeholderOptions = ["10-40", "40-80", "80-150", "150+"] as const;

const initialForm: PlannerForm = {
  company: "",
  team: "Operations + leadership",
  objective: briefObjectives[0],
  surface: briefSurfaces[0],
  timeline: briefTimelines[1],
  maturity: briefMaturity[0],
  stakeholders: stakeholderOptions[1],
};

export function ContactPlanner() {
  const [form, setForm] = useState<PlannerForm>(initialForm);
  const [result, setResult] = useState<BriefResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function updateField<Key extends keyof PlannerForm>(
    key: Key,
    value: PlannerForm[Key]
  ) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    startTransition(async () => {
      try {
        const response = await fetch("/api/brief", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        const payload = (await response.json()) as BriefResponse | { message?: string };

        if (!response.ok) {
          throw new Error(
            "message" in payload && payload.message
              ? payload.message
              : "Unable to build a launch brief right now."
          );
        }

        setResult(payload as BriefResponse);
      } catch (submissionError) {
        setResult(null);
        setError(
          submissionError instanceof Error
            ? submissionError.message
            : "Unable to build a launch brief right now."
        );
      }
    });
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
      <form
        onSubmit={handleSubmit}
        className="glass-panel grid gap-5 rounded-[2rem] p-6 md:p-8"
      >
        <div className="space-y-2">
          <p className="eyebrow">Interactive brief builder</p>
          <h2 className="text-2xl font-semibold text-white">
            Build a first-pass rollout plan.
          </h2>
          <p className="copy-muted max-w-lg">
            Share the shape of the problem and we will return a launch window,
            priority tracks, and the kind of experience VizStats should build
            first.
          </p>
        </div>

        <label className="grid gap-2">
          <span className="text-sm text-white/72">Company</span>
          <input
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="NorthGrid, Brightpath, Aster Freight..."
            className="rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-[#59d8ff]/60"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm text-white/72">Primary team</span>
          <input
            value={form.team}
            onChange={(event) => updateField("team", event.target.value)}
            className="rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-[#59d8ff]/60"
          />
        </label>

        <div className="grid gap-5 md:grid-cols-2">
          <SelectField
            label="Objective"
            value={form.objective}
            options={briefObjectives}
            onChange={(value) => updateField("objective", value)}
          />
          <SelectField
            label="Surface"
            value={form.surface}
            options={briefSurfaces}
            onChange={(value) => updateField("surface", value)}
          />
          <SelectField
            label="Timeline"
            value={form.timeline}
            options={briefTimelines}
            onChange={(value) => updateField("timeline", value)}
          />
          <SelectField
            label="Data maturity"
            value={form.maturity}
            options={briefMaturity}
            onChange={(value) => updateField("maturity", value)}
          />
          <SelectField
            label="Stakeholders"
            value={form.stakeholders}
            options={stakeholderOptions}
            onChange={(value) => updateField("stakeholders", value)}
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            type="submit"
            size="lg"
            className="rounded-full bg-white px-5 text-slate-950 hover:bg-white/88"
            disabled={isPending}
          >
            {isPending ? "Building brief..." : "Generate launch plan"}
            <ArrowRight className="size-4" />
          </Button>
          <p className="text-sm text-white/48">
            No generic sales script. Just a real first pass.
          </p>
        </div>
      </form>

      <div className="glass-panel rounded-[2rem] p-6 md:p-8">
        {error ? (
          <div className="space-y-3">
            <p className="eyebrow">Try again</p>
            <h3 className="text-2xl font-semibold text-white">{error}</h3>
            <p className="copy-muted">
              The planner needs a company name and a little context to return a
              useful recommendation.
            </p>
          </div>
        ) : result ? (
          <div className="space-y-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-3">
                <p className="eyebrow">Launch recommendation</p>
                <h3 className="text-3xl font-semibold text-white">
                  {result.launchWindow}
                </h3>
                <p className="copy-muted max-w-2xl">{result.summary}</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.03] px-5 py-4 text-right">
                <p className="text-xs uppercase tracking-[0.26em] text-white/45">
                  Readiness score
                </p>
                <p className="mt-1 text-4xl font-semibold text-white">
                  {result.readinessScore}
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <section className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <Sparkles className="size-4 text-[#59d8ff]" />
                  <h4 className="font-semibold">Priority tracks</h4>
                </div>
                <ul className="grid gap-3">
                  {result.recommendedTracks.map((track) => (
                    <li
                      key={track}
                      className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-white/74"
                    >
                      {track}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <GaugeCircle className="size-4 text-[#9ce477]" />
                  <h4 className="font-semibold">Launch phases</h4>
                </div>
                <ul className="grid gap-3">
                  {result.milestones.map((milestone) => (
                    <li
                      key={milestone.label}
                      className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-white/74"
                    >
                      <p className="mb-1 text-xs uppercase tracking-[0.26em] text-white/38">
                        {milestone.label}
                      </p>
                      <p>{milestone.detail}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.26em] text-white/38">
                North star
              </p>
              <p className="mt-3 text-lg leading-8 text-white/84">
                {result.northStar}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {result.stack.map((item) => (
                  <span key={item} className="metric-pill">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div className="space-y-5">
            <p className="eyebrow">What comes back</p>
            <h3 className="text-3xl font-semibold text-white">
              A pointed first draft for the room you should build.
            </h3>
            <p className="copy-muted max-w-2xl">
              The planner returns a launch window, the highest-value tracks to
              ship first, and a north-star outcome we can design around.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                "Launch pacing grounded in the scope you chose.",
                "Priority tracks aligned to executives, operators, or clients.",
                "A room concept that balances polish with operational reality.",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-white/70">
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
};

function SelectField({ label, value, options, onChange }: SelectFieldProps) {
  return (
    <label className="grid gap-2">
      <span className="text-sm text-white/72">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-[#59d8ff]/60"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#08111a] text-white">
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
