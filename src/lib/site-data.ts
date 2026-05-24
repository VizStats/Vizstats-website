export const navigation = [
  { href: "/", label: "Overview" },
  { href: "/platform", label: "Platform" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
] as const;

export const homePanels = [
  {
    id: "signal-deck",
    label: "01 / Signal Deck",
    title: "Board-ready narratives backed by live operating truth.",
    description:
      "Replace fragile weekly decks with a calm executive surface that explains what changed, why it matters, and what the team should do next.",
    stats: ["42 live feeds", "6 sec refresh", "3 story layers"],
    tags: ["Executive pulse", "Auto commentary", "Investor-safe exports"],
    gradientClass: "from-[#04111b] via-[#0d2332] to-[#04070a]",
    glowClass: "bg-[#4ad9ff]/25",
  },
  {
    id: "pulse-grid",
    label: "02 / Pulse Grid",
    title: "A wall-sized operating picture for the people inside the work.",
    description:
      "Show bottlenecks, throughput swings, and response queues in a way operators can act on in seconds, not after the standup has already slipped.",
    stats: ["9 team lanes", "17 active alerts", "91% action rate"],
    tags: ["Ops choreography", "SLA visibility", "Incident cues"],
    gradientClass: "from-[#120e09] via-[#271a11] to-[#070707]",
    glowClass: "bg-[#f6a34f]/24",
  },
  {
    id: "forecast-studio",
    label: "03 / Forecast Studio",
    title: "Scenario modeling that makes tomorrow feel less expensive.",
    description:
      "Fuse revenue, supply, usage, and support signals into a forecasting room where leadership can test tradeoffs before the quarter hardens around them.",
    stats: ["12 what-if models", "4 regional views", "28% faster pivots"],
    tags: ["Scenario control", "Driver analysis", "Growth planning"],
    gradientClass: "from-[#07100b] via-[#122319] to-[#040707]",
    glowClass: "bg-[#9ce477]/24",
  },
] as const;

export const platformLayers = [
  {
    name: "Telemetry Layer",
    description:
      "Connect warehouses, product events, CRM systems, and spreadsheets without turning the interface into a developer sandbox.",
    bullets: [
      "Warehouse-first connectors for modern data teams",
      "Fallback ingestion for messy source systems",
      "Governed semantic metrics for non-analysts",
    ],
  },
  {
    name: "Narrative Layer",
    description:
      "Blend precision charts with editorial framing so leaders understand the shape of the system, not just the numbers inside it.",
    bullets: [
      "Context callouts and anomaly cues",
      "Role-based layouts for executives and operators",
      "Presentation-safe exports that stay in sync",
    ],
  },
  {
    name: "Operator Loop",
    description:
      "Push action outward with alerts, daily digests, and shared rituals that keep the dashboards from becoming expensive wallpaper.",
    bullets: [
      "Slack and email pulse summaries",
      "Live decision reviews and standup views",
      "Feedback loop for iteration after launch",
    ],
  },
] as const;

export const platformCapabilities = [
  {
    value: "17",
    title: "core integrations",
    description:
      "From Snowflake and BigQuery to ad platforms, product analytics, and support systems.",
  },
  {
    value: "30d",
    title: "pilot launch pace",
    description:
      "A compact delivery arc that gets a usable command surface live without months of internal drag.",
  },
  {
    value: "3",
    title: "experience modes",
    description:
      "Executive overview, operator wall, and client portal patterns built from the same data foundation.",
  },
  {
    value: "24/7",
    title: "signal availability",
    description:
      "Surfaces stay current enough to support daily rituals, handoffs, and leadership reviews.",
  },
] as const;

export const launchSteps = [
  {
    phase: "01 / Map the story",
    detail:
      "We audit the moments where teams currently stall: board prep, morning ops, client reviews, or forecasting resets.",
  },
  {
    phase: "02 / Shape the room",
    detail:
      "We design the actual decision surface first, then align the data model around what humans need to notice and discuss.",
  },
  {
    phase: "03 / Connect the stack",
    detail:
      "Pipelines, semantic definitions, and refresh logic are wired behind the scenes so the interface remains calm and trustworthy.",
  },
  {
    phase: "04 / Train the ritual",
    detail:
      "We launch with meeting flows, alerts, and playbooks so the product enters the team’s behavior instead of sitting beside it.",
  },
] as const;

export const caseStudies = [
  {
    client: "NorthGrid",
    sector: "Utility Operations",
    impact: "Triage time cut from 17 minutes to 90 seconds.",
    description:
      "A regional utility needed one operating picture for dispatch, service reliability, and executive visibility during outage events.",
    outcomes: [
      "Unified service, weather, and crew telemetry",
      "Live command wall for dispatch and executives",
      "After-action reporting auto-generated from the same source",
    ],
  },
  {
    client: "Aster Freight",
    sector: "Supply Chain",
    impact: "98% of network exceptions surfaced before the morning call.",
    description:
      "We rebuilt their daily operating review into a multi-screen surface that tracks flow, capacity, and margin pressure in one place.",
    outcomes: [
      "Terminal-level throughput narratives",
      "High-risk route cues with owner visibility",
      "Scenario studio for weekly planning and pricing shifts",
    ],
  },
  {
    client: "Brightpath Health",
    sector: "Care Operations",
    impact: "Forecasting confidence rose by 31 points in the first quarter.",
    description:
      "Leadership wanted less spreadsheet churn and more clarity across patient demand, staffing, and market growth decisions.",
    outcomes: [
      "Executive forecasting room with regional comparison",
      "Clinic pulse surface for capacity and wait-time risk",
      "Growth dashboards for partnership and referral teams",
    ],
  },
] as const;

export const operatingPrinciples = [
  "Lead with the decision, not the chart.",
  "Show what changed before showing every number.",
  "Design for rooms, rituals, and real interruptions.",
  "Make premium interfaces feel obvious at first glance.",
] as const;

export const contactPromises = [
  "A 30-minute working session with strategy and product leads.",
  "A tailored room concept, not a generic PDF capability deck.",
  "A first-pass launch plan in days, with a realistic scope for the next 30.",
] as const;

export const briefObjectives = [
  "Executive reporting",
  "Operations visibility",
  "Forecasting and planning",
  "Client analytics",
] as const;

export const briefSurfaces = [
  "Single command center",
  "Multi-screen operations wall",
  "Client-facing portal",
  "Hybrid executive + ops suite",
] as const;

export const briefTimelines = ["2 weeks", "30 days", "90 days"] as const;

export const briefMaturity = [
  "Warehouse already in place",
  "Warehouse plus event stream",
  "Scattered SaaS tools and spreadsheets",
] as const;
