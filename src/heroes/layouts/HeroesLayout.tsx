import { Link } from "react-router"

export const HeroesLayout = () => {
  return (
    <div className="p-20 bg-blue-400">
      <h1>Heroes Layout</h1>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/heroes/1">Hero</Link>
        </li>
        <li>
            <Link to="/search">Search</Link>
        </li>
        <li>
            <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </div>
  )
}