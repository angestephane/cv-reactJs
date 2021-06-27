import React from 'react';
import logo from '../logo.svg';

const Head = () => {
    return (
    <div className="Head container-fluid">
      <header className="Head-header">
        <img src={logo} className="Head-logo" alt="logo" />
        <p className="titleCV">
          CV contruit avec ReactJs
        </p>
      </header>
    </div>
    );
}

export default Head;