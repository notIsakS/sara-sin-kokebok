import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'kjottgryte',
  title: 'Kjøttgryte – base',
  category: 'Middag',
  description:
    'Langkokt storfegryte med løk, kaffe og kakao, som kan varieres med grønnsaker og urter.',
  servings: 6,
  yield: 'Ca. 6 porsjoner',
  preparationTime: 'Ca. 2 timer og 45 minutter',
  difficulty: 'Middels',
  tags: ['Middag', 'Langkokt', 'Storfe', 'Gryterett'],
  allergens: ['Gluten'],
  possibleAllergens: ['Melk'],
  allergenNotes: [
    'Oppskriften kan lages uten melk ved å bruke olje i stedet for smør.',
  ],
  notes: [
    'Forslag til grønnsaker: potet, gulrot, sopp og kålrot.',
    'Forslag til urter: oregano, timian, laurbærblad, rosmarin og kruspersille.',
    'Server gjerne med potetstappe, godt brød eller tyttebærsyltetøy.',
  ],
  ingredients: [
    { quantity: '800', unit: 'g', name: 'storfekjøtt', note: 'for eksempel høyrygg, skåret i terninger' },
    { quantity: '250', unit: 'g', name: 'sjalottløk eller gul løk' },
    { quantity: '3', unit: 'ss', name: 'smør eller olje' },
    { quantity: '2', unit: 'ss', name: 'hvetemel' },
    { quantity: '0,5', unit: 'dl', name: 'vann', note: 'til jevning' },
    { quantity: '1', unit: 'dl', name: 'sterk kaffe eller espresso' },
    { quantity: '2', unit: 'ts', name: 'kakaopulver' },
    { quantity: '', name: 'valgte grønnsaker', note: 'for eksempel potet, gulrot, sopp eller kålrot' },
    { quantity: '', name: 'valgte urter', note: 'for eksempel timian, laurbærblad, rosmarin eller persille' },
    { quantity: '', name: 'salt og pepper', note: 'etter smak' },
  ],
  steps: [
    {
      title: 'Brun kjøttet',
      description:
        'Skjær kjøttet i terninger på omtrent 2 × 2 cm. Brun kjøttet i smør eller olje, gjerne i flere omganger.',
    },
    {
      title: 'Kok kraft og kjøtt',
      description:
        'Legg kjøttet i en stor kjele og hell over kaldt vann til det akkurat dekker. Kok opp, senk varmen og la kjøttet småkoke i minst 2 timer. Fjern skum underveis. Kraften som dannes, er basen i gryten.',
    },
    {
      title: 'Stek løken',
      description:
        'Del løken og stek den i smør eller olje. Ha den over i gryten. Løken kan også brunes sammen med kjøttet i starten.',
    },
    {
      title: 'Tilsett grønnsaker',
      description:
        'Kutt ønskede grønnsaker i passende biter og ha dem i gryten i tide til at de blir møre uten å koke i stykker.',
    },
    {
      title: 'Jevn gryten',
      description:
        'Visp hvetemel og 0,5 dl vann sammen. Hell jevningen i gryten under stadig omrøring. Kok opp og la gryten småkoke.',
    },
    {
      title: 'Smaksett',
      description:
        'Rør kaffe og kakaopulver sammen og ha blandingen i gryten. Finhakk urtene, tilsett dem og smak til med salt og pepper.',
    },
  ],
};
