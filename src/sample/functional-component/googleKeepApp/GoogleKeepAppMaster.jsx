import React, { useState } from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Footer from './Footer';
import Note from './Note';

const GoogleKeepApp =()=>{    
    const [note, setNote]= useState([])
    const addNewNote = (note)=>{
        setNote((oldVal)=>{
            return [
                ...setNote,
                note
            ]
        })
    }
    return (
        <React.Fragment>
            <Header />
            <CreateNote addNote={addNewNote} />
            <Note />
            <Footer />
        </React.Fragment>
    )
}

export default GoogleKeepApp;