
import './App.css';
import React,{useState} from 'react'
import About from './components/About';
import Buy from './components/Buy';
import Home from './components/Home';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'

function App() {

  const [loading, setloading] = useState(0)
const setProgress=(value)=>{
setloading(value)
}

  return (
    <div className="App">
      <LoadingBar
        color='#f11946'
        progress={loading}
        height={4}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Home />
      <About/>
      <Buy setProgress={setProgress}/>
    </div>
  );
}

export default App;
