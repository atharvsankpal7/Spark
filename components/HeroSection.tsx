"use client";
import Link from "next/link";
import Image from "next/image";
import { Boxes } from "./background-boxes";
import { cn } from "@/utils/cn";
import { Button, Modal, theme } from "antd";
import { useState } from "react";
import { ConfigProvider, Layout } from "antd";
export default function HeroSection() {
    const [modal2Open, setModal2Open] = useState(false);
    return (
        <section className="w-full py-12 md:py-24 relative z-20">
            <div className=" w-full mx-auto px-4 md:px-6 items-center">
                <div className="h-full py-10 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
                    <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

                    <Boxes />
                    <div className="relative flex flex-col items-center space-y-2 text-center  bg-transparent">
                        <div className="relative bg-opacity-70 bg-blur-lg bg-cover bg-center rounded-lg p-8 z-0">
                            <div className="space-y-10">
                                <h1 className="text-9xl font-extrabold tracking-tighter  text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text z-50">
                                    Spark-2k24
                                </h1>

                                <p className="max-w-[600px] text-2xl text-gray-200 md:text-xl/none md:mx-auto lg:text-base xl:text-xl dark:text-green-200 z-50">
                                    A Technical symposium organized by the CSE
                                    department of ADCET under the CESA.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-10 justify-center mt-6 ">
                            <button
                                className="p-[3px] relative z-50"
                                onClick={() => setModal2Open(true)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                <div className="px-2 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                    Broucher
                                </div>
                            </button>
                            <ConfigProvider
                                theme={{
                                    // 1. Use dark algorithm
                                    algorithm: theme.darkAlgorithm,

                                    // 2. Combine dark algorithm and compact algorithm
                                    // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
                                }}
                            >
                                <Modal
                                    title="Spark-2k24 Broucher"
                                    centered
                                    open={modal2Open}
                                    onOk={() => setModal2Open(false)}
                                    onCancel={() => setModal2Open(false)}
                                    width="85%"
                                >
                                    <Image
                                        src="/public/Images/Spark2k24.png"
                                        width={100}
                                        height={100}
                                        alt="Broucher"
                                    />
                                </Modal>
                            </ConfigProvider>

                            <Link
                                href="https://docs.google.com/forms/d/e/1FAIpQLScrVHA5XI8Bmh2VSEQBUg2AcXfb-SmzjccU0xSNLCHaGl2-iQ/viewform"
                                target="_"
                            >
                                <button className=" px-1 py-1 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-50">
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-lg font-medium text-white backdrop-blur-3xl ">
                                        Register Now
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
