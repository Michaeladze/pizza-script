import React, { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as Close } from '../../../assets/icons/close-icon.svg';
import './Modal.scss';

export interface IModalProps {
  /** CSS class */
  className?: string;
  /** Content */
  children: React.ReactNode | React.ReactNode[];
  /** Close event */
  onClose?: (event: React.MouseEvent) => void;
  darkenBackground?: boolean;
  /** Show close button */
  showClose?: boolean;
}

const Modal: FC<IModalProps> = ({
                                  className = '',
                                  children,
                                  onClose,
                                  darkenBackground = true,
                                  showClose = true
                                }) => {
  /** Create Wrapper for modal */
  const [div] = useState<HTMLDivElement>(document.createElement('div'));

  /** OnMount add modal. OnDestroy - remove */
  useEffect(() => {
    /** Wrapper for modal */
    const modalRoot = document.getElementById('modal');
    (modalRoot as HTMLDivElement).appendChild(div);
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'auto';
      (modalRoot as HTMLDivElement).removeChild(div);
    };
  });

  /** Wrapper for modal */
  const modal = (
    <div className={`rf-modal ${darkenBackground ? 'rf-modal--darken' : ''}`} onMouseDown={onClose}>
      <div className={`rf-modal__wrapper ${className}`} onMouseDown={(e) => e.stopPropagation()}>
        {showClose &&
        <button className='rf-modal__close-button' onClick={onClose}>
          <Close/>
        </button>}
        <div className='rf-modal__content'>{children}</div>
      </div>
    </div>
  );

  return createPortal(modal, div);
};

export default Modal;
