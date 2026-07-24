import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'salt-karamell',
  title: 'Salt karamell',
  category: 'Saus og tilbehør',
  description: 'Fyldig karamellsaus med kremfløte, smør og rikelig salt.',
  servings: 8,
  yield: 'Ca. 3 dl karamellsaus',
  preparationTime: 'Ca. 20 minutter',
  difficulty: 'Middels',
  tags: ['Vegetar', 'Glutenfri', 'Dessertsaus', 'Karamell'],
  allergens: ['Melk'],
  notes: [
    'I den fysiske boken står det at oppskriften gjerne kan dobles.',
    'Varm karamell kan gi alvorlige brannskader. Bruk en romslig kjele og arbeid forsiktig.',
  ],
  ingredients: [
    { quantity: '150', unit: 'g', name: 'sukker' },
    { quantity: '3', unit: 'ss', name: 'vann' },
    { quantity: '50', unit: 'g', name: 'smør' },
    { quantity: '1,5', unit: 'dl', name: 'kremfløte' },
    { quantity: '', name: 'salt', note: 'etter smak, gjerne rikelig' },
  ],
  steps: [
    {
      title: 'Karamelliser sukkeret',
      description:
        'Kok sukker og vann i en tykkbunnet kjele på middels til høy varme til blandingen er gyllen. Unngå å røre mer enn nødvendig.',
    },
    {
      title: 'Rør inn smør',
      description:
        'Trekk kjelen av platen og rør forsiktig inn smøret.',
    },
    {
      title: 'Tilsett fløte',
      description:
        'Sett kjelen tilbake på middels varme. Tilsett kremfløten litt etter litt mens du rører. Blandingen vil boble kraftig.',
    },
    {
      title: 'Kok ferdig',
      description:
        'Når all fløten er tilsatt, la karamellen koke i 3–4 minutter. Lengre koketid gir tykkere karamell. Smak til med salt.',
    },
  ],
};
