import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'kanelboller',
  title: 'Kanelboller',
  category: 'Gjærbakst',
  description: 'Myke hveteboller med smør, sukker og kanel.',
  servings: 18,
  yield: 'Ca. 18 boller',
  preparationTime: 'Ca. 2 timer og 45 minutter',
  difficulty: 'Middels',
  tags: ['Vegetar', 'Bakst', 'Gjærbakst', 'Kanel'],
  allergens: ['Gluten', 'Melk', 'Egg'],
  notes: [
    'Stekes ved 200 °C i omtrent 14–15 minutter.',
    'Boken oppgir både full og halv mengde kanelfyll. Denne filen bruker full mengde.',
  ],
  ingredients: [
    { quantity: '900', unit: 'g', name: 'hvetemel', group: 'Bolledeig' },
    { quantity: '150', unit: 'g', name: 'sukker', group: 'Bolledeig' },
    { quantity: '1', unit: 'pakke', name: 'gjær', group: 'Bolledeig' },
    { quantity: '2', unit: 'klyper', name: 'salt', group: 'Bolledeig' },
    { quantity: '2–4', unit: 'ts', name: 'kardemomme', group: 'Bolledeig' },
    { quantity: '5', unit: 'dl', name: 'melk', group: 'Bolledeig' },
    { quantity: '2', unit: 'stk.', name: 'egg', group: 'Bolledeig' },
    { quantity: '150', unit: 'g', name: 'smør', note: 'romtemperert, i terninger', group: 'Bolledeig' },
    { quantity: '1–2', unit: 'stk.', name: 'egg', note: 'til pensling', group: 'Pensling' },

    { quantity: '200', unit: 'g', name: 'smør', note: 'romtemperert', group: 'Kanelfyll' },
    { quantity: '125', unit: 'g', name: 'hvitt sukker', group: 'Kanelfyll' },
    { quantity: '125', unit: 'g', name: 'brunt sukker', group: 'Kanelfyll' },
    { quantity: '30', unit: 'g', name: 'kanel', note: 'ca. 5 ss', group: 'Kanelfyll' },
    { quantity: '2', unit: 'klyper', name: 'salt', group: 'Kanelfyll' },
  ],
  steps: [
    {
      title: 'Bland deigen',
      description:
        'Ha hvetemel, sukker, gjær, salt og kardemomme i en bakebolle. Visp egg og melk sammen, og varm blandingen til maksimalt 37 °C.',
    },
    {
      title: 'Elt',
      description:
        'Hell melk- og eggeblandingen i de tørre ingrediensene. Elt på lav hastighet i 10–15 minutter, til deigen begynner å slippe bollen.',
    },
    {
      title: 'Elt inn smøret',
      description:
        'Tilsett romtemperert smør i terninger og elt videre i 10–15 minutter. Øk hastigheten de siste fem minuttene. Deigen er ferdig når den er glatt og elastisk.',
    },
    {
      title: 'Første heving',
      description:
        'Dekk til bollen og la deigen heve til omtrent dobbel størrelse, ca. 1 time.',
    },
    {
      title: 'Lag fyllet og form bollene',
      description:
        'Bland smør, hvitt sukker, brunt sukker, kanel og salt. Kjevle deigen ut på en lett melet benk, fordel fyllet over og form omtrent 18 kanelboller.',
    },
    {
      title: 'Etterhev',
      description:
        'Plasser bollene på stekebrett eller i form. Dekk til og la dem etterheve i 30–40 minutter.',
    },
    {
      title: 'Stek',
      description:
        'Pensle bollene med sammenvispet egg. Stek ved 200 °C i omtrent 14–15 minutter, til de er gylne.',
    },
  ],
};
