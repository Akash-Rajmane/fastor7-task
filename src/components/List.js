import React from 'react';
import Card from './Card';
import "./List.css";

const List = ({data}) => {
    
  return (
    <ul className='list'>
        {data.map(el=>{
            return(
                <Card
                    key={el.restaurant_id}
                    name={el.restaurant_name}
                    location={el.location}
                    rating={el.rating.restaurant_avg_rating}
                    image={el.images[0].url}
                    id={el.restaurant_id}
                />
            )
        })}
    </ul>
  )
}

export default List;