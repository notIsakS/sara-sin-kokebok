import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'notterost-granola',
  title: 'Nøtterøst granola',
  category: 'Frokost',
  description:
    'Stor porsjon sprø granola med havregryn, kokos, mandler og valnøtter.',
  servings: 20,
  yield: 'Ca. 1,1 kg granola',
  preparationTime: 'Ca. 1–1,5 time',
  difficulty: 'Enkel',
  tags: ['Frokost', 'Granola', 'Nøtter', 'Vegansk', 'Storporsjon'],
  allergens: ['Gluten', 'Nøtter'],
  possibleAllergens: [],
  allergenNotes: [
    'Bruk sertifiserte glutenfrie havregryn dersom granolaen skal være glutenfri.',
  ],
  notes: [
    'Eksakt steketid var ikke oppgitt. Stek til granolaen er tørr og gyllen, og vend den regelmessig.',
    'Type og mengde søtning var ikke spesifisert i den håndskrevne oppskriften.',
  ],
  ingredients: [
    { quantity: '500', unit: 'g', name: 'havregryn' },
    { quantity: '200', unit: 'g', name: 'kokos' },
    { quantity: '200', unit: 'g', name: 'mandler' },
    { quantity: '200', unit: 'g', name: 'valnøtter' },
    { quantity: '', name: 'salt', note: 'etter smak' },
    { quantity: '', name: 'søtning', note: 'en liten mengde etter smak' },
    { quantity: '5', unit: 'dl', name: 'vann' },
  ],
  steps: [
    {
      title: 'Bland',
      description:
        'Bland havregryn, kokos, mandler, valnøtter, salt og ønsket søtning. Rør inn vannet til blandingen er jevnt fuktet.',
    },
    {
      title: 'Fordel på brett',
      description:
        'Fordel blandingen jevnt på to stekebrett med bakepapir.',
    },
    {
      title: 'Stek',
      description:
        'Stek ved 150 °C varmluft. Bytt plass på brettene og vend granolaen med jevne mellomrom til den er tørr, sprø og gyllen.',
    },
    {
      title: 'Avkjøl',
      description:
        'Avkjøl granolaen helt før den oppbevares i en tett beholder.',
    },
  ],
};
