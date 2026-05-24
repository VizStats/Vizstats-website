export type BriefRequest = {
  company: string;
  team: string;
  objective: string;
  surface: string;
  timeline: string;
  maturity: string;
  stakeholders: string;
};

export type BriefResponse = {
  summary: string;
  launchWindow: string;
  readinessScore: number;
  northStar: string;
  recommendedTracks: string[];
  milestones: Array<{
    label: string;
    detail: string;
  }>;
  stack: string[];
};

const objectiveProfiles = {
  "Executive reporting": {
    focus:
      "an executive command surface that explains movement, risk, and the next call to make",
    tracks: [
      "Narrative KPI ribbon with variance context",
      "Weekly leadership pulse generated from live metrics",
      "Board-safe exports with the same source of truth",
    ],
    stack: ["Semantic metric layer", "Narrative annotations", "Presentation export"],
    metric: "leadership confidence in the weekly story",
  },
  "Operations visibility": {
    focus:
      "an operator-first room that surfaces bottlenecks, queue risk, and ownership in real time",
    tracks: [
      "Lane-based operations wall with anomaly cues",
      "Alerting tied to thresholds teams can actually act on",
      "Shift handoff views for supervisors and frontline leads",
    ],
    stack: ["Real-time refresh", "Alert orchestration", "Shift-level role views"],
    metric: "time-to-notice for operational risk",
  },
  "Forecasting and planning": {
    focus:
      "a scenario studio that lets leadership test assumptions before committing to a quarter",
    tracks: [
      "Driver-based forecast views for finance and growth",
      "Scenario compare mode for leadership planning sessions",
      "Regional and segment rollups with confidence framing",
    ],
    stack: ["Scenario model inputs", "Driver tree visualization", "Forecast review workflow"],
    metric: "forecast confidence before planning reviews",
  },
  "Client analytics": {
    focus:
      "a premium client-facing intelligence surface that proves value without exposing internal clutter",
    tracks: [
      "White-label portal patterns with account-level narratives",
      "Usage, performance, and ROI scorecards by segment",
      "Alerting and digests for customer success teams",
    ],
    stack: ["Multi-tenant access model", "Account health scorecards", "Digest automation"],
    metric: "client retention conversations grounded in evidence",
  },
} as const;

const surfaceProfiles = {
  "Single command center":
    "a flagship room optimized for one shared source of focus",
  "Multi-screen operations wall":
    "a distributed wall system built for live standups and handoffs",
  "Client-facing portal":
    "a polished external product that reflects well on every customer conversation",
  "Hybrid executive + ops suite":
    "a layered experience where operators and leadership read the same system at different altitudes",
} as const;

const timelineProfiles = {
  "2 weeks": {
    launchWindow: "14-day sprint",
    milestones: ["Scope the critical view", "Prototype the room", "Launch one decisive workflow"],
    pressure: 9,
  },
  "30 days": {
    launchWindow: "30-day pilot",
    milestones: ["Align the metric story", "Wire integrations", "Launch and train the ritual"],
    pressure: 4,
  },
  "90 days": {
    launchWindow: "90-day platform release",
    milestones: [
      "Define the decision architecture",
      "Build multiple room types",
      "Operationalize governance and adoption",
    ],
    pressure: 0,
  },
} as const;

const maturityProfiles = {
  "Warehouse already in place":
    "Your existing warehouse should let us spend more time on narrative and less on wrangling.",
  "Warehouse plus event stream":
    "You have enough signal depth to support responsive operational surfaces and richer alerts.",
  "Scattered SaaS tools and spreadsheets":
    "We should treat the first phase as both a room design and a simplification project for the underlying signal flow.",
} as const;

function getRequiredValue(value: string | undefined, label: string) {
  const trimmed = value?.trim();

  if (!trimmed) {
    throw new Error(`Please provide a ${label}.`);
  }

  return trimmed;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function buildLaunchBrief(input: Partial<BriefRequest>): BriefResponse {
  const company = getRequiredValue(input.company, "company name");
  const team = getRequiredValue(input.team, "team");
  const objective = getRequiredValue(input.objective, "primary objective");
  const surface = getRequiredValue(input.surface, "surface");
  const timeline = getRequiredValue(input.timeline, "timeline");
  const maturity = getRequiredValue(input.maturity, "data maturity");
  const stakeholders = getRequiredValue(input.stakeholders, "stakeholder count");

  const objectiveProfile =
    objectiveProfiles[objective as keyof typeof objectiveProfiles] ??
    objectiveProfiles["Executive reporting"];
  const surfaceProfile =
    surfaceProfiles[surface as keyof typeof surfaceProfiles] ??
    surfaceProfiles["Single command center"];
  const timelineProfile =
    timelineProfiles[timeline as keyof typeof timelineProfiles] ??
    timelineProfiles["30 days"];
  const maturityNote =
    maturityProfiles[maturity as keyof typeof maturityProfiles] ??
    maturityProfiles["Warehouse already in place"];

  const stakeholderWeight = stakeholders.includes("150")
    ? 6
    : stakeholders.includes("80")
      ? 3
      : 0;

  const readinessScore = clamp(
    92 - timelineProfile.pressure - stakeholderWeight - (maturity.includes("Scattered") ? 6 : 0),
    68,
    96
  );

  return {
    summary: `${company} should launch ${surfaceProfile} for ${team}. The first release should prioritize ${objectiveProfile.focus}, while keeping the interaction model premium, quiet, and fast enough for daily use. ${maturityNote}`,
    launchWindow: timelineProfile.launchWindow,
    readinessScore,
    northStar: `Create a room where ${company} can improve ${objectiveProfile.metric} within a ${timelineProfile.launchWindow.toLowerCase()} without waiting on manual deck assembly.`,
    recommendedTracks: [...objectiveProfile.tracks],
    milestones: timelineProfile.milestones.map((label, index) => ({
      label: `Phase ${index + 1}`,
      detail: label,
    })),
    stack: [
      ...objectiveProfile.stack,
      "Design system for room-scale and laptop-scale views",
      `Launch ritual tailored to ${team}`,
    ],
  };
}
