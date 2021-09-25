import React from 'react'
import  spinner  from '../assets/images/loading2.png';

export default function LoadingSpinner() {
    return (
      <div className="loading-container">
            <img src={spinner} className="loader" width="20" height="20" alt="LOADING" />
            <p>Loading</p>
      </div>
    );
}
