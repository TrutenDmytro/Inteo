import { createContext, useState } from "react";

export const SectionsContext = createContext(null);

export function SectionsArea({ children }) {
  const sections = {}

  return (
    <SectionsContext.Provider value={{ user, setUser }}>
      {children}
    </SectionsContext.Provider>
  );
}
