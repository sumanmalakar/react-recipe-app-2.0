import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Navbar from './Navbar'
import TrendingSlider from './TrendingSlider'

const RecipeId = ({ trending }) => {
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState({})


  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      const data = await api.json();
      console.log(data.meals[0])
      setRecipe(data.meals[0]);
    }
    fetchData()
  }, [recipeId])


  return (
    <>
      <div className='main'>
        <Navbar />

        <div style={{ width: '90%', margin: 'auto',textAlign:'center'

// backgroundColor:'yellow' 

}}>
         <h1>{recipe.strMeal}</h1>

          <div style={{
            // marginTop:'0.5rem',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center'
          }}>

          <div className="img" 
             style={{  width:'33%',
             display:'flex',
            justifyContent:'center',
            alignItems:'center'
            }}
            
          >
            <img src={recipe.strMealThumb} alt=""
             style={{
              width:'80%',
              borderRadius:'5%'
              // backgroundColor:'yellow'
            }}
              />
          </div>


          <div style={{ color: 'white', textAlign:'center',
          //  backgroundColor:'yellow'
          maxWidth:'60%'
           , marginTop:'0' }}>
            <div className="button">
              <button className='btn'>Instruction</button>
              <button className='btn'>Ingredient</button>
            </div>

            <p>{recipe.strInstructions}</p>
           

          </div>

          </div>
        </div>

<div style={{
   
   marginTop:'1rem',
 
 }}>


        <TrendingSlider trending={trending}
        
        />
        </div>
      </div>
    </>
  )
}

export default RecipeId