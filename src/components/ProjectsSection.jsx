import ProjectCard from "./ProjectCard";

const ProjectsSection = ({projects}) => {
    return (
        <section>
            <h2 className="text-2xl font-bold mt-10">Projects</h2>
            <div className="projects-grid mt-10">
            {projects.map(project => {
                return <ProjectCard project={project} key={project.id} />
            })}
            </div>
        </section>
    )
}

export default ProjectsSection