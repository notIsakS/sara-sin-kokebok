import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'enkel-ramen-base',
  title: 'Enkel base for ramen',
  category: 'Saus og base',
  description:
    'En rask ramenbase med miso, løk, hvitløk og chili crisp.',
  servings: 2,
  yield: 'Ca. 2 porsjoner ramenbase',
  preparationTime: 'Ca. 15 minutter',
  difficulty: 'Enkel',
  tags: ['Ramen', 'Asiatisk', 'Suppebase', 'Rask'],
  allergens: ['Soya'],
  possibleAllergens: ['Melk', 'Selleri', 'Gluten', 'Sesam'],
  allergenNotes: [
    'Miso er vanligvis laget av soya, men enkelte typer inneholder også bygg eller annet glutenholdig korn.',
    'Buljong kan inneholde selleri og andre allergener. Chili crisp kan inneholde sesam.',
    'Melk er valgfritt og kan erstattes med vann eller et egnet plantealternativ.',
  ],
  notes: [
    'Fremgangsmåten var ikke skrevet i bildet og er rekonstruert ut fra ingrediensene.',
    'Oppskriften angir 4 dl væske og foreslår å erstatte omtrent halvparten med melk.',
  ],
  ingredients: [
    { quantity: '1–2', unit: 'ss', name: 'miso' },
    { quantity: '', name: 'buljong', note: 'mengde eller styrke etter smak' },
    { quantity: '4', unit: 'dl', name: 'vann', note: 'omtrent halvparten kan erstattes med melk' },
    { quantity: '1', unit: 'fedd', name: 'hvitløk' },
    { quantity: '0,5–1', unit: 'stk.', name: 'gul løk' },
    { quantity: '1', unit: 'ss', name: 'chili crisp' },
  ],
  steps: [
    {
      title: 'Fres løken',
      description:
        'Finhakk løk og hvitløk. Fres dem i en kjele med litt olje til løken er myk.',
    },
    {
      title: 'Lag kraften',
      description:
        'Tilsett vann, eventuelt melk, og buljong. Kok opp og la det småkoke i noen minutter.',
    },
    {
      title: 'Rør inn miso',
      description:
        'Ta kjelen ned fra sterk varme. Rør misoen ut i litt av den varme væsken og bland den tilbake i kjelen.',
    },
    {
      title: 'Smak til',
      description:
        'Rør inn chili crisp og smak til. Bruk basen med nudler og ønsket topping.',
    },
  ],
};
