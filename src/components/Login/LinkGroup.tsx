import React from 'react';

const LinkGroup: React.FC = () => {
  return (
    <p className="text-center text-sm text-muted-foreground">
      Don&apos;t have an account?{' '}
      <a
        href="#"
        className="font-semibold text-primary underline underline-offset-2 hover:no-underline"
      >
        SignUp
      </a>
    </p>
  );
};

export default LinkGroup;
