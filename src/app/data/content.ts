// ─── Uday Cherri Core ────────────────────────────────────────────────────────

export const udayProfile = {
  name: "Uday Cherri",
  archetype: "The Architect",
  motto: "Building across worlds. Growing beyond them.",
  introduction:
    "A multidisciplinary creator working at the intersection of design, engineering, and security. Not defined by a single discipline — defined by the connections between them.",
  beliefs: [
    { statement: "Mastery is found at intersections.", index: "01" },
    { statement: "Growth never ends.", index: "02" },
    { statement: "Capability carries responsibility.", index: "03" },
    { statement: "Technology should create, protect, and inspire.", index: "04" },
    { statement: "Understanding people matters as much as understanding systems.", index: "05" },
    { statement: "The future belongs to those who can connect worlds.", index: "06" },
  ],
};

export const journeyMilestones = [
  {
    id: "m1",
    year: "2024",
    title: "DEF CON CTF Qualifier",
    note: "Top 15%",
    discipline: "security",
  },
  {
    id: "m2",
    year: "2024",
    title: "JWT Algorithm Confusion",
    note: "2 CVEs assigned",
    discipline: "security",
  },
  {
    id: "m3",
    year: "2024",
    title: "VaultChain",
    note: "50k+ ops/sec",
    discipline: "development",
  },
  {
    id: "m4",
    year: "2024",
    title: "NYX Bureau",
    note: "Studio founded",
    discipline: "design",
  },
  {
    id: "m5",
    year: "2024",
    title: "Dependency Confusion Research",
    note: "1,400+ patterns identified",
    discipline: "security",
  },
  {
    id: "m6",
    year: "2023",
    title: "Conduit",
    note: "1,200+ GitHub stars",
    discipline: "development",
  },
  {
    id: "m7",
    year: "2023",
    title: "HTB Cyber Apocalypse",
    note: "Top 8%",
    discipline: "security",
  },
  {
    id: "m8",
    year: "2023",
    title: "Meridian Design System",
    note: "210 components",
    discipline: "design",
  },
  {
    id: "m9",
    year: "2022",
    title: "Emergence Poster Series",
    note: "Exhibited · Acquired",
    discipline: "design",
  },
  {
    id: "m10",
    year: "2022",
    title: "LACTF",
    note: "Top 20 — First blood",
    discipline: "security",
  },
];

export const currentFocus = [
  {
    id: "level",
    name: "LEVEL",
    category: "Product",
    status: "Building",
    accent: "#B8A46A",
  },
  {
    id: "ai-security",
    name: "AI Security Research",
    category: "Research",
    status: "Active",
    accent: "#10B981",
  },
  {
    id: "nyx-bureau",
    name: "NYX Bureau",
    category: "Studio",
    status: "Active",
    accent: "#67E8F9",
  },
  {
    id: "cyber-community",
    name: "Cybersecurity Community",
    category: "Community",
    status: "Growing",
    accent: "#2DD4BF",
  },
  {
    id: "wallace",
    name: "Wallace",
    category: "Project",
    status: "In Development",
    accent: "#CC1234",
  },
];

// ─── Shared Project Type ──────────────────────────────────────────────────────

export interface Project {
  id: string;
  identity: "yuukaycee" | "spy" | "cyb3r" | "core";
  title: string;
  subtitle: string;
  category: string;
  year: string;
  tags: string[];
  overview: string;
  problem: string;
  approach: string;
  process: string[];
  outcome: string;
  lessons: string;
  featured: boolean;
  coverColor: string;
}

// ─── YuuKayCee Projects ───────────────────────────────────────────────────────

