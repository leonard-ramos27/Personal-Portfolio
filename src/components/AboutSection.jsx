import SocialIcons from "./SocialIcons"
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiJquery, SiDjango, SiReact, SiTailwindcss } from "react-icons/si";

const AboutSection = () => {
    return (
        <section className="mb-10">
            <div className="flex flex-wrap justify-between items-center">
            <div className="tooltip">
                <img 
                src="/src/assets/profile-photo.jpg" 
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
            <div className="mt-10">
                <p className="mb-3">Kumusta! 👋🏼</p>
                <h1 className="mb-3">I'm <strong>Leonard Ramos</strong> - a <strong>Front End Web Developer</strong> from the Philippines.</h1>
                <p className="mb-3">I specialize in turning web designs into fully functional and responsive websites or web applications. My skillset includes a deep understanding of <span className="tool-icon html"><SiHtml5/> HTML</span>,<span className="tool-icon css"><SiCss3 /> CSS</span>, and <span className="tool-icon javascript"><SiJavascript /> Javascript</span>, as well as proficiency with using libraries like <span className="tool-icon bootstrap"><SiBootstrap /> Bootstrap</span>, <span className="tool-icon jquery"><SiJquery /> JQuery</span> as well as <span className="tool-icon django"><SiDjango /> Django</span>.</p>
                <p className="mb-3">My journey began in 2022 when I started learning about Frontend Web Development while I was working in the BPO industry. Fortunately, my efforts paid off when I was able to move into a frontend developer role a year after. I’m committed to continuous learning and currently expanding my knowledge with frameworks like <span className="tool-icon react"><SiReact /> React</span> and <span className="tool-icon tailwind"><SiTailwindcss /> Tailwind</span>. </p>
            </div>
        </section>
    )
}

export default AboutSection