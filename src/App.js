
import './App.css';
import HomePage from './component/HomePageComponent.js';
import SayHello from './component/SayHelloComponent.js';
import LessThanOrGreater from './component/LessThanOrGreaterComponent.js';
import AddEm from './component/AddEmComponent.js'
import Reverse from './component/ReverseComponent.js';
import Madlib from './component/MadlibComponent.js';
import Reverse123 from './component/Reverse123Component.js';
import WakeUp from './component/WakeUpComponent.js';
import OddOrEven from './component/OddOrEvenComponent.js';
import EightBall from './component/8BallComponent.js';
import Restaurant from './component/RestaurantComponent.js';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>

    <Routes>
      <Route path='/' element = {<HomePage/>}/>
      <Route path='SayHello' element={<SayHello/>}/>
      <Route path='LessThanOrGreater' element={<LessThanOrGreater/>}/>
      <Route path='Addem' element={<AddEm/>}/>
      <Route path='Reverse' element={<Reverse/>}/>
      <Route path='Madlib' element={<Madlib/>}/>
      <Route path='Reverse123' element={<Reverse123/>}/>
      <Route path='WakeUp' element={<WakeUp/>}/>
      <Route path='OddOrEven' element={<OddOrEven/>}/>
      <Route path='EightBall' element={<EightBall/>}/>
      <Route path='Restaurant' element={<Restaurant/>}/>
      
    </Routes>
    
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
