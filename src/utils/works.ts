import { Projects } from "@/types/type";

// import ObysAgencyMiddle1 from "../../public/images/ObysAgency/imagesMiddle1.jpg";
// import ObysAgencyMiddle2 from "../../public/images/ObysAgency/imagesMiddle2.jpg";
import ObysAgencyMiddle3 from "../../public/images/ObysAgency/OCHI.jpg";
// import ObysAgencyOutro1 from "../../public/images/ObysAgency/imagesOutro1.jpg";
import ObysAgencyOutro2 from "../../public/images/ObysAgency/out1.jpg";
import ObysAgencyOutro3 from "../../public/images/ObysAgency/out2.jpg";
import ObysAgencyIntro from "../../public/images/ObysAgency/intowala1.jpg";
import ObysAgencyLandscape1 from "../../public/images/ObysAgency/introwala.png";
import ObysAgencyLandscape2 from "../../public/images/ObysAgency/land2.png";
import ObysAgencyLandscape3 from "../../public/images/ObysAgency/land3.png";
import ObysAgencyLandscape4 from "../../public/images/ObysAgency/land4.png";
import ObysAgencyLandscape5 from "../../public/images/ObysAgency/land5.png";
import ObysAgencyLandscape6 from "../../public/images/ObysAgency/land6.png";
import ObysAgencyLandscape7 from "../../public/images/ObysAgency/land8.png";

import MagmaMiddle1 from "../../public/images/Magma/pand1.png";
import MagmaMiddle2 from "../../public/images/Magma/pand2.png";
import MagmaMiddle3 from "../../public/images/Magma/pand3.png";
import MagmaOutro1 from "../../public/images/Magma/imagesOutro1.jpg";
import MagmaOutro2 from "../../public/images/Magma/pand4.png";
import MagmaOutro3 from "../../public/images/Magma/imagesOutro3.jpg";
import MagmaIntro from "../../public/images/Magma/intro.png";
import MagmaMain from "../../public/images/Magma/mainimg.png";
import MagmaLandscape1 from "../../public/images/Magma/land1.png";
import MagmaLandscape2 from "../../public/images/Magma/land2.png";
import MagmaLandscape3 from "../../public/images/Magma/land3.png";
import MagmaLandscape4 from "../../public/images/Magma/land4.png";
import MagmaLandscape5 from "../../public/images/Magma/land5.png";
import MagmaLandscape6 from "../../public/images/Magma/land6.png";
import MagmaLandscape7 from "../../public/images/Magma/land7.png";

import AppleMiddle1 from "../../public/images/Apple/pand1.png";
import AppleMiddle2 from "../../public/images/Apple/pand2.png";
import AppleMiddle3 from "../../public/images/Apple/pand3.png";
import AppleOutro1 from "../../public/images/Apple/imagesOutro1.jpg";
import AppleOutro2 from "../../public/images/Apple/pand4.png";
import AppleOutro3 from "../../public/images/Apple/imagesOutro3.jpg";
import AppleIntro from "../../public/images/Apple/intro.png";
import AppleMain from "../../public/images/Apple/middel.png";
import Applegif from "../../public/images/Apple/jhat.gif";
import AppleLandscape1 from "../../public/images/Apple/land1.png";
import AppleLandscape2 from "../../public/images/Apple/land2.png";
import AppleLandscape3 from "../../public/images/Apple/land3.png";
import AppleLandscape4 from "../../public/images/Apple/land4.png";
import AppleLandscape5 from "../../public/images/Apple/land5.png";
import AppleLandscape6 from "../../public/images/Apple/land6.png";
import AppleLandscape7 from "../../public/images/Apple/land7.png";
import AppleLandscape8 from "../../public/images/Apple/land8.png";

import LofiMiddle1 from "../../public/images/lofi_train/imagesMiddle1.png";
import LofiMiddle2 from "../../public/images/lofi_train/imagesMiddle2.png";
import LofiMiddle3 from "../../public/images/lofi_train/imagesMiddle3.jpg";
import LofiOutro1 from "../../public/images/lofi_train/imagesOutro1.gif";
import LofiOutro2 from "../../public/images/lofi_train/imagesOutro2.png";
import LofiOutro3 from "../../public/images/lofi_train/imagesOutro3.png";
import LofiIntro from "../../public/images/lofi_train/introimage.png";
import LofiLandscape1 from "../../public/images/lofi_train/imagesLandscape1.jpg";
import LofiLandscape2 from "../../public/images/lofi_train/imagesLandscape2.png";
import LofiLandscape3 from "../../public/images/lofi_train/imagesLandscape3.jpg";
import LofiLandscape4 from "../../public/images/lofi_train/imagesLandscape4.png";
import LofiLandscape5 from "../../public/images/lofi_train/imagesLandscape5.png";
import LofiLandscape6 from "../../public/images/lofi_train/imagesLandscape6.png";


