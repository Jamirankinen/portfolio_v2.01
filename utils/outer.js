import { openLink } from "./methods";

const outer = {
  title1: `Hello, I'm`,
  title2: "Rankinen Jami",
  decrypTexts: [
    "A Frontend Developer",
    "A Full Stack Developer",
    "I build things for the web",
    "A Traveler",
  ],
  desciption: `Recent graduate in Business and Information Systems dedicated and disciplined Junior Dev who loves to create things for the internet, having more than 2 years of field experience I've worked on multiple diverse projects along the way`,
  button: {
    label: "Contact me!",
    onClick: () => openLink("mailto:jamuxi34@gmail.com?subject=Hello"),
  },
};

export default outer;
