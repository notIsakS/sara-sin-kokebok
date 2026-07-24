import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'cookies-uten-egg',
  title: 'Cookies uten egg',
  category: 'Kaker og dessert',
  description: 'Store, myke sjokoladecookies uten egg.',
  servings: 12,
  yield: 'Ca. 12 cookies',
  preparationTime: 'Ca. 1 time og 15 minutter inkludert kjøling',
  difficulty: 'Enkel',
  tags: ['Vegetar', 'Eggfri', 'Cookies', 'Sjokolade'],
  allergens: ['Gluten', 'Melk'],
  possibleAllergens: ['Soya', 'Nøtter'],
  allergenNotes: [
    'Sjekk sjokoladen for soya og eventuelle spor av nøtter. Velg en sjokolade uten egg dersom oppskriften må være strengt eggfri.',
  ],
  notes: [
    'Stekes ved 200 °C i 11–12 minutter.',
    'La cookiene hvile omtrent 30 minutter etter steking; de setter seg mens de avkjøles.',
  ],
  ingredients: [
    { quantity: '125', unit: 'g', name: 'smør' },
    { quantity: '175', unit: 'g', name: 'hvitt eller brunt sukker' },
    { quantity: '1', unit: 'ss', name: 'vaniljesukker' },
    { quantity: '300', unit: 'g', name: 'hvetemel' },
    { quantity: '1,5', unit: 'ts', name: 'bakepulver' },
    { quantity: '0,5', unit: 'ts', name: 'natron' },
    { quantity: '1', unit: 'klype', name: 'salt' },
    { quantity: '200–300', unit: 'g', name: 'sjokolade', note: 'grovhakket' },
    { quantity: '0,75', unit: 'dl', name: 'melk', note: 'omtrent, til riktig konsistens' },
  ],
  steps: [
    {
      title: 'Pisk smør og sukker',
      description:
        'Pisk smør, sukker og vaniljesukker til blandingen er kremet.',
    },
    {
      title: 'Tilsett det tørre',
      description:
        'Bland hvetemel, bakepulver, natron og salt. Rør det inn i smørblandingen.',
    },
    {
      title: 'Juster deigen',
      description:
        'Tilsett melk litt etter litt til deigen får konsistens som en fast cookiedeig. Vend inn grovhakket sjokolade.',
    },
    {
      title: 'Form og kjøl',
      description:
        'Form omtrent 12 cookies på 70–80 g hver. Sett dem i fryseren i minst 30 minutter eller i kjøleskapet i omtrent 1 time.',
    },
    {
      title: 'Stek',
      description:
        'Plasser omtrent seks cookies på hvert stekebrett med god avstand. Stek ved 200 °C i 11–12 minutter.',
    },
    {
      title: 'Avkjøl',
      description:
        'La cookiene ligge på brettet en stund før de flyttes. Avkjøl dem i omtrent 30 minutter før servering.',
    },
  ],
};
