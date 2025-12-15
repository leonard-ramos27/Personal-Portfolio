import { SiBootstrap, SiReact, SiTailwindcss, SiSvelte, SiTypescript, SiNextdotjs, SiDjango, SiRedux, SiSwr, SiJquery, SiShadcnui, SiFigma, SiVite } from "react-icons/si";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import SlideIn from "./SlideIn";
import Bounce from "./Bounce"
import Header from "./Header";

const AboutSection = () => {
    return (
        <section className="min-h-screen pt-16 pb-9 mb-11 flex flex-col justify-center items-center gap-5">
            <SlideIn direction="left" styles="flex-grow flex flex-col justify-between items-stretch gap-16">
                <Header />
                <div className="-mt-4">
                    <h1 className="mb-3 text-black">
                        Kumusta! I'm Leonard from the Philippines 👋🏼
                    </h1>
                    <p className="mb-3">
                        I specialize in building responsive and user-friendly web applications that deliver smooth and engaging experiences. I enjoy transforming ideas and designs into clean, functional user interfaces.
                    </p>
                    <p className="mb-2">Tools and technologies I work with:</p>
                    <div className="flex flex-row flex-wrap justify-start items-start gap-x-4 gap-y-2 mb-2 md:mb-6">
                        <span className="tool-icon-hover react"><SiReact /> React</span>
                        <span className="tool-icon-hover svelte"><SiSvelte /> Svelte</span>
                        <span className="tool-icon-hover typescript"><SiTypescript /> Typescript</span>
                        <span className="tool-icon-hover tailwind"><SiTailwindcss /> Tailwind</span>
                        <span className="tool-icon-hover bootstrap"><SiBootstrap /> Bootstrap</span>
                        <span className="tool-icon-hover nextjs"><SiNextdotjs /> Next.js</span>
                        <span className="tool-icon-hover django"><SiDjango /> Django</span>
                        <span className="tool-icon-hover redux"><SiRedux /> Redux</span>
                        <span className="tool-icon-hover swr"><SiSwr /> SWR</span>
                        <span className="tool-icon-hover jquery"><SiJquery /> jQuery</span>
                        <span className="tool-icon-hover shadcn"><SiShadcnui /> Shadcn-ui</span>
                        <span className="tool-icon-hover vite"><SiVite /> Vite</span>
                        <span className="tool-icon-hover figma"><SiFigma /> Figma</span>
                    </div>
                </div>
                <div>
                    <a href="#projects-section" className="flex flex-col items-center justify-center">
                        <Bounce>
                            <IoArrowDownCircleOutline className="text-[2rem]"/>
                        </Bounce>
                        <div>Scroll down to view some of my work</div>
                    </a>
                </div>
            </SlideIn>
        </section>
    )
}

export default AboutSection