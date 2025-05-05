import { BrainCircuit, ShieldCheck, LayoutGrid } from 'lucide-react';
import { TeamCard, TeamCardMobile } from '@/components/TeamCard';
import { teamMembers } from '@/data/team';

export default function About() {
    return (
        <main className="text-white max-w-6xl mx-auto">
            {/* Hero Section */}
            <section className="py-24 h-screen px-6 text-center bg-[url('/img/logo.png')] bg-cover bg-center -mx-4">
                <h2 className='text-4xl md:text-5xl font-medium tracking-tighter'> Powering AI-Driven Innovation Across Industries</h2>
                <p className='text-white/70 md:text-lg tracking-tight mt-5 max-w-xl mx-auto'> PT. Kognivex Digital Inovasi, under the Cognir AI brand, delivers transformative solutions using Artificial Intelligence, IoT, and advanced data processing technologies.</p>

            </section>

            {/* The Cognir Story */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-medium mb-6">Our Story</h2>
                    <p className="text-sm md:text-base mb-6">
                        Cognir AI is a brand of PT. Kognivex Digital Inovasi, located in South Sulawesi, Indonesia. We specialize in cutting-edge AI, IoT consulting, data processing, and market research. With a cross-functional team and a focus on intelligent automation, Cognir AI aims to empower organizations with scalable, domain-specific solutions.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 text-left">
                        <div className='border rounded-2xl border-white/20 p-6'>
                            <BrainCircuit className="w-8 h-8 mb-3" strokeWidth={1.5} />
                            <h4 className="text-xl font-medium mb-2">AI-Powered Applications</h4>
                            <p className="text-white/70">
                                From mental health chatbots to facial skin analysis, we harness the power of AI to solve real-world problems.
                            </p>
                        </div>
                        <div className='border rounded-2xl border-white/20 p-6'>
                            <ShieldCheck className="w-8 h-8 mb-3" strokeWidth={1.5} />
                            <h4 className="text-xl font-medium mb-2">Secure and Scalable Systems</h4>
                            <p className="text-white/70">
                                Solutions like fake news detection and log server analysis ensure safety and reliability.
                            </p>
                        </div>
                        <div className='border rounded-2xl border-white/20 p-6'>
                            <LayoutGrid className="w-8 h-8 mb-3" strokeWidth={1.5} />
                            <h4 className="text-xl font-medium mb-2">Cross-Domain Expertise</h4>
                            <p className="text-white/70">
                                We operate across sectors including healthcare, e-commerce, HR, manufacturing, and transportation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-medium mb-12">Meet the Cognir AI Team</h2>
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> */}
                    <div className='hidden md:flex flex-wrap justify-center gap-4'>
                        {teamMembers.map((member, index) => (
                            <TeamCard key={index} name={member.name} role={member.role} photoUrl={member.photoUrl} socials={member.socials} />
                        ))}


                    </div>

                    <div className='grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3 gap-4 md:hidden'>
                        {teamMembers.map((member, index) => (
                            <TeamCardMobile key={index} name={member.name} role={member.role} photoUrl={member.photoUrl} socials={member.socials} />
                        ))}
                    </div>


                </div>
            </section>
        </main>
    )
}