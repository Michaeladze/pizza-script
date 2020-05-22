import React, { FC } from 'react';
import { INotification } from '../../molecules/Notifications/Notifications';
import { ReactComponent as Close } from '../../../assets/icons/close-icon.svg';
import './Notification.scss';
import Button from '../Button';

export interface IProps {
  item: INotification;
  remove?: (id: number) => void;
}

const Notification: FC<IProps> = ({ item, remove }) => {

  /** Удалить уведомление */
  const removeNotification = () => item.id && remove && remove(item.id);

  return (
    <div className={`rf-notification ${item.type || 'success'}`}>
      <p className='rf-notification__message'>{item.message}</p>
      <Button className='rf-notification__close' handler={removeNotification} type='link'>
        <Close/>
      </Button>
    </div>
  );
};

export default Notification;
