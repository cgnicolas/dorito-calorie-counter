import React from 'react';
import Link from 'next/link';

export default async function Navbar() {
  return (
    <nav className="sticky top-0 bg-white border-b-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="shrink-0 flex items-center">
              <span className="text-xl font-bold">DoritoCC</span>
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <Link
              className="bg-primary text-white rounded-md p-2 hover:bg-primary/90"
              href="/api/auth/logout"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
