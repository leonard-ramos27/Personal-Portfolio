import SocialIcons from "./SocialIcons";
import SlideIn from "./SlideIn";

const ContactSection = () => {
    return (
        <section className="mb-16">
            <SlideIn 
                direction="left"
                delay={0.3}
            >
                <hr className="border-slate-300"/>
                <h2 className="text-2xl font-bold mt-16">Let's Get in Touch</h2>
                <div className="mt-4 md:flex md:gap-24">
                    <p className="text-base">Feel free to reach out if you're interested with working with me. You can contact me via email at <a href="mailto:ramos27leonard@gmail.com" className="text-green hover:text-dark-green transition-colors font-bold">ramos27leonard@gmail.com</a>.</p>
                    <div className="max-w-fit mt-4 md:mt-0">
                        <SocialIcons />
                    </div>
                </div>
            </SlideIn>
        </section>
    )
}

export default ContactSection