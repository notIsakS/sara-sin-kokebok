export type Difficulty = 'Enkel' | 'Middels' | 'Krevende';

export type Allergen =
  | 'Gluten'
  | 'Skalldyr'
  | 'Egg'
  | 'Fisk'
  | 'Peanøtter'
  | 'Soya'
  | 'Melk'
  | 'Nøtter'
  | 'Selleri'
  | 'Sennep'
  | 'Sesam'
  | 'Sulfitt'
  | 'Lupin'
  | 'Bløtdyr';

export interface Ingredient {
  quantity: string;
  unit?: string;
  name: string;
  note?: string;
  /** Brukes for oppskrifter med flere deler, f.eks. bunn, fyll og topping. */
  group?: string;
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

  /** Numerisk verdi beholdes for kompatibilitet med eksisterende visning. */
  servings: number;
  /** Mer presis tekst, f.eks. «1 kake», «18 boller» eller «2 stekebrett». */
  yield?: string;
  preparationTime: string;
  difficulty: Difficulty;

  tags: string[];
  /** Allergener som følger direkte av ingrediensene i oppskriften. */
  allergens: Allergen[];
  /** Mulige allergener som avhenger av valgt ferdigprodukt eller alternativ ingrediens. */
  possibleAllergens?: Allergen[];
  allergenNotes?: string[];

  notes: string[];
  sourcePage?: number;
  image?: string;

  ingredients: Ingredient[];
  steps: RecipeStep[];
}
