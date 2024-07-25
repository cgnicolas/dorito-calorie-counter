'use client';
import React, { useContext, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { uploadImage } from '@/lib/server-actions/upload';
import { DoritoContext } from '@/context/DoritoContext';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Uploader() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const user = useUser();
  const [loading, setLoading] = useState(false);
  const { setServing } = useContext(DoritoContext);

  const uploadFile = () => {
    const reader = new FileReader();
    setLoading(true);
    // Convert image to base64 string
    reader.onloadend = async () => {
      console.log('USER', user);
      const base64String = reader.result.split(',')[1]; // Extract base64 string from data URL
      const serving = await uploadImage(base64String);
      setServing(serving);
      setLoading(false);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="p-32 border-2 rounded-xl border-dashed flex flex-col justify-evenly items-center gap-6">
      <Input
        name="dImage"
        required
        type="file"
        className="cursor-pointer file:rounded-md file:bg-primary file:hover:bg-primary/90 file:text-white file:cursor-pointer"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <Button onClick={uploadFile} disabled={loading}>
        Upload
      </Button>
    </div>
  );
}
