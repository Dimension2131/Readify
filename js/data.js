const booksData = [
    {
        id: 1,
        title: "Swordmaster's Youngest Son",
        author: "Emperor Penguin",
        genres: ["action", "fantasy", "reincarnation"],
        pages: 197,
        rating: 4.8,
        color: "#8B4513",
        image: "./assets/images/1.png",
        synopsis: "Jin Runcandel was the youngest son of Runcandel, the land's most prestigious swordsman family... And the biggest failure in Runcandel history.He, who was kicked out miserably and came to a meaningless end, was given another chance.'How do you want to use this power?' 'I want to use it for myself.'Memories of his past life, overwhelming talent, and a contract with God... The preparations to become the greatest are complete.",
        series: [],
        reviews: [
            { source: "Goodreads", rating: 5, comment: "A timeless classic that started it all." },
            { source: "NY Times", rating: 4, comment: "Whimsical and adventurous." },
            { source: "Readers' Choice", rating: 5, comment: "Perfect fantasy adventure." }
        ],
        tags: ["adventure", "action", "dragons", "magic"]
    },
    {
        id: 2,
        title: "Solo Leveling",
        author: "Chugong",
        genres: ["action", "fantasy", "dungeon", "power fantasy"],
        pages: 200,
        rating: 4.9,
        color: "#2F4F4F",
        image: "../assets/images/2.png",
        synopsis: "In a world where hunters fight monsters emerging from gates, Sung Jin-Woo is known as the weakest E-rank hunter. After a near-death experience in a double dungeon, he gains the unique ability to level up endlessly. From weakest to strongest, Jin-Woo’s solo grind begins.",
        series: [],
        reviews: [
            { source: "Fans", rating: 5, comment: "Pure hype from start to finish." },
            { source: "Webtoon Readers", rating: 5, comment: "Drip, shadows, and dominance." }
        ],
        tags: ["hunters", "dungeons", "overpowered", "leveling"]
    },
    {
        id: 3,
        title: "Omniscient Reader's Viewpoint",
        author: "Sing Shong",
        genres: ["action", "fantasy", "apocalypse", "meta"],
        pages: 220,
        rating: 4.9,
        color: "#483D8B",
        image: "../assets/images/3.png",
        synopsis: "Kim Dokja is the sole reader of a web novel that suddenly becomes reality. Armed with his knowledge of future events, he struggles to survive a collapsing world ruled by constellations, scenarios, and stories themselves.",
        series: [],
        reviews: [
            { source: "Light Novel Fans", rating: 5, comment: "Big brain storytelling." },
            { source: "Readers", rating: 5, comment: "Every arc hurts in the best way." }
        ],
        tags: ["constellations", "apocalypse", "strategy", "storytelling"]
    },
    {
        id: 4,
        title: "Solo Max-Level Newbie",
        author: "Maslow",
        genres: ["action", "adventure", "tower"],
        pages: 244,
        rating: 4.7,
        color: "#4682B4",
        image: "../assets/images/4.png",
        synopsis: "Jinhyuk, a gaming Nutuber, was the only person who saw the ending of the game [Tower of Trials]. However, when the game's popularity declined, it became difficult for him to continue making a living as a gaming Nutuber. Since he already saw the ending of the game, he was about to quit playing. But that day, [Tower of Trials] became reality, and Jinhyuk, who knew about every single thing in the game, took over everything faster than anyone possibly could! 'I'll show you what a true pro is like.'",
        series: [],
        reviews: [
            { source: "Webtoon", rating: 5, comment: "Insanely deep world-building." },
            { source: "Critics", rating: 4, comment: "Slow burn but worth it." }
        ],
        tags: ["tower", "action", "fantasy", "world-building"]
    },
    {
        id: 5,
        title: "Legend of the Northern Blade",
        author: "Woo-Gak",
        genres: ["martial arts", "action", "revenge"],
        pages: 180,
        rating: 4.8,
        color: "#800000",
        image: "../assets/images/5.png",
        synopsis: "After his father is branded a traitor and killed, Jin Mu-Won survives in isolation, mastering forbidden martial arts. When the world that destroyed his family resurfaces, he steps out of the shadows for revenge.",
        series: [],
        reviews: [
            { source: "Martial Arts Fans", rating: 5, comment: "Cold, brutal, and beautiful." },
            { source: "Readers", rating: 5, comment: "Every punch feels heavy." }
        ],
        tags: ["murim", "revenge", "martial arts"]
    },
    {
        id: 6,
        title: "The Beginning After the End",
        author: "TurtleMe",
        genres: ["fantasy", "reincarnation", "magic"],
        pages: 210,
        rating: 4.6,
        color: "#556B2F",
        image: "../assets/images/6.png",
        synopsis: "King Grey is reincarnated as Arthur Leywin in a world of magic and monsters. Retaining memories of his past life, he seeks to live differently—while inevitably being dragged into war and destiny.",
        series: [],
        reviews: [
            { source: "Fans", rating: 5, comment: "Reincarnation done right." },
            { source: "Readers", rating: 4, comment: "Starts wholesome, gets dark fast." }
        ],
        tags: ["magic", "reincarnation", "growth"]
    },
    {
        id: 7,
        title: "Return of the Mount Hua Sect",
        author: "Biga",
        genres: ["martial arts", "comedy", "action"],
        pages: 170,
        rating: 4.8,
        color: "#A0522D",
        image: "../assets/images/7.png",
        synopsis: "The Plum Blossom Sword Saint reincarnates centuries later, finding Mount Hua Sect in ruins. With overwhelming skill and zero chill, he sets out to restore its former glory.",
        series: [],
        reviews: [
            { source: "Murim Fans", rating: 5, comment: "Unhinged and hilarious." },
            { source: "Readers", rating: 5, comment: "Violence with personality." }
        ],
        tags: ["murim", "reincarnation", "comedy"]
    },
    {
        id: 8,
        title: "Survival Story of a Sword King in a Fantasy World",
        author: "Kwon Soon-Kyu",
        genres: ["fantasy", "action", "isekai"],
        pages: 190,
        rating: 4.7,
        color: "#708090",
        image: "../assets/images/8.png",
        synopsis: "Han-Bin is trapped in a fantasy world with a broken leveling system, forcing him to train endlessly. When he finally escapes, he’s absurdly strong—but socially clueless.",
        series: [],
        reviews: [
            { source: "Readers", rating: 5, comment: "Comedy meets raw power." },
            { source: "Fans", rating: 4, comment: "Muscles solve everything." }
        ],
        tags: ["isekai", "overpowered", "training"]
    },
    {
        id: 9,
        title: "Nano Machine",
        author: "Han-Joong-Wueol-Ya",
        genres: ["martial arts", "sci-fi", "revenge"],
        pages: 180,
        rating: 4.8,
        color: "#2E8B57",
        image: "../assets/images/9.png",
        synopsis: "Cheon Yeo-Woon receives nanotechnology from a future descendant, drastically changing his fate within the demonic cult as he rises through blood and steel.",
        series: [],
        reviews: [
            { source: "Fans", rating: 5, comment: "Murim but futuristic." },
            { source: "Readers", rating: 5, comment: "Nano hard-carries." }
        ],
        tags: ["murim", "technology", "cult"]
    },
    {
        id: 10,
        title: "The World After the Fall",
        author: "Sing Shong",
        genres: ["fantasy", "philosophical", "action"],
        pages: 160,
        rating: 4.5,
        color: "#191970",
        image: "../assets/images/10.png",
        synopsis: "After the Tower’s collapse, Jaehwan refuses to regress and instead walks his own path through worlds beyond the system, questioning gods and fate itself.",
        series: [],
        reviews: [
            { source: "Readers", rating: 4, comment: "Existential pain included." },
            { source: "Fans", rating: 5, comment: "Different but memorable." }
        ],
        tags: ["tower", "philosophy", "independence"]
    },
    {
        id: 11,
        title: "Mercenary Enrollment",
        author: "YC",
        genres: ["action", "drama", "school"],
        pages: 170,
        rating: 4.7,
        color: "#2B2B2B",
        image: "../assets/images/11.png",
        synopsis: "After surviving as a child mercenary, Ijin Yoo returns to civilian life and enrolls in high school, using his lethal skills to protect the family he was separated from for years.",
        series: [],
        reviews: [
            { source: "Readers", rating: 5, comment: "Clean action and strong emotions." },
            { source: "Fans", rating: 4, comment: "Modern setting done right." }
        ],
        tags: ["mercenary", "family", "school"]
    },
    {
        id: 12,
        title: "The Boxer",
        author: "JH",
        genres: ["sports", "psychological", "drama"],
        pages: 150,
        rating: 4.8,
        color: "#8B0000",
        image: "../assets/images/12.png",
        synopsis: "A genius boxer with empty emotions enters the brutal world of professional boxing, revealing the trauma and humanity behind every punch.",
        series: [],
        reviews: [
            { source: "Critics", rating: 5, comment: "Emotionally devastating." },
            { source: "Readers", rating: 5, comment: "More than just a sports story." }
        ],
        tags: ["boxing", "trauma", "character-study"]
    },
    {
        id: 13,
        title: "Doom Breaker",
        author: "Cheongdam",
        genres: ["fantasy", "action", "regression"],
        pages: 170,
        rating: 4.7,
        color: "#4B0082",
        image: "../assets/images/13.png",
        synopsis: "After humanity’s destruction, the strongest warrior regresses to the past, determined to kill the gods and change the fate of the world.",
        series: [],
        reviews: [
            { source: "Readers", rating: 5, comment: "Pure hype every chapter." },
            { source: "Fans", rating: 4, comment: "Dark but empowering." }
        ],
        tags: ["regression", "gods", "apocalypse"]
    },
    {
        id: 14,
        title: "SSS-Class Suicide Hunter",
        author: "Shin Noah",
        genres: ["fantasy", "action", "psychological"],
        pages: 165,
        rating: 4.9,
        color: "#483D8B",
        image: "../assets/images/14.png",
        synopsis: "A hunter gains a broken SSS-class skill that activates only upon death, forcing him to die repeatedly to climb the Tower and understand others’ pain.",
        series: [],
        reviews: [
            { source: "Readers", rating: 5, comment: "Way deeper than expected." },
            { source: "Fans", rating: 5, comment: "Pain, growth, perfection." }
        ],
        tags: ["tower", "death", "empathy"]
    },
    {
        id: 15,
        title: "The Great Mage Returns After 4000 Years",
        author: "Barnacle",
        genres: ["fantasy", "action", "reincarnation"],
        pages: 175,
        rating: 4.5,
        color: "#1E90FF",
        image: "../assets/images/15.png",
        synopsis: "A legendary mage reincarnates 4000 years later into a weak body and begins reclaiming his power to challenge demigods and rulers alike.",
        series: [],
        reviews: [
            { source: "Readers", rating: 4, comment: "Classic power fantasy." },
            { source: "Fans", rating: 5, comment: "Satisfying comeback story." }
        ],
        tags: ["reincarnation", "magic", "overpowered"]
    },
    {
        id: 16,
        title: "Pick Me Up! Infinite Gacha",
        author: "Hermod",
        genres: ["fantasy", "strategy", "survival"],
        pages: 160,
        rating: 4.4,
        color: "#556B2F",
        image: "../assets/images/16.png",
        synopsis: "A top-tier gamer is trapped inside a brutal gacha game as a low-rank hero and must lead disposable characters to survival and victory.",
        series: [],
        reviews: [
            { source: "Readers", rating: 4, comment: "High tension strategy." },
            { source: "Fans", rating: 5, comment: "Unique and ruthless." }
        ],
        tags: ["gacha", "strategy", "survival"]
    },
    {
        id: 17,
        title: "Revenge of the Baskerville Bloodhound",
        author: "Aro",
        genres: ["fantasy", "revenge", "regression"],
        pages: 170,
        rating: 4.6,
        color: "#800000",
        image: "../assets/images/17.png",
        synopsis: "Betrayed by the family he served, a loyal hound regresses in time and plots calculated revenge against a noble house of monsters.",
        series: [],
        reviews: [
            { source: "Readers", rating: 5, comment: "Cold and calculated." },
            { source: "Fans", rating: 4, comment: "Satisfying revenge arc." }
        ],
        tags: ["revenge", "nobility", "regression"]
    },
    {
        id: 18,
        title: "Return of the Crazy Demon",
        author: "Yoo Jin Sung",
        genres: ["martial-arts", "fantasy", "comedy"],
        pages: 165,
        rating: 4.8,
        color: "#6A0DAD",
        image: "../assets/images/18.png",
        synopsis: "A mad martial artist dies chasing the Heavenly Demon and regresses to his youth, deciding to live even more crazily while dominating the martial world.",
        series: [],
        reviews: [
            { source: "Readers", rating: 5, comment: "Unhinged and hilarious." },
            { source: "Fans", rating: 5, comment: "Chaos done perfectly." }
        ],
        tags: ["murim", "regression", "madness"]
    },
    {
        id: 19,
        title: "Overgeared",
        author: "Park Saenal",
        genres: ["fantasy", "game", "action"],
        pages: 190,
        rating: 4.6,
        color: "#B8860B",
        image: "../assets/images/19.png",
        synopsis: "A struggling gamer acquires a legendary class in a virtual world and slowly grows from selfishness into a true powerhouse.",
        series: [],
        reviews: [
            { source: "Readers", rating: 4, comment: "Slow but rewarding growth." },
            { source: "Fans", rating: 5, comment: "Legendary item fantasy." }
        ],
        tags: ["VRMMO", "crafting", "growth"]
    },
    {
        id: 20,
        title: "The Greatest Estate Developer",
        author: "BK_Moon",
        genres: ["fantasy", "comedy", "isekai"],
        pages: 155,
        rating: 4.9,
        color: "#4682B4",
        image: "../assets/images/20.png",
        synopsis: "An engineer reincarnates into a fantasy world and uses modern civil engineering and shameless tactics to build the greatest estate imaginable.",
        series: [],
        reviews: [
            { source: "Readers", rating: 5, comment: "Hilarious and clever." },
            { source: "Fans", rating: 5, comment: "Peak comedy isekai." }
        ],
        tags: ["isekai", "engineering", "comedy"]
    }
        

];
