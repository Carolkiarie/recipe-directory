import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import './Recipe.css'

export default function Recipe() {
  const { id }= useParams()
  const url = ' http://localhost:3000/recipes/' +id
  const {data, isPending, error}= useFetch(url)
  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p>loading...</p>}
      {data && (
        <>
        <h2 className="page-title">{data.title}</h2>
        <p > {data.cookingTime} to cook.</p>
        <ul >
          {data.ingredients.map(ing => <li key={ing}>{ing}</li>)}
        </ul>
        <p className="method">{data.method}</p>
        </>
      )}
    </div>
  )
}
