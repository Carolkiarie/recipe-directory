import RecipeList from "../../components/RecipeList"
import { useFetch } from "../../hooks/useFetch"
import './Home.css'

export default function () {
const { data, isPending, errror} = useFetch('http://localhost:3000/recipes')

  return (
    <div className="home">
        {errror && <p className="error">{errror}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {data && <RecipeList data ={data}/>}
    </div>
  )
}
