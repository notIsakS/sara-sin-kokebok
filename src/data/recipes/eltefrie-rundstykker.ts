import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'eltefrie-rundstykker',
  title: 'Eltefrie rundstykker',
  category: 'Bakst',
  description:
    'Enkel kaldhevet deig som røres sammen kvelden før og stekes uten elting.',
  servings: 10,
  yield: 'Ca. 8–12 rundstykker',
  preparationTime: '12–18 timer heving + ca. 30 minutter steking',
  difficulty: 'Enkel',
  tags: ['Bakst', 'Rundstykker', 'Eltefritt', 'Kaldhevet', 'Vegansk'],
  allergens: [],
  possibleAllergens: ['Gluten'],
  allergenNotes: [
    'Allergenet avhenger av hvilket mel som velges. Vanlig hvete-, rug- eller byggmel inneholder gluten.',
  ],
  notes: [
    'Oppskriften angir valgfritt mel. Bruk en meltype som passer ønsket resultat og allergibehov.',
  ],
  ingredients: [
    { quantity: '500', unit: 'g', name: 'valgfritt mel' },
    { quantity: '1', unit: 'ts', name: 'salt' },
    { quantity: '0,25', unit: 'ts', name: 'tørrgjær' },
    { quantity: '4', unit: 'dl', name: 'kaldt vann' },
  ],
  steps: [
    {
      title: 'Rør sammen deigen',
      description:
        'Rør sammen mel, salt, tørrgjær og kaldt vann om kvelden. Dekk til og la deigen heve på kjøkkenbenken i 12–18 timer.',
    },
    {
      title: 'Brett deigen',
      description:
        'Ha godt med mel på arbeidsflaten og skrap deigen ut. Brett kantene inn mot midten og snu deigen.',
    },
    {
      title: 'Del opp',
      description:
        'Skjær deigen i ønsket størrelse uten å arbeide den for mye. Legg emnene på et stekebrett.',
    },
    {
      title: 'Stek fra kald ovn',
      description:
        'Sett brettet nederst i kald ovn. Still ovnen på 200 °C og stek i omtrent 30 minutter, til rundstykkene er gylne og gjennomstekte.',
    },
  ],
};
