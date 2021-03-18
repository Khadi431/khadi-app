import { useState } from "react"

function Counter(){
    const [count, setCount]= useState(2);
    return(
        <div>
            <button onClick={() => setCount(count + 2)}>add</button>
            <div>count:{count}</div>
            <button onClick={() => setCount (count - 4)}>minus</button>
        </div>
    );
}

export default Counter;