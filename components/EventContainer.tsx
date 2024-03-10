"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import events from "@/events.mjs";

export default function EventContainer() {
    return (
        <div>
            <h1 className="text-center mt-10 text-7xl font-bold text-orange-600">
                Technical Events
            </h1>
            <div className="flex flex-wrap justify-center">
                {events.slice(0, 3).map((event, index) => (
                    <CardContainer key={index} className="inter-var mx-4 my-3">
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
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
            <h1 className="text-center my-3 text-7xl font-bold text-red-600">
                Non-Technical Events
            </h1>
            <div className="flex flex-wrap justify-center">
                {events.slice(3, 6).map((event, index) => (
                    <CardContainer key={index} className="inter-var mx-4 my-3">
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
                            
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    );
}
