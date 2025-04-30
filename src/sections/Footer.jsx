import { InstagramIcon, TwitterIcon, LinkedinIcon, FacebookIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";


export const Footer = () => {
    return (
        <footer className="py-5 border-t border-white/15">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8  max-w-6xl mx-auto">
                    <div className='flex items-center lg:flex-1 gap-2 lg:justify-start'>
                        <img src="/img/cognir-logo.png" alt="logo cognir" className='h-6 w-6' />
                        <h3 className='font-medium'>Cognir AI Official Website</h3>
                    </div>
                    <nav className='flex flex-col lg:flex-row lg:flex-1 items-start lg:justify-center lg:items-center gap-5 lg:gap-7 text-xs md:text-sm text-white/70 mt-5 lg:mt-0'>
                        <a href="#" className='hover:text-white transition'>Platform</a>
                        <a href="#" className='hover:text-white transition'>Solution</a>
                        <a href="#" className='hover:text-white transition'>Customers</a>
                        <a href="#" className='hover:text-white transition'>Blog</a>
                        <a href="#" className='hover:text-white transition'>Changelog</a>
                    </nav>
                    <div className='flex gap-5 items-center mt-5 lg:mt-0 text-white/40 lg:flex-1 lg:justify-end'>
                        <Link href='https://www.instagram.com/CognirAi/#' className="hover:text-white" target="blank">
                            <InstagramIcon strokeWidth={1.5} />
                        </Link>
                        <Link href='https://x.com/CognirAi' className="hover:text-white" target="blank">
                            <TwitterIcon strokeWidth={1.5} />
                        </Link >
                        <Link href='https://www.linkedin.com/company/cognir-ai/' className="hover:text-white" target="blank">
                            <LinkedinIcon strokeWidth={1.5} />
                        </Link>
                        <Link href='https://web.facebook.com/profile.php?id=61575511954285' className="hover:text-white" target="blank">
                            <FacebookIcon strokeWidth={1.5} />
                        </Link>
                        <Link href='https://www.youtube.com/@CognirAI' className="hover:text-white" target="blank">
                            <YoutubeIcon strokeWidth={1.5} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};