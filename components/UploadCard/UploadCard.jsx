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
import { uploadImage } from '@/lib/server-actions/upload';

export default function UploadCard() {
  return (
    <Card className="flex flex-col justify-between min-w-[30rem]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Upload An Image</CardTitle>
        <CardDescription>
          Upload an image of your serving of Doritos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={uploadImage}>
          <Input name="dImage" type="file" />
          <Button type="submit">Upload</Button>
        </form>
      </CardContent>
    </Card>
  );
}
