import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = (prop) => {
    return (
        <React.Fragment>
            <div className="main_note">
                <form>
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
                </form>
            </div>
        </React.Fragment>
    )
}

export default Note;