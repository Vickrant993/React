import React, { useState } from 'react';
import './styles/toDoList.css'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ToDoListMaterialChild from './ToDoListMaterialChild'

const ToDoListMaterialUI = ()=>{
    const [inputItems, setInputItems] = useState('')
    const [itemsList, setItemsList]  = useState([])

    const createList = (event)=>{
        setInputItems(event.target.value);
    }
    const submitList=()=>{
        event.preventDefault();
        setItemsList((oldVal)=>{
           return [...oldVal, inputItems] 
        })
        setInputItems('');
    }

    const deleteItem = (id)=>{
        console.log(id)
    }

    return(
        <React.Fragment>
            <div className="main_div">
                <div className="center_div">
                    <form onSubmit={submitList}>
                    <h1>
                        To Do List Material UI
                    </h1>
                    <br />
                    <input 
                    type="text" 
                    className="custom_input" 
                    onChange={createList}
                    name="inputItems"
                    value={inputItems}
                    autoComplete="off"
                    placeholder="Enter items to add"
                    />
                    <Button type="submit" className="btn-circle">
                        <AddIcon />
                    </Button>

                    <br />
                    <ul>
                        {
                        itemsList.map((arrVal, index)=>{
                           return(
                                <ToDoListMaterialChild
                                key={index} 
                                item={arrVal}
                                id={index}
                                onSelect={deleteItem}
                                />
                            )
                        })
                    }
                    </ul>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ToDoListMaterialUI;