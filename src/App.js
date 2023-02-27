import { Header }  from "./components/header/header";
// import About from "./components/body/about";
// import Resume from "./components/body/resume";
// import Portfolio from "./components/body/Portfolio";
// import Testimonials from "./components/body/Testimonials";
// import ContactUs from "./components/body/ContactUs";
// import Footer from "./components/footer/footer";
import resumeData from "./resumeData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData} />
      {/* <About resumeData={resumeData} />
      <Resume resumeData={resumeData} />
      <Portfolio resumeData={resumeData} />
      <Testimonials resumeData={resumeData} />
      <ContactUs resumeData={resumeData} />
      <Footer resumeData={resumeData}/> */}
    </div>
  );
}

export default App;
