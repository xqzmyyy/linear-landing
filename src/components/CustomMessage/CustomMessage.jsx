import { useEffect, useRef } from 'react';
import './CustomMessage.styles.css'

const CustomMessage = ({ message }) => {
  const messageRef = useRef(null);

  useEffect(() => {
    const notification = messageRef.current;
    if (notification) {
      notification.classList.remove('hide');
      requestAnimationFrame(() => {
        notification.classList.add('show');
      });

      const handleAnimationEnd = () => {
        setTimeout(() => {
          notification.classList.remove('show');
          requestAnimationFrame(() => {
            notification.classList.add('hide');
          });
        }, 4000);
      };

      notification.addEventListener('animationend', handleAnimationEnd);
      return () => {
        notification.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, []);

  return (
    <div className='bottom-message hide' ref={messageRef}>
      <span>{message}</span>
    </div>
  );
};

export default CustomMessage;