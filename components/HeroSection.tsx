import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="w-full py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6 items-center">
                <div className="relative flex flex-col items-center space-y-2 text-center bg-gray-900">
                    <div className="relative bg-opacity-70 bg-blur-lg bg-cover bg-center rounded-lg p-8">
                        <div className="space-y-2">
                            <h1 className="text-9xl font-extrabold tracking-tighter sm:text-10xl lg:text-14xl text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text">
                                Spark
                            </h1>

                            <p className="max-w-[600px] text-lg text-gray-200 md:text-xl/none md:mx-auto lg:text-base xl:text-xl dark:text-green-200">
                                A Technical symposium organized by the CSE
                                department of ADCET under the CESA.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center mt-6 ">
                        <button className="px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-md shadow-md transition duration-300 hover:opacity-80 focus:outline-none mb-8">
                            <Link
                                href="https://docs.google.com/forms/d/e/1FAIpQLScrVHA5XI8Bmh2VSEQBUg2AcXfb-SmzjccU0xSNLCHaGl2-iQ/viewform"
                                target="_"
                            >
                                Register Now
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
