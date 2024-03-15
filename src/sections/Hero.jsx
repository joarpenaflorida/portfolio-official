import { BsFileEarmarkPdfFill } from "react-icons/bs";

import { MdContactless } from "react-icons/md";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full min-h-screen py-10 flex justify-center"
    >
      <article className="my-56 flex flex-col items-center">
        <span className="text-sm tracking-tight">
          Fullstack Developer & Designer
        </span>
        <p className="text-4xl font-extrabold tracking-widest">
          I design and code simple things, and I love what I do.
        </p>
        <p>Full Stack Web Developer</p>
        <p>Based in Iloilo, Philippines</p>

        <div className="mt-6 flex gap-10">
          <button className="font-bold text-sm flex items-center justify-center gap-3 border hover:bg-white hover:text-black border-white rounded-full px-5 py-2">
            <span>
              <BsFileEarmarkPdfFill />
            </span>
            DOWNLOAD CV
          </button>
          <button className="font-bold text-sm flex items-center justify-center gap-3 border border-white bg-white text-black rounded-full px-5 py-2">
            <span className="text-lg">
              <MdContactless />
            </span>
            CONTACT ME
          </button>
        </div>
      </article>
    </section>
  );
};
export default Hero;
