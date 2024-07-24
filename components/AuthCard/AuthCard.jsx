'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SignUp from './SignUp';
import LogIn from './LogIn';

const AuthCard = () => {
  return (
    <Tabs defaultValue="login">
      <TabsList className="flex w-full ">
        <TabsTrigger className="flex-grow" value="login">
          Log In
        </TabsTrigger>
        <TabsTrigger className="flex-grow" value="signup">
          Sign Up
        </TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LogIn />
      </TabsContent>
      <TabsContent value="signup">
        <SignUp />
      </TabsContent>
    </Tabs>
  );
};

export default AuthCard;
