import './App.css';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/About';
import DataPage from './pages/Data';
import HomePage from './pages/Home';
import Mainnav from './layout/Mainnav';
import Footer from './layout/Footer';
import Testing from './pages/Testing';

function App() {
  return (
    <div>
      <Mainnav/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        {/* <Route path='/data' element={<DataPage/>}/> */}
        <Route path='/data' element={<Testing/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
