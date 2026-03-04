# Rebrand: Agentic Full Stack Developer & AI Engineer

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Shift portfolio focus from "Full-Stack Blockchain Developer" to "Agentic Full Stack Developer & AI Engineer" — emphasizing multi-agent AI workflow, code quality, speed, and cost-efficiency — across all 3 languages (EN/UA/DE).

**Architecture:** Text-only rebrand (Approach B — Medium pivot): rewrite all translation strings in `script.js`, update meta tags + tech bubbles + value-prop block HTML in `index.html`, add new CSS block in `styles.css`. No structural changes to SVG animations or nav.

**Tech Stack:** Vanilla HTML/CSS/JS. i18n via `data-i18n` attributes + `translations` object in `script.js`. No build step — edit files directly, verify visually in browser.

---

## Task 1: Update `<head>` Meta Tags

**Files:**
- Modify: `public/index.html:6-15`

**Step 1: Replace `<title>` tag**

Find:
```html
<title>VoloDev.eth - Blockchain Developer & Web3 Innovator | Python & Node.js Expert</title>
```
Replace with:
```html
<title>VoloDev.eth — Agentic Full Stack Developer & AI Engineer</title>
```

**Step 2: Replace `<meta name="description">`**

Find:
```html
<meta name="description" content="Full-stack blockchain developer specializing in NFT marketplaces, AI trading bots (Python/Node.js), Shopify app development, decentralized gaming, e-commerce solutions. Expert in Next.js, React, Remix, Solidity, ChatGPT, Claude, Gemini, Midjourney, Sora, Runway. 10+ years, 100+ projects. $30+/hr.">
```
Replace with:
```html
<meta name="description" content="Agentic Full Stack Developer & AI Engineer. Build production apps faster with multi-agent AI systems: Claude Code orchestration, parallel subagents, Figma-to-code MCP. Expert in Next.js, React, TypeScript, Python, Node.js, Solidity. 10+ years, 20+ shipped products.">
```

**Step 3: Replace `<meta name="keywords">`**

Find:
```html
<meta name="keywords" content="blockchain developer, NFT marketplace, web3, smart contracts, solidity, python developer, nodejs, AI trading bot, ChatGPT, Claude, Claude Code, Gemini, Midjourney, Sora, Runway, next.js, react, remix, typescript, binance bot, social media automation, zora, farcaster, hardhat, wagmi, rainbowkit, ethereum, base network, shopify app developer, shopify polaris, AI product descriptions, virtual try-on, VoloDev">
```
Replace with:
```html
<meta name="keywords" content="agentic developer, AI engineer, Claude Code, multi-agent systems, AI orchestration, full stack developer, Next.js, React, TypeScript, Python, Django, Node.js, PHP, Symfony, Shopify app developer, SaaS developer, blockchain developer, smart contracts, Solidity, NFT marketplace, web3, VoloDev">
```

**Step 4: Replace OG + Twitter meta tags**

Find:
```html
<meta property="og:title" content="VoloDev.eth - Blockchain Developer & Web3 Innovator | Python & Node.js Expert">
<meta property="og:description" content="Full-stack blockchain developer specializing in NFT marketplaces, AI trading bots, Shopify apps, decentralized gaming platforms, and e-commerce solutions. Expert in Python, Node.js, Next.js, React, Solidity.">
```
Replace with:
```html
<meta property="og:title" content="VoloDev.eth — Agentic Full Stack Developer & AI Engineer">
<meta property="og:description" content="Build production apps faster with multi-agent AI systems: Claude Code orchestration, parallel subagents, Figma-to-code MCP. Expert in Next.js, React, TypeScript, Python, Node.js, Solidity.">
```

Find:
```html
<meta name="twitter:title" content="VoloDev.eth - Blockchain Developer & Web3 Innovator">
<meta name="twitter:description" content="Full-stack blockchain developer specializing in NFT marketplaces, AI trading bots, Shopify apps, decentralized gaming platforms, and e-commerce solutions. Expert in Python, Node.js, Next.js, React, Solidity.">
```
Replace with:
```html
<meta name="twitter:title" content="VoloDev.eth — Agentic Full Stack Developer & AI Engineer">
<meta name="twitter:description" content="Build production apps faster with multi-agent AI systems: Claude Code orchestration, parallel subagents, Figma-to-code MCP. Expert in Next.js, React, TypeScript, Python, Node.js, Solidity.">
```

**Step 5: Commit**
```bash
git add public/index.html
git commit -m "rebrand: update meta tags — Agentic Full Stack Developer & AI Engineer"
```

---

## Task 2: Hero Translations (script.js — all 3 languages)

**Files:**
- Modify: `public/script.js` (EN: ~lines 5-13, UA: ~lines 205-213, DE: ~lines 405-413)

**Step 1: Update EN hero translations**

In `translations.en.hero`, replace:
```js
title1: 'Full-Stack Blockchain',
title2: '& AI Developer',
subtitle: 'Smart Contracts | DeFi | NFT Marketplaces | AI Trading Bots | Shopify Apps | E-Commerce | SaaS',
description: 'Blockchain developer with 10+ years experience building production-ready Web3 applications. Specializing in <strong>Solidity smart contracts</strong>, <strong>NFT marketplaces</strong>, <strong>DeFi staking platforms</strong>, <strong>AI trading bots</strong>, <strong>Shopify apps</strong>, <strong>SaaS platforms</strong>, and <strong>full-stack e-commerce</strong> solutions. Expert in <strong>Next.js, React, Remix, TypeScript, Python, Django, Node.js, PHP, Symfony</strong>, and AI tools (<strong>ChatGPT, Claude, Gemini, Midjourney, Sora, Runway</strong>).',
```
With:
```js
title1: 'Agentic Full Stack',
title2: 'Developer & AI Engineer',
subtitle: 'Claude Code Agents | Multi-Agent Systems | Full-Stack Apps | AI Integration | Shopify | SaaS | Web3',
description: 'Full-stack developer & AI engineer with 10+ years experience. I build production-ready applications using multi-agent AI orchestration — Claude Code with specialized roles (Planner, Architect, Reviewer, Security Auditor, Implementer), parallel subagents, and third-party AI APIs (OpenAI, Gemini, Grok). One engineer. Team productivity. Expert in <strong>Next.js, React, TypeScript, Python, Django, Node.js, PHP/Symfony, Solidity</strong> — every project ships with automated code review, security audit, and personal quality control.',
```

Also in `translations.en.hero.stats`, replace:
```js
projects: 'Projects Delivered',
```
With:
```js
projects: 'Products Shipped',
```

**Step 2: Update UA hero translations**

