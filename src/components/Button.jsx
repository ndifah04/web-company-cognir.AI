const Button = ({ children }) => {
    return (
        <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-br cursor-pointer from-[#00d4ff] to-[#000080] shadow-[0px_0px_12px_#0077ff]'>
            <div className='absolute inset-0'>
                <div className='rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                <div className='rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]'></div>
                <div className='absolute inset-0 shadow-[0_0_10px_rgba(0,119,255,0.7)_inset] rounded-lg'></div>
            </div>
            <span className='relative z-10'>{children}</span>
        </button>
    )
}

export default Button