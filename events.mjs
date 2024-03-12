const events = [
    {
        name: "Apti-King",
        type: "Technical",
        description:
            "Apti-King is a challenging aptitude competition designed to test your logical and analytical skills. Do you have what it takes to be the Apti-King? Register now and compete for exciting prizes!",
        rounds: [
            {
                name: "Round 1: Online (on lab PCs)",
                description: "Top students from round 1 will advance to round 2",
                isTimeBound: true,
            },
            {
                name: "Round 2: Offline (Pen and Paper)",
                description: "Pen and paper round for finalists",
                isTimeBound: true,
            },
        ],
        entryFee: "60 Rs",
        srcImage: "https://wallpapercave.com/wp/wp8366401.jpg",
        coordinators: [
            {
                name: "Hemant Shashikant Yadav",
                phone: "9135917111",
            },
            {
                name: "Paras Sanjay Patil",
                phone: "9359307421",
            },
        ],
    },
    {
        name: "Idea Presentation",
        type: "Technical",
        description:
            "Got a groundbreaking idea? Share it with us in the Idea Presentation event! Present your innovative concept in a PPT format and impress our judges. Solo and duo entries are welcome.",
        presentationTime: {
            presentation: "7-8 minutes",
            qna: "3-4 minutes",
        },
        entryFee: "Solo: 60 Rs, Duo: 100 Rs",
        coordinators: [
            {
                name: "Jagannath Suryawanshi",
                phone: "9881788259",
            },
            {
                name: "Sarvadnya Mense",
                phone: "7038500614",
            },
        ],
    },
    {
        name: "Web Master",
        type: "Technical",
        description:
            "Are you a coding wizard? Join Web Master and showcase your frontend development skills. You'll be given a topic on the spot, and you have 2 hours to create a stunning website. Entry fee is only Rs. 60.",
        topicGivenOnSpot: true,
        timeLimit: "2 hrs",
        entryFee: "60 Rs",
        srcImage:
            "https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg",
        coordinators: [
            {
                name: "Prajakta Sawant",
                phone: "9960493266",
            },
            {
                name: "Sakib Jambhlikar",
                phone: "7972091866",
            },
        ],
    },
    {
        name: "Rocket League",
        type: "Non-Technical",
        description:
            "Gather your squad and compete in Rocket League! Show off your teamwork and strategic skills on the provided platform. Entry fee for a 4-member squad is Rs. 200.",
        squadSize: 4,
        srcImage: "https://wallpapercave.com/wp/wp10711551.jpg",
        platform: "Provided in labs",
        entryFee: "200 Rs per squad",
        coordinators: [
            {
                name: "Jishan Mulla",
                phone: "9850678693",
            },
            {
                name: "Ritesh Mohite",
                phone: "7499798903",
            },
            {
                name: "Kartik Gupta",
                phone: "9696525868",
            },
        ],
    },
    {
        name: "BGMI Battle Royale",
        type: "Non-Technical",
        description:
            "Battle it out in BGMI Battle Royale! Form a squad of 4 members and compete from anywhere. Entry fee per squad is Rs. 200. Do you have what it takes to emerge as the champion? \nNote: For security guidelines, we have set the minimum player level in the game for registration at 40. We will be verifying each player's level. If we find that the player level is less than 40, That squad will be disqualified. \nAny type of hacking or malpractice is not allowed.",
        squadSize: 4,
        srcImage: "https://wallpapercave.com/wp/wp12953990.jpg",
        battleFromAnywhere: true,
        entryFee: "200 Rs per squad",
        coordinators: [
            {
                name: "Sagar More",
                phone: "9403120094",
            },
            {
                name: "Tejas Chavan",
                phone: "9420841250",
            },
            {
                name: "Yashraj Mohite",
                phone: "9359470558",
            },
            {
                name: "Mihir Mahajan",
                phone: "7559237731",
            },
        ],
    },
    {
        name: "Garena Free Fire",
        type: "Non-Technical",
        description:
            "Join the action-packed battles of Garena Free Fire! Grab your squad and compete in this thrilling event. Entry fee for a 4-member squad is Rs. 200. Prepare for intense battles!\nAny type of hacking or malpractice is not allowed.",
        squadSize: 4,
        battleFromAnywhere: true,
        srcImage: "https://wallpapercave.com/wp/wp5879822.jpg",
        entryFee: "200 Rs per squad",
        coordinators: [
            {
                name: "Shrinath Dongre",
                phone: "8999862414",
            },
            {
                name: "Atharv Shinde",
                phone: "9579100166",
            },
            {
                name: "Prathmesh Walekar",
                phone: "7020463394",
            },
        ],
    },
];

export default events;