In `translations.uk.hero`, replace:
```js
title1: 'Full-Stack Blockchain',
title2: '& AI Розробник',
subtitle: 'Смарт-контракти | DeFi | NFT Маркетплейси | AI Торгові Боти | Shopify Додатки | E-Commerce | SaaS',
description: 'Blockchain розробник з 10+ роками досвіду створення продакшн-ready Web3 додатків. Спеціалізуюся на <strong>Solidity смарт-контрактах</strong>, <strong>NFT маркетплейсах</strong>, <strong>DeFi стейкінг платформах</strong>, <strong>AI торгових ботах</strong>, <strong>Shopify додатках</strong>, <strong>SaaS платформах</strong> та <strong>full-stack e-commerce</strong> рішеннях. Експерт у <strong>Next.js, React, Remix, TypeScript, Python, Django, Node.js, PHP, Symfony</strong> та AI інструментах (<strong>ChatGPT, Claude, Gemini, Midjourney, Sora, Runway</strong>).',
```
With:
```js
title1: 'Agentic Full Stack',
title2: 'Розробник та AI Інженер',
subtitle: 'Claude Code Агенти | Мульти-агентні Системи | Full-Stack Додатки | AI Інтеграція | Shopify | SaaS | Web3',
description: 'Full-stack розробник та AI інженер з 10+ роками досвіду. Будую продакшн-ready додатки з мульти-агентною AI оркестрацією — Claude Code зі спеціалізованими ролями (Planner, Architect, Reviewer, Security Auditor, Implementer), паралельними субагентами та AI API сторонніх провайдерів (OpenAI, Gemini, Grok). Один інженер. Продуктивність команди. Експерт у <strong>Next.js, React, TypeScript, Python, Django, Node.js, PHP/Symfony, Solidity</strong> — кожен проект поставляється з автоматизованим code review, аудитом безпеки та особистим контролем якості.',
```

Also in `translations.uk.hero.stats`, replace:
```js
projects: 'Проектів виконано',
```
With:
```js
projects: 'Продуктів реалізовано',
```

**Step 3: Update DE hero translations**

In `translations.de.hero`, replace:
```js
title1: 'Full-Stack Blockchain',
title2: '& KI-Entwickler',
subtitle: 'Smart Contracts | DeFi | NFT-Marktplätze | KI-Trading-Bots | Shopify-Apps | E-Commerce | SaaS',
description: 'Blockchain-Entwickler mit 10+ Jahren Erfahrung in der Entwicklung produktionsreifer Web3-Anwendungen. Spezialisierung auf <strong>Solidity-Smart-Contracts</strong>, <strong>NFT-Marktplätze</strong>, <strong>DeFi-Staking-Plattformen</strong>, <strong>KI-Trading-Bots</strong>, <strong>Shopify-Apps</strong>, <strong>SaaS-Plattformen</strong> und <strong>Full-Stack-E-Commerce</strong>-Lösungen. Experte in <strong>Next.js, React, Remix, TypeScript, Python, Django, Node.js, PHP, Symfony</strong> und KI-Tools (<strong>ChatGPT, Claude, Gemini, Midjourney, Sora, Runway</strong>).',
```
With:
```js
title1: 'Agentic Full Stack',
title2: 'Entwickler & KI-Ingenieur',
subtitle: 'Claude Code Agenten | Multi-Agenten-Systeme | Full-Stack Apps | KI-Integration | Shopify | SaaS | Web3',
description: 'Full-Stack-Entwickler & KI-Ingenieur mit 10+ Jahren Erfahrung. Ich entwickle produktionsreife Anwendungen mit Multi-Agenten-KI-Orchestrierung — Claude Code mit spezialisierten Rollen (Planner, Architect, Reviewer, Security Auditor, Implementer), parallelen Subagenten und Drittanbieter-KI-APIs (OpenAI, Gemini, Grok). Ein Ingenieur. Team-Produktivität. Experte in <strong>Next.js, React, TypeScript, Python, Django, Node.js, PHP/Symfony, Solidity</strong> — jedes Projekt wird mit automatischem Code-Review, Sicherheitsaudit und persönlicher Qualitätskontrolle geliefert.',
```

Also in `translations.de.hero.stats`, replace:
```js
projects: 'Abgeschlossene Projekte',
```
With:
```js
projects: 'Ausgelieferte Produkte',
```

**Step 4: Commit**
```bash
git add public/script.js
git commit -m "rebrand: update hero translations EN/UA/DE — agentic developer positioning"
```

---

## Task 3: Tech Bubbles in Hero (index.html)

**Files:**
- Modify: `public/index.html:288-305`

**Step 1: Replace 5 tech bubble texts**

Find and replace these specific `<span class="tech-bubble">` elements (keep `style` attributes unchanged):

| Find | Replace with |
|------|-------------|
| `<span class="tech-bubble" style="--i:2; --dir:-1.5">Solidity</span>` | `<span class="tech-bubble" style="--i:2; --dir:-1.5">Claude Code</span>` |
| `<span class="tech-bubble" style="--i:7; --dir:3.0">Web3.js</span>` | `<span class="tech-bubble" style="--i:7; --dir:3.0">Multi-Agent</span>` |
| `<span class="tech-bubble" style="--i:8; --dir:-2.5">AI API</span>` | `<span class="tech-bubble" style="--i:8; --dir:-2.5">MCP API</span>` |
| `<span class="tech-bubble" style="--i:12; --dir:-1.8">Hardhat</span>` | `<span class="tech-bubble" style="--i:12; --dir:-1.8">AI Orchestration</span>` |
| `<span class="tech-bubble" style="--i:15; --dir:1.0">AI Tools</span>` | `<span class="tech-bubble" style="--i:15; --dir:1.0">Figma MCP</span>` |
| `<span class="tech-bubble" style="--i:16; --dir:-1.2">Wagmi</span>` | `<span class="tech-bubble" style="--i:16; --dir:-1.2">Subagents</span>` |

**Step 2: Verify in browser** — open `public/index.html` in browser, check floating bubbles show new tech names.

**Step 3: Commit**
```bash
git add public/index.html
git commit -m "rebrand: update hero tech bubbles — AI agent tech stack"
```

---

## Task 4: About Translations + valueProp Keys (script.js — all 3 langs)

**Files:**
- Modify: `public/script.js` (EN: ~lines 15-20, UA: ~lines 215-220, DE: ~lines 415-420)

**Step 1: Update EN about translations**

In `translations.en.about`, replace:
```js
intro: 'I am a full-stack blockchain developer and Web3 innovator with 10+ years of experience and 20+ completed projects. My expertise spans NFT marketplaces, AI-powered trading bots, Shopify app development, decentralized gaming platforms, e-commerce solutions, and social media automation. I specialize in Python, Node.js, and PHP/Symfony development with deep AI integration (ChatGPT, Claude, Claude Code, Gemini, Midjourney, Sora, Runway).',
achievementsTitle: 'Key Achievements & Expertise',
profileLocation: 'Blockchain Developer from Lviv, Ukraine',
profileTagline: 'Transforming ideas into Web3 reality'
```
With:
```js
intro: 'I\'m a full-stack developer & AI engineer with 10+ years of experience and 20+ shipped products. I work with multi-agent AI systems — Claude Code CLI orchestrating specialized subagents in parallel (Planner, Architect, Implementer, Reviewer, Security Auditor) — to deliver production-ready applications faster and at a fraction of the cost of a traditional team. Every project ships with automated code review, security audit, and my personal quality control. Stack: <strong>Next.js, React, TypeScript, Python, Django, Node.js, PHP/Symfony, Solidity</strong> — plus Shopify app development, SaaS, and Web3 integration.',
achievementsTitle: 'Key Achievements & Expertise',
profileLocation: 'Agentic Full Stack Developer from Lviv, Ukraine',
profileTagline: 'Shipping production apps with AI agent orchestration'
```

