import React, { useState } from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Footer from './Footer';
import Note from './Note';

const GoogleKeepApp =()=>{    
    const [notes, setNote]= useState([])
    const addNewNote = (note)=>{
        setNote((oldVal)=>{
            return [
                ...oldVal,
                note
            ]
        })
    }
    return (
        <React.Fragment>
            <Header />
            <CreateNote addNote={addNewNote} />            
            {
                notes.map((currVal,index)=>{
                    return(
                    <Note 
                    key={index}
                    id={index}
                    title={currVal.title}
                    content={currVal.content}
                    />
                    )
                })
            }
            <Footer />
        </React.Fragment>
    )
}

export default GoogleKeepApp;