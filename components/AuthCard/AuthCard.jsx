'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function AuthCard() {
  const router = useRouter();
  return (
    <Card className="w-full md:max-w-[30rem]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">DoritoCC</CardTitle>
        <CardDescription>
          Use a custom Computer Vision model to count calories
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          className="w-full"
          onClick={() => router.push('/api/auth/login')}
        >
          Auth0 Sign In
        </Button>
      </CardFooter>
    </Card>
  );
}
