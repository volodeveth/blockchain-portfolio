// Translations
const translations = {
    en: {
        nav: { home: 'Home', about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
        hero: {
            title1: 'AI Engineer',
            title2: '& Agentic Full Stack Developer',
            subtitle: 'AI Agents & Multi-Agent Systems | Voice Agents | RAG Systems | LLM Fine-Tuning | Full-Stack Apps | Shopify | Web3',
            location: '📍 Lviv, Ukraine | 🌐 Available Worldwide',
            description: 'I engineer AI agents and agentic systems that do real work: <strong>voice agents</strong> that take orders in real time (LiveKit + OpenAI Realtime), <strong>self-extending assistants</strong> that write their own skills, <strong>production RAG pipelines</strong>, <strong>LLM fine-tuning</strong> (QLoRA → GGUF → Ollama), and AI-powered automation. I build the full stack around them — <strong>Next.js, React, TypeScript, Python, Node.js</strong> — and develop with a multi-agent Claude Code workflow, so every project ships with automated code review and security audit. Don\'t take my word for it — <strong>ask my AI in the corner: it\'s my own RAG system</strong>.',
            viewProjects: 'View Projects',
            getInTouch: 'Get In Touch',
            downloadCv: 'Download CV',
            stats: { projects: 'Products Shipped', platforms: 'Active Platforms', shopifyApps: 'Shopify Apps Published', experience: 'Years Experience' }
        },
        about: {
            title: 'About Me',
            intro: 'I\'m an AI engineer & full-stack developer — 10+ years of software engineering, the last 3 focused on LLM and agentic systems — with 20+ shipped products. I build agentic systems as products — voice agents, self-extending assistants, production RAG pipelines, LLM fine-tuning, and AI automation — and develop them with multi-agent Claude Code orchestration (Planner, Architect, Implementer, Reviewer, Security Auditor in parallel), delivering production-ready applications faster and at a fraction of the cost of a traditional team. Every project ships with automated code review, security audit, and my personal quality control. Stack: <strong>Next.js, React, TypeScript, Python, Django, Node.js, PHP/Symfony, Solidity</strong> — plus Shopify app development, SaaS, and Web3 integration.',
            achievementsTitle: 'Key Achievements & Expertise',
            profileLocation: 'AI Engineer from Lviv, Ukraine',
            profileTagline: 'I build AI agents that do real work'
        },
        projects: { title: 'Featured Projects' },
        langBanner: {
            title: 'No Language Barriers',
            desc: 'Fluent real-time communication in 50+ languages via AI live voice interpreter',
            more: '+ Arabic, Hindi, Portuguese, Dutch, Swedish, Polish, Czech, Turkish, Vietnamese, Thai and 32 more'
        },
        valueProp: {
            quality: { title: 'AI Agent Quality', desc: 'Automated review by Opus: bugs, security, UI/UX — every commit' },
            speed: { title: 'Team Speed', desc: 'Features ship in parallel: Architect + Implementer + Tester simultaneously' },
            cost: { title: 'Solo Cost', desc: '1 engineer. No management overhead. No team coordination cost.' }
        },
        skills: {
            title: 'Technical Expertise',
            cat: {
                agentWorkflow: 'AI Agents & Agentic Systems',
                ml: 'ML & LLM Engineering',
                blockchain: 'Blockchain Development',
                python: 'Python Development',
                ai: 'AI Integration & Tools',
                frontend: 'Frontend Development',
                backend: 'Backend Development',
                shopify: 'Shopify Development',
                tools: 'Tools & Integrations',
                content: 'Content Creation',
                nft: 'NFT Ecosystem'
            },
            items: {
                automationBots: 'Automation & Bots',
                tradingBots: 'Trading Bots',
                aiImageGen: 'Midjourney & AI Image Gen',
                aiVideo: 'Sora & Runway (AI Video)',
                tradingAlgo: 'Trading Algorithms & ML',
                apiDev: 'API Development (REST)',
                shopifyAppDev: 'Shopify App Development',
                themeExt: 'Theme Extensions & Liquid',
                videoProduction: 'Video Production',
                aiVideos: 'AI-Generated Videos',
                animatedFilms: 'Animated Films',
                nftDev: 'NFT Development (ERC-721)',
                marketplaceDev: 'Marketplace Development',
                generativeArt: 'Generative Art',
                ipfs: 'IPFS / Decentralized Storage',
                claudeCode: 'Claude Code Orchestration',
                multiAgent: 'Multi-Agent Systems (Opus / Sonnet / Haiku)',
                parallelAgents: 'Parallel Subagent Execution',
                codeReview: 'Automated Code Review & Security Audit',
                figmaMcp: 'Figma → Code (MCP API)',
                thirdPartyAi: 'OpenAI / Gemini / Grok API Integration',
                cicd: 'Git → Vercel CI/CD Pipeline',
                voiceAgents: 'Voice Agents (LiveKit / OpenAI Realtime)',
                langgraphAgents: 'LangGraph Agents',
                fineTuning: 'LLM Fine-Tuning (QLoRA / LoRA / PEFT)',
                syntheticData: 'Synthetic Dataset Generation',
                localLlm: 'GGUF / llama.cpp / Ollama (Local LLMs)',
                selfExtending: 'Self-Extending Agents (OpenClaw)',
                rag: 'RAG Pipeline (pgvector + Jina AI)'
            }
        },
        contact: {
            title: "Let's Build Something Amazing",
            subtitle: 'Ready to Transform Your Vision',
            description: 'Whether you need an AI agent or multi-agent system, a voice agent, a RAG system or chatbot, LLM fine-tuning, a full-stack web app, Shopify app, SaaS platform, or Web3 development — you get multi-agent AI engineering: faster delivery, automated quality control, and senior-level code review on every commit. Team output. Solo price.',
            upwork: 'Upwork Profile',
            upworkDesc: 'View my professional profile and reviews',
            githubDesc: 'View my open source projects',
            cv: 'Download CV',
            cvDesc: 'Printable CV — EN / UA / DE',
            availability: 'Availability',
            availabilityDesc: 'Ready to start your project',
            formTitle: 'Get In Touch',
            responseTime: 'Response Time',
            responseTimeDesc: "I'll respond to your message within 24 hours"
        },
        form: {
            name: 'Name', namePlaceholder: 'Your Name',
            email: 'Email', emailPlaceholder: 'Your Email',
            company: 'Company (Optional)', companyPlaceholder: 'Your Company',
            projectType: 'Project Type', selectProject: 'Select Project Type',
            nftMarketplace: 'NFT Marketplace Development', gamingPlatform: 'Decentralized Gaming Platform',
            ecommerce: 'E-Commerce Website (Next.js)', tradingBot: 'AI Trading Bot (Python/Node.js)',
            automationBot: 'Social Media Automation Bot', smartContracts: 'Smart Contracts Development',
            nftCollection: 'NFT Collection Launch', web3Platform: 'Web3 Platform/DApp',
            fullstackApp: 'Full-Stack Web Application', blockchainIntegration: 'Blockchain Integration',
            shopifyApp: 'Shopify App Development',
            aiAgentIntegration: 'AI Agent Integration',
            multiAgentSystem: 'Multi-Agent System Development',
            voiceAgent: 'Voice Agent (Realtime)',
            ragChatbot: 'RAG System / AI Chatbot',
            consultation: 'Technical Consultation', other: 'Other',
            budget: 'Budget Range', selectBudget: 'Select Budget Range',
            under1k: 'Under $1,000', '1k5k': '$1,000 - $5,000', '5k10k': '$5,000 - $10,000',
            '10k25k': '$10,000 - $25,000', '25k50k': '$25,000 - $50,000', '50kplus': '$50,000+',
            message: 'Project Description', messagePlaceholder: 'Tell me about your project, timeline, and specific requirements...',
            send: 'Send Message'
        },
        achievements: {
            shipped: {
                title: '20+ Shipped Products',
                description: 'Full-stack web apps, Shopify apps, smart contracts, AI agents, and ML pipelines delivered to production — 10+ platforms still live and active'
            },
            shopifyApps: {
                title: '2 Published Shopify Apps',
                description: 'InkBot (AI product descriptions, 111+ languages) and ClothCast (AI virtual try-on with FLUX.2) — built, published, and maintained solo'
            },
            mlPipeline: {
                title: 'End-to-End ML Pipeline',
                description: 'Synthetic dataset generation → QLoRA/LoRA fine-tuning → GGUF export → Ollama deployment — a complete in-house LLM training workflow'
            },
            selfAgent: {
                title: 'Self-Extending AI Agent',
                description: 'Dual-LLM agent (Buddy) that autonomously writes, validates, and deploys its own skills — with Ukrainian voice interface and sandboxed execution'
            },
            rag: {
                title: 'Production RAG System',
                description: '3,440+ indexed chunks, hybrid search (pgvector HNSW + BM25 + RRF fusion), neural reranking — self-hosted on AWS EC2 with CI/CD'
            },
            holders: {
                title: '10,000+ Token Holders',
                description: 'Built the ZORIUM token & DeFi staking ecosystem on Zora Network and successfully airdropped it to a community of 10,000+ holders'
            },
            nftCollections: {
                title: 'Sold-Out NFT Collections',
                description: 'Bored Giraffes Yacht Club — 3,333 NFTs sold out on Ethereum — plus The GAFs and a novel-to-NFT adaptation (Misery Avenue)'
            },
            nftjudge: {
                title: 'NFT Design Awards Judge',
                description: 'Official judge at <a href="https://nftdesignawards.io/judge/volodymyrdorosh" target="_blank" style="color: var(--accent-color);">NFT Design Awards</a>, evaluating innovative NFT projects and design excellence'
            },
            aivideo: {
                title: 'AI Video Production',
                description: 'Directing fully AI-generated animated films — complete video workflows combining Sora, Runway, and Midjourney'
            }
        },
        projectCards: {
            inkbot: {
                title: 'InkBot - AI Product Descriptions',
                description: 'AI-powered Shopify app that generates SEO-optimized product descriptions using DeepSeek V3. Features bulk generation, brand voice analysis, SEO scoring, 111+ languages, 9 niches, and 4 subscription plans. <a href="https://inkbot.app/" target="_blank" style="color: var(--accent-color);">Visit InkBot</a>'
            },
            clothcast: {
                title: 'ClothCast - AI Virtual Try-On',
                description: 'AI Virtual Try-On Shopify app using FLUX.2 image generation. Customers upload a selfie to see themselves wearing any product. Features customizable widget, theme extension, analytics dashboard, and privacy-first 24h data retention. <a href="https://cloth-cast.vercel.app/landing" target="_blank" style="color: var(--accent-color);">Visit ClothCast</a>'
            },
            askdorosh: {
                title: 'Ask About Dorosh — Production RAG System',
                description: 'Production RAG chatbot that indexes 34 real projects + CV (3,440+ chunks). Hybrid search (pgvector HNSW + BM25 GIN) with RRF fusion, Jina Reranker v3, DeepSeek LLM streaming via SSE. Self-hosted on AWS EC2 with Nginx, PM2, Let\'s Encrypt SSL, and GitHub Actions CI/CD. <a href="https://ask-about-dorosh.duckdns.org" target="_blank" style="color: var(--accent-color);">Try It Live</a>'
            },
            buddy: {
                title: 'Buddy Agent — Self-Extending AI Assistant',
                description: 'Self-extending Telegram AI assistant with dual-LLM architecture — DeepSeek V3.2 dispatches tasks while MiniMax M2.7 autonomously generates new skills. Ukrainian voice interface (Whisper STT + Edge-TTS), 3-tier security with PIN gate, persistent memory, and sandboxed execution with AST-based code validation. <a href="https://github.com/volodeveth/buddy-agent" target="_blank" style="color: var(--accent-color);">View on GitHub</a>'
            },
            pizzavoice: {
                title: 'Pizza Voice Agent — Real-Time Voice Ordering',
                description: 'Voice assistant for a pizzeria: natural spoken ordering in Ukrainian with real-time speech-to-speech conversation, menu logic, and order confirmation. Built with LiveKit Agents and the OpenAI Realtime API with a Next.js frontend. <a href="https://github.com/volodeveth/pizza-voice-agent" target="_blank" style="color: var(--accent-color);">View on GitHub</a>'
            },
            loopforge: {
                title: 'LoopForge — Autonomous Multi-Agent Dev Loop',
                description: 'Forges large features in an autonomous multi-agent loop for Claude Code: requirements interview → spec → plan → TDD implementation loop → verification. Agentic engineering distilled into a reusable workflow. <a href="https://github.com/volodeveth/loopforge" target="_blank" style="color: var(--accent-color);">View on GitHub</a>'
            },
            tinyllama: {
                title: 'TinyLlama QLoRA Fine-Tuning Pipeline',
                description: 'End-to-end LLM fine-tuning pipeline: QLoRA training on a Colab T4 GPU plus a local CPU LoRA pipeline. 4-bit quantization, adapter persistence, GGUF export with Q4_K_M quantization, and Ollama deployment with resume and incremental training. <a href="https://github.com/volodeveth/tinyllama-qlora-colab" target="_blank" style="color: var(--accent-color);">View on GitHub</a>'
            },
            datasetfactory: {
                title: 'Dataset Factory — Synthetic Data Pipeline',
                description: 'Universal pipeline for generating high-quality LLM training datasets. Interactive wizard, 4 output formats (Alpaca, Chat, QA, Classification), text chunking, validation with deduplication, language detection, and label distribution analysis. <a href="https://github.com/volodeveth/dataset-factory" target="_blank" style="color: var(--accent-color);">View on GitHub</a>'
            },
            langgraph: {
                title: 'LangGraph Code Assistant Agent',
                description: 'Intelligent code analysis agent built on a LangGraph state graph. Directory scanning with auto-watch (hash-based change detection), multi-file analysis, bug detection, code review, and test generation — with a Streamlit UI.'
            },
            zorium: {
                title: 'ZORIUM.FUN - NFT Marketplace',
                description: 'Decentralized NFT marketplace on Zora Network with trending analytics, creator tools, and multi-chain support. Built with Next.js 14, TypeScript, Wagmi, RainbowKit. 🚧 MVP in progress. <a href="https://www.zorium.fun/" target="_blank" style="color: var(--accent-color);">View MVP</a>'
            },
            cryptoduel: {
                title: 'CryptoDuel - Crypto Gaming Platform',
                description: 'PvP crypto game on Base Network with 4 game modes (Duel, Battle Royale). Features Farcaster integration, provably fair blockchain randomization, PostgreSQL database, and real-time leaderboards. <a href="https://www.cryptoduel.xyz/" target="_blank" style="color: var(--accent-color);">Play Now</a>'
            },
            nifta: {
                title: 'NiFTa - NFT Marketplace on Base',
                description: 'Full-stack NFT marketplace on Base Network with 4 gas-efficient Solidity smart contracts (Factory, ERC-1155 Collection, Marketplace, Events). Features unique revenue split (Creator 50% / First Minter 10% / Referral 20%), 48h timer urgency mechanic, ERC-2981 royalties, UUPS upgradeable contracts, and X/Farcaster OAuth social verification. <a href="https://nifta-zeta.vercel.app/" target="_blank" style="color: var(--accent-color);">View MVP</a>'
            },
            fjordmekko: {
                title: 'Fjord & Mekko - E-Commerce Store',
                description: 'Professional online store for orthopedic mattresses. Features product catalog, interactive Leaflet maps with 20+ store locations, partner program, mattress selector tool, and email integration. <a href="https://www.fjord-mekko.com.ua/" target="_blank" style="color: var(--accent-color);">Visit Store</a>'
            },
            tradingbots: {
                title: 'AI Trading Bots - Binance Futures',
                description: 'Advanced trading bots for Binance Futures with GPT-3.5-turbo AI analysis, technical indicators (RSI, MACD, Bollinger Bands, ADX), multi-timeframe analysis (5m-4h), and 100x leverage scalping. Built with Python and Node.js.'
            },
            socialbots: {
                title: 'Social Media Automation Bots',
                description: 'Multiple Python bots for automated posting on Zora.co and other social networks. Features AI-powered content generation, scheduling, cross-platform publishing, and engagement tracking.'
            },
            lilurl: {
                title: 'lilURL - URL Shortener Service',
                description: 'Full-featured URL shortening service (Bit.ly alternative) with click analytics, QR code generation, REST API, and subscription plans. Features real-time dashboard with Chart.js, device/browser/location tracking, and rate limiting. <a href="https://lilurl.vercel.app/" target="_blank" style="color: var(--accent-color);">Visit lilURL</a>'
            },
            doshka: {
                title: 'Doshka — Kanban Board REST API',
                description: 'Full-featured Trello-like REST API built with Symfony 7.2, JWT auth, role-based access control (Symfony Voters), async email notifications via Redis queue + Symfony Messenger, and daily deadline reminders via Scheduler. Full Docker Compose environment with PostgreSQL 16 and OpenAPI docs. <a href="https://github.com/volodeveth/doshka-backend" target="_blank" style="color: var(--accent-color);">View on GitHub</a>'
            },
            zoriumtoken: {
                title: 'ZORIUM Token - Smart Contract',
                description: 'ERC20 upgradeable token on Zora Network with staking, multi-level referral system (3 levels), burn mechanism, tier system (Bronze to Platinum), and auto-rewards distribution. Built with Solidity 0.8.19, OpenZeppelin UUPS proxy pattern, and Hardhat. <a href="https://explorer.zora.energy/token/0x538D6F4fb9598dC74e15e6974049B109ae0AbC6a" target="_blank" style="color: var(--accent-color);">View Contract</a>'
            },
            zoriumplatform: {
                title: 'ZORIUM Platform - DeFi Staking',
                description: 'Next-gen DeFi staking platform on Zora Network with flexible lock periods (30-365 days), up to 300% APY, progressive tier system with 50% bonuses, 3-level referral program, NFT rewards integration, and real-time dashboard. Built with Next.js 13, Wagmi, Viem, RainbowKit. <a href="https://www.zorium.xyz/" target="_blank" style="color: var(--accent-color);">Visit Platform</a>'
            },
            bgyc: {
                title: 'Bored Giraffes Yacht Club',
                description: '3,333 NFT collection on Ethereum with successful sell-out minting. Complete development and deployment. <a href="https://rarible.com/bgyc/items" target="_blank" style="color: var(--accent-color);">View on Rarible</a>'
            },
            gafs: {
                title: 'The GAFs NFT Collection',
                description: 'Innovative NFT collection featuring unique generative artwork and community-driven features. <a href="https://opensea.io/collection/thegafs/overview" target="_blank" style="color: var(--accent-color);">View Collection</a>'
            },
            miseryavenue: {
                title: 'Misery Avenue: Beginning',
                description: 'Transformed published novel into NFT collection, bridging traditional publishing with Web3 innovation. <a href="https://linktr.ee/miseryavenue" target="_blank" style="color: var(--accent-color);">Visit Project</a>'
            }
        },
        footer: { copyright: '© 2026 VoloDev.eth — AI Engineer & Agentic Full Stack Developer. Team output. Solo price.' },
        experience: {
            title: 'Professional Experience',
            goal: { role: 'AI Engineer (part-time)', company: 'Goal Marketing Agency («Ціль»)', dates: 'Jun 2026 — Present', desc: 'AI agents and LLM-powered automation for marketing operations: multi-LLM pipelines, AI-assisted auditing and reporting systems.' },
            freelance: { role: 'AI Engineer & Full-Stack Developer', company: 'Freelance & Own Products', dates: '2014 — Present', desc: 'Voice agents, RAG systems, self-extending assistants, LLM fine-tuning, Shopify apps, SaaS and Web3 platforms — 20+ shipped products (see Projects below).' },
            dimison: { role: 'Digital Transformation Lead & Head of E-commerce', company: '«Dim i Son»', dates: 'Jan 2021 — Apr 2026', desc: 'Architected a custom Next.js/React e-commerce core replacing legacy CMS; built a real-time omnichannel ecosystem syncing inventory, logistics and sales between offline stores and the web; introduced AI agents for order intake, content generation and automated social publishing; automated marketing workflows (Google Ads, SEO, CRM) and supply-chain logic.' },
            mekko: { role: 'Co-founder & Head of E-commerce', company: 'Mekko', dates: 'Jun 2011 — Jan 2021', desc: 'Co-founded and led a mattress e-commerce brand for almost 10 years: owned the entire technical side (Shopify store, SEO across platforms, Google & Meta Ads) plus project management, recruitment, R&D and marketing strategy.' }
        },
        rag: {
            fabLabel: 'Ask my AI',
            title: 'Ask About Dorosh',
            subtitle: 'My own RAG pipeline — 34 projects + CV indexed',
            welcome: "Hi! I'm an AI that knows Volodymyr's work inside out — 34 indexed projects plus his CV. Ask me anything about his skills, stack, or experience.",
            q1: 'What Shopify apps has he built?',
            q2: 'How does his multi-agent AI workflow work?',
            q3: 'What is his ML fine-tuning experience?',
            placeholder: 'Ask about skills, projects, experience...',
            note: 'Live demo of my RAG stack: pgvector + Jina + DeepSeek, self-hosted on AWS',
            error: 'Something went wrong — the AI backend may be busy. Try again in a moment or open the full app via the ↗ icon.'
        }
    },
    uk: {
        nav: { home: 'Головна', about: 'Про мене', experience: 'Досвід', projects: 'Проекти', skills: 'Навички', contact: 'Контакти' },
        hero: {
            title1: 'AI Інженер',
            title2: 'та Agentic Full Stack Розробник',
            subtitle: 'AI Агенти та Мульти-агентні Системи | Голосові Агенти | RAG Системи | LLM Файн-тюнінг | Full-Stack Додатки | Shopify | Web3',
            location: '📍 Львів, Україна | 🌐 Працюю по всьому світу',
            description: 'Я створюю AI агентів та агентні системи, які виконують реальну роботу: <strong>голосові агенти</strong>, що приймають замовлення в реальному часі (LiveKit + OpenAI Realtime), <strong>самодоповнювані асистенти</strong>, які пишуть власні скіли, <strong>продакшн RAG пайплайни</strong>, <strong>файн-тюнінг LLM</strong> (QLoRA → GGUF → Ollama) та AI-автоматизацію. Будую і весь стек навколо них — <strong>Next.js, React, TypeScript, Python, Node.js</strong> — а розробляю з мульти-агентним Claude Code воркфлоу, тож кожен проект поставляється з автоматизованим code review та аудитом безпеки. Не вір на слово — <strong>спитай мій AI у кутку екрана: це моя власна RAG система</strong>.',
            viewProjects: 'Переглянути проекти',
            getInTouch: "Зв'язатися",
            downloadCv: 'Завантажити CV',
            stats: { projects: 'Продуктів реалізовано', platforms: 'Активних платформ', shopifyApps: 'Опублікованих Shopify додатків', experience: 'Років досвіду' }
        },
        about: {
            title: 'Про мене',
            intro: 'Я AI інженер та full-stack розробник — 10+ років у розробці, останні 3 — фокус на LLM та агентних системах — з 20+ реалізованими продуктами. Будую агентні системи як продукт — голосові агенти, самодоповнювані асистенти, продакшн RAG пайплайни, файн-тюнінг LLM та AI-автоматизацію — і розробляю їх з мульти-агентною Claude Code оркестрацією (Planner, Architect, Implementer, Reviewer, Security Auditor паралельно), доставляючи продакшн-ready додатки швидше та дешевше ніж традиційна команда. Кожен проект поставляється з автоматизованим code review, аудитом безпеки та моїм особистим контролем якості. Стек: <strong>Next.js, React, TypeScript, Python, Django, Node.js, PHP/Symfony, Solidity</strong> — плюс розробка Shopify додатків, SaaS та Web3 інтеграція.',
            achievementsTitle: 'Ключові досягнення та експертиза',
            profileLocation: 'AI Інженер зі Львова, Україна',
            profileTagline: 'Створюю AI агентів, які виконують реальну роботу'
        },
        projects: { title: 'Вибрані проекти' },
        langBanner: {
            title: 'Без мовних бар\'єрів',
            desc: 'Вільне спілкування в реальному часі 50+ мовами через AI голосовий перекладач',
            more: '+ арабська, хінді, португальська, нідерландська, шведська, польська, чеська, турецька, в\'єтнамська, тайська та ще 32'
        },
        valueProp: {
            quality: { title: 'Якість AI Агента', desc: 'Автоматизований review від Opus: баги, безпека, UI/UX — кожен коміт' },
            speed: { title: 'Швидкість Команди', desc: 'Фічі поставляються паралельно: Архітектор + Імплементатор + Тестер одночасно' },
            cost: { title: 'Ціна Одного Спеціаліста', desc: '1 інженер. Без управлінських витрат. Без витрат на координацію команди.' }
        },
        skills: {
            title: 'Технічна експертиза',
            cat: {
                agentWorkflow: 'AI Агенти та Агентні Системи',
                ml: 'ML та LLM Інженерія',
                blockchain: 'Blockchain-розробка',
                python: 'Python-розробка',
                ai: 'AI-інтеграція та інструменти',
                frontend: 'Frontend-розробка',
                backend: 'Backend-розробка',
                shopify: 'Shopify-розробка',
                tools: 'Інструменти та інтеграції',
                content: 'Створення контенту',
                nft: 'NFT-екосистема'
            },
            items: {
                automationBots: 'Автоматизація та боти',
                tradingBots: 'Торгові боти',
                aiImageGen: 'Midjourney та AI-генерація зображень',
                aiVideo: 'Sora & Runway (AI відео)',
                tradingAlgo: 'Торгові алгоритми та ML',
                apiDev: 'Розробка API (REST)',
                shopifyAppDev: 'Розробка Shopify-додатків',
                themeExt: 'Theme Extensions та Liquid',
                videoProduction: 'Відеовиробництво',
                aiVideos: 'AI-генеровані відео',
                animatedFilms: 'Анімаційні фільми',
                nftDev: 'Розробка NFT (ERC-721)',
                marketplaceDev: 'Розробка маркетплейсу',
                generativeArt: 'Генеративне мистецтво',
                ipfs: 'IPFS / Децентралізоване сховище',
                claudeCode: 'Claude Code Оркестрація',
                multiAgent: 'Мульти-агентні Системи (Opus / Sonnet / Haiku)',
                parallelAgents: 'Паралельне Виконання Субагентів',
                codeReview: 'Автоматизований Code Review та Аудит Безпеки',
                figmaMcp: 'Figma → Код (MCP API)',
                thirdPartyAi: 'OpenAI / Gemini / Grok API Інтеграція',
                cicd: 'Git → Vercel CI/CD Пайплайн',
                voiceAgents: 'Голосові агенти (LiveKit / OpenAI Realtime)',
                langgraphAgents: 'LangGraph агенти',
                fineTuning: 'LLM Файн-тюнінг (QLoRA / LoRA / PEFT)',
                syntheticData: 'Генерація синтетичних датасетів',
                localLlm: 'GGUF / llama.cpp / Ollama (локальні LLM)',
                selfExtending: 'Самодоповнювані агенти (OpenClaw)',
                rag: 'RAG Пайплайн (pgvector + Jina AI)'
            }
        },
        contact: {
            title: 'Створімо щось неймовірне',
            subtitle: 'Готовий втілити вашу візію',
            description: 'Чи потрібен AI агент або мульти-агентна система, голосовий агент, RAG система чи чат-бот, файн-тюнінг LLM, full-stack веб-додаток, Shopify додаток, SaaS платформа або Web3 розробка — ви отримуєте мульти-агентний AI інжиніринг: швидша доставка, автоматизований контроль якості та code review рівня senior на кожному коміті. Продуктивність команди. Ціна одного спеціаліста.',
            upwork: 'Профіль Upwork',
            upworkDesc: 'Переглянути мій професійний профіль та відгуки',
            githubDesc: 'Мої проєкти з відкритим кодом',
            cv: 'Завантажити CV',
            cvDesc: 'CV для друку — EN / UA / DE',
            availability: 'Доступність',
            availabilityDesc: 'Готовий розпочати ваш проект',
            formTitle: "Зв'язатися зі мною",
            responseTime: 'Час відповіді',
            responseTimeDesc: 'Відповім на ваше повідомлення протягом 24 годин'
        },
        form: {
            name: "Ім'я", namePlaceholder: "Ваше ім'я",
            email: 'Email', emailPlaceholder: 'Ваш Email',
            company: 'Компанія (необов\'язково)', companyPlaceholder: 'Ваша компанія',
            projectType: 'Тип проекту', selectProject: 'Оберіть тип проекту',
            nftMarketplace: 'Розробка NFT маркетплейсу', gamingPlatform: 'Децентралізована ігрова платформа',
            ecommerce: 'E-Commerce сайт (Next.js)', tradingBot: 'AI торговий бот (Python/Node.js)',
            automationBot: 'Бот автоматизації соц. мереж', smartContracts: 'Розробка смарт-контрактів',
            nftCollection: 'Запуск NFT колекції', web3Platform: 'Web3 платформа/DApp',
            fullstackApp: 'Full-Stack веб-додаток', blockchainIntegration: 'Blockchain інтеграція',
            shopifyApp: 'Розробка Shopify додатків',
            aiAgentIntegration: 'AI Агентна Інтеграція',
            multiAgentSystem: 'Розробка Мульти-агентної Системи',
            voiceAgent: 'Голосовий Агент (Realtime)',
            ragChatbot: 'RAG Система / AI Чат-бот',
            consultation: 'Технічна консультація', other: 'Інше',
            budget: 'Діапазон бюджету', selectBudget: 'Оберіть діапазон бюджету',
            under1k: 'До $1,000', '1k5k': '$1,000 - $5,000', '5k10k': '$5,000 - $10,000',
            '10k25k': '$10,000 - $25,000', '25k50k': '$25,000 - $50,000', '50kplus': '$50,000+',
            message: 'Опис проекту', messagePlaceholder: 'Розкажіть про ваш проект, терміни та специфічні вимоги...',
            send: 'Надіслати'
        },
        achievements: {
            shipped: {
                title: '20+ реалізованих продуктів',
                description: 'Full-stack веб-додатки, Shopify додатки, смарт-контракти, AI агенти та ML пайплайни в продакшні — 10+ платформ досі активні'
            },
            shopifyApps: {
                title: '2 опубліковані Shopify додатки',
                description: 'InkBot (AI описи товарів, 111+ мов) та ClothCast (AI віртуальна примірка з FLUX.2) — створені, опубліковані та підтримувані самостійно'
            },
            mlPipeline: {
                title: 'End-to-End ML пайплайн',
                description: 'Генерація синтетичних датасетів → QLoRA/LoRA файн-тюнінг → GGUF експорт → Ollama деплой — повний власний цикл тренування LLM'
            },
            selfAgent: {
                title: 'Самодоповнюваний AI агент',
                description: 'Dual-LLM агент (Buddy), який автономно пише, валідує та деплоїть власні скіли — з українським голосовим інтерфейсом та sandbox-виконанням'
            },
            rag: {
                title: 'Продакшн RAG система',
                description: '3 440+ проіндексованих чанків, гібридний пошук (pgvector HNSW + BM25 + RRF), нейронний реранкінг — self-hosted на AWS EC2 з CI/CD'
            },
            holders: {
                title: '10 000+ холдерів токена',
                description: 'Створив токен ZORIUM та DeFi стейкінг екосистему на Zora Network, успішний аірдроп спільноті з 10 000+ холдерів'
            },
            nftCollections: {
                title: 'Розпродані NFT колекції',
                description: 'Bored Giraffes Yacht Club — 3 333 NFT, розпродано на Ethereum — плюс The GAFs та адаптація роману в NFT (Misery Avenue)'
            },
            nftjudge: {
                title: 'Суддя NFT Design Awards',
                description: 'Офіційний суддя на <a href="https://nftdesignawards.io/judge/volodymyrdorosh" target="_blank" style="color: var(--accent-color);">NFT Design Awards</a>, оцінюю інноваційні NFT проекти та досконалість дизайну'
            },
            aivideo: {
                title: 'AI відеовиробництво',
                description: 'Режисура повністю AI-генерованих анімаційних фільмів — повні відеоворкфлоу з Sora, Runway та Midjourney'
            }
        },
        projectCards: {
            inkbot: {
                title: 'InkBot - AI Описи Товарів',
                description: 'AI-powered Shopify додаток для генерації SEO-оптимізованих описів товарів за допомогою DeepSeek V3. Функції: масова генерація, аналіз голосу бренду, SEO оцінка, 111+ мов, 9 ніш та 4 плани підписки. <a href="https://inkbot.app/" target="_blank" style="color: var(--accent-color);">Відвідати InkBot</a>'
            },
            clothcast: {
                title: 'ClothCast - AI Віртуальна Примірка',
                description: 'AI Shopify додаток для віртуальної примірки з використанням FLUX.2 генерації зображень. Клієнти завантажують селфі, щоб побачити себе в обраному одязі. Функції: кастомізований віджет, theme extension, панель аналітики та приватність з 24-годинним зберіганням даних. <a href="https://cloth-cast.vercel.app/landing" target="_blank" style="color: var(--accent-color);">Відвідати ClothCast</a>'
            },
            askdorosh: {
                title: 'Ask About Dorosh — Продакшн RAG Система',
                description: 'Продакшн RAG чат-бот, що індексує 34 реальні проекти + CV (3,440+ чанків). Гібридний пошук (pgvector HNSW + BM25 GIN) з RRF фузією, Jina Reranker v3, DeepSeek LLM стрімінг через SSE. Self-hosted на AWS EC2 з Nginx, PM2, Let\'s Encrypt SSL та GitHub Actions CI/CD. <a href="https://ask-about-dorosh.duckdns.org" target="_blank" style="color: var(--accent-color);">Спробувати наживо</a>'
            },
            buddy: {
                title: 'Buddy Agent — Самодоповнюваний AI Асистент',
                description: 'Самодоповнюваний Telegram AI асистент з dual-LLM архітектурою — DeepSeek V3.2 диспетчеризує задачі, а MiniMax M2.7 автономно генерує нові скіли. Український голосовий інтерфейс (Whisper STT + Edge-TTS), 3-рівнева безпека з PIN, персистентна пам\'ять та sandbox-виконання з AST-валідацією коду. <a href="https://github.com/volodeveth/buddy-agent" target="_blank" style="color: var(--accent-color);">Переглянути на GitHub</a>'
            },
            pizzavoice: {
                title: 'Pizza Voice Agent — Голосове Замовлення в Реальному Часі',
                description: 'Голосовий помічник піцерії: природне замовлення українською з real-time speech-to-speech розмовою, логікою меню та підтвердженням замовлення. Побудовано на LiveKit Agents і OpenAI Realtime API з Next.js фронтендом. <a href="https://github.com/volodeveth/pizza-voice-agent" target="_blank" style="color: var(--accent-color);">Переглянути на GitHub</a>'
            },
            loopforge: {
                title: 'LoopForge — Автономний Мульти-Агентний Цикл Розробки',
                description: 'Кує великі фічі в автономному мульти-агентному циклі для Claude Code: інтерв\'ю вимог → специфікація → план → TDD цикл імплементації → верифікація. Агентний інжиніринг у вигляді багаторазового воркфлоу. <a href="https://github.com/volodeveth/loopforge" target="_blank" style="color: var(--accent-color);">Переглянути на GitHub</a>'
            },
            tinyllama: {
                title: 'TinyLlama QLoRA Пайплайн Файн-тюнінгу',
                description: 'End-to-end пайплайн файн-тюнінгу LLM: QLoRA тренування на Colab T4 GPU плюс локальний CPU LoRA пайплайн. 4-бітна квантизація, збереження адаптерів, GGUF експорт з Q4_K_M квантизацією та Ollama деплой з відновленням та інкрементальним тренуванням. <a href="https://github.com/volodeveth/tinyllama-qlora-colab" target="_blank" style="color: var(--accent-color);">Переглянути на GitHub</a>'
            },
            datasetfactory: {
                title: 'Dataset Factory — Пайплайн Синтетичних Даних',
                description: 'Універсальний пайплайн генерації якісних тренувальних датасетів для LLM. Інтерактивний візард, 4 формати виводу (Alpaca, Chat, QA, Classification), чанкінг тексту, валідація з дедуплікацією, визначення мови та аналіз розподілу лейблів. <a href="https://github.com/volodeveth/dataset-factory" target="_blank" style="color: var(--accent-color);">Переглянути на GitHub</a>'
            },
            langgraph: {
                title: 'LangGraph Агент Аналізу Коду',
                description: 'Інтелектуальний агент аналізу коду на LangGraph state graph. Сканування директорій з auto-watch (виявлення змін через хешування), мультифайловий аналіз, виявлення багів, code review та генерація тестів — зі Streamlit UI.'
            },
            zorium: {
                title: 'ZORIUM.FUN - NFT Маркетплейс',
                description: 'Децентралізований NFT маркетплейс на Zora Network з аналітикою трендів, інструментами для авторів та мультичейн підтримкою. Побудований з Next.js 14, TypeScript, Wagmi, RainbowKit. 🚧 MVP в процесі. <a href="https://www.zorium.fun/" target="_blank" style="color: var(--accent-color);">Переглянути MVP</a>'
            },
            cryptoduel: {
                title: 'CryptoDuel - Крипто Ігрова Платформа',
                description: 'PvP крипто-гра на Base Network з 4 ігровими режимами (Дуель, Батл Рояль). Функції: інтеграція Farcaster, доказово чесна blockchain рандомізація, база даних PostgreSQL та таблиці лідерів реального часу. <a href="https://www.cryptoduel.xyz/" target="_blank" style="color: var(--accent-color);">Грати зараз</a>'
            },
            nifta: {
                title: 'NiFTa - NFT Маркетплейс на Base',
                description: 'Full-stack NFT маркетплейс на Base Network з 4 газово-ефективними Solidity смарт-контрактами (Factory, ERC-1155 Collection, Marketplace, Events). Унікальний розподіл доходів (Автор 50% / Перший мінтер 10% / Реферал 20%), механіка 48-годинного таймера терміновості, роялті ERC-2981, UUPS оновлювані контракти та OAuth верифікація через X/Farcaster. <a href="https://nifta-zeta.vercel.app/" target="_blank" style="color: var(--accent-color);">Переглянути MVP</a>'
            },
            fjordmekko: {
                title: 'Fjord & Mekko - E-Commerce Магазин',
                description: 'Професійний інтернет-магазин ортопедичних матраців. Функції: каталог товарів, інтерактивні карти Leaflet з 20+ локаціями магазинів, партнерська програма, підбір матраців та email інтеграція. <a href="https://www.fjord-mekko.com.ua/" target="_blank" style="color: var(--accent-color);">Відвідати магазин</a>'
            },
            tradingbots: {
                title: 'AI Торгові Боти - Binance Futures',
                description: 'Просунуті торгові боти для Binance Futures з AI аналізом GPT-3.5-turbo, технічними індикаторами (RSI, MACD, Bollinger Bands, ADX), мультитаймфрейм аналізом (5хв-4год) та скальпінгом з плечем 100x. Побудовані на Python та Node.js.'
            },
            socialbots: {
                title: 'Боти Автоматизації Соціальних Мереж',
                description: 'Множинні Python боти для автоматичного постингу на Zora.co та інших соціальних мережах. Функції: AI генерація контенту, планування, крос-платформна публікація та відстеження залученості.'
            },
            lilurl: {
                title: 'lilURL - Сервіс Скорочення URL',
                description: 'Повнофункціональний сервіс скорочення URL (альтернатива Bit.ly) з аналітикою кліків, генерацією QR-кодів, REST API та планами підписки. Функції: дашборд реального часу з Chart.js, відстеження пристроїв/браузерів/локацій та обмеження запитів. <a href="https://lilurl.vercel.app/" target="_blank" style="color: var(--accent-color);">Відвідати lilURL</a>'
            },
            doshka: {
                title: 'Doshka — Kanban Board REST API',
                description: 'Повноцінний REST API у стилі Trello з Symfony 7.2, JWT автентифікацією, рольовим контролем доступу (Symfony Voters), асинхронними email-повідомленнями через Redis + Symfony Messenger та нагадуваннями про дедлайни через Scheduler. Повне Docker Compose середовище з OpenAPI документацією. <a href="https://github.com/volodeveth/doshka-backend" target="_blank" style="color: var(--accent-color);">Переглянути на GitHub</a>'
            },
            zoriumtoken: {
                title: 'ZORIUM Token - Смарт-контракт',
                description: 'ERC20 оновлюваний токен на Zora Network зі стейкінгом, багаторівневою реферальною системою (3 рівні), механізмом спалювання, системою рівнів (Bronze до Platinum) та авто-розподілом нагород. Побудований з Solidity 0.8.19, патерном проксі OpenZeppelin UUPS та Hardhat. <a href="https://explorer.zora.energy/token/0x538D6F4fb9598dC74e15e6974049B109ae0AbC6a" target="_blank" style="color: var(--accent-color);">Переглянути контракт</a>'
            },
            zoriumplatform: {
                title: 'ZORIUM Platform - DeFi Стейкінг',
                description: 'DeFi стейкінг платформа нового покоління на Zora Network з гнучкими періодами блокування (30-365 днів), до 300% APY, прогресивною системою рівнів з 50% бонусами, 3-рівневою реферальною програмою, інтеграцією NFT нагород та дашбордом реального часу. Побудована з Next.js 13, Wagmi, Viem, RainbowKit. <a href="https://www.zorium.xyz/" target="_blank" style="color: var(--accent-color);">Відвідати платформу</a>'
            },
            bgyc: {
                title: 'Bored Giraffes Yacht Club',
                description: '3,333 NFT колекція на Ethereum з успішним повним розпродажем мінтингу. Повна розробка та деплой. <a href="https://rarible.com/bgyc/items" target="_blank" style="color: var(--accent-color);">Переглянути на Rarible</a>'
            },
            gafs: {
                title: 'The GAFs NFT Колекція',
                description: 'Інноваційна NFT колекція з унікальним генеративним мистецтвом та функціями, орієнтованими на спільноту. <a href="https://opensea.io/collection/thegafs/overview" target="_blank" style="color: var(--accent-color);">Переглянути колекцію</a>'
            },
            miseryavenue: {
                title: 'Misery Avenue: Beginning',
                description: 'Перетворив опублікований роман на NFT колекцію, з\'єднавши традиційне видавництво з Web3 інноваціями. <a href="https://linktr.ee/miseryavenue" target="_blank" style="color: var(--accent-color);">Відвідати проект</a>'
            }
        },
        footer: { copyright: '© 2026 VoloDev.eth — AI Інженер та Agentic Full Stack Розробник. Продуктивність команди. Ціна одного.' },
        experience: {
            title: 'Професійний досвід',
            goal: { role: 'AI Інженер (part-time)', company: 'Маркетинг-агенція «Ціль»', dates: 'Черв 2026 — дотепер', desc: 'AI агенти та LLM-автоматизація маркетингових процесів: мульти-LLM пайплайни, AI-асистований аудит та системи звітності.' },
            freelance: { role: 'AI Інженер та Full-Stack Розробник', company: 'Фріланс та власні продукти', dates: '2014 — дотепер', desc: 'Голосові агенти, RAG системи, самодоповнювані асистенти, файн-тюнінг LLM, Shopify додатки, SaaS та Web3 платформи — 20+ реалізованих продуктів (див. Проекти нижче).' },
            dimison: { role: 'Digital Transformation Lead та керівник e-commerce', company: '«Дім і Сон»', dates: 'Січ 2021 — Кві 2026', desc: 'Спроектував кастомне e-commerce ядро на Next.js/React на заміну legacy CMS; побудував omnichannel екосистему з синхронізацією складу, логістики та продажів між офлайн-магазинами і сайтом у реальному часі; впровадив AI агентів для прийому замовлень, генерації контенту та автопостингу в соцмережах; автоматизував маркетингові процеси (Google Ads, SEO, CRM) і логістику.' },
            mekko: { role: 'Співзасновник та керівник e-commerce', company: 'Mekko', dates: 'Черв 2011 — Січ 2021', desc: 'Співзаснував і майже 10 років керував e-commerce брендом матраців: повністю вів технічну частину (Shopify магазин, SEO на різних платформах, Google та Meta Ads), а також проектний менеджмент, рекрутинг, R&D і маркетингову стратегію.' }
        },
        rag: {
            fabLabel: 'Спитай мій AI',
            title: 'Ask About Dorosh',
            subtitle: 'Власний RAG пайплайн — 34 проекти + CV в індексі',
            welcome: 'Привіт! Я AI, який знає роботу Володимира зсередини — 34 проіндексовані проекти плюс CV. Питай будь-що про навички, стек чи досвід.',
            q1: 'Які Shopify додатки він створив?',
            q2: 'Як працює його мульти-агентний AI воркфлоу?',
            q3: 'Який у нього досвід файн-тюнінгу ML?',
            placeholder: 'Спитай про навички, проекти, досвід...',
            note: 'Живе демо мого RAG стеку: pgvector + Jina + DeepSeek, self-hosted на AWS',
            error: 'Щось пішло не так — можливо, бекенд зайнятий. Спробуй ще раз за мить або відкрий повний додаток через іконку ↗.'
        }
    },
    de: {
        nav: { home: 'Start', about: 'Über mich', experience: 'Erfahrung', projects: 'Projekte', skills: 'Kenntnisse', contact: 'Kontakt' },
        hero: {
            title1: 'KI-Ingenieur',
            title2: '& Agentic Full Stack Entwickler',
            subtitle: 'KI-Agenten & Multi-Agenten-Systeme | Sprachagenten | RAG-Systeme | LLM-Fine-Tuning | Full-Stack-Apps | Shopify | Web3',
            location: '📍 Lwiw, Ukraine | 🌐 Weltweit verfügbar',
            description: 'Ich entwickle KI-Agenten und agentische Systeme, die echte Arbeit leisten: <strong>Sprachagenten</strong>, die Bestellungen in Echtzeit entgegennehmen (LiveKit + OpenAI Realtime), <strong>selbsterweiternde Assistenten</strong>, die eigene Skills schreiben, <strong>Produktions-RAG-Pipelines</strong>, <strong>LLM-Fine-Tuning</strong> (QLoRA → GGUF → Ollama) und KI-Automatisierung. Ich baue den gesamten Stack darum herum — <strong>Next.js, React, TypeScript, Python, Node.js</strong> — und entwickle mit einem Multi-Agenten-Claude-Code-Workflow, sodass jedes Projekt mit automatischem Code-Review und Sicherheitsaudit ausgeliefert wird. Glauben Sie nicht nur meinen Worten — <strong>fragen Sie meine KI unten rechts: das ist mein eigenes RAG-System</strong>.',
            viewProjects: 'Projekte ansehen',
            getInTouch: 'Kontakt aufnehmen',
            downloadCv: 'CV herunterladen',
            stats: { projects: 'Ausgelieferte Produkte', platforms: 'Aktive Plattformen', shopifyApps: 'Veröffentlichte Shopify-Apps', experience: 'Jahre Erfahrung' }
        },
        about: {
            title: 'Über mich',
            intro: 'Ich bin KI-Ingenieur & Full-Stack-Entwickler — 10+ Jahre Softwareentwicklung, die letzten 3 mit Fokus auf LLM- und agentische Systeme — mit 20+ ausgelieferten Produkten. Ich baue agentische Systeme als Produkt — Sprachagenten, selbsterweiternde Assistenten, Produktions-RAG-Pipelines, LLM-Fine-Tuning und KI-Automatisierung — und entwickle sie mit Multi-Agenten-Claude-Code-Orchestrierung (Planner, Architect, Implementer, Reviewer, Security Auditor parallel), um produktionsreife Anwendungen schneller und zu einem Bruchteil der Kosten eines traditionellen Teams zu liefern. Jedes Projekt wird mit automatischem Code-Review, Sicherheitsaudit und persönlicher Qualitätskontrolle geliefert. Stack: <strong>Next.js, React, TypeScript, Python, Django, Node.js, PHP/Symfony, Solidity</strong> — plus Shopify-App-Entwicklung, SaaS und Web3-Integration.',
            achievementsTitle: 'Wichtigste Erfolge & Fachkenntnisse',
            profileLocation: 'KI-Ingenieur aus Lwiw, Ukraine',
            profileTagline: 'Ich baue KI-Agenten, die echte Arbeit leisten'
        },
        projects: { title: 'Ausgewählte Projekte' },
        langBanner: {
            title: 'Keine Sprachbarrieren',
            desc: 'Fließende Echtzeitkommunikation in über 50 Sprachen per KI-Live-Dolmetscher',
            more: '+ Arabisch, Hindi, Portugiesisch, Niederländisch, Schwedisch, Polnisch, Tschechisch, Türkisch, Vietnamesisch, Thailändisch und 32 weitere'
        },
        valueProp: {
            quality: { title: 'KI-Agenten-Qualität', desc: 'Automatisiertes Review durch Opus: Bugs, Sicherheit, UI/UX — bei jedem Commit' },
            speed: { title: 'Team-Geschwindigkeit', desc: 'Features werden parallel geliefert: Architekt + Implementierer + Tester gleichzeitig' },
            cost: { title: 'Solo-Preis', desc: '1 Ingenieur. Kein Management-Overhead. Keine Team-Koordinationskosten.' }
        },
        skills: {
            title: 'Technische Kompetenz',
            cat: {
                agentWorkflow: 'KI-Agenten & Agentische Systeme',
                ml: 'ML & LLM Engineering',
                blockchain: 'Blockchain-Entwicklung',
                python: 'Python-Entwicklung',
                ai: 'KI-Integration & Tools',
                frontend: 'Frontend-Entwicklung',
                backend: 'Backend-Entwicklung',
                shopify: 'Shopify-Entwicklung',
                tools: 'Tools & Integrationen',
                content: 'Content-Erstellung',
                nft: 'NFT-Ökosystem'
            },
            items: {
                automationBots: 'Automatisierung & Bots',
                tradingBots: 'Trading-Bots',
                aiImageGen: 'Midjourney & KI-Bildgenerierung',
                aiVideo: 'Sora & Runway (KI-Video)',
                tradingAlgo: 'Handelsalgorithmen & ML',
                apiDev: 'API-Entwicklung (REST)',
                shopifyAppDev: 'Shopify-App-Entwicklung',
                themeExt: 'Theme-Extensions & Liquid',
                videoProduction: 'Videoproduktion',
                aiVideos: 'KI-generierte Videos',
                animatedFilms: 'Animationsfilme',
                nftDev: 'NFT-Entwicklung (ERC-721)',
                marketplaceDev: 'Marktplatz-Entwicklung',
                generativeArt: 'Generative Kunst',
                ipfs: 'IPFS / Dezentraler Speicher',
                claudeCode: 'Claude Code Orchestrierung',
                multiAgent: 'Multi-Agenten-Systeme (Opus / Sonnet / Haiku)',
                parallelAgents: 'Parallele Subagenten-Ausführung',
                codeReview: 'Automatisiertes Code-Review & Sicherheitsaudit',
                figmaMcp: 'Figma → Code (MCP API)',
                thirdPartyAi: 'OpenAI / Gemini / Grok API Integration',
                cicd: 'Git → Vercel CI/CD Pipeline',
                voiceAgents: 'Sprachagenten (LiveKit / OpenAI Realtime)',
                langgraphAgents: 'LangGraph-Agenten',
                fineTuning: 'LLM-Fine-Tuning (QLoRA / LoRA / PEFT)',
                syntheticData: 'Synthetische Datensatzgenerierung',
                localLlm: 'GGUF / llama.cpp / Ollama (lokale LLMs)',
                selfExtending: 'Selbsterweiternde Agenten (OpenClaw)',
                rag: 'RAG-Pipeline (pgvector + Jina AI)'
            }
        },
        contact: {
            title: 'Lass uns etwas Großartiges bauen',
            subtitle: 'Bereit, Ihre Vision umzusetzen',
            description: 'Ob Sie einen KI-Agenten oder ein Multi-Agenten-System, einen Sprachagenten, ein RAG-System oder einen Chatbot, LLM-Fine-Tuning, eine Full-Stack-Web-App, Shopify-App, SaaS-Plattform oder Web3-Entwicklung benötigen — Sie erhalten Multi-Agenten-KI-Engineering: schnellere Lieferung, automatisierte Qualitätskontrolle und Senior-Level-Code-Review bei jedem Commit. Team-Output. Solo-Preis.',
            upwork: 'Upwork-Profil',
            upworkDesc: 'Mein professionelles Profil und Bewertungen ansehen',
            githubDesc: 'Meine Open-Source-Projekte ansehen',
            cv: 'CV herunterladen',
            cvDesc: 'Druckbares CV — EN / UA / DE',
            availability: 'Verfügbarkeit',
            availabilityDesc: 'Bereit, Ihr Projekt zu starten',
            formTitle: 'Kontakt aufnehmen',
            responseTime: 'Antwortzeit',
            responseTimeDesc: 'Ich antworte innerhalb von 24 Stunden auf Ihre Nachricht'
        },
        form: {
            name: 'Name', namePlaceholder: 'Ihr Name',
            email: 'E-Mail', emailPlaceholder: 'Ihre E-Mail',
            company: 'Unternehmen (Optional)', companyPlaceholder: 'Ihr Unternehmen',
            projectType: 'Projektart', selectProject: 'Projektart auswählen',
            nftMarketplace: 'NFT-Marktplatz-Entwicklung', gamingPlatform: 'Dezentrale Gaming-Plattform',
            ecommerce: 'E-Commerce-Website (Next.js)', tradingBot: 'KI-Trading-Bot (Python/Node.js)',
            automationBot: 'Social-Media-Automatisierungsbot', smartContracts: 'Smart-Contract-Entwicklung',
            nftCollection: 'NFT-Collection-Launch', web3Platform: 'Web3-Plattform/DApp',
            fullstackApp: 'Full-Stack-Webanwendung', blockchainIntegration: 'Blockchain-Integration',
            shopifyApp: 'Shopify-App-Entwicklung',
            aiAgentIntegration: 'KI-Agenten-Integration',
            multiAgentSystem: 'Multi-Agenten-System-Entwicklung',
            voiceAgent: 'Sprachagent (Echtzeit)',
            ragChatbot: 'RAG-System / KI-Chatbot',
            consultation: 'Technische Beratung', other: 'Sonstiges',
            budget: 'Budgetrahmen', selectBudget: 'Budgetrahmen auswählen',
            under1k: 'Unter $1.000', '1k5k': '$1.000 – $5.000', '5k10k': '$5.000 – $10.000',
            '10k25k': '$10.000 – $25.000', '25k50k': '$25.000 – $50.000', '50kplus': '$50.000+',
            message: 'Projektbeschreibung', messagePlaceholder: 'Erzählen Sie mir von Ihrem Projekt, dem Zeitplan und den spezifischen Anforderungen...',
            send: 'Nachricht senden'
        },
        achievements: {
            shipped: {
                title: '20+ ausgelieferte Produkte',
                description: 'Full-Stack-Web-Apps, Shopify-Apps, Smart Contracts, KI-Agenten und ML-Pipelines in Produktion — 10+ Plattformen weiterhin aktiv'
            },
            shopifyApps: {
                title: '2 veröffentlichte Shopify-Apps',
                description: 'InkBot (KI-Produktbeschreibungen, 111+ Sprachen) und ClothCast (KI-Virtual-Try-On mit FLUX.2) — solo entwickelt, veröffentlicht und gepflegt'
            },
            mlPipeline: {
                title: 'End-to-End-ML-Pipeline',
                description: 'Synthetische Datensatzgenerierung → QLoRA/LoRA-Fine-Tuning → GGUF-Export → Ollama-Deployment — ein kompletter eigener LLM-Trainings-Workflow'
            },
            selfAgent: {
                title: 'Selbsterweiternder KI-Agent',
                description: 'Dual-LLM-Agent (Buddy), der autonom eigene Skills schreibt, validiert und deployt — mit Sprachschnittstelle und Sandbox-Ausführung'
            },
            rag: {
                title: 'Produktions-RAG-System',
                description: '3.440+ indexierte Chunks, hybride Suche (pgvector HNSW + BM25 + RRF), neuronales Reranking — self-hosted auf AWS EC2 mit CI/CD'
            },
            holders: {
                title: '10.000+ Token-Inhaber',
                description: 'ZORIUM-Token & DeFi-Staking-Ökosystem auf dem Zora Network entwickelt und erfolgreich per Airdrop an 10.000+ Inhaber verteilt'
            },
            nftCollections: {
                title: 'Ausverkaufte NFT-Kollektionen',
                description: 'Bored Giraffes Yacht Club — 3.333 NFTs, ausverkauft auf Ethereum — plus The GAFs und eine Roman-zu-NFT-Adaption (Misery Avenue)'
            },
            nftjudge: {
                title: 'NFT Design Awards Juror',
                description: 'Offizieller Juror bei den <a href="https://nftdesignawards.io/judge/volodymyrdorosh" target="_blank" style="color: var(--accent-color);">NFT Design Awards</a>, Bewertung innovativer NFT-Projekte und Design-Exzellenz'
            },
            aivideo: {
                title: 'KI-Videoproduktion',
                description: 'Regie vollständig KI-generierter Animationsfilme — komplette Video-Workflows mit Sora, Runway und Midjourney'
            }
        },
        projectCards: {
            inkbot: {
                title: 'InkBot – KI-Produktbeschreibungen',
                description: 'KI-gestützte Shopify-App zur Generierung SEO-optimierter Produktbeschreibungen mit DeepSeek V3. Funktionen: Massengenerierung, Markenstimm-Analyse, SEO-Bewertung, 111+ Sprachen, 9 Nischen und 4 Abonnementpläne. <a href="https://inkbot.app/" target="_blank" style="color: var(--accent-color);">InkBot besuchen</a>'
            },
            clothcast: {
                title: 'ClothCast – KI-Virtuelle Anprobe',
                description: 'KI-Shopify-App für virtuelle Anproben mit FLUX.2-Bildgenerierung. Kunden laden ein Selfie hoch und sehen sich selbst im gewünschten Produkt. Funktionen: anpassbares Widget, Theme-Extension, Analyse-Dashboard und datenschutzfreundliche 24h-Datenspeicherung. <a href="https://cloth-cast.vercel.app/landing" target="_blank" style="color: var(--accent-color);">ClothCast besuchen</a>'
            },
            askdorosh: {
                title: 'Ask About Dorosh — Produktions-RAG-System',
                description: 'Produktions-RAG-Chatbot, der 34 reale Projekte + CV indiziert (3.440+ Chunks). Hybridsuche (pgvector HNSW + BM25 GIN) mit RRF-Fusion, Jina Reranker v3, DeepSeek-LLM-Streaming via SSE. Self-hosted auf AWS EC2 mit Nginx, PM2, Let\'s Encrypt SSL und GitHub Actions CI/CD. <a href="https://ask-about-dorosh.duckdns.org" target="_blank" style="color: var(--accent-color);">Live testen</a>'
            },
            buddy: {
                title: 'Buddy Agent — Selbsterweiternder KI-Assistent',
                description: 'Selbsterweiternder Telegram-KI-Assistent mit Dual-LLM-Architektur — DeepSeek V3.2 verteilt Aufgaben, während MiniMax M2.7 autonom neue Skills generiert. Ukrainische Sprachschnittstelle (Whisper STT + Edge-TTS), 3-stufige Sicherheit mit PIN, persistenter Speicher und Sandbox-Ausführung mit AST-basierter Code-Validierung. <a href="https://github.com/volodeveth/buddy-agent" target="_blank" style="color: var(--accent-color);">Auf GitHub ansehen</a>'
            },
            pizzavoice: {
                title: 'Pizza Voice Agent — Sprachbestellung in Echtzeit',
                description: 'Sprachassistent für eine Pizzeria: natürliche gesprochene Bestellung auf Ukrainisch mit Echtzeit-Speech-to-Speech-Dialog, Menülogik und Bestellbestätigung. Entwickelt mit LiveKit Agents und der OpenAI Realtime API mit Next.js-Frontend. <a href="https://github.com/volodeveth/pizza-voice-agent" target="_blank" style="color: var(--accent-color);">Auf GitHub ansehen</a>'
            },
            loopforge: {
                title: 'LoopForge — Autonomer Multi-Agenten-Entwicklungszyklus',
                description: 'Schmiedet große Features in einem autonomen Multi-Agenten-Loop für Claude Code: Anforderungsinterview → Spezifikation → Plan → TDD-Implementierungsschleife → Verifizierung. Agentic Engineering als wiederverwendbarer Workflow. <a href="https://github.com/volodeveth/loopforge" target="_blank" style="color: var(--accent-color);">Auf GitHub ansehen</a>'
            },
            tinyllama: {
                title: 'TinyLlama QLoRA Fine-Tuning-Pipeline',
                description: 'End-to-End-LLM-Fine-Tuning-Pipeline: QLoRA-Training auf Colab T4 GPU plus lokale CPU-LoRA-Pipeline. 4-Bit-Quantisierung, Adapter-Persistenz, GGUF-Export mit Q4_K_M-Quantisierung und Ollama-Deployment mit Resume- und inkrementellem Training. <a href="https://github.com/volodeveth/tinyllama-qlora-colab" target="_blank" style="color: var(--accent-color);">Auf GitHub ansehen</a>'
            },
            datasetfactory: {
                title: 'Dataset Factory — Pipeline für synthetische Daten',
                description: 'Universelle Pipeline zur Generierung hochwertiger LLM-Trainingsdatensätze. Interaktiver Wizard, 4 Ausgabeformate (Alpaca, Chat, QA, Classification), Text-Chunking, Validierung mit Deduplizierung, Spracherkennung und Label-Verteilungsanalyse. <a href="https://github.com/volodeveth/dataset-factory" target="_blank" style="color: var(--accent-color);">Auf GitHub ansehen</a>'
            },
            langgraph: {
                title: 'LangGraph Code-Assistent-Agent',
                description: 'Intelligenter Code-Analyse-Agent auf Basis eines LangGraph-State-Graphen. Verzeichnis-Scanning mit Auto-Watch (Hash-basierte Änderungserkennung), Multi-Datei-Analyse, Bug-Erkennung, Code-Review und Testgenerierung — mit Streamlit-UI.'
            },
            zorium: {
                title: 'ZORIUM.FUN – NFT-Marktplatz',
                description: 'Dezentraler NFT-Marktplatz auf dem Zora Network mit Trend-Analyse, Erstellerwerkzeugen und Multi-Chain-Unterstützung. Entwickelt mit Next.js 14, TypeScript, Wagmi, RainbowKit. 🚧 MVP in Entwicklung. <a href="https://www.zorium.fun/" target="_blank" style="color: var(--accent-color);">MVP ansehen</a>'
            },
            cryptoduel: {
                title: 'CryptoDuel – Krypto-Gaming-Plattform',
                description: 'PvP-Krypto-Spiel auf dem Base Network mit 4 Spielmodi (Duell, Battle Royale). Funktionen: Farcaster-Integration, nachweislich faire Blockchain-Zufallsgenerierung, PostgreSQL-Datenbank und Echtzeit-Bestenlisten. <a href="https://www.cryptoduel.xyz/" target="_blank" style="color: var(--accent-color);">Jetzt spielen</a>'
            },
            nifta: {
                title: 'NiFTa – NFT-Marktplatz auf Base',
                description: 'Full-Stack-NFT-Marktplatz auf dem Base Network mit 4 gaseffizienten Solidity-Smart-Contracts (Factory, ERC-1155 Collection, Marketplace, Events). Einzigartige Erlösaufteilung (Ersteller 50% / Erster Minter 10% / Empfehlung 20%), 48h-Timer-Dringlichkeitsmechanik, ERC-2981-Lizenzgebühren, UUPS-aktualisierbare Contracts und OAuth-Verifizierung via X/Farcaster. <a href="https://nifta-zeta.vercel.app/" target="_blank" style="color: var(--accent-color);">MVP ansehen</a>'
            },
            fjordmekko: {
                title: 'Fjord & Mekko – E-Commerce-Shop',
                description: 'Professioneller Online-Shop für orthopädische Matratzen. Funktionen: Produktkatalog, interaktive Leaflet-Karten mit 20+ Filialstandorten, Partnerprogramm, Matratzenkonfigurator und E-Mail-Integration. <a href="https://www.fjord-mekko.com.ua/" target="_blank" style="color: var(--accent-color);">Shop besuchen</a>'
            },
            tradingbots: {
                title: 'KI-Trading-Bots – Binance Futures',
                description: 'Fortschrittliche Trading-Bots für Binance Futures mit GPT-3.5-turbo-KI-Analyse, technischen Indikatoren (RSI, MACD, Bollinger Bands, ADX), Multi-Timeframe-Analyse (5m–4h) und 100x-Hebel-Scalping. Entwickelt mit Python und Node.js.'
            },
            socialbots: {
                title: 'Social-Media-Automatisierungsbots',
                description: 'Mehrere Python-Bots für automatisiertes Posting auf Zora.co und anderen sozialen Netzwerken. Funktionen: KI-gestützte Inhaltsgenerierung, Planung, plattformübergreifende Veröffentlichung und Engagement-Tracking.'
            },
            lilurl: {
                title: 'lilURL – URL-Kürzungsdienst',
                description: 'Vollständiger URL-Kürzungsdienst (Bit.ly-Alternative) mit Klick-Analyse, QR-Code-Generierung, REST API und Abonnementplänen. Funktionen: Echtzeit-Dashboard mit Chart.js, Geräte-/Browser-/Standortverfolgung und Rate-Limiting. <a href="https://lilurl.vercel.app/" target="_blank" style="color: var(--accent-color);">lilURL besuchen</a>'
            },
            doshka: {
                title: 'Doshka — Kanban-Board-REST-API',
                description: 'Vollständige Trello-ähnliche REST-API mit Symfony 7.2, JWT-Authentifizierung, rollenbasierter Zugriffskontrolle (Symfony Voters), asynchronen E-Mail-Benachrichtigungen via Redis-Queue + Symfony Messenger und täglichen Deadline-Erinnerungen via Scheduler. Vollständige Docker-Compose-Umgebung mit PostgreSQL 16 und OpenAPI-Dokumentation. <a href="https://github.com/volodeveth/doshka-backend" target="_blank" style="color: var(--accent-color);">Auf GitHub ansehen</a>'
            },
            zoriumtoken: {
                title: 'ZORIUM Token – Smart Contract',
                description: 'ERC20-Upgrade-fähiger Token auf dem Zora Network mit Staking, mehrstufigem Empfehlungssystem (3 Ebenen), Burn-Mechanismus, Tier-System (Bronze bis Platin) und automatischer Belohnungsverteilung. Entwickelt mit Solidity 0.8.19, OpenZeppelin UUPS-Proxy-Pattern und Hardhat. <a href="https://explorer.zora.energy/token/0x538D6F4fb9598dC74e15e6974049B109ae0AbC6a" target="_blank" style="color: var(--accent-color);">Contract ansehen</a>'
            },
            zoriumplatform: {
                title: 'ZORIUM-Plattform – DeFi-Staking',
                description: 'DeFi-Staking-Plattform der nächsten Generation auf dem Zora Network mit flexiblen Sperrzeiträumen (30–365 Tage), bis zu 300% APY, progressivem Tier-System mit 50% Boni, 3-stufigem Empfehlungsprogramm, NFT-Belohnungsintegration und Echtzeit-Dashboard. Entwickelt mit Next.js 13, Wagmi, Viem, RainbowKit. <a href="https://www.zorium.xyz/" target="_blank" style="color: var(--accent-color);">Plattform besuchen</a>'
            },
            bgyc: {
                title: 'Bored Giraffes Yacht Club',
                description: '3.333 NFT-Collection auf Ethereum mit erfolgreichem Ausverkauf beim Minting. Vollständige Entwicklung und Deployment. <a href="https://rarible.com/bgyc/items" target="_blank" style="color: var(--accent-color);">Auf Rarible ansehen</a>'
            },
            gafs: {
                title: 'The GAFs NFT Collection',
                description: 'Innovative NFT-Collection mit einzigartiger generativer Kunst und community-getriebenen Funktionen. <a href="https://opensea.io/collection/thegafs/overview" target="_blank" style="color: var(--accent-color);">Collection ansehen</a>'
            },
            miseryavenue: {
                title: 'Misery Avenue: Beginning',
                description: 'Verwandlung eines veröffentlichten Romans in eine NFT-Collection – Brücke zwischen traditionellem Verlagswesen und Web3-Innovation. <a href="https://linktr.ee/miseryavenue" target="_blank" style="color: var(--accent-color);">Projekt besuchen</a>'
            }
        },
        footer: { copyright: '© 2026 VoloDev.eth — KI-Ingenieur & Agentic Full Stack Entwickler. Team-Output. Solo-Preis.' },
        experience: {
            title: 'Berufserfahrung',
            goal: { role: 'KI-Ingenieur (Teilzeit)', company: 'Marketingagentur «Цil» (Goal)', dates: 'Juni 2026 — heute', desc: 'KI-Agenten und LLM-Automatisierung für Marketingprozesse: Multi-LLM-Pipelines, KI-gestützte Audits und Reporting-Systeme.' },
            freelance: { role: 'KI-Ingenieur & Full-Stack-Entwickler', company: 'Freelance & eigene Produkte', dates: '2014 — heute', desc: 'Sprachagenten, RAG-Systeme, selbsterweiternde Assistenten, LLM-Fine-Tuning, Shopify-Apps, SaaS- und Web3-Plattformen — 20+ ausgelieferte Produkte (siehe Projekte unten).' },
            dimison: { role: 'Digital Transformation Lead & Leiter E-Commerce', company: '«Dim i Son»', dates: 'Jan 2021 — Apr 2026', desc: 'Eigenes E-Commerce-Kernsystem mit Next.js/React als Ersatz für Legacy-CMS entworfen; Omnichannel-Ökosystem mit Echtzeit-Synchronisation von Lager, Logistik und Verkäufen zwischen Offline-Filialen und Web aufgebaut; KI-Agenten für Bestellannahme, Content-Generierung und automatisiertes Social-Publishing eingeführt; Marketing-Workflows (Google Ads, SEO, CRM) und Supply-Chain-Logik automatisiert.' },
            mekko: { role: 'Mitgründer & Leiter E-Commerce', company: 'Mekko', dates: 'Juni 2011 — Jan 2021', desc: 'Mitgegründet und fast 10 Jahre eine E-Commerce-Matratzenmarke geführt: die gesamte technische Seite verantwortet (Shopify-Shop, SEO auf verschiedenen Plattformen, Google & Meta Ads) plus Projektmanagement, Recruiting, R&D und Marketingstrategie.' }
        },
        rag: {
            fabLabel: 'Frag meine KI',
            title: 'Ask About Dorosh',
            subtitle: 'Eigene RAG-Pipeline — 34 Projekte + CV indexiert',
            welcome: 'Hallo! Ich bin eine KI, die Volodymyrs Arbeit in- und auswendig kennt — 34 indexierte Projekte plus CV. Frag mich alles über Skills, Stack oder Erfahrung.',
            q1: 'Welche Shopify-Apps hat er entwickelt?',
            q2: 'Wie funktioniert sein Multi-Agenten-KI-Workflow?',
            q3: 'Welche ML-Fine-Tuning-Erfahrung hat er?',
            placeholder: 'Frag nach Skills, Projekten, Erfahrung...',
            note: 'Live-Demo meines RAG-Stacks: pgvector + Jina + DeepSeek, self-hosted auf AWS',
            error: 'Etwas ist schiefgelaufen — das Backend ist vielleicht ausgelastet. Versuche es gleich noch einmal oder öffne die vollständige App über das ↗-Symbol.'
        }
    }
};

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', function() {
    initializeLanguageToggle();
    initializeThemeToggle();
    initializeCustomCursor();
    initializeNavigation();
    initializeAnimations();
    initializeSkillBars();
    checkFormSubmissionSuccess();
});

