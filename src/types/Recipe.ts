export type Difficulty =
  | 'Enkel'
  | 'Middels'
  | 'Krevende';

export interface Ingredient {
  quantity: string;
  unit?: string;
  name: string;
  note?: string;
}

export interface RecipeStep {
  title?: string;
  description: string;
}

export interface Recipe {
  id: string;
  title: string;
  category: string;
  description?: string;

  servings: number;
  preparationTime: string;
  difficulty: Difficulty;

  tags: string[];
  allergens: string[];
  notes: string[];

  sourcePage?: number;
  image?: string;

  ingredients: Ingredient[];
  steps: RecipeStep[];
}