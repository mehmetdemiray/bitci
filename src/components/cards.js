import React from 'react';

export const Card = (props) => {
    return (
        <div className="card-outer" style={{marginRight: `${props.margin}px`,}}>
            <img alt={props.data.id} src={props.data.webformatURL} height={`${props.cardWidth}px`} width={`${props.cardWidth}px`}></img>
        </div>
    )
}