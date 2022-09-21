import { Action, Filters, Good } from "../utils/interface";

export const SET_GOODS = 'SET_GOODS'
export const SET_FILTERS = 'SET_FILTERS'
export const ADD_GOOD = 'ADD_GOOD'

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

