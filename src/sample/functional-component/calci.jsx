import React from 'react';


const add =(a, b)=>{
    let sum = a+b;
    return sum;
}

const sub =(a, b)=>{
    let sub = a-b;
    return sub;
}

const multiply =(a, b)=>{
    let multi = a*b;
    return multi;
}

const divide =(a, b)=>{
    let division = a/b;
    division.toFixed(2)
    return division;
}

// export default add;
export {add ,sub, multiply, divide};