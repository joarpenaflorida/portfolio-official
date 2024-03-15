import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { SlScreenSmartphone } from "react-icons/sl";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

export const links = [
  {
    label: "About",
    link: "#about",
  },
  {
    label: "Projects",
    link: "#projects",
  },
  {
    label: "Contact",
    link: "#contacts",
  },
];

export const socials = [
  {
    label: "Phone",
    link: "tel:+639217320661",
    icon: <SlScreenSmartphone />,
    info: "+639217320661",
  },
  {
    label: "Gmail",
    link: "mailto:joarparrenopenaflorida@gmail.com",
    icon: <BiLogoGmail />,
    info: "joarparrenopenaflorida",
  },
  {
    label: "Resume",
    link: "tel:+639217320661",
    icon: <BsFileEarmarkPdfFill />,
    info: "+639217320661",
  },
  {
    label: "GitHub",
    link: "https://github.com/joarpenaflorida",
    icon: <FaGithub />,
    info: "joarpenaflorida",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/joarppenaflorida/",
    icon: <FaLinkedin />,
    info: "in/joarppenaflorida",
  },
];
