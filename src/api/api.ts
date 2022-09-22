import { Good, SelectorOption } from '../utils/interface';
const url = 'https://631b3746dc236c0b1ef0656f.mockapi.io/'

export const getGoods = async(): Promise<Good[]> => {
  return fetch(url + "goods")
  .then(response => response.json())
}

export const getGood = async(id: string): Promise<Good> => {
  return fetch(`${url}/${id}`)
  .then(response => response.json())
}

export const getCategories = async(): Promise<SelectorOption[]> => {
  return fetch(url + "categories")
  .then(response => response.json())
}
