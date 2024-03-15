import { useState } from "react";
import NavigationBar from "./components/header/NavigationBar";
import { Hero, About, Projects, Contacts } from "./sections";
import MenuOverlay from "./components/header/MenuOverlay";
import Footer from "./sections/Footer";
import CustomCursor from "./components/cursor/CustomCursor";

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <div className="w-full h-full bg-gray-800">
        {/* <div
          className="cursor"
          style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
        ></div> */}

        <CustomCursor />
        <NavigationBar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />

        <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <main className="max-w-7xl mx-auto text-white px-24 pt-24 pb-2">
          <Hero />
          <About />
          <Projects />
          <Contacts />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
