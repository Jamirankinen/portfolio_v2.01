import { openLink } from "./methods";

const certifications = {
  heading: `Licenses & certifications`,
  list: [
    {
      size: 1,
      title: "IBM Front-End Developer",
      platform: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/7VGFA53TCB8H",
      date: "Issued April 2024 · No Expiration Date",
      logo: "/assets/IBM.png",
      aos: "zoom-out-left",
    },
    {
      size: 1,
      title: "Google Digital Marketing & E-Commerce",
      platform: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/X9VBAV3SAY69",
      date: "Issued May 2024 · No Expiration Date",
      logo: "/assets/Google.png",
      aos: "zoom-out-right",
    },
    {
      size: 1,
      title: "AWS Cloud Technology Consultant",
      platform: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/FRSVZ6GG6YX3",
      date: "Issued June 2024 · No Expiration Date",
      logo: "/assets/aws.png",
      aos: "zoom-out-left",
    },
  ],
  handleIconClick: openLink,
};

export default certifications;
