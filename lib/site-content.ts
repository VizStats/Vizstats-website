export type NavigationItem = {
  href: string;
  label: string;
};

export type Metric = {
  value: number;
  suffix?: string;
  label: string;
  description: string;
};

export type ScrollBeat = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  name: string;
  client: string;
  type: string;
  tagline: string;
  summary: string;
  metrics: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  accent: string;
  overview: string;
  challenge: string;
  approach: string[];
  outcome: string;
  deliverables: string[];
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  image: string;
  imageAlt: string;
};

export type PerspectiveCard = {
  title: string;
  subtitle: string;
  hoverReveal: string;
  body: string;
  linkLabel?: string;
  linkHref?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Note = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
  imageAlt: string;
  body: string[];
};

export type Sector = {
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  details: string[];
};

export type Capability = {
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export const navigation: NavigationItem[] = [
  { href: "/studio", label: "Studio" },
  { href: "/sectors", label: "Sectors" },
  { href: "/notes", label: "Notes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const footerServices = [
  { href: "/studio#formats", label: "Scrollytelling" },
  { href: "/studio#formats", label: "Interactive reports" },
  { href: "/studio#formats", label: "Information hubs" },
  { href: "/studio#formats", label: "Investigative databases" },
] as const;

export const heroCopy = {
  title: "Important data. Impossible to ignore.",
  paragraphOne:
    "Vizstats is a data experience agency. We turn complex, important data into immersive experiences that public audiences can understand, explore, and act on.",
  paragraphTwo:
    "Fully customized, high-performance data experiences built specifically for the people your data was always meant to reach.",
  primaryCta: "Tell us about your project",
  secondaryCta: "Explore the work",
};

export const trustStrip = {
  title: "Trusted by editorial, research, and public-interest teams working with high-stakes information.",
  clients: [
    "China Global South Project",
    "Research organizations",
    "Editorial desks",
    "Policy teams",
    "Foundations",
  ],
};

export const stats: Metric[] = [
  {
    value: 12,
    suffix: "+",
    label: "data formats handled",
    description:
      "Raw spreadsheets, reporting exports, archival tables, APIs, and the awkward formats that live between them.",
  },
  {
    value: 9,
    suffix: "+",
    label: "countries represented in-source",
    description:
      "An editorial approach to data that crosses borders, institutions, and uneven reporting standards.",
  },
  {
    value: 5,
    label: "active client engagements max",
    description:
      "A deliberately small practice so every build stays close to the audience, the story, and the launch.",
  },
  {
    value: 10000,
    suffix: "+",
    label: "readers planned for the spike",
    description:
      "Code-native delivery built for the day the work gets cited, shared, and hit by real attention.",
  },
];

export const scrollBeats: ScrollBeat[] = [
  {
    title: "Data lives in formats it was never meant to live in.",
    description:
      "The underlying signal matters, but the format around it often makes the work harder to trust and even harder to return to.",
  },
  {
    title: "PDFs nobody reads past page three.",
    description:
      "Important reporting disappears into files that flatten the logic, bury the evidence, and force the audience to quit early.",
  },
  {
    title: "Dashboards with eleven dropdowns and one blue line.",
    description:
      "Tools designed for internal reporting often ask too much of the people they are supposed to help.",
  },
  {
    title: "Portals so frustrating the teams who built them apologize.",
    description:
      "When navigation, performance, and structure get in the way, audiences blame the data instead of the delivery.",
  },
  {
    title: "We built Vizstats to refuse this.",
    description:
      "Editorial thinking, custom design, and front-end engineering working together so the public can actually use what matters.",
  },
];

export const projects: Project[] = [
  {
    slug: "who-is-who",
    name: "Who Is Who",
    client: "China Global South Project",
    type: "Scrollytelling + Data Platform",
    tagline:
      "A public intelligence platform mapping Asia's role in Africa's critical minerals sector.",
    summary:
      "A hybrid release that pairs a guided narrative with a searchable intelligence layer, so journalists, researchers, and policymakers can move from the big picture to company-level detail without losing context.",
    metrics: ["29 companies", "5 countries", "11 minerals"],
    tags: ["Public intelligence", "Critical minerals", "Cross-border reporting"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Analytics screens in a professional workspace, representing a public intelligence platform.",
    accent: "from-emerald-500/15 via-transparent to-sky-500/15",
    overview:
      "Who Is Who needed to function as both a story and a place: an editorial experience that could introduce a complex sector, and a durable platform audiences could revisit for specific facts.",
    challenge:
      "The subject spans companies, minerals, supply chains, and geography. The platform needed to help public readers understand that system without forcing them into an analyst-only interface.",
    approach: [
      "Structured the opening narrative around the questions newcomers ask first, then made every claim traceable to deeper project pages.",
      "Built a hybrid interface where scrollytelling, filters, and company-level exploration feel like one continuous experience instead of separate products.",
      "Treated loading, accessibility, and responsive behavior as editorial issues, not technical cleanup after the design was approved.",
    ],
    outcome:
      "A public-facing platform that frames the sector clearly, performs reliably, and gives specialist audiences enough depth to keep working after the first visit.",
    deliverables: [
      "Information architecture",
      "Scrollytelling system",
      "Search and filtering patterns",
      "Responsive front-end implementation",
    ],
  },
  {
    slug: "african-ev-tracker",
    name: "African EV Tracker",
    client: "Regional research collaboration",
    type: "Information Hub · Hybrid",
    tagline:
      "A public database documenting the rise of electric vehicles across the African continent.",
    summary:
      "A first-stop research surface designed to support journalists, policymakers, and sector observers who need a dependable public record of how the market is moving.",
    metrics: ["17 markets", "120 manufacturers", "Policy watch"],
    tags: ["Mobility", "Open data", "Public research"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Business charts and market analysis visuals arranged on a desk.",
    accent: "from-emerald-500/12 via-transparent to-orange-500/14",
    overview:
      "African EV Tracker brings together fragmented reporting, policy movement, and market activity in one place so the public can follow a fast-changing ecosystem without needing private industry tooling.",
    challenge:
      "The information changes quickly, the source material is inconsistent, and the audience ranges from subject-matter experts to first-time readers.",
    approach: [
      "Designed a hub that privileges what changed, where it changed, and why that shift matters.",
      "Built modular content blocks so editors can update narratives, data snapshots, and market briefs without breaking the broader structure.",
      "Used clear tagging and filters to keep specialist access fast while maintaining an approachable public entry point.",
    ],
    outcome:
      "A calm, maintainable hub that supports repeat visits, media reference, and more informed public conversations around transport and infrastructure.",
    deliverables: [
      "Research-oriented content model",
      "Data directory patterns",
      "Editorial update workflow",
      "Accessible filtering interface",
    ],
  },
  {
    slug: "civic-supply-atlas",
    name: "Civic Supply Atlas",
    client: "Representative platform direction",
    type: "Investigative Database · Platform",
    tagline:
      "A searchable public atlas for comparing infrastructure spending, suppliers, and local outcomes.",
    summary:
      "A representative project format showing how Vizstats structures complex civic procurement data into a place readers can actually interrogate.",
    metrics: ["8 regions", "430 contracts", "Entity-level traceability"],
    tags: ["Accountability", "Procurement", "Public interface"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "A collaborative team reviewing data on laptops in a bright office setting.",
    accent: "from-sky-500/12 via-transparent to-emerald-500/14",
    overview:
      "This representative platform format demonstrates how public accountability data can be shaped into an investigative tool instead of a spreadsheet archive.",
    challenge:
      "Readers need to move between geography, entities, and outcomes without losing the narrative frame that explains why the data matters.",
    approach: [
      "Created a map-and-table relationship that keeps location and comparison visible at the same time.",
      "Used layered detail states so the interface supports quick scans as well as deeper verification work.",
      "Designed the system to stay comprehensible on mobile, where many public-interest audiences first encounter the work.",
    ],
    outcome:
      "A more legible path from public record to public understanding, with enough structure to support follow-on reporting and civic use.",
    deliverables: [
      "Exploratory data interface",
      "Map-linked record navigation",
      "Editorial framing patterns",
      "Responsive component library",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Our editors were skeptical they'd get a portal that worked for both a researcher who needs every footnote and a journalist filing in 90 minutes. They got both.",
    author: "Editorial lead",
    role: "Public-interest newsroom",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    imageAlt:
      "Portrait of a professional client used as a testimonial placeholder.",
  },
  {
    quote:
      "The platform launched in November. By February, the dataset was being cited in two policy briefs we had not approached. The work travels in ways most agency builds do not.",
    author: "Program director",
    role: "Research organization",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    imageAlt:
      "Portrait of a professional client used as a testimonial placeholder.",
  },
  {
    quote:
      "They asked who the audience was before they asked what the dataset contained. That order, audience first, was the difference.",
    author: "Communications lead",
    role: "Policy initiative",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
    imageAlt:
      "Portrait of a professional client used as a testimonial placeholder.",
  },
];

export const perspectiveCards: PerspectiveCard[] = [
  {
    title: "The audience is the design constraint.",
    subtitle: "Every decision flows from who reads this and why.",
    hoverReveal:
      "Most data work is built to satisfy the people who made the data. We work the other way around.",
    body:
      "Every Vizstats engagement begins with the audience — who they are, what they care about, what they need to walk away with. That understanding shapes which data point leads, which structure carries the argument, what level of complexity the audience can hold, where they need to be met. The data is the second decision, not the first.",
    linkLabel: "Read more in Notes",
    linkHref: "/notes/the-audience-is-the-design-constraint",
  },
  {
    title: "Editorial discipline applied to design.",
    subtitle: "Sourced, methodical, defensible.",
    hoverReveal:
      "We treat your data the way an editor would — not the way a designer would.",
    body:
      "Every claim in a Vizstats project is sourced. Every methodology is transparent. Every number is verified before it ships. The work has to survive editorial scrutiny — your editor's, your funder's, a journalist's, a researcher's. Because the moment a data piece's accuracy gets questioned, the credibility of the work collapses with it.",
    linkLabel: "Read our methodology notes",
    linkHref: "/notes/methodology-is-part-of-the-design",
  },
  {
    title: "The web is the medium, not a constraint.",
    subtitle: "Native, fast, accessible, code-built.",
    hoverReveal:
      "We don't downscale print. We don't wrap BI tools. We design for the medium the work actually lives in.",
    body:
      "We build with the same code technologies that power modern publishing — React, Next.js, custom AI tools, CDN-delivered. That foundation lets us design what the work actually needs: no template lock-in, no third-party watermarks, no breakdown when ten thousand readers arrive at once. The web is its own medium, with its own demands.",
    linkLabel: "Why we don't build with Tableau or Power BI",
    linkHref: "/notes/why-the-web-is-the-medium",
  },
  {
    title: "Form follows what the data is asking for.",
    subtitle: "Some data wants to be a piece. Some wants to be a place.",
    hoverReveal:
      "The form of the work shouldn't be a service-menu choice. It should be the right answer to what the data asks.",
    body:
      "Some data wants to be a piece — a scrollytelling investigation, an animated explainer, an interactive story. Some data wants to be a place — an open data portal, an information hub, an investigative database. Sometimes one project needs both. We design to the form the data demands, not what's easiest to template.",
    linkLabel: "See work in both forms",
    linkHref: "/studio",
  },
  {
    title: "Restraint over ornament.",
    subtitle: "One idea per moment, done well.",
    hoverReveal:
      "The data, when designed well, doesn't need rescue by decoration.",
    body:
      "Refined means resisting the urge to add. Two adjectives per noun, max. One idea per paragraph done well. We make design decisions that earn their place — every animation, every typographic choice, every color shift. Because data work that screams for attention rarely holds it; data work that's been considered does.",
    linkLabel: "Read more in Notes",
    linkHref: "/notes/restraint-over-ornament",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What does a typical engagement look like?",
    answer:
      "Engagements run three to six months from kickoff to launch, depending on track. Studio work (scrollytelling, investigations, interactive stories) tends to be shorter; Platforms work (portals, hubs, publishing systems) tends to be longer. We work with three to five clients at a time.",
  },
  {
    question: "Who owns the work after launch?",
    answer:
      "You do. Vizstats builds custom — your code, your design system, your data, hosted on your domain. We're available for support and ongoing work, but the project is yours from the moment it ships. No platform lock-in. No third-party embeds.",
  },
  {
    question: "How do you handle accessibility?",
    answer:
      "Every Vizstats build commits to WCAG 2.1 AA at minimum. Interactive elements — scrollytelling, charts, animated visualizations — get screen-reader equivalents and prefers-reduced-motion support. Accessibility is a design constraint we treat as non-negotiable, not an aspirational layer.",
  },
  {
    question: "What if our data isn't story-ready yet?",
    answer:
      "Most data isn't, when we start. We work with raw datasets in twelve formats across nine countries. The first phase of every engagement is understanding the data — what it means, what story it carries, what needs to be verified before it ships. That's where the editorial work lives.",
  },
  {
    question: "How does your work hold up at scale?",
    answer:
      "Our builds are code-native, CDN-delivered, and architected for the spike — when an investigation gets picked up, when a story breaks. We design for ten thousand readers arriving at once, not for a meeting-room demo.",
  },
];

export const notes: Note[] = [
  {
    slug: "the-audience-is-the-design-constraint",
    category: "Audience",
    title: "The audience is the design constraint",
    excerpt:
      "If the people reading the work are not the first design decision, the rest of the interface starts solving the wrong problem.",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Design team reviewing wireframes and audience notes on a large screen.",
    body: [
      "Most data experiences fail in familiar ways. They answer the internal reporting need but leave the external audience to translate the work for themselves.",
      "We begin earlier than the interface. Who needs to understand this? What decision or belief should change after they spend time with it? What level of precision will they need before the work feels trustworthy?",
      "Once those questions are clear, structure becomes easier. The right lead, the right sequence, and the right interaction pattern emerge from the audience rather than being layered onto the data afterward.",
    ],
  },
  {
    slug: "methodology-is-part-of-the-design",
    category: "Methodology",
    title: "Methodology is part of the design",
    excerpt:
      "A data piece does not become credible because it looks careful. It becomes credible because the evidence and the method can survive scrutiny.",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Researchers reviewing documents and methodology notes around a conference table.",
    body: [
      "Good design cannot rescue weak sourcing. When a data story is important, methodology sits inside the experience, not beside it.",
      "That means citations that are easy to find, definitions that are easy to verify, and data decisions that are explicit before anyone needs to ask for them.",
      "The result is calmer work. Readers can keep exploring because the interface has already done the job of showing its homework.",
    ],
  },
  {
    slug: "why-the-web-is-the-medium",
    category: "Technology",
    title: "Why the web is the medium",
    excerpt:
      "We do not treat the browser as the place a PDF lands after the real work is done. The browser is where the work becomes usable.",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "High-resolution monitor displaying responsive interface layouts during design review.",
    body: [
      "The medium shapes the experience. On the web, performance, accessibility, and responsiveness are not extra engineering tasks. They are part of whether the audience can stay with the work long enough to understand it.",
      "Code-native builds give us room to design interactions, narrative transitions, and public-facing data interfaces that are fast, maintainable, and tailored to the audience.",
      "The web is not where the design gets compromised. It is where the experience becomes real.",
    ],
  },
  {
    slug: "restraint-over-ornament",
    category: "Design",
    title: "Restraint over ornament",
    excerpt:
      "When the data matters, the visual system should clear a path to it instead of trying to compete with it.",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Minimal workstation setup with typography and interface layouts on screen.",
    body: [
      "Restraint is not the absence of style. It is style in service of a purpose.",
      "We use contrast, type, motion, and pacing to help the audience notice the right thing at the right moment. Anything louder than that tends to reduce trust rather than build it.",
      "A careful interface holds attention because it feels considered. That is the standard we design toward.",
    ],
  },
];

export const sectors: Sector[] = [
  {
    title: "Public-interest journalism",
    summary:
      "Data experiences for editors and reporting teams that need clarity, speed, and public trust at the same time.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Editorial team collaborating around a conference table with laptops and printed notes.",
    details: [
      "Investigative stories with durable afterlives",
      "Reader-friendly data explainers",
      "Platforms that support both quick scans and deep reporting",
    ],
  },
  {
    title: "Research organizations",
    summary:
      "Interfaces that help serious findings travel further than the people who produced the dataset.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Research professionals discussing insights in front of a digital presentation.",
    details: [
      "Methodology-forward storytelling",
      "Public-facing data directories",
      "Briefing tools for funders, journalists, and partners",
    ],
  },
  {
    title: "Policy and advocacy teams",
    summary:
      "Public tools that make evidence easier to understand, cite, and use in the middle of real policy conversations.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "Professionals reviewing policy-related material and datasets together.",
    details: [
      "Audience-first issue explainers",
      "Searchable evidence hubs",
      "Design systems for repeat publishing",
    ],
  },
  {
    title: "Foundations and program teams",
    summary:
      "Reporting experiences that replace internal deck fatigue with more legible public and partner-facing communication.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    imageAlt:
      "A diverse team in a workshop session discussing strategy and impact reporting.",
    details: [
      "Grant and portfolio reporting surfaces",
      "Partner-facing learning products",
      "Evidence-centered communication systems",
    ],
  },
];

export const capabilities: Capability[] = [
  {
    title: "Audience framing",
    description:
      "Clarifying who the work is for, what they need to understand, and how much complexity they can hold in one sitting.",
  },
  {
    title: "Editorial systems",
    description:
      "Structuring sourcing, methodology, annotations, and evidence so the experience feels defensible before it feels polished.",
  },
  {
    title: "Experience design",
    description:
      "Designing the narrative, interface, and interaction layer around the shape the data actually wants to take.",
  },
  {
    title: "Front-end delivery",
    description:
      "Building responsive, accessible, code-native experiences that hold up under real traffic and real editorial deadlines.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    description:
      "We begin with the audience, the editorial stakes, and the condition of the source material.",
  },
  {
    title: "Plan",
    description:
      "We map the story, the structure, and the interface logic before any visual system starts trying to decorate the problem.",
  },
  {
    title: "Design",
    description:
      "We prototype the narrative and the interaction model together so the public experience arrives with clarity built in.",
  },
  {
    title: "Launch",
    description:
      "We ship performant code, accessibility support, and a maintainable system your team can actually live with.",
  },
];

export const contactChecklist = [
  "What are you making, and who needs to use it?",
  "What state is the data currently in?",
  "What needs to be true at launch for the project to feel successful?",
  "What is the timing, and who needs to be in the room early?",
] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNoteBySlug(slug: string) {
  return notes.find((note) => note.slug === slug);
}
