import type { Allergen, Difficulty, Recipe } from '../types/Recipe';

interface FilterSidebarProps {
  recipes: Recipe[];
  searchTerm: string;
  ingredientTerm: string;
  selectedCategory: string;
  selectedDifficulty: string;
  selectedTags: string[];
  excludedAllergens: Allergen[];
  resultCount: number;
  onSearchTermChange: (value: string) => void;
  onIngredientTermChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onDifficultyChange: (value: string) => void;
  onToggleTag: (tag: string) => void;
  onToggleAllergen: (allergen: Allergen) => void;
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
  selectedCategory,
  selectedDifficulty,
  selectedTags,
  excludedAllergens,
  resultCount,
  onSearchTermChange,
  onIngredientTermChange,
  onCategoryChange,
  onDifficultyChange,
  onToggleTag,
  onToggleAllergen,
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

      <div className="filter-control">
        <label htmlFor="category-filter">Kategori</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          <option value="">Alle kategorier</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="filter-control">
        <label htmlFor="difficulty-filter">Vanskelighetsgrad</label>
        <select
          id="difficulty-filter"
          value={selectedDifficulty}
          onChange={(event) => onDifficultyChange(event.target.value)}
        >
          <option value="">Alle vanskelighetsgrader</option>
          {difficulties.map((difficulty) => (
            <option key={difficulty} value={difficulty}>{difficulty}</option>
          ))}
        </select>
      </div>

      <details className="filter-section">
        <summary>Unngå allergener</summary>
        <div className="filter-options">
          {allergens.map((allergen) => (
            <label className="filter-option" key={allergen}>
              <input
                type="checkbox"
                checked={excludedAllergens.includes(allergen)}
                onChange={() => onToggleAllergen(allergen)}
              />
              <span>{allergen}</span>
            </label>
          ))}
        </div>
      </details>

      <details className="filter-section">
        <summary>Tags</summary>
        <div className="filter-options">
          {tags.map((tag) => (
            <label className="filter-option" key={tag}>
              <input
                type="checkbox"
                checked={selectedTags.includes(tag)}
                onChange={() => onToggleTag(tag)}
              />
              <span>{tag}</span>
            </label>
          ))}
        </div>
      </details>
    </aside>
  );
}

export default FilterSidebar;
