import { Action, Filters, Good, SelectorOption } from "../utils/interface";

export const SET_GOODS = 'SET_GOODS';
export const SET_FILTERS = 'SET_FILTERS';
export const ADD_GOOD = 'ADD_GOOD';
export const SET_CATEGORIES = 'SET_CATEGORIES';

export const setGoodsAction = (payload: Good[]): Action => ({
  type: SET_GOODS,
  payload
});

export const addGoodsAction = (payload: Good): Action => ({
  type: ADD_GOOD,
  payload
});

export const setFiltersAction = (payload: Filters): Action => ({
  type: SET_FILTERS,
  payload
});

export const setCategoriesAction = (payload: SelectorOption[]): Action => ({
  type: SET_CATEGORIES,
  payload
});

