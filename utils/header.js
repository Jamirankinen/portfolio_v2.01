import { openLink, scrollTo } from "./methods";

const header = {
  menus: [
    { title: "Home", id: "home" },
    { title: "My Self", id: "my-self" },
    { title: "Experience", id: "experience" },
    { title: "My Work", id: "my-work" },
    { title: "Reviews", id: "reviews" },
    { title: "Certifications", id: "certifications" },
    { title: "Education", id: "contributions" },
    { title: "Contact", id: "contact" },
  ],
  rightBtn: {
    label: "Curriculum Vitae | CV",
    onClick: () => openLink("assets/CV_English.pdf"),
  },
  logo: {
    src: "/assets/photo-logo1.png",
    alt: "jamirankinen",
  },
  handleIconClick: () => scrollTo("home"),
  handleItemSelect: (menu) => scrollTo(menu.id),
};

export default header;
