import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'kjott-spagetti',
  title: 'Kjøtt-spagetti',
  category: 'Middag',
  description:
    'Fyldig kjøttsaus med rødvin, tomat, rosmarin og mørk kjøttbuljong, blandet med spaghetti og pastavann.',
  servings: 8,
  yield: 'Ca. 6–8 porsjoner',
  preparationTime: 'Ca. 1 time og 15 minutter',
  difficulty: 'Middels',
  tags: ['Middag', 'Pasta', 'Kjøttdeig', 'Italiensk-inspirert'],
  allergens: ['Gluten', 'Melk'],
  possibleAllergens: ['Egg', 'Selleri', 'Sulfitt'],
  allergenNotes: [
    'Vanlig spaghetti inneholder gluten og kan også inneholde egg. Kontroller emballasjen.',
    'Kjøttbuljong kan inneholde selleri, og rødvin kan inneholde sulfitt.',
    'Melk kommer fra smør og parmesan. Bruk melkefrie alternativer ved behov.',
  ],
  notes: [
    'Spaghetti, pastavann, olivenolje og parmesan er nevnt i fremgangsmåten, men uten oppgitte mengder.',
  ],
  ingredients: [
    { quantity: '800', unit: 'g', name: 'kjøttdeig' },
    { quantity: '3–4', unit: 'dl', name: 'rødvin' },
    { quantity: '4–5', unit: 'dl', name: 'mørk kjøttbuljong' },
    { quantity: '2', unit: 'stk.', name: 'gul løk' },
    { quantity: '8–10', unit: 'fedd', name: 'hvitløk' },
    { quantity: '3', unit: 'ss', name: 'tomatpuré' },
    { quantity: '400', unit: 'g', name: 'hele tomater' },
    { quantity: '2', unit: 'ss', name: 'smør' },
    { quantity: '2', unit: 'stk.', name: 'laurbærblad' },
    { quantity: '2', unit: 'stilker', name: 'rosmarin' },
    { quantity: '', name: 'salt og pepper', note: 'etter smak' },
    { quantity: '', name: 'spaghetti', note: 'kokt, mengde etter behov', group: 'Til servering' },
    { quantity: '', name: 'pastavann', note: 'spar litt fra kokingen', group: 'Til servering' },
    { quantity: '', name: 'olivenolje', note: 'til servering', group: 'Til servering' },
    { quantity: '', name: 'parmesan', note: 'revet, til servering', group: 'Til servering' },
    { quantity: '', name: 'nykvernet pepper', note: 'til servering', group: 'Til servering' },
  ],
  steps: [
    {
      title: 'Brun kjøttet',
      description:
        'Stek kjøttdeigen i en stor panne eller gryte til vannet har fordampet og kjøttet har fått farge.',
    },
    {
      title: 'Tilsett løk og tomatpuré',
      description:
        'Tilsett hakket gul løk og hvitløk. Stek til løken er myk. Rør inn tomatpuré og stek videre i omtrent 2 minutter.',
    },
    {
      title: 'Reduser rødvinen',
      description:
        'Hell i rødvin og la den koke inn til omtrent halvparten er igjen.',
    },
    {
      title: 'Kok sausen',
      description:
        'Tilsett hele tomater, kjøttbuljong, rosmarinstilker og laurbærblad. La sausen småkoke uten lokk til den er tykk og nesten all overflødig væske har fordampet.',
    },
    {
      title: 'Bland med pasta',
      description:
        'Fjern rosmarinstilkene og laurbærbladene. Bland inn kokt spaghetti og litt pastavann. Smak til med salt og pepper.',
    },
    {
      title: 'Server',
      description:
        'Server med olivenolje, revet parmesan og nykvernet pepper.',
    },
  ],
};
