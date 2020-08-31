import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (prop) => {
    const [notes, setNotes] = useState({
        title:'',
        content:''
    });
    const setInputData = (event)=>{
        const [name, value]=event.target;
        setNotes((oldVal)=>{
            return{
                ...oldVal,
                [name]:value
            }
        })
    }
    
    const addNewNote=()=>{
        event.preventDefault();
        prop.addNote(notes)
    }
    return (
        <React.Fragment>
            <div className="main_note">
                <form onSubmit={addNewNote}>
                    <div className="row p-5">
                        <div className="col-md-12">
                            <input type="text" 
                            placeholder="Title" 
                            autoComplete="off" 
                            onChange={setInputData} 
                            name="title" 
                            value={notes.title} 
                            />
                        </div>
                        <div className="col-md-12">
                            <textarea rows="4" column="" 
                            placeholder="Write a note" 
                            onChange={setInputData} 
                            name="content" 
                            value={notes.content} 
                            />
                        </div>
                        <button className="btn" type="submit">
                            <AddIcon />
                        </button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default CreateNote;