**Step 2: Add EN valueProp translations**

After `translations.en.projects` (find `projects: { title: 'Featured Projects' },`) add:
```js
valueProp: {
    quality: { title: 'AI Agent Quality', desc: 'Automated review by Opus: bugs, security, UI/UX — every commit' },
    speed: { title: 'Team Speed', desc: 'Features ship in parallel: Architect + Implementer + Tester simultaneously' },
    cost: { title: 'Solo Cost', desc: '1 engineer. No management overhead. No team coordination cost.' }
},
```

**Step 3: Update UA about translations**

In `translations.uk.about`, replace:
```js
intro: 'Я full-stack blockchain розробник та Web3 інноватор з 10+ роками досвіду та 20+ завершеними проектами. Моя експертиза охоплює NFT маркетплейси, AI-powered торгових ботів, розробку Shopify додатків, децентралізовані ігрові платформи, e-commerce рішення та автоматизацію соціальних мереж. Спеціалізуюся на Python, Node.js та PHP/Symfony розробці з глибокою AI інтеграцією (ChatGPT, Claude, Claude Code, Gemini, Midjourney, Sora, Runway).',
achievementsTitle: 'Ключові досягнення та експертиза',
profileLocation: 'Blockchain розробник зі Львова, Україна',
profileTagline: 'Перетворюю ідеї на Web3 реальність'
```
With:
```js
intro: 'Я full-stack розробник та AI інженер з 10+ роками досвіду та 20+ реалізованими продуктами. Працюю з мульти-агентними AI системами — Claude Code CLI оркеструє спеціалізованих субагентів паралельно (Planner, Architect, Implementer, Reviewer, Security Auditor) — щоб доставляти продакшн-ready додатки швидше та вдвічі дешевше ніж традиційна команда. Кожен проект поставляється з автоматизованим code review, аудитом безпеки та моїм особистим контролем якості. Стек: <strong>Next.js, React, TypeScript, Python, Django, Node.js, PHP/Symfony, Solidity</strong> — плюс розробка Shopify додатків, SaaS та Web3 інтеграція.',
achievementsTitle: 'Ключові досягнення та експертиза',
profileLocation: 'Agentic Full Stack Розробник зі Львова, Україна',
profileTagline: 'Постачаю продакшн-додатки з AI агентною оркестрацією'
```

**Step 4: Add UA valueProp translations**

After `translations.uk.projects` (find `projects: { title: 'Вибрані проекти' },`) add:
```js
valueProp: {
    quality: { title: 'Якість AI Агента', desc: 'Автоматизований review від Opus: баги, безпека, UI/UX — кожен коміт' },
    speed: { title: 'Швидкість Команди', desc: 'Фічі поставляються паралельно: Архітектор + Імплементатор + Тестер одночасно' },
    cost: { title: 'Ціна Одного Спеціаліста', desc: '1 інженер. Без управлінських витрат. Без витрат на координацію команди.' }
},
```

**Step 5: Update DE about translations**

In `translations.de.about`, replace:
```js
intro: 'Ich bin ein Full-Stack-Blockchain-Entwickler und Web3-Innovator mit 10+ Jahren Erfahrung und 20+ abgeschlossenen Projekten. Mein Fachwissen umfasst NFT-Marktplätze, KI-gestützte Trading-Bots, Shopify-App-Entwicklung, dezentrale Gaming-Plattformen, E-Commerce-Lösungen und Social-Media-Automatisierung. Ich spezialisiere mich auf Python-, Node.js- und PHP/Symfony-Entwicklung mit tiefer KI-Integration (ChatGPT, Claude, Claude Code, Gemini, Midjourney, Sora, Runway).',
achievementsTitle: 'Wichtigste Erfolge & Fachkenntnisse',
profileLocation: 'Blockchain-Entwickler aus Lwiw, Ukraine',
profileTagline: 'Ideen in Web3-Realität verwandeln'
```
With:
```js
intro: 'Ich bin ein Full-Stack-Entwickler & KI-Ingenieur mit 10+ Jahren Erfahrung und 20+ ausgelieferten Produkten. Ich arbeite mit Multi-Agenten-KI-Systemen — Claude Code CLI orchestriert spezialisierte Subagenten parallel (Planner, Architect, Implementer, Reviewer, Security Auditor) — um produktionsreife Anwendungen schneller und zu einem Bruchteil der Kosten eines traditionellen Teams zu liefern. Jedes Projekt wird mit automatischem Code-Review, Sicherheitsaudit und persönlicher Qualitätskontrolle geliefert. Stack: <strong>Next.js, React, TypeScript, Python, Django, Node.js, PHP/Symfony, Solidity</strong> — plus Shopify-App-Entwicklung, SaaS und Web3-Integration.',
achievementsTitle: 'Wichtigste Erfolge & Fachkenntnisse',
profileLocation: 'Agentic Full Stack Entwickler aus Lwiw, Ukraine',
profileTagline: 'Produktions-Apps mit KI-Agenten-Orchestrierung liefern'
```

**Step 6: Add DE valueProp translations**

After `translations.de.projects` (find `projects: { title: 'Ausgewählte Projekte' },`) add:
```js
valueProp: {
    quality: { title: 'KI-Agenten-Qualität', desc: 'Automatisiertes Review durch Opus: Bugs, Sicherheit, UI/UX — bei jedem Commit' },
    speed: { title: 'Team-Geschwindigkeit', desc: 'Features werden parallel geliefert: Architekt + Implementierer + Tester gleichzeitig' },
    cost: { title: 'Solo-Preis', desc: '1 Ingenieur. Kein Management-Overhead. Keine Team-Koordinationskosten.' }
},
```

**Step 7: Commit**
```bash
git add public/script.js
git commit -m "rebrand: update about translations + add valueProp keys EN/UA/DE"
```

---

## Task 5: Value-Prop Block HTML + CSS

**Files:**
- Modify: `public/index.html` (insert before `<div class="achievements">`)
- Modify: `public/styles.css` (append at end of about-section styles)

**Step 1: Insert value-prop HTML block**

In `public/index.html`, find:
```html
            <div class="achievements">
                <h3 data-i18n="about.achievementsTitle">Key Achievements & Expertise</h3>
```

Insert the following block **immediately before** `<div class="achievements">`:
```html
            <div class="value-prop-grid">
                <div class="value-card">
                    <div class="value-card-icon">🤖</div>
                    <h4 class="value-card-title" data-i18n="valueProp.quality.title">AI Agent Quality</h4>
                    <p class="value-card-desc" data-i18n="valueProp.quality.desc">Automated review by Opus: bugs, security, UI/UX — every commit</p>
                </div>
                <div class="value-card">
                    <div class="value-card-icon">⚡</div>
                    <h4 class="value-card-title" data-i18n="valueProp.speed.title">Team Speed</h4>
                    <p class="value-card-desc" data-i18n="valueProp.speed.desc">Features ship in parallel: Architect + Implementer + Tester simultaneously</p>
                </div>
                <div class="value-card">
                    <div class="value-card-icon">💰</div>
                    <h4 class="value-card-title" data-i18n="valueProp.cost.title">Solo Cost</h4>
                    <p class="value-card-desc" data-i18n="valueProp.cost.desc">1 engineer. No management overhead. No team coordination cost.</p>
                </div>
            </div>

```

