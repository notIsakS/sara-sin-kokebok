import type { Recipe } from '../types/Recipe';

interface MainMenuProps {
  recipes: Recipe[];
  onSelectRecipe: (recipeId: string) => void;
}

function MainMenu({
  recipes,
  onSelectRecipe,
}: MainMenuProps) {
  if (recipes.length === 0) {
    return (
      <p className="empty-message">
        Ingen oppskrifter ble funnet.
      </p>
    );
  }

  return (
    <main className="main-menu">
      <header className="main-menu__header">
        <p className="main-menu__eyebrow">
          Digital kokebok
        </p>

        <h1>Saras kokebok</h1>

        <p>
          Velg en rett for å se ingredienser og
          fremgangsmåte.
        </p>
      </header>

      <section
        className="recipe-grid"
        aria-label="Oppskrifter"
      >
        {recipes.map((recipe) => (
          <button
            key={recipe.id}
            className="recipe-card"
            type="button"
            onClick={() =>
              onSelectRecipe(recipe.id)
            }
          >
            <div className="recipe-card__top">
              <span className="recipe-card__category">
                {recipe.category}
              </span>

              <span className="recipe-card__difficulty">
                {recipe.difficulty}
              </span>
            </div>

            <h2>{recipe.title}</h2>

            {recipe.description && (
              <p className="recipe-card__description">
                {recipe.description}
              </p>
            )}

            <dl className="recipe-card__metadata">
              <div>
                <dt>Tid</dt>
                <dd>{recipe.preparationTime}</dd>
              </div>

              <div>
                <dt>Porsjoner</dt>
                <dd>{recipe.servings}</dd>
              </div>
            </dl>

            {recipe.tags.length > 0 && (
              <ul
                className="tag-list"
                aria-label="Egenskaper"
              >
                {recipe.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}

            <span className="recipe-card__action">
              Åpne oppskrift
            </span>
          </button>
        ))}
      </section>
    </main>
  );
}

export default MainMenu;