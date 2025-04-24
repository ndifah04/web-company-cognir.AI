import { Rocket, Brain, Handshake, Sprout, CheckCircle } from "lucide-react";

export default function CustomersPage() {
    return (
        <div className="text-white min-h-screen px-6 py-12">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className='text-5xl md:text-6xl text-center mb-4 font-medium tracking-tighter'>Partner with Us – Let’s Build Something Incredible</h2>
                <p className='text-white/70 mb-12 text-lg md:text-xl text-center tracking-tight mt-5 max-w-xl mx-auto'>We’re looking for forward-thinking partners who want to shape the future together.
                    Whether you're a startup, SME, or enterprise – we’re ready to collaborate and create
                    solutions that matter.</p>

            </div>

            <section className="max-w-5xl mx-auto mb-20">
                <h2 className="text-2xl font-semibold mb-10 text-center tracking-tight">Why Work With Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">
                        <div className="flex items-center gap-4 mb-3">
                            <Rocket className="text-blue-400 w-6 h-6" />
                            <h3 className="text-xl font-semibold">Fast & Flexible Development</h3>
                        </div>
                        <p className="text-gray-400">We adapt quickly to your needs and deliver solutions efficiently.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">
                        <div className="flex items-center gap-4 mb-3">
                            <Brain className="text-purple-400 w-6 h-6" />
                            <h3 className="text-xl font-semibold">Expertise You Can Count On</h3>
                        </div>
                        <p className="text-gray-400">Built by passionate developers and domain experts.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">
                        <div className="flex items-center gap-4 mb-3">
                            <Handshake className="text-green-400 w-6 h-6" />
                            <h3 className="text-xl font-semibold">Collaborative Approach</h3>
                        </div>
                        <p className="text-gray-400">We believe in building <em>with</em> you, not just <em>for</em> you.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">
                        <div className="flex items-center gap-4 mb-3">
                            <Sprout className="text-lime-400 w-6 h-6" />
                            <h3 className="text-xl font-semibold">Early Partnership Perks</h3>
                        </div>
                        <p className="text-gray-400">First customers get long-term benefits, priority support, and more.</p>
                    </div>
                </div>
            </section>

            <section className="max-w-3xl mx-auto mb-20 text-center">
                <h2 className="text-2xl font-semibold mb-6 tracking-tight">What We Offer</h2>
                <p className="text-gray-400 mb-6">
                    Whether you need a custom AI solution, data platform, or innovative tech to support your business,
                    we can help make it happen. Explore how our capabilities can align with your goals.
                </p>
                <div className="flex flex-col items-start space-y-3 max-w-sm mx-auto">
                    <div className="flex items-center gap-3">
                        <CheckCircle className="text-teal-400 w-5 h-5" />
                        <span className="text-gray-300">AI-powered insights</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle className="text-teal-400 w-5 h-5" />
                        <span className="text-gray-300">Modern web and mobile solutions</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle className="text-teal-400 w-5 h-5" />
                        <span className="text-gray-300">Prototyping and MVP development</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle className="text-teal-400 w-5 h-5" />
                        <span className="text-gray-300">Integration with your existing systems</span>
                    </div>
                </div>
            </section>
        </div>
    );
}