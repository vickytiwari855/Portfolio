// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const recommendationCard = [
  {
    id: 0,
    name: "Kumar Raju",
    image: "images/shahmir.jfif",
    designation: "Senior Full Stack Engineer | React | Next.js | GraphQL",
    view: "I had the opportunity to collaborate with Vikas Tiwari on multiple frontend initiatives, and his expertise in React.js, Next.js, and TypeScript consistently stood out. He architected scalable component structures, optimized performance, and delivered production-ready features with clean, maintainable code. His strong problem-solving mindset and ability to handle complex enterprise requirements make him a valuable asset to any high-performing engineering team. Highly recommended.",
    linkednURL: "https://www.linkedin.com/in/shahmir-minhas/"
  },
  {
    id: 1,
    name: "Ashutosh Patidar",
    image: "images/sikandar.jpeg",
    designation: "Backend Engineer | Node.js | Python | Cloud",
    view: "Working with Vikas Tiwari has always been a great experience. His frontend architecture decisions, API integration skills, and focus on performance optimization significantly improved overall product quality. He maintains high coding standards, actively participates in Agile processes, and consistently delivers on time. His leadership qualities and mentoring approach make him stand out as a Senior Frontend Developer.",
    linkednURL: "https://www.linkedin.com/in/sikandar-hayat-381407179/"
  },
  {
    id: 2,
    name: "Dhanraj Jangid",
    image: "images/nasir.jpg",
    designation: "MERN Stack Developer | UI Engineering",
    view: "Vikas Tiwari is an exceptional frontend engineer with deep expertise in React, Next.js, and modern UI systems. His attention to detail in UI/UX, reusable component development, and scalable architecture ensures robust and user-friendly applications. His ability to integrate advanced APIs, including AI-driven features, truly differentiates him from others. He brings both technical excellence and reliability to every project.",
    linkednURL: "https://www.linkedin.com/in/nasirkhan22/"
  },
  {
    id: 3,
    name: "Aman Tiwari",
    image: "images/muhammad.jpeg",
    designation: "Full Stack Developer | SaaS Products",
    view: "I highly recommend Vikas Tiwari for Senior Frontend or Lead Frontend roles. His expertise in building enterprise-grade applications using React and Next.js, along with his experience in performance tuning, multi-tenant systems, and secure integrations, makes him a strong technical leader. He consistently delivers scalable, high-quality solutions and contributes positively to team growth.",
    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  }
]


export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
