// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: "Kumar Raju",
    image: "images/shahmir.jfif",
    designation: "React JS | NEXT JS | Node | GraphQL",
    view: "Hey everyone! I wanted to take a moment to recommend Vikas Tiwari for any React.js opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of React.js and Next.js concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Vikas Tiwari is a reliable and dedicated team member who would be a great asset to any React.js team. Highly recommended! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/shahmir-minhas/",
  },
  {
    id: 1,
    name: "Ashutosh Patidar",
    image: "images/sikandar.jpeg",
    designation: "Node JS | React JS | PHP | Python Developer",
    view: "I had the privilege of working alongside Vikas Tiwari on multiple university projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic team at JMM Technologies, where Vikas Tiwari professionalism and attention to detail shone brightly. I wholeheartedly endorse Vikas Tiwari for any opportunity that calls for a highly skilled and dedicated individual.",
    linkednURL: "https://www.linkedin.com/in/sikandar-hayat-381407179/",
  },
  {
    id: 2,
    name: "Dhanraj Jangid",
    image: "images/nasir.jpg",
    designation: "MERN | JavaScript | Tailwind | Sass | Bootstrap",
    view: "I wholeheartedly recommend Vikas Tiwari as a talented React frontend developer with an incredible flair for UI/UX design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Vikas Tiwari attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
    linkednURL: "https://www.linkedin.com/in/nasirkhan22/",
  },
  {
    id: 3,
    name: "Aman Tiwari",
    image: "images/muhammad.jpeg",
    designation: "MERN Stack Developer at Productbox",
    view: "I highly recommend Vikas Tiwari for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/",
  },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
