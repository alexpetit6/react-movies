import { Link } from "react-router-dom"

export default function NavBar({user}) {
  return (
    <nav>
      { user ?
        <>
          <Link to="/">Movie List Page</Link>
          &nbsp; | &nbsp;
          <Link to="/actors">Actor List Page</Link>
          &nbsp; | &nbsp;
          User: {user}
        </>
        :
        <Link to="/">Log In</Link>

      }
    </nav>
  )
}