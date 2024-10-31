import SocialIcons from "./SocialIcons"

const ContactSection = () => {
    return (
        <section>
            <h2 className="text-2xl font-bold mt-10">Let's Get in Touch</h2>
            <div className="mt-4 md:flex md:gap-24">
                <p className="text-base">Feel free to reach out if you're interested with working with me. You can contact me via email at <a href="mailto:ramos27leonard@gmail.com" className="text-green hover:text-dark-green transition-colors font-bold">ramos27leonard@gmail.com</a>.</p>
                <div className="max-w-fit mt-4 md:mt-0">
                    <SocialIcons />
                </div>
            </div>
        </section>
    )
}

export default ContactSection