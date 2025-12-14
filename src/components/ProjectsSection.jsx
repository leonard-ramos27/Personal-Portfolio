import ProjectCard from "./ProjectCard";
import SlideIn from "./SlideIn";

const ProjectsSection = ({projects}) => {
    return (
        <section id="projects-section">
            <SlideIn
                direction="left"
                delay={0.2}
            >
                <hr className="border-slate-300"/>
                <h2 className="text-2xl font-bold mt-16">Sample Works</h2>
            </SlideIn>
            <div className="projects-grid mt-10">
            {projects.map(project => (
                <ProjectCard project={project} key={project.id} />
            ))}
            </div>
        </section>
    )
}

export default ProjectsSection