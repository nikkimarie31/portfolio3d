import {
    mobile,
    backend,
    creator,
    craig,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    tina,
    figma,
    docker,
    download,
    nucamp,
    sas,
    harvard,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets/assets";


export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Full Stack Web Developer",
        company_name: "nucamp",
        icon: nucamp,
        iconBg: "#383E56",
        date: "March 2023 - August 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Remodel Merchandiser",
        company_name: "sas",
        icon: sas,
        iconBg: "black",
        date: "Feb 2020 - Current",
        points: [
            "Following plans and layouts and making sure they meet our Managers standards.",
            "Collaborating with warehouse workers and following client specifications. Making sure that all needs were addressed and met on all ends",
            "Working together as a team or independently in a productive and professional manner",
            "Recieving constructive criticism in a healthy way and learning from it and being able to adjust where applicable.",
        ],
    },
    {
        title: "CS50 Introduction into computer science",
        company_name: "harvard",
        icon: harvard,
        iconBg: "#383E56",
        date: "Aug 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Following an Online course and being able to have time managment and finsih the course within a timely manner with passing grades.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Owner",
        company_name: "In My Opinion",
        icon: download,
        iconBg: "#E6DEDD",
        date: "Jan 2010 - Feb. 2020",
        points: [
            "Time management: Displaying good time managment skills.",
            "Conflict resolution: Defusing intense situations and in the end favorable to both parties.",
            "Constant drive to keep my business successful, the only reason i stopped was to switch careers.",
            "Developed strong communication skills.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I wanted to have an online presence that brought me more customers and put my company out there. I contacted Nicole through a friend and even though we just started the design and a little bit of coding, she has impressed me. Were going through it at a good pace and she is meeting all my expectations.",
        name: "Craig",
        designation: "Owner",
        company: "Busy Bee Construction",
        image: craig,
    },
    {
        testimonial:
            "Nicole has been working side by side with me to help me develop some software to meet my growing companies needs. She communicates with us well and is very efficent. I cant wait to see how far she gets with her new career.",
        name: "Tina",
        designation: "Owner",
        company: "A+++ house cleaning",
        image: tina,
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };