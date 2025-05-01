import {
    Car,
    Camera,
    Eye,
    AlertTriangle,
    HardHat,
    Smile,
    Settings,
    Monitor,
    ShieldCheck,
    Code,
    Cloud,
    Database,
} from 'lucide-react';

import Button from './Button';

const useCases = [
    {
        icon: <Car className="w-8 h-8" />,
        title: 'Pothole Detection',
        description: 'Automated detection of potholes using AI vision.',
    },
    {
        icon: <Camera className="w-8 h-8" />,
        title: 'Automatic Number Plate Recognition',
        description: 'Real-time identification of vehicles through ANPR technology.',
    },
    {
        icon: <Eye className="w-8 h-8" />,
        title: 'Eye Gaze Detection',
        description: 'Monitoring driver attentiveness and stress levels via eye tracking.',
    },
    {
        icon: <AlertTriangle className="w-8 h-8" />,
        title: 'Abandoned Luggage Detection',
        description: 'Automatic identification of suspicious or dangerous objects in public areas.',
    },
    {
        icon: <HardHat className="w-8 h-8" />,
        title: 'PPE Detection',
        description: 'Automated monitoring of personal protective equipment compliance.',
    },
    {
        icon: <Smile className="w-8 h-8" />,
        title: 'Facial Emotion Analysis',
        description: 'Analyzing facial attributes such as gender, age, and emotion.',
    },
];

const features = [
    {
        icon: <Settings className="w-8 h-8" />,
        title: 'No-Code Visual Editor',
        description: 'Intuitively create and update real-time computer vision applications using pre-built modules in a visual editor.',
    },
    {
        icon: <Monitor className="w-8 h-8" />,
        title: 'On-Device Deployment',
        description: 'Deploy real-time applications to devices, processing video feeds locally for fast, efficient, and privacy-preserving AI.',
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: 'Enterprise-Grade Security',
        description: 'Ensure data privacy and security with on-device deep learning and centralized management.',
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: 'Customizable Modules',
        description: 'Build out logic, wire together cameras and computer vision modules, and customize applications to specific needs.',
    },
    {
        icon: <Cloud className="w-8 h-8" />,
        title: 'Remote Monitoring',
        description: 'Gather insights from deployed applications in the cloud with interactive dashboards and dynamic filters.',
    },
    {
        icon: <Database className="w-8 h-8" />,
        title: 'Integrated Data Management',
        description: 'Collect and annotate training data in one place, manage AI models, and use them across multiple applications.',
    },
];

export default function SolutionContainer() {
    return (
        <>
            <main className="text-white">
                <section className="py-24 px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-medium mb-6">
                        Cognir AI Applications for Transportation
                    </h1>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                        Digitize and automate operations with visual artificial intelligence to improve efficiency, safety, and service levels in the transportation sector.
                    </p>
                    <div className="mt-8 flex justify-center space-x-4">
                        <a href="#use-cases">
                            <Button>
                                Explore Use Cases
                            </Button>
                        </a>
                    </div>
                </section>

                {/* Use Cases Section */}
                <section id="use-cases" className="py-20 px-6">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-medium mb-6">Cognir AI for Transportation Use Cases</h2>
                        <p className="text-lg text-white/70 mb-12">
                            Viso Suite enables the creation and scaling of real-time computer vision and deep learning systems to enhance operational efficiency, security, and quality.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
                            {useCases.map((useCase, index) => (
                                <div key={index} className="p-6 rounded-lg shadow hover:shadow-lg transition">
                                    <div className="mb-4">{useCase.icon}</div>
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
                                    <Settings className="w-6 h-6 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-semibold">Smart Workflow Builder</h4>
                                        <p className="text-white/70 font-light">
                                            Build AI-powered tasks and logic flows with visual blocks and built-in templates—perfect for teams that want to move fast without deep technical setup.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <Monitor className="w-6 h-6 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-semibold">Edge-Based Execution</h4>
                                        <p className="text-white/70">
                                            Run AI applications directly on local devices (like smart cameras or edge boxes) for faster response, lower latency, and enhanced privacy.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <ShieldCheck className="w-6 h-6 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-semibold">Robust Data Protection</h4>
                                        <p className="text-white/70">
                                            Protect your operations with encrypted data handling, secure access, and enterprise-grade compliance standards.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <Code className="w-6 h-6 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-semibold">Modular Architecture</h4>
                                        <p className="text-white/70">
                                            Easily plug in or swap out components such as image recognition, NLP, or tracking—customize your AI system without rewriting everything.                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <Cloud className="w-6 h-6 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-semibold">Live System Dashboard</h4>
                                        <p className="text-white/70">
                                            Monitor all deployed systems from a central interface. Get alerts, track status, and view performance in real-time.                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <Database className="w-6 h-6 mt-1" />
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
                                alt="Viso Suite Interface"
                                className="rounded-lg shadow-md w-full"
                            />
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}
