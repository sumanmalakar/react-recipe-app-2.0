import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import './App.css'
import RecipeId from './Components/RecipeId'
import Category from './Components/Category'


const App = () => {

  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([])

  useEffect(() => {

    const fetchData   =  async () =>{
      const api = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")

      const data = await api.json();

      // console.log(data.meals)
      setPopular(data.meals);

    }
  


    const trendingData   =  async () =>{
      // const api = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php?c=Chicken")
      // const api = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=Chicken")
      // const api = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=Chicken")
      // const api = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=american")

      const data = await api.json();

      // console.log(data);
      // console.log(data.meals)
      setTrending(data.meals)


    }

    fetchData()
    trendingData()


    
  }, [])
  

  return (
  <>
  <Router>
    <Routes>
<Route path = "/" element={<Home popular={popular} trending={trending} />} />
<Route path = "/:recipeId" element={<RecipeId trending={trending} />} />
<Route path = "/category/:name" element={<Category trending={trending} />} />

  </Routes>


  </Router>

  </>
  )
}

export default App