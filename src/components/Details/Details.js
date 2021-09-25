import React from 'react';
import './Details.css'

const Details = (props) => {
    const {strMeal,strInstructions,strYoutube} = props.selectedMeal
    return (
        <div className="details">
            <div className="details-header">
                <h1>Meal Details</h1>
            </div>
            <div className="details-body">
                <p><span className="text-size">Name:</span> {strMeal}</p>
                <p><span className="text-size">Instructions:</span> {strInstructions?.substr(0,700)}</p>
                <a className="youtube" href={strYoutube}>
                    <i class="fab fa-youtube"></i>
                    <span className="youtube-text">YouTube</span> 
                </a>
            </div>

        </div>
    );
};

export default Details;