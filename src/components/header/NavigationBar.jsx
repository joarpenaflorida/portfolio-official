import Logo from "../../Logo/Logo";
import { socials } from "../../utils/constants";

const NavigationBar = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <>
      <header className="w-full fixed top-0 left-0 p-10 flex z-20">
        {/* Logo */}
        <Logo />
        {/* Hamburger Icon */}
        <button
          className="flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
                navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </header>
      <div className="flex flex-col text-white p-10 fixed left-0 bottom-0 z-5 gap-5">
        {socials.map((social, idx) => (
          <a
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="text-xl p-2 rounded-full hover:bg-white  hover:text-black transition-all"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </>
  );
};
export default NavigationBar;
