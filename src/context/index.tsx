import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
  user: string | null;
  setUser: (user: string | null) => void;
  activePage: number;
    setActivePage: (activePage: number) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
    const [activePage, setActivePage] = useState(0);
  return (
    <AppContext.Provider value={{ user, setUser, activePage, setActivePage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};