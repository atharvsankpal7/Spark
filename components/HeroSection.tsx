import Link from "next/link";
import { Boxes } from "./background-boxes";
import { cn } from "@/utils/cn";
export default function HeroSection() {
    return (
        <section className="w-full py-12 md:py-24 relative z-20">
            <div className="container mx-auto px-4 md:px-6 items-center">
                <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
                    <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

                    <Boxes />
                    <div className="relative flex flex-col items-center space-y-2 text-center  bg-transparent">
                        <div className="relative bg-opacity-70 bg-blur-lg bg-cover bg-center rounded-lg p-8 z-0">
                            <div className="space-y-2">
                                <h1 className="text-9xl font-extrabold tracking-tighter sm:text-10xl lg:text-14xl text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text z-50">
                                    Spark
                                </h1>

                                <p className="max-w-[600px] text-lg text-gray-200 md:text-xl/none md:mx-auto lg:text-base xl:text-xl dark:text-green-200 z-50">
                                    A Technical symposium organized by the CSE
                                    department of ADCET under the CESA.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center mt-6 ">
                            <button className=" px-1 py-1 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-50">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                    <Link
                                        href="https://docs.google.com/forms/d/e/1FAIpQLScrVHA5XI8Bmh2VSEQBUg2AcXfb-SmzjccU0xSNLCHaGl2-iQ/viewform"
                                        target="_"
                                    >
                                        Register Now
                                    </Link>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