export const yuukayceeProjects: Project[] = [
  {
    id: "nyx-rebrand",
    identity: "yuukaycee",
    title: "NYX Bureau",
    subtitle: "Brand Identity System",
    category: "Branding",
    year: "2024",
    tags: ["Brand Identity", "Typography", "Visual System"],
    overview:
      "A complete brand identity for a creative studio built to operate at the intersection of design and culture. Every element of the system was designed to communicate both elegance and edge.",
    problem:
      "The studio needed a visual identity that could represent high craft without feeling corporate, and experimental without feeling immature.",
    approach:
      "Developed a dual-register system: a refined formal layer for client-facing materials, and a more expressive layer for cultural projects. The wordmark uses a modified geometric serif.",
    process: [
      "Competitive landscape audit across creative studios",
      "Typography exploration — 40+ specimen studies",
      "Color system development with light and dark expressions",
      "Application across stationery, digital surfaces, and motion",
    ],
    outcome:
      "A brand system capable of representing both precision work and experimental projects without contradiction.",
    lessons:
      "The best brand systems hold tension rather than resolve it. NYX needed to feel like it could occupy two rooms simultaneously.",
    featured: true,
    coverColor: "#67E8F9",
  },
  {
    id: "meridian-ui",
    identity: "yuukaycee",
    title: "Meridian",
    subtitle: "Product Design System",
    category: "UI/UX",
    year: "2024",
    tags: ["Design System", "UI/UX", "Product"],
    overview:
      "A design system built for a SaaS platform handling complex data workflows. Clarity and consistency were the primary goals across 200+ components.",
    problem:
      "The product had grown organically over three years. Inconsistency was slowing engineering and confusing users.",
    approach:
      "Started with an audit of existing components. Identified the 12 core interaction patterns that covered 80% of user flows. Built outward from those.",
    process: [
      "Component audit and pattern identification",
      "Token architecture — spacing, color, typography",
      "Component specification with states and variants",
      "Documentation and handoff system",
    ],
    outcome:
      "210 components. Reduced design-to-development cycle by 40%. Engineers stopped asking 'what should this look like?'",
    lessons:
      "A design system is not a component library. It's a shared language. The documentation is as important as the components.",
    featured: true,
    coverColor: "#67E8F9",
  },
  {
    id: "forma-typeface",
    identity: "yuukaycee",
    title: "Forma",
    subtitle: "Custom Display Typeface",
    category: "Typography",
    year: "2023",
    tags: ["Typography", "Type Design", "Custom Font"],
    overview:
      "A custom display typeface designed for a cultural institution's centenary campaign. Geometric construction with humanist terminals.",
    problem:
      "The institution wanted something that felt historic and contemporary simultaneously — a typeface that could carry a 100-year legacy forward.",
    approach:
      "Studied the institution's archival materials, finding recurring geometric motifs. Used these as the basis for letterform construction.",
    process: [
      "Archival research and motif extraction",
      "Initial letterform sketches — 3 directions",
      "Digital development in Glyphs",
      "Refinement across display and text sizes",
    ],
    outcome:
      "Deployed across the centenary campaign. Used in wayfinding, posters, and digital channels.",
    lessons:
      "Type design is the most honest form of design. You cannot hide behind decoration — the letterform either works or it doesn't.",
    featured: false,
    coverColor: "#FDBA8C",
  },
  {
    id: "signal-app",
    identity: "yuukaycee",
    title: "Signal",
    subtitle: "Communication Platform UI",
    category: "UI/UX",
    year: "2023",
    tags: ["Product Design", "Mobile", "Communication"],
    overview:
      "Interface design for a team communication platform focused on reducing notification noise and improving async collaboration.",
    problem:
      "Existing tools created attention debt. Users felt enslaved to real-time notifications rather than empowered by them.",
    approach:
      "Designed around the concept of 'calm information' — surfaces that show you what matters, when you choose to look.",
    process: [
      "User research — 20 interviews across teams",
      "Journey mapping and pain point synthesis",
      "Low-fidelity flow exploration",
      "High-fidelity UI with interaction specifications",
    ],
    outcome:
      "Prototype tested with 40 users. 85% reported feeling 'less reactive' after one week.",
    lessons:
      "The best interface design removes decisions. Not features — decisions. The cognitive difference matters.",
    featured: false,
    coverColor: "#2DD4BF",
  },
  {
    id: "emergence-posters",
    identity: "yuukaycee",
    title: "Emergence",
    subtitle: "Editorial Poster Series",
    category: "Posters",
    year: "2022",
    tags: ["Poster Design", "Editorial", "Print"],
    overview:
      "A series of 12 posters exploring emergence — how complex patterns arise from simple rules. Each poster visualizes a different system.",
    problem: "To make abstract complexity beautiful without making it simplistic.",
    approach:
      "Each poster follows the same structural logic: one system, one rule set, one visual language. Variety comes from the system, not the designer.",
    process: [
      "Research into emergence across biology, physics, computation",
      "Visual language development",
      "12 unique system explorations",
      "Print production for A2 format",
    ],
    outcome:
      "Exhibited at a design conference. Series acquired by a private collection.",
    lessons:
      "Constraints are not limitations. The strictest constraint produced the most interesting work.",
    featured: false,
    coverColor: "#F0C060",
  },
  {
    id: "atlas-concept",
    identity: "yuukaycee",
    title: "Atlas",
    subtitle: "Knowledge Platform Concept",
    category: "Concepts",
    year: "2022",
    tags: ["Concept", "UX Research", "Information Architecture"],
    overview:
      "A conceptual platform for connecting research across disciplines. Designed for academics and independent researchers.",
    problem:
      "Knowledge is siloed by discipline. Breakthroughs often happen at intersections that existing tools don't surface.",
    approach:
      "Designed around 'knowledge graphs visible to humans' — the interface makes connections legible, not just searchable.",
    process: [
      "Domain research — how researchers actually work",
      "Information architecture exploration",
      "Graph visualization design",
      "Full concept UI system",
    ],
    outcome:
      "Concept shared publicly. Received responses from researchers at three universities.",
    lessons:
      "Design concepts that solve real problems get real attention. The gap between tool and need is the design opportunity.",
    featured: false,
    coverColor: "#67E8F9",
  },
];

