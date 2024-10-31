import SocialIcons from "./SocialIcons"
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiJquery, SiDjango, SiReact, SiTailwindcss } from "react-icons/si";

const getProfilePicture = (url) => {
    return new URL(`../assets/${url}`, import.meta.url).href
}

const AboutSection = () => {
    return (
        <section>
            <div className="flex flex-wrap justify-between items-center">
            <div className="tooltip">
                <img 
                src={getProfilePicture("profile-photo.jpg")} 
                alt="My profile photo"
                className="img-profile transition-all" />
                <span 
                className="tooltip-text py-1 px-2 text-xs rounded-full transition-opacity" 
                role="tooltip">
                    That's me!
                </span>
            </div>
            <div className="h-fit">
                <SocialIcons />
            </div>
            </div>
            <div className="mt-12 mb-16">
                <p className="mb-3">Kumusta! 👋🏼</p>
                <h1 className="mb-3">I'm <strong>Leonard Ramos</strong> - a <strong>Frontend Web Developer</strong> from the Philippines.</h1>
                <p className="mb-3">I specialize in converting web designs into responsive, fully working websites or web apps. With over a year of experience with using libraries like <span className="tool-icon bootstrap"><SiBootstrap /> Bootstrap</span>, <span className="tool-icon jquery"><SiJquery /> JQuery</span> and web frameworks like <span className="tool-icon django"><SiDjango /> Django</span> to build dynamic user interfaces. I’m also committed to continuous learning and currently expanding my skillsets with frameworks like <span className="tool-icon react"><SiReact /> React</span> and <span className="tool-icon tailwind"><SiTailwindcss /> Tailwind</span> to build an even more interactive and seamless digital experience.</p>
            </div>
        </section>
    )
}

export default AboutSection