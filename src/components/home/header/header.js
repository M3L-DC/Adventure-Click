import React from 'react';
import Money from './money/money';

const Header = () => (
  <div>
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Adventure Click</span>
        <div className="justify-content-end" style={{ color: 'white', fontSize: '1.2em' }}>
          <Money />
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
