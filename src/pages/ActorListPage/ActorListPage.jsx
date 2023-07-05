import { actors } from "../../data"
import ActorCard from "./ActorCard"

export default function ActorListPage() {
  const ActorCards = actors.map(a => <ActorCard actor={a} />)
  return (
    
      <ul>{ActorCards}</ul>
      
    
  )
}