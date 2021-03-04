import React from 'react';
import './details.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Details = (props) => {
    // console.log(props.player);
    const {name, salary, image, age}=props.player;
  
    return (
        <div className="playersContainer d-flex">
            <div className="col-md-4 imageBody">
                <img className="img" src={image} alt=""/>
            </div>
            <div className="col-md-8">
                <h2>Name: {name}</h2>
                <h4><small>Age: {age} Years</small></h4>
                <h4><small>Salary: ${salary} Million</small></h4>
                <button onClick={() => props.handleAddPlayer(props.player)} className="btn btn-success"><FontAwesomeIcon icon={faUserPlus} /> Added to your club</button>
            </div>
        </div>
    );
};

export default Details;