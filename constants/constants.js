export const NAME = "Vikas Tiwari";

export const DESIGNATION = `Frontend Developer`;

function calculateAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // Adjust age if birthday hasn't occurred yet this year
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export const DETAILS = {
  Residence: "INDIA",
  City: "INDORE, MP",
  Age: calculateAge("1999-08-25"),
};

export const SKILLS = [
  {
    title: "MERN Stack Developer",
    level: "70%",
  },
  {
    title: "Frontend Developer",
    level: "80%",
  },

  {
    title: "Backend Developer",
    level: "35%",
  },
];

export const TECH_STACK = [
  "React",
  "Next",
  "Express",
  "Native",
  "Syncfusion",
  "Redux",
  "SCSS",
  "Jest",
  "JavaScript",
  "Material UI",
  "Node",
  "CSS",
  "TypeScript",
  "GitHub",
  "Jira",
  "RTK Query",
  "TailwindCSS",
  "Bootstrap",
  "REST API",
];

export const CONTACTS = {
  EMAIL: "vickytiwari855@gmail.com",
  PHONE: "+91 7746051290",
};

export const SOCIAL_LINKS = {
  GITHUB: "/",
  LINKEDIN:
    "https://www.linkedin.com/in/vikas-tiwari-03a94a1a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  INSTAGRAM:
    "https://www.instagram.com/vicky_cittu_tiwari?igsh=MXM1cDBmZGN1Njl1Mg%3D%3D&utm_source=qr",
  FACEBOOK: "https://www.facebook.com/share/hdZBNDf8UELDBLAh/?mibextid=LQQJ4d",
};
