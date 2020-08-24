import React, { useState } from 'react';



const SampleHooks = () => {
    const [count,setCount] = useState(0);
    const IncNum = () => {
        setCount(count+1);
    }
    return (
        <React.Fragment>
            <h1>{count}</h1>
            <button onClick={IncNum}>Click Me</button>
        </React.Fragment>
    )
}

export default SampleHooks;