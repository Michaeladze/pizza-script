import React from 'react';
import './ProductDetails.scss';

interface IProps {
  /** Close callback */
  onClose: () => void;
}

const ProductDetails: React.FC<IProps> = ({ onClose }) => {
  return (
    <>
      SelectPizzaDetails
    </>
  );
};

export default ProductDetails;
