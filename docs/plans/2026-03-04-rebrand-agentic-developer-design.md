# Rebrand Design: Agentic Full Stack Developer & AI Engineer

**Date:** 2026-03-04
**Approach:** B — Medium pivot (rewrite all texts + add value-prop block inside About)
**Scope:** script.js (all 3 langs) + index.html (HTML structure + tech bubbles + value-prop block)

---

## Summary

Shift site focus from "Full-Stack Blockchain Developer" → "Agentic Full Stack Developer & AI Engineer".
No structural changes to SVG animations, nav, or section order.
Blockchain/Web3 content stays but moves to the end of skills list.
AI agent workflow woven into About, Skills, and Contact — no new nav section.

---

## Section-by-Section Changes

### 1. `<head>` — Meta tags

**title (EN):** `VoloDev.eth — Agentic Full Stack Developer & AI Engineer`
**description (EN):** `Agentic Full Stack Developer & AI Engineer. Build production apps faster with multi-agent AI systems: Claude Code orchestration, parallel subagents, Figma-to-code MCP. Expert in Next.js, React, TypeScript, Python, Node.js, Solidity. 10+ years, 20+ shipped products.`
**keywords:** Add `agentic developer, AI engineer, Claude Code, multi-agent, AI orchestration` — de-emphasize "blockchain developer" as first keyword.

---

### 2. Hero Section

| Field | Before | After |
|-------|--------|-------|
| `title1` | Full-Stack Blockchain | Agentic Full Stack |
| `title2` | & AI Developer | Developer & AI Engineer |
| `subtitle` | Smart Contracts \| DeFi \| NFT... | Claude Code Agents \| Multi-Agent Systems \| Full-Stack Apps \| AI Integration \| Shopify \| SaaS \| Web3 |
| `stats.projects` | Projects Delivered | Products Shipped |

**Hero description (EN):**
> Full-stack developer & AI engineer with 10+ years experience. I build production-ready applications using multi-agent AI orchestration — Claude Code with specialized roles (Planner, Architect, Reviewer, Security Auditor, Implementer), parallel subagents, and third-party AI APIs (OpenAI, Gemini, Grok). One engineer. Team productivity. Expert in Next.js, React, TypeScript, Python, Node.js, Django, PHP/Symfony, Solidity — and every project ships with automated code review, security audit, and personal quality control.

**Tech bubbles replacements (index.html):**
- `Solidity` → `Claude Code`
- `Hardhat` → `Multi-Agent`
- `Web3.js` → `MCP API`
- `Wagmi` → `AI Orchestration`
- `AI Tools` → `Figma MCP`
- `AI API` → stays

---

### 3. About Section

**Profile tagline (under photo):**
- `"Blockchain Developer from Lviv, Ukraine"` → `"Agentic Full Stack Developer from Lviv, Ukraine"`
- `"Transforming ideas into Web3 reality"` → `"Shipping production apps with AI agent orchestration"`

**About intro (EN):**
> I'm a full-stack developer & AI engineer with 10+ years of experience and 20+ shipped products. I work with multi-agent AI systems — Claude Code CLI orchestrating specialized subagents in parallel (Planner, Architect, Implementer, Reviewer, Security Auditor) — to deliver production-ready applications faster and at a fraction of the cost of a traditional team. Every project ships with automated code review, security audit, and my personal quality control. Stack: Next.js, React, TypeScript, Python, Django, Node.js, PHP/Symfony, Solidity — plus Shopify app development, SaaS, and Web3 integration.

**New value-prop block (inside About, before achievements):**
3-card horizontal layout (`.value-prop-grid` + `.value-card`):

| Card | Icon | Title | Body |
|------|------|-------|------|
| 1 | 🤖 | AI Agent Quality | Automated review by Opus: bugs, security, UI/UX — every commit |
| 2 | ⚡ | Team Speed | Features ship in parallel: Architect + Implementer + Tester simultaneously |
| 3 | 💰 | Solo Cost | 1 engineer. No management overhead. No team coordination cost. |

CSS: reuse existing `.card` or `.achievement-item` patterns. New classes: `.value-prop-grid`, `.value-card`.

**Achievements — add AI framing prefix to descriptions:**
Each achievement description gets a sentence like: "Built using multi-agent AI orchestration with Claude Code."
Keep all project links, stats, and technical details.

---

### 4. Skills Section — New Category Order

**New category added FIRST:** `agentWorkflow`
**EN:** "AI Agents & Dev Workflow"
**UA:** "AI-агенти та Воркфлоу"
**DE:** "KI-Agenten & Workflow"

Items:
- `claudeCode`: Claude Code Orchestration
- `multiAgent`: Multi-Agent Systems (Opus / Sonnet / Haiku)
- `parallelAgents`: Parallel Subagent Execution
- `codeReview`: Automated Code Review & Security Audit
- `figmaMcp`: Figma → Code (MCP API)
- `thirdPartyAi`: OpenAI / Gemini / Grok API Integration
- `cicd`: Git → Vercel CI/CD Pipeline

**Category order after change:**
1. `agentWorkflow` ← NEW FIRST
2. `ai` (AI Integration & Tools)
3. `frontend`
4. `backend`
5. `python`
6. `shopify`
7. `tools`
8. `content`
9. `nft`
10. `blockchain` ← MOVED LAST

---

### 5. Contact Section

**Description (EN):**
> Whether you need a full-stack web app, AI agent integration, Shopify app, SaaS platform, e-commerce solution, or Web3/blockchain development — you get multi-agent AI engineering: faster delivery, automated quality control, and senior-level code review on every commit. Team output. Solo price.

**Form — new project type options added:**
- `aiAgentIntegration`: AI Agent Integration
- `multiAgentSystem`: Multi-Agent System Development

---

### 6. Footer

**EN:** `© 2026 VoloDev.eth — Agentic Full Stack Developer & AI Engineer. Team output. Solo price.`

---

## What Does NOT Change

- All SVG animations (hero dev-scene, term-banner, walk-banner)
- Nav structure and section order
- All project cards content (titles + descriptions + links)
- Stats numbers: 20+, 10+, $30+, 10+
- All project achievement facts and links

---

## Files to Modify

1. `public/script.js` — all text strings in `en`, `uk`, `de` translation objects
2. `public/index.html` — tech bubbles, value-prop block HTML, skills category order in HTML, meta tags, profile taglines

---

## Implementation Notes

- Value-prop block: insert before `.achievements` div inside `#about`
- Skills HTML: reorder `<div class="skill-category">` blocks, add new `agentWorkflow` category block
- Tech bubbles: edit `<span class="tech-bubble">` text in-place
- All i18n strings: update `translations.en.*`, `translations.uk.*`, `translations.de.*`
- Meta tags: update `<title>`, `<meta name="description">`, `<meta name="keywords">` and OG/Twitter equivalents
