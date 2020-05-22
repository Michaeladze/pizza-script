import React from 'react';
import './CartButton.scss';
import Button from '../../atoms/Button';
import { IProduct } from '../../../_store/interfaces/menu.interfaces';
import { useSelector } from 'react-redux';
import { IStore } from '../../../_store';

interface IProps {

}

const CartButton: React.FC<IProps> = () => {

  const cart: IProduct[] = useSelector((store: IStore) => store.cart.collection);

  const openCart = () => {
    console.log('openCart')
  }

  return (
    <>
      <Button handler={openCart} className='cart-button'>
        <span className='cart-button__label'>Cart</span>
        <span className='cart-button__separator'/>
        <span className='cart-button__label cart-button__count'>{cart.length}</span>
      </Button>
    </>
  );
};

export default CartButton;
