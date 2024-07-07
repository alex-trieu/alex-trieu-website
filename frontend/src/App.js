import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import About from './components/About/About';

function App() {
  return (
    <div className="landing">
      <div>
        <NavBar />
        <Home />
      </div>
      <About />
    </div>
    
    
  );
}

export default App;
