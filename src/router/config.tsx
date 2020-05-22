import React, { ComponentType, lazy, LazyExoticComponent, ReactNode } from 'react';

/** Везде, где подключается <Router routes={routes}/>, кроме App.tsx, routes: IRoute[] берется из пропсов IProps. */

export interface IRoute {
  /** Адрес */
  path: string;
  /** Точность совпадения */
  exact: boolean;
  /** Защищенный роут */
  private?: boolean;
  /** Компонент */
  component?: LazyExoticComponent<ComponentType<any>>;
  /** Дочерние роуты */
  routes?: IRoute[];
  /** Редирект*/
  redirect?: string;
  /** Прелоудер ф*/
  fallback: NonNullable<ReactNode> | null;
}

export const routes: IRoute[] = [
  {
    path: '/',
    component: lazy(() => import('../components/pages/Menu')),
    exact: false,
    private: false,
    fallback: <div> Загрузка... </div>
  }
];
