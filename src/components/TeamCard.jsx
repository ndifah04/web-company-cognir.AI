'use client';

import { motion } from 'framer-motion';
import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

export default function TeamCard({ name, role, photoUrl, socials }) {
    return (
        <div className='border p-2.5 rounded-lg border-white/20'>
            <motion.div
                className="relative w-[300px] h-[400px] rounded-[10px] cursor-pointer bg-no-repeat bg-[length:342px] grayscale-100 hover:grayscale-0 contrast-100"
                style={{ backgroundImage: `url(${photoUrl})` }}
                whileHover={{
                    backgroundSize: '600px',
                    backgroundPosition: 'left center',
                    transition: { duration: 0.8 },
                }}
                initial={{
                    backgroundSize: '342px',
                    backgroundPosition: 'center',
                }}
            >
                <motion.div
                    className="absolute rounded-[10px] border border-white backdrop-brightness-40 inset-0  opacity-0 transition-opacity"
                    whileHover={{ opacity: 1, transition: { delay: 0.3, duration: 0.3 } }}
                >
                    <div className="absolute top-[10%] left-5 ">
                        <h3 className="font-extrabold text-[20px] text-white/70 leading-tight">{name}</h3>
                        <p className="text-sm text-white/70 font-medium mt-2">{role}</p>
                    </div>

                    <div className="flex flex-col items-center justify-around w-[44px] h-[120px] absolute top-[60%] left-5 rounded bg-white/20 backdrop-blur-sm">
                        {socials.github && (
                            <a href={socials.github} target="_blank" rel="noopener noreferrer">
                                <GithubIcon className="w-[28px] h-[28px] hover:fill-black hover:opacity-70" />
                            </a>
                        )}
                        {socials.linkedin && (
                            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                                <LinkedinIcon className="w-[28px] h-[28px] hover:fill-[#00acee] hover:opacity-70" />
                            </a>
                        )}
                        {socials.instagram && (
                            <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
                                <InstagramIcon className="w-[28px] h-[28px] hover:fill-pink-800 hover:opacity-70" />
                            </a>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </div>


    );
}