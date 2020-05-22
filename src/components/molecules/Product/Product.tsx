import React from 'react';
import './Product.scss';
import ProductImage from '../../atoms/ProductImage';
import Button from '../../atoms/Button';
import { IProduct } from '../../../_store/interfaces/menu.interfaces';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../../_store/actions/cart.actions';
import { sendNotification } from '../Notifications/Notifications';

interface IProps {
  item: IProduct;
}

const Product: React.FC<IProps> = ({ item }) => {

  const dispatch = useDispatch();

  const addToCart = () => {
    sendNotification({ message: `${item.title} added to cart` })
    dispatch({ type: AddToCart.Success, payload: { item } })
  }

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <article className='product'>
      <ProductImage url={item.image} alt={item.title}/>
      <h3 className='product__title'> {item.title} </h3>
      <p className='product__description'> {item.description} </p>
      <footer className='product__footer'>
        <strong className='product__price'>${item.price}</strong>
        <div className='product__select-button'>
          <Button handler={addToCart} type='secondary'> Add </Button>
        </div>
      </footer>
    </article>
  );
};

export default Product;
