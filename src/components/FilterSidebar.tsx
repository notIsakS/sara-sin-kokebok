import type { Allergen, Difficulty, Recipe } from '../types/Recipe';

interface FilterSidebarProps {
  recipes: Recipe[];
  searchTerm: string;
  ingredientTerm: string;
  selectedCategories: string[];
  selectedDifficulties: Difficulty[];
  selectedTags: string[];
  excludedAllergens: Allergen[];
  resultCount: number;
  onSearchTermChange: (value: string) => void;
  onIngredientTermChange: (value: string) => void;
  onToggleCategory: (category: string) => void;
  onToggleDifficulty: (difficulty: Difficulty) => void;
  onToggleTag: (tag: string) => void;
  onToggleAllergen: (allergen: Allergen) => void;
  onClearCategories: () => void;
  onClearDifficulties: () => void;
  onClearAllergens: () => void;
  onReset: () => void;
}

const difficultyOrder: Difficulty[] = ['Enkel', 'Middels', 'Krevende'];

function getUniqueValues(values: string[]): string[] {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, 'nb-NO'));
}

function FilterSidebar({
  recipes,
  searchTerm,
  ingredientTerm,
  selectedCategories,
  selectedDifficulties,
  selectedTags,
  excludedAllergens,
  resultCount,
  onSearchTermChange,
  onIngredientTermChange,
  onToggleCategory,
  onToggleDifficulty,
  onToggleTag,
  onToggleAllergen,
  onClearCategories,
  onClearDifficulties,
  onClearAllergens,
  onReset,
}: FilterSidebarProps) {
  const categories = getUniqueValues(recipes.map((recipe) => recipe.category));
  const tags = getUniqueValues(recipes.flatMap((recipe) => recipe.tags));
  const allergens = getUniqueValues(
    recipes.flatMap((recipe) => [
      ...recipe.allergens,
      ...(recipe.possibleAllergens ?? []),
    ]),
  ) as Allergen[];
  const difficulties = difficultyOrder.filter((difficulty) =>
    recipes.some((recipe) => recipe.difficulty === difficulty),
  );

  return (
    <aside className="filter-sidebar" aria-label="Filtrer oppskrifter">
      <div className="filter-sidebar__header">
        <div>
          <p className="filter-sidebar__eyebrow">Finn en rett</p>
          <h2>Filtre</h2>
        </div>
        <button className="filter-reset" type="button" onClick={onReset}>
          Nullstill
        </button>
      </div>

      <p className="filter-result-count" aria-live="polite">
        {resultCount} {resultCount === 1 ? 'oppskrift' : 'oppskrifter'}
      </p>

      <div className="filter-control">
        <label htmlFor="recipe-search">Søk i alt</label>
        <input
          id="recipe-search"
          type="search"
          value={searchTerm}
          placeholder="Navn, tag eller allergen"
          onChange={(event) => onSearchTermChange(event.target.value)}
        />
      </div>

      <div className="filter-control">
        <label htmlFor="ingredient-search">Ingrediens</label>
        <input
          id="ingredient-search"
          type="search"
          value={ingredientTerm}
          placeholder="Eksempel: egg"
          onChange={(event) => onIngredientTermChange(event.target.value)}
        />
      </div>

      <fieldset className="filter-choice-group">
        <legend>
          <span>Kategori</span>

          <span className="filter-choice-legend-actions">
            {selectedCategories.length > 0 && (
              <span className="filter-selection-count">
                {selectedCategories.length}
              </span>
            )}

            <button
              type="button"
              className="filter-choice-clear"
              onClick={onClearCategories}
            >
              Alle
            </button>
          </span>
        </legend>

        <div className="filter-choice-grid">
          {categories.map((category) => (
            <label className="filter-choice" key={category}>
              <input
                className="filter-choice__input"
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => onToggleCategory(category)}
              />

              <span className="filter-choice__label">
                {category}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="filter-choice-group">
        <legend>
          <span>Vanskelighetsgrad</span>

          <span className="filter-choice-legend-actions">
            {selectedDifficulties.length > 0 && (
              <span className="filter-selection-count">
                {selectedDifficulties.length}
              </span>
            )}

            <button
              type="button"
              className="filter-choice-clear"
              onClick={onClearDifficulties}
            >
              Alle
            </button>
          </span>
        </legend>

        <div className="filter-choice-grid">
          {difficulties.map((difficulty) => (
            <label className="filter-choice" key={difficulty}>
              <input
                className="filter-choice__input"
                type="checkbox"
                checked={selectedDifficulties.includes(difficulty)}
                onChange={() => onToggleDifficulty(difficulty)}
              />

              <span className="filter-choice__label">
                {difficulty}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <details className="filter-section">
        <summary>
          <span>Unngå allergener</span>
          {excludedAllergens.length > 0 && (
            <span className="filter-selection-count">
              {excludedAllergens.length}
            </span>
          )}
        </summary>

        <div className="filter-section-actions">
          <button
            type="button"
            className="filter-choice-clear"
            onClick={onClearAllergens}
          >
            Alle
          </button>
        </div>

        <div className="filter-choice-grid filter-choice-grid--allergens">
          {allergens.map((allergen) => (
            <label className="filter-choice" key={allergen}>
              <input
                className="filter-choice__input"
                type="checkbox"
                checked={excludedAllergens.includes(allergen)}
                onChange={() => onToggleAllergen(allergen)}
              />

              <span className="filter-choice__label">
                {allergen}
              </span>
            </label>
          ))}
        </div>
      </details>

      <details className="filter-section">
        <summary>
          <span>Tags</span>
          {selectedTags.length > 0 && (
            <span className="filter-selection-count">
              {selectedTags.length}
            </span>
          )}
        </summary>

        <div className="filter-choice-grid">
          {tags.map((tag) => (
            <label className="filter-choice" key={tag}>
              <input
                className="filter-choice__input"
                type="checkbox"
                checked={selectedTags.includes(tag)}
                onChange={() => onToggleTag(tag)}
              />

              <span className="filter-choice__label">
                {tag}
              </span>
            </label>
          ))}
        </div>
      </details>
    </aside>
  );
}

export default FilterSidebar;
