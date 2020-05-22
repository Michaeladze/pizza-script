import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import menuReducer, { IMenuState } from './reducers/menu.reducer';
import { fake$, GetMenuEffect$ } from './effects/menu.effects';
import cartReducer, { ICartState } from './reducers/cart.reducer';

/** Store interface */
export interface IStore {
  menu: IMenuState;
  cart: ICartState;
}

const observableMiddleware = createEpicMiddleware();

const reducers = combineReducers({
  menu: menuReducer,
  cart: cartReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(observableMiddleware)));

observableMiddleware.run(
  combineEpics(
    GetMenuEffect$,
    fake$
  )
);
