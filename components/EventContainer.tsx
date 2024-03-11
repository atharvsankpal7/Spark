"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import events from "@/events.mjs";
import { BackgroundGradient } from "./background-gradient";

export default function EventContainer() {
    const [isMobile, setIsMobile] = React.useState(false);
    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
    });

    const cardContent = (event: any) => {
        return (
            <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto  rounded-[22px] p-6 border">
                <CardItem
                    translateZ="50"
                    translateY="-10"
                    className="text-4xl font-bold text-amber-100 dark:text-white"
                >
                    {event.name}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-300 text-sm max-w-sm mt-2 dark:text-neutral-300"
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
            </CardBody>
        );
    };

    return (
        <div>
            <h1 className="text-center mt-10 text-8xl font-bold tracking-tighter bg-gradient-to-r from-green-600  to-blue-600 bg-clip-text text-transparent z-50 shadow-2xl glow">
        Technical Events
    </h1>

            <div className="flex flex-wrap justify-center">
                {events.slice(0, 3).map((event, index) => (
                    <CardContainer key={index} className="inter-var mx-4 my-3">
                        {isMobile ? (
                            cardContent(event)
                        ) : (
                            <BackgroundGradient className="rounded-[22px] p-1 bg-black">
                                {cardContent(event)}
                            </BackgroundGradient>
                        )}
                    </CardContainer>
                ))}
            </div>
            <h1 className="text-center mt-10 text-8xl font-bold tracking-tighter bg-gradient-to-r from-blue-600  to-green-600 bg-clip-text text-transparent z-50 shadow-2xl ">
                Non-Technical Events
            </h1>
            <div className="flex flex-wrap justify-center">
                {events.slice(3, 6).map((event, index) => (
                    <CardContainer key={index} className="inter-var mx-4 my-3">
                        {isMobile ? (
                            cardContent(event)
                        ) : (
                            <BackgroundGradient className="rounded-[22px] p-1 bg-black  ">
                                {cardContent(event)}
                            </BackgroundGradient>
                        )}
                    </CardContainer>
                ))}
            </div>
        </div>
    );
}
