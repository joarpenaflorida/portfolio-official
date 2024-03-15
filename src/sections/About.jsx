const About = () => {
  return (
    <section id="about" className="w-full min-h-screen py-10">
      <div className="flex flex-col gap-3">
        <span className="text-sm">1 | 3</span>
        <h2 className="text-3xl tracking-widest font-bold">ABOUT</h2>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="my-8">
          <p>
            Hey, my name is Joar Penaflorida. I'm a FullStack web developer and
            UX/UI Designer from Iloilo, Philippines. I'm also passionate about
            mountain biking, music and I'm always curious to learn more when it
            comes to new technologies and creative coding.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-3 bg-white text-black p-5 rounded-md">
          <h3 className="text-xl font-bold">Frontend Developer</h3>
          <p>
            I code things from scratch, and enjoy bringing ideas to life in the
            browser.
          </p>

          <h4>Languages</h4>
          <p>Next JS, React JS, and TypeScript </p>

          <h4>Dev Tools:</h4>
          <p>VSCode</p>
          <p>Git, Gitlab and Github </p>
          <p>TypeScript</p>
          <p>TailwindCSS</p>
          <p>Framer Motion</p>
        </div>

        <div className="flex flex-col gap-3  bg-white text-black p-5 rounded-md">
          <h3 className="text-xl font-bold">Backend Developer</h3>
          <p>
            I design robust APIs and optimize web applications for scalability
            and speed.
          </p>

          <h4>Languages</h4>
          <p>Node JS, Express JS, TypeScript</p>

          <h4>Dev Tools:</h4>
          <p>Git, Gitlab and Github </p>
          <p>VsCode</p>
        </div>

        <div className="flex flex-col gap-3  bg-white text-black p-5 rounded-md">
          <h3 className="text-xl font-bold">Designer</h3>
          <p>
            I value simple content structure, clean design patterns, and
            interactions
          </p>

          <h4>Things I enjoy designing</h4>
          <p>UX, UI, Web apps</p>

          <h4>Dev Tools:</h4>
          <p>Figma</p>
          <p>Framer</p>
        </div>
      </div>
    </section>
  );
};
export default About;