function initializeLanguageToggle() {
    const savedLang = localStorage.getItem('language') || 'en';
    currentLang = savedLang;
    setActiveLangBtn(savedLang);
    applyTranslations(savedLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            currentLang = lang;
            localStorage.setItem('language', lang);
            setActiveLangBtn(lang);
            applyTranslations(lang);
        });
    });
}

function setActiveLangBtn(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

function applyTranslations(lang) {
    const t = translations[lang];

    // Keep <html lang> in sync for a11y and SEO
    document.documentElement.lang = lang === 'uk' ? 'uk' : lang;

    // Point CV links at the CV matching the selected language
    const cvSuffix = { en: 'EN', uk: 'UA', de: 'DE' }[lang] || 'EN';
    document.querySelectorAll('.cv-link').forEach(el => {
        el.href = 'cv/Volodymyr_Dorosh_CV_' + cvSuffix + '.html';
    });

    // Apply text content translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = getNestedValue(t, key);
        if (value) {
            el.innerHTML = value;
        }
    });

    // Apply placeholder translations
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const value = getNestedValue(t, key);
        if (value) {
            el.placeholder = value;
        }
    });
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;

    // Check saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        html.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');

        if (currentTheme === 'light') {
            html.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    });
}

function initializeCustomCursor() {
    const cursor = document.querySelector('.cursor');
    
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursor.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });

        const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-category, .contact-method');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.backgroundColor = 'rgba(99, 102, 241, 0.2)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.backgroundColor = 'transparent';
            });
        });
    }
}

