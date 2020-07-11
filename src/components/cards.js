import React from 'react';
import {useSelector} from 'react-redux';

export const Card = (props) => {
    const settings = useSelector(state => state.SETTINGS)
    console.log(props)
    return (
        <div className="card-outer" style={{marginRight: `${props.margin}px`,}}>
            <img alt={props.data.id} src={props.data.webformatURL} height={`${props.cardWidth}px`} width={`${props.cardWidth}px`}></img>
            <span className="outer">{`${props.id + 1} / ${settings.count}`}</span>
        </div>
    )
}