**Step 2: Add CSS for value-prop block**

In `public/styles.css`, find the `.achievements` styles block. Add the following **before** `.achievements {`:
```css
/* Value Proposition Cards */
.value-prop-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    margin: 2rem 0 2.5rem;
}

.value-card {
    background: rgba(99, 102, 241, 0.06);
    border: 1px solid rgba(99, 102, 241, 0.18);
    border-radius: 12px;
    padding: 1.5rem 1.25rem;
    text-align: center;
    transition: border-color 0.2s, transform 0.2s;
}

.value-card:hover {
    border-color: rgba(99, 102, 241, 0.4);
    transform: translateY(-2px);
}

.value-card-icon {
    font-size: 2rem;
    margin-bottom: 0.75rem;
    display: block;
}

.value-card-title {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 0.5rem;
}

.value-card-desc {
    font-size: 0.82rem;
    color: var(--text-secondary);
    line-height: 1.55;
    margin: 0;
}

@media (max-width: 768px) {
    .value-prop-grid {
        grid-template-columns: 1fr;
    }
}

```

**Step 3: Verify** — open `public/index.html` in browser, scroll to About section. You should see 3 cards (🤖 ⚡ 💰) between the intro paragraph and achievements list. Switch languages (EN/UA/DE) to verify translations load correctly.

**Step 4: Commit**
```bash
git add public/index.html public/styles.css
git commit -m "rebrand: add value-prop block HTML + CSS (Quality / Speed / Cost)"
```

---

## Task 6: Skills Translations — Add agentWorkflow Category (script.js)

**Files:**
- Modify: `public/script.js`

**Step 1: Add EN agentWorkflow category**

In `translations.en.skills.cat`, add `agentWorkflow` as the **first** key (before `blockchain:`):
```js
cat: {
    agentWorkflow: 'AI Agents & Dev Workflow',
    blockchain: 'Blockchain Development',
    // ... rest unchanged
```

In `translations.en.skills.items`, add new items (can be appended after existing items):
```js
claudeCode: 'Claude Code Orchestration',
multiAgent: 'Multi-Agent Systems (Opus / Sonnet / Haiku)',
parallelAgents: 'Parallel Subagent Execution',
codeReview: 'Automated Code Review & Security Audit',
figmaMcp: 'Figma → Code (MCP API)',
thirdPartyAi: 'OpenAI / Gemini / Grok API Integration',
cicd: 'Git → Vercel CI/CD Pipeline',
```

**Step 2: Add UA agentWorkflow category**

In `translations.uk.skills.cat`, add `agentWorkflow` as the **first** key:
```js
cat: {
    agentWorkflow: 'AI-агенти та Воркфлоу',
    blockchain: 'Blockchain-розробка',
    // ... rest unchanged
```

In `translations.uk.skills.items`, append:
```js
claudeCode: 'Claude Code Оркестрація',
multiAgent: 'Мульти-агентні Системи (Opus / Sonnet / Haiku)',
parallelAgents: 'Паралельне Виконання Субагентів',
codeReview: 'Автоматизований Code Review та Аудит Безпеки',
figmaMcp: 'Figma → Код (MCP API)',
thirdPartyAi: 'OpenAI / Gemini / Grok API Інтеграція',
cicd: 'Git → Vercel CI/CD Пайплайн',
```

**Step 3: Add DE agentWorkflow category**

In `translations.de.skills.cat`, add `agentWorkflow` as the **first** key:
```js
cat: {
    agentWorkflow: 'KI-Agenten & Workflow',
    blockchain: 'Blockchain-Entwicklung',
    // ... rest unchanged
```

In `translations.de.skills.items`, append:
```js
claudeCode: 'Claude Code Orchestrierung',
multiAgent: 'Multi-Agenten-Systeme (Opus / Sonnet / Haiku)',
parallelAgents: 'Parallele Subagenten-Ausführung',
codeReview: 'Automatisiertes Code-Review & Sicherheitsaudit',
figmaMcp: 'Figma → Code (MCP API)',
thirdPartyAi: 'OpenAI / Gemini / Grok API Integration',
cicd: 'Git → Vercel CI/CD Pipeline',
```

**Step 4: Commit**
```bash
git add public/script.js
git commit -m "rebrand: add agentWorkflow skills category translations EN/UA/DE"
```

---

## Task 7: Skills HTML — Add agentWorkflow First, Blockchain Last

**Files:**
- Modify: `public/index.html:1019-1275` (skills section)

**Step 1: Add agentWorkflow skill-category block at the top**

In `public/index.html`, find the skills section start:
```html
            <div class="skills-grid">
                <div class="skill-category">
                    <h3><i class="fas fa-cube"></i> <span data-i18n="skills.cat.blockchain">Blockchain Development</span></h3>
```

Insert the new agentWorkflow category block **immediately after** `<div class="skills-grid">`:
```html
                <div class="skill-category">
                    <h3><i class="fas fa-robot"></i> <span data-i18n="skills.cat.agentWorkflow">AI Agents & Dev Workflow</span></h3>
                    <div class="skill-items">
                        <div class="skill-item">
                            <span data-i18n="skills.items.claudeCode">Claude Code Orchestration</span>
                            <div class="skill-bar"><div class="skill-progress" style="width: 98%"></div></div>
                        </div>
                        <div class="skill-item">
                            <span data-i18n="skills.items.multiAgent">Multi-Agent Systems (Opus / Sonnet / Haiku)</span>
                            <div class="skill-bar"><div class="skill-progress" style="width: 95%"></div></div>
                        </div>
                        <div class="skill-item">
                            <span data-i18n="skills.items.parallelAgents">Parallel Subagent Execution</span>
                            <div class="skill-bar"><div class="skill-progress" style="width: 95%"></div></div>
                        </div>
                        <div class="skill-item">
                            <span data-i18n="skills.items.codeReview">Automated Code Review & Security Audit</span>
                            <div class="skill-bar"><div class="skill-progress" style="width: 98%"></div></div>
                        </div>
                        <div class="skill-item">
                            <span data-i18n="skills.items.figmaMcp">Figma → Code (MCP API)</span>
                            <div class="skill-bar"><div class="skill-progress" style="width: 90%"></div></div>
                        </div>
                        <div class="skill-item">
                            <span data-i18n="skills.items.thirdPartyAi">OpenAI / Gemini / Grok API Integration</span>
                            <div class="skill-bar"><div class="skill-progress" style="width: 92%"></div></div>
                        </div>
                        <div class="skill-item">
                            <span data-i18n="skills.items.cicd">Git → Vercel CI/CD Pipeline</span>
                            <div class="skill-bar"><div class="skill-progress" style="width: 95%"></div></div>
                        </div>
                    </div>
                </div>

```

**Step 2: Move blockchain category to last**

