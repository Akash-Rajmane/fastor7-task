import React from 'react';
import "./Card.css";
import { useNavigate } from 'react-router-dom';

const Card = ({image,name,location,rating,id}) => {
  const navigate = useNavigate();
    
  return (
    <li className='card' onClick={()=>{ navigate(`/restaurant/${id}`)}}>
        <img src={image} alt="" className='card-img'/>
        <section className='card-section'>
            <h3 className='card-title'>{name}</h3>
            <h5 className='card-text'>{location?.location_address},{location?.city_name}</h5>
            <p className='card-rating'>Rating: {rating} ⭐</p>
        </section>
    </li>
  )
}

export default Card;