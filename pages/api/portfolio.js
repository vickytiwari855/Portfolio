const portfolio = [
  {
    id: 0,
    projectName: "SMART LEARNING DESTINATION",
    url: "https://smartlearningdestination.com/",
    image: "projects/SLD-Web.png",
    projectDetail:
      "Restructure your business with JMM ERP’s all-in-one cloud-based ERP. JMM ERP provides a robust, cost-effective online solution with state-of-the-art software to increase business value and enhance customer impact.",
    technologiesUsed: [
      {
        tech: "Next",
      },
      {
        tech: "Typescript",
      },
      {
        tech: "Boot Strap",
      },
    ],
  },
  {
    id: 1,
    projectName: "Ingram Micro",
    url: "https://www.ingrammicro.com/",
    image: "projects/IM-Ingrammicro.png",
    projectDetail:
      "Ingram Micro India, a large national distributor offers a comprehensive portfolio of technology and mobility distribution, 3PL Services, logistics, supply chain, professional services, financial solutions and capabilities, making us the one-stop shop for our partners. Our unparalleled product selection and availability includes recent investments in specialty offerings and solutions in cloud, mobility, enterprise computing, technology distribution, data center, IoT & more.      ",
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
    ],
  },
  {
    id: 2,
    projectName: "Zoom Room",
    url: "https://app.zoomroom.com/",
    image: "projects/ZR-Admin.png",
    projectDetail:
      "Invest in Saudi Arabia, Streamline Your Business Setup Process in Saudi Arabia with FirmSanad Simplify the process of obtaining licenses and starting a business in Saudi Arabia with our streamlined platform.",
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
      "Fateh Al Mustaqbil is a one-of-a-kind travel agency designed to cater to the interests of travelers across the globe, founded in 2023 in Riyadh, Saudi Arabia. Their expertise lies in crafting exceptional journeys tailored to each client's unique requirements, whether it be ticketing, hotel bookings, or visa assistance.",
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
    id: 4,
    projectName: "Fox Pool",
    url: "/",
    image: "projects/FX-Foxpool.png",
    projectDetail:
      "Fox Pool Management is a family owned and operated business that provides swimming pool management services, including construction and repairs, in Southeastern PA, and Central NJ.  We offer the highest level of communication and customer service in the pool management industry.",
    technologiesUsed: [
      {
        tech: "React",
      },
      {
        tech: "JavaScript",
      },
      {
        tech: "REST API's",
      },
      {
        tech: "Material UI",
      },
      {
        tech: "Node",
      },
      {
        tech: "Express",
      },
    ],
  },
  {
    id: 5,
    projectName: "SLD Admin",
    url: "/",
    image: "projects/SLD-Admin.png",
    projectDetail:
      "Fox Pool Management is a family owned and operated business that provides swimming pool management services, including construction and repairs, in Southeastern PA, and Central NJ.  We offer the highest level of communication and customer service in the pool management industry.",
    technologiesUsed: [
      {
        tech: "React",
      },
      {
        tech: "JavaScript",
      },
      {
        tech: "REST API's",
      },
      {
        tech: "Material UI",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(portfolio);
}
