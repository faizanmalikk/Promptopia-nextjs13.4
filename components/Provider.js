'use client'

import { useState, useEffect } from 'react';
import { SessionProvider, getSession } from 'next-auth/react';

const Provider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
      setLoading(false);
    };

    fetchSession();
  }, []);

  if (loading) {
    return <div>Loading session...</div>;
  }

  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};

export default Provider;
