import Header from './components/header/header';
import About from './components/body/about';
import Resume from './components/body/resume';
import resumeData from './resumeData';
import './App.css';

function App() {
  return (
    <div className="App">
       <Header resumeData={resumeData}/>
       <About resumeData={resumeData}/>
       <Resume resumeData={resumeData}/>
       
    </div>
  );
}

export default App;
