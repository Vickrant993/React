import React from 'react';

const ToDoListChildComponent = (prop)=>{
    
    return(
        <React.Fragment>
            {
                prop.itemsListData.map((CurrentVal, index)=>{
                    return (
                    <li key={index}><button type="button" 
                    className="btn-circle remove fa fa-times" 
                    onClick={()=>{
                        {prop.onSelect(index)}
                    }}></button>{CurrentVal}</li>
                    )
                })
            }
        </React.Fragment>
    )
}

export default ToDoListChildComponent;