"use client"

import { useEffect, useRef } from 'react';
import { useMotionTemplate, useMotionValue, motion, animate } from 'framer-motion';

const FeaturesTab = ({ icon, title, isNew, selected, onClick }) => {
    const tabRef = useRef(null);
    const xPercentage = useMotionValue(0);
    const yPercentage = useMotionValue(0);
    const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

    useEffect(() => {
        if (!tabRef.current || !selected) return;

        xPercentage.set(0);
        yPercentage.set(0);
        const { height, width } = tabRef.current.getBoundingClientRect();
        const circumference = height * 2 + width * 2;
        const times = [0, width / circumference, (width + height) / circumference, (width * 2 + height) / circumference, 1];

        animate(xPercentage, [0, 100, 100, 0, 0], {
            times,
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
        });
        animate(yPercentage, [0, 0, 100, 100, 0], {
            times,
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
        });
    }, [selected]);

    return (
        <div
            className='flex border border-white/15 p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative cursor-pointer'
            ref={tabRef}
            onClick={onClick}
        >
            {selected && (
                <motion.div
                    className='absolute inset-0 -m-px border border-cyan-500 rounded-xl pointer-events-none'
                    style={{ maskImage }}
                />
            )}
            <div className='h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center'>
                {icon}
            </div>
            <div className='font-medium'>{title}</div>
            {isNew && (
                <div className='text-xs text-black bg-cyan-500 py-0.5 px-2 rounded-full font-semibold'>new</div>
            )}
        </div>
    );
};

export default FeaturesTab;