function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const isLightTheme = document.documentElement.getAttribute('data-theme') === 'light';

        if (window.scrollY > 100) {
            navbar.style.background = isLightTheme ? 'rgba(248, 250, 252, 0.98)' : 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = isLightTheme ? 'rgba(248, 250, 252, 0.95)' : 'rgba(10, 10, 10, 0.95)';
        }
    });

    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
}

function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .achievement-item, .contact-method');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .hero-buttons, .hero-stats');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.animation = `fadeInUp 0.8s ease forwards`;
        el.style.animationDelay = `${index * 0.1}s`;
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}


function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.style.width;
                progressBar.style.width = '0%';
                
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 300);
                
                skillObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

function smoothScroll(target) {
    const element = document.querySelector(target);
    const headerOffset = 80;
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target);
    });
});

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.dev-scene');

    parallaxElements.forEach(element => {
        const speed = 0.15;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Developer scene interactive animations
function initializeDevSceneInteractions() {
    // Tech bubbles — pop on click
    document.querySelectorAll('.tech-bubble').forEach(bubble => {
        bubble.addEventListener('click', function() {
            const style = getComputedStyle(this);
            const matrix = new DOMMatrix(style.transform);
            this.style.setProperty('--pop-x', matrix.m41 + 'px');
            this.style.setProperty('--pop-y', matrix.m42 + 'px');
            this.classList.add('popping');
            this.addEventListener('animationend', function handler() {
                this.classList.remove('popping');
                this.removeEventListener('animationend', handler);
            });
        });
    });

    // Coffee mug — flip on click
    const mug = document.querySelector('.coffee-mug');
    if (mug) {
        mug.addEventListener('click', function() {
            if (!this.classList.contains('flipping')) {
                this.classList.add('flipping');
                this.addEventListener('animationend', function handler() {
                    this.classList.remove('flipping');
                    this.removeEventListener('animationend', handler);
                });
            }
        });
    }

    // Chair — spin developer on click
    const chair = document.querySelector('.chair-group');
    const dev = document.querySelector('.developer-group');
    if (chair && dev) {
        chair.addEventListener('click', function() {
            if (!dev.classList.contains('spinning')) {
                dev.classList.add('spinning');
                dev.addEventListener('animationend', function handler() {
                    dev.classList.remove('spinning');
                    dev.removeEventListener('animationend', handler);
                });
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', initializeDevSceneInteractions);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
});

// Check if form was successfully submitted
function checkFormSubmissionSuccess() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true' || window.location.hash.includes('contact')) {
        setTimeout(() => {
            if (window.location.search.includes('success') || document.referrer.includes('formsubmit')) {
                alert('Thank you for your message! I will get back to you within 24 hours.');
                // Clean up URL
                if (window.history && window.history.replaceState) {
                    window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
                }
            }
        }, 1000);
    }
}

// Pause banner/hero animations when off-screen or tab hidden (performance)
const bannerVisibility = new WeakMap();
(function () {
    var animated = document.querySelectorAll('.tl-banner, .walk-banner, .term-banner, .dev-scene');
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            bannerVisibility.set(entry.target, entry.isIntersecting);
            entry.target.classList.toggle('anim-paused', !entry.isIntersecting);
            // First time a scene scrolls into view, rewind its animations so
            // the viewer sees the sequence from the beginning, not mid-cycle.
            if (entry.isIntersecting && !entry.target.dataset.seen) {
                entry.target.dataset.seen = '1';
                var svg = entry.target.querySelector('svg');
                if (svg && typeof svg.getAnimations === 'function') {
                    svg.getAnimations({ subtree: true }).forEach(function (a) {
                        a.currentTime = 0;
                    });
                }
            }
        });
    }, { rootMargin: '100px' });
    animated.forEach(function (el) { io.observe(el); });
}());
function bannerActive(el) {
    return !document.hidden && bannerVisibility.get(el) !== false;
}

