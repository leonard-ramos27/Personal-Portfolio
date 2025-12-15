import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
import ProjectsSection from "./components/ProjectsSection"

const projects = [
  { 
    id: 1,
    title: "Weather App",
    photo: "Weather-App.png",
    tools: ["Nextjs", "React", "Tailwind", "Typescript", "Shadcn"],
    desc: "A responsive weather application featuring search functionality, unit conversion, and detailed forecasts from the Open-Meteo API.",
    frontendmentor: true,
    challengelink: "https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49",
    site: "https://weather-now-app-nextjs.netlify.app/",
    code: "https://github.com/leonard-ramos27/weather-app-nextjs.git",
    gridRow: "grid-row-md",
  },
  { 
    id: 2,
    title: "Translate App",
    photo: "Translate-App.png",
    tools: ["React", "Tailwind", "Typescript"],
    desc: "A responsive translation app that connects to a third-party API to translate text between different languages and uses debouncing for real-time update.",
    frontendmentor: false,
    challengelink: "",
    site: "https://translated-io-react.netlify.app/",
    code: "https://github.com/leonard-ramos27/Translate-App-React.git",
    gridRow: "grid-row-md",
  },
  { 
    id: 3,
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
    id: 4,
    title: "Interactive Comments Section",
    photo: "Interactive-Comments-Section.png",
    tools: ["React", "Bootstrap"],
    desc: "A comment section that lets users add, edit and delete comments as well as upvote and downvote other comments.",
    frontendmentor: true,
    challengelink: "https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9",
    site: "https://leonard-ramos27.github.io/Interactive-Comments-Section-using-ReactJS/",
    code: "https://github.com/leonard-ramos27/Interactive-Comments-Section-using-ReactJS.git",
    gridRow: "grid-row-xl",
  }
]

function App() {
  return (
    <main className="lg:max-w-[800px] mx-6 md:mx-10 lg:mx-auto">
      <AboutSection />
      <ProjectsSection projects={projects}/>
      <ContactSection />
    </main>
  )
}

export default App
