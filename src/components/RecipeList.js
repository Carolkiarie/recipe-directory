

// styles
import './RecipeList.css'

export default function RecipeList({ data }) {
  return (
    <div className="recipe-list">
      {data.map(recipe => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <a href={`/recipes/${recipe.id}`}>Cook This</a>
        </div>
      ))}
    </div>
  )
}