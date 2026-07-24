import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'miso-peanott-nudler',
  title: 'Miso-peanøttnudler med kjøttdeig',
  category: 'Middag',
  description:
    'Nudler i en kremet miso- og peanøttsaus, servert med sterk soyaglasert kjøttdeig.',
  servings: 2,
  yield: 'Ca. 2 porsjoner',
  preparationTime: 'Ca. 30 minutter',
  difficulty: 'Middels',
  tags: ['Middag', 'Nudler', 'Asiatisk', 'Peanøtt', 'Kjøttdeig'],
  allergens: ['Peanøtter', 'Soya', 'Gluten'],
  possibleAllergens: ['Sesam'],
  allergenNotes: [
    'Vanlig soyasaus, gochujang og mange nudler inneholder hvete. Kontroller emballasjen.',
    'Velg tilbehør uten sesam dersom sesam skal unngås.',
  ],
  notes: [
    'Tilbehøret i boken er vårløk, agurksalat, syltede grønnsaker og edamame.',
  ],
  ingredients: [
    { quantity: '200', unit: 'g', name: 'nudler', group: 'Nudler' },
    { quantity: '40', unit: 'g', name: 'peanøttsmør', group: 'Saus til nudlene' },
    { quantity: '25', unit: 'g', name: 'misopasta', group: 'Saus til nudlene' },
    { quantity: '20', unit: 'ml', name: 'riseddik', group: 'Saus til nudlene' },
    { quantity: '20', unit: 'ml', name: 'soyasaus', group: 'Saus til nudlene' },
    { quantity: '1', unit: 'ss', name: 'sukker', group: 'Saus til nudlene' },
    { quantity: '', name: 'nudelvann', note: 'til ønsket konsistens', group: 'Saus til nudlene' },
    { quantity: '400', unit: 'g', name: 'kjøttdeig', group: 'Kjøttdeig' },
    { quantity: '1–2', unit: 'fedd', name: 'hvitløk', group: 'Saus til kjøttdeigen' },
    { quantity: '1', unit: 'ss', name: 'gochujang', group: 'Saus til kjøttdeigen' },
    { quantity: '1', unit: 'ss', name: 'chiliflak', group: 'Saus til kjøttdeigen' },
    { quantity: '1', unit: 'ss', name: 'mørk soyasaus', group: 'Saus til kjøttdeigen' },
    { quantity: '1', unit: 'ss', name: 'riseddik', group: 'Saus til kjøttdeigen' },
    { quantity: '1', unit: 'ss', name: 'sukker', group: 'Saus til kjøttdeigen' },
    { quantity: '', name: 'vårløk', note: 'valgfritt', group: 'Til servering' },
    { quantity: '', name: 'agurksalat', note: 'valgfritt', group: 'Til servering' },
    { quantity: '', name: 'syltede grønnsaker', note: 'valgfritt', group: 'Til servering' },
    { quantity: '', name: 'edamame', note: 'valgfritt', group: 'Til servering' },
  ],
  steps: [
    {
      title: 'Bland nudelsausen',
      description:
        'Rør sammen peanøttsmør, misopasta, riseddik, soyasaus og sukker. Spe med varmt nudelvann til en jevn og kremet saus.',
    },
    {
      title: 'Bland kjøttsausen',
      description:
        'Rør sammen finhakket hvitløk, gochujang, chiliflak, mørk soyasaus, riseddik og sukker.',
    },
    {
      title: 'Stek kjøttdeigen',
      description:
        'Stek kjøttdeigen til den er godt brunet. Tilsett kjøttsausblandingen og la den trekke inn og redusere litt.',
    },
    {
      title: 'Kok nudlene',
      description:
        'Kok nudlene etter anvisningen på pakken. Spar litt av kokevannet før nudlene siles.',
    },
    {
      title: 'Bland og server',
      description:
        'Vend de varme nudlene i miso-peanøttsausen. Fordel i skåler, legg kjøttdeigen over og server med ønsket tilbehør.',
    },
  ],
};
