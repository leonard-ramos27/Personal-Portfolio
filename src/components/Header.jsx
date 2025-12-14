import SocialIcons from "./SocialIcons"

const getProfilePicture = (url) => {
    return new URL(`../assets/${url}`, import.meta.url).href
}

const Header = () => {
    return (
        <div className="flex flex-wrap justify-between items-center">
            <div className="flex flex-row justify-between items-center gap-2">
                <div className="hover:scale-110 transition-transform">
                    <img 
                    src={getProfilePicture("profile-photo.jpg")} 
                    alt="My profile photo"
                    className="img-profile transition-all" />
                </div>
                <div className="flex flex-col justify-center items-start gap-1">
                    <span className=" leading-4 font-semibold text-black">Leonard Ramos</span>
                    <span className=" leading-4 text-sm">Front-end Web Developer</span>
                </div>
            </div>
            <div className="h-fit">
                <SocialIcons />
            </div>
        </div>
    )
}

export default Header