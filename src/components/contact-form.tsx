"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";

type FormState = {
  name: string;
  email: string;
  organization: string;
  projectType: string;
  timeline: string;
  message: string;
};

type SuccessPayload = {
  message: string;
  nextStep: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  organization: "",
  projectType: "Public data platform",
  timeline: "In the next quarter",
  message: "",
};

const projectTypes = [
  "Public data platform",
  "Scrollytelling investigation",
  "Information hub",
  "Investigative database",
] as const;

const timelines = [
  "In the next month",
  "In the next quarter",
  "This year",
  "Still defining scope",
] as const;

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [success, setSuccess] = useState<SuccessPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function updateField<Key extends keyof FormState>(
    key: Key,
    value: FormState[Key]
  ) {
    setFormState((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        });

        const payload = (await response.json()) as
          | SuccessPayload
          | { message?: string };

        if (!response.ok) {
          throw new Error(
            "message" in payload && payload.message
              ? payload.message
              : "Something went wrong while sending your project note."
          );
        }

        setSuccess(payload as SuccessPayload);
        setFormState(initialState);
      } catch (submissionError) {
        setError(
          submissionError instanceof Error
            ? submissionError.message
            : "Something went wrong while sending your project note."
        );
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card space-y-5 p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <FormField
          label="Name"
          htmlFor="name"
          value={formState.name}
          onChange={(value) => updateField("name", value)}
        />
        <FormField
          label="Email"
          htmlFor="email"
          type="email"
          value={formState.email}
          onChange={(value) => updateField("email", value)}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FormField
          label="Organization"
          htmlFor="organization"
          value={formState.organization}
          onChange={(value) => updateField("organization", value)}
        />
        <SelectField
          label="Project type"
          value={formState.projectType}
          onChange={(value) => updateField("projectType", value)}
          options={projectTypes}
        />
      </div>

      <SelectField
        label="Timing"
        value={formState.timeline}
        onChange={(value) => updateField("timeline", value)}
        options={timelines}
      />

      <label className="grid gap-2">
        <span className="text-sm font-medium text-slate-700">
          What are you trying to make?
        </span>
        <textarea
          id="message"
          value={formState.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-36 rounded-[1.25rem] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
          placeholder="Tell us about the audience, the data, and what needs to be true at launch."
        />
      </label>

      {error ? (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      {success ? (
        <div className="rounded-[1.25rem] border border-emerald-200 bg-emerald-50 px-4 py-4">
          <p className="text-sm font-semibold text-emerald-900">
            {success.message}
          </p>
          <p className="mt-2 text-sm text-emerald-800">{success.nextStep}</p>
        </div>
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          We take on a small number of engagements each year.
        </p>
        <Button
          type="submit"
          size="lg"
          className="rounded-full bg-slate-950 px-6 text-white hover:bg-slate-800"
          disabled={isPending}
        >
          {isPending ? "Sending..." : "Tell us about your project"}
        </Button>
      </div>
    </form>
  );
}

type FormFieldProps = {
  label: string;
  htmlFor: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email";
};

function FormField({
  label,
  htmlFor,
  value,
  onChange,
  type = "text",
}: FormFieldProps) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input
        id={htmlFor}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded-[1.25rem] border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
      />
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
};

function SelectField({
  label,
  value,
  onChange,
  options,
}: SelectFieldProps) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded-[1.25rem] border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
