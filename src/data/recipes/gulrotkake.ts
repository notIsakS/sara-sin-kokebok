import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'gulrotkake',
  title: 'Gulrotkake',
  category: 'Kaker og dessert',
  description:
    'Saftig gulrotkake med grønt eple, mørk sjokolade og ostekrem.',
  servings: 12,
  yield: '1 kake',
  preparationTime: 'Ca. 1 time og 30 minutter',
  difficulty: 'Middels',
  tags: ['Vegetar', 'Kake', 'Bakst', 'Sjokolade'],
  allergens: ['Egg', 'Gluten', 'Melk'],
  possibleAllergens: ['Soya', 'Nøtter'],
  allergenNotes: [
    'Sjekk merkingen på mørk sjokolade for soya, melk og eventuelle spor av nøtter.',
  ],
  notes: [
    'Stekes ved 180 °C i 50–60 minutter.',
    'La kaken bli helt avkjølt før ostekremen fordeles over.',
  ],
  ingredients: [
    { quantity: '3', unit: 'stk.', name: 'egg', group: 'Kake' },
    { quantity: '2,5', unit: 'dl', name: 'nøytral matolje', group: 'Kake' },
    { quantity: '275', unit: 'g', name: 'sukker', group: 'Kake' },
    { quantity: '2', unit: 'ts', name: 'vaniljesukker', group: 'Kake' },
    { quantity: '1', unit: 'ts', name: 'kanel', group: 'Kake' },
    { quantity: '0,25–0,5', unit: 'ts', name: 'muskat', group: 'Kake' },
    { quantity: '0,5', unit: 'ts', name: 'natron', group: 'Kake' },
    { quantity: '0,5', unit: 'ts', name: 'bakepulver', group: 'Kake' },
    { quantity: '325', unit: 'g', name: 'hvetemel', group: 'Kake' },
    { quantity: '100', unit: 'g', name: 'mørk sjokolade', note: 'grovhakket', group: 'Kake' },
    { quantity: '400', unit: 'g', name: 'gulrot', note: 'revet', group: 'Kake' },
    { quantity: '1,5', unit: 'stk.', name: 'grønt eple', note: 'revet', group: 'Kake' },
    { quantity: '200', unit: 'g', name: 'smør', note: 'romtemperert', group: 'Ostekrem' },
    { quantity: '400–500', unit: 'g', name: 'melis', group: 'Ostekrem' },
    { quantity: '400', unit: 'g', name: 'kremost', note: 'romtemperert', group: 'Ostekrem' },
    { quantity: '1', unit: 'ts', name: 'vaniljesukker', group: 'Ostekrem' },
  ],
  steps: [
    {
      title: 'Forbered',
      description:
        'Sett ovnen på 180 °C. Smør eller kle en egnet kakeform. Mål opp ingrediensene, og riv gulrot og eple på den fine siden av rivjernet.',
    },
    {
      title: 'Lag røren',
      description:
        'Pisk egg og sukker lyst og luftig. Pisk inn oljen. Sikt inn hvetemel, natron, bakepulver, vaniljesukker, kanel og muskat, og vend forsiktig sammen.',
    },
    {
      title: 'Tilsett gulrot, eple og sjokolade',
      description:
        'Vend grovhakket sjokolade, revet gulrot og revet eple inn i røren. Hell røren i formen.',
    },
    {
      title: 'Stek',
      description:
        'Stek kaken midt i ovnen på rist i 50–60 minutter. Kontroller med en kakepinne, og avkjøl kaken i formen før den tas ut.',
    },
    {
      title: 'Lag ostekremen',
      description:
        'Rør sammen romtemperert smør og melis. Pisk inn kremost og vaniljesukker til en jevn krem. Fordel kremen over den avkjølte kaken.',
    },
  ],
};
