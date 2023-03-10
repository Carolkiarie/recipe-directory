import { useState } from 'react'
import { useHistory } from 'react-router-dom'

// styles
import './searchBar.css'

export default function Searchbar() {
  const [term, setTerm] = useState('')
  let history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    history.push(`/search?q=${term}`)
  }

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input 
          id="search" 
          type="text" 
          onChange={(e) => setTerm(e.target.value)} 
          required 
        />
      </form>
    </div>
  )
}