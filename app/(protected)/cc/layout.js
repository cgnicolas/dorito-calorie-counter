import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

export default function CalorieCounterLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
