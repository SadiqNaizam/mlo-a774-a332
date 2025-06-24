'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import Heading from './Heading';
import InputFields from './InputFields';
import Button from './Button';
import LinkGroup from './LinkGroup';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Production-ready code would validate inputs and call an API
    console.log('Login attempt with:', { email, password });
  };

  return (
    <Card className="w-[350px] bg-card text-card-foreground p-8 shadow-lg rounded-lg border-0">
      <div className="flex flex-col gap-8">
        <Heading />
        <div className="flex flex-col gap-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <InputFields
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
            <a
              href="#"
              className="text-sm text-left text-muted-foreground hover:text-primary hover:underline"
            >
              Forgot Password
            </a>
            <Button type="submit">Login</Button>
          </form>
          <LinkGroup />
        </div>
      </div>
    </Card>
  );
};

export default LoginForm;
