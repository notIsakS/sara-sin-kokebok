import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'knekkebrod',
  title: 'Knekkebrød',
  category: 'Brød og bakst',
  description: 'Sprø knekkebrød med havre, rug og et rikt utvalg frø og kjerner.',
  servings: 24,
  yield: '2 stekebrett',
  preparationTime: 'Ca. 1 time og 30 minutter',
  difficulty: 'Enkel',
  tags: ['Vegetar', 'Grov bakst', 'Frokost', 'Frø og kjerner'],
  allergens: ['Gluten', 'Sesam'],
  notes: [
    'Stekes ved 150 °C varmluft i omtrent 1 time.',
    'Bytt plass på brettene flere ganger under stekingen for jevn tørking.',
  ],
  ingredients: [
    { quantity: '2', unit: 'dl', name: 'havregryn' },
    { quantity: '2', unit: 'dl', name: 'grovt sammalt rug' },
    { quantity: '2', unit: 'dl', name: 'solsikkekjerner' },
    { quantity: '2', unit: 'dl', name: 'havrekli' },
    { quantity: '2', unit: 'dl', name: 'sesamfrø' },
    { quantity: '1', unit: 'dl', name: 'gresskarkjerner' },
    { quantity: '1', unit: 'dl', name: 'linfrø' },
    { quantity: '1', unit: 'dl', name: 'hvetekli eller kruskakli' },
    { quantity: '2', unit: 'ts', name: 'salt' },
    { quantity: '7,5', unit: 'dl', name: 'vann' },
  ],
  steps: [
    {
      title: 'Bland og svelle',
      description:
        'Bland alle ingrediensene godt. La blandingen svelle i minst 10 minutter.',
    },
    {
      title: 'Fordel på brett',
      description:
        'Fordel blandingen jevnt og tynt over to bakepapirkledde stekebrett.',
    },
    {
      title: 'Forstek og del',
      description:
        'Stek ved 150 °C varmluft. Etter 15–20 minutter tar du brettene ut og deler massen i passende stykker med en pizzakutter eller kniv. Bytt samtidig plass på brettene.',
    },
    {
      title: 'Tørk ferdig',
      description:
        'Stek videre til knekkebrødene er tørre og sprø, totalt omtrent 1 time. Bytt plass på brettene 2–4 ganger, og åpne ovnsdøren kort noen ganger for å slippe ut damp.',
    },
    {
      title: 'Avkjøl',
      description: 'Avkjøl knekkebrødene helt på rist før de legges i tett beholder.',
    },
  ],
};
