import React from 'react'
import { useParams } from 'react-router-dom'
import "./Restaurant.css";
import {
    FacebookShareButton,
    PinterestShareButton,
    WhatsappShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    EmailShareButton
  } from "react-share";
import { FaFacebook,FaLinkedin,FaPinterest,FaTwitter,FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Restaurant = ({info}) => {
    const {id} = useParams(); 
    const restaurant = info.filter(el=>el.restaurant_id===id);

    const image = restaurant[0].images[0].url;
    const name = restaurant[0].restaurant_name;

  return (
    <div>
        <h1 className='res-title'>{name} </h1>
        <div className="relative-container">
                <img src={image} alt="" className="res-img" />
                <img src={"https://fastor7.com/_next/static/media/fastor_logo.fd2f7b53.svg"} alt="Logo" className="logo-img" />
            </div>
        <p className='res-text'>Share on</p>
        <div className='icons'>
            <FacebookShareButton url={image} >
                <FaFacebook />
            </FacebookShareButton>
            <WhatsappShareButton url={image} >
                <FaWhatsapp />
            </WhatsappShareButton>
            <PinterestShareButton url={image}>
                <FaPinterest/>
            </PinterestShareButton>
            <TwitterShareButton url={image}>
                <FaTwitter/>
            </TwitterShareButton>
            <LinkedinShareButton url={image}>
                <FaLinkedin/>
            </LinkedinShareButton>
            <EmailShareButton url={image}>
                <CgMail />
            </EmailShareButton>
        </div>
    </div>
  )
}

export default Restaurant;