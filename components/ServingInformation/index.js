'use client';
import { DoritoContext } from '@/context/DoritoContext';
import { getUserServings } from '@/lib/calorie-counter/utils';
import { useUser } from '@auth0/nextjs-auth0/client';
import React, { useContext, useEffect } from 'react';

export default function ServingInformation() {
  const { serving } = useContext(DoritoContext);
  return (
    serving && (
      <div className="text-lg font-semibold">
        This serving of {serving.doritoCount} full Doritos will be{' '}
        {serving.calories} calories
      </div>
    )
  );
}
