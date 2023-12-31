import React from 'react'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


const PopularSlider = ({popular}) => {
// console.log("This is data ", popular)
    var settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // pauseOnHover: true


        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              // dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      

  return (
   <>
   <div style={{
   
  //  backgroundColor:'yellow',
   height:'50vh',
   width:'90%',
   margin:'auto'

}}
   >
    
        <Slider {...settings}

style={{
  margin:'0.1rem',
   

}}>

  {
    popular.map((data)=>{
      return(
<div key={data.idMeal}>
<Link to={`/${data.idMeal}`}>
<div className="slider">
  <img src={data.strMealThumb} style={{height:"17rem", width:'18rem'}} alt="img" />
</div>
</Link>

</div>

      )
    })
  }
       	
			
		
        </Slider>
      </div>
   </>
  )
}

export default PopularSlider