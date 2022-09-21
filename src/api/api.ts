import { Good } from '../utils/interface';
const url = 'https://631b3746dc236c0b1ef0656f.mockapi.io/goods'

export const getGoods = async(): Promise<Good[]> => {
  return fetch(url)
  .then(response => response.json())
}

export const getGood = async(id: string): Promise<Good> => {
  return fetch(`${url}/${id}`)
  .then(response => response.json())
}
