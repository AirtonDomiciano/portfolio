import { Header } from "./components/header/header";
import About from "./components/section/about";
import Experience from "./components/section/experience";
import Work from "./components/section/work";
import Certificates from "./components/section/certificates";
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
        <Experience resumeData={resumeData} />
        <Work resumeData={resumeData} />
        <Certificates resumeData={resumeData} />
        {/* <ContactUs resumeData={resumeData} /> */}
      </div>

      <Footer resumeData={resumeData} />
    </div>
  );
}

export default App;
