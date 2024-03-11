import React from "react";

const EventInfoModelContent = ({ event }: any) => {
    return (
        <div className="container mx-auto max-w-md mt-10 p-6 border-lime-200 border-2 rounded-lg shadow-xl shadow-lime-400">
            <img
                className="w-full h-40 object-cover rounded-md"
                src={
                    event.srcImage ||
                    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                }
                alt={event.name}
            />
            <div className="mt-4">
                <h2 className="text-2xl font-bold text-yellow-100">
                    {event.name}
                </h2>
                <p className="mt-2 text-sm text-slate-200">
                    {event.description}
                </p>

                {/* Event-specific details based on event type */}
                {event.type === "Technical" && (
                    <div>
                        <p className="mt-4 text-xl font-semibold ">
                            Entry Fee:{" "}
                            <span className="text-blue-300 underline">
                                {event.entryFee}
                            </span>
                        </p>
                        {event.rounds && (
                            <div className="mt-2">
                                <p className="font-semibold text-yellow-100">
                                    Rounds:
                                </p>
                                <ul className="list-disc list-inside">
                                    {event.rounds.map(
                                        (round: any, index: number) => (
                                            <li key={index}>
                                                {round.name} -{" "}
                                                {round.description}
                                                {round.isTimeBound && (
                                                    <span className="ml-2 text-xs text-pink-500">
                                                        (Time Bound)
                                                    </span>
                                                )}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {event.type === "Non-Technical" && (
                    <div>
                        <p className="mt-4">Entry Fee: {event.entryFee}</p>
                        <p>Squad Size: {event.squadSize}</p>
                        {event.battleFromAnywhere && (
                            <p className="mt-2">Battle from Anywhere!</p>
                        )}
                    </div>
                )}

                {event.presentationTime && (
                    <div className="mt-4">
                        <p className="font-semibold">Presentation Time:</p>
                        <p>
                            Presentation: {event.presentationTime.presentation}
                        </p>
                        <p>Q&A: {event.presentationTime.qna}</p>
                    </div>
                )}

                {event.topicGivenOnSpot && (
                    <p className="mt-4">Topic Given On Spot!</p>
                )}

                <div className="mt-6">
                    <p className="font-semibold text-yellow-100">
                        Coordinators:
                    </p>
                    <ul className="list-disc list-inside">
                        {event.coordinators.map(
                            (coordinator: any, index: number) => (
                                <li key={index}>
                                    {coordinator.name} - {coordinator.phone}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EventInfoModelContent;
