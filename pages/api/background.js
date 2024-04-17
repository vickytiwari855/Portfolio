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
        id: 1,
        title: "Ignatiuz",
        role: "Analyst - Application Development",
        url: "https://www.ignatiuz.com/",
        desc: "I am working as a Senior front end developer",
        year: "2023 - Present",
        location: "Indore, India",
      },
      {
        id: 2,
        title: "Tata Consultancy Services",
        role: "Senior Frontend Developer",
        url: "https://www.tcs.com/careers",
        desc: "I work there as a React TypeScript developer, there I learned how to do CRUD'S operations in react TypeScript, also I using  Material UI",
        year: "2022 - 2023",
        location: "Chennai, India",
      },
      {
        id: 3,
        title: "Codiotic Technologies PVT LTD",
        role: "Frontend Developer",
        url: "https://in.linkedin.com/company/codiotic-technologies-pvt-ltd",
        desc: "As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.",
        year: "2019 - 2022",
        location: "Indore, India",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
