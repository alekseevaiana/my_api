import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type IngredientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Ingredient {
  readonly id: string;
  readonly name?: string | null;
  readonly type?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Ingredient, IngredientMetaData>);
  static copyOf(source: Ingredient, mutator: (draft: MutableModel<Ingredient, IngredientMetaData>) => MutableModel<Ingredient, IngredientMetaData> | void): Ingredient;
}