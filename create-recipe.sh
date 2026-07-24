#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -lt 1 ]; then
  echo "Usage: $0 \"Recipe Title\" [Category] [Difficulty]"
  exit 1
fi

TITLE="$1"
CATEGORY="${2:-Middag}"
DIFFICULTY="${3:-Middels}"

SLUG=$(printf '%s' "$TITLE" \
  | tr '[:upper:]' '[:lower:]' \
  | tr -cs 'a-z0-9' '-' \
  | sed -e 's/^-//; s/-$//; s/--*/-/g')

if [ -z "$SLUG" ]; then
  echo "Failed to generate a valid filename from title: $TITLE"
  exit 1
fi

OUTPUT_DIR="src/data/recipes"
OUTPUT_FILE="$OUTPUT_DIR/$SLUG.ts"

mkdir -p "$OUTPUT_DIR"

if [ -f "$OUTPUT_FILE" ]; then
  echo "File already exists: $OUTPUT_FILE"
  exit 1
fi

cat > "$OUTPUT_FILE" <<EOF
import type { Recipe } from '../../types/Recipe';

export const recipe: Recipe = {
  id: '$SLUG',
  title: '$TITLE',
  category: '$CATEGORY',
  description: '',
  servings: 4,
  yield: '',
  preparationTime: '',
  difficulty: '$DIFFICULTY',
  tags: [],
  allergens: [],
  possibleAllergens: [],
  allergenNotes: [],
  notes: [],
  ingredients: [],
  steps: [],
};
EOF

echo "Created recipe file: $OUTPUT_FILE"
