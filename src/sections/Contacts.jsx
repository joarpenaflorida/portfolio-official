import { socials } from "../utils/constants";

const Contacts = () => {
  return (
    <section id="contacts" className="w-full min-h-screen py-10">
      <div className="flex flex-col gap-3">
        <span className="text-sm">3 | 3</span>
        <h2 className="text-3xl tracking-widest font-bold">CONTACT</h2>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {socials.map((item, idx) => (
          <a href={item.link} title={item.label} rel="noreferrer">
            <div className="flex flex-col gap-2 bg-white text-black p-5 rounded-md">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{item.label}</h3>
                <span className="text-2xl">{item.icon}</span>
              </div>
              <div>
                <p>{item.info}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
export default Contacts;
