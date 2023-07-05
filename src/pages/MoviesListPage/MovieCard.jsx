import { Link } from "react-router-dom"

export default function MovieCard({movie}) {

  const {posterPath, releaseDate, title, cast} = movie
  return (
    <Link to={`movies/${title}`} >
      <div>
        <h1>{title}</h1>
        <h3>{releaseDate}</h3>
        <img src={posterPath} alt="" />
      </div>
    </Link>
  )
}