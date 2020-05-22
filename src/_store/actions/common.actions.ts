import { createActions } from 'redux-actions';
import { of } from 'rxjs';
import { sendNotification } from '../../components/molecules/Notifications/Notifications';

export enum Success {
  Success = '--------------------------'
}

export enum Common {
  Error = '[Error] --------------------------'
}

createActions({
  [Success.Success]: undefined,
  [Common.Error]: Error
});


export const showErrorMessage = (error: any) => {
  let text = error.message;

  try {
    text = error.response.data.error || error.response.data.message;
  } catch (e) {
    console.log(e);
  }

  sendNotification({
    message: `${text}`,
    type: 'error'
  });
  return of({ type: Common.Error });
};
