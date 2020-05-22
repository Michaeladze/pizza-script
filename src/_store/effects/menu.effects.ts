import { ActionsObservable, ofType } from 'redux-observable';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Action } from 'redux-actions';
import { showErrorMessage } from '../actions/common.actions';
import { GetMenu } from '../actions/menu.actions';
import { IMenuSection } from '../interfaces/menu.interfaces';
import { getMenu } from '../services/menu.service';
//------------------------------------------------------------

export const GetMenuEffect$ = (actions$: ActionsObservable<Action<undefined>>) =>
  actions$.pipe(
    ofType(GetMenu.Pending),
    switchMap(({ payload }) =>
      getMenu().pipe(
        map((menu: IMenuSection[]) => ({
          type: GetMenu.Success,
          payload: { menu }
        })),
        catchError((e: Error) => showErrorMessage('Could not load products list'))
      )
    )
  );


export const fake$ = (actions$: ActionsObservable<Action<undefined>>) =>
  actions$.pipe(
    ofType('fake')
  );
