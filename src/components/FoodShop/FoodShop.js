import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Foods from '../Foods/Foods';
import './FoodShop.css'

const FoodShop = () => {
    const [foods, setFoods] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])

    const detailsHandler = meal => {
        setSelectedMeal(meal)
        console.log(meal)
    }

    return (
        <div className="food-shop">
            <div className="food-container">
                {
                    foods.map(food => <Foods
                        meal={food}
                        key={food.idMeal}
                        detailsHandler={detailsHandler}>
                    </Foods>)
                }
            </div>
            <div className="details-container">
                <Details selectedMeal={selectedMeal}></Details>
            </div>

        </div>
    );
};

export default FoodShop;