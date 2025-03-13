import { Product } from '../types';

export const getSuggestedItems = (lists: Product[][], count: number) => {
  const result: Product[] = [];

  while (result.length < count) {
    const randomNumber = Math.floor(Math.random() * 10);

    lists.forEach(list => {
      result.push(list[randomNumber]);
    });
  }

  return result;
};
