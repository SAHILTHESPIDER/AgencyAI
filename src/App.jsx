import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Trusted from "./component/Trusted";
import Service from "./component/Service";
import OurWork from "./component/OurWork";
import Team from "./component/Team";
import Contact from "./component/Contact";
import Footview from "./component/Footview";
import { Toaster } from "react-hot-toast";

function App() {
  const [Theme, setTheme] = useState(
    localStorage.getItem("Theme") || "light"
  );

  return (
    <Router>
      <div className="dark:bg-black relative">
        <Toaster />
        <Nav Theme={Theme} setTheme={setTheme} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Trusted />
                <Service />
                <OurWork />
                <Team />
                <Contact />
              </>
            }
          />

          <Route path="/services" element={<Service />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footview Theme={Theme} />
      </div>
    </Router>
  );
}

export default App;
