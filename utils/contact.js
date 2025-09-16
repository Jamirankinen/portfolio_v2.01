import { openLink } from "./methods";

const contact = {
  label: `Get in touch`,
  heading: `Let’s Work Together`,
  description: `I’m open for new opportunities – especially all Frontend positions intrigue me. However, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!.`,
  button: {
    label: "Say Hello",
    onClick: () => openLink("mailto:jamuxi34@gmail.com?subject=Hello"),
  },
  designAndBuiltBy: "Built by Jami Rankinen",
  handleBuiltByClick: () =>
    openLink("https://github.com/Jamirankinen/portfolio_v2"),
};

export default contact;
