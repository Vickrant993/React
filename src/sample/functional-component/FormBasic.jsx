import React, { useState } from 'react';


const MyForm = () => {
    // const fname;

    const [fData, setFormData] = useState({
        fName: "",
        lName: "",
        email: "",
        mobile: ""
    });
    // const [fullname, setFullName] = useState('');
    // const [lName, setLname] = useState('');
    // const [mobile, setMobile] = useState('');
    // const [email, setEamil] = useState('');
    const submitForm = (event) => {
        event.preventDefault();
        // setFullName(fname)
    }
    const inputValChange = (event) => {
        // console.log("event.target.value ==> ", event.target)
        const { value, name } = event.target;

        setFormData((previousData) => {
            if (name === 'fName') {
                return {
                    fName: value,
                    lName: previousData.lName,
                    email: previousData.email,
                    mobile: previousData.mobile
                }
            } else if (name === 'lName') {
                return {
                    fName: previousData.fName,
                    lName: value,
                    email: previousData.email,
                    mobile: previousData.mobile
                }
            } else if (name === 'email') {
                return {
                    fName: previousData.fName,
                    lName: previousData.lName,
                    email: value,
                    mobile: previousData.mobile
                }
            } else if (name === 'mobile') {
                return {
                    fName: previousData.fName,
                    lName: previousData.lName,
                    email: previousData.email,
                    mobile: value
                }
            }
        });
    }
    return (
        <React.Fragment>
            <div>
                <form>
                    <h1>Hello {fData.fName} {fData.lName}
                        <p>{fData.email}</p>
                        <p>{fData.mobile}</p>
                    </h1>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        name='fName'
                        value={fData.fName}
                        onChange={inputValChange}
                    /><br /><br />
                    <input
                        type="text"
                        placeholder="Enter Your Last Name"
                        name='lName'
                        value={fData.lName}
                        onChange={inputValChange}
                    /><br /><br />
                    <input
                        type="text"
                        placeholder="Enter Your Email"
                        name='email'
                        value={fData.email}
                        onChange={inputValChange}
                    /><br /><br />
                    <input
                        type="text"
                        placeholder="Enter Your Mobile No."
                        name='mobile'
                        value={fData.mobile}
                        onChange={inputValChange}
                    /><br /><br />
                    <button type="submit" onClick={submitForm} > Submit </button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default MyForm;