import Logo from "../Logo/Logo";
import { socials } from "../utils/constants";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-5 items-center justify-center">
      <div className="text-center flex flex-col gap-5">
        <Logo />
        <p>
          Living & learning <br /> one day at a time.
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          {socials.map((item, idx) => (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="text-xl p-2 rounded-full border border-gray-500 hover:bg-white hover:text-black transition-all"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
