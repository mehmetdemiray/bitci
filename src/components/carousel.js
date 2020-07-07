import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card} from './cards';

export const Carousel = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [inPage, setInPage] = useState(4);
    const [activePage, setActivePage] = useState(0);
    const [margin, setMargin] = useState(50);
    const [marginH, setMarginH] = useState(0)
    const [maxCardWidth, setMaxCardWidth] = useState();

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo',);
        setData(result.data.hits);
        setCount(result.data.hits.length);
        setLoading(false);
      };

      fetchData();
    }, []);

    useEffect(() => {
      setMaxCardWidth((props.maxWidth-((inPage-1)*margin))/inPage)
    }, [props.maxWidth, inPage, margin])

    useEffect(() => {
      setActivePage(props.direction)
      setMarginH(props.direction*(maxCardWidth + margin))
    }, [props.direction])


    return (
      loading ? null:
        <div className="carousel" style={{height: `${maxCardWidth}px`, marginLeft: `${marginH}px`, width: `${(count*(maxCardWidth + margin))-margin}px`}}>
            {data.map((item) =>
              <Card key={item.id} data={item} margin={margin} cardWidth={maxCardWidth} />
            )}
        </div>
    )
}