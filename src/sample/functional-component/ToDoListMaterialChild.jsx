import React, { useState } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ToDoListMaterialChild = (prop)=>{
    const [line, setLine] = useState();

    const cutIt = ()=>{
        setLine((oldVal)=>{
            return oldVal = !oldVal
        });
    }
    return(
        <React.Fragment>
            <li style={{textDecoration: line ? 'line-through' : 'none'}}><DeleteForeverIcon onClick={cutIt} />{prop.item}</li>
        </React.Fragment>
    )
}
export default ToDoListMaterialChild;