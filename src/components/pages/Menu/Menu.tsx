import React, { useEffect } from 'react';
import './Menu.scss';
import ProductsList from '../../organisms/ProductsList';
import Header from '../../organisms/Header';
import { useDispatch, useSelector } from 'react-redux';
import { GetMenu } from '../../../_store/actions/menu.actions';
import { IMenuSection } from '../../../_store/interfaces/menu.interfaces';
import { IStore } from '../../../_store';

interface IProps {

}

const Menu: React.FC<IProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GetMenu.Pending })
  }, [dispatch]);

  const menu: IMenuSection[] = useSelector((store: IStore) => store.menu.collection);

  // -------------------------------------------------------------------------------------------------------------------

  const menuSections = menu.map((s: IMenuSection) => <ProductsList key={s.id} list={s.list} title={s.title}/>);

  return (
    <>
      <div className='products-page'>
        <Header/>
        {menuSections}
      </div>
    </>
  );
};

export default Menu;
