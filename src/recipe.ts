import { Store } from "./stores/store.type"

export type CreateRecipeType = {
  name: string
}

export type RecipeType = CreateRecipeType & {
  id: number
}

export class Recipe {
  private store;

  constructor(store: Store<RecipeType[]>) {
    this.store = store;
  }

  async readAll() {
    return await this.store.getValue();
  }
}


