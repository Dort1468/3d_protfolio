import {
  mobile,
  backend,
  creator,
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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "關於",
  },
  {
    id: "work",
    title: "學習歷程",
  },
  {
    id: "contact",
    title: "聯絡我",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Data Scientist",
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
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "開始踏入工程師之路",
    company_name: "Python",
    icon: python,
    iconBg: "#383E56",
    date: "June 2020 - April 2021",
    points: [
      "從學校的Python課程開始，繪製簡單圖表和分析數據",
      "第一次踏入程式開發領域",
      "學習程式底層邏輯和計算機概論",
      "積極參與學校大數據和分析課程",
    ],
  },
  {
    title: "進入前端開發",
    company_name: "HTML, CSS, JavaScript",
    icon: html,
    iconBg: "#E6DEDD",
    date: "April 2021 - Feb 2023",
    points: [
      "經老師推薦開始進入前端領域",
      "學習基礎HTML, CSS, JS 和網路協議",
      "著重學習RWD切板和瀏覽器相容",
      "陸續完成若干簡單專案",
    ],
  },
  {
    title: "React相關技術及應用",
    company_name: "ReactJS",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Feb 2023 - Oct 2024",
    points: [
      "開始從React框架製作網頁",
      "API、AJAX、Node.js 後端伺服器和資料庫的協作",
      "開始使用Git進行版本控制",
      "參與並解決前端性能優化、排除錯誤、改善網站的使用速度",
    ],
  },
  {
    title: "網頁全端開發",
    company_name: "React, TailwindCSS, Redux",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "開發和維護互動式使用者介面，提升使用者體驗。",
      "將UI/UX設計轉換為前端程式碼，並處理跨瀏覽器兼容性和響應式設計。",
      "完成Udemy 2024全端網頁開發近80小時課程",
      "參與技術討論和團隊學習，持續進步並成為更專業的前端工程師。",
    ],
  },
];

const testimonials = [
  {
    testimonial: "強大的學習能力，感覺所有困難都能克服",
    name: "William Yang",
    designation: "Friend",
    company: "Billy Chen",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "總是對新進技術保有熱情，並有高度的責任感和工作能力。",
    name: "Roger Cheng",
    designation: "Professor",
    company: "NCU",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "A person who have great personality anf fantastic work skill.",
    name: "Lisa Wang",
    designation: "Teacher",
    company: "NTNU",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
