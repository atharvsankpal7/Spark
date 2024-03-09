"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
export default function ThreeDCardDemo() {
    const events = [
        {
            name: "Apti-King",
            type: "Technical",
            description:
                "Apti-King is a challenging aptitude competition designed to test your logical and analytical skills. Do you have what it takes to be the Apti-King? Register now and compete for exciting prizes!",
            rounds: [
                {
                    name: "Round 1: Online (on lab PCs)",
                    description:
                        "Top students from round 1 will advance to round 2",
                    isTimeBound: true,
                },
                {
                    name: "Round 2: Offline (Pen and Paper)",
                    description: "Pen and paper round for finalists",
                    isTimeBound: true,
                },
            ],
            entryFee: "50 Rs",
            srcImage: "https://wallpapercave.com/wp/wp8366401.jpg",
            coordinators: [
                {
                    name: "Hemant Shashikant Yadav",
                    phone: "9135917111",
                },
                {
                    name: "Prajakta Vikas Sawant",
                    phone: "9960493266",
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
            entryFee: "Solo: 50 Rs, Duo: 100 Rs",
            coordinators: [
                {
                    name: "Jagannath Suryawanshi",
                    phone: "9551788259",
                },
                {
                    name: "Sarvadnya Mense",
                    phone: "7038300614",
                },
            ],
        },
        {
            name: "Web Master",
            type: "Technical",
            description:
                "Are you a coding wizard? Join Web Master and showcase your frontend development skills. You'll be given a topic on the spot, and you have 2 hours to create a stunning website. Entry fee is only Rs. 50.",
            topicGivenOnSpot: true,
            timeLimit: "2 hrs",
            entryFee: "50 Rs",
            srcImage:
                "https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg",
            coordinators: [
                {
                    name: "Paras Patil",
                    phone: "9339307421",
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
                    name: "Prathmesh Kale",
                    phone: "7666280058",
                },
                {
                    name: "Akshay Pawar",
                    phone: "7057123884",
                },
            ],
        },
        {
            name: "BGMI Battle Royale",
            type: "Non-Technical",
            description:
                "Battle it out in BGMI Battle Royale! Form a squad of 4 members and compete from anywhere. Entry fee per squad is Rs. 200. Do you have what it takes to emerge as the champion?",
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
                "Join the action-packed battles of Garena Free Fire! Grab your squad and compete in this thrilling event. Entry fee for a 4-member squad is Rs. 200. Prepare for intense battles!",
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

    return (
        <div className="flex flex-wrap justify-center">
            {events.map((event, index) => (
                <CardContainer key={index} className="inter-var mx-4 my-6">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            {event.name}
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            {event.description}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={
                                    event.srcImage ||
                                    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                                }
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Try now →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Sign up
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            ))}
        </div>
    );
}
