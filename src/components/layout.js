import React, {useEffect, useRef, useState} from 'react';
import {useWindowWidth} from '@react-hook/window-size/throttled'
import {INPAGE, DEVICE_TYPE, MARGIN, DIRECTION, SEARCH} from './../redux/types'
import {Carousel} from './carousel';
import { useDispatch, useSelector } from 'react-redux';
import {ReactComponent as Arrow} from './../dist/img/arrow.svg';

export const Layout = () => {
    const ref = useRef(null);
    const settings = useSelector(state => state.SETTINGS)
    const dispatch = useDispatch()
    const onlyWidth = useWindowWidth()
    const [maxWidth, setMaxWidth] = useState()
    const [text, setText] = useState("")

    useEffect(() => {
        setMaxWidth(ref.current ? ref.current.offsetWidth : 0);
        changeDevice()
        function changeDevice() {
          if (onlyWidth < 480) {
            dispatch({type: DEVICE_TYPE, payload: 'mobile'})
            dispatch({type: INPAGE, payload: 1})
          } else {
            dispatch({type: DEVICE_TYPE, payload: 'desktop'})
            dispatch({type: INPAGE, payload: 5})
          }
        }
        setText(settings.searchText)
    }, [ref, onlyWidth, dispatch, settings.searchText]);

    return (
        <div ref={ref} className="outer">
            <header>
                <h1>Carousel Example</h1>
            </header>
            <div className="settings">
            <div className="row">
                <div className="column">
                    <label htmlFor="inpage">Kelime</label>
                    <div className="row">
                        <div className="column">
                            <div className="column"><input onChange={(e) => setText(e.target.value)} type="text" id="string" defaultValue={text}/></div>
                        </div>
                        <div className="column">
                            <button onClick={() => dispatch({type: SEARCH, payload: text})} className="button">Ara</button>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <label htmlFor="inpage">Sayfada Gösterilecek Sayı</label>
                    <input disabled={settings.deviceType === "mobile" ? true: false} onChange={(e) => dispatch({type: INPAGE, payload: e.target.value})} type="number" id="inpage" value={settings.inPage}/>
                </div>
                <div className="column">
                    <label htmlFor="margin">margin</label>
                    <input onChange={(e) => dispatch({type: MARGIN, payload: parseInt(e.target.value)})} type="number" id="margin" value={settings.margin}/>
                </div>
            </div>
                
            </div>
            <Carousel maxWidth={maxWidth} direction={settings.direction} />
            <footer>
                {settings.deviceType === "mobile" ? 
                    <div className="mobile-buttons" style={{top: `-${settings.maxCardWidth/2}px`}}>
                        {settings.activePage === 0 ? 
                            null : <div className="arrow left-arrow" onClick={() => dispatch({type: DIRECTION, payload: settings.direction + 1})}><Arrow /></div>
                        }
                        {
                            settings.count - settings.inPage === (0 - settings.activePage) ?
                            null : <div className="arrow right-arrow" onClick={() => dispatch({type: DIRECTION, payload: settings.direction - 1})}><Arrow /></div>
                        }
                    </div> :
                    <React.Fragment>
                        <button disabled={settings.activePage === 0 ? true : false} onClick={() => dispatch({type: DIRECTION, payload: settings.direction + 1})}>Prev</button>
                        <button disabled={settings.count - settings.inPage === (0 - settings.activePage) ? true : false} onClick={() => dispatch({type: DIRECTION, payload: settings.direction - 1})}>Next</button>
                    </React.Fragment>
                }
            </footer>
        </div>
    )
}