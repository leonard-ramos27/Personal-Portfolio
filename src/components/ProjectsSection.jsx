import ProjectCard from "./ProjectCard";
import SlideIn from "./SlideIn";

const ProjectsSection = ({projects}) => {
    return (
        <section id="projects-section" >
            <SlideIn
                direction="left"
                delay={0.2}
            >
                <hr className="border-slate-300"/>
                <h2 className="text-2xl font-bold mt-20">Sample Works</h2>
            </SlideIn>
            <div className="mt-10 flex flex-col justify-between items-start gap-10 mb-20">
                {projects.map(project => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection