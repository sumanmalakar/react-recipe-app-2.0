import React from 'react'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const TrendingSlider = ({trending}) => {
    const settings = {
        dots: false,
        infinite: true,
        pauseOnHover: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 100,
        cssEase: "linear",
        arrow:false,
      
      };
      return (
        <div style={{
         
          width:'100%',
          margin:'auto'


        }}>


<Slider {...settings}


>

{
  trending ?(
  trending.map((data)=>{
    return(
    
    <div key={data.idMeal}>

<Link  to={`/${data.idMeal}`}>
<div className="slide">
  <img src={data.strMealThumb}  
   width={150}
   height={100}
   alt="img" />
</div>
   </Link>



</div>
    )
  })
  ):"Loading..."
  }


  </Slider>


















{/*        
        <Slider {...settings}

style={{
   
   

}}
        
        
        >
       	<div>

			<div className="slide">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png"   width={150}
      height={90} alt="img" />
			</div>

      </div>

			<div>

			<div className="slide">
				<img src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Emblem.jpg"  width={150}
      height={90} alt="img" />
			</div>
      </div>
			
      <div>

			<div className="slide">
				<img src="https://static.vecteezy.com/system/resources/previews/020/927/336/original/lenovo-logo-brand-phone-symbol-design-china-mobile-illustration-red-and-white-free-vector.jpg"  width={150}
      height={90} alt="img" />
			</div>
      </div>
			
      <div>
        
			<div className="slide">
				<img src="https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2021/08/Sony-Logo-Font.jpg?fit=1100%2C800&ssl=1"  width={150}
      height={90} alt="img" />
			</div>
      </div>
			
      <div>
        
			<div className="slide">
				<img src="https://wallpaperaccess.com/full/81635.jpg"  width={150}
      height={90}  alt="img"/>
      </div>
			</div>
			
      <div>
        
			<div className="slide">
				<img src="https://images.samsung.com/is/image/samsung/assets/in/about-us/brand/logo/mo/256_144_3.png?$512_N_PNG$"  width={150}
      height={90} alt="img" />
      </div>
			</div>

      <div>
        
            <div className="slide">
				<img src="https://ww1.freelogovectors.net/wp-content/uploads/2023/03/apple_logo-freelogovectors.net_-1.png"  width={150}
      height={90}  alt="img"/>
      </div>
			</div>


      <div>
        
			<div className="slide">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/1024px-Xiaomi_logo_%282021-%29.svg.png"  width={150}
      height={90} alt="img" />
      </div>
			</div>

      <div>
            <div className="slide">
				<img src="https://cdn.freebiesupply.com/logos/large/2x/vivo-1-logo-png-transparent.png"  width={150}
      height={90} alt="img" />
      </div>
			</div>

      <div>
			<div className="slide">
				<img src="https://download.logo.wine/logo/Oppo/Oppo-Logo.wine.png"  width={150}
      height={90} alt="img" />
      </div>
			</div>

      <div>
        
            <div className="slide">
				<img src="https://www.nokia.com/sites/default/files/styles/scale_1440_no_crop/public/2023-02/nokia-refreshed-logo-1_1.jpg.webp"  width={150}
      height={90} alt="img" />
      </div>
			</div>

      <div>
        
			<div className="slide">
				<img src="https://i.gadgets360cdn.com/large/Oneplus_newlogo_main_1584369675960.jpg"  width={150}
      height={90} alt="img" />
      </div>
			</div>

      <div>
        
            <div className="slide">
				<img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Realme_logo.png"   width={150}
      height={90} alt="img" />
      </div>
			</div>
			
      <div>
        
			<div className="slide">
				<img src="https://logowik.com/content/uploads/images/511_motorola.jpg"  width={150}
      height={90} alt="img" />
      </div>
			</div>

      <div>
        
            <div className="slide">
				<img src="https://static.vecteezy.com/system/resources/previews/020/927/126/original/infinix-brand-logo-phone-symbol-black-design-china-mobile-illustration-with-green-background-free-vector.jpg"  width={150}
      height={90} alt="img" />
      </div>
			</div>

      <div>
        
			<div className="slide">
				<img src="https://images.moneycontrol.com/static-mcnews/2020/05/Poco-Logo.jpg?impolicy=website&width=1600&height=900"  width={150}
      height={90} alt="img" />
      </div>
			</div>
        </Slider> */}



      </div>



      );
}

export default TrendingSlider