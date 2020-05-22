import { Observable, of } from 'rxjs';
import { IMenuSection } from '../interfaces/menu.interfaces';
import { menu } from '../_mocks/menu';

export const getMenu = (): Observable<IMenuSection[]> => {
  return of(menu)
  // return Axios.get(`/api/v1/products`).pipe(map(({ data }) => data));
};
