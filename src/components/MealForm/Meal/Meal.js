import React from 'react';


function Meal(props) {
    return <div className="Meal" onClick = {() => props.func(props.info.name)} >
        <h3>{props.info.label}</h3>
        <p>Price: {props.info.price} KGS</p>
    </div>
}


export default Meal;
