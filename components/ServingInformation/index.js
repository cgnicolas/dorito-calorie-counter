'use client';
import { DoritoContext } from '@/context/DoritoContext';
import React, { useContext } from 'react';

export default function ServingInformation() {
  const { serving } = useContext(DoritoContext);
  console.log(serving);
  return (
    serving && (
      <div className="text-lg font-semibold">
        This serving of {serving.doritoCount} Doritos will be {serving.calories}{' '}
        calories
      </div>
    )
  );
}
