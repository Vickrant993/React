import React, { useState, useEffect } from 'react';
import CompB from './ContextB'

const CompA=()=>{
    const [num, setNum] = useState(0)
    const [nums, setNums] = useState(0)
    useEffect(()=>{
        document.title = `You cliked me ${num} times`
    },[num])

    const increamentNum=(event)=>{
        const {name, value} = event.target;
        if(name === 'btn-first')
            setNum(num+1)

        if(name === 'btn-second')
            setNums(nums+1)
    }
    return(
        <React.Fragment>
            <button type="button" name="btn-first" onClick={increamentNum}>Count is {num}</button>
            <button type="button" name="btn-second" onClick={increamentNum}>Count is {nums}</button>
        </React.Fragment>
    )
    // <CompB />
}

export default CompA;