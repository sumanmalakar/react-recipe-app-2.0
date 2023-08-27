import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Navbar from './Navbar'
import TrendingSlider from './TrendingSlider'

const RecipeId = ({ trending }) => {
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState({})

const [active, setActive] = useState('ingredient')

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
      
        <Navbar />

        <div style={{
          width:'98%',
           margin: 'auto',

           textAlign:'center', color:"white",

// backgroundColor:'blue' 

}}>
         <h1>{recipe.strMeal}</h1>

          <div style={{
            // marginTop:'0.5rem',
            display:'flex',
            // justifyContent:'center',
            // alignItems:'center',
            // flexWrap:'wrap',
            // gap:'2rem'
          }} className='recipeId'>

          <div className="img recipeImg" 
            
            
          >
            <img src={recipe.strMealThumb} alt=""
             style={{
              width:'50%',
              borderRadius:'5%',
              // backgroundColor:'yellow'
            }}
              />
          </div>


          <div
        //    style={{ color: 'white', textAlign:'center',
        //   //  backgroundColor:'yellow',
        //  width:'85%',
        //   minHeight:'50vh',
        //   //  marginTop:'0',
        //   //  marginLeft:"10rem" 
        //    }}
            className='recipeId-div-2'>

            <div className="button">
              <button className='btn' onClick={()=>setActive('ingredient')} >Ingredient</button>
              <button className='btn' onClick={()=>setActive('instruction')}>Instruction</button>
              </div>

           
          
              {
                active === 'ingredient' ?(
                  <>
                  <div 
                  // style={{
                  //   minWidth:'60%',
                  //   backgroundColor:'yellow'
                  // }}
                  >

                  <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>{recipe.strIngredient1} - {recipe.strMeasure1}</div>
                  <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>{recipe.strIngredient2} - {recipe.strMeasure1}</div>
                  <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>{recipe.strIngredient3} - {recipe.strMeasure1}</div>
                  <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>{recipe.strIngredient4} - {recipe.strMeasure1}</div>
                  <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>{recipe.strIngredient5} - {recipe.strMeasure1}</div>
                  <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>{recipe.strIngredient6} - {recipe.strMeasure1}</div>
                  </div>
                  </>
                ):
                (
                  //  <div style={{
                  //   width:'50%',
                  //   // margin:'auto',
                  //   backgroundColor:"blue",
                  //   textAlign:'center',
                  //   marginLeft:'10rem'
                    
                  //  }}>

                     <p>{recipe.strInstructions}</p>
              //  </div>

              
                )
              }
   
          </div>

          </div>
        </div>
{/* 
<div style={{
   
   marginTop:'0.1rem',
 
 }}>


        
        />
        </div> */}
        <TrendingSlider trending={trending} />
      
    </>
  )
}

export default RecipeId