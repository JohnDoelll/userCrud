import { type PropsWithChildren, useRef } from 'react';

import { type UserStore, initializeUserStore, Provider } from '@/state/stores/userStore';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const storeReference = useRef<UserStore>();

  if (!storeReference.current) {
    storeReference.current = initializeUserStore();
  }

  return <Provider value={storeReference.current}>{children}</Provider>;
};