// Banner replay: rewind SVG animations in place via the Web Animations API —
// no DOM cloning, no re-parse/layout of the whole SVG tree. Each banner plays
// its sequence a limited number of times, then holds the final state (infinite
// sub-animations like pulses and cursor blinks keep running).
function setupBannerReplay(bannerSel, svgSel, animMs, holdMs, maxCycles) {
    var banner = document.querySelector(bannerSel);
    if (!banner) return;
    var svg = banner.querySelector(svgSel);
    if (!svg || typeof svg.getAnimations !== 'function') return;

    var FADE_MS = 500;
    var cyclesPlayed = 1; // the initial CSS run is the first cycle

    function finiteAnimsStillRunning() {
        return svg.getAnimations({ subtree: true }).some(function (a) {
            var timing = a.effect && a.effect.getTiming();
            return timing && timing.iterations !== Infinity && a.playState === 'running';
        });
    }

    function rewind() {
        svg.getAnimations({ subtree: true }).forEach(function (a) {
            a.currentTime = 0;
        });
    }

    function runCycle() {
        setTimeout(function () {
            if (cyclesPlayed >= maxCycles) return; // hold final state
            if (!bannerActive(banner) || finiteAnimsStillRunning()) { runCycle(); return; }
            cyclesPlayed++;
            svg.style.transition = 'opacity ' + FADE_MS + 'ms ease';
            svg.style.opacity = '0';
            setTimeout(function () {
                rewind();
                svg.style.opacity = '1';
                setTimeout(function () {
                    svg.style.transition = '';
                    svg.style.opacity = '';
                    runCycle();
                }, FADE_MS);
            }, FADE_MS + 50);
        }, animMs + holdMs);
    }

    runCycle();
}

