import { ThreeDMarquee } from "@/components/marquee";
import { ChartColumnBigIcon, ChartPieIcon, FileTextIcon, FolderIcon, HashIcon, HeartPulseIcon, ScaleIcon, StickerIcon, TagIcon } from "lucide-react";
import Button from "@/components/Button";
import Link from "next/link";

export default function Platform() {
    const images = [
        "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
        "https://assets.aceternity.com/animated-modal.png",
        "https://assets.aceternity.com/animated-testimonials.webp",
        "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
        "https://assets.aceternity.com/github-globe.png",
        "https://assets.aceternity.com/glare-card.png",
        "https://assets.aceternity.com/layout-grid.png",
        "https://assets.aceternity.com/flip-text.png",
        "https://assets.aceternity.com/hero-highlight.png",
        "https://assets.aceternity.com/carousel.webp",
        "https://assets.aceternity.com/placeholders-and-vanish-input.png",
        "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
        "https://assets.aceternity.com/signup-form.png",
        "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
        "https://assets.aceternity.com/spotlight-new.webp",
        "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
        "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
        "https://assets.aceternity.com/tabs.png",
        "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
        "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
        "https://assets.aceternity.com/glowing-effect.webp",
        "https://assets.aceternity.com/hover-border-gradient.png",
        "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
        "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
        "https://assets.aceternity.com/macbook-scroll.png",
        "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
        "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
        "https://assets.aceternity.com/multi-step-loader.png",
        "https://assets.aceternity.com/vortex.png",
        "https://assets.aceternity.com/wobble-card.png",
        "https://ik.imagekit.io/nurman/pexels-flambo-388007-1112080.jpg?updatedAt=1745350279678",
    ];

    return (
        <>
            <div id="feature"
                className="relative mx-auto -mt-20 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-3">
                <h2
                    className="relative z-20 mx-auto max-w-6xl text-2xl font-medium text-balance text-white md:text-4xl lg:text-6xl">
                    One Architecture. Any AI Workload. Unmatched Efficiency.
                </h2>
                <div className="relative z-20 mx-auto max-w-6xl w-full py-8 text-sm text-neutral-200 md:text-base">
                    <p className="max-w-2xl">
                        Cognir AI’s unified platform streamlines the entire AI lifecycle - from data prep to deployment. Build, optimize, and scale models faster with enterprise-grade security and cost-effective infrastructure
                    </p>
                </div>


                {/* overlay */}
                <div
                    className="absolute pointer-events-none inset-0 z-10 h-full w-full bg-gradient-to-r from-black/95 to-white/10" />
                <ThreeDMarquee
                    className="w-full h-full absolute inset-0"
                    images={images} />
            </div>
            <div className="max-w-6xl mx-auto flex flex-col gap-2 py-4 items-center">
                <h3 className="flex items-center w-full">
                    <span className="flex-grow bg-white/40 rounded h-0.5"></span>
                    <span className="text-white/40 text-md font-light px-6 py-0.5">Cognir Suite</span>
                    <span className="flex-grow bg-white/40 rounded h-0.5"></span>
                </h3>
                <div className="flex gap-6">
                    <div className="h-20 w-20 border border-white/15 text-white/40 rounded-xl flex flex-col justify-center items-center gap-2">
                        <StickerIcon size={32} strokeWidth={1} />
                        <p className="font-medium text-xs">Sentiment</p>
                    </div>
                    <div className="h-20 w-20 border border-white/15 text-white/40 rounded-xl flex flex-col justify-center items-center gap-2">
                        <TagIcon size={32} strokeWidth={1} />
                        <p className="font-medium text-xs">Entities</p>
                    </div>
                    <div className="h-20 w-20 border border-white/15 text-white/40 rounded-xl flex flex-col justify-center items-center gap-2">
                        <HashIcon size={32} strokeWidth={1} />
                        <p className="font-medium text-xs">Topics</p>
                    </div>
                    <div className="h-20 w-20 border border-white/15 text-white/40 rounded-xl flex flex-col justify-center items-center gap-2">
                        <HeartPulseIcon size={32} strokeWidth={1} />
                        <p className="font-medium text-xs">Emotion</p>
                    </div>
                    <div className="h-20 w-20 border border-white/15 text-white/40 rounded-xl flex flex-col justify-center items-center gap-2">
                        <FileTextIcon size={32} strokeWidth={1} />
                        <p className="font-medium text-xs">Summary</p>
                    </div>
                    <div className="h-20 w-20 border border-white/15 text-white/40 rounded-xl flex flex-col justify-center items-center gap-2">
                        <ChartPieIcon size={32} strokeWidth={1} />
                        <p className="font-medium text-xs">Aspect</p>
                    </div>
                    <div className="h-20 w-20 border border-white/15 text-white/40 rounded-xl flex flex-col justify-center items-center gap-2">
                        <ScaleIcon size={32} strokeWidth={1} />
                        <p className="font-medium text-xs">Bias</p>
                    </div>
                    <div className="h-20 w-20 border border-white/15 text-white/40 rounded-xl flex flex-col justify-center items-center gap-2">
                        <FolderIcon size={32} strokeWidth={1} />
                        <p className="font-medium text-xs">Categories</p>
                    </div>
                    <div className="h-20 w-20 border border-white/15 text-white/40 rounded-xl flex flex-col justify-center items-center gap-2">
                        <ChartColumnBigIcon size={32} strokeWidth={1} />
                        <p className="font-medium text-xs">Complexity</p>
                    </div>
                </div>

            </div>
            <div className="max-w-6xl mx-auto flex md:px-24 md:py-20 md:flex-row flex-col items-center" id="tool">
                <div
                    className="lg:flex-grow mt-5 md:mt-0  md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">

                    <h2 className='text-5xl md:text-6xl mb-8 font-medium tracking-tighter'>Text Sentyment Analysys</h2>
                    <p className="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
                        Our tool detects emotions, bias, and key themes in any content - reviews, social media, or surveys. Get actionable metrics like positivity scores, entity tracking, and automatic summaries. Perfect for brands, researchers, and developers."
                    </p>
                    <div className="flex justify-center">
                        <Link href='https://platform.cognir.ai/' target="blank">
                            <Button>
                                Start Exploring
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6 bg-white/5">
                    <img className="object-cover object-center rounded" alt="hero" src="/img/sentymen-screenshot.png" />
                </div>
            </div>

        </>
    );
}


