"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import events from "@/events.mjs";
import { BackgroundGradient } from "./background-gradient";
import EventComponent from "./EventComponent";
import { ConfigProvider, Layout } from "antd";
import { Button, Modal, theme } from "antd";
import EventInfoModelContent from "./EventInfo-ModelContent";

export default function EventContainer({ event }: any) {
    const [isMobile, setIsMobile] = React.useState(false);
    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedEvent, setSelectedEvent] = React.useState(null);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
    });

    const openModal = (event: any) => {
        setSelectedEvent(event);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedEvent(null);
        setModalOpen(false);
    };

    return (
        <div>
            <h1 className="text-center mt-10 text-8xl font-bold tracking-tighter bg-gradient-to-r from-green-600  to-blue-600 bg-clip-text text-transparent z-50 shadow-2xl glow">
                Technical Events
            </h1>

            <div className="flex flex-wrap justify-center">
                {events.slice(0, 3).map((event, index) => (
                    <div
                        key={index}
                        onClick={() => openModal(event)}
                        className="inter-var mx-4 my-3"
                    >
                        <CardContainer className="hover:cursor-pointer">
                            {isMobile ? (
                                <EventComponent event={event} />
                            ) : (
                                <BackgroundGradient className="rounded-[22px] p-1 bg-black">
                                    <EventComponent event={event} />
                                </BackgroundGradient>
                            )}
                        </CardContainer>
                    </div>
                ))}
            </div>
            <h1 className="text-center mt-10 text-8xl font-bold tracking-tighter bg-gradient-to-r from-blue-600  to-green-600 bg-clip-text text-transparent z-50 shadow-2xl ">
                Non-Technical Events
            </h1>
            <div className="flex flex-wrap justify-center">
                {events.slice(3, 6).map((event, index) => (
                    <div
                        key={index}
                        onClick={() => openModal(event)}
                        className="inter-var mx-4 my-3"
                    >
                        <CardContainer className="hover:cursor-pointer">
                            {isMobile ? (
                                <EventComponent event={event} />
                            ) : (
                                <BackgroundGradient className="rounded-[22px] p-1 bg-black">
                                    <EventComponent event={event} />
                                </BackgroundGradient>
                            )}
                        </CardContainer>
                    </div>
                ))}
            </div>

            <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
                <Modal
                    centered
                    visible={modalOpen}
                    onCancel={closeModal}
                    footer={null}
                    className="sm:w-full w-50"
                >
                    {selectedEvent && (
                        <EventInfoModelContent event={selectedEvent} />
                    )}
                </Modal>
            </ConfigProvider>
        </div>
    );
}
