import React from 'react';
import './style.css';
import Header from './components/Header';
import Card from './components/Card';

export default function App() {
  return (
    <div>
      <Header />
      <div className="container flex">
        <Card />
      </div>
    </div>
  );
}
