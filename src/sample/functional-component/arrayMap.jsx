import React from 'react';

const dummyArr=['Vickrant','Chhetri','Impeccable']
const newArray= dummyArr.map(function(currVal, i,arr){
    return i +' : '+ currVal+' Radhey'+', ' +' '+arr;
})
const ArrayMapComp=()=>{
    return(
         newArray
    )
}

export default ArrayMapComp;