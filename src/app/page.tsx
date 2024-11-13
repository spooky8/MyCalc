'use client';
import React from 'react'
import Calculator from './components/calculator'
import { Header } from './components/header'

import './globals.css'
export default function Home() {

  const [history, setHistory] = React.useState<string[]>([]);

  return (
    <div>
      <Header history={history} />
      <Calculator setHistory={setHistory} />
    </div>
  );
}
