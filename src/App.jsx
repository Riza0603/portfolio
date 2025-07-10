import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  About,
  Contact,
  Experience,
  Education,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <ToastContainer position="top-right" autoClose={3000} theme="dark" />{" "}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Education />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />

          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
