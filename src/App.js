import './App.css';
import { Home } from './components/Home';
import { Detail } from './components/Detail.jsx';
import {Navbar} from './components/Navbar.jsx'
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {


  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:name" element={<Detail/>} />
      </Routes>
      
    </div>
  );
}

export default App;
