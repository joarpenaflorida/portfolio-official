import { links, socials } from "../../utils/constants";

const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <nav
      className={`fixed flex flex-col items-center justify-center gap-5 top-0 left-0 w-full p-10 z-10 h-screen pt-24 bg-gray-900 text-white bg-opacity-100 transform delay-100 transition-all duration-350 ${
        navbarOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <ul className="w-full flex flex-col items-center text-left justify-centers gap-2">
        {links.map((link, idx) => (
          <li className="my-2" key={idx}>
            <a
              href={link.link}
              className="text-6xl tracking-widest font-bold hover:bg-white px-2 py-1 hover:text-black transition-all rounded-md"
            >
              <button
                onClick={(e) => {
                  setNavbarOpen(false);
                }}
                className="uppercase tracking-widest"
              >
                {link.label}
              </button>
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex items-center gap-10 mt-12">
        {socials.map((item, idx) => (
          <li className="my-2" key={idx}>
            <a href={item.link} className="text-lg tracking-widest font-bold">
              <button
                onClick={(e) => {
                  setNavbarOpen(false);
                }}
                className="text-xl p-2 rounded-full hover:bg-white  hover:text-black transition-all"
              >
                {item.icon}
              </button>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuOverlay;
