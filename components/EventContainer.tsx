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
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  const openModal = (event: any) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setModalOpen(false);
  };

  return (
    <div className="sm:w-90">
      <h1 className="text-center mt-10 ; font-bold tracking-tighter bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent z-50 text-4xl md:text-6xl lg:text-9xl">
        Technical Events
      </h1>

      <div className="flex flex-wrap justify-center">
        {events.slice(0, 3).map((event, index) => (
          <div
            key={index}
            onClick={() => openModal(event)}
            className="inter-var mx-4 my-3 w-full xlg:w-1/3 xxlg:w-1/4"
          >
            <CardContainer className="hover:cursor-pointer ">
              <BackgroundGradient className="rounded-[22px] p-1 bg-black">
                <EventComponent event={event} />
              </BackgroundGradient>
            </CardContainer>
          </div>
        ))}
      </div>
      <h1 className="text-center mt-10 ; font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent z-50 text-4xl md:text-6xl lg:text-9xl">
        Non-Technical Events
      </h1>
      <div className="flex flex-wrap justify-center">
        {events.slice(3, 6).map((event, index) => (
          <div
            key={index}
            onClick={() => openModal(event)}
            className="inter-var mx-4 my-3 w-full xlg:w-1/3 xxlg:w-1/4  "
          >
            <CardContainer className="hover:cursor-pointer">
              <BackgroundGradient className="rounded-[22px] p-1 bg-black">
                <EventComponent event={event} />
              </BackgroundGradient>
            </CardContainer>
          </div>
        ))}
      </div>

      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <Modal
          centered
          open={modalOpen}
          onCancel={closeModal}
          footer={null}
          className="sm:w-full sm:max-h-full w-50"
        >
          {selectedEvent && <EventInfoModelContent event={selectedEvent} />}
        </Modal>
      </ConfigProvider>
    </div>
  );
}
