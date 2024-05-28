import './App.css';
import Navbar from './components/Navbar';
import { Footer } from './components/footer';
import { Route, Routes } from 'react-router-dom';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { Construction } from './pages/Construction';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route exact path='/work' element={<WorkPage/>}/>
        <Route exact path='/experiences' element={<ExperiencePage/>}/>
        <Route exact path='/resume' element={<div></div>}/>
        <Route exact path='/' element={<AboutPage/>}/>
        <Route exact path='/construction' element={<Construction/>}/>
      </Routes>
      <Footer/>
    </div>


  );
}



export default App;
