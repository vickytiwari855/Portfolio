const expertise = [
    {
        "id": 0,
        "title": "Senior Frontend Development (React | Next.js | TypeScript)",
        "desc": "Results-driven Senior Frontend Developer with 5+ years of experience building scalable, high-performance web applications using React.js, Next.js 14, and TypeScript. Specialized in reusable component architecture, performance optimization (reducing load time by 60%), and developing enterprise-grade SaaS, EdTech, E-commerce, and Government platforms. Experienced in building multi-tenant admin portals managing 15,000+ users and handling 100K+ daily API requests with 99.8% uptime."
    },
    {
        "id": 1,
        "title": "AI Integration & Advanced API Development",
        "desc": "Hands-on experience integrating OpenAI API to build AI-powered Prompt-to-Form Generators and intelligent chatbots with multimodal responses (text, audio, video). Reduced manual form creation time by 70%. Proficient in REST APIs, WebSockets, GraphQL, DRM (EME APIs), Razorpay payment integration, and real-time content workflows for enterprise applications."
    },
    {
        "id": 2,
        "title": "System Architecture & Performance Optimization",
        "desc": "Architected and launched scalable platforms like DRM-protected video streaming systems serving 5,000+ paying users. Implemented secure authentication systems, subscription-based access control, code splitting, lazy loading, and image optimization. Strong focus on clean code, CI/CD pipelines, and improving development efficiency by 40% through best practices and mentoring junior developers."
    },
    {
        "id": 3,
        "title": "UI Engineering & Design Systems",
        "desc": "Expert in building responsive, cross-browser compatible interfaces using Material-UI (MUI), Tailwind CSS, and CSS-in-JS. Experienced in designing intuitive dashboards, admin panels, role-based access systems, data tables, and user workflows. Strong understanding of UX principles with hands-on experience in Figma for collaborating on modern design systems."
    },
    {
        "id": 4,
        "title": "Agile, DevOps & Team Collaboration",
        "desc": "Experienced in Agile/Scrum methodologies with active participation in sprint planning, stand-ups, and retrospectives. Proficient with Git, GitHub, CI/CD pipelines, Vercel deployments, Webpack optimization, Jest, and React Testing Library. Strong collaboration with cross-functional teams to deliver secure, high-quality enterprise applications."
    }
]


export default function handler(req, res) {
    res.status(200).json(expertise)
}
