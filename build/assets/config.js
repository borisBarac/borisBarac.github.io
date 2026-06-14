// ───────────────────────────────────────────────────────────
// SITE CONFIG — edit everything here. No build step required.
// Values are injected into the page by assets/main.js.
// ───────────────────────────────────────────────────────────
window.SITE_CONFIG = {
  // Brand shown in the header + footer.
  brand: "boris.barac",

  // Contact form opens a mailto: to this address.
  email: "boris.raptor@gmail.com",

  links: {
    home: "index.html",
    contact: "contact.html",

    // The "Experience" nav item + Career Log block jump here.
    linkedin: "https://www.linkedin.com/in/boris-barac-563a4b69/",

    // Social cards / footer links.
    github: "https://github.com/borisBarac",
    blog: "https://dev.to/boris9027",
    sourceCode: "#",
  },
};

// ───────────────────────────────────────────────────────────
// PROFILE — editable values injected at runtime by assets/main.js:
//   PROFILE_ROLE  -> composed into <title> as "{brand} — {role}" (home page)
//   PROFILE_DESC  -> home page hero tagline (.hero-desc)
//   PROFILE_HERO  -> home page hero headline (.hero-title, HTML allowed)
//   PROFILE_MD    -> home page "PROFILE.MD" block, rendered via marked.js
// Edit freely; no build step required.
// ───────────────────────────────────────────────────────────
window.PROFILE_ROLE = "Senior Systems Engineer";

window.PROFILE_DESC = "Ten years architecting and scaling platforms for millions of users — from modularising legacy monoliths to designing multi-agent AI systems. Leading squads of 5–8 engineers, owning it end-to-end, and taking it from messy to maintainable.";

window.PROFILE_HERO = 'THE BIGGER THE<br><span class="t-accent">PROBLEM,</span><br>THE BETTER.';

window.PROFILE_MD = `### ⚡️ What I build right now
- **Production LLM serving** — vLLM on Cloud Run GPUs, OpenAI-compatible endpoints, full Terraform
- **Fine-tuning pipelines** — LoRA on compact models, synthetic QA generation, orchestrated end-to-end with Metaflow
- **Performance engineering** — Rust N-API addons that **3×** Node.js throughput; WASM when it fits
- **Agentic tooling** — MCP servers, RAG + knowledge graphs, multi-agent orchestration
- **Full-stack delivery** — Schema to pixel: REST/GraphQL APIs, strict data contracts, native & web clients

### 💼 Past Selected work

| Project | What I did |
| :--- | :--- |
| **Mission-critical pharma intelligence platform** | Modularised 40% of a legacy monolith via Strangler Fig, then delivered a greenfield v2 in under a year. Owned full-stack delivery (native / .NET). |
| **Global live-streaming & OTT platforms** | Led squads delivering **sub-5s** live latency at **99.9%+ uptime**. Built a custom tvOS playback engine and Server-Driven UI, cutting new screen launches from weeks to minutes. |
| **Hyper-scale streaming app** | Served **millions of users** at **60fps** on low-end hardware by migrating a hybrid app to 100% native. Built a custom Gherkin→UI test framework on remote device farms. |

### 🛠 Stack
- **AI / ML:** Python, LangChain, RAG, Fine-tuning, Agentic Systems
- **Full-stack:** TypeScript, Node, React, Flutter
- **Infra / DevOps:** Docker, Terraform, CI/CD, AWS / GCP
- **Performance:** Rust (N-API, WASM)
- **Native mobile:** Swift, Objective-C

### Open for new projects
- Preference on FullStack roles

---
Building something ambitious? Let's talk.
Prague, CZ · boris.raptor@gmail.com · [LinkedIn](https://www.linkedin.com/in/boris-barac-563a4b69/) · [Blog](https://dev.to/boris9027)`;
