import React from 'react';
import './box.css';

export default function Box({ data }) {
  return (
    <div className="box">
      <div className="box__div">
        <span className="box__span">Comment Id</span>{' '}
        <span className="box__span2">{data.id}</span>
      </div>
      <div className="box__div">
        <span className="box__span">Email </span>{' '}
        <span className="box__span2"> {data.email}</span>
      </div>
      <div className="box__div">
        <span className="box__span" style={{ display: 'block' }}>
          Comment{' '}
        </span>{' '}
        <span>{data.body}</span>
      </div>
    </div>
  );
}
