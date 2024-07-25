'use client';
import React, { useContext, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { uploadImage } from '@/lib/server-actions/upload';
import { DoritoContext } from '@/context/DoritoContext';
import { useToast } from '@/components/ui/use-toast';

export default function Uploader() {
  const [file, setFile] = useState(null);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const { setServing } = useContext(DoritoContext);
  const [isFileTooLarge, setIsFileTooLarge] = useState(false);

  useEffect(() => {
    if (file?.size > 1048576) {
      setIsFileTooLarge(true);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Looks like your file size is too big.',
      });
    } else {
      setIsFileTooLarge(false);
    }
  }, [file, toast]);

  const uploadFile = () => {
    const reader = new FileReader();
    setLoading(true);
    // Convert image to base64 string
    reader.onloadend = async () => {
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
    <div className="p-4 sm:p-8 md:p-16 lg:p-32 border-2 rounded-xl border-dashed flex flex-col justify-evenly items-center gap-4 sm:gap-6">
      <Input
        name="dImage"
        required
        type="file"
        accept=".png,.jpg,.jpeg"
        className="cursor-pointer file:rounded-md file:bg-primary file:hover:bg-primary/90 file:text-white file:cursor-pointer"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <small
        className={`text-sm font-medium leading-none ${
          isFileTooLarge && 'text-red-600'
        }`}
      >
        {loading ? 'Loading...' : 'Max image size: 1MB'}
      </small>
      <Button onClick={uploadFile} disabled={loading || isFileTooLarge}>
        Upload
      </Button>
    </div>
  );
}
