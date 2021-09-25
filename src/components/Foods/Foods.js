import React from 'react';
import './Foods.css'

const Foods = (props) => {
    const { strMeal, strArea, strMealThumb, strCategory } = props.meal
    return (
        <div className="food">
            <img width="250" src={strMealThumb} alt="" />
            <div className="food-info">
                <h4>Name: {strMeal}</h4>
                <div className="l-height">
                    <p>Origin: {strArea}</p>
                    <p>Category: {strCategory}</p>
                </div>
                <button onClick={() => props.detailsHandler(props.meal)}
                    className="btn-details">
                    Show Details
                </button>
            </div>

        </div>
    );
};

export default Foods;