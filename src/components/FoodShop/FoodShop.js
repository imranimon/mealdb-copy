import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Foods from '../Foods/Foods';
import './FoodShop.css'

const FoodShop = () => {
    const [foods, setFoods] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState([]);
    const [searchText, setSearchText] = useState('breakfast')
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [searchText])

    const detailsHandler = meal => {
        setSelectedMeal(meal)
    }

    const handleSearch = Event =>{
        setSearchText(Event.target.value);
    }

    return (
        <div>
            <div className="search-bar">
                <input onChange={handleSearch} type="text" placeholder="Search By Food Name" />
            </div>
            <div className="food-shop">
                <div className="food-container">
                    {
                        foods?.map(food => <Foods
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
        </div>
    );
};

export default FoodShop;