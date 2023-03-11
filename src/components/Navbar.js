

// styles
import './Navbar.css'
import Searchbar from './searchBar'

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <a href="/" className="brand">
          <h1>Cooking Ninja</h1>
        </a>
        <Searchbar />
        <a href="/create">Create Recipe</a>
      </nav>
    </div>
  )
}
