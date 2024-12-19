import { createContext, useContext } from 'react';
import { createStore, useStore } from 'zustand';

import { User } from '../types';

interface IUserStore {
  users: User[];
  addUser: (user: Omit<User, 'id'>) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
}

export type UserStore = ReturnType<typeof initializeUserStore>;

const UserContext = createContext<UserStore | null>(null);

export const Provider = UserContext.Provider;

export const useUserStore = <T>(selector: (state: IUserStore) => T) => {
  const store = useContext(UserContext);

  if (!store) throw new Error('UserStore is missing the provider');

  return useStore(store, selector);
};

export const initializeUserStore = () => {
  return createStore<IUserStore>((set) => {
    return {
      users: [],
      addUser: (userData) => {
        set((state) => ({
          users: [
            ...state.users,
            {
              ...userData,
              id: crypto.randomUUID(),
            },
          ],
        }));
      },
      updateUser: (id, userData) => {
        set((state) => ({
          users: state.users.map((user) => (user.id === id ? { ...user, ...userData } : user)),
        }));
      },
      deleteUser: (id) => {
        set((state) => ({
          users: state.users.filter((user) => user.id !== id),
        }));
      },
    };
  });
};
