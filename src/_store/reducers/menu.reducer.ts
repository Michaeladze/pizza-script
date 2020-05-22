import { Action, handleActions } from 'redux-actions';
import { GetMenu } from '../actions/menu.actions';
import { IMenuSection } from '../interfaces/menu.interfaces';

export interface IMenuState {
  collection: IMenuSection[];
  loaded: boolean;
}

const initialState: IMenuState = {
  collection: [],
  loaded: false
};

interface IPayload {
  menu: IMenuSection[];
}

const menuReducer = handleActions(
  {
    [GetMenu.Success]: (state: IMenuState, action: Action<IPayload>) => {
      if (action.payload.menu) {
        return {
          ...state,
          collection: action.payload.menu,
          loaded: true
        };
      }

      return state;
    },
  },
  initialState
);

export default menuReducer;
