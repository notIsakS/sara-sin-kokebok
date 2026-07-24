import type { Recipe } from '../../types/Recipe';

export const pannekaker: Recipe = {
  id: 'pannekaker',
  title: 'Pannekaker',
  category: 'Middag',

  description:
    'Tradisjonelle norske pannekaker som kan serveres med sukker, syltetøy eller bacon.',

  servings: 4,
  preparationTime: '30 minutter',
  difficulty: 'Enkel',

  tags: [
    'Familierett',
    'Vegetar',
    'Rask',
  ],

  allergens: [
    'Gluten',
    'Melk',
    'Egg',
  ],

  notes: [
    'Røren kan lages noen timer i forveien.',
    'Tilsett litt mer melk dersom røren blir for tykk.',
  ],

  sourcePage: 12,

  ingredients: [
    {
      quantity: '4',
      unit: 'stk.',
      name: 'egg',
    },
    {
      quantity: '6',
      unit: 'dl',
      name: 'melk',
    },
    {
      quantity: '3',
      unit: 'dl',
      name: 'hvetemel',
    },
    {
      quantity: '0,5',
      unit: 'ts',
      name: 'salt',
    },
    {
      quantity: '',
      name: 'smør',
      note: 'til steking',
    },
  ],

  steps: [
    {
      title: 'Bland egg og melk',
      description:
        'Visp sammen eggene og omtrent halvparten av melken.',
    },
    {
      title: 'Tilsett mel',
      description:
        'Tilsett hvetemel og salt. Visp til røren er jevn.',
    },
    {
      title: 'Fullfør røren',
      description:
        'Tilsett resten av melken og bland godt.',
    },
    {
      title: 'La røren hvile',
      description:
        'La røren hvile i omtrent 15 minutter.',
    },
    {
      title: 'Stek',
      description:
        'Stek tynne pannekaker i en varm stekepanne med smør.',
    },
  ],
};