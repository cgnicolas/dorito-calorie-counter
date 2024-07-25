'use client';
import ServingInformation from '@/components/ServingInformation';
import Uploader from '@/components/Uploader/Uploader';
import { DoritoProvider } from '@/context/DoritoContext';
import React, { useContext } from 'react';

export default function CCPage() {
  return (
    <DoritoProvider>
      <div className="flex w-full h-screen flex-col items-center justify-center">
        <ServingInformation />
        <Uploader />
      </div>
    </DoritoProvider>
  );
}
