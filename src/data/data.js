import css from '../assets/css.svg'
import tailwind from '../assets/tailwind.svg'
import html from '../assets/html.svg'
import react from '../assets/react.svg'
import javascript from '../assets/javascript.svg'
import firebase from '../assets/firebase.svg'
import github from '../assets/github.svg'
import { FaDatabase, FaPaintBrush, FaServer  } from "react-icons/fa";
import { TbDeviceMobileHeart } from "react-icons/tb";

export const skills = [
    {
        id: 1,
        imgUrl: css,
        title: "CSS",
        progress: 80
    },
    {
        id: 2,
        imgUrl: tailwind,
        title: "Tailwind CSS",
        progress: 45
    },
    {
        id: 3,
        imgUrl: html,
        title: "HTML",
        progress: 90
    },
    {
        id: 4,
        imgUrl: javascript,
        title: "JavaScript",
        progress: 70
    },
    {
        id: 5,
        imgUrl: react,
        title: "React Framework",
        progress: 40

    },
    {
        id: 6,
        imgUrl: github,
        title: "GitHub",
        progress: 90
    },
    {
        id: 7,
        imgUrl: firebase,
        title: "Firebase",
        progress: 60
    }
]

export const services = [
    {
        id: 1,
        icon: FaPaintBrush,
        title: "Front Development",
        description: "I specialize in front-end development using HTML, CSS, and JavaScript to bring designs to life. My expertise in frameworks like React and Angular ensures that every project is dynamic, responsive, and user-friendly."
    },
    {
        id: 2,
        icon: FaServer,
        title: "Back Development",
        description: "I specialize in back-end development using technologies such as ASP.NET, .NET Core, and SQL databases. I focus on building scalable, secure, and efficient server-side logic, ensuring your applications perform reliably."
    },
    {
        id: 3,
        icon: TbDeviceMobileHeart,
        title: "Responsive Design",
        description: " I develop websites that look and function flawlessly on any device, be it a smartphone, tablet, or desktop. Utilizing the latest in CSS frameworks and media queries, I ensure that your website is aesthetically pleasing and also adaptable to various screen sizes"
    },
    {
        id: 4,
        icon: FaDatabase,
        title: "Database Management",
        description: "With proficiency in SQL Server, MySQL, and other database technologies, I design, implement, and maintain databases that support your application's needs. Focusing on ensuring data integrity, performance optimization, and seamless integration with your front-end"
    }
]