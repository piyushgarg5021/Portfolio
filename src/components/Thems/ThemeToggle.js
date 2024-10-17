// ThemeToggle.js
import React from 'react';
import './themeToggle.css'; // Create this CSS file for styling

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <div className="themeToggle">
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
        <span className="slider round"></span>
      </label>
      <span className="themeLabel">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
  );
};

export default ThemeToggle;
