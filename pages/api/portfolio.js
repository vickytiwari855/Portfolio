const portfolio = [
  {
    id: 1,
    projectName: "Ingram Micro",
    url: "https://www.ingrammicro.com/",
    image: "projects/IM-Ingrammicro.png",
    projectDetail: `Developed a web-based employee management system to handle employee data, user roles. Created an admin panel that allows authorized administrators to invite and manage other users by assigning different levels of access permissions.
    Designed the user interface with Material Ul, a component library for React, to provide an intuitive and responsive interface for different resolutions of desktop.`,
    technologiesUsed: [
      {
        tech: "React",
      },
      {
        tech: "Typescript",
      },
      {
        tech: "Material UI",
      },
      {
        tech: "HTML 5",
      },
      {
        tech: "CSS 3",
      },
    ],
  },
  {
    id: 2,
    projectName: "Zoom Room",
    url: "https://app.zoomroom.com/",
    image: "projects/ZR-Admin.png",
    projectDetail: `
    I contributed to the Zoom Room project, a dog training platform that focuses on positive reinforcement. My role involved developing an admin panel for scheduling classes, managing products and services, and overseeing staff and clients. I used React, JavaScript, Material UI, and Syncfusion to create a user-friendly dashboard and scheduling calendar.`,
    technologiesUsed: [
      {
        tech: "React",
      },
      {
        tech: "JavaSript",
      },
      {
        tech: "Rest API's",
      },
      {
        tech: "Material UI",
      },
      {
        tech: "Syncfusion",
      },
    ],
  },
  {
    id: 3,
    projectName: "ZR Client Web App ",
    url: "https://client.zoomroom.com/",
    image: "projects/ZR-Client.png",
    projectDetail:
      "development of the Zoom Room Client Web, an extension of the Zoom Room project. This platform allows users to log in as guests or with credentials to access their dog's schedules, purchase products, and view their dog's details and achievements. Key features include a shopping cart for product purchases and a comprehensive view of dog schedules and achievements.",
    technologiesUsed: [
      {
        tech: "React",
      },
      {
        tech: "JavaSript",
      },
      {
        tech: "Rest API's",
      },
      {
        tech: "Material UI",
      },
    ],
  },
  {
    id: 0,
    projectName: "SMART LEARNING DESTINATION",
    url: "https://smartlearningdestination.com/",
    image: "projects/SLD-Web.png",
    projectDetail: `Built a fully functional e-commerce site using React and Redux. Overcame challenges such as integrating payment gateways. Implemented features such as a personalized shopping cart and dynamic product recommendations.
    Implemented responsive design and cross-browser compatibility to ensure optimal user experience across devices.`,
    technologiesUsed: [
      {
        tech: "Next",
      },
      {
        tech: "Redux",
      },
      {
        tech: "JavaScript",
      },
      {
        tech: "Boot Strap",
      },
      {
        tech: "HTML",
      },
      {
        tech: "CSS",
      },
    ],
  },
  {
    id: 5,
    projectName: "SLD Admin",
    url: "/",
    image: "projects/SLD-Admin.png",
    projectDetail: `Developed an admin panel for an e-commerce website to manage products, orders, and customers. User authentication and authorization, product management, order tracking, customer management. Worked on integrating the site with third-party APIs, including payment gateways and shipping providers,
     to improve the site's functionality and increase customer satisfaction. Created tables of all users, their details, and their roles for administrators to monitor all activities in the system.`,
    technologiesUsed: [
      {
        tech: "Next",
      },
      {
        tech: "Redux Toolkit",
      },
      {
        tech: "RTK Query",
      },
      {
        tech: "JavaScript",
      },
      {
        tech: "Rest API's",
      },
      {
        tech: "BootStrap",
      },
      {
        tech: "HTML 5",
      },
      {
        tech: "CSS 3",
      },
    ],
  },

  {
    id: 4,
    projectName: "Fox Pool",
    url: "/",
    image: "projects/FX-Foxpool.png",
    projectDetail: `
      A user-friendly pool management system with modules for inspections, pool details, user management. Using React, JavaScript, Material UI, HTML, CSS, Node.js, Express, and MongoDB, I ensured smooth functionality. Notable features include easy-to-use interfaces for inspections and pool details, secure user authentication, and an admin panel for managing users. Foxpool is simple, secure, and efficient for managing pools.`,
    technologiesUsed: [
      {
        tech: "React",
      },
      {
        tech: "JavaScript",
      },
      {
        tech: "Rest API's",
      },
      {
        tech: "Node",
      },
      {
        tech: "Express",
      },
      {
        tech: "MongoDB",
      },
      {
        tech: "Material UI",
      },
      {
        tech: "HTML 5",
      },
      {
        tech: "CSS 3",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(portfolio);
}
