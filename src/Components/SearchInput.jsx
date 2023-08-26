import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TrendingSlider from './TrendingSlider'
import { useParams, Link } from 'react-router-dom'


const SearchInput = ({trending}) => {
    const {searchTerm} = useParams();

    const [data, setData] = useState([]);

  
    useEffect(() => {
  
      const fetchData   =  async () =>{
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        const data = await api.json();

        // console.log(data.meals)

        setData(data.meals);
  
      }
    

      fetchData()

    }, [searchTerm])
    
  


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
    data.map((d)=>{
        return(

   <Link to={`/${d.idMeal}`} className='link' key={d.idMeal}> 
     <div className='img'>
        <img src={d.strMealThumb} alt="" style={{width:'80%',
    borderRadius:'6%'}}
 />
     </div>
     <h3>{d.strMeal}</h3>
   </Link>


        )
    })
}
         
    </div>
    </div>


        <TrendingSlider trending={trending} />


    </>
  )
}

export default SearchInput