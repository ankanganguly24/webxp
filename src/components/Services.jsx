import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assessts/3..jpg"
import img2 from "../assessts/4.webp"



const Services = () => {
  return (
    <div>

    <Carousel infiniteLoop autoplay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>

        <div>
            <img src={img1} alt="Item1"/>
            <p>Our Fullstack services</p>
        </div>

        <div>
            <img src={img2} alt="Item1"/>
            <p>5Star Services</p>
        </div>

        
    </Carousel>

    </div>
  )
}

export default Services