import React, { useState } from 'react';


const MyForm = () => {
    // const fname;
    
    const [fname, stFname] = useState('');
    const [fullname, setFullName]=useState('');
    const submitForm = () => {
        setFullName(fname)
    }
    const inputValChange = (event) => {
        event.target.value
        stFname(event.target.value)
    }
    return (
        <React.Fragment>
            <div>
                <h1>Hello {fullname}</h1>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    name='fName'
                    value={fname}
                    onChange={inputValChange}
                />
                <button type="button" onClick={submitForm}>Submit</button>
            </div>
        </React.Fragment>
    )
}

export default MyForm;