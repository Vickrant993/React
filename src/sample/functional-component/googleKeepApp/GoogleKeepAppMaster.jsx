import React from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Footer from './Footer';

const GoogleKeepApp =()=>{
    return (
        <React.Fragment>
            <Header />
            <Footer />
            <CreateNote />
        </React.Fragment>
    )
}

export default GoogleKeepApp;