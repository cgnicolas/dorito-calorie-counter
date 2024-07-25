import Navbar from '@/components/Navbar/Navbar';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';

export default withPageAuthRequired(function ProtectedLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
});
