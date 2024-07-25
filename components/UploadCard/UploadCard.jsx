'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function UploadCard() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const file = formData.get('dImage');
    console.log(file);
  };
  return (
    <Card className="flex flex-col justify-between min-w-[30rem]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Upload An Image</CardTitle>
        <CardDescription>
          Upload an image of your serving of Doritos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Input name="dImage" type="file" />
          <Button type="submit">Upload</Button>
        </form>
      </CardContent>
    </Card>
  );
}
