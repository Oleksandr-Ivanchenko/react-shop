import { createStore } from 'redux';
import { Action, State } from '../utils/interface';
import { ADD_GOOD, SET_GOODS, SET_FILTERS, SET_CATEGORIES } from './actions';

const initialState: State = {
  goods: [],
  filters: {
    category: 'all',
    price: [0, 1000],
    sort: 'alpASC',
  },
  categories: [],
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {

    case SET_GOODS:
      return {
        ...state,
        goods: [...action.payload],
      }
    
    case ADD_GOOD:
      return {
        ...state,
        goods: [...state.goods, action.payload],
      }

    case SET_FILTERS:
      return {
        ...state,
        filters: {
          ...action.payload,
        },
      }

    case SET_CATEGORIES:
    return {
      ...state,
      categories: [...action.payload],
    }
    
    default:
      return state;
  }
};

export const store = createStore(reducer)