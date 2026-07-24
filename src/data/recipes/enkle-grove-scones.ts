import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'enkle-grove-scones',
  title: 'Enkle og grove scones',
  category: 'Brød og bakst',
  description: 'Raske, grove scones med yoghurt, solsikkekjerner og linfrø.',
  servings: 4,
  yield: '4 store sconesstykker',
  preparationTime: 'Ca. 30 minutter',
  difficulty: 'Enkel',
  tags: ['Vegetar', 'Grov bakst', 'Frokost', 'Rask'],
  allergens: ['Gluten', 'Melk'],
  notes: ['Stekes ved 200 °C i 20–30 minutter, til de er gylne.'],
  ingredients: [
    { quantity: '1,5', unit: 'dl', name: 'hvetemel' },
    { quantity: '1,5', unit: 'dl', name: 'sammalt hvetemel' },
    { quantity: '1', unit: 'dl', name: 'havremel' },
    { quantity: '1', unit: 'ss', name: 'bakepulver' },
    { quantity: '2', unit: 'ss', name: 'smør' },
    { quantity: '4', unit: 'ss', name: 'solsikkekjerner' },
    { quantity: '4', unit: 'ss', name: 'linfrø' },
    { quantity: '3', unit: 'dl', name: 'naturell yoghurt' },
    { quantity: '1', unit: 'skvett', name: 'melk', note: 'bare ved behov' },
  ],
  steps: [
    {
      title: 'Bland deigen',
      description:
        'Bland alle ingrediensene sammen. Spe med litt melk dersom det er nødvendig. Deigen skal være ganske klissete.',
    },
    {
      title: 'Form',
      description:
        'Legg deigen på et bakepapirkledd stekebrett. Form den til en litt flat sirkel, og del sirkelen i fire med en brødkniv.',
    },
    {
      title: 'Stek',
      description:
        'Stek ved 200 °C i 20–30 minutter, til sconesen er gyllen og gjennomstekt.',
    },
  ],
};
