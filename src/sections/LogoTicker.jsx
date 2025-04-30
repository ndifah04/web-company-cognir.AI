"use client";

import Image from 'next/image'
import { motion } from 'framer-motion'
import { images } from '@/data/images';

export const LogoTicker = () => {
    return (
        <section className='py-20 md:py-24 max-w-6xl mx-auto'>
            <div className="container mx-auto">
                <div className='flex items-center gap-5'>
                    <div className="flex-1 md:flex-none">
                        <h2>Runs on top-tier AI models</h2>
                    </div>

                    <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                        <motion.div className='flex flex-none gap-14 pr-14'
                            initial={{
                                translateX: "-50%"
                            }}
                            animate={{
                                translateX: "0%",
                            }}
                            transition={{
                                duration: 40,
                                repeat: Infinity,
                                ease: "linear",
                                repeatType: "loop"
                            }}
                        >
                            {[...images, ...images].map((image, index) => (
                                <div key={`${image.content.src}-${index}`} className="flex items-center gap-3">
                                    <Image
                                        src={image.content}
                                        alt={`${image.name} logo`}
                                        className='w-auto h-6'
                                        width={0}
                                        height={0}
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium whitespace-nowrap">
                                            {image.name}
                                        </span>
                                        {image.description && (
                                            <span className="text-xs text-gray-500">
                                                {image.description}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
};
