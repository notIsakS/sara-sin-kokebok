# Sara sin digitale kokebok

Denne README forklarer nøyaktig hvordan du legger inn en ny oppskrift i prosjektet.
Den dekker begge metodene:

1. Lage filen automatisk med `create-recipe.sh`
2. Lage filen manuelt i `src/data/recipes/`

> Ingen steg hopper over. Følg veiledningen punkt for punkt.

---

## 1. Hvordan fungerer oppskriftssystemet?

Prosjektet laster automatisk alle oppskriftsfiler i `src/data/recipes/` gjennom `src/data/recipes/index.ts`.
Det betyr at du ikke trenger å importere hver ny oppskrift manuelt.

### Viktig filstruktur

```
src/
  data/
    recipes/
      index.ts
      pannekaker.ts
      lasagne.ts
      gulrotkake.ts
      ...
  components/
    RecipeList.tsx
    RecipeView.tsx
    FilterSidebar.tsx
  types/
    Recipe.ts
  main.tsx
  App.tsx
  styles.css
  styles-recipe-additions.css
create-recipe.sh
```

### Hvordan oppskriftene vises

- `RecipeList.tsx` viser oppskrifter i listevisningen
- `RecipeView.tsx` viser én valgt oppskrift
- `styles.css` og `styles-recipe-additions.css` gir styling
- `Recipe.ts` bestemmer hvilke felter en oppskrift må ha

---

## 2. Legg til en oppskrift med scriptet (`create-recipe.sh`)

### Trinn 2.1: Åpne terminal

1. Åpne terminal i prosjektrot:
   - `C:\Users\dagis\Desktop\Mekatronikk\Egenprosjekt\sarawebside`
2. Sjekk at `create-recipe.sh` ligger i rotmappen.

### Trinn 2.2: Gjør skriptet kjørbart

Kjør denne kommandoen én gang:

```bash
chmod +x create-recipe.sh
```

Hvis du allerede har gjort det, kan du gå videre.

### Trinn 2.3: Opprett ny oppskrift

Bruk scriptet slik:

```bash
./create-recipe.sh "Fiskegrateng" "Middag" "Middels"
```

Dette gjør to ting:

- lager filen `src/data/recipes/fiskegrateng.ts`
- fyller inn en ferdig template med basisfelter

### Trinn 2.4: Sjekk at filen ble opprettet

Etter kjøring skal du se:

```bash
src/data/recipes/fiskegrateng.ts
```

Hvis filen ikke finnes, stopp og sjekk feilmeldingen i terminalen.

### Trinn 2.5: Åpne filen og fyll ut alle feltene

Åpne filen i editor og fyll ut innholdet.
Dette er malen som lages automatisk:

```ts
import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'fiskegrateng',
  title: 'Fiskegrateng',
  category: 'Middag',
  description: '',
  servings: 4,
  yield: '',
  preparationTime: '',
  difficulty: 'Middels',
  tags: [],
  allergens: [],
  possibleAllergens: [],
  allergenNotes: [],
  notes: [],
  ingredients: [],
  steps: [],
};
```

Fyll alltid ut disse feltene:

- `id`: unik streng uten mellomrom, bruk små bokstaver og bindestrek
- `title`: synlig navn på oppskriften
- `category`: for eksempel `Middag`, `Bakst`, `Frokost`
- `description`: kort beskrivelse
- `servings`: tall
- `yield`: valgfri merknad, for eksempel `4 porsjoner` eller `1 kake`
- `preparationTime`: tekst, f.eks. `45 minutter`
- `difficulty`: `Enkel`, `Middels` eller `Krevende`
- `tags`: liste over tekst-tagger
- `allergens`: sikre allergener fra ingredienslisten
- `possibleAllergens`: mulige allergener hvis ingrediensvalg kan variere
- `allergenNotes`: merknader om allergener
- `notes`: ekstra informasjon
- `ingredients`: liste med ingredienser
- `steps`: stegvis fremgangsmåte

