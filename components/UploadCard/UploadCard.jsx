'use client';
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { uploadImage } from '@/lib/server-actions/upload';

export default function UploadCard() {
  const [doritoCount, setDoritoCount] = useState(0);
  const [file, setFile] = useState(null);
  const handleUpload = async (event) => {
    event.preventDefault();
    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64String = reader.result.split(',')[1]; // Extract base64 string from data URL
      const response = await uploadImage(base64String);
      const { doritoCount: count } = response;
      setDoritoCount(count);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
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
        <Input
          name="dImage"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <Button onClick={handleUpload}>Upload</Button>
      </CardContent>
      <CardFooter>{doritoCount} Doritos</CardFooter>
    </Card>
  );
}
