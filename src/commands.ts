import { Recipe, RecipeType } from "./recipe";
import { Store } from "./stores/store.type";

export async function list(store: Store<RecipeType[]>, args: string[]) {
  if (args.length === 0) {
    const recipe = new Recipe(store);
    const recipes = await recipe.readAll();
    const formatted = recipes
      .map((recipe) => `- [${recipe.id}] ${recipe.name}`)
      .join('\n');
    console.log('Your recipes:');
    console.log(formatted);
  } else {
    console.log(`Error: The list command should not have any argument.`);
  }
}

export async function details(store: Store<RecipeType[]>, args: string[]) {
  const [id] = args;
  if (isNaN(Number(id)) || args.length > 1) {
    console.log('You should give only 1 numeric argument');
  } else {
    const recipe = new Recipe(store);
    const recipes = await recipe.readAll();
    const findRecipe = recipes.find((recipe) => recipe.id === Number(id))
    if (findRecipe) {
      console.log(`ID: ${findRecipe.id} \nName: ${findRecipe.name}`);
    } else {
      console.log("There is no recipe with this ID");
    }
  }
}