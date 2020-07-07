import React from 'react';

export const Card = (props) => {

    console.log(props)
    return (
        <div className="card-outer" style={{marginRight: `${props.margin}px`,}}>
            <img src={props.data.webformatURL} height={`${props.cardWidth}px`} width={`${props.cardWidth}px`}></img>
        </div>
    )
}