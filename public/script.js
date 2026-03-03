// Translations
const translations = {
    en: {
        nav: { home: 'Home', about: 'About', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
        hero: {
            title1: 'Full-Stack Blockchain',
            title2: '& AI Developer',
            subtitle: 'Smart Contracts | DeFi | NFT Marketplaces | AI Trading Bots | Shopify Apps | E-Commerce | SaaS',
            location: '📍 Lviv, Ukraine | 🌐 Available Worldwide',
            description: 'Blockchain developer with 10+ years experience building production-ready Web3 applications. Specializing in <strong>Solidity smart contracts</strong>, <strong>NFT marketplaces</strong>, <strong>DeFi staking platforms</strong>, <strong>AI trading bots</strong>, <strong>Shopify apps</strong>, <strong>SaaS platforms</strong>, and <strong>full-stack e-commerce</strong> solutions. Expert in <strong>Next.js, React, Remix, TypeScript, Python, Django, Node.js, PHP, Symfony</strong>, and AI tools (<strong>ChatGPT, Claude, Gemini, Midjourney, Sora, Runway</strong>).',
            viewProjects: 'View Projects',
            getInTouch: 'Get In Touch',
            stats: { projects: 'Projects Delivered', platforms: 'Active Platforms', rate: 'Hourly Rate', experience: 'Years Experience' }
        },
        about: {
            title: 'About Me',
            intro: 'I am a full-stack blockchain developer and Web3 innovator with 10+ years of experience and 20+ completed projects. My expertise spans NFT marketplaces, AI-powered trading bots, Shopify app development, decentralized gaming platforms, e-commerce solutions, and social media automation. I specialize in Python, Node.js, and PHP/Symfony development with deep AI integration (ChatGPT, Claude, Claude Code, Gemini, Midjourney, Sora, Runway).',
            achievementsTitle: 'Key Achievements & Expertise',
            profileLocation: 'Blockchain Developer from Lviv, Ukraine',
            profileTagline: 'Transforming ideas into Web3 reality'
        },
        projects: { title: 'Featured Projects' },
        skills: {
            title: 'Technical Expertise',
            cat: {
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
                ipfs: 'IPFS / Decentralized Storage'
            }
        },
        contact: {
            title: "Let's Build Something Amazing",
            subtitle: 'Ready to Transform Your Vision',
            description: 'Whether you need NFT marketplace development, decentralized gaming platforms, AI-powered trading bots, Shopify app development, e-commerce solutions, social media automation, or custom blockchain development - I bring deep technical expertise and proven results to every project.',
            upwork: 'Upwork Profile',
            upworkDesc: 'View my professional profile and reviews',
            rate: 'Rate',
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
            consultation: 'Technical Consultation', other: 'Other',
            budget: 'Budget Range', selectBudget: 'Select Budget Range',
            under1k: 'Under $1,000', '1k5k': '$1,000 - $5,000', '5k10k': '$5,000 - $10,000',
            '10k25k': '$10,000 - $25,000', '25k50k': '$25,000 - $50,000', '50kplus': '$50,000+',
            message: 'Project Description', messagePlaceholder: 'Tell me about your project, timeline, and specific requirements...',
            send: 'Send Message'
        },
        achievements: {
            inkbot: {
                title: 'Shopify App - InkBot (AI Product Descriptions)',
                description: 'Built an AI-powered Shopify app that generates SEO-optimized product descriptions using DeepSeek V3. Features bulk generation, brand voice analysis, SEO scoring, 111+ languages, and subscription plans. <a href="https://inkbot.app/" target="_blank" style="color: var(--accent-color);">Visit InkBot</a>'
            },
            clothcast: {
                title: 'Shopify App - ClothCast (AI Virtual Try-On)',
                description: 'Built an AI Virtual Try-On Shopify app using FLUX.2 image generation. Customers upload a selfie to see themselves wearing any product. Features customizable widget, analytics dashboard, and privacy-first 24h data retention. <a href="https://cloth-cast.vercel.app/landing" target="_blank" style="color: var(--accent-color);">Visit ClothCast</a>'
            },
            nifta: {
                title: 'NFT Marketplace - NiFTa (Base Network)',
                description: 'Building a full-stack NFT marketplace on Base Network with 4 Solidity smart contracts (Factory, ERC-1155, Marketplace, Events). Features unique revenue split (Creator 50% / First Minter 10% / Referral 20%), 48h timer urgency mechanic, UUPS upgradeable contracts, and social verification via X/Farcaster OAuth. <a href="https://nifta-zeta.vercel.app/" target="_blank" style="color: var(--accent-color);">View MVP</a>'
            },
            zorium: {
                title: 'NFT Marketplace Development - ZORIUM.FUN',
                description: 'Building a decentralized NFT marketplace on Zora Network with Next.js, TypeScript, RainbowKit, and Web3Modal. Features trending analytics, multi-chain support, and creator tools. <a href="https://www.zorium.fun/" target="_blank" style="color: var(--accent-color);">View MVP</a>'
            },
            cryptoduel: {
                title: 'Decentralized Gaming Platform - CryptoDuel',
                description: 'Built a PvP crypto gaming platform on Base Network with Solidity smart contracts, Farcaster integration, PostgreSQL, and 4 game modes (Duel 1v1, Battle Royale). Features provably fair randomization and leaderboards. <a href="https://www.cryptoduel.xyz/" target="_blank" style="color: var(--accent-color);">Play Now</a>'
            },
            fjordmekko: {
                title: 'E-Commerce Platform - Fjord & Mekko',
                description: 'Developed a professional online store for orthopedic mattresses using Next.js 16, React 19, Leaflet maps (20+ store locations), Resend email integration, and Framer Motion animations. <a href="https://www.fjord-mekko.com.ua/" target="_blank" style="color: var(--accent-color);">Visit Store</a>'
            },
            tradingbots: {
                title: 'AI Trading Bots (Python & Node.js)',
                description: 'Created sophisticated trading bots for Binance Futures with GPT-3.5-turbo integration, technical indicators (RSI, MACD, Bollinger Bands), multi-timeframe analysis, and 100x leverage scalping strategies'
            },
            lilurl: {
                title: 'SaaS Platform - lilURL',
                description: 'Built a full-featured URL shortening service (Bit.ly alternative) with Django 5.0, REST API, click analytics, QR code generation, subscription plans, and real-time dashboard. <a href="https://lilurl.vercel.app/" target="_blank" style="color: var(--accent-color);">Visit lilURL</a>'
            },
            doshka: {
                title: 'REST API Backend - Doshka (Kanban Board)',
                description: 'Built a full-featured Trello-like REST API with Symfony 7.2, JWT authentication, role-based access control via Symfony Voters (owner/admin/member), async email notifications via Redis queue + Symfony Messenger, and daily deadline reminders via Symfony Scheduler. Full Docker Compose environment with PostgreSQL 16 and OpenAPI/Swagger docs. <a href="https://github.com/volodeveth/doshka-backend" target="_blank" style="color: var(--accent-color);">View on GitHub</a>'
            },
            socialbots: {
                title: 'Social Media Automation Bots',
                description: 'Developed multiple Python bots for automated posting on Zora.co and other social networks with AI content generation, scheduling, and cross-platform publishing capabilities'
            },
            zoriumeco: {
                title: 'ZORIUM Ecosystem (Legacy)',
                description: 'Built a complete Web3 platform with custom tokens, staking mechanisms, and successfully airdropped to 10,000+ holders. <a href="https://www.zorium.xyz/" target="_blank" style="color: var(--accent-color);">View Platform</a>'
            },
            aivideo: {
                title: 'AI Video Content Creation',
                description: 'Expert in creating complex videos using AI tools, including directing fully AI-generated animated films and professional video production'
            },
            nftjudge: {
                title: 'NFT Design Awards Judge',
                description: 'Official judge at <a href="https://nftdesignawards.io/judge/volodymyrdorosh" target="_blank" style="color: var(--accent-color);">NFT Design Awards</a>, evaluating innovative NFT projects and design excellence'
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
        footer: { copyright: '© 2026 VoloDev.eth - Blockchain Developer & Web3 Innovator. Ready to transform your vision into reality.' }
    },
    uk: {
        nav: { home: 'Головна', about: 'Про мене', projects: 'Проекти', skills: 'Навички', contact: 'Контакти' },
        hero: {
            title1: 'Full-Stack Blockchain',
            title2: '& AI Розробник',
            subtitle: 'Смарт-контракти | DeFi | NFT Маркетплейси | AI Торгові Боти | Shopify Додатки | E-Commerce | SaaS',
            location: '📍 Львів, Україна | 🌐 Працюю по всьому світу',
            description: 'Blockchain розробник з 10+ роками досвіду створення продакшн-ready Web3 додатків. Спеціалізуюся на <strong>Solidity смарт-контрактах</strong>, <strong>NFT маркетплейсах</strong>, <strong>DeFi стейкінг платформах</strong>, <strong>AI торгових ботах</strong>, <strong>Shopify додатках</strong>, <strong>SaaS платформах</strong> та <strong>full-stack e-commerce</strong> рішеннях. Експерт у <strong>Next.js, React, Remix, TypeScript, Python, Django, Node.js, PHP, Symfony</strong> та AI інструментах (<strong>ChatGPT, Claude, Gemini, Midjourney, Sora, Runway</strong>).',
            viewProjects: 'Переглянути проекти',
            getInTouch: "Зв'язатися",
            stats: { projects: 'Проектів виконано', platforms: 'Активних платформ', rate: 'Ставка за годину', experience: 'Років досвіду' }
        },
        about: {
            title: 'Про мене',
            intro: 'Я full-stack blockchain розробник та Web3 інноватор з 10+ роками досвіду та 20+ завершеними проектами. Моя експертиза охоплює NFT маркетплейси, AI-powered торгових ботів, розробку Shopify додатків, децентралізовані ігрові платформи, e-commerce рішення та автоматизацію соціальних мереж. Спеціалізуюся на Python, Node.js та PHP/Symfony розробці з глибокою AI інтеграцією (ChatGPT, Claude, Claude Code, Gemini, Midjourney, Sora, Runway).',
            achievementsTitle: 'Ключові досягнення та експертиза',
            profileLocation: 'Blockchain розробник зі Львова, Україна',
            profileTagline: 'Перетворюю ідеї на Web3 реальність'
        },
        projects: { title: 'Вибрані проекти' },
        skills: {
            title: 'Технічна експертиза',
            cat: {
                blockchain: 'Blockchain-розробка',
                python: 'Python-розробка',
                ai: 'KI-інтеграція та інструменти',
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
                ipfs: 'IPFS / Децентралізоване сховище'
            }
        },
        contact: {
            title: 'Створімо щось неймовірне',
            subtitle: 'Готовий втілити вашу візію',
            description: 'Чи потрібна вам розробка NFT маркетплейсу, децентралізованої ігрової платформи, AI торгових ботів, розробку Shopify додатків, e-commerce рішень, автоматизації соціальних мереж або кастомна blockchain розробка - я приношу глибоку технічну експертизу та перевірені результати в кожен проект.',
            upwork: 'Профіль Upwork',
            upworkDesc: 'Переглянути мій професійний профіль та відгуки',
            rate: 'Ставка',
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
            consultation: 'Технічна консультація', other: 'Інше',
            budget: 'Діапазон бюджету', selectBudget: 'Оберіть діапазон бюджету',
            under1k: 'До $1,000', '1k5k': '$1,000 - $5,000', '5k10k': '$5,000 - $10,000',
            '10k25k': '$10,000 - $25,000', '25k50k': '$25,000 - $50,000', '50kplus': '$50,000+',
            message: 'Опис проекту', messagePlaceholder: 'Розкажіть про ваш проект, терміни та специфічні вимоги...',
            send: 'Надіслати'
        },
        achievements: {
            inkbot: {
                title: 'Shopify Додаток - InkBot (AI Описи Товарів)',
                description: 'Створив AI-powered Shopify додаток для генерації SEO-оптимізованих описів товарів за допомогою DeepSeek V3. Функції: масова генерація, аналіз голосу бренду, SEO оцінка, 111+ мов та плани підписки. <a href="https://inkbot.app/" target="_blank" style="color: var(--accent-color);">Відвідати InkBot</a>'
            },
            clothcast: {
                title: 'Shopify Додаток - ClothCast (AI Віртуальна Примірка)',
                description: 'Створив AI Shopify додаток для віртуальної примірки з використанням FLUX.2 генерації зображень. Клієнти завантажують селфі, щоб побачити себе в обраному одязі. Функції: кастомізований віджет, панель аналітики та приватність з 24-годинним зберіганням даних. <a href="https://cloth-cast.vercel.app/landing" target="_blank" style="color: var(--accent-color);">Відвідати ClothCast</a>'
            },
            nifta: {
                title: 'NFT Маркетплейс - NiFTa (Base Network)',
                description: 'Розробляю повноцінний NFT маркетплейс на Base Network з 4 Solidity смарт-контрактами (Factory, ERC-1155, Marketplace, Events). Унікальний розподіл доходів (Автор 50% / Перший мінтер 10% / Реферал 20%), механіка 48-годинного таймера терміновості, UUPS оновлювані контракти та верифікація через X/Farcaster OAuth. <a href="https://nifta-zeta.vercel.app/" target="_blank" style="color: var(--accent-color);">Переглянути MVP</a>'
            },
            zorium: {
                title: 'Розробка NFT Маркетплейсу - ZORIUM.FUN',
                description: 'Розробляю децентралізований NFT маркетплейс на Zora Network з Next.js, TypeScript, RainbowKit та Web3Modal. Функції: аналітика трендів, мультичейн підтримка та інструменти для авторів. <a href="https://www.zorium.fun/" target="_blank" style="color: var(--accent-color);">Переглянути MVP</a>'
            },
            cryptoduel: {
                title: 'Децентралізована Ігрова Платформа - CryptoDuel',
                description: 'Створив PvP крипто-ігрову платформу на Base Network з Solidity смарт-контрактами, інтеграцією Farcaster, PostgreSQL та 4 ігровими режимами (Дуель 1v1, Батл Рояль). Функції: доказово чесна рандомізація та таблиці лідерів. <a href="https://www.cryptoduel.xyz/" target="_blank" style="color: var(--accent-color);">Грати зараз</a>'
            },
            fjordmekko: {
                title: 'E-Commerce Платформа - Fjord & Mekko',
                description: 'Розробив професійний інтернет-магазин ортопедичних матраців з використанням Next.js 16, React 19, карт Leaflet (20+ локацій магазинів), інтеграції email через Resend та анімацій Framer Motion. <a href="https://www.fjord-mekko.com.ua/" target="_blank" style="color: var(--accent-color);">Відвідати магазин</a>'
            },
            tradingbots: {
                title: 'AI Торгові Боти (Python & Node.js)',
                description: 'Створив складних торгових ботів для Binance Futures з інтеграцією GPT-3.5-turbo, технічними індикаторами (RSI, MACD, Bollinger Bands), мультитаймфрейм аналізом та стратегіями скальпінгу з плечем 100x'
            },
            lilurl: {
                title: 'SaaS Платформа - lilURL',
                description: 'Створив повнофункціональний сервіс скорочення URL (альтернатива Bit.ly) з Django 5.0, REST API, аналітикою кліків, генерацією QR-кодів, планами підписки та дашбордом реального часу. <a href="https://lilurl.vercel.app/" target="_blank" style="color: var(--accent-color);">Відвідати lilURL</a>'
            },
            doshka: {
                title: 'REST API Backend - Doshka (Kanban Дошка)',
                description: 'Розробив повноцінний REST API у стилі Trello з Symfony 7.2, JWT автентифікацією, рольовим контролем доступу через Symfony Voters (owner/admin/member), асинхронними email-повідомленнями через Redis + Symfony Messenger та щоденними нагадуваннями про дедлайни через Scheduler. Повне Docker Compose середовище з PostgreSQL 16 та OpenAPI/Swagger документацією. <a href="https://github.com/volodeveth/doshka-backend" target="_blank" style="color: var(--accent-color);">Переглянути на GitHub</a>'
            },
            socialbots: {
                title: 'Боти Автоматизації Соціальних Мереж',
                description: 'Розробив множинні Python боти для автоматичного постингу на Zora.co та інших соціальних мережах з AI генерацією контенту, плануванням та крос-платформною публікацією'
            },
            zoriumeco: {
                title: 'Екосистема ZORIUM (Legacy)',
                description: 'Створив повну Web3 платформу з кастомними токенами, механізмами стейкінгу та успішно роздав аірдроп 10,000+ холдерам. <a href="https://www.zorium.xyz/" target="_blank" style="color: var(--accent-color);">Переглянути платформу</a>'
            },
            aivideo: {
                title: 'AI Створення Відеоконтенту',
                description: 'Експерт у створенні складних відео з використанням AI інструментів, включаючи режисуру повністю AI-генерованих анімаційних фільмів та професійне відеовиробництво'
            },
            nftjudge: {
                title: 'Суддя NFT Design Awards',
                description: 'Офіційний суддя на <a href="https://nftdesignawards.io/judge/volodymyrdorosh" target="_blank" style="color: var(--accent-color);">NFT Design Awards</a>, оцінюю інноваційні NFT проекти та досконалість дизайну'
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
        footer: { copyright: '© 2026 VoloDev.eth - Blockchain розробник та Web3 інноватор. Готовий перетворити вашу візію на реальність.' }
    },
    de: {
        nav: { home: 'Start', about: 'Über mich', projects: 'Projekte', skills: 'Kenntnisse', contact: 'Kontakt' },
        hero: {
            title1: 'Full-Stack Blockchain',
            title2: '& KI-Entwickler',
            subtitle: 'Smart Contracts | DeFi | NFT-Marktplätze | KI-Trading-Bots | Shopify-Apps | E-Commerce | SaaS',
            location: '📍 Lwiw, Ukraine | 🌐 Weltweit verfügbar',
            description: 'Blockchain-Entwickler mit 10+ Jahren Erfahrung in der Entwicklung produktionsreifer Web3-Anwendungen. Spezialisierung auf <strong>Solidity-Smart-Contracts</strong>, <strong>NFT-Marktplätze</strong>, <strong>DeFi-Staking-Plattformen</strong>, <strong>KI-Trading-Bots</strong>, <strong>Shopify-Apps</strong>, <strong>SaaS-Plattformen</strong> und <strong>Full-Stack-E-Commerce</strong>-Lösungen. Experte in <strong>Next.js, React, Remix, TypeScript, Python, Django, Node.js, PHP, Symfony</strong> und KI-Tools (<strong>ChatGPT, Claude, Gemini, Midjourney, Sora, Runway</strong>).',
            viewProjects: 'Projekte ansehen',
            getInTouch: 'Kontakt aufnehmen',
            stats: { projects: 'Abgeschlossene Projekte', platforms: 'Aktive Plattformen', rate: 'Stundensatz', experience: 'Jahre Erfahrung' }
        },
        about: {
            title: 'Über mich',
            intro: 'Ich bin ein Full-Stack-Blockchain-Entwickler und Web3-Innovator mit 10+ Jahren Erfahrung und 20+ abgeschlossenen Projekten. Mein Fachwissen umfasst NFT-Marktplätze, KI-gestützte Trading-Bots, Shopify-App-Entwicklung, dezentrale Gaming-Plattformen, E-Commerce-Lösungen und Social-Media-Automatisierung. Ich spezialisiere mich auf Python-, Node.js- und PHP/Symfony-Entwicklung mit tiefer KI-Integration (ChatGPT, Claude, Claude Code, Gemini, Midjourney, Sora, Runway).',
            achievementsTitle: 'Wichtigste Erfolge & Fachkenntnisse',
            profileLocation: 'Blockchain-Entwickler aus Lwiw, Ukraine',
            profileTagline: 'Ideen in Web3-Realität verwandeln'
        },
        projects: { title: 'Ausgewählte Projekte' },
        skills: {
            title: 'Technische Kompetenz',
            cat: {
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
                ipfs: 'IPFS / Dezentraler Speicher'
            }
        },
        contact: {
            title: 'Lass uns etwas Großartiges bauen',
            subtitle: 'Bereit, Ihre Vision umzusetzen',
            description: 'Ob Sie eine NFT-Marktplatz-Entwicklung, dezentrale Gaming-Plattformen, KI-Trading-Bots, Shopify-App-Entwicklung, E-Commerce-Lösungen, Social-Media-Automatisierung oder individuelle Blockchain-Entwicklung benötigen – ich bringe tiefes technisches Fachwissen und bewährte Ergebnisse in jedes Projekt.',
            upwork: 'Upwork-Profil',
            upworkDesc: 'Mein professionelles Profil und Bewertungen ansehen',
            rate: 'Stundensatz',
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
            consultation: 'Technische Beratung', other: 'Sonstiges',
            budget: 'Budgetrahmen', selectBudget: 'Budgetrahmen auswählen',
            under1k: 'Unter $1.000', '1k5k': '$1.000 – $5.000', '5k10k': '$5.000 – $10.000',
            '10k25k': '$10.000 – $25.000', '25k50k': '$25.000 – $50.000', '50kplus': '$50.000+',
            message: 'Projektbeschreibung', messagePlaceholder: 'Erzählen Sie mir von Ihrem Projekt, dem Zeitplan und den spezifischen Anforderungen...',
            send: 'Nachricht senden'
        },
        achievements: {
            inkbot: {
                title: 'Shopify-App – InkBot (KI-Produktbeschreibungen)',
                description: 'Entwicklung einer KI-gestützten Shopify-App zur Generierung SEO-optimierter Produktbeschreibungen mit DeepSeek V3. Funktionen: Massengenerierung, Markenstimm-Analyse, SEO-Bewertung, 111+ Sprachen und Abonnementpläne. <a href="https://inkbot.app/" target="_blank" style="color: var(--accent-color);">InkBot besuchen</a>'
            },
            clothcast: {
                title: 'Shopify-App – ClothCast (KI-Virtuelle Anprobe)',
                description: 'Entwicklung einer KI-basierten Shopify-App für virtuelle Anproben mit FLUX.2-Bildgenerierung. Kunden laden ein Selfie hoch und sehen sich selbst im gewünschten Produkt. Funktionen: anpassbares Widget, Analyse-Dashboard und datenschutzfreundliche 24h-Datenspeicherung. <a href="https://cloth-cast.vercel.app/landing" target="_blank" style="color: var(--accent-color);">ClothCast besuchen</a>'
            },
            nifta: {
                title: 'NFT-Marktplatz – NiFTa (Base Network)',
                description: 'Entwicklung eines Full-Stack-NFT-Marktplatzes auf dem Base Network mit 4 Solidity-Smart-Contracts (Factory, ERC-1155, Marketplace, Events). Einzigartiger Erlösaufteilung (Ersteller 50% / Erster Minter 10% / Empfehlung 20%), 48h-Timer-Dringlichkeitsmechanik, UUPS-aktualisierbare Contracts und soziale Verifizierung via X/Farcaster OAuth. <a href="https://nifta-zeta.vercel.app/" target="_blank" style="color: var(--accent-color);">MVP ansehen</a>'
            },
            zorium: {
                title: 'NFT-Marktplatz-Entwicklung – ZORIUM.FUN',
                description: 'Entwicklung eines dezentralen NFT-Marktplatzes auf dem Zora Network mit Next.js, TypeScript, RainbowKit und Web3Modal. Funktionen: Trend-Analyse, Multi-Chain-Unterstützung und Erstellerwerkzeuge. <a href="https://www.zorium.fun/" target="_blank" style="color: var(--accent-color);">MVP ansehen</a>'
            },
            cryptoduel: {
                title: 'Dezentrale Gaming-Plattform – CryptoDuel',
                description: 'Entwicklung einer PvP-Krypto-Gaming-Plattform auf dem Base Network mit Solidity-Smart-Contracts, Farcaster-Integration, PostgreSQL und 4 Spielmodi (Duell 1v1, Battle Royale). Funktionen: nachweislich faire Zufallsgenerierung und Bestenlisten. <a href="https://www.cryptoduel.xyz/" target="_blank" style="color: var(--accent-color);">Jetzt spielen</a>'
            },
            fjordmekko: {
                title: 'E-Commerce-Plattform – Fjord & Mekko',
                description: 'Entwicklung eines professionellen Online-Shops für orthopädische Matratzen mit Next.js 16, React 19, Leaflet-Karten (20+ Filialstandorte), Resend-E-Mail-Integration und Framer-Motion-Animationen. <a href="https://www.fjord-mekko.com.ua/" target="_blank" style="color: var(--accent-color);">Shop besuchen</a>'
            },
            tradingbots: {
                title: 'KI-Trading-Bots (Python & Node.js)',
                description: 'Entwicklung ausgereifter Trading-Bots für Binance Futures mit GPT-3.5-turbo-Integration, technischen Indikatoren (RSI, MACD, Bollinger Bands), Multi-Timeframe-Analyse und 100x-Hebel-Scalping-Strategien'
            },
            lilurl: {
                title: 'SaaS-Plattform – lilURL',
                description: 'Entwicklung eines vollständigen URL-Kürzungsdienstes (Bit.ly-Alternative) mit Django 5.0, REST API, Klick-Analyse, QR-Code-Generierung, Abonnementplänen und Echtzeit-Dashboard. <a href="https://lilurl.vercel.app/" target="_blank" style="color: var(--accent-color);">lilURL besuchen</a>'
            },
            doshka: {
                title: 'REST-API-Backend – Doshka (Kanban-Board)',
                description: 'Entwicklung einer vollständigen Trello-ähnlichen REST-API mit Symfony 7.2, JWT-Authentifizierung, rollenbasierter Zugriffskontrolle via Symfony Voters (owner/admin/member), asynchronen E-Mail-Benachrichtigungen via Redis-Queue + Symfony Messenger und täglichen Deadline-Erinnerungen via Symfony Scheduler. Vollständige Docker-Compose-Umgebung mit PostgreSQL 16 und OpenAPI/Swagger-Dokumentation. <a href="https://github.com/volodeveth/doshka-backend" target="_blank" style="color: var(--accent-color);">Auf GitHub ansehen</a>'
            },
            socialbots: {
                title: 'Social-Media-Automatisierungsbots',
                description: 'Entwicklung mehrerer Python-Bots für automatisiertes Posting auf Zora.co und anderen sozialen Netzwerken mit KI-Inhaltsgenerierung, Planung und plattformübergreifender Veröffentlichung'
            },
            zoriumeco: {
                title: 'ZORIUM-Ökosystem (Legacy)',
                description: 'Entwicklung einer vollständigen Web3-Plattform mit eigenen Tokens, Staking-Mechanismen und erfolgreichem Airdrop an 10.000+ Inhaber. <a href="https://www.zorium.xyz/" target="_blank" style="color: var(--accent-color);">Plattform besuchen</a>'
            },
            aivideo: {
                title: 'KI-Videocontent-Erstellung',
                description: 'Experte in der Erstellung komplexer Videos mit KI-Tools, einschließlich der Regie vollständig KI-generierter Animationsfilme und professioneller Videoproduktion'
            },
            nftjudge: {
                title: 'NFT Design Awards – Juror',
                description: 'Offizieller Juror bei den <a href="https://nftdesignawards.io/judge/volodymyrdorosh" target="_blank" style="color: var(--accent-color);">NFT Design Awards</a>, Bewertung innovativer NFT-Projekte und gestalterischer Exzellenz'
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
        footer: { copyright: '© 2026 VoloDev.eth – Blockchain-Entwickler & Web3-Innovator. Bereit, Ihre Vision in die Realität umzusetzen.' }
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
    if (savedLang !== 'en') applyTranslations(savedLang);

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

// Timeline Banner: auto-restart loop via SVG clone
(function () {
    var banner = document.querySelector('.tl-banner');
    if (!banner) return;
    var svg = banner.querySelector('.tl-svg');
    if (!svg) return;

    var ANIM_MS = 5000; // all nodes appear by ~4s, give buffer
    var HOLD_MS = 2000;
    var FADE_MS = 500;

    function runCycle() {
        setTimeout(function () {
            svg.style.transition = 'opacity ' + FADE_MS + 'ms ease';
            svg.style.opacity = '0';

            setTimeout(function () {
                var fresh = svg.cloneNode(true);
                fresh.removeAttribute('style');
                svg.parentNode.replaceChild(fresh, svg);
                svg = fresh;

                svg.style.opacity = '0';
                requestAnimationFrame(function () {
                    svg.style.transition = 'opacity ' + FADE_MS + 'ms ease';
                    svg.style.opacity = '1';
                    setTimeout(function () {
                        svg.style.transition = '';
                        svg.style.opacity = '';
                        runCycle();
                    }, FADE_MS);
                });
            }, FADE_MS + 100);
        }, ANIM_MS + HOLD_MS);
    }

    runCycle();
}());

// Walk Banner: auto-restart loop via SVG clone (guaranteed animation reset)
(function () {
    var banner = document.querySelector('.walk-banner');
    if (!banner) return;
    var svg = banner.querySelector('.walk-svg');
    if (!svg) return;

    var ANIM_MS = 10000; // hero walk animation duration
    var HOLD_MS = 2000;  // hold final state before restart
    var FADE_MS = 500;   // fade transition duration

    function runCycle() {
        setTimeout(function () {
            // Fade out
            svg.style.transition = 'opacity ' + FADE_MS + 'ms ease';
            svg.style.opacity = '0';

            setTimeout(function () {
                // Deep-clone the SVG — guarantees 100% animation state reset
                var fresh = svg.cloneNode(true);
                fresh.removeAttribute('style'); // clear any leftover inline styles
                svg.parentNode.replaceChild(fresh, svg);
                svg = fresh;

                // Start invisible, then fade in
                svg.style.opacity = '0';
                requestAnimationFrame(function () {
                    svg.style.transition = 'opacity ' + FADE_MS + 'ms ease';
                    svg.style.opacity = '1';
                    setTimeout(function () {
                        svg.style.transition = '';
                        svg.style.opacity = '';
                        runCycle(); // schedule next cycle
                    }, FADE_MS);
                });
            }, FADE_MS + 100);
        }, ANIM_MS + HOLD_MS);
    }

    runCycle();
}());

// Terminal Banner: auto-restart loop via SVG clone (guaranteed animation reset)
(function () {
    var banner = document.querySelector('.term-banner');
    if (!banner) return;
    var svg = banner.querySelector('.term-svg');
    if (!svg) return;

    var ANIM_MS = 9500; // last text reveal ends ~8.8s, give slight buffer
    var HOLD_MS = 2000;  // hold final state before restart
    var FADE_MS = 500;   // fade transition duration

    function runCycle() {
        setTimeout(function () {
            svg.style.transition = 'opacity ' + FADE_MS + 'ms ease';
            svg.style.opacity = '0';

            setTimeout(function () {
                var fresh = svg.cloneNode(true);
                fresh.removeAttribute('style');
                svg.parentNode.replaceChild(fresh, svg);
                svg = fresh;

                svg.style.opacity = '0';
                requestAnimationFrame(function () {
                    svg.style.transition = 'opacity ' + FADE_MS + 'ms ease';
                    svg.style.opacity = '1';
                    setTimeout(function () {
                        svg.style.transition = '';
                        svg.style.opacity = '';
                        runCycle();
                    }, FADE_MS);
                });
            }, FADE_MS + 100);
        }, ANIM_MS + HOLD_MS);
    }

    runCycle();
}());

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