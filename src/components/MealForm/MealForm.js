import React from 'react';
import Meal from './Meal/Meal';


function MealForm(props) {
    // распаковка ключей props.ingredients в 4 переменных: salad, meat, cheese, bacon
    // props.ingredients приходит из state.ingredients компонента App.js
    const [hamburger, cheeseburger, fries, coffee, tea, cola] = props.list;

    // создаём массивы из компонентов Salad, Meat, Cheese и Bacon,
    // используя количество, указанное в свойстве count каждого ингредиента.
    // Вариант с одним массивом для всех ингредиентов.
    let items = [];
    items.push(<Meal info = {hamburger} func = {props.add}/>);
    items.push(<Meal info = {cheeseburger} func = {props.add}/>);
    items.push(<Meal info = {fries} func = {props.add}/>);
    items.push(<Meal info = {coffee} func = {props.add}/>);
    items.push(<Meal info = {tea} func = {props.add}/>);
    items.push(<Meal info = {cola} func = {props.add}/>);

    return <div className="MealForm">
        {items}
    </div>
}


export default MealForm