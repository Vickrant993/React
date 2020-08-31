import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = (prop) => {
    console.log("fff ==> ", prop);
    return (
        <React.Fragment>
            
            <div className="main_note">
                <div className="row p-5">
                    <div className="col-md-12">
                        {prop.title}
                    </div>
                    <div className="col-md-12">
                        {prop.content}
                    </div>
                    <button className="btn">
                        <DeleteIcon />
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Note;