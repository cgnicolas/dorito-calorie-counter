import { getUserServings } from '@/lib/calorie-counter/utils';
import { useUser } from '@auth0/nextjs-auth0/client';
import { createContext, useEffect, useState } from 'react';

export const DoritoContext = createContext();

export const DoritoProvider = ({ children }) => {
  const [serving, setServing] = useState(null);
  const [userServings, setUserServings] = useState(null);
  const { user } = useUser();
  useEffect(() => {
    const getServings = async () => {
      const response = await getUserServings(user.sub);
      setUserServings(response);
    };
    if (user) {
      getServings();
    }
  }, [user]);
  return (
    <DoritoContext.Provider value={{ serving, setServing, userServings }}>
      {children}
    </DoritoContext.Provider>
  );
};
