import React from 'react';


function Order(props) {
    return <div className="Order">
        <p>{props.label}  x{props.info.count}  {props.info.total} KGS <button onClick = {() =>props.sub(props.name)}>X</button></p>
    </div>
}


export default Order;