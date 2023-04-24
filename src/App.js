import { Header } from "./components/header/header";
import About from "./components/section/about";
import Resume from "./components/section/resume";
// import Portfolio from "./components/body/Portfolio";
// import Testimonials from "./components/body/Testimonials";
// import ContactUs from "./components/body/ContactUs";
import Footer from "./components/footer/footer";
import resumeData from "./resumeData";
import "./App.css";
import Aos from "aos";
function App() {
  Aos.init();
  return (
    <div className="App">
      <Header resumeData={resumeData} />

      <div>
        <br></br>
      </div>
      <div className="backGroundApp">
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        {/* <Portfolio resumeData={resumeData} /> */}
        {/* <Testimonials resumeData={resumeData} /> */}
        {/* <ContactUs resumeData={resumeData} /> */}
      </div>

      <Footer resumeData={resumeData} />
    </div>
  );
}

export default App;
