import React, { useState } from 'react';
import './style.css';
import Header from './components/Header';
import Card from './components/Card';

export default function App() {
  const [celsius, setCelsius] = useState(30);
  return (
    <div>
      <Header setCelsius={ setCelsius } />
      <div className="container flex">
        <Card celsius={ celsius } setCelsius={ setCelsius } />
      </div>
    </div>
  );
}
