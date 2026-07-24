import type { Recipe } from '../../types/Recipe';

interface RecipeModule {
  recipe: Recipe;
}

/**
 * Vite finner automatisk alle oppskriftsfiler i denne mappen.
 * Nye filer opprettet med create-recipe.sh trenger derfor ikke registreres manuelt.
 */
const modules = import.meta.glob<RecipeModule>(
  ['./*.ts', '!./index.ts'],
  { eager: true },
);

export const recipes: Recipe[] = Object.values(modules)
  .map((module) => module.recipe)
  .sort((a, b) => a.title.localeCompare(b.title, 'nb-NO'));
