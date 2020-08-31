import React from 'react';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = () => {
    return (
<React.Fragment>
    <div className="main_note">
        <form>
            <input type="text" placeholder="Title" />
            <textarea rows="4" column="" placeholder="Write a note" />
            <button>
                <AddIcon />
            </button>
        </form>
    </div>
</React.Fragment>
)
}

export default CreateNote;