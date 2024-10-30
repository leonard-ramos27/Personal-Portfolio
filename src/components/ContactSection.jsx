import SocialIcons from "./SocialIcons"

const ContactSection = () => {
    return (
        <section>
            <h2 className="text-2xl font-bold mt-10">Get in touch</h2>
            <div className="mt-4 md:flex md:gap-24">
                <p>If you're interested to work with me, please feel free to reach out. You can contact me via email at <a href="mailto:ramos27leonard@gmail.com" className="text-green hover:text-dark-green transition-colors font-semibold text-base">ramos27leonard@gmail.com</a>.</p>
                <div className="max-w-fit mt-4 md:mt-0">
                    <SocialIcons />
                </div>
            </div>
        </section>
    )
}

export default ContactSection