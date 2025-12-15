import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiJquery, SiTypescript, SiReact, SiTailwindcss, SiNextdotjs, SiShadcnui } from "react-icons/si";
import { FaArrowUpRightFromSquare, FaCode } from "react-icons/fa6";
import SlideIn from "./SlideIn";

const getProjectImage = (name) => {
  return new URL(`../assets/projects/${name}`, import.meta.url).href
}

const toolsIcon = {
  React: <span className="text-react mx-1"><SiReact /></span>,
  Bootstrap: <span className="text-bootstrap mx-1"><SiBootstrap /></span>,
  Typescript: <span className="text-typescript mx-1"><SiTypescript /></span>,
  Tailwind: <span className="text-tailwind mx-1"><SiTailwindcss /></span>,
  JQuery: <span className="text-jquery mx-1"><SiJquery /></span>,
  Javascript: <span className="text-javascript mx-1"><SiJavascript /></span>,
  CSS: <span className="text-css mx-1"><SiCss3 /></span>,
  HTML: <span className="text-html mx-1"><SiHtml5 /></span>,
  Nextjs: <span className="text-nextjs mx-1"><SiNextdotjs /></span>,
  Shadcn: <span className="text-shadcn mx-1"><SiShadcnui /></span>,
}

const ProjectCard = ({project}) => {
  return (
    <SlideIn
      direction="up"
      delay={0.2}
    >
      <div className="md:flex md:flex-row md:justify-between md:items-center md:gap-8">
        <div className="flex-1">
          <img 
          src={getProjectImage(project.photo)} 
          alt="Screenshot for Multi-step Form website"
          className="transition-transform hover:scale-105 rounded shadow-md w-full" />
        </div>
        <div className="flex-1">
          <h3 className="mt-4 mb-1 text-lg font-semibold">{project.title}</h3>
          <div className="flex flex-wrap gap-4 justify-start mb-3">
            <a 
              href={project.site}
              target="_blank"
              className="text-gray hover:text-slate-700 transition-colors text-sm font-medium flex items-center btn-hover-underline btn-visit-site">
              <FaArrowUpRightFromSquare />
              <span className="ml-2">Visit Site</span>
            </a>
            <a 
              href={project.code}
              target="_blank"
              className="text-gray hover:text-slate-700 transition-colors text-sm font-medium flex items-center btn-hover-underline">
              <FaCode className="mb-1"/>
              <span className="ml-1">View Code</span>
            </a>
          </div>
          {project.desc && 
            <p className="text-sm mb-3">
              {project.desc}
            </p>
          }
          <p className="text-sm">
            <span className="block mb-1">Built using:</span>
            <span className="-ml-1 flex flex-row flex-wrap justify-start items-start gap-1">
              {project.tools.map((tool, index) => (  
                <span key={index}>
                  <span className="whitespace-nowrap tools-icon">
                    {toolsIcon[tool]}
                    {tool}
                    {index+2 < project.tools.length && ','}
                  </span>
                  {index+2 == project.tools.length && <span className="px-1">and</span>}
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>
    </SlideIn>
  )
}

export default ProjectCard