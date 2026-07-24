import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'peanott-ramen',
  title: 'Peanøtt-ramen',
  category: 'Middag',
  description:
    'Kremet ramensuppe med peanøttsmør, melk, soyasaus og chili.',
  servings: 4,
  yield: 'Ca. 4 porsjoner',
  preparationTime: 'Ca. 30 minutter',
  difficulty: 'Enkel',
  tags: ['Middag', 'Ramen', 'Asiatisk', 'Suppe', 'Sterk'],
  allergens: ['Peanøtter', 'Melk', 'Soya', 'Sesam'],
  possibleAllergens: ['Gluten', 'Selleri'],
  allergenNotes: [
    'Vanlig soyasaus og mange nudler inneholder gluten. Bruk glutenfrie varianter ved behov.',
    'Buljong kan inneholde selleri og andre allergener.',
  ],
  notes: [
    'Fremgangsmåten var ikke skrevet i bildet og er rekonstruert ut fra ingrediensene.',
    'Nudler er nødvendig for retten, men mengde og type var ikke oppgitt i råvarelisten.',
  ],
  ingredients: [
    { quantity: '0,5', unit: 'stk.', name: 'gul løk' },
    { quantity: '2', unit: 'fedd', name: 'hvitløk' },
    { quantity: '2', unit: 'ss', name: 'chiliflak' },
    { quantity: '1', unit: 'ts', name: 'ingefær' },
    { quantity: '', name: 'chili crisp', note: 'etter smak' },
    { quantity: '6', unit: 'dl', name: 'buljong' },
    { quantity: '4', unit: 'dl', name: 'melk' },
    { quantity: '2', unit: 'ss', name: 'peanøttsmør' },
    { quantity: '1', unit: 'ss', name: 'soyasaus', note: 'smak til' },
    { quantity: '1', unit: 'ss', name: 'sesamolje' },
    { quantity: '', name: 'ramennudler', note: 'mengde etter behov', group: 'Til servering' },
  ],
  steps: [
    {
      title: 'Fres aromatene',
      description:
        'Finhakk løk og hvitløk. Fres dem i en kjele med litt olje sammen med chiliflak og ingefær til løken er myk.',
    },
    {
      title: 'Lag suppen',
      description:
        'Tilsett buljong og melk. Visp inn peanøttsmør, soyasaus og sesamolje. Kok forsiktig opp og la suppen småkoke noen minutter.',
    },
    {
      title: 'Smak til',
      description:
        'Smak til med chili crisp og eventuelt mer soyasaus. Unngå kraftig koking dersom melken skiller seg lett.',
    },
    {
      title: 'Server',
      description:
        'Kok nudlene etter anvisningen på pakken og fordel dem i skåler. Hell suppen over og server med ønsket topping.',
    },
  ],
};
