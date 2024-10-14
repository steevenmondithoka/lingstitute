
import './App.css';
import{Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import About from './components/About';
import Contact from './components/Contact';
import Register from './components/Register';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Banner}/>
        <Route path='/home' exact Component={Home}/>
        <Route path='/about' exact Component={About}/>
        <Route path='/contact' exact Component={Contact}/>
        <Route path='/register' Component={Register}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
