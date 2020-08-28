import React, { useState } from 'react';
import './styles/toDoList.css'
import ToDoListChildComponent from './ToDoListChildLi'

const ToDoListComponent = ()=>{
    const [listInput, setlistInput] = useState('');
    const [items, setItems] = useState([]);
    
    const inputValChange = (event)=>{
        setlistInput(event.target.value)
    }

    const submitItemList = ()=>{
        event.preventDefault();
        setItems((oldVal)=>{
            return [...oldVal, listInput]
        });        
        setlistInput('');
    }

    const deleteItems=(id)=>{
     setItems((oldval) => {
         return( 
            oldval.filter((arrayElem,index)=>{
            return id !==index;
            })
         )
        })
    }
    return(
        <React.Fragment>
            <div className="main_div">
                <div className="center_div">
                    <h1 className="head_center">To Do List</h1>
                    <br/>
                    <form className="custom_form_styles" onSubmit={submitItemList}>
                        <input type="text"
                        className="custom_input"
                        placeholder="Add Your Item"
                        name="listInput"
                        value={listInput} 
                        onChange={inputValChange}
                        />
                        <button 
                        type="submit" 
                        className="btn-circle add fa fa-plus" 
                        >
                        </button>
                        <br/><br/>
                        <ul>
                           <ToDoListChildComponent 
                           itemsListData={items}
                           onSelect={deleteItems} 
                            />
                        </ul>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ToDoListComponent;