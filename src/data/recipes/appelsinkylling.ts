import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'appelsinkylling',
  title: 'Appelsinkylling',
  category: 'Middag',
  description:
    'Kylling marinert med soyasaus og sesam, stekt og vendt i en søt, syrlig appelsinsaus.',
  servings: 2,
  yield: 'Ca. 2 porsjoner',
  preparationTime: 'Ca. 45 minutter',
  difficulty: 'Middels',
  tags: ['Middag', 'Kylling', 'Asiatisk', 'Appelsin'],
  allergens: ['Soya', 'Sesam', 'Gluten'],
  possibleAllergens: [],
  allergenNotes: [
    'Vanlig soyasaus inneholder ofte hvete. Bruk glutenfri tamari eller glutenfri soyasaus ved behov.',
  ],
  notes: [
    'Fremgangsmåten var ikke skrevet i bildet og er rekonstruert ut fra marinaden og sausen.',
  ],
  ingredients: [
    { quantity: '2', unit: 'stk.', name: 'kyllingfileter', group: 'Kylling' },
    { quantity: '1', unit: 'ss', name: 'soyasaus', group: 'Kyllingmarinade' },
    { quantity: '1', unit: 'ss', name: 'sesamolje', group: 'Kyllingmarinade' },
    { quantity: '1', unit: 'ss', name: 'riseddik', group: 'Kyllingmarinade' },
    { quantity: '1', unit: 'ts', name: 'pepper', group: 'Kyllingmarinade' },
    { quantity: '2', unit: 'fedd', name: 'hvitløk', group: 'Kyllingmarinade' },
    { quantity: '0,5', unit: 'ts', name: 'ingefær', group: 'Kyllingmarinade' },
    { quantity: '1', unit: 'ts', name: 'bakepulver', group: 'Kyllingmarinade' },
    { quantity: '2', unit: 'ss', name: 'maisstivelse', group: 'Kyllingmarinade' },
    { quantity: '0,5', unit: 'dl', name: 'soyasaus', group: 'Appelsinsaus' },
    { quantity: '', name: 'vann', note: 'en liten skvett', group: 'Appelsinsaus' },
    { quantity: '2', unit: 'ss', name: 'brunt sukker', group: 'Appelsinsaus' },
    { quantity: '2', unit: 'ss', name: 'riseddik', group: 'Appelsinsaus' },
    { quantity: '1', unit: 'ss', name: 'sesamolje', group: 'Appelsinsaus' },
    { quantity: '3', unit: 'fedd', name: 'hvitløk', group: 'Appelsinsaus' },
    { quantity: '1', unit: 'ts', name: 'ingefær', group: 'Appelsinsaus' },
    { quantity: '1', unit: 'stk.', name: 'appelsin', note: 'saft og finrevet skall', group: 'Appelsinsaus' },
    { quantity: '1', unit: 'ss', name: 'maisstivelse', note: 'til jevning', group: 'Appelsinsaus' },
  ],
  steps: [
    {
      title: 'Mariner kyllingen',
      description:
        'Skjær kyllingen i munnstore biter. Bland ingrediensene til marinaden og vend inn kyllingen. La den stå i 20–30 minutter.',
    },
    {
      title: 'Bland appelsinsausen',
      description:
        'Rør sammen soyasaus, vann, brunt sukker, riseddik, sesamolje, hvitløk, ingefær og appelsinsaft og -skall. Rør maisstivelsen ut i litt kaldt vann og sett den til side.',
    },
    {
      title: 'Stek kyllingen',
      description:
        'Varm en stor panne med litt olje. Stek kyllingbitene i omganger til de er gylne og gjennomstekte.',
    },
    {
      title: 'Kok inn sausen',
      description:
        'Hell appelsinsausen i pannen og la den koke opp. Tilsett maisstivelsesjevningen litt etter litt til sausen har ønsket tykkelse.',
    },
    {
      title: 'Vend sammen',
      description:
        'Ha kyllingen tilbake i pannen og vend den i sausen. Server straks, gjerne med ris og grønnsaker.',
    },
  ],
};
