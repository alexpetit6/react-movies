import { movies } from '../../data';
import MovieCard from './MovieCard'

export default function MoviesListPage() {
  const MovieCards = movies.map(m => (
    <MovieCard movie={m} />
  ))
  return (
    <ul>
      {MovieCards}
    </ul>
  )
}