import React from 'react';
import './Header.scss';
import CartButton from '../../molecules/CartButton';

interface IProps {

}

const Header: React.FC<IProps> = () => {
  return (
    <header className='global-header'>
      <CartButton/>
    </header>
  );
};

export default Header;
