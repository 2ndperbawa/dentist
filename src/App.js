import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Table from './pages/Table';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className='page-div'>
        <Navbar />
        <Routes>
          <Route path={'/'}  element={<Home />}/>
          <Route path={'/about'}  element={<About />}/>
          <Route path={'/table'}  element={<Table />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