const projects = [
  {
    title: "Obys Agency",
    alt: "a beautiful animation site",
    year: "2025",
    roles: ["frontend", "creative direction", "web design"],
    technologies: [
      "Html",
      "Css",
      "Three.js",
      "Tailwind",
      "Locomotive",
      "Scrolltrigger",
      "Javascript",
      "GSAP",
    ],
    github: "Pritam1234678/Major-AnimationProject",
    website: "https://obysagency-copy.netlify.app/",
    duration: "2 weeks",
    description1: [
      " This project is a detailed clone of the Obys.Agency website (https://obys.agency/), created to practice and explore advanced frontend development techniques. The goal was to closely replicate the look, feel, and animations of the original site using technologies like Three.js for 3D effects, GSAP for animations, and Locomotive Scroll for smooth parallax scrolling.",
      " The layout was carefully built using HTML, CSS, and JavaScript to match the original design as accurately as possible. This project helped me understand how professional sites manage animations, transitions, and performance optimization across different devices.",
    ],
    // description2: [
    //   "Through this project, I learned how to combine multiple animation libraries to create a smooth and interactive user experience. One of the key challenges was syncing animations with scroll behavior and making sure performance stayed high even with complex visuals. It gave me hands-on experience in working with modern frontend tools and taught me how to translate creative UI/UX into real, functional code. It was a fun and educational journey that helped sharpen my skills in frontend animation and design replication.",
    //   "",
    // ],
    size: "w-[10vw]",
    position: "md:justify-end",
    marginBottom: "mb-[20vh]",
    // padding: "translateX-[8vw]",
    mainImage: ObysAgencyMiddle3,
    introImage: ObysAgencyIntro,
    imagesLandscape: [
      {
        image: ObysAgencyLandscape1,
        alt: "logo with three white rounded stripes",
      },
      {
        image: ObysAgencyLandscape2,
        alt: "logo with a couple under the lights beside it",
      },
      {
        image: ObysAgencyLandscape3,
        alt: "website designs displayed at an angle",
      },
      {
        image: ObysAgencyLandscape4,
        alt: "ObysAgency profile page",
      },
      {
        image: ObysAgencyLandscape5,
        alt: "ObysAgency sign up page",
      },
      {
        image: ObysAgencyLandscape6,
        alt: "ObysAgency create a date page on a desktop computer",
      },
      {
        image: ObysAgencyLandscape7,
        alt: "ObysAgency mobile view for profile and dashboard",
      },
    ],
    imagesPortrait: [
      {
        image: ObysAgencyOutro2,
        alt: "logo and title of brand with couple behind",
      },
      {
        image: ObysAgencyOutro3,
        alt: "ObysAgency hero section of landing page",
      },
    ],
  },
  {
    title: "The Magma",
    alt: "a couple laughing and enjoying each other's company",
    year: "2025",
    roles: ["frontend", "creative direction", "web design"],
    technologies: [
      "React.js",
      "Tailwind",
      "CSS",
      "locomotive",
      "Framer Motion",
      "Locomotive Scroll",
      "GSAP",
      "Cloudinary",
      "Figma",
    ],
    github: "Pritam1234678/This-is-Magma-Copy",
    website: "https://magma-copy-pm.netlify.app/",
    duration: "2 weeks",
    description1: [
      "Magma Clone is a high-fidelity animated clone of the original site thisismagma.com. Built with cutting-edge frontend tools like Locomotive Scroll, GSAP, ScrollTrigger, and the Canvas API, this project demonstrates fluid scroll, dynamic transitions, and advanced scroll-based animations. It showcases how powerful frontend animations can enhance the overall web experience while keeping performance in check.",

      "I recreated every key interaction and visual element to match the original site’s energy, ensuring responsiveness and smooth UI behavior across all devices. From implementing scroll hijacking to rendering abstract visuals with Canvas, every feature was crafted carefully using a clean setup of HTML, CSS, and vanilla JavaScript. This project served as a deep dive into animation libraries and helped refine my frontend performance optimization skills."
    ],
    size: "w-[10vw]",
    position: "md:justify-start",
    marginBottom: "mb-[10vh]",
    // padding: "translateX-[-8vw]",
    mainImage: MagmaMain,
    introImage: MagmaIntro,

    imagesLandscape: [
      {
        image: MagmaLandscape1,
        alt: "graphic card with elegant furniture at the background",
      },
      {
        image: MagmaLandscape2,
        alt: "lighting with sleek text",
      },
      {
        image: MagmaLandscape4,
        alt: "view of account page",
      },
      {
        image: MagmaLandscape3,
        alt: "laptop view of Magma hero section on home",
      },
      {
        image: MagmaLandscape5,
        alt: "view of error page",
      },
      {
        image: MagmaLandscape6,
        alt: "mobile view of login and shop page",
      },
      {
        image: MagmaLandscape7,
        alt: "view of lookbook page",
      },
    ],
    imagesPortrait: [
      {
        image: MagmaMiddle1,
        alt: "mobile phone perched on the edge of elegant couch",
      },
      {
        image: MagmaMiddle3,
        alt: "displays of Magma homepage and detail page in laptop and mobile view",
      },
      {
        image: MagmaOutro2,
        alt: "ipad mockup of Magma's product detail page",
      },
      {
        image: MagmaMiddle2,
        alt: "displays of Magma homepage and detail page in laptop",
      },
    ],
  },
  {
    title: "Aple Vision Pro",
    alt: "Copy of Apple vision Pro",
    year: "2025",
    roles: ["frontend", "creative direction", "web design"],
    technologies: [
      "JavaScript",
      "Tailwind",
      "Locomotive",
      "Canvas",
      "GSAP",
      "Css",
      "Framer Motion",
      "Figma",
    ],
    github: "Pritam1234678/APALE",
    website: "https://apalee.netlify.app/",
    duration: "3 weeks",
    description1: [
      "Apple Vision Pro Clone is a scroll-driven replica of the original Apple Vision Pro landing page, crafted using modern frontend animation libraries and canvas-based motion graphics. This project focuses on delivering a premium, immersive user experience with seamless transitions and scroll-triggered animations that replicate Apple’s signature aesthetic.",

      "I implemented smooth scrolling using Locomotive Scroll and built timeline-based animations with GSAP and ScrollTrigger. The project also incorporates custom Canvas elements for motion effects, creating a visually engaging layout. With attention to detail and responsiveness, I aimed to recreate the minimal yet elegant Apple design, while ensuring fast performance and interactive UI behavior across devices."
    ],
    size: "w-[20vw]",
    marginBottom: "mb-[20vh]",
    position: "md:justify-center",
    // padding: "translateX-[-8vw]",
    mainImage: AppleMain,
    introImage: AppleIntro,
    imagesPortrait: [
      {
        image: AppleMiddle1,
        alt: "laptop perched on top of platform"
      },
      {
        image: AppleMiddle3,
        alt: "man in mask holding a red jewelry box"
      },
      {
        image: AppleMiddle2,
        alt: "man with pearl bracelet looking down at phone"
      },
      {
        image: AppleOutro2,
        alt: "ipad mockup on a marble counter"
      }
    ],
    imagesLandscape: [
      {
        image: AppleLandscape1,
        alt: "Apple graphic design with playlist",
      },
      {
        image: AppleLandscape2,
        alt: "Apple graphic design with neon green background",
      },
      {
        image: AppleLandscape3,
        alt: "Apple logos in black and white",
      },
      {
        image: AppleLandscape4,
        alt: "laptop and ipad mockup view of Apple website",
      },
      {
        image: AppleLandscape5,
        alt: "laptop screen view of contact page",
      },
      {
        image: AppleLandscape6,
        alt: "mobile view of menu and loading pages",
      },
      {
        image: AppleLandscape7,
        alt: "laptop on white rock",
      },
      {
        image: AppleLandscape8,
        alt: "mobile views of single artist page and contact page",
      },
    ],
  },
  {
    title: "Lofi Train",
    alt: "a couple laughing and enjoying each other's company",
    year: "2025",
    roles: ["frontend", "web design"],
    technologies: ["React.js", "SCSS", "Javascript", "Figma"],
    github: "Pritam1234678/lofi-train",
    website: "https://trainlofi.netlify.app/",
    duration: "2 weeks",
    size: "w-[20vw]",
    marginBottom: "mb-[20vh]",
    position: "md:justify-end",
    // padding: 'translateX-[10vw]',
    description1: [
      "Ever wish that you could go to a place to destress from a long day of work, school, or life? This application is a great place to not only listen to cozy, lofi music but also gives you the opportunity to customize the site to fit your vibe, making it your own personal safe space.",
      "Lofi Train is a personal side project that's surrounded by one of my favorite hobbies: music, specifically lofi music. Lofi brings a calm, serene energy that helps to balance out mental strain, especially when going through a stressful time or being absorbed in work. I wanted there to be a place for users to be absorbed in that feeling of inner peace that can mediate their feelings of stress. I was inspired by Rainmeter and wanted to create a similar aesthetic, thus Lofi Train was born.",
    ],
    mainImage: LofiOutro3,
    introImage: LofiIntro,
    imagesPortrait: [
      {
        image: LofiOutro3,
        alt: "iphone lying on a soft blanket with cotton surrounding it"
      },
      {
        image: LofiMiddle1,
        alt: "gif display of different backgrounds"
      },
      {
        image: LofiMiddle2,
        alt: "tablet view of lofi train"
      },
      {
        image: LofiOutro2,
        alt: "mockup of girl using lofi train on laptop"
      }
    ],
    imagesLandscape: [
      {
        image: LofiLandscape1,
        alt: "poster board of lofi train logo"
      },
      {
        image: LofiLandscape2,
        alt: "lofi train logo with color palette"
      },
      {
        image: LofiLandscape3,
        alt: "lofi train logo with animated cozy background"
      },
      {
        image: LofiLandscape4,
        alt: "mockup of lofi train on macbook laptop"
      },
      {
        image: LofiLandscape5,
        alt: "gif of favorites container when selected"
      },
      {
        image: LofiLandscape6,
        alt: "gif of search, favorites, and settings features"
      },
      {
        image: LofiOutro1,
        alt: "rainy gif animation with train in background"
      },
    ],
  },
];

export const allProjects: Projects[] = [];

projects.forEach((item, i) => {
  allProjects.push({
    ...item,
    id: i,
  });
});
