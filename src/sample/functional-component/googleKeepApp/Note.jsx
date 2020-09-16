import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = (props) => {
    const deleteNoteSingle=()=>{
        props.deleteItem(props.id)
    }
    return (
        <React.Fragment>
            
            <div className="main_note">
                <div className="row p-5">
                    <div className="col-md-12">
                        {props.title}
                    </div>
                    <div className="col-md-12">
                        {props.content}
                    </div>
                    <button type="button" className="btn" onClick={()=>{props.deleteItem(props.id)}}>
                        <DeleteIcon />
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Note;