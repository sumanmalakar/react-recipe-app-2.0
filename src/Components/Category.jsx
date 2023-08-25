import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useParams,Link } from 'react-router-dom';
import TrendingSlider from './TrendingSlider';



const Category = ({trending}) => {
    // console.log(useParams())
    const {name} = useParams();
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
        //   const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
          const data = await api.json();
          console.log(data.meals)
          setCategory(data.meals);
        }
        fetchData()
      }, [name])
    
  return (
    <>
    <Navbar />
    <div style={{width:'90%', margin:'auto', textAlign:'center',
overflowX:'hidden'}}>

        <div style={{
            marginTop:'2rem',
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit,minmax(15rem, 1fr))',
            gridGap:'2rem'
        }}>


{
    category.map((cat)=>{
        return(

   <Link to={`/${cat.idMeal}`} className='link'> 
     <div className='img'>
        <img src={cat.strMealThumb} alt="" style={{width:'80%',
    borderRadius:'6%'}}
 />
     </div>
     <h3>{cat.strMeal}</h3>
   </Link>


        )
    })
}
         
    </div>
    </div>


    <div className='main'>
        <TrendingSlider trending={trending} />
    </div>
    </>
    
  )
}

export default Category