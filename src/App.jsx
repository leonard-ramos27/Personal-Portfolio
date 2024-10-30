import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
import ProjectsSection from "./components/ProjectsSection"

const projects = [
  { 
    id: 1,
    title: "Multi-Step Form",
    photo: "Multi-Step-Form.png",
    tools: ["React", "Bootstrap", "Typescript"],
    desc: "A sign-up form with multiple steps that lets users select a plan and add-ons and provides a summary of their selections at the end.",
    frontendmentor: true,
    challengelink: "https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ",
    site: "https://leonard-ramos27.github.io/Multi-Step-Form/",
    code: "https://github.com/leonard-ramos27/Multi-Step-Form.git",
    gridRow: "grid-row-md",
  },
  { 
    id: 2,
    title: "Interactive Comments Section",
    photo: "Interactive-Comments-Section.png",
    tools: ["React", "Bootstrap"],
    desc: "A comment section that lets users add, edit and delete comments as well as upvote and downvote other comments.",
    frontendmentor: true,
    challengelink: "https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9",
    site: "https://leonard-ramos27.github.io/Interactive-Comments-Section-using-ReactJS/",
    code: "https://github.com/leonard-ramos27/Interactive-Comments-Section-using-ReactJS.git",
    gridRow: "grid-row-xl",
  },
  { 
    id: 3,
    title: "Advice Generator App",
    photo: "Advice-Generator-App.png",
    tools: ["React", "Tailwind"],
    desc: "An app that connects to an API to display a random advice on each click.",
    frontendmentor: true,
    challengelink: "https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db",
    site: "https://leonard-ramos27.github.io/Advice-Generator-App/",
    code: "https://github.com/leonard-ramos27/Advice-Generator-App.git",
    gridRow: "grid-row-xs",
  },
  { 
    id: 4,
    title: "Shortly Landing Page",
    photo: "Shortly-Landing-Page-mini.png",
    tools: ["HTML", "CSS", "Javascript"],
    desc: "A landing page that connects to an API to let users create a shortened version of any link.",
    frontendmentor: true,
    challengelink: "https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G",
    site: "https://leonard-ramos27.github.io/URL-Shortening-API-Landing-Page/",
    code: "https://github.com/leonard-ramos27/URL-Shortening-API-Landing-Page.git",
    gridRow: "grid-row-lg",
  },
  { 
    id: 5,
    title: "E-commerce Product Page",
    photo: "Ecommerce-Product-Page.png",
    tools: ["JQuery", "Bootstrap"],
    desc: "A page that displays details of a product and lets users add and remove the item in a cart.",
    frontendmentor: true,
    challengelink: "https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6",
    site: "https://leonard-ramos27.github.io/Ecommerce-Product-Page/",
    code: "https://github.com/leonard-ramos27/Ecommerce-Product-Page.git",
    gridRow: "grid-row-sm",
  },
]

function App() {
  return (
    <main className="max-w-[710px] mx-6 md:mx-auto my-12 md:mt-16">
      <AboutSection />
      <hr className="border-slate-300"/>
      <ProjectsSection projects={projects}/>
      <hr className="border-slate-300"/>
      <ContactSection />
    </main>
  )
}

export default App
