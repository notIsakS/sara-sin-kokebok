import type { Ingredient, Recipe } from '../types/Recipe';

interface RecipeViewProps {
  recipe: Recipe;
  onReturnToMenu: () => void;
}

interface IngredientGroup {
  title: string;
  ingredients: Ingredient[];
}

function groupIngredients(ingredients: Ingredient[]): IngredientGroup[] {
  const groups = new Map<string, Ingredient[]>();

  ingredients.forEach((ingredient) => {
    const title = ingredient.group ?? 'Ingredienser';
    const current = groups.get(title) ?? [];
    current.push(ingredient);
    groups.set(title, current);
  });

  return Array.from(groups, ([title, groupedIngredients]) => ({
    title,
    ingredients: groupedIngredients,
  }));
}

function RecipeView({ recipe, onReturnToMenu }: RecipeViewProps) {
  const ingredientGroups = groupIngredients(recipe.ingredients);

  return (
    <main className="recipe-page">
      <button className="back-button" type="button" onClick={onReturnToMenu}>
        ← Tilbake til oppskriftene
      </button>

      <article className="recipe">
        <header className="recipe__header">
          <div className="recipe__labels">
            <span>{recipe.category}</span>
            <span>{recipe.difficulty}</span>
          </div>

          <h1>{recipe.title}</h1>

          {recipe.description && (
            <p className="recipe__description">{recipe.description}</p>
          )}

          <dl className="recipe__metadata">
            <div>
              <dt>Mengde</dt>
              <dd>{recipe.yield ?? `${recipe.servings} porsjoner`}</dd>
            </div>

            <div>
              <dt>Total tid</dt>
              <dd>{recipe.preparationTime}</dd>
            </div>

            <div>
              <dt>Vanskelighetsgrad</dt>
              <dd>{recipe.difficulty}</dd>
            </div>
          </dl>
        </header>

        {recipe.tags.length > 0 && (
          <section className="recipe__tags" aria-label="Tags">
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

            {ingredientGroups.map((group) => (
              <div className="ingredient-group" key={group.title}>
                {ingredientGroups.length > 1 && <h3>{group.title}</h3>}

                <ul className="ingredient-list">
                  {group.ingredients.map((ingredient, index) => (
                    <li key={`${group.title}-${ingredient.name}-${index}`}>
                      <span className="ingredient-list__amount">
                        {[ingredient.quantity, ingredient.unit]
                          .filter(Boolean)
                          .join(' ')}
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
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="recipe__section">
            <h2>Fremgangsmåte</h2>

            <ol className="recipe-steps">
              {recipe.steps.map((step, index) => (
                <li key={`${step.title ?? 'trinn'}-${index}`}>
                  {step.title && <h3>{step.title}</h3>}
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section className="recipe-information">
          <h2>Allergener</h2>

          {recipe.allergens.length > 0 ? (
            <p>
              <strong>Inneholder:</strong> {recipe.allergens.join(', ')}
            </p>
          ) : (
            <p>Ingen sikre merkepliktige allergener er identifisert fra råvarelisten.</p>
          )}

          {recipe.possibleAllergens && recipe.possibleAllergens.length > 0 && (
            <p className="recipe-warning">
              <strong>Kan inneholde, avhengig av produktvalg:</strong>{' '}
              {recipe.possibleAllergens.join(', ')}
            </p>
          )}

          {recipe.allergenNotes?.map((note) => (
            <p className="recipe-information__note" key={note}>
              {note}
            </p>
          ))}
        </section>

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
