import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'eltefritt-brod',
  title: 'Eltefritt brød',
  category: 'Bakst',
  description:
    'Kaldhevet grovbrød med hvetemel, havregryn og valgfri frøblanding.',
  servings: 12,
  yield: '1 brød',
  preparationTime: 'Over natten + ca. 50 minutter steking',
  difficulty: 'Enkel',
  tags: ['Bakst', 'Brød', 'Eltefritt', 'Kaldhevet', 'Vegetar'],
  allergens: ['Gluten'],
  possibleAllergens: ['Sesam'],
  allergenNotes: [
    'Valgfrie frø kan inneholde sesam. Kontroller frøblandingen ved sesamallergi.',
  ],
  notes: [
    'Oppskriften angir «100 g grovt mel» uten nærmere kornslag.',
  ],
  ingredients: [
    { quantity: '350', unit: 'g', name: 'hvetemel' },
    { quantity: '100', unit: 'g', name: 'grovt mel' },
    { quantity: '160', unit: 'g', name: 'havregryn' },
    { quantity: '5', unit: 'dl', name: 'kaldt vann' },
    { quantity: '1', unit: 'ts', name: 'gjær' },
    { quantity: '1', unit: 'ts', name: 'salt' },
    { quantity: '', name: 'valgfri frøblanding', note: 'etter ønske' },
  ],
  steps: [
    {
      title: 'Rør sammen',
      description:
        'Rør sammen alle ingrediensene om kvelden. Dekk til og la deigen heve på kjøkkenbenken over natten.',
    },
    {
      title: 'Gjør klart for steking',
      description:
        'Ha deigen i en egnet brødform eller form den forsiktig til et brød. Lag et snitt i toppen før steking.',
    },
    {
      title: 'Stek',
      description:
        'Stek ved 210 °C i omtrent 50 minutter. Avkjøl på rist.',
    },
  ],
};
