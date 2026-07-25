import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'cookies-uten-egg-2-0',
  title: 'Cookies uten egg 2.0',
  category: 'Kaker og dessert',
  description: '',
  servings: 12,
  yield: 'Ca. 10-12 cookies',
  preparationTime: '45 minutter',
  difficulty: 'Enkel',
  tags: ['Eggfri', 'Cookies', 'Sjokolade'],
  allergens: ['Melk', 'Gluten'],
  possibleAllergens: [],
  allergenNotes: [],
  notes: [],
  ingredients: [
    {quantity: '125',
     unit: 'g',
     name: 'brunt smør'
    },
    {
      quantity: '200',
      unit: 'g',
      name: 'hvitt/brunt sukker',
    },
    {
      quantity: '1',
      name: 'flax-egg',
    },
    {
      quantity: '2',
      unit: 'ss',
      name: 'maisenna',
    },
    {
      quantity: '0.5',
      unit: 'ts',
      name: 'natron',
    },
    {
      quantity: '0.5',
      unit: 'ts',
      name: 'bakepulver',
    },
    {
      quantity: '225',
      unit: 'g',
      name: 'hvetemel',
    },
    {
      quantity: '200',
      unit: 'g',
      name: 'sjokolade',
    },
    {
      quantity: '1',
      unit: 'klype',
      name: 'maldonsalt',
    },
  ],
  steps: [
     {
      title: 'Flax-egg',
      description: 'Knus 1ss linfrø, og bland med 3 ss vann.',
    },
    {
      title:'Cookie-deig',
      description: 'Pisk smør og sukker raskt sammen, bland inn flax-egget til en kremete røre. Bland inn det tørre, og tilsett hakket sjokoade til slutt. Gjerne avkjøl i kjøleskap før steking.'
    },
    {
      title: 'Steking',
      description: 'Stekes på 180°C varmluft, ca. 10-12 min. Skru på ovnen litt før man tar ut av kjøleskapet. Avkjøl før servering.',
    },
  ],
};
