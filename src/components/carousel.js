﻿import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {COUNT, MAX_CARD_WIDTH, ACTIVE_PAGE, MARGINH} from './../redux/types'; 
import axios from 'axios';
import {Card} from './cards';


export const Carousel = (props) => {
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const settings = useSelector(state => state.SETTINGS)

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo',);
        setData(result.data.hits);
        dispatch({type: COUNT, payload: result.data.hits.length});
        setLoading(false);
      };

      fetchData();
    }, [dispatch]);

    useEffect(() => {
      dispatch({type: MAX_CARD_WIDTH, payload: (props.maxWidth-((settings.inPage-1)*settings.margin))/settings.inPage})
    }, [props.maxWidth, settings.inPage, settings.margin, dispatch])

    useEffect(() => {
      dispatch({type: ACTIVE_PAGE, payload: props.direction})
      dispatch({type: MARGINH, payload: props.direction*(settings.maxCardWidth + settings.margin)})
    }, [props.direction, dispatch, settings.margin, settings.maxCardWidth])


    return (
      loading ? null:
        <>
          <div className="carousel" style={{height: `${settings.maxCardWidth}px`, marginLeft: `${settings.marginH}px`, width: `${(settings.count*(settings.maxCardWidth + settings.margin))-settings.margin}px`}}>
              {data.map((item) =>
                <Card key={item.id} data={item} margin={settings.margin} cardWidth={settings.maxCardWidth} />
              )}
          </div>
        </>
    )
}