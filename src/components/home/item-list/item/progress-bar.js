import React from 'react';
import './progress-bar.scss';

const ProgressBar = () => (
  <div className="mt-3 mb-3">
    <div className="progress">
      <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"> </div>
    </div>
  </div>
);

export default ProgressBar;