export const nyxBureau = {
  vision:
    "NYX Bureau is a creative practice operating at the intersection of craft and culture. We design visual systems, identities, and experiences for organizations and individuals with something real to say.",
  services: [
    {
      title: "Brand Identity",
      description:
        "Visual systems that communicate who you are across every surface and context. From naming through to full brand expression.",
    },
    {
      title: "Product Design",
      description:
        "Interface design and design systems for digital products. We work from research through to production-ready specifications.",
    },
    {
      title: "Art Direction",
      description:
        "Editorial and campaign direction for photography, motion, and print. We bring the visual coherence that makes a campaign memorable.",
    },
    {
      title: "Typography",
      description:
        "Custom typefaces and typographic systems for brands that need something no license can provide.",
    },
  ],
  process: [
    { step: "01", title: "Understand", description: "Deep listening before any mark is made." },
    { step: "02", title: "Explore", description: "Wide exploration before narrowing direction." },
    { step: "03", title: "Define", description: "One strong direction, fully realized." },
    { step: "04", title: "Deliver", description: "Production-ready, with the tools to use it." },
  ],
};

// ─── Spy D. Veloper Projects ──────────────────────────────────────────────────

export const spyProjects: Project[] = [
  {
    id: "vaultchain",
    identity: "spy",
    title: "VaultChain",
    subtitle: "Distributed Secret Management System",
    category: "Systems",
    year: "2024",
    tags: ["Distributed Systems", "Security", "Rust", "gRPC"],
    overview:
      "A distributed secret management system designed for multi-tenant environments. Handles key rotation, access auditing, and zero-trust distribution at scale.",
    problem:
      "Most secret management solutions either sacrifice security for usability or usability for security. VaultChain attempts to eliminate the tradeoff.",
    approach:
      "Built on a Merkle-based audit log with cryptographic proof chains. Each access event is verifiable without revealing the secret content.",
    process: [
      "Threat modeling and attack surface analysis",
      "Cryptographic protocol design",
      "Rust implementation of core storage engine",
      "gRPC API layer with mTLS",
      "Kubernetes operator for deployment",
    ],
    outcome:
      "System handles 50k+ secret operations per second. Sub-10ms p99 latency on secret retrieval.",
    lessons:
      "Security and performance are not opposites. The design constraint that forced both led to a better architecture than either alone would have.",
    featured: true,
    coverColor: "#CC1234",
  },
  {
    id: "conduit",
    identity: "spy",
    title: "Conduit",
    subtitle: "Real-time Data Pipeline Framework",
    category: "Infrastructure",
    year: "2024",
    tags: ["Go", "Kafka", "Real-time", "Open Source"],
    overview:
      "An open-source framework for building type-safe real-time data pipelines. Connectors for 30+ data sources with a unified streaming API.",
    problem:
      "Building data pipelines involves too much glue code. Every team reimplements the same patterns with different bugs.",
    approach:
      "Define a minimal, composable abstraction over sources, transforms, and sinks. Make the common cases trivially easy and the uncommon cases possible.",
    process: [
      "Analysis of 15 existing pipeline implementations",
      "Core abstraction design and review",
      "Go implementation with interface-first approach",
      "30 connector implementations",
      "Documentation and community launch",
    ],
    outcome:
      "1,200+ GitHub stars. Used in production by 40+ teams. 12 external contributors.",
    lessons:
      "An abstraction is only as good as the escape hatches. Libraries that trap you in their model don't get adopted.",
    featured: true,
    coverColor: "#0A4080",
  },
  {
    id: "spectral",
    identity: "spy",
    title: "Spectral",
    subtitle: "API Gateway with Adaptive Rate Limiting",
    category: "Infrastructure",
    year: "2023",
    tags: ["Rust", "Networking", "API", "Rate Limiting"],
    overview:
      "An API gateway with adaptive rate limiting that adjusts limits based on downstream service health rather than fixed thresholds.",
    problem:
      "Fixed rate limits either protect the server and frustrate users, or protect users and overwhelm the server. The threshold is always wrong.",
    approach:
      "Implemented a feedback loop between gateway and service health metrics. Limits tighten under load and relax when capacity recovers.",
    process: [
      "Research into adaptive control systems",
      "Feedback loop design and simulation",
      "Rust implementation of gateway core",
      "Load testing and validation",
    ],
    outcome:
      "35% reduction in downstream timeouts. 20% improvement in throughput under peak load.",
    lessons:
      "Control theory is underused in software. The math exists. The problem is mostly translation.",
    featured: false,
    coverColor: "#1A3A5C",
  },
  {
    id: "logosphere",
    identity: "spy",
    title: "Logosphere",
    subtitle: "Structured Observability Platform",
    category: "Tooling",
    year: "2023",
    tags: ["TypeScript", "Observability", "Distributed Tracing"],
    overview:
      "A structured logging and distributed tracing platform designed for small teams that can't afford enterprise observability tools.",
    problem:
      "Observability is not just for large companies, but most tools are built and priced for them.",
    approach:
      "Designed around a single semantic layer that unifies logs, metrics, and traces. One query language across all signals.",
    process: [
      "Competitive analysis of observability tooling",
      "Semantic model design",
      "TypeScript core implementation",
      "Query language and CLI",
      "Self-hosted deployment guide",
    ],
    outcome:
      "Adopted by 3 startup teams. Average setup time under 20 minutes.",
    lessons:
      "Simplicity is a feature, not a limitation. The hardest engineering is knowing what to leave out.",
    featured: false,
    coverColor: "#0F2A4A",
  },
  {
    id: "prism-lang",
    identity: "spy",
    title: "Prism",
    subtitle: "Domain-Specific Language for Data Transformation",
    category: "Experiments",
    year: "2022",
    tags: ["Language Design", "Compiler", "Rust", "DSL"],
    overview:
      "A DSL for expressing data transformation pipelines declaratively. Compiles to Rust for zero-overhead execution.",
    problem:
      "Data transformation code is almost always too imperative. The what gets buried in the how.",
    approach:
      "Designed a purely declarative syntax where you describe the shape of the output, not the steps to produce it.",
    process: [
      "Language design and grammar specification",
      "Parser implementation in Rust",
      "Type inference system",
      "Code generation to Rust",
      "Reference implementation and examples",
    ],
    outcome:
      "Proof of concept that compiles and runs correctly. Performance within 5% of hand-written Rust.",
    lessons:
      "Building a language is the best way to understand programming languages. The problems that seemed abstract become immediately concrete.",
    featured: false,
    coverColor: "#2D1A4A",
  },
];

