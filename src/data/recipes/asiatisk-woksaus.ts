import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'asiatisk-woksaus',
  title: 'Asiatisk woksaus',
  category: 'Saus og base',
  description:
    'Konsentrert woksaus med østerssaus, lys og mørk soyasaus og fiskesaus.',
  servings: 4,
  yield: 'Saus til ca. 4 porsjoner wok',
  preparationTime: 'Ca. 5 minutter',
  difficulty: 'Enkel',
  tags: ['Saus', 'Wok', 'Asiatisk', 'Rask'],
  allergens: ['Bløtdyr', 'Fisk', 'Soya', 'Gluten'],
  possibleAllergens: [],
  allergenNotes: [
    'Østerssaus inneholder bløtdyr, fiskesaus inneholder fisk, og vanlig soyasaus inneholder ofte hvete.',
  ],
  notes: [
    'Fremgangsmåten er standardisert fordi bildet bare oppga ingredienslisten.',
  ],
  ingredients: [
    { quantity: '3', unit: 'ss', name: 'østerssaus' },
    { quantity: '2', unit: 'ss', name: 'lys soyasaus' },
    { quantity: '1', unit: 'ts', name: 'mørk soyasaus' },
    { quantity: '2', unit: 'ss', name: 'fiskesaus' },
    { quantity: '1', unit: 'ss', name: 'sukker' },
  ],
  steps: [
    {
      title: 'Bland sausen',
      description:
        'Rør sammen østerssaus, lys soyasaus, mørk soyasaus, fiskesaus og sukker til sukkeret er oppløst.',
    },
    {
      title: 'Bruk i wok',
      description:
        'Tilsett sausen mot slutten av stekingen og vend den raskt inn i kjøtt, fisk eller grønnsaker. La den koke inn i 1–2 minutter.',
    },
  ],
};
