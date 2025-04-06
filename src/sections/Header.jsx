'use client'
// import MenuIcon from '@/assets/icon-menu.svg';
import Button from '@/components/Button';

export const Header = () => {
    return (
        <header className='py-4 border-b border-white/15 md:border-none sticky top-0 z-10 max-md:backdrop-blur'>
            <div className="container mx-auto">
                <div className='flex justify-between items-center md:border md:border-white/15 md:p-2.5 md:rounded-xl max-w-2xl mx-auto md:backdrop-blur'>
                    <div className=''>
                        <div className='border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15'>
                            <img src="/img/cognir-logo.png" alt="logo cognir" className='h-8 w-8' />
                        </div>
                    </div>

                    <div className='max-md:hidden'>
                        <nav className='flex gap-8 text-sm'>
                            <a href="#" className='text-white/70 hover:text-white transition'>Platform</a>
                            <a href="#" className='text-white/70 hover:text-white transition'>Solution</a>
                            <a href="#" className='text-white/70 hover:text-white transition'>Customers</a>
                            <a href="#" className='text-white/70 hover:text-white transition'>Resource</a>
                        </nav>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <Button>Join Waitlist</Button>
                        {/* <MenuIcon className='md:hidden' /> */}
                    </div>
                </div>
            </div>
        </header>
    );
};