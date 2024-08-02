import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
import ProjectsSection from "./components/ProjectsSection"

const projects = [
  { 
    id: 1,
    title: "Multi-Step Sign Up Form",
    photo: "Multi-Step-Form.png",
    tools: ["React", "Bootstrap", "Typescript"],
    site: "https://leonard-ramos27.github.io/Multi-Step-Form/",
    code: "https://github.com/leonard-ramos27/Multi-Step-Form.git",
    gridRow: "grid-row-md",
  },
  { 
    id: 2,
    title: "Interactive Comments Section",
    photo: "Interactive-Comments-Section.png",
    tools: ["React", "Bootstrap"],
    site: "https://leonard-ramos27.github.io/Interactive-Comments-Section-using-ReactJS/",
    code: "https://github.com/leonard-ramos27/Interactive-Comments-Section-using-ReactJS.git",
    gridRow: "grid-row-lg",
  },
  { 
    id: 3,
    title: "Advice Generator App",
    photo: "Advice-Generator-App.png",
    tools: ["React", "Tailwind"],
    site: "https://leonard-ramos27.github.io/Advice-Generator-App/",
    code: "https://github.com/leonard-ramos27/Advice-Generator-App.git",
    gridRow: "grid-row-xs",
  },
  { 
    id: 4,
    title: "Shortly Landing Page",
    photo: "Shortly-Landing-Page-mini.png",
    tools: ["HTML", "CSS", "Javascript"],
    site: "https://leonard-ramos27.github.io/URL-Shortening-API-Landing-Page/",
    code: "https://github.com/leonard-ramos27/URL-Shortening-API-Landing-Page.git",
    gridRow: "grid-row-lg",
  },
  { 
    id: 5,
    title: "Ecommerce Product Page",
    photo: "Ecommerce-Product-Page.png",
    tools: ["JQuery", "Bootstrap"],
    site: "https://leonard-ramos27.github.io/Ecommerce-Product-Page/",
    code: "https://github.com/leonard-ramos27/Ecommerce-Product-Page.git",
    gridRow: "grid-row-md",
  },
]

function App() {
  return (
    <main className="max-w-[710px] mx-6 md:mx-auto my-12 md:mt-20">
      <AboutSection />
      <hr className="border-slate-300"/>
      <ProjectsSection projects={projects}/>
      <hr className="border-slate-300"/>
      <ContactSection />
    </main>
  )
}

export default App
