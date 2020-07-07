import React, {useEffect, useRef, useState} from 'react';
import {useWindowWidth} from '@react-hook/window-size/throttled'
import {Carousel} from './carousel';

export const Layout = () => {
    const ref = useRef(null);
    const onlyWidth = useWindowWidth()
    const [maxWidth, setMaxWidth] = useState()
    const [direction, setDirection] = useState(0)

    useEffect(() => {
        setMaxWidth(ref.current ? ref.current.offsetWidth : 0);
    }, [ref, onlyWidth]);

    return (
        <div ref={ref} className="outer">
            <header><h1>Carousel Example</h1></header>
            <Carousel maxWidth={maxWidth} direction={direction}/>
            <footer>
                <button  onClick={() => setDirection(direction + 1)}>Prev</button>
                <button onClick={() => setDirection(direction - 1)}>Next</button>
            </footer>
        </div>
    )
}