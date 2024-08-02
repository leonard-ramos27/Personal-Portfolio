import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiJquery, SiTypescript, SiReact, SiTailwindcss } from "react-icons/si";
import { FaArrowUpRightFromSquare, FaCode } from "react-icons/fa6";

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
}

const ProjectCard = ({project}) => {
    return (
        <div className={`project-wrapper text-center ${project.gridRow}`}>
            <img 
              src={getProjectImage(project.photo)} 
              alt="Screenshot for Multi-step Form website"
              className="transition-transform hover:scale-105 rounded shadow-md" />
            <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
            <p className="text-sm">Created using {project.tools.map((tool, index) => {  
                return (
                  <span key={index}>
                    <span className="whitespace-nowrap tools-icon">{toolsIcon[tool]}{tool}</span>
                    {index+2 < project.tools.length && ' , '}
                    {index+2 == project.tools.length && ' and '}
                  </span>
                )
            })}</p>
            <div className="flex flex-wrap gap-4 justify-center mt-3">
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
        </div>
    )
}

export default ProjectCard