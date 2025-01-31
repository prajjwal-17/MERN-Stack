import { useState } from "react";


//custom hook
function useCounter(){
    const [count,setCount]=useState(0);

    function increaseCount(){
        setCount(c=>c+1)
    }
    return {
        count: count,
        increaseCount: increaseCount
    }
}

function App(){
    const {count,increaseCount}=useCounter();
    return <div>
         <button onClick={increaseCount}>Increase {count}</button>
         <Counter/>
    </div>
}

export default App;