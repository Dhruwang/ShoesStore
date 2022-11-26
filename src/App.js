
import './App.css';
import About from './components/About';
import Buy from './components/Buy';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About/>
      <Buy />
    </div>
  );
}

export default App;
