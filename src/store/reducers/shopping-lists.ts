import { ShoppingListState } from '../types';

const initialState: ShoppingListState = [
  {
    id: 0,
    title: 'Hello world!',
    created: '2020-06-04T10:39:55Z',
    completed: false,
  },
  {
    id: 1,
    title: 'Lidl kauppalista',
    created: '2020-06-02T12:30:00Z',
    completed: false,
  },
  {
    id: 2,
    title: 'IKEA ostokset',
    created: '2020-06-01T8:00:00Z',
    completed: false,
  },
];

export default (state = initialState, action) => {
  return state;
};
