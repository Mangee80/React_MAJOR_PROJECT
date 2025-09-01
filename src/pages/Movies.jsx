import React from 'react'

const Movies = () => {
  const movies = [
    {
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
      title: "The Godfather",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    }
  ]

  return (
    <div style={{padding: "2rem"}}>
      <h1>Movies</h1>
      <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
        {movies.map((movie, index) => (
          <div key={index} style={{border: "1px solid #ccc", padding: "1rem", borderRadius: "5px"}}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Movies