The blockchain `<div class="skill-category">` block starts at approximately line 1023 and ends at line 1047 (the closing `</div>` before the next Python category).

Cut the entire blockchain skill-category block (lines 1023-1047 + blank line):
```html
                <div class="skill-category">
                    <h3><i class="fas fa-cube"></i> <span data-i18n="skills.cat.blockchain">Blockchain Development</span></h3>
                    <div class="skill-items">
                        <div class="skill-item">
                            <span>Smart Contracts</span>
                            <div class="skill-bar"><div class="skill-progress" style="width: 95%"></div></div>
                        </div>
                        <div class="skill-item">
                            <span>Solidity</span>
                            <div class="skill-bar"><div class="skill-progress" style="width: 95%"></div></div>
                        </div>
                        <div class="skill-item">
                            <span>Web3.js / Ethers.js / Viem</span>
                            <div class="skill-bar"><div class="skill-progress" style="width: 90%"></div></div>
                        </div>
                        <div class="skill-item">
                            <span>Hardhat / Foundry</span>
                            <div class="skill-bar"><div class="skill-progress" style="width: 90%"></div></div>
                        </div>
                        <div class="skill-item">
                            <span>Wagmi / RainbowKit</span>
                            <div class="skill-bar"><div class="skill-progress" style="width: 85%"></div></div>
                        </div>
                    </div>
                </div>
```

Paste it at the **very end** of `<div class="skills-grid">`, just before the closing `</div>` of `skills-grid`.

**Step 3: Verify** — open in browser, scroll to Skills. First category should be "AI Agents & Dev Workflow", last should be "Blockchain Development".

**Step 4: Commit**
```bash
git add public/index.html
git commit -m "rebrand: reorder skills — agentWorkflow first, blockchain last"
```

---

## Task 8: Contact + Footer Translations (script.js — all 3 langs)

**Files:**
- Modify: `public/script.js`

**Step 1: Update EN contact description**

In `translations.en.contact`, replace:
```js
description: 'Whether you need NFT marketplace development, decentralized gaming platforms, AI-powered trading bots, Shopify app development, e-commerce solutions, social media automation, or custom blockchain development - I bring deep technical expertise and proven results to every project.',
```
With:
```js
description: 'Whether you need a full-stack web app, AI agent integration, Shopify app, SaaS platform, e-commerce solution, or Web3/blockchain development — you get multi-agent AI engineering: faster delivery, automated quality control, and senior-level code review on every commit. Team output. Solo price.',
```

**Step 2: Add EN form new project type translations**

In `translations.en.form`, after `shopifyApp: 'Shopify App Development',` add:
```js
aiAgentIntegration: 'AI Agent Integration',
multiAgentSystem: 'Multi-Agent System Development',
```

**Step 3: Update EN footer**

In `translations.en`, replace:
```js
footer: { copyright: '© 2026 VoloDev.eth - Blockchain Developer & Web3 Innovator. Ready to transform your vision into reality.' }
```
With:
```js
footer: { copyright: '© 2026 VoloDev.eth — Agentic Full Stack Developer & AI Engineer. Team output. Solo price.' }
```

**Step 4: Update UA contact description**

In `translations.uk.contact`, replace:
```js
description: 'Чи потрібна вам розробка NFT маркетплейсу, децентралізованої ігрової платформи, AI торгових ботів, розробку Shopify додатків, e-commerce рішень, автоматизації соціальних мереж або кастомна blockchain розробка - я приношу глибоку технічну експертизу та перевірені результати в кожен проект.',
```
With:
```js
description: 'Чи потрібен full-stack веб-додаток, AI агентна інтеграція, Shopify додаток, SaaS платформа, e-commerce рішення або Web3/blockchain розробка — ви отримуєте мульти-агентний AI інжиніринг: швидша доставка, автоматизований контроль якості та code review рівня senior на кожному коміті. Продуктивність команди. Ціна одного спеціаліста.',
```

**Step 5: Add UA form new project type translations**

In `translations.uk.form`, after `shopifyApp: 'Розробка Shopify додатків',` add:
```js
aiAgentIntegration: 'AI Агентна Інтеграція',
multiAgentSystem: 'Розробка Мульти-агентної Системи',
```

**Step 6: Update UA footer**

In `translations.uk`, replace:
```js
footer: { copyright: '© 2026 VoloDev.eth - Blockchain розробник та Web3 інноватор. Готовий перетворити вашу візію на реальність.' }
```
With:
```js
footer: { copyright: '© 2026 VoloDev.eth — Agentic Full Stack Розробник та AI Інженер. Продуктивність команди. Ціна одного.' }
```

**Step 7: Update DE contact description**

In `translations.de.contact`, replace:
```js
description: 'Ob Sie eine NFT-Marktplatz-Entwicklung, dezentrale Gaming-Plattformen, KI-Trading-Bots, Shopify-App-Entwicklung, E-Commerce-Lösungen, Social-Media-Automatisierung oder individuelle Blockchain-Entwicklung benötigen – ich bringe tiefes technisches Fachwissen und bewährte Ergebnisse in jedes Projekt.',
```
With:
```js
description: 'Ob Sie eine Full-Stack-Web-App, KI-Agenten-Integration, Shopify-App, SaaS-Plattform, E-Commerce-Lösung oder Web3/Blockchain-Entwicklung benötigen — Sie erhalten Multi-Agenten-KI-Engineering: schnellere Lieferung, automatisierte Qualitätskontrolle und Senior-Level-Code-Review bei jedem Commit. Team-Output. Solo-Preis.',
```

**Step 8: Add DE form new project type translations**

In `translations.de.form`, after `shopifyApp: 'Shopify-App-Entwicklung',` add:
```js
aiAgentIntegration: 'KI-Agenten-Integration',
multiAgentSystem: 'Multi-Agenten-System-Entwicklung',
```

**Step 9: Update DE footer**

Find and replace in `translations.de`:
```js
footer: { copyright: '© 2026 VoloDev.eth - Blockchain-Entwickler & Web3-Innovator. Bereit, Ihre Vision in die Realität umzusetzen.' }
```
With:
```js
footer: { copyright: '© 2026 VoloDev.eth — Agentic Full Stack Entwickler & KI-Ingenieur. Team-Output. Solo-Preis.' }
```

**Step 10: Commit**
```bash
git add public/script.js
git commit -m "rebrand: update contact + footer translations, add AI agent form types EN/UA/DE"
```

---

## Task 9: Form HTML — Add 2 New Project Type Options

**Files:**
- Modify: `public/index.html:1553-1567`

**Step 1: Add new options to project type select**

In `public/index.html`, find the `<select id="project-type">` block. After the first `<option value="">` (the placeholder), add two new options **at the top** of the list (before `nft-marketplace`):
```html
                                <option value="ai-agent-integration" data-i18n="form.aiAgentIntegration">AI Agent Integration</option>
                                <option value="multi-agent-system" data-i18n="form.multiAgentSystem">Multi-Agent System Development</option>
```

