
import './App.css'
import { useEffect, useState } from 'react';
function App() {
  const[activeKey, setActiveKey] = useState('')
  useEffect(()=>{
    document.addEventListener('keydown', (event)=>{
      // console.log(event.key)
      playSound(event.key.toLocaleUpperCase())
    },[])
  })
  const drumpPads = [
  {
    keyCode: 81,
    text: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    text: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    text: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    text: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    text: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    text: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    text: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    text: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    text: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

function playSound(selector){
  const audio = document.getElementById(selector);
  audio.play();

setActiveKey(selector)
}


  return (
 
     <div id="drum-machine" className='container d-flex'>
          <div id="display" className='col-lg-6'>
            {activeKey}
          </div>
         
          <div className="drum-pads" >
          {drumpPads.map((pad)=>
            (<div key={pad.src} className='drum-pad container' onClick={()=>{playSound(pad.text)}} id={pad.src}>
            {pad.text}
            <audio src={pad.src} className='clip' id={pad.text}></audio>
            </div>)
          ) }
          </div>
         
     </div>
 
  )
}

export default App
