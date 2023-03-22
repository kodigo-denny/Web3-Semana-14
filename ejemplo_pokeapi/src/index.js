import React from 'react';
import ReactDOM from 'react-dom/client';
import Pokemon from './Components/Pokemon';
import Pokemon2 from './Components/Pokemon2';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Pokemon />
    <Pokemon2 />
  </div>
);

