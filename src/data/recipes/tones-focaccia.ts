import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'tones-focaccia',
  title: 'Tones focaccia',
  category: 'Brød og bakst',
  description: 'En enkel, luftig focaccia med olivenolje, urter og flaksalt.',
  servings: 8,
  yield: '1 langpanne eller stort stekebrett',
  preparationTime: 'Ca. 2 timer og 15 minutter',
  difficulty: 'Enkel',
  tags: ['Vegetar', 'Brød', 'Gjærbakst', 'Italiensk'],
  allergens: ['Gluten'],
  notes: [
    'Stekes ved 180 °C i ca. 20–30 minutter, til brødet er gyllent.',
    'Forslag til topping: Maldonsalt, oregano, timian og rosmarin.',
  ],
  ingredients: [
    { quantity: '9', unit: 'dl', name: 'hvetemel' },
    { quantity: '0,5', unit: 'pose', name: 'tørrgjær' },
    { quantity: '4,5', unit: 'dl', name: 'lunkent vann' },
    { quantity: '1', unit: 'klype', name: 'salt' },
    { quantity: '1', unit: 'ss', name: 'sukker' },
    { quantity: '1', unit: 'ss', name: 'honning' },
    { quantity: '0,5–1', unit: 'dl', name: 'olivenolje' },
    { quantity: '', name: 'urter og flaksalt', note: 'til topping' },
  ],
  steps: [
    {
      title: 'Sikt melet',
      description:
        'Sikt hvetemelet gjennom et dørslag eller en sikt to ganger.',
    },
    {
      title: 'Bland deigen',
      description:
        'Tilsett tørrgjær, sukker, honning og salt. Hell i lunkent vann og bland raskt sammen. Ikke arbeid deigen mer enn nødvendig.',
    },
    {
      title: 'Første heving',
      description:
        'Dekk til og la deigen heve til omtrent dobbel størrelse, ca. 1 time.',
    },
    {
      title: 'Ha deigen i form',
      description:
        'Velv deigen over i en oljet form eller på et stekebrett. La den etterheve i 30–45 minutter.',
    },
    {
      title: 'Topp focacciaen',
      description:
        'Lag fordypninger i deigen med fingrene. Hell over olivenolje og dryss over urter og flaksalt.',
    },
    {
      title: 'Stek',
      description:
        'Stek ved 180 °C i 20–30 minutter, til focacciaen er gyllen.',
    },
  ],
};
