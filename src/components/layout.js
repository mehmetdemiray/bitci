import React, {useEffect, useRef, useState} from 'react';
import {useWindowWidth} from '@react-hook/window-size/throttled'
import {INPAGE} from './../redux/types'
import {Carousel} from './carousel';
import { useDispatch } from 'react-redux';

export const Layout = () => {
    const ref = useRef(null);
    const dispatch = useDispatch()
    const onlyWidth = useWindowWidth()
    const [maxWidth, setMaxWidth] = useState()
    const [direction, setDirection] = useState(0)

    useEffect(() => {
        setMaxWidth(ref.current ? ref.current.offsetWidth : 0);
    }, [ref, onlyWidth]);

    return (
        <div ref={ref} className="outer">
            <header>
                <h1>Carousel Example</h1>
            </header>
            <div className="settings">
                <label htmlFor="inpage">Sayfada Gösterilecek Sayı</label>
                <input onChange={(e) => dispatch({type: INPAGE, payload: e.target.value})} type="number" id="inpage" />
            </div>
            <Carousel maxWidth={maxWidth} direction={direction} />
            <footer>
                <button  onClick={() => setDirection(direction + 1)}>Prev</button>
                <button onClick={() => setDirection(direction - 1)}>Next</button>
            </footer>
        </div>
    )
}