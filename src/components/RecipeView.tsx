import type { Recipe } from '../types/Recipe';

interface RecipeViewProps {
  recipe: Recipe;
  onReturnToMenu: () => void;
}

function RecipeView({
  recipe,
  onReturnToMenu,
}: RecipeViewProps) {
  return (
    <main className="recipe-page">
      <button
        className="back-button"
        type="button"
        onClick={onReturnToMenu}
      >
        ← Tilbake til oppskrifter
      </button>

      <article className="recipe">
        <header className="recipe__header">
          <div className="recipe__labels">
            <span>{recipe.category}</span>
            <span>{recipe.difficulty}</span>
          </div>

          <h1>{recipe.title}</h1>

          {recipe.description && (
            <p className="recipe__description">
              {recipe.description}
            </p>
          )}

          <dl className="recipe__metadata">
            <div>
              <dt>Porsjoner</dt>
              <dd>{recipe.servings}</dd>
            </div>

            <div>
              <dt>Tilberedningstid</dt>
              <dd>
                {recipe.preparationTime}
              </dd>
            </div>

            <div>
              <dt>Vanskelighetsgrad</dt>
              <dd>{recipe.difficulty}</dd>
            </div>

            {recipe.sourcePage !== undefined && (
              <div>
                <dt>Original bokside</dt>
                <dd>{recipe.sourcePage}</dd>
              </div>
            )}
          </dl>
        </header>

        {recipe.tags.length > 0 && (
          <section className="recipe__tags">
            <h2 className="visually-hidden">
              Egenskaper
            </h2>

            <ul className="tag-list">
              {recipe.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </section>
        )}

        <div className="recipe__columns">
          <section className="recipe__section">
            <h2>Ingredienser</h2>

            <ul className="ingredient-list">
              {recipe.ingredients.map(
                (ingredient, index) => (
                  <li
                    key={`${ingredient.name}-${index}`}
                  >
                    <span className="ingredient-list__amount">
                      {ingredient.quantity}

                      {ingredient.unit &&
                        ` ${ingredient.unit}`}
                    </span>

                    <span>
                      {ingredient.name}

                      {ingredient.note && (
                        <span className="ingredient-list__note">
                          {' '}
                          ({ingredient.note})
                        </span>
                      )}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </section>

          <section className="recipe__section">
            <h2>Fremgangsmåte</h2>

            <ol className="recipe-steps">
              {recipe.steps.map(
                (step, index) => (
                  <li key={index}>
                    {step.title && (
                      <h3>{step.title}</h3>
                    )}

                    <p>{step.description}</p>
                  </li>
                ),
              )}
            </ol>
          </section>
        </div>

        {recipe.allergens.length > 0 && (
          <section className="recipe-information">
            <h2>Allergener</h2>

            <p>
              {recipe.allergens.join(', ')}
            </p>
          </section>
        )}

        {recipe.notes.length > 0 && (
          <section className="recipe-information">
            <h2>Notater</h2>

            <ul>
              {recipe.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </main>
  );
}

export default RecipeView;