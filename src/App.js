import './App.css';
import Navbar from './components/Navbar';
import { Footer } from './components/footer';
import { Route, Routes } from 'react-router-dom';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage'
//import { ConstructionPage } from './pages/ConstructionPage';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/work' element={<WorkPage/>}/>
        <Route path='/resume' element={<div></div>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
      <Footer/>
    </div>


  );
}



export default App;
