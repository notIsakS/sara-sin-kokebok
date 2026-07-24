import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'chili-con-carne',
  title: 'Chili con carne',
  category: 'Middag',
  description:
    'Fyldig chili med kjøttdeig, kidneybønner, tomat, paprika og en liten mengde mørk sjokolade.',
  servings: 4,
  yield: 'Ca. 4 porsjoner',
  preparationTime: 'Ca. 45 minutter',
  difficulty: 'Enkel',
  tags: ['Middag', 'Gryterett', 'Sterk mat', 'Bønner'],
  allergens: [],
  possibleAllergens: ['Selleri', 'Gluten', 'Melk', 'Soya'],
  allergenNotes: [
    'Buljong/kjøttkraft og mørk sjokolade varierer mellom produsenter. Kontroller emballasjen for selleri, gluten, melk og soya.',
  ],
  notes: [
    'Bildet inneholdt ingrediensliste, men ingen skrevet fremgangsmåte. Trinnene nedenfor er en standardisert metode basert på ingrediensene.',
  ],
  ingredients: [
    { quantity: '400', unit: 'g', name: 'kjøttdeig' },
    { quantity: '1', unit: 'stk.', name: 'løk', note: 'finhakket' },
    { quantity: '2', unit: 'fedd', name: 'hvitløk', note: 'finhakket' },
    { quantity: '1–2', unit: 'stk.', name: 'paprika', note: 'i terninger' },
    { quantity: '400', unit: 'g', name: 'kidneybønner', note: 'avrent og skylt' },
    { quantity: '400', unit: 'g', name: 'hakkede tomater' },
    { quantity: '2', unit: 'ss', name: 'tomatpuré' },
    { quantity: '0,5', unit: 'buljongterning', name: 'kjøttkraft', note: 'eller ca. 0,5 ss konsentrert kraft' },
    { quantity: '25', unit: 'g', name: 'mørk sjokolade' },
    { quantity: '1', unit: 'ts', name: 'chilipulver' },
    { quantity: '1', unit: 'ts', name: 'spisskummen' },
    { quantity: '', name: 'salt og pepper', note: 'etter smak' },
  ],
  steps: [
    {
      title: 'Brun kjøttet',
      description:
        'Varm en gryte og brun kjøttdeigen godt. Del den opp med en sleiv mens den steker.',
    },
    {
      title: 'Stek grønnsakene',
      description:
        'Tilsett løk, hvitløk og paprika. Stek videre til løken er blank og paprikaen begynner å mykne.',
    },
    {
      title: 'Tilsett krydder og tomat',
      description:
        'Rør inn tomatpuré, chilipulver og spisskummen. Stek i omtrent ett minutt før hakkede tomater og kjøttkraft tilsettes.',
    },
    {
      title: 'La gryten småkoke',
      description:
        'La chilien småkoke uten lokk i 20–30 minutter. Rør av og til.',
    },
    {
      title: 'Tilsett bønner og sjokolade',
      description:
        'Rør inn kidneybønner og mørk sjokolade. La gryten koke i ytterligere 5–10 minutter, til sjokoladen er smeltet og bønnene er varme.',
    },
    {
      title: 'Smak til',
      description: 'Smak til med salt, pepper og eventuelt mer chili.',
    },
  ],
};
