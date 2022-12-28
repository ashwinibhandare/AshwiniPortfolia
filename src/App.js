import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import BasicDetails from './Components/BasicDetails';
import AboutMe from './Components/AboutMe';
import { Route, Routes} from "react-router-dom";


function App() {

  return (
      <>
      <Navbar/>
      <div>
        <Routes>
        <Route path='/' element={<BasicDetails/>}></Route>

          <Route path='/about' element={<AboutMe/>}></Route>
        </Routes>
      </div>
      
      </>
    );
}

export default App;
