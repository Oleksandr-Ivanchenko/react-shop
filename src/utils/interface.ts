export interface Good {
  id : number,
  name : string,
  brand : string,
  category : string,
  cost : number,
  description: string,
  image : string
}

export interface Filters {
  sort: string;
  category: string,
  price: number[],
}

export interface State {
  goods: Good[],
  filters: Filters,
  categories: SelectorOption[],
}

export interface Action {
  type: string,
  payload: any
}

export interface SelectorOption {
  key: string;
  name: string;
}
