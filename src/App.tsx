import { useState } from 'react';

import MainMenu from './components/RecipeMenu';
import RecipeView from './components/RecipeView';
import { recipes } from './data/recipes';

function App() {
  const [
    selectedRecipeId,
    setSelectedRecipeId,
  ] = useState<string | null>(null);

  const selectedRecipe = recipes.find(
    (recipe) =>
      recipe.id === selectedRecipeId,
  );

  function handleSelectRecipe(
    recipeId: string,
  ) {
    setSelectedRecipeId(recipeId);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function handleReturnToMenu() {
    setSelectedRecipeId(null);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className="site">
      {selectedRecipe ? (
        <RecipeView
          recipe={selectedRecipe}
          onReturnToMenu={
            handleReturnToMenu
          }
        />
      ) : (
        <MainMenu
          recipes={recipes}
          onSelectRecipe={
            handleSelectRecipe
          }
        />
      )}
    </div>
  );
}

export default App;