import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push({ linkUrl })}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <h3 className='subtitle'>SHOP NOW</h3>
    </div>
  </div>
);

export default withRouter(MenuItem);
