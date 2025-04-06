"use client"

import { useCases } from "@/data/testimonials";
import Image from "next/image";
import { motion } from "framer-motion";
import { LineChart, Timer, MousePointerClick, Bot, ArrowRight } from "lucide-react";

export const Testimonials = () => {
    // Icon mapping
    const iconComponents = {
        LineChart,
        Timer,
        MousePointerClick,
        Bot
    };

    return (
        <section className="py-20 md:py-24 bg-gradient-to-b from-black to-gray-900/50">
            <div className="container">
                <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">Proven Use Cases</h2>
                <p className="mt-5 text-center text-lg md:text-xl tracking-tight text-white/70 max-w-2xl mx-auto">
                    Real-world applications of our AI solutions delivering measurable impact
                </p>

                <div className="flex overflow-hidden mt-14 pl-5 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                    <motion.div
                        className="flex gap-6 pr-5 flex-none"
                        initial={{ translateX: "-50%" }}
                        animate={{ translateX: "0%" }}
                        transition={{
                            duration: 40,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    >
                        {[...useCases, ...useCases].map((useCase, index) => {
                            const IconComponent = iconComponents[useCase.icon];

                            return (
                                <div
                                    key={index}
                                    className="w-[340px] flex-none rounded-xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 overflow-hidden hover:border-purple-400/30 transition-all duration-300 group"
                                >
                                    {/* Image Header */}
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <Image
                                            src={useCase.avatarImg}
                                            alt={`${useCase.title} use case`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                        <div className="absolute top-4 left-4 flex items-center gap-2">
                                            <span className="px-3 py-1 bg-purple-600/90 rounded-full text-xs font-medium">
                                                {useCase.industry}
                                            </span>
                                            {/* {useCase.result && (
                                                <span className="px-3 py-1 bg-green-600/90 rounded-full text-xs font-medium">
                                                    {useCase.result}
                                                </span>
                                            )} */}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col h-[240px]">
                                        <div className="flex items-start gap-3 mb-4">
                                            <div className="p-2 bg-purple-600/20 rounded-lg">
                                                {IconComponent && (
                                                    <IconComponent className="h-5 w-5 text-purple-400" />
                                                )}
                                            </div>
                                            <h3 className="text-lg font-semibold tracking-tight flex-1">
                                                {useCase.text.replace(/^"|"$/g, '')}
                                            </h3>
                                        </div>

                                        <div className="mt-auto space-y-4">
                                            <div className="text-sm text-white/80">
                                                — {useCase.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>


            </div>
        </section>
    );
};