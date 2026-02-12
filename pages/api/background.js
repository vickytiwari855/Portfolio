const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Industrial Training Institute (ITI) ",
        degree: "Electrical Machine Operator",
        detail:
          "Industrial training institutes is a qualification and are post-secondary schools in India constituted under the Directorate General of Training.",
        year: "2017-2019",
      },
      {
        id: 1,
        title: "Barkatullah University,Bhopal",
        degree: "Bachelor of Computer Applications",
        detail: "Bachelor's Degree in Computer System Engineering.",
        year: "2016-2019",
      },
      {
        id: 2,
        title: "Higher Secondary Education",
        degree: "Senior Secondary Education.",
        detail:
          "Secondary education refers to the stage of formal education that follows primary education and precedes higher education.",
        year: "2015-2016",
      },
    ],
  },
  {
    expCards: [
      {
        id: 0,
        title: "Zevo360 Technologies PVT. LTD",
        role: "Sr. Analyst - Application Development",
        url: "https://www.zevo360.com/",
        desc: "Leading frontend architecture for Zevo Parenting App using React, Next.js 14, and TypeScript. Built a DRM-protected video streaming platform serving 5,000+ users and developed a multi-tenant admin portal managing 15,000+ accounts. Improved performance by 60% through code splitting, lazy loading, and optimized API integrations handling 100K+ daily requests.",
        year: "Jun 2025 - Present",
        location: "Indore, India"
      },
      {
        id: 1,
        title: "Ignatiuz Software Pvt. Ltd.",
        role: "Analyst - Application Development",
        url: "https://www.ignatiuz.com/",
        desc: "Developed enterprise-grade government and SaaS applications using React, Node.js, and MongoDB. Built AI-powered Prompt-to-Form Generator and integrated OpenAI API for intelligent chatbot features with multimodal responses. Delivered secure admin dashboards with role-based access control and real-time content workflows.",
        year: "Sep 2023 - Apr 2025",
        location: "Indore, India"
      },
      {
        id: 2,
        title: "Tata Consultancy Services (TCS)",
        role: "Senior Application Developer",
        url: "https://www.tcs.com/",
        desc: "Built scalable frontend applications using React, TypeScript, and Material-UI. Developed dynamic dashboards, CRUD modules, secure authentication systems, and optimized REST API integrations. Focused on performance, reusable component architecture, and enterprise-grade UI systems.",
        year: "Feb 2022 - Aug 2023",
        location: "Chennai, India"
      },
      {
        id: 3,
        title: "Codiotic Technologies Pvt. Ltd.",
        role: "Frontend Developer",
        url: "https://in.linkedin.com/company/codiotic-technologies-pvt-ltd",
        desc: "Designed and developed responsive web applications using React, Next.js, and JavaScript. Built user-friendly interfaces, admin panels, and integrated backend APIs while ensuring cross-browser compatibility and mobile responsiveness.",
        year: "Apr 2021 - Jan 2022",
        location: "Indore, India"
      }
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
