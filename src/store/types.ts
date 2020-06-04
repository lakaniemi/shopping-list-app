export interface ShoppingList {
  id: number;
  title: string;
  created: string; // ISO 8601
  completed: boolean;
}

export type ShoppingListState = Array<ShoppingList>;
