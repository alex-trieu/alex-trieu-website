import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import { Timeline } from 'flowbite-react';
function App() {
  return (
    <div className="landing">
      <div>
        <NavBar />
        <Home />
      </div>
      <div className='about'>
      <About />
      </div>
      <div className='experience'>
        <Experience />
        
      </div>
      
    </div>
    
    
  );
}

export default App;
