import Button from "@/components/Button";

const Address = () => {
    return (
        <iframe
            width="100%"
            height="100%"
            className="absolute inset-0 rounded-lg"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3595.8224975580497!2d119.45243499999998!3d-5.181685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMTAnNTQuMSJTIDExOcKwMjcnMDguOCJF!5e1!3m2!1sen!2sid!4v1745681236901!5m2!1sen!2sid"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        />
    )
}


const Form = () => {
    return (
        <div className="w-full border p-2.5 rounded-lg border-white/20">
            <div className="bg-white/5 flex flex-col rounded-lg md:ml-auto p-8 mt-8 md:mt-0 text-white">
                <h2 className="text-lg mb-1 font-semibold title-font">Get in Touch</h2>
                <p className="leading-relaxed mb-5 font-light">Discuss Cognir Enterprise with our experts</p>
                <div className="relative mb-4">
                    <label htmlFor="name" className="leading-7 text-sm">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-zinc-800 rounded focus-visible:ring-neutral-600 focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-zinc-800 rounded focus-visible:ring-neutral-600 focus:ring-2 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="message" className="leading-7 text-sm">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full bg-zinc-800 rounded focus-visible:ring-neutral-600 focus:ring-2 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                </div>
                <Button>
                    Submit
                </Button>
            </div>
        </div>
    )
}

const ContactForm = () => {
    return (
        <section className="text-gray-600 mx-auto max-w-6xl relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap gap-4 flex-wrap-reverse">
                <div className="w-full bg-white/5 rounded-lg border-white/20 border p-10 flex items-end justify-start relative">
                    <Address />
                    <div className="bg-zinc-800 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1 text-gray-400">Jl. karunrung raya V, Karunrung, Rappocini, 90222
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                            <a className="text-blue-500 leading-relaxed">admin@cognir.ai</a>
                            <h2 className="font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed text-gray-400">0852-9960-2653</p>
                        </div>
                    </div>
                </div>
                <Form />
            </div>
        </section>
    );
};

export default ContactForm;