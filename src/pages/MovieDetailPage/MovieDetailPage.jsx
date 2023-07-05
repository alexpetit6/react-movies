import { useParams } from "react-router-dom"
import { movies } from "../../data";

export default function MovieDetailPage() {
  const params = useParams();
  const movie = movies.find(m => m.title === params.movieName)
  return (
    <>
      <h1>{movie.title}</h1>
      <h3>{movie.releaseDate}</h3>
      <img src={movie.posterPath}/>
      <h2>Cast:</h2>
      <p>{movie.cast.join(', ')}</p>
    </>
  )
}