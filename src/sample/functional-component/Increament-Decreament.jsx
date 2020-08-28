import React, { useState } from 'react'
import './styles/IncDesc.css'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Tooltip from '@material-ui/core/Tooltip';

const IncDesc = () => {
    const [counter, setCounterVal] = useState(0);

    const IncreamentNum = ()=>{
        setCounterVal((oldVal)=>{
            return (oldVal+1);
        })
    }
    const DecreamentNum = ()=>{

        setCounterVal((oldVal)=>{
            if(oldVal > 0){                
                return (oldVal-1)
            }else{
                
                alert('You cannot decrease a number less than 0.')
                return(oldVal)
            }
        })
    }
    return (
        <React.Fragment>
            <div className="main_div">
                <div className="center_div">
                    <h1 className="head_center">{counter}</h1>
                    <br />
                    <form className="custom_form_styles">
                    <Tooltip title="Increament" arrow>
                        <Button
                            type="button"
                            className="btn-label"
                            onClick={IncreamentNum}
                        ><AddIcon />
                        </Button>
                        </Tooltip>
                        <Tooltip title="Decreament" arrow>
                        <Button
                            type="button"
                            className="btn-label"
                            onClick={DecreamentNum}
                        ><RemoveIcon />
                        </Button>
                        </Tooltip>
                        <br /><br />

                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default IncDesc;