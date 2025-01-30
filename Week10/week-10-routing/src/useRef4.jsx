import {useRef,useState} from 'react'

function App(){
  const [currentCount,setCurrentCount]=useState(0);
  const timer=useRef();

  function startClock(){
     let value=setInterval(function(){
      setCurrentCount(c=>c+1);
     },1000);
     timer.current=value;//this will not 

   }
  function stopClock(){
    console.log(timer);
    clearInterval(timer);
  }
  return <div>
    {currentCount}
    <br />
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>
  </div>
}
export default App;