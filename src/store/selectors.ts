import { Filters, State } from "../utils/interface";

export const getGoodsSelector = (filters: Filters) =>  (state: State) => state.goods.filter(good => 
  good.cost > filters.price[0] 
    && good.cost < filters.price[1]
    && (filters.category === 'all' ? true : good.category.includes(filters.category))
  ).sort((a, b) => {
    const firstName = a.name.toLowerCase();
    const secondName = b.name.toLowerCase();

    switch(filters.sort) {
      case 'alpASC':
        return firstName.localeCompare(secondName);
      case 'alpDESC':
        return firstName !== secondName ? firstName < secondName ? 1 : -1 : 0;
      case 'priceASC':
        return a.cost - b.cost;
      case 'priceDESC':
        return b.cost - a.cost;
    }

    return 0;
  });

export const getFilters = (state: State) => state.filters; 

export const getCategoriesSelector = (state: State) => state.categories;