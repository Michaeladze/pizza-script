import React, { ReactNode } from 'react';
import './Button.scss';

interface IProps {
  /** Content */
  children: ReactNode | ReactNode[];
  /** Handler */
  handler: () => void;
  /** Type */
  type?: 'primary' | 'secondary' | 'link';
  /** Button type */
  buttonType?: 'button' | 'submit' | 'reset';
  /** Custom class */
  className?: string;
}

const Button: React.FC<IProps> = ({ children, handler, type = 'primary',
                                    buttonType = 'button', className }) => {

  /** Classes */
  const classes = {
    primary: 'p-button--primary',
    secondary: 'p-button--secondary',
    link: 'p-button--link'
  }

  return (
    <button className={`p-button ${classes[type]} ${className}`} onClick={handler} type={buttonType}>
      {children}
    </button>
  );
};

export default Button;
