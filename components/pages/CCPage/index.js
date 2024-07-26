'use client';
import ServingChart from '@/components/ServingChart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Uploader from '@/components/Uploader/Uploader';
import { DoritoProvider } from '@/context/DoritoContext';
import React from 'react';

export default function CCPage() {
  return (
    <DoritoProvider>
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 flex w-full h-screen flex-col items-center justify-center">
        <Tabs defaultValue="account" className="w-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upload">Upload</TabsTrigger>
            <TabsTrigger value="chart">Chart</TabsTrigger>
          </TabsList>
          <TabsContent value="upload">
            <Uploader />
          </TabsContent>
          <TabsContent value="chart">
            <ServingChart />
          </TabsContent>
        </Tabs>
      </div>
    </DoritoProvider>
  );
}
