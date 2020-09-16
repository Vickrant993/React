import React from 'react'; //{createContext }
import{Switch,Route} from 'react-router-dom'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import CompA from './sample/functional-component/ContextAPI-Hook/ContextA';
// import CompA from './sample/functional-component/Pokemon-API/CompA';
import RouteMain from './sample/functional-component/Routes/Route';


// const FirstName = createContext();
// const LastName = createContext();

const AppFunctionalComp=()=>{
    // For Context Hook
    // return (
    //     <React.Fragment>
    //         <FirstName.Provider value={"Vickrant"}>
    //             <LastName.Provider value={"Chhetri"}>
    //                 <CompA />
    //             </LastName.Provider>
    //         </FirstName.Provider>
    //     </React.Fragment>
    // )

    // For UseEffect Hook
    return(        
        <React.Fragment>
            <RouteMain />
        </React.Fragment>
    )
}

export default AppFunctionalComp;
// export {FirstName, LastName}