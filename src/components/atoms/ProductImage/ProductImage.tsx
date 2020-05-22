import React from 'react';
import './ProductImage.scss';

interface IProps {
  url: string;
  alt: string;
}

const ProductImage: React.FC<IProps> = ({ url, alt }) => {
  return (
    <figure className='product__figure'>
      <img className='product__image' src={url} alt={alt} />
    </figure>
  );
};

export default ProductImage;
