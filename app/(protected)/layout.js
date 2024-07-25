import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

export default async function ProtectedLayout({ children }) {
  const session = await getSession();
  if (!session?.user) {
    redirect('/');
  }

  return <>{children}</>;
}
