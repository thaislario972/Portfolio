// data/projects.ts
export type TagKey = 'vitrine' | 'ecommerce' | 'maquette' | 'wordpress' | 'ux-ui'

export type Project = {
    id: string
    slug: string
    title: string
    desc: string
    imgCard: string
    tags: TagKey[]
    company: string
    year: string
    duration: string
    role: string
    heroImg: string

    challengeTitle: string
    challengeText: string
    solutionTitle: string
    solutionText: string

    resultsTitle?: string
    results: string[]

    galleryTitle?: string
    gallery: { src: string; alt: string; class?: string }[]
}

export const projects: Project[] = [
    {
        id: 'versus',
        slug: 'versus',
        title: "Versus Racing - Site vitrine",
        desc:
            "Maquettes, prototypage et intégration d’un site vitrine sous WordPress pour présenter la marque et sa gamme de suspensions, avec une attention portée à la structuration des contenus, à la clarté du parcours utilisateur et à la cohérence graphique sur l’ensemble des supports.",
        imgCard: "/img/Versus/versus-racing.png",
        tags: ['vitrine', 'wordpress'],

        company: "DriftShop",
        year: "2025",
        duration: "1 mois",
        role: "Conception UX/UI & intégration WordPress",

        heroImg: "/img/Versus/versus-visu.png",

        challengeTitle: "Le Défi",
        challengeText:
            "Créer la première présence en ligne d’une marque nouvellement lancée, sans historique ni visibilité, afin de permettre aux utilisateurs de trouver des informations fiables en recherchant simplement le nom de Versus Racing.",

        solutionTitle: "La Solution",
        solutionText:
            "Conception et intégration d’un site vitrine clair et structuré sous WordPress, présentant la marque et ses produits, et servant de point d’entrée principal pour établir sa visibilité et sa crédibilité en ligne.",

        resultsTitle: "Résultats",
        results: [
            "Mise en place d’une première présence en ligne claire et structurée",
            "Présentation cohérente de la marque et de ses produits",
            "Parcours utilisateur pensé pour une prise en main rapide",
        ],

        galleryTitle: "Galerie",
        gallery: [
            { src: "/img/Versus/versus-visu-2.png", alt: "Versus visuel 2", class: "col-span-1 border border-white/60 rounded-2xl w-[100%]" },
            { src: "/img/Versus/versus-visu-4.png", alt: "Versus visuel 4", class: "col-start-2 row-span-2 h-full border border-white/60 rounded-2xl justify-self-end" },
            { src: "/img/Versus/versus-visu-3.png", alt: "Versus visuel 3", class: "col-start-1 border border-white/60 rounded-2xl self-end w-[100%]" },
        ],
    },
    {
        id: 'bps',
        slug: 'bps-racing',
        title: "BPS Racing — refonte de site e-commerce",
        desc: "Refonte d’un site e-commerce pour moderniser l’interface, simplifier le parcours utilisateur, avec un tunnel de commande optimisé.",
        imgCard: "/img/BPS/bps-racing.png",
        tags: ['ecommerce', 'maquette', 'ux-ui'],

        company: "DriftShop/BPS Racing",
        year: "2025/2026",
        duration: "1 an et 6 mois",
        role: "Conception UX/UI & intégration front-end",

        heroImg: "/img/BPS/bp-accueil.png",

        challengeTitle: "Le Défi",
        challengeText:
            "Le site BPS Racing était devenu vieillissant et ne reflétait plus la nouvelle charte graphique de la marque.\n " +
            "Son interface manquait de modernité et de cohérence visuelle. La responsive était partiellement absente, certains composants étaient trop chargés et peu lisibles, et le tunnel de commande comportait des étapes inutiles.\n  " +
            "L’objectif était de moderniser l’identité du site tout en simplifiant l’expérience d’achat.",

        solutionTitle: "La Solution",
        solutionText:
            "J’ai conçu des maquettes plus modernes et épurées, en repensant l’ensemble des composants pour les rendre plus clairs et plus simples à utiliser.\n " +
            "La version mobile a été retravaillée afin d’assurer une expérience cohérente sur tous les supports, et le tunnel de commande a été optimisé pour limiter les frictions. \n " +
            " Le site conserve son identité tout en proposant une interface plus fluide, plus accessible et plus attractive.",

        resultsTitle: "Résultats",
        results: [
            "Le site présente désormais une identité visuelle cohérente et alignée avec la nouvelle charte graphique de la marque.",
            "Le tunnel de commande et le parcours utilisateur ont été simplifiés afin de rendre l’expérience d’achat plus fluide et plus intuitive.",
            "L’interface, plus épurée et structurée, offre un rendu visuel plus attractif et améliore la lisibilité globale du site.",
        ],

        galleryTitle: "Galerie",
        gallery: [
            { src: "/img/BPS/bps-img1.png", alt: "BPS visuel 2", class: "col-span-1 border border-white/60 rounded-2xl h-[100%] object-contain" },
            { src: "/img/BPS/bps-img3.png", alt: "BPS visuel 4", class: "col-start-2 row-span-2 h-[100%] border border-white/60 rounded-2xl justify-self-end" },
            { src: "/img/BPS/bps-img2.png", alt: "BPS visuel 3", class: "col-start-1 border border-white/60 rounded-2xl self-end h-[100%] object-contain" },
        ],
    },
    {
        id: 'driftcup',
        slug: 'driftcup',
        title: "DriftCup — site événementiel",
        desc: "Refonte d’un site événementiel pour moderniser l’interface, améliorer l’ergonomie et structurer la présentation de l’événement.",
        imgCard: "/img/driftcup/DriftCup.png",
        tags: ['wordpress', 'maquette', 'ux-ui'],

        company: "DriftShop",
        year: "2025/2026",
        duration: "1 an",
        role: "Conception UX/UI & intégration WordPress",

        heroImg: "/img/driftcup/driftcup-visu1.png",

        challengeTitle: "Le Défi",
        challengeText:
            "Le site de DriftCup, dédié à un événement de drift, datait des années 2000 et était devenu vieillissant, autant sur le plan visuel que dans sa structure.\n " +
            "Il fallait lui redonner une apparence plus actuelle, tout en optimisant les pages, la présentation des informations et les contenus.\n  " +
            "Un point important concernait aussi les formulaires d’inscription, qui devaient être clarifiés et simplifiés pour faciliter l’accès à l’événement.",

        solutionTitle: "La Solution",
        solutionText:
            "Réalisation d'une refonte moderne de l’interface afin d’améliorer la lisibilité, la cohérence graphique et l’expérience globale.\n " +
            "Le projet a également inclus la création de nouvelles pages, notamment une galerie et une section dédiée aux éditions précédentes, pour donner du contexte et renforcer la valeur du site. \n " +
            " Enfin, l’architecture a été réorganisée afin de structurer les pages et leurs contenus de manière plus logique, et de rendre la navigation plus fluide.",

        resultsTitle: "Résultats",
        results: [
            "Le site bénéficie désormais d’une interface modernisée, plus cohérente et mieux adaptée aux standards actuels du web.",
            "L’architecture et les contenus ont été restructurés pour offrir une navigation plus claire et une meilleure compréhension de l’événement.",
            "Les formulaires d’inscription ont été optimisés afin de simplifier les démarches et d’améliorer l’expérience des participants.",
        ],

        galleryTitle: "Galerie",
        gallery: [
            { src: "/img/driftcup/driftcup-visu2.png", alt: "driftcup visuel 2", class: "col-span-1 border border-white/60 rounded-2xl h-[100%] object-contain" },
            { src: "/img/driftcup/driftcup-visu-4.png", alt: "driftcup visuel 4", class: "col-start-2 row-span-2 h-[100%] border border-white/60 rounded-2xl justify-self-end" },
            { src: "/img/driftcup/driftcup-visu3.png", alt: "driftcup visuel 3", class: "col-start-1 border border-white/60 rounded-2xl self-end h-[100%] object-contain" },
        ],
    },
    {
        id: 'd2',
        slug: 'd2-racing',
        title: "D2 Racing EU — site vitrine",
        desc: "Maquettes, prototypage et intégration d’un site vitrine présentant la marque D2 Racing et sa gamme de suspensions.",
        imgCard: "/img/d2racing/d2-racing.png",
        tags: ['wordpress', 'maquette', 'ux-ui', 'vitrine'],

        company: "DriftShop",
        year: "2025",
        duration: "2 mois",
        role: "Conception UX/UI & intégration WordPress",

        heroImg: "/img/d2racing/d2-visu1.png",

        challengeTitle: "Le Défi",
        challengeText:
            "Le site D2 Racing Europe existait depuis 2012 et n’avait quasiment pas évolué depuis sa mise en ligne. Il était resté figé dans le temps, tant sur le plan technique que visuel.\n " +
            "Son apparence datée et son manque de mise à jour impactaient la perception de fiabilité et de sécurité du site.\n  " +
            "L’objectif était de le remettre au goût du jour, de moderniser son interface et d’intégrer correctement les codes couleurs de la marque ainsi que la présentation de ses produits.",

        solutionTitle: "La Solution",
        solutionText:
            "Conception d'une refonte visuelle et structurelle du site afin de moderniser son image et d’améliorer la confiance perçue.\n " +
            "Le projet a également inclus la création de nouvelles pages, notamment une galerie et une section dédiée aux éditions précédentes, pour donner du contexte et renforcer la valeur du site. \n " +
            " L’interface a été simplifiée afin de proposer une navigation plus fluide et une lecture plus intuitive des informations.",

        resultsTitle: "Résultats",
        results: [
            "Le site bénéficie désormais d’une interface modernisée, renforçant la crédibilité et la confiance envers la marque.",
            "Les codes couleurs et l’identité visuelle de D2 Racing sont intégrés de manière cohérente et homogène sur l’ensemble des pages.",
            "La présentation des produits a été clarifiée afin d’améliorer la lisibilité et de faciliter la compréhension de l’offre.",
        ],

        galleryTitle: "Galerie",
        gallery: [
            { src: "/img/d2racing/d2-visu2.png", alt: "D2 racing visuel 2", class: "col-span-1 border border-white/60 rounded-2xl h-[100%] object-contain" },
            { src: "/img/d2racing/d2-visu4.png", alt: "D2 racing visuel 4", class: "col-start-2 row-span-2 h-[100%] border border-white/60 rounded-2xl justify-self-end" },
            { src: "/img/d2racing/d2-visu3.png", alt: "D2 racing visuel 3", class: "col-start-1 border border-white/60 rounded-2xl self-end h-[100%] object-contain" },
        ],
    },
    {
        id: 'cmw',
        slug: 'car-modify-wonder',
        title: "Car Modify Wonder EU — site vitrine",
        desc: "Maquettes, prototypage et intégration d’un site vitrine présentant la marque et sa gamme de kits carrosserie.",
        imgCard: "/img/cmw/CMW.jpg",
        tags: ['wordpress', 'maquette', 'ux-ui', 'vitrine'],

        company: "DriftShop",
        year: "2025",
        duration: "1 mois",
        role: "Conception UX/UI & intégration WordPress",

        heroImg: "/img/cmw/cmw-visu1.png",

        challengeTitle: "Le Défi",
        challengeText:
            "Après l’obtention des droits pour représenter Car Modify Wonder en Europe, DriftShop devait mettre en place un site vitrine dédié afin de présenter la marque et ses produits.\n " +
            "Le principal enjeu résidait dans le manque de ressources disponibles : peu de visuels, peu d’informations détaillées et peu de contenu exploitable.\n \n " +
            "L’objectif était donc de concevoir un site cohérent et crédible, capable de valoriser la marque malgré ces contraintes.",

        solutionTitle: "La Solution",
        solutionText:
            "Conception d'un site vitrine structuré et visuellement cohérent, en optimisant les ressources disponibles.\n " +
            "Le travail a consisté à valoriser les visuels existants, à organiser clairement les informations fournies et à structurer les pages de manière simple et efficace. \n\n " +
            " L’interface a été pensée pour mettre en avant l’identité de la marque à travers une hiérarchisation soignée des contenus et une mise en page équilibrée, compensant le manque de matière initiale par une présentation claire et maîtrisée.",

        resultsTitle: "Résultats",
        results: [
            "Mise en place d’un site vitrine structuré permettant d’installer la présence digitale de Car Modify Wonder en Europe.",
            "Valorisation efficace des ressources disponibles grâce à une hiérarchisation claire et une mise en page maîtrisée.",
            "Présentation cohérente de la marque renforçant sa crédibilité malgré un volume initial de contenu limité.",
        ],

        galleryTitle: "Galerie",
        gallery: [
            { src: "/img/cmw/cmw-visu2.png", alt: "D2 racing visuel 2", class: "col-span-1 border border-white/60 rounded-2xl h-[100%] object-contain" },
            { src: "/img/cmw/cmw-visu4.png", alt: "D2 racing visuel 4", class: "col-start-2 row-span-2 h-[100%] border border-white/60 rounded-2xl justify-self-end" },
            { src: "/img/cmw/cmw-visu3.png", alt: "D2 racing visuel 3", class: "col-start-1 border border-white/60 rounded-2xl self-end h-[100%] object-contain" },
        ],
    },
    {
        id: 'origine',
        slug: 'origin-labo',
        title: "Origine Labo EU — site vitrine",
        desc: "Maquettes, prototypage et intégration d’un site vitrine présentant la marque Origine Labo et sa gamme de kits carrosserie.",
        imgCard: "/img/originlabo/origin-labo.png",
        tags: ['wordpress', 'maquette', 'ux-ui', 'vitrine'],

        company: "DriftShop",
        year: "2025",
        duration: "1 mois",
        role: "Conception UX/UI & intégration WordPress",

        heroImg: "/img/originlabo/origin-visu1.png",

        challengeTitle: "Le Défi",
        challengeText:
            "Après l’obtention des droits pour représenter Car Modify Wonder en Europe, DriftShop devait mettre en place un site vitrine dédié afin de présenter la marque et ses produits.\n " +
            "Le principal enjeu résidait dans le manque de ressources disponibles : peu de visuels, peu d’informations détaillées et peu de contenu exploitable.\n \n " +
            "L’objectif était donc de concevoir un site cohérent et crédible, capable de valoriser la marque malgré ces contraintes.",

        solutionTitle: "La Solution",
        solutionText:
            "Conception d'un site vitrine structuré et visuellement cohérent, en optimisant les ressources disponibles.\n " +
            "Le travail a consisté à valoriser les visuels existants, à organiser clairement les informations fournies et à structurer les pages de manière simple et efficace. \n\n " +
            " L’interface a été pensée pour mettre en avant l’identité de la marque à travers une hiérarchisation soignée des contenus et une mise en page équilibrée, compensant le manque de matière initiale par une présentation claire et maîtrisée.",

        resultsTitle: "Résultats",
        results: [
            "Mise en place d’un site vitrine structuré permettant d’installer la présence digitale de Car Modify Wonder en Europe.",
            "Valorisation efficace des ressources disponibles grâce à une hiérarchisation claire et une mise en page maîtrisée.",
            "Présentation cohérente de la marque renforçant sa crédibilité malgré un volume initial de contenu limité.",
        ],

        galleryTitle: "Galerie",
        gallery: [
            { src: "/img/originlabo/origin-visu2.png", alt: "D2 racing visuel 2", class: "col-span-1 border border-white/60 rounded-2xl h-[100%] object-contain" },
            { src: "/img/originlabo/origin-visu4.png", alt: "D2 racing visuel 4", class: "col-start-2 row-span-2 h-[100%] border border-white/60 rounded-2xl justify-self-end" },
            { src: "/img/originlabo/origin-visu3.png", alt: "D2 racing visuel 3", class: "col-start-1 border border-white/60 rounded-2xl self-end h-[100%] object-contain" },
        ],
    },
]
