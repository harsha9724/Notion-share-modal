import logo from './logo.svg';
import './App.css';
import Vector from "./images/Vector.png"
import { useState } from 'react';
import Card from './components/card/card';

function App() {
  const [click,setClick]=useState(false);
  return (
  <>
   <div>
    <div className='shareContainer' onClick={()=>{ setClick(!click)}}>
      <p>Share</p>
     <img src={Vector} alt="" />
    </div>
    <div className='popup-card'>
{
  (click)? <Card/>:""
}
    </div>

   </div>
  </>
  );
}

export default App;
