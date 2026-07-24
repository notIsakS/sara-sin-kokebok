import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'lasagne',
  title: 'Lasagne',
  category: 'Middag',

  description:
    'Klassisk lasagne med kjøttsaus og hvit saus.',

  servings: 6,
  preparationTime: '1 time og 30 minutter',
  difficulty: 'Middels',

  tags: [
    'Familierett',
    'Ovnsrett',
  ],

  allergens: [
    'Gluten',
    'Melk',
  ],

  notes: [
    'La lasagnen hvile i omtrent 10 minutter før servering.',
  ],

  sourcePage: 24,

  ingredients: [
    {
      quantity: '400',
      unit: 'g',
      name: 'kjøttdeig',
    },
    {
      quantity: '1',
      unit: 'stk.',
      name: 'løk',
    },
    {
      quantity: '2',
      unit: 'stk.',
      name: 'hvitløksfedd',
    },
    {
      quantity: '400',
      unit: 'g',
      name: 'hakkede tomater',
    },
    {
      quantity: '9',
      unit: 'stk.',
      name: 'lasagneplater',
    },
    {
      quantity: '5',
      unit: 'dl',
      name: 'hvit saus',
    },
    {
      quantity: '150',
      unit: 'g',
      name: 'revet ost',
    },
  ],

  steps: [
    {
      title: 'Lag kjøttsausen',
      description:
        'Stek kjøttdeig, løk og hvitløk. Tilsett hakkede tomater og la sausen småkoke.',
    },
    {
      title: 'Monter lasagnen',
      description:
        'Legg kjøttsaus, hvit saus og lasagneplater lagvis i en ildfast form.',
    },
    {
      title: 'Tilsett ost',
      description:
        'Fordel revet ost over det øverste laget.',
    },
    {
      title: 'Stek',
      description:
        'Stek lasagnen ved 200 grader i omtrent 35 minutter.',
    },
  ],
};
