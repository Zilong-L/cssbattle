import React, { useState, useEffect, lazy, Suspense, useRef } from 'react';
import './App.css';

const components = import.meta.glob('./components/*.jsx');

import Battle1 from './components/Battle1';
import Battle2 from './components/Battle2';
import Battle3 from './components/Battle3';
import Battle4 from './components/Battle4';
import Battle5 from './components/Battle5';
import Battle6 from './components/Battle6';
import Battle7 from './components/Battle7';

const arr = [Battle7,Battle6, Battle5, Battle4, Battle3, Battle2, Battle1]
export default function App() {
  const wheelRef = useRef(null);
  const handleWheel = (e) => {
    if (!wheelRef.current) return;
    //get window left and right
    if (e.deltaY !== 0) {
      wheelRef.current.scrollLeft += e.deltaY * 10;
    }

    console.log(left)
  };

  const height = document.documentElement.scrollHeight;

  return (
    <div
      className="bg-black h-screen text-white font-mono flex w-screen snap-x  overflow-y-hidden"
      ref={wheelRef} onWheel={handleWheel}
      style={{ scrollBehavior: 'smooth' }} // Smooth scroll
    >

      <h1 className="text-[100px] snap-start">CSS Battles</h1>
      {arr.map((Component, index) => (
        <div key={index} className='h-full aspect-[4/3] snap-start'>
          <div data-number={arr.length - index} className='relative'
          style={{ transform: `scale(${height / 300}`, transformOrigin: "top left" }}>
            <Component />
          </div>
        </div>
      ))}

    </div>
  );
}
