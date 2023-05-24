import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ReferEarn from './components/ReferEarn';
import Friends from './components/Friends';


function App() {
  return (
    <div>
       <Navbar/>
      <Routes>
        <Route path="/" element={<ReferEarn/>}/>
        <Route path="/friends-referred" element={<Friends/>}/>
      </Routes>
    </div>
  );
}

export default App;
