import React from 'react';
// import ReactDom from 'react-dom';
import './styles/netflixProject.css';

const NetflixCard=(props)=>{
    return(
        <React.Fragment>            
            <div className="cards">
                <div className="card">
                    <img 
                    src={props.cardImg}
                    className="img-card"
                    alt="card images"
                    width="250"
                    />
                </div>
                <div className="card-info">
                    <span className="card-title">{`${props.cardTitle}`}</span>
                    <a className="btn btn-link" href={props.cardLinkUrl}>Watch</a>
                </div>
            </div>            
        </React.Fragment>
    )
}

export default NetflixCard;