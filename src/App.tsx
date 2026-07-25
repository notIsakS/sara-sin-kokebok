import { useMemo, useState } from 'react';

import FilterSidebar from './components/FilterSidebar';
import RecipeList from './components/RecipeList';
import RecipeView from './components/RecipeView';
import { recipes } from './data/recipes';
import type { Allergen, Difficulty } from './types/Recipe';

function normalize(value: string): string {
  return value.trim().toLocaleLowerCase('nb-NO');
}

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [ingredientTerm, setIngredientTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<Difficulty[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [excludedAllergens, setExcludedAllergens] = useState<Allergen[]>([]);

  const filteredRecipes = useMemo(() => {
    const normalizedSearch = normalize(searchTerm);
    const normalizedIngredient = normalize(ingredientTerm);

    return recipes.filter((recipe) => {
      const allAllergens = [
        ...recipe.allergens,
        ...(recipe.possibleAllergens ?? []),
      ];

      const searchableRecipe = normalize([
        recipe.title,
        recipe.description ?? '',
        recipe.category,
        recipe.difficulty,
        ...recipe.tags,
        ...allAllergens,
        ...recipe.ingredients.map((ingredient) =>
          `${ingredient.name} ${ingredient.note ?? ''} ${ingredient.group ?? ''}`,
        ),
      ].join(' '));

      const matchesGeneralSearch =
        normalizedSearch.length === 0 || searchableRecipe.includes(normalizedSearch);

      const matchesIngredient =
        normalizedIngredient.length === 0 ||
        recipe.ingredients.some((ingredient) =>
          normalize(`${ingredient.name} ${ingredient.note ?? ''}`).includes(
            normalizedIngredient,
          ),
        );

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(recipe.category);

      const matchesDifficulty =
        selectedDifficulties.length === 0 ||
        selectedDifficulties.includes(recipe.difficulty);

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => recipe.tags.includes(tag));

      /**
       * Mulige allergener behandles konservativt og skjules også av filteret.
       */
      const avoidsAllergens = excludedAllergens.every(
        (allergen) => !allAllergens.includes(allergen),
      );

      return (
        matchesGeneralSearch &&
        matchesIngredient &&
        matchesCategory &&
        matchesDifficulty &&
        matchesTags &&
        avoidsAllergens
      );
    });
  }, [
    searchTerm,
    ingredientTerm,
    selectedCategories,
    selectedDifficulties,
    selectedTags,
    excludedAllergens,
  ]);

  const selectedRecipe = recipes.find((recipe) => recipe.id === selectedRecipeId);

  function toggleTag(tag: string) {
    setSelectedTags((current) =>
      current.includes(tag)
        ? current.filter((currentTag) => currentTag !== tag)
        : [...current, tag],
    );
  }

  function toggleCategory(category: string) {
    setSelectedCategories((currentCategories) =>
      currentCategories.includes(category)
        ? currentCategories.filter(
            (currentCategory) =>
              currentCategory !== category,
          )
        : [...currentCategories, category],
    );
  }

  function toggleDifficulty(difficulty: Difficulty) {
    setSelectedDifficulties((currentDifficulties) =>
      currentDifficulties.includes(difficulty)
        ? currentDifficulties.filter(
            (currentDifficulty) =>
              currentDifficulty !== difficulty,
          )
        : [...currentDifficulties, difficulty],
    );
  }

  function toggleAllergen(allergen: Allergen) {
    setExcludedAllergens((current) =>
      current.includes(allergen)
        ? current.filter((currentAllergen) => currentAllergen !== allergen)
        : [...current, allergen],
    );
  }

  function clearCategories() {
    setSelectedCategories([]);
  }

  function clearDifficulties() {
    setSelectedDifficulties([]);
  }

  function clearAllergens() {
    setExcludedAllergens([]);
  }

  function resetFilters() {
    setSearchTerm('');
    setIngredientTerm('');
    setSelectedCategories([]);
    setSelectedDifficulties([]);
    setSelectedTags([]);
    setExcludedAllergens([]);
  }

  function selectRecipe(recipeId: string) {
    setSelectedRecipeId(recipeId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function returnToRecipes() {
    setSelectedRecipeId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (selectedRecipe) {
    return <RecipeView recipe={selectedRecipe} onReturnToMenu={returnToRecipes} />;
  }

  return (
    <main className="catalog-page">
      <div className="catalog-layout">
        <FilterSidebar
          recipes={recipes}
          searchTerm={searchTerm}
          ingredientTerm={ingredientTerm}
          selectedCategories={selectedCategories}
          selectedDifficulties={selectedDifficulties}
          selectedTags={selectedTags}
          excludedAllergens={excludedAllergens}
          resultCount={filteredRecipes.length}
          onSearchTermChange={setSearchTerm}
          onIngredientTermChange={setIngredientTerm}
          onToggleCategory={toggleCategory}
          onToggleDifficulty={toggleDifficulty}
          onToggleTag={toggleTag}
          onToggleAllergen={toggleAllergen}
          onClearCategories={clearCategories}
          onClearDifficulties={clearDifficulties}
          onClearAllergens={clearAllergens}
          onReset={resetFilters}
        />

        <RecipeList recipes={filteredRecipes} onSelectRecipe={selectRecipe} />
      </div>
    </main>
  );
}

export default App;
