import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'cottage-cheese-pizzaboller',
  title: 'Cottage cheese-pizzaboller',
  category: 'Bakst',
  description:
    'Proteinrike pizzaboller med cottage cheese, skinke, ost og valgfrie grønnsaker.',
  servings: 9,
  yield: '9 pizzaboller',
  preparationTime: 'Ca. 30 minutter',
  difficulty: 'Enkel',
  tags: ['Bakst', 'Lunsj', 'Matpakke', 'Proteinrik', 'Pizzaboller'],
  allergens: ['Melk', 'Egg', 'Gluten'],
  possibleAllergens: [],
  allergenNotes: [],
  notes: [
    'Valgfrie grønnsaker i boken er blant annet mais, løk og paprika.',
  ],
  ingredients: [
    { quantity: '400', unit: 'g', name: 'cottage cheese' },
    { quantity: '3', unit: 'stk.', name: 'egg' },
    { quantity: '1', unit: 'ts', name: 'bakepulver' },
    { quantity: '150', unit: 'g', name: 'hvetemel' },
    { quantity: '100', unit: 'g', name: 'skinke' },
    { quantity: '60', unit: 'g', name: 'ost', note: 'kuttet eller revet' },
    { quantity: '', name: 'valgfrie grønnsaker', note: 'for eksempel mais, løk eller paprika' },
    { quantity: '', name: 'krydder', note: 'etter smak' },
  ],
  steps: [
    {
      title: 'Lag røren',
      description:
        'Bland egg og cottage cheese med en stavmikser eller blender til en jevn masse.',
    },
    {
      title: 'Bland inn resten',
      description:
        'Rør inn bakepulver, mel, skinke, valgfrie grønnsaker, krydder og mesteparten av osten.',
    },
    {
      title: 'Form bollene',
      description:
        'Del røren i 9 boller på et bakepapirkledd stekebrett. Fordel resten av osten på toppen.',
    },
    {
      title: 'Stek',
      description:
        'Stek ved 200 °C i 15–20 minutter, til bollene er gylne og gjennomstekte.',
    },
  ],
};
