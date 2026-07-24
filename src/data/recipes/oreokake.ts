import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'oreokake',
  title: 'Oreokake 2.0',
  category: 'Kaker og dessert',
  description:
    'Kald Oreokake med kjeksbunn, ostekrem, hjemmelaget sjokolademousse og kremtopping.',
  servings: 12,
  yield: '1 kake',
  preparationTime: 'Ca. 4 timer inkludert kjøling',
  difficulty: 'Krevende',
  tags: ['Kake', 'Sjokolade', 'Kjøleskapskake'],
  allergens: ['Gluten', 'Melk', 'Egg'],
  possibleAllergens: ['Soya', 'Nøtter'],
  allergenNotes: [
    'Oreo-kjeks, kokesjokolade og eventuelle ferdigprodukter kan inneholde soya og kan være merket med spor av nøtter. Kontroller alltid emballasjen.',
  ],
  notes: [
    'Denne filen bruker mengdene som er merket «2.0» i margen i den fysiske boken.',
    'Mengden Oreo i ostekremen er tolket som omtrent 60 g, tilsvarende ca. 6 kjeks.',
    'Kaken bør få god tid til å stivne mellom lagene og før servering.',
  ],
  ingredients: [
    { quantity: '350', unit: 'g', name: 'Oreo-kjeks', group: 'Kjeksbunn' },
    { quantity: '100', unit: 'g', name: 'smør', note: 'smeltet', group: 'Kjeksbunn' },

    { quantity: '200–220', unit: 'g', name: 'kremost', group: 'Ostekrem' },
    { quantity: '100', unit: 'g', name: 'melis', group: 'Ostekrem' },
    { quantity: '2', unit: 'dl', name: 'kremfløte', group: 'Ostekrem' },
    { quantity: '60', unit: 'g', name: 'Oreo-kjeks', note: 'ca. 6 kjeks, grovhakket', group: 'Ostekrem' },
    { quantity: '1–2', unit: 'ts', name: 'sitronsaft', group: 'Ostekrem' },

    { quantity: '5', unit: 'stk.', name: 'eggeplommer', group: 'Sjokolademousse' },
    { quantity: '200', unit: 'g', name: 'kokesjokolade', group: 'Sjokolademousse' },
    { quantity: '2,5', unit: 'dl', name: 'kremfløte', note: '0,5 dl til eggene og 2 dl til pisking', group: 'Sjokolademousse' },
    { quantity: '1', unit: 'ss', name: 'melis', note: 'smak eventuelt til med mer', group: 'Sjokolademousse' },
    { quantity: '5', unit: 'stk.', name: 'Oreo-kjeks', note: 'grovhakket', group: 'Sjokolademousse' },
    { quantity: '1', unit: 'klype', name: 'Maldonsalt', group: 'Sjokolademousse' },

    { quantity: '1,5', unit: 'dl', name: 'kremfløte', group: 'Topping' },
    { quantity: '1', unit: 'ts', name: 'melis', group: 'Topping' },
    { quantity: '50', unit: 'g', name: 'Oreo-kjeks', note: 'knust eller grovhakket', group: 'Topping' },
  ],
  steps: [
    {
      title: 'Lag kjeksbunnen',
      description:
        'Knus Oreo-kjeksene. Bland dem med smeltet smør, og press massen jevnt ut i bunnen av en springform. Sett formen i kjøleskapet.',
    },
    {
      title: 'Lag ostekremen',
      description:
        'Rør kremost og melis sammen. Pisk kremfløten til en tykk, myk krem i en egen bolle og vend den inn i kremostblandingen. Smak til med sitronsaft og vend inn grovhakkede Oreo-kjeks. Fordel kremen over kjeksbunnen og sett kaldt.',
    },
    {
      title: 'Lag sjokolademoussen',
      description:
        'Smelt sjokoladen og la den avkjøles litt. Rør eggeplommer, melis og 0,5 dl kremfløte sammen. Pisk de resterende 2 dl kremfløte til myk krem. Hell sjokoladen i eggeblandingen under stadig omrøring, og vend deretter blandingen forsiktig inn i kremen. Vend inn Oreo-kjeks og en klype Maldonsalt.',
    },
    {
      title: 'Legg på moussen',
      description:
        'Fordel sjokolademoussen over ostekremen. Sett kaken tilbake i kjøleskapet til laget har stivnet.',
    },
    {
      title: 'Topp kaken',
      description:
        'Pisk kremfløte og melis til krem. Fordel den over kaken og pynt med knuste eller grovhakkede Oreo-kjeks. La kaken stå kaldt til den er gjennomstivnet.',
    },
  ],
};