> Viktig: `recipe` må være navnet på eksporten. Ikke bruk `export const lasagne` eller `export const pannekaker`.

### Trinn 2.6: Fyll ut alle ingredienser og steg

Ingrediensformatet må se slik ut:

```ts
ingredients: [
  {
    quantity: '400',
    unit: 'g',
    name: 'kjøttdeig',
    note: 'velg magert kjøtt',
    group: 'Kjøttsaus',
  },
],
```

- `quantity` må alltid være tekst
- `unit` er valgfri
- `name` er obligatorisk
- `note` er valgfri
- `group` er valgfri, men nyttig for oppskrifter med flere deler

Stegformatet må se slik ut:

```ts
steps: [
  {
    title: 'Stek løk',
    description: 'Finhakk løk og stek den gyllen i smør.',
  },
],
```

> Ikke hopp over noen steg. Hvert trinn skal ha minst `description`.

---

## 3. Legg til oppskriften manuelt

Hvis du vil opprette filen uten script:

### Trinn 3.1: Lag ny fil

Opprett en ny fil i `src/data/recipes/` med slug-navn:

- riktig: `fiskegrateng.ts`
- feil: `Fiskegrateng.ts`

### Trinn 3.2: Lim inn malen

Bruk samme innhold som i skriptmalen:

```ts
import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'fiskegrateng',
  title: 'Fiskegrateng',
  category: 'Middag',
  description: '',
  servings: 4,
  yield: '',
  preparationTime: '',
  difficulty: 'Middels',
  tags: [],
  allergens: [],
  possibleAllergens: [],
  allergenNotes: [],
  notes: [],
  ingredients: [],
  steps: [],
};
```

### Trinn 3.3: Fyll ut alle feltene helt

Følg samme liste som under skriptet.
Sjekk at det ikke finnes ekstra felt eller manglende komma.

### Trinn 3.4: Lagre filen

Når filen er lagret, er den klar.
Du trenger ikke å endre `src/data/recipes/index.ts`.

---

## 4. Hvordan vet jeg at oppskriften er lagt inn riktig?

### Illustrasjon av automatisk registrering

```
src/data/recipes/index.ts
  import.meta.glob('./*.ts', '!./index.ts', { eager: true })
              └─────────┘
                 finner alle .ts-filer
```

Når du har lagt til en fil i `src/data/recipes/`, skal den vises i appen automatisk.

### Illustrasjon av avhengigheter

```
src/main.tsx
  import './styles.css';
  import './styles-recipe-additions.css';

src/App.tsx
  import { recipes } from './data/recipes';
  import RecipeList from './components/RecipeList';
  import RecipeView from './components/RecipeView';
```

### Slik tester du det

1. Kjør appen i terminalen:
   ```bash
   npm run dev
   ```
2. Åpne nettleseren på:
   ```
   http://localhost:5173/
   ```
3. Sjekk at den nye oppskriften vises i listen.
4. Klikk oppskriften og sjekk at detaljer vises riktig.

---

## 5. Standardfeltene for oppskriftsdata

Følgende felt må alltid være definert i en `Recipe`-fil:

- `id` - unik streng uten mellomrom
- `title` - visningsnavn
- `category` - kategori som vises i filteret
- `description` - kort beskrivelse
- `servings` - antall
- `yield` - valgfri detaljtekst (f.eks. `4 porsjoner`)
- `preparationTime` - varighet som tekst
- `difficulty` - `Enkel`, `Middels`, `Krevende`
- `tags` - liste med tagger
- `allergens` - sikre allergener
- `possibleAllergens` - mulige allergener
- `allergenNotes` - ekstra allergenmerknader
- `notes` - ekstra tekst
- `ingredients` - liste over ingredienser
- `steps` - liste over fremgangsmåte

### Typiske allergener

Bruk disse nøkkelordene i `allergens` og `possibleAllergens`:

- `Gluten`
- `Skalldyr`
- `Egg`
- `Fisk`
- `Peanøtter`
- `Soya`
- `Melk`
- `Nøtter`
- `Selleri`
- `Sennep`
- `Sesam`
- `Sulfitt`
- `Lupin`
- `Bløtdyr`

