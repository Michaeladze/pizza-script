import React, { useState } from 'react';
import './ProductsList.scss';
import Modal from '../../atoms/Modal';
import ProductDetails from '../../modals/ProductDetails';
import { IProduct } from '../../../_store/interfaces/menu.interfaces';
import Product from '../../molecules/Product';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../../_store/actions/cart.actions';

interface IProps {
  /** Products */
  list: any[];
  /** Title */
  title: string;
}

const ProductsList: React.FC<IProps> = ({ list, title }) => {

  const items = list.map((p: IProduct) =>
    <div className='product__wrapper' key={p.id}>
      <Product item={p}/>
    </div>)

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <div className='products-list'>
      <header className='products-list__header'>
        <h2 className='products-list__title'>{title}</h2>
      </header>
      <div className="products-list__items"> {items} </div>
    </div>
  );
};

export default ProductsList;