The result should look like:
```html
<select id="project-type" name="project-type" required>
    <option value="" data-i18n="form.selectProject">Select Project Type</option>
    <option value="ai-agent-integration" data-i18n="form.aiAgentIntegration">AI Agent Integration</option>
    <option value="multi-agent-system" data-i18n="form.multiAgentSystem">Multi-Agent System Development</option>
    <option value="nft-marketplace" data-i18n="form.nftMarketplace">NFT Marketplace Development</option>
    ...
```

**Step 2: Commit**
```bash
git add public/index.html
git commit -m "rebrand: add AI agent + multi-agent system project types to contact form"
```

---

## Task 10: Achievements — Add AI Agent Framing (script.js)

**Files:**
- Modify: `public/script.js` (achievements object in all 3 langs)

**Step 1: Update EN achievement descriptions**

Replace each `description` in `translations.en.achievements` with the updated version below (prepend AI workflow framing, keep all facts + links intact):

**inkbot.description:**
```
'Built with multi-agent AI orchestration using Claude Code — from architecture planning to security audit. AI-powered Shopify app that generates SEO-optimized product descriptions using DeepSeek V3. Features bulk generation, brand voice analysis, SEO scoring, 111+ languages, and subscription plans. <a href="https://inkbot.app/" target="_blank" style="color: var(--accent-color);">Visit InkBot</a>'
```

**clothcast.description:**
```
'Developed with multi-agent AI workflow — FLUX.2 API integration, widget UI, and analytics built in parallel by specialized subagents. AI Virtual Try-On Shopify app using FLUX.2 image generation. Customers upload a selfie to see themselves wearing any product. Features customizable widget, analytics dashboard, and privacy-first 24h data retention. <a href="https://cloth-cast.vercel.app/landing" target="_blank" style="color: var(--accent-color);">Visit ClothCast</a>'
```

**nifta.description:**
```
'Built with multi-agent AI orchestration — smart contracts, marketplace frontend, and security audit executed in parallel. Full-stack NFT marketplace on Base Network with 4 Solidity smart contracts (Factory, ERC-1155, Marketplace, Events). Features unique revenue split (Creator 50% / First Minter 10% / Referral 20%), 48h timer urgency mechanic, UUPS upgradeable contracts, and social verification via X/Farcaster OAuth. <a href="https://nifta-zeta.vercel.app/" target="_blank" style="color: var(--accent-color);">View MVP</a>'
```

**zorium.description:**
```
'Developed with multi-agent AI workflow — blockchain integration, analytics, and creator tools built simultaneously. Decentralized NFT marketplace on Zora Network with Next.js, TypeScript, RainbowKit, and Web3Modal. Features trending analytics, multi-chain support, and creator tools. <a href="https://www.zorium.fun/" target="_blank" style="color: var(--accent-color);">View MVP</a>'
```

**cryptoduel.description:**
```
'Built with multi-agent AI orchestration — smart contracts, game logic, PostgreSQL schema, and frontend implemented in parallel. PvP crypto gaming platform on Base Network with Solidity smart contracts, Farcaster integration, PostgreSQL, and 4 game modes (Duel 1v1, Battle Royale). Features provably fair randomization and leaderboards. <a href="https://www.cryptoduel.xyz/" target="_blank" style="color: var(--accent-color);">Play Now</a>'
```

**fjordmekko.description:**
```
'Developed with multi-agent AI workflow — Next.js architecture, Leaflet integration, and Framer Motion animations built and reviewed by specialized agents. Professional online store for orthopedic mattresses using Next.js 16, React 19, Leaflet maps (20+ store locations), Resend email integration, and Framer Motion animations. <a href="https://www.fjord-mekko.com.ua/" target="_blank" style="color: var(--accent-color);">Visit Store</a>'
```

**tradingbots.description:**
```
'Architected with multi-agent AI orchestration — trading algorithms, indicator logic, and risk management reviewed in parallel by specialized subagents. Sophisticated trading bots for Binance Futures with GPT-3.5-turbo integration, technical indicators (RSI, MACD, Bollinger Bands), multi-timeframe analysis, and 100x leverage scalping strategies'
```

**lilurl.description:**
```
'Built with multi-agent AI workflow — database schema, REST API, and analytics dashboard developed in parallel by specialized subagents. Full-featured URL shortening service (Bit.ly alternative) with Django 5.0, REST API, click analytics, QR code generation, subscription plans, and real-time dashboard. <a href="https://lilurl.vercel.app/" target="_blank" style="color: var(--accent-color);">Visit lilURL</a>'
```

**doshka.description:**
```
'Developed with multi-agent AI orchestration — Symfony architecture, JWT system, Redis queue, and OpenAPI docs built simultaneously by specialized subagents. Full-featured Trello-like REST API with Symfony 7.2, JWT authentication, role-based access control via Symfony Voters (owner/admin/member), async email notifications via Redis queue + Symfony Messenger, and daily deadline reminders via Symfony Scheduler. Full Docker Compose environment with PostgreSQL 16 and OpenAPI/Swagger docs. <a href="https://github.com/volodeveth/doshka-backend" target="_blank" style="color: var(--accent-color);">View on GitHub</a>'
```

**socialbots.description:**
```
'Built with multi-agent AI workflow — automation logic, content generation, and scheduling reviewed by specialized subagents. Multiple Python bots for automated posting on Zora.co and other social networks with AI content generation, scheduling, and cross-platform publishing capabilities'
```

**zoriumeco.description:**
```
'Developed with multi-agent AI orchestration — token contracts, staking mechanisms, and platform frontend built in parallel. Complete Web3 platform with custom tokens, staking mechanisms, successfully airdropped to 10,000+ holders. <a href="https://www.zorium.xyz/" target="_blank" style="color: var(--accent-color);">View Platform</a>'
```

**aivideo.description:**
```
'Expert in AI-directed video production — combining Sora, Runway, and Midjourney into complete video workflows, including directing fully AI-generated animated films and professional video production'
```

**nftjudge.description:** — leave unchanged.

**Step 2: Update UA achievement descriptions**

Apply the same prefix pattern in Ukrainian. For each achievement, prepend the translated version:

UA prefix patterns:
- "Built with multi-agent AI orchestration" → "Побудовано з мульти-агентною AI оркестрацією — "
- "Developed with multi-agent AI workflow" → "Розроблено з мульти-агентним AI воркфлоу — "
- "Architected with multi-agent AI orchestration" → "Спроектовано з мульти-агентною AI оркестрацією — "

**inkbot.description (UA):**
```
'Побудовано з мульти-агентною AI оркестрацією Claude Code — від планування архітектури до аудиту безпеки. Створив AI-powered Shopify додаток для генерації SEO-оптимізованих описів товарів за допомогою DeepSeek V3. Функції: масова генерація, аналіз голосу бренду, SEO оцінка, 111+ мов та плани підписки. <a href="https://inkbot.app/" target="_blank" style="color: var(--accent-color);">Відвідати InkBot</a>'
```

**clothcast.description (UA):**
```
'Розроблено з мульти-агентним AI воркфлоу — FLUX.2 API інтеграція, widget UI та аналітика побудовані паралельно спеціалізованими субагентами. Створив AI Shopify додаток для віртуальної примірки з використанням FLUX.2 генерації зображень. Клієнти завантажують селфі, щоб побачити себе в обраному одязі. Функції: кастомізований віджет, панель аналітики та приватність з 24-годинним зберіганням даних. <a href="https://cloth-cast.vercel.app/landing" target="_blank" style="color: var(--accent-color);">Відвідати ClothCast</a>'
```

