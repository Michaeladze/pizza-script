import React from 'react';
import './Header.scss';
import CartButton from '../../molecules/CartButton';
import { IMenuSection } from '../../../_store/interfaces/menu.interfaces';
import { useSelector } from 'react-redux';
import { IStore } from '../../../_store';

interface IProps {

}

const Header: React.FC<IProps> = () => {

  /** Subscribe to menu sections */
  const menu: IMenuSection[] = useSelector((store: IStore) => store.menu.collection);

  /** Create links */
  const links = menu.map((s: IMenuSection) =>
    <a key={s.id} href={`#${s.title.toLowerCase()}`} className='header__nav-link'>{s.title}</a>);

  return (
    <header className='global-header'>
      <nav className='global-header__nav'>
        {links}
      </nav>
      <CartButton/>
    </header>
  );
};

export default Header;
