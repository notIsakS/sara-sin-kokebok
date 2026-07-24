import type { Recipe } from '../types/Recipe';

interface RecipeListProps {
  recipes: Recipe[];
  onSelectRecipe: (recipeId: string) => void;
}

function RecipeList({ recipes, onSelectRecipe }: RecipeListProps) {
  if (recipes.length === 0) {
    return (
      <div className="no-results">
        <h2>Ingen oppskrifter funnet</h2>
        <p>Endre eller nullstill filtrene for å vise flere oppskrifter.</p>
      </div>
    );
  }

  return (
    <section className="recipe-results" aria-labelledby="recipe-results-heading">
      <header className="recipe-results__header">
        <div>
          <p className="recipe-results__eyebrow">Digital kokebok</p>
          <h1 id="recipe-results-heading">Oppskrifter</h1>
        </div>
        <span>{recipes.length} {recipes.length === 1 ? 'resultat' : 'resultater'}</span>
      </header>

      <div className="recipe-list">
        {recipes.map((recipe) => (
          <article
            className="recipe-list-card"
            key={recipe.id}
            role="button"
            tabIndex={0}
            aria-label={`Åpne oppskriften ${recipe.title}`}
            onClick={() => onSelectRecipe(recipe.id)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onSelectRecipe(recipe.id);
              }
            }}
          >
            <div className="recipe-list-card__content">
              <div className="recipe-list-card__labels">
                <span>{recipe.category}</span>
                <span>{recipe.difficulty}</span>
              </div>

              <h2>{recipe.title}</h2>
              {recipe.description && (
                <p className="recipe-list-card__description">{recipe.description}</p>
              )}

              <dl className="recipe-list-card__metadata">
                <div>
                  <dt>Tid</dt>
                  <dd>{recipe.preparationTime}</dd>
                </div>
                <div>
                  <dt>Mengde</dt>
                  <dd>{recipe.yield ?? `${recipe.servings} porsjoner`}</dd>
                </div>
              </dl>

              <ul className="tag-list" aria-label="Tags">
                {recipe.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>

              <p className="recipe-list-card__ingredients">
                <strong>Ingredienser:</strong>{' '}
                {recipe.ingredients.slice(0, 5).map((ingredient) => ingredient.name).join(', ')}
                {recipe.ingredients.length > 5 && ' …'}
              </p>
            </div>

            <span className="open-recipe-button" aria-hidden="true">
              Åpne oppskrift
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RecipeList;