setupBannerReplay('.tl-banner', '.tl-svg', 5000, 2000, 2);
setupBannerReplay('.walk-banner', '.walk-svg', 10000, 2000, 2);
setupBannerReplay('.term-banner', '.term-svg', 9500, 2000, 2);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    document.body.style.scrollBehavior = 'auto';
    
    const animatedElements = document.querySelectorAll('*');
    animatedElements.forEach(el => {
        el.style.animationDuration = '0.01ms !important';
        el.style.animationIterationCount = '1 !important';
        el.style.transitionDuration = '0.01ms !important';
    });
}
// ===== RAG Chat Widget (Ask About Dorosh) =====
(function () {
    var RAG_API = 'https://ask-about-dorosh.duckdns.org/api/chat';
    var chat = document.getElementById('ragChat');
    if (!chat || !window.fetch || !window.ReadableStream) return;

    var fab = document.getElementById('ragFab');
    var panel = document.getElementById('ragPanel');
    var closeBtn = document.getElementById('ragClose');
    var messages = document.getElementById('ragMessages');
    var form = document.getElementById('ragForm');
    var input = document.getElementById('ragInput');
    var send = document.getElementById('ragSend');
    var suggestions = document.getElementById('ragSuggestions');
    var busy = false;

    function openChat() {
        chat.classList.add('open');
        panel.hidden = false;
        fab.setAttribute('aria-expanded', 'true');
        input.focus();
    }

    function closeChat() {
        chat.classList.remove('open');
        panel.hidden = true;
        fab.setAttribute('aria-expanded', 'false');
    }

    fab.addEventListener('click', openChat);
    closeBtn.addEventListener('click', closeChat);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !panel.hidden) closeChat();
    });

    if (suggestions) {
        suggestions.addEventListener('click', function (e) {
            var chip = e.target.closest('.rag-chip');
            if (chip) ask(chip.textContent.trim());
        });
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var q = input.value.trim();
        if (q) ask(q);
    });

    function addMsg(cls, text) {
        var el = document.createElement('div');
        el.className = 'rag-msg ' + cls;
        el.textContent = text;
        messages.appendChild(el);
        messages.scrollTop = messages.scrollHeight;
        return el;
    }

    function ragT(key) {
        var lang = document.documentElement.lang || 'en';
        var t = (translations[lang] && translations[lang].rag) || translations.en.rag;
        return t[key] || translations.en.rag[key] || '';
    }

    async function ask(query) {
        if (busy) return;
        busy = true;
        input.value = '';
        input.disabled = true;
        send.disabled = true;
        if (suggestions) {
            suggestions.remove();
            suggestions = null;
        }
        addMsg('rag-msg-user', query);
        var bot = addMsg('rag-msg-bot rag-msg-typing', '');

        try {
            var res = await fetch(RAG_API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: query })
            });
            if (!res.ok) throw new Error('HTTP ' + res.status);

            var contentType = res.headers.get('content-type') || '';
            if (contentType.indexOf('text/event-stream') === -1) {
                // Non-stream JSON answer (e.g. "no relevant documents found")
                var data = await res.json();
                bot.textContent = data.answer || data.error || '…';
            } else {
                var reader = res.body.getReader();
                var decoder = new TextDecoder();
                var buf = '';
                while (true) {
                    var chunk = await reader.read();
                    if (chunk.done) break;
                    buf += decoder.decode(chunk.value, { stream: true });
                    var frames = buf.split('\n\n');
                    buf = frames.pop();
                    for (var i = 0; i < frames.length; i++) {
                        var line = frames[i];
                        if (line.indexOf('data: ') !== 0) continue;
                        var payload = line.slice(6);
                        if (payload === '[DONE]') continue;
                        try {
                            var evt = JSON.parse(payload);
                            if (evt.token) {
                                bot.textContent += evt.token;
                                messages.scrollTop = messages.scrollHeight;
                            }
                        } catch (parseErr) { /* skip malformed frame */ }
                    }
                }
                if (!bot.textContent) bot.textContent = '…';
            }
        } catch (err) {
            bot.classList.add('rag-msg-error');
            bot.textContent = ragT('error');
        }

        bot.classList.remove('rag-msg-typing');
        input.disabled = false;
        send.disabled = false;
        busy = false;
        input.focus();
    }
}());
