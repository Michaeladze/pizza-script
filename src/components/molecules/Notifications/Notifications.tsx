import React, { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';
import Notification from '../../atoms/Notification';
import './Notifications.scss';

// ---------------------------------------------------------------------------------------------------------------------

/** Notifications stack */
export const notifications$$ = new BehaviorSubject<INotification[]>([]);

const removeNotification = (id?: number) => {
  let tmp = [...notifications$$.getValue()];
  if (id !== undefined) {
    tmp = tmp.filter((n: INotification) => n.id !== id);
  } else {
    tmp.shift();
  }

  notifications$$.next(tmp);
};

export const sendNotification = (message: INotification) => {
  const tmp = [...notifications$$.getValue()];
  tmp.push({ ...message, id: Date.now() });
  notifications$$.next(tmp);

  setTimeout(removeNotification, 4000);
};

// ----Component--------------------------------------------------------------------------------------------------------

export interface INotification {
  message: string;
  id?: number;
  type?: 'success' | 'error';
}

const Notifications = () => {
  const [sub] = useState(notifications$$);

  /** Список уведомлений */
  const [notifications, setNotifications] = useState<INotification[]>([]);

  // -------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    sub.subscribe((data: INotification[]) => {
      setNotifications(data);
    });

    return () => sub.unsubscribe();
  }, [sub]);

  // -------------------------------------------------------------------------------------------------------------------

  const list = notifications.map((n: INotification, i: number) =>
    <Notification key={i} item={n} remove={removeNotification}/>);

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <div className='rf-notifications__list'>
      {list}
    </div>
  );
};

export default Notifications;
