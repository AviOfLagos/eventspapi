import React from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
}

const Toast: React.FC<ToastProps> = ({ message, type }) => {
  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'green';
      case 'error':
        return 'red';
      case 'info':
        return 'blue';
      default:
        return 'gray';
    }
  };

  return (
    <div style={{ backgroundColor: getBackgroundColor(), padding: '10px', borderRadius: '5px', color: 'white' }}>
      {message}
    </div>
  );
};

export default Toast;
