import { Action, handleActions } from 'redux-actions';
import { IProduct } from '../interfaces/menu.interfaces';
import { AddToCart, RemoveFromCart } from '../actions/cart.actions';

export interface ICartState {
  collection: IProduct[];
}

const initialState: ICartState = {
  collection: []
};

interface IPayload {
  item: IProduct;
}

const cartReducer = handleActions(
  {
    [AddToCart.Success]: (state: ICartState, action: Action<IPayload>) => {
      if (action.payload.item) {
        return {
          ...state,
          collection: [...state.collection, action.payload.item],
        };
      }

      return state;
    },

    [RemoveFromCart.Success]: (state: ICartState, action: Action<IPayload>) => {
      if (action.payload.item) {
        const index: number = state.collection.findIndex((p: IProduct) => p.id === action.payload.item.id);
        if (index >= 0) {
          state.collection = state.collection.filter((p: IProduct) => p.id !== action.payload.item.id);
        }
        return {
          ...state,
        };
      }

      return state;
    }
  },
  initialState
);

export default cartReducer;
