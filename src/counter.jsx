import { useState } from "react";
function Count(){
    const [count, setCount] = useState(0);
    function increase_func(){
        setCount(count + 1);
    }
    function decrease_func(){
        setCount(count - 1);
    
    }
    return(
        <div className="div1">
            <h1>Count Value : {count}</h1> 
            <button onClick={increase_func}>Increase</button>
            <button onClick={decrease_func}>Decrease</button>
        </div>
    );
}

export default Count;