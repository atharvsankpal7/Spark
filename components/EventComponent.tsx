import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

const EventComponent = ({ event }: any) => {
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

export default EventComponent;