**nifta.description (UA):**
```
'Побудовано з мульти-агентною AI оркестрацією — смарт-контракти, фронтенд маркетплейсу та аудит безпеки виконані паралельно. Розробляю повноцінний NFT маркетплейс на Base Network з 4 Solidity смарт-контрактами (Factory, ERC-1155, Marketplace, Events). Унікальний розподіл доходів (Автор 50% / Перший мінтер 10% / Реферал 20%), механіка 48-годинного таймера терміновості, UUPS оновлювані контракти та верифікація через X/Farcaster OAuth. <a href="https://nifta-zeta.vercel.app/" target="_blank" style="color: var(--accent-color);">Переглянути MVP</a>'
```

**zorium.description (UA):**
```
'Розроблено з мульти-агентним AI воркфлоу — блокчейн інтеграція, аналітика та інструменти для авторів побудовані одночасно. Розробляю децентралізований NFT маркетплейс на Zora Network з Next.js, TypeScript, RainbowKit та Web3Modal. Функції: аналітика трендів, мультичейн підтримка та інструменти для авторів. <a href="https://www.zorium.fun/" target="_blank" style="color: var(--accent-color);">Переглянути MVP</a>'
```

**cryptoduel.description (UA):**
```
'Побудовано з мульти-агентною AI оркестрацією — смарт-контракти, ігрова логіка, PostgreSQL схема та фронтенд реалізовані паралельно. Створив PvP крипто-ігрову платформу на Base Network з Solidity смарт-контрактами, інтеграцією Farcaster, PostgreSQL та 4 ігровими режимами (Дуель 1v1, Батл Рояль). Функції: доказово чесна рандомізація та таблиці лідерів. <a href="https://www.cryptoduel.xyz/" target="_blank" style="color: var(--accent-color);">Грати зараз</a>'
```

**fjordmekko.description (UA):**
```
'Розроблено з мульти-агентним AI воркфлоу — Next.js архітектура, Leaflet інтеграція та Framer Motion анімації побудовані та перевірені спеціалізованими агентами. Розробив професійний інтернет-магазин ортопедичних матраців з використанням Next.js 16, React 19, карт Leaflet (20+ локацій магазинів), інтеграції email через Resend та анімацій Framer Motion. <a href="https://www.fjord-mekko.com.ua/" target="_blank" style="color: var(--accent-color);">Відвідати магазин</a>'
```

**tradingbots.description (UA):**
```
'Спроектовано з мульти-агентною AI оркестрацією — торгові алгоритми, логіка індикаторів та управління ризиками перевірені паралельно спеціалізованими субагентами. Створив складних торгових ботів для Binance Futures з інтеграцією GPT-3.5-turbo, технічними індикаторами (RSI, MACD, Bollinger Bands), мультитаймфрейм аналізом та стратегіями скальпінгу з плечем 100x'
```

**lilurl.description (UA):**
```
'Побудовано з мульти-агентним AI воркфлоу — схема бази даних, REST API та аналітичний дашборд розроблені паралельно спеціалізованими субагентами. Створив повнофункціональний сервіс скорочення URL (альтернатива Bit.ly) з Django 5.0, REST API, аналітикою кліків, генерацією QR-кодів, планами підписки та дашбордом реального часу. <a href="https://lilurl.vercel.app/" target="_blank" style="color: var(--accent-color);">Відвідати lilURL</a>'
```

**doshka.description (UA):**
```
'Розроблено з мульти-агентною AI оркестрацією — Symfony архітектура, JWT система, Redis черга та OpenAPI документація побудовані одночасно спеціалізованими субагентами. Розробив повноцінний REST API у стилі Trello з Symfony 7.2, JWT автентифікацією, рольовим контролем доступу через Symfony Voters (owner/admin/member), асинхронними email-повідомленнями через Redis + Symfony Messenger та щоденними нагадуваннями про дедлайни через Scheduler. Повне Docker Compose середовище з PostgreSQL 16 та OpenAPI/Swagger документацією. <a href="https://github.com/volodeveth/doshka-backend" target="_blank" style="color: var(--accent-color);">Переглянути на GitHub</a>'
```

**socialbots.description (UA):**
```
'Побудовано з мульти-агентним AI воркфлоу — логіка автоматизації, генерація контенту та планування перевірені спеціалізованими субагентами. Розробив множинні Python боти для автоматичного постингу на Zora.co та інших соціальних мережах з AI генерацією контенту, плануванням та крос-платформною публікацією'
```

**zoriumeco.description (UA):**
```
'Розроблено з мульти-агентною AI оркестрацією — токен-контракти, механізми стейкінгу та фронтенд платформи побудовані паралельно. Створив повну Web3 платформу з кастомними токенами, механізмами стейкінгу та успішно роздав аірдроп 10,000+ холдерам. <a href="https://www.zorium.xyz/" target="_blank" style="color: var(--accent-color);">Переглянути платформу</a>'
```

**aivideo.description (UA):**
```
'Експерт у AI-режисурі відеовиробництва — поєднання Sora, Runway та Midjourney у повні відеоворкфлоу, включаючи режисуру повністю AI-генерованих анімаційних фільмів та професійне відеовиробництво'
```

**Step 3: Update DE achievement descriptions**

Apply same prefix pattern in German:

**inkbot.description (DE):**
```
'Entwickelt mit Multi-Agenten-KI-Orchestrierung über Claude Code — von der Architekturplanung bis zum Sicherheitsaudit. Entwicklung einer KI-gestützten Shopify-App zur Generierung SEO-optimierter Produktbeschreibungen mit DeepSeek V3. Funktionen: Massengenerierung, Markenstimm-Analyse, SEO-Bewertung, 111+ Sprachen und Abonnementpläne. <a href="https://inkbot.app/" target="_blank" style="color: var(--accent-color);">InkBot besuchen</a>'
```

**clothcast.description (DE):**
```
'Entwickelt mit Multi-Agenten-KI-Workflow — FLUX.2 API-Integration, Widget-UI und Analytics parallel von spezialisierten Subagenten erstellt. Entwicklung einer KI-basierten Shopify-App für virtuelle Anproben mit FLUX.2-Bildgenerierung. Kunden laden ein Selfie hoch und sehen sich selbst im gewünschten Produkt. Funktionen: anpassbares Widget, Analyse-Dashboard und datenschutzfreundliche 24h-Datenspeicherung. <a href="https://cloth-cast.vercel.app/landing" target="_blank" style="color: var(--accent-color);">ClothCast besuchen</a>'
```

**nifta.description (DE):**
```
'Entwickelt mit Multi-Agenten-KI-Orchestrierung — Smart Contracts, Marktplatz-Frontend und Sicherheitsaudit parallel ausgeführt. Entwicklung eines Full-Stack-NFT-Marktplatzes auf dem Base Network mit 4 Solidity-Smart-Contracts (Factory, ERC-1155, Marketplace, Events). Einzigartiger Erlösaufteilung (Ersteller 50% / Erster Minter 10% / Empfehlung 20%), 48h-Timer-Dringlichkeitsmechanik, UUPS-aktualisierbare Contracts und soziale Verifizierung via X/Farcaster OAuth. <a href="https://nifta-zeta.vercel.app/" target="_blank" style="color: var(--accent-color);">MVP ansehen</a>'
```