export const spySystems = [
  {
    id: "s1",
    title: "Zero-Trust Service Mesh",
    description:
      "Architecture for inter-service communication where no service is implicitly trusted. Every request authenticated, every connection encrypted.",
    components: ["mTLS", "Service Identity", "Policy Engine", "Audit Log"],
    status: "Production",
  },
  {
    id: "s2",
    title: "Event-Driven Microservices",
    description:
      "Asynchronous service architecture using domain events as the primary integration mechanism.",
    components: ["Event Bus", "Saga Orchestration", "Outbox Pattern", "Dead Letter Queue"],
    status: "Production",
  },
  {
    id: "s3",
    title: "Multi-Region Data Replication",
    description:
      "CRDTs and vector clocks for eventually-consistent data across geographic regions.",
    components: ["CRDT Engine", "Vector Clocks", "Conflict Resolution", "Sync Protocol"],
    status: "Research",
  },
];

export const openSourceRepos = [
  {
    name: "conduit",
    description: "Real-time data pipeline framework with 30+ connectors",
    language: "Go",
    stars: 1247,
    url: "#",
  },
  {
    name: "vaultchain-core",
    description: "Distributed secret management — core cryptographic engine",
    language: "Rust",
    stars: 384,
    url: "#",
  },
  {
    name: "prism-lang",
    description: "Declarative DSL for data transformation pipelines",
    language: "Rust",
    stars: 218,
    url: "#",
  },
  {
    name: "spectral-gateway",
    description: "API gateway with adaptive rate limiting",
    language: "Rust",
    stars: 176,
    url: "#",
  },
];

