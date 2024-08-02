import { SiFrontendmentor, SiGithub, SiLinkedin } from "react-icons/si";

const SocialIcons = () => {
    return (
        <ul className="flex justify-between items-center gap-[16px]">
            <li>
            <a 
                href="https://www.linkedin.com/in/leonard-ramos27" 
                target="_blank"
                className="social-icon transition-all tooltip linkedin" 
                aria-label="LinkedIn Page">
                <SiLinkedin />
                <span 
                className="tooltip-text py-1 px-2 text-xs rounded-full transition-opacity" 
                role="tooltip">
                    LinkedIn
                </span>
            </a>
            </li>
            <li>
            <a 
                href="https://github.com/leonard-ramos27" 
                target="_blank"
                className="social-icon transition-all tooltip github"
                aria-label="Github Page">
                <SiGithub />
                <span 
                className="tooltip-text py-1 px-2 text-xs rounded-full transition-opacity" 
                role="tooltip">
                    Github
                </span>
            </a>
            </li>
            <li>
            <a 
                href="https://www.frontendmentor.io/profile/leonard-ramos27" 
                target="_blank"
                className="social-icon transition-all tooltip frontendmentor"
                aria-label="Frontend Mentor Page">
                <SiFrontendmentor />
                <span 
                className="tooltip-text py-1 px-2 text-xs rounded-full transition-opacity" 
                role="tooltip">
                    Frontend Mentor
                </span>
            </a>
            </li>
        </ul>
    )
}

export default SocialIcons