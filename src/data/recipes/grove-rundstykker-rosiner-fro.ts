import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'grove-rundstykker-rosiner-fro',
  title: 'Grove rundstykker med rosiner og frø',
  category: 'Bakst',
  description:
    'Grove rundstykker med bygg, frø, valnøtter og rosiner.',
  servings: 12,
  yield: '12 rundstykker',
  preparationTime: 'Ca. 2 timer og 15 minutter',
  difficulty: 'Middels',
  tags: ['Bakst', 'Rundstykker', 'Grovbakst', 'Vegetar'],
  allergens: ['Gluten', 'Nøtter'],
  possibleAllergens: ['Sesam'],
  allergenNotes: [
    'Frøblandingen kan inneholde sesam. Kontroller blandingen dersom sesam skal unngås.',
  ],
  notes: [
    'Mengde salt og olje var ikke oppgitt i den håndskrevne oppskriften og tilsettes etter ønsket konsistens og smak.',
  ],
  ingredients: [
    { quantity: '250', unit: 'g', name: 'hvetemel' },
    { quantity: '250', unit: 'g', name: 'sammalt grov hvete' },
    { quantity: '100', unit: 'g', name: 'byggmel' },
    { quantity: '1', unit: 'pk.', name: 'gjær' },
    { quantity: '2', unit: 'ts', name: 'sukker' },
    { quantity: '', name: 'salt', note: 'etter smak' },
    { quantity: '', name: 'olje', note: 'en liten mengde i deigen' },
    { quantity: '130', unit: 'g', name: 'frøblanding' },
    { quantity: '50', unit: 'g', name: 'valnøtter' },
    { quantity: '60', unit: 'g', name: 'rosiner' },
    { quantity: '3,5', unit: 'dl', name: 'vann' },
  ],
  steps: [
    {
      title: 'Bløtlegg',
      description:
        'Bløtlegg valnøtter, frø og rosiner i 30–60 minutter. Hell av overflødig vann.',
    },
    {
      title: 'Lag deigen',
      description:
        'Bland sammen de tørre ingrediensene. Tilsett vann og litt olje, og elt til deigen slipper bollen eller arbeidsflaten.',
    },
    {
      title: 'Elt inn fyllet',
      description:
        'Elt inn rosiner, frøblanding og valnøtter til det er jevnt fordelt.',
    },
    {
      title: 'Første heving',
      description:
        'Dekk til deigen og la den heve til omtrent dobbel størrelse, minst 30 minutter.',
    },
    {
      title: 'Form rundstykkene',
      description:
        'Del deigen i 12 like emner og form dem til rundstykker. Legg dem på et stekebrett.',
    },
    {
      title: 'Etterhev og stek',
      description:
        'La rundstykkene etterheve i minst 30 minutter. Pensle dem og stek ved 220 °C i 10–15 minutter, til de er gylne og gjennomstekte.',
    },
  ],
};
