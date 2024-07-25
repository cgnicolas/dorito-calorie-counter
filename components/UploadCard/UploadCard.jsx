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
  const [calorieCount, setCalorieCount] = useState(0);
  const [file, setFile] = useState(null);
  const handleUpload = async (event) => {
    event.preventDefault();
    const reader = new FileReader();

    // Convert image to base64 string
    reader.onloadend = async () => {
      const base64String = reader.result.split(',')[1]; // Extract base64 string from data URL
      const response = await uploadImage(base64String);
      const { doritoCount: count, calories } = response;
      setDoritoCount(count);
      setCalorieCount(calories);
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
          Upload an image of your serving of Doritos (the model was trained with
          Cool Ranch)
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleUpload}>
        <CardContent>
          <Input
            name="dImage"
            required
            type="file"
            className="cursor-pointer file:rounded-md file:bg-primary file:hover:bg-primary/90 file:text-white file:cursor-pointer"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button type="submit" className="w-full mb-5">
            Upload
          </Button>
          <div>
            {doritoCount} Doritos, which is equal to {calorieCount} calories
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
