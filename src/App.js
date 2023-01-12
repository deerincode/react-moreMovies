import { useEffect, useState } from "react"
import "./App.css"
import Form from "./components/Form"
import MovieDisplay from "./components/MovieDisplay"
import ListDisplay from "./components/ListDisplay"
export default function App() {
  const apiKey = "cc774710"
  //state to hold movie data
  const [movie, setMovie] = useState(null)
  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&S=${searchTerm}`)
      // Parse JSON response into a javascript object
      const data = await response.json()
      //set the Movie state to the movie
      setMovie(data)
    } catch (e) {
      console.error(e)
    }
  }
  const getList = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
      // Parse JSON response into a javascript object
      const data = await response.json()      //set the Movie state to the movie
      setMovie(data)
    } catch (e) {
      console.error(e)
    }
  }
  //This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Wolf")
  }, [])
  return (
    <div className="App">
      <Form moviesearch={getList} />
      <ListDisplay movie={movie} />
    </div>
  )
}