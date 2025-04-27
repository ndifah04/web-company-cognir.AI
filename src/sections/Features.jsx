"use client"

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Rocket,
    Cpu,
    Database,
    Shield,
    Zap,
    BarChart2,
    Cloud,
    Brain,
    Network,
    Lock
} from 'lucide-react';
import FeaturesTab from '@/components/FeaturesTab';

// Tab configurations
const tabs = [
    {
        title: "AI Acceleration",
        iconName: "rocket",
        isNew: true
    },
    {
        title: "Optimization",
        iconName: "cpu"
    },
    {
        title: "Security",
        iconName: "shield"
    }
];

// Icon mappings
const icons = {
    rocket: <Rocket className="text-white" size={20} />,
    cpu: <Cpu className="text-white" size={20} />,
    database: <Database className="text-white" size={20} />,
    shield: <Shield className="text-white" size={20} />,
    zap: <Zap className="text-white" size={20} />,
    chart: <BarChart2 className="text-white" size={20} />,
    cloud: <Cloud className="text-white" size={20} />,
    brain: <Brain className="text-white" size={20} />,
    network: <Network className="text-white" size={20} />,
    lock: <Lock className="text-white" size={20} />
};

// Single card content for each tab
const tabContents = [
    {
        icon: <Zap size={24} className="text-cyan-500" />,
        image: 'star-glass.png',
        title: 'AI Acceleration Suite',
        description: 'Speed up AI development with hardware-accelerated training and inference. Leverage GPUs, TPUs, and distributed computing to reduce model training time from days to hours - without sacrificing performance. Perfect for real-time applications like computer vision and NLP.'
    },
    {
        icon: <Cpu size={24} className="text-cyan-500" />,
        image: 'gear-glass.png',
        title: 'Hardware Optimization',
        description: 'Automatically optimize models for peak efficiency. Prune redundant layers, quantize weights, and compress models without losing accuracy. Deploy lightweight, high-performance AI on edge devices, mobile, or low-power environments.'
    },
    {
        icon: <Lock size={24} className="text-cyan-500" />,
        image: 'shield-glass.png',
        title: 'Enterprise Security',
        description: 'Protect your AI pipeline end-to-end. Detect adversarial attacks, encrypt model weights, and ensure data privacy with federated learning. Enterprise-grade security for compliance-sensitive industries like healthcare and finance.'
    }
];

export const Features = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <section className='py-20 md:py-24' id='feature-tab'>
            <div className="max-w-6xl mx-auto">
                <h2 className='text-5xl md:text-6xl text-center font-medium tracking-tighter'>No Fragmentation. Just AI</h2>
                <p className='text-white/70 text-lg md:text-xl text-center tracking-tight mt-5 max-w-xl mx-auto'>One platform for all your AI-train, deploy, and scale any model with your data. Build solutions for any need, anywhere.</p>

                {/* Tab Section with Lucide Icons */}
                <div className="mt-10 flex flex-col gap-3 lg:flex-row">
                    {tabs.map((tab, tabIndex) => (
                        <FeaturesTab
                            {...tab}
                            icon={icons[tab.iconName]}
                            onClick={() => setSelectedTab(tabIndex)}
                            key={tab.title}
                            selected={selectedTab === tabIndex}
                        />
                    ))}
                </div>

                {/* Content Card */}
                <div className='mt-3 border border-white/15 rounded-xl p-2.5'>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="border border-white/20 rounded-lg p-8 bg-white/5">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
                                        {tabContents[selectedTab].icon}
                                    </div>
                                    <h3 className="font-medium text-xl">{tabContents[selectedTab].title}</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    <p className="text-white/70 text-lg order-2 md:order-1">
                                        {tabContents[selectedTab].description}
                                    </p>
                                    <div className="order-1 md:order-2">
                                        <motion.img
                                            src={`/img/${tabContents[selectedTab].image}`}
                                            alt={tabContents[selectedTab].title}
                                            className="w-2xs mx-auto"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2, duration: 0.3 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}