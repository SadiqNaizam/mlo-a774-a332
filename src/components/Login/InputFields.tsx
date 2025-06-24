import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputFieldsProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

const InputFields: React.FC<InputFieldsProps> = ({ email, setEmail, password, setPassword }) => {
  const inputStyle =
    'border-0 border-b border-gray-300 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-primary pb-2 bg-transparent text-base';

  return (
    <div className="space-y-8">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email" className="sr-only">
          Email Address
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputStyle}
          required
          autoComplete="email"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password" className="sr-only">
          Password
        </Label>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputStyle}
          required
          autoComplete="current-password"
        />
      </div>
    </div>
  );
};

export default InputFields;
