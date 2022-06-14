import React from 'react';
import style from './ContentCard.module.scss';

const ContentCard = () => {
  return (
    <div className={style.contentCard}>
      <div className={style.contentCardItem}>
        <p>
          <b>Чепчик</b>
        </p>
      </div>
      <div className={style.contentCardItem}>
        <p>Одежда</p>
      </div>
      <div className={style.contentCardItem}>
        <p>12 апреля</p>
      </div>
      <div className={style.contentCardItem}>
        <p>Да</p>
      </div>
      <div className={style.contentCardSelect}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.4">
            <path
              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
              stroke="#2C2D2E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
              stroke="#2C2D2E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
              stroke="#2C2D2E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default ContentCard;