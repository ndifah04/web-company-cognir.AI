"use client";
import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import CustomersPage from "@/sections/Customer";

const WorldMap = dynamic(() => import('@/components/WorldMap').then(mod => mod.default), {
    ssr: false,
    loading: () => <div className="h-[495px] w-full bg-gray-800 animate-pulse rounded-lg" />
});

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delay: 0.8,
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
};

const letterVariants = {
    hidden: { x: -10, opacity: 0 },
    show: { x: 0, opacity: 1 }
};

export default function Customer() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to check if viewport is mobile
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768); // 768px is typical md breakpoint
        };

        // Check on initial render
        checkIfMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const dots = useMemo(() => [
        {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska
            end: { lat: 34.0522, lng: -118.2437 },   // Los Angeles
        },
        {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska
            end: { lat: -15.7975, lng: -47.8919 },    // Brazil
        },
        {
            start: { lat: -15.7975, lng: -47.8919 },  // Brazil
            end: { lat: 38.7223, lng: -9.1393 },      // Lisbon
        },
        {
            start: { lat: 51.5074, lng: -0.1278 },    // London
            end: { lat: 28.6139, lng: 77.209 },       // New Delhi
        },
        {
            start: { lat: 28.6139, lng: 77.209 },     // New Delhi
            end: { lat: 43.1332, lng: 131.9113 },     // Vladivostok
        },
        {
            start: { lat: 28.6139, lng: 77.209 },     // New Delhi
            end: { lat: -1.2921, lng: 36.8219 },      // Nairobi
        },

        // Koneksi baru ke Sulawesi Selatan (Makassar)
        {
            start: { lat: -5.1477, lng: 119.4327 },   // Makassar
            end: { lat: 28.6139, lng: 77.209 },       // New Delhi
        },
        {
            start: { lat: -5.1477, lng: 119.4327 },   // Makassar
            end: { lat: -6.2088, lng: 106.8456 },     // Jakarta
        },
        {
            start: { lat: -5.1477, lng: 119.4327 },   // Makassar
            end: { lat: 1.3521, lng: 103.8198 },      // Singapore
        },
        {
            start: { lat: -5.1477, lng: 119.4327 },   // Makassar
            end: { lat: 35.6762, lng: 139.6503 },    // Tokyo
        }
    ], []);

    return (
        <div className="py-40 bg-black w-full max-w-6xl mx-auto">
            <div className="max-w-6xl mx-auto text-center">
                <p className="font-bold text-xl md:text-4xl text-white">
                    Let's Build {" "}
                    <span className="text-neutral-400">
                        {"Something-Incredible".split("").map((letter, idx) => (
                            <motion.span
                                key={idx}
                                className="inline-block"
                                variants={letterVariants}
                                initial="hidden"
                                animate="show"
                                transition={{
                                    duration: 0.5,
                                    delay: idx * 0.04,
                                    ease: "easeOut"
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </span>
                </p>
                <motion.p
                    className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    We're looking for forward-thinking partners who want to shape the future together. Whether you're a startup, SME, or enterprise – we're ready to collaborate and create solutions that matter.
                </motion.p>
            </div>
            <motion.div
                initial="hidden"
                animate="show"
                variants={containerVariants}
                className="w-full"
            >
                {isMobile ? (
                    <div className="relative w-full h-[300px] md:h-[495px] rounded-lg overflow-hidden">
                        <Image
                            src="/img/map-mobile.png"
                            alt="World map with connection points"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                ) : (
                    <WorldMap dots={dots} />
                )}
            </motion.div>

            <CustomersPage />
        </div>
    );
}