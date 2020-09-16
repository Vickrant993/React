import React from 'react';
import { FirstName, LastName } from '../../../AppFunctionalComponent'



const CompC = () => {
    return (
        <React.Fragment>
            <FirstName.Consumer>{
                (fName) => {
                    return (
                        <LastName.Consumer>{
                            (lName) => {
                                return(
                                <h1>Hi this is {fName} {lName}</h1>
                                )
                            }
                        }
                        </LastName.Consumer>
                    )
                }
            }
            </FirstName.Consumer>
        </React.Fragment>
    )
}

export default CompC;