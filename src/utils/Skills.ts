import { Services } from "@/types/type"
import Image1 from "../../public/images/services/list/serviceList_1.jpg"
import Image2 from "../../public/images/services/list/serviceDisplay2.png"
import Image3 from "../../public/images/services/list/serviceList_3.jpg"
import Image4 from "../../public/images/services/list/serviceList_4.jpg"

const services = [
    {
        title: "Frontend Development",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "react.js",
            "next.js",
            "tailwind",
            "GSAP",
            "Locomotive",
            "Lenis Scroll",
            "git",
        ],
        description: "With frontend, I'm able to combine both my design capabilities with my problem-solving skills, and as I code, I am extensively exercising both simulataneously. I lean more into React frameworks, which allows me to increase web performance, optimize images and media much easier, and improve SEO rankings, and TypeScript for catching bugs and discrepanicies early, ensuring that my code is error-free and correct throughout.",
        image: Image2
    },
    {
        title: "Backend Development",
        technologies: [
            "Java",
            "JavaScript",
            "TypeScript",
            "Spring",
            "mongoDB"
        ],
        description: "I started learning backend development recently and currently have a basic understanding, but I'm a fast learner and always eager to improve. As I explore more backend concepts and tools, I enjoy building complete full-stack applications and constantly look for ways to make my projects more dynamic, efficient, and closer to real-world standards.",
        image: Image1

    },
    {
        title: "Programming",
        technologies: [
            "Java",
            "C++",
            "C",
            "JavaScript",
            "TypeScript",
            "Matlab",
            "Kotlin",
        ],
        description: "Programming is my core strength, and I enjoy solving real-world problems through code. I’ve worked with languages like Java, C++, JavaScript, and more to build applications that are efficient and scalable. Whether it’s backend development, problem-solving, or scripting, I focus on writing clean, maintainable code and continuously learning new technologies to improve my craft.",
        image: Image3
    },
    {
        title: "Core Subject",
        technologies: [
            "Dbms",
            "Os",
            "Opps",
            "LLD",
        ],
        description: "I have built a solid understanding of core computer science subjects such as Database Management Systems (DBMS), Operating Systems (OS), Object-Oriented Programming (OOPs), and Low-Level Design (LLD). These subjects help me analyze problems better, design efficient system architectures, and write optimized code. My knowledge in these areas forms the backbone of my software development journey.",
        image: Image4
    },
]

export const allServices: Services[] = []

services.forEach((item, i) => {
    allServices.push({
        ...item,
        id: i + 1
    })
})