// ─── CYB3R-BO1 Content ────────────────────────────────────────────────────────

export const cyberResearch = [
  {
    id: "jwt-confusion",
    title: "Algorithm Confusion in JWT Libraries",
    subtitle: "Vulnerability Research",
    year: "2024",
    severity: "High",
    tags: ["JWT", "Cryptography", "Web Security", "CVE"],
    summary:
      "Research into algorithm confusion vulnerabilities across 8 widely-used JWT libraries. Identified 3 previously undisclosed weaknesses in signature validation logic.",
    findings: [
      "2 CVEs assigned across two libraries",
      "All 8 libraries patched within 60 days of disclosure",
      "Attack technique documented with proof-of-concept",
    ],
    coverColor: "#10B981",
  },
  {
    id: "supply-chain-analysis",
    title: "Dependency Confusion at Scale",
    subtitle: "Supply Chain Security",
    year: "2024",
    severity: "Critical",
    tags: ["Supply Chain", "npm", "Package Security"],
    summary:
      "Systematic analysis of dependency confusion attack surface in npm ecosystem. Developed tooling to identify vulnerable package name patterns.",
    findings: [
      "1,400+ vulnerable package name patterns identified",
      "Tooling open-sourced for defensive use",
      "Research contributed to npm security team guidance",
    ],
    coverColor: "#2DD4BF",
  },
  {
    id: "kernel-analysis",
    title: "Linux Kernel Scheduler Analysis",
    subtitle: "Systems Security Research",
    year: "2023",
    severity: "Medium",
    tags: ["Linux", "Kernel", "Side Channels", "Timing"],
    summary:
      "Analysis of timing side-channels in Linux CFS scheduler under hypervisor environments. Demonstrated cross-VM information leakage under specific workload conditions.",
    findings: [
      "Timing leakage demonstrated in lab conditions",
      "Attack requires local access — limited real-world impact",
      "Mitigations proposed and reviewed by kernel team",
    ],
    coverColor: "#6B7280",
  },
];

export const securityProjects = [
  {
    id: "recon-engine",
    title: "Reconnaissance Engine",
    subtitle: "Automated Attack Surface Discovery",
    category: "Tool",
    year: "2024",
    tags: ["Recon", "OSINT", "Python", "Bug Bounty"],
    description:
      "A modular reconnaissance engine that correlates passive OSINT signals with active enumeration results. Used in bug bounty programs.",
    coverColor: "#10B981",
  },
  {
    id: "payload-lab",
    title: "Payload Laboratory",
    subtitle: "Web Vulnerability Testing Framework",
    category: "Tool",
    year: "2023",
    tags: ["Web Security", "XSS", "Injection", "Testing"],
    description:
      "A testing framework for web vulnerability research. Handles payload generation, delivery, and verification across common vulnerability classes.",
    coverColor: "#2DD4BF",
  },
  {
    id: "binary-analyst",
    title: "Binary Analysis Toolkit",
    subtitle: "Automated Reverse Engineering Support",
    category: "Tool",
    year: "2023",
    tags: ["Reverse Engineering", "Binary Analysis", "Python", "Ghidra"],
    description:
      "Scripts and plugins for Ghidra that automate common binary analysis tasks — function identification, string extraction, and cross-reference analysis.",
    coverColor: "#374151",
  },
  {
    id: "threat-map",
    title: "ThreatMap",
    subtitle: "Network Threat Visualization",
    category: "Tool",
    year: "2022",
    tags: ["Network Security", "Visualization", "Threat Intelligence"],
    description:
      "Real-time threat visualization tool that correlates network logs with threat intelligence feeds and renders the attack surface as an interactive graph.",
    coverColor: "#065F46",
  },
];

