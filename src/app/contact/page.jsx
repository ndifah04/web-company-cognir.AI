import ContactForm from "@/sections/Contact"
import { UserPlus, InstagramIcon, TwitterIcon, LinkedinIcon, FacebookIcon, YoutubeIcon } from "lucide-react"
import Link from "next/link"


export default function Contact() {
    return (

        <>
            <h2 className='text-5xl md:text-6xl text-center font-medium tracking-tighter mt-14'>Contact Us</h2>
            <p className='text-white/70 text-lg md:text-xl text-center tracking-tight mt-5 max-w-xl mx-auto'>We are happy to answer your questions and help you deliver computer vision.</p>
            <ContactForm />

            <div className='mt-3 border border-white/15 rounded-xl p-2.5 mx-auto max-w-6xl mb-14'>

                <div className="border border-white/20 rounded-lg p-8 bg-white/5">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
                            <UserPlus />
                        </div>
                        <h3 className="font-medium text-xl">Follow Us</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="text-white/40 text-lg order-2 md:order-1 h-full">
                            <div className="flex justify-between mb-8">
                                <Link href="https://www.instagram.com/CognirAi/#" className="h-20 w-20 bg-white/5 transition-all hover:text-white hover:border hover:border-white rounded-xl flex flex-col justify-center items-center gap-2" target="blank">
                                    <InstagramIcon size={32} strokeWidth={1} />
                                    <p className="font-light tracking-wider text-xs">Instagram</p>
                                </Link>
                                <Link href="https://x.com/CognirAi" className="h-20 w-20 bg-white/5 transition-all hover:text-white hover:border hover:border-white rounded-xl flex flex-col justify-center items-center gap-2" target="blank">
                                    <TwitterIcon size={32} strokeWidth={1} />
                                    <p className="font-light text-xs">Twitter</p>
                                </Link>
                                <Link href="https://www.linkedin.com/company/cognir-ai/" className="h-20 w-20 bg-white/5 transition-all hover:text-white hover:border hover:border-white rounded-xl flex flex-col justify-center items-center gap-2" target="blank">
                                    <LinkedinIcon size={32} strokeWidth={1} />
                                    <p className="font-light tracking-wider text-xs">LinkedIn</p>
                                </Link>
                                <Link href="https://web.facebook.com/profile.php?id=61575511954285" className="h-20 w-20 bg-white/5 transition-all hover:text-white hover:border hover:border-white rounded-xl flex flex-col justify-center items-center gap-2" target="blank">
                                    <FacebookIcon size={32} strokeWidth={1} />
                                    <p className="font-light tracking-wider text-xs">Facebook</p>
                                </Link>
                                <Link href="https://www.youtube.com/@CognirAI" className="h-20 w-20 bg-white/5 transition-all hover:text-white hover:border hover:border-white rounded-xl flex flex-col justify-center items-center gap-2" target="blank">
                                    <YoutubeIcon size={32} strokeWidth={1} />
                                    <p className="font-light tracking-wider text-xs">Youtube</p>
                                </Link>
                            </div>

                            <div className="w-full rounded-lg border border-white/15 p-8">
                                <h1 className="text-3xl font-medium mb-8">What's next?</h1>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 border-2 border-white/20 rounded-full w-8 h-8 flex items-center justify-center text-whiborder-white/20 font-medium mr-4 mt-1">1</div>
                                        <div>
                                            <h2 className="text-xl font-semibold">Schedule your call</h2>
                                            <p className="text-white/70 font-light mt-2">
                                                Fill out our form, and a Cognir Specialist will reach out within 24h to pick a convenient time for our initial chat.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 border-2 border-white/20 rounded-full w-8 h-8 flex items-center justify-center text-whiborder-white/20 font-medium mr-4 mt-1">2</div>
                                        <div>
                                            <h2 className="text-xl font-semibold">Tell us about yourself</h2>
                                            <p className="text-white/70 font-light mt-2">
                                                We'll dive into your specific requirements and see how Cognir can best serve your needs.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 border-2 border-white/20 rounded-full w-8 h-8 flex items-center justify-center text-whiborder-white/20 font-semibold mr-4 mt-1">3</div>
                                        <div>
                                            <h2 className="text-xl font-semibold">Demo time!</h2>
                                            <p className="text-white/70 font-light mt-2">
                                                Get a demo tailored just for your project with your very own Cognir Specialist.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="order-1 md:order-2">
                            <img src="/img/hand-glass.png" alt="hand" className="w-2xs mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}