**zorium.description (DE):**
```
'Entwickelt mit Multi-Agenten-KI-Workflow — Blockchain-Integration, Analytics und Erstellerwerkzeuge gleichzeitig erstellt. Entwicklung eines dezentralen NFT-Marktplatzes auf dem Zora Network mit Next.js, TypeScript, RainbowKit und Web3Modal. Funktionen: Trend-Analyse, Multi-Chain-Unterstützung und Erstellerwerkzeuge. <a href="https://www.zorium.fun/" target="_blank" style="color: var(--accent-color);">MVP ansehen</a>'
```

**cryptoduel.description (DE):**
```
'Entwickelt mit Multi-Agenten-KI-Orchestrierung — Smart Contracts, Spiellogik, PostgreSQL-Schema und Frontend parallel implementiert. Entwicklung einer PvP-Krypto-Gaming-Plattform auf dem Base Network mit Solidity-Smart-Contracts, Farcaster-Integration, PostgreSQL und 4 Spielmodi (Duell 1v1, Battle Royale). Funktionen: nachweislich faire Zufallsgenerierung und Bestenlisten. <a href="https://www.cryptoduel.xyz/" target="_blank" style="color: var(--accent-color);">Jetzt spielen</a>'
```

**fjordmekko.description (DE):**
```
'Entwickelt mit Multi-Agenten-KI-Workflow — Next.js-Architektur, Leaflet-Integration und Framer-Motion-Animationen von spezialisierten Agenten erstellt und überprüft. Entwicklung eines professionellen Online-Shops für orthopädische Matratzen mit Next.js 16, React 19, Leaflet-Karten (20+ Filialstandorte), Resend-E-Mail-Integration und Framer-Motion-Animationen. <a href="https://www.fjord-mekko.com.ua/" target="_blank" style="color: var(--accent-color);">Shop besuchen</a>'
```

**tradingbots.description (DE):**
```
'Entwickelt mit Multi-Agenten-KI-Orchestrierung — Handelsalgorithmen, Indikatorlogik und Risikomanagement parallel von spezialisierten Subagenten überprüft. Entwicklung ausgereifter Trading-Bots für Binance Futures mit GPT-3.5-turbo-Integration, technischen Indikatoren (RSI, MACD, Bollinger Bands), Multi-Timeframe-Analyse und 100x-Hebel-Scalping-Strategien'
```

**lilurl.description (DE):**
```
'Entwickelt mit Multi-Agenten-KI-Workflow — Datenbankschema, REST API und Analyse-Dashboard parallel von spezialisierten Subagenten erstellt. Entwicklung eines vollständigen URL-Kürzungsdienstes (Bit.ly-Alternative) mit Django 5.0, REST API, Klick-Analyse, QR-Code-Generierung, Abonnementplänen und Echtzeit-Dashboard. <a href="https://lilurl.vercel.app/" target="_blank" style="color: var(--accent-color);">lilURL besuchen</a>'
```

**doshka.description (DE):**
```
'Entwickelt mit Multi-Agenten-KI-Orchestrierung — Symfony-Architektur, JWT-System, Redis-Queue und OpenAPI-Dokumentation gleichzeitig von spezialisierten Subagenten erstellt. Entwicklung einer vollständigen Trello-ähnlichen REST-API mit Symfony 7.2, JWT-Authentifizierung, rollenbasierter Zugriffskontrolle via Symfony Voters (owner/admin/member), asynchronen E-Mail-Benachrichtigungen via Redis-Queue + Symfony Messenger und täglichen Deadline-Erinnerungen via Symfony Scheduler. Vollständige Docker-Compose-Umgebung mit PostgreSQL 16 und OpenAPI/Swagger-Dokumentation. <a href="https://github.com/volodeveth/doshka-backend" target="_blank" style="color: var(--accent-color);">Auf GitHub ansehen</a>'
```

**socialbots.description (DE):**
```
'Entwickelt mit Multi-Agenten-KI-Workflow — Automatisierungslogik, Inhaltsgenerierung und Planung von spezialisierten Subagenten überprüft. Entwicklung mehrerer Python-Bots für automatisiertes Posting auf Zora.co und anderen sozialen Netzwerken mit KI-Inhaltsgenerierung, Planung und plattformübergreifender Veröffentlichung'
```

**zoriumeco.description (DE):**
```
'Entwickelt mit Multi-Agenten-KI-Orchestrierung — Token-Contracts, Staking-Mechanismen und Plattform-Frontend parallel erstellt. Entwicklung einer vollständigen Web3-Plattform mit eigenen Tokens, Staking-Mechanismen und erfolgreichem Airdrop an 10.000+ Inhaber. <a href="https://www.zorium.xyz/" target="_blank" style="color: var(--accent-color);">Plattform besuchen</a>'
```

**aivideo.description (DE):**
```
'Experte in KI-gesteuerter Videoproduktion — Kombination von Sora, Runway und Midjourney zu vollständigen Video-Workflows, einschließlich der Regie vollständig KI-generierter Animationsfilme und professioneller Videoproduktion'
```

**Step 4: Verify** — reload browser, scroll to About achievements. Each should have a new first sentence about AI orchestration.

**Step 5: Commit**
```bash
git add public/script.js
git commit -m "rebrand: add multi-agent AI framing to all achievement descriptions EN/UA/DE"
```

---

## Task 11: Final Push

**Step 1: Full visual check**
Open `public/index.html` in browser:
- Hero title: "Agentic Full Stack / Developer & AI Engineer" ✓
- Hero subtitle: "Claude Code Agents | ..." ✓
- Tech bubbles: "Claude Code", "Multi-Agent", "MCP API" etc ✓
- About intro: multi-agent workflow description ✓
- Value-prop cards: 🤖 ⚡ 💰 visible ✓
- Skills: "AI Agents & Dev Workflow" is first category ✓
- Skills: "Blockchain Development" is last category ✓
- Contact description: "Team output. Solo price." ✓
- Switch to UA and DE — all updated texts show correctly ✓
- Form project types: "AI Agent Integration" appears first ✓

**Step 2: Push to master**
```bash
git push origin master
```

Expected: GitHub Pages auto-deploys within 1-2 minutes.

---

## Notes for Implementer

- **applyTranslations** in `script.js` handles nested keys with dots (e.g. `valueProp.quality.title`) via recursion — verify this works for 3-level keys by checking how it resolves `achievements.inkbot.title`. If `valueProp.quality.title` doesn't resolve, check the translation lookup function and ensure it supports 3-level nesting.
- **No SVG animations touched** — do not modify any `<svg>` blocks.
- **styles.css** — if `.achievements` block is hard to find, search for text "achievements" in the file. Add `.value-prop-grid` styles in the same general area as `.about` section styles.
- **Browser cache** — after changes, do hard-refresh (Ctrl+Shift+R) to see updated text.