export const ctfArchive = [
  {
    id: "ctf1",
    event: "DEF CON CTF Qualifier 2024",
    placement: "Top 15%",
    year: "2024",
    categories: ["Pwn", "Web", "Reverse Engineering"],
    notableSolves: ["Custom heap exploitation", "JWT confusion chain", "Multi-stage web challenge"],
  },
  {
    id: "ctf2",
    event: "HTB Cyber Apocalypse 2024",
    placement: "Top 8%",
    year: "2024",
    categories: ["Web", "Forensics", "Cryptography"],
    notableSolves: ["Deserialization + SSRF chain", "Memory forensics challenge", "Custom cipher analysis"],
  },
  {
    id: "ctf3",
    event: "LACTF 2024",
    placement: "Top 20",
    year: "2024",
    categories: ["Web", "Misc"],
    notableSolves: ["First blood on web challenge", "Novel SQLi technique"],
  },
  {
    id: "ctf4",
    event: "picoCTF 2023",
    placement: "Top 5%",
    year: "2023",
    categories: ["Web", "Binary Exploitation", "Cryptography"],
    notableSolves: ["Buffer overflow chain", "AES padding oracle", "XSS to account takeover"],
  },
  {
    id: "ctf5",
    event: "NAHAMCON CTF 2023",
    placement: "Top 50",
    year: "2023",
    categories: ["Web", "OSINT"],
    notableSolves: ["SSRF to internal API", "Multi-step OSINT challenge"],
  },
];

// ─── Featured Work (Core page) ────────────────────────────────────────────────

export const cyberBlogPosts = [
  {
    id: "blog-1",
    title: "Algorithm Confusion: A Deep Dive",
    category: "Vulnerability Research",
    date: "2024-03",
    readTime: "12 min",
    excerpt:
      "JWT algorithm confusion vulnerabilities allow attackers to switch between symmetric and asymmetric algorithms. We analyzed 8 libraries, found 3 weaknesses, and worked with maintainers to patch all of them.",
    externalUrl: "#",
  },
  {
    id: "blog-2",
    title: "DEF CON 32 CTF Qualifier Writeup",
    category: "CTF Writeup",
    date: "2024-02",
    readTime: "8 min",
    excerpt:
      "A walkthrough of three challenges from the DEF CON 32 qualifier: a heap exploitation problem, a format string bug, and a cryptographic oracle attack. Placed in the top 15% of qualifying teams.",
    externalUrl: "#",
  },
  {
    id: "blog-3",
    title: "Dependency Confusion at Scale",
    category: "Security Research",
    date: "2024-01",
    readTime: "10 min",
    excerpt:
      "Systematic analysis of the npm dependency confusion attack surface. We identified 1,400+ vulnerable package name patterns, built open-source tooling, and contributed findings to npm security team guidance.",
    externalUrl: "#",
  },
  {
    id: "blog-4",
    title: "Understanding JWT Algorithm Confusion",
    category: "Tutorial",
    date: "2023-11",
    readTime: "15 min",
    excerpt:
      "A developer-focused guide to JWT security: what algorithm confusion is, why it happens, how to reproduce it in a local test environment, and which mitigations actually work.",
    externalUrl: "#",
  },
];

export const featuredWork = [
  {
    id: "nyx-rebrand",
    identity: "yuukaycee" as const,
    title: "NYX Bureau",
    discipline: "Brand Identity",
    year: "2024",
    description:
      "A complete visual identity system for a creative studio operating at the intersection of design and culture.",
    coverColor: "#67E8F9",
    path: "/yuukaycee",
  },
  {
    id: "vaultchain",
    identity: "spy" as const,
    title: "VaultChain",
    discipline: "Systems Engineering",
    year: "2024",
    description:
      "Distributed secret management for multi-tenant environments. 50k+ operations per second.",
    coverColor: "#CC1234",
    path: "/spy",
  },
  {
    id: "jwt-confusion",
    identity: "cyb3r" as const,
    title: "JWT Algorithm Confusion",
    discipline: "Security Research",
    year: "2024",
    description:
      "Vulnerability research across 8 JWT libraries. 2 CVEs. All libraries patched within 60 days.",
    coverColor: "#10B981",
    path: "/cyb3r",
  },
];
