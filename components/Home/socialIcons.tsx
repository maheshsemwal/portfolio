import { AnimatedTooltip } from "../ui/animated-tooltip";

export default function SocialIcons(){
    const socials = [
        {
          id: 1,
          name: "Github",
          designation: "@maheshsemwal",
          image: "https://cdn-icons-png.freepik.com/256/5968/5968866.png?ga=GA1.1.526229801.1740067320",
          link: "https://github.com/maheshsemwal/"
        },
        {
          id: 2,
          name: "twitter",
          designation: "@maheshsemwal04",
          image:
            "https://img.icons8.com/?size=100&id=ClbD5JTFM7FA&format=png&color=000000",
            link: "https://x.com/maheshsemwal04"
        },
        {
          id: 3,
          name: "Linkedin",
          designation: "@maheshsemwal",
          image:
            "https://img.icons8.com/?size=100&id=13930&format=png&color=000000",
            link: "https://www.linkedin.com/in/mahesh-semwal-b28b46253/"
        }
      ];


      return <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={socials} />
    </div>
       
}