import {
    Settings,
    Monitor,
    ShieldCheck,
    Code,
    Cloud,
    Database,
} from 'lucide-react';

import { LogoTicker } from '@/sections/LogoTicker';

import Button from './Button';

import * as LucideIcons from 'lucide-react'


const Icon = ({ name, size = 24, color = 'currentColor', className, ...props }) => {
    const LucideIcon = LucideIcons[name];

    if (!LucideIcon) {
        console.warn(`Icon "${name}" tidak ditemukan`);
        return null;
    }

    return <LucideIcon size={size} color={color} className={className} {...props} />;
};

export default function SolutionContainer({ header, description, useCases, useCaseHeader, useCaseDesc, solutionImage }) {
    return (
        <>
            <main className="text-white">
                <section className="py-24 px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-medium mb-6">
                        {header}
                    </h1>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                        {description}
                    </p>
                    <a href="#use-cases" className='mt-8 block'>
                        <Button>
                            Explore Use Cases
                        </Button>
                    </a>
                    <img src={solutionImage} alt="solution" className='rounded-xl mx-auto mt-8 max-w-3xl' />
                </section>

                <LogoTicker />

                {/* Use Cases Section */}
                <section id="use-cases" className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-medium mb-6">{useCaseHeader}</h2>
                        <p className="text-lg text-white/70 mb-12">
                            {useCaseDesc}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
                            {useCases.map((useCase, index) => (
                                <div key={index} className="p-6 rounded-lg shadow hover:shadow-lg transition">
                                    <div className="mb-4">

                                        <Icon name={useCase.icon} className='h-8 w-8' />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                                    <p className="text-white/70 font-light">{useCase.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-20 px-6">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                        {/* Feature List */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl font-medium mb-6">Key Features of Cognir AI</h2>
                            <ul className="space-y-6 text-left">
                                <li className="flex items-start space-x-4">
                                    <Icon name="Monitor" className="w-6 h-6 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-semibold">Smart Workflow Builder</h4>
                                        <p className="text-white/70 font-light">
                                            Build AI-powered tasks and logic flows with visual blocks and built-in templates—perfect for teams that want to move fast without deep technical setup.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <Icon name="Monitor" className="w-6 h-6 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-semibold">Edge-Based Execution</h4>
                                        <p className="text-white/70">
                                            Run AI applications directly on local devices (like smart cameras or edge boxes) for faster response, lower latency, and enhanced privacy.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <Icon name="ShieldCheck" className="w-6 h-6 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-semibold">Robust Data Protection</h4>
                                        <p className="text-white/70">
                                            Protect your operations with encrypted data handling, secure access, and enterprise-grade compliance standards.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <Icon name="Cloud" className="w-6 h-6 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-semibold">Modular Architecture</h4>
                                        <p className="text-white/70">
                                            Easily plug in or swap out components such as image recognition, NLP, or tracking—customize your AI system without rewriting everything.</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <Icon name="Cloud" className="w-6 h-6 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-semibold">Live System Dashboard</h4>
                                        <p className="text-white/70">
                                            Monitor all deployed systems from a central interface. Get alerts, track status, and view performance in real-time.</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <Icon name="Database" className="w-6 h-6 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-semibold">Unified Model and Dataset Hubt</h4>
                                        <p className="text-white/70">
                                            Manage your AI models, datasets, and training pipelines in one place to ensure accuracy, consistency, and continuous improvement.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Image Placeholder */}
                        <div className="w-full lg:w-1/2">
                            <img
                                src="/img/hero-solution.png"
                                alt="hero ilustration"
                                className="rounded-lg shadow-md w-full"
                            />
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}
