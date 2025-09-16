import { openLink } from "./methods";

const handleIconClick = (icon) => {
  const links = {
    github: "https://github.com/jamirankinen/",
    instagram: "https://www.instagram.com/rankinenjami/",
    linkedin: "https://www.linkedin.com/in/jami-rankinen/",
  };
  openLink(links[icon]);
};

const sideElements = {
  emailButton: {
    label: "jamuxi34@gmail.com",
    onClick: () => openLink("mailto:jamuxi34@gmail.com?subject=Hello"),
  },
  handleIconClick,
};

export default sideElements;