---

## 6. Hva gjør scriptet og hva må du ikke gjøre?

### Scriptet gjør automatisk

- lager fil med riktig filnavn
- oppretter `export const recipe: Recipe`
- gir riktig `id` fra filnavn

### Ikke gjør dette

- ikke navngi filen med store bokstaver
- ikke bruk en eksport som `export const lasagne`
- ikke legg til oppskrift i andre mapper enn `src/data/recipes/`
- ikke glem `possibleAllergens`, `allergenNotes`, `tags`, `notes`, `ingredients`, og `steps`
- ikke endre `src/data/recipes/index.ts`

---

## 7. Eksempel på ferdig oppskrift

Dette er et komplett eksempel på hvordan en fil skal se ut:

```ts
import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: 'vaniljekake',
  title: 'Vaniljekake',
  category: 'Bakst',
  description: 'Saftig vaniljekake med vaniljekrem og glasur.',
  servings: 10,
  yield: '1 kake',
  preparationTime: '1 time',
  difficulty: 'Middels',
  tags: ['Kake', 'Fester'],
  allergens: ['Gluten', 'Egg', 'Melk'],
  possibleAllergens: ['Nøtter'],
  allergenNotes: ['Sjekk at sjokolade er uten spor av nøtter.'],
  notes: ['La kaken avkjøles helt før glasur påføres.'],
  ingredients: [
    {
      quantity: '4',
      unit: 'stk.',
      name: 'egg',
    },
    {
      quantity: '250',
      unit: 'g',
      name: 'smør',
      note: 'romtemperert',
      group: 'Røre',
    },
    {
      quantity: '250',
      unit: 'g',
      name: 'sukker',
      group: 'Røre',
    },
    {
      quantity: '300',
      unit: 'g',
      name: 'hvetemel',
      group: 'Røre',
    },
    {
      quantity: '2',
      unit: 'ts',
      name: 'vaniljesukker',
      group: 'Røre',
    },
    {
      quantity: '2',
      unit: 'dl',
      name: 'melk',
      group: 'Røre',
    },
  ],
  steps: [
    {
      title: 'Forvarm ovnen',
      description: 'Forvarm ovnen til 175 °C.',
    },
    {
      title: 'Pisk egg og sukker',
      description: 'Pisk egg og sukker til det blir luftig og lyst.',
    },
    {
      title: 'Bland det tørre',
      description: 'Bland hvetemel og vaniljesukker i en separat bolle.',
    },
    {
      title: 'Rør sammen',
      description: 'Vend inn det tørre og melk i eggeblandingen til en jevn røre.',
    },
    {
      title: 'Stek kaken',
      description: 'Hell røren i en smurt form og stek i 45 minutter.',
    },
  ],
};
```

---

## 8. Hvordan legge inn illustrasjoner i README

Hvis du ønsker å legge til egne bilder, kan du legge dem i prosjektroten og bruke markdown:

```md
![Skjermbilde av oppskrift](./screenshot-oppskrift.png)
```

---

## 9. Feilsøking

### Oppskrift vises ikke

1. Sjekk at filen ligger i `src/data/recipes/`
2. Sjekk at filen bruker `export const recipe: Recipe`
3. Sjekk at filnavnet er lavere med bindestrek
4. Start dev-serveren på nytt hvis nødvendig

### Appen feiler ved import

1. Åpne filen og se etter manglende komma
2. Sjekk at du ikke har brukt `export default`
3. Sjekk at `ingredients` er et array
4. Sjekk at `steps` er et array med `description`

---

## 10. Oppsummering

- Bruk `./create-recipe.sh` for enklest mulig opprettelse
- Fyll inn alle feltene i template-filen
- Legg til nye oppskrifter i `src/data/recipes/`
- Du trenger aldri å redigere `src/data/recipes/index.ts`
- Sjekk appen med `npm run dev`

God redigering!
