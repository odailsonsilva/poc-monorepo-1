import create from 'zustand';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface StoreProps {
  user: User | null;
  onLogin: (user: User) => void;
  onLogout: () => void;
  getUser: () => User | null;
}

export const useStore = create<StoreProps>((set, get) => ({
  user: null,
  onLogin: (user: User) => set({ user }),
  onLogout: () => set({ user: null }),
  getUser: () => get().user,
}));