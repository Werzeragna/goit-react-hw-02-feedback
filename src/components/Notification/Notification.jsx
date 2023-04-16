import PropTypes from 'react';
import { NotificationMessage } from './Notification.styled';

export const Notification = ({ message }) => {
  return message && <NotificationMessage>{message}</NotificationMessage>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
