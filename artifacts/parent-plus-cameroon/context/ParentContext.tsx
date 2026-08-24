import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'EN' | 'FR';

type ParentContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  completed: string[];
  toggleCompleted: (id: string) => void;
  childAge: string;
  setChildAge: (age: string) => void;
};

const ParentContext = createContext<ParentContextValue | null>(null);

export function ParentProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('EN');
  const [completed, setCompleted] = useState<string[]>(['listen-first']);
  const [childAge, setChildAgeState] = useState('3–5 years');

  useEffect(() => {
    AsyncStorage.multiGet(['parent-language', 'parent-completed', 'parent-age']).then((values) => {
      const storedLanguage = values[0][1];
      const storedCompleted = values[1][1];
      const storedAge = values[2][1];
      if (storedLanguage === 'EN' || storedLanguage === 'FR') setLanguageState(storedLanguage);
      if (storedCompleted) setCompleted(JSON.parse(storedCompleted) as string[]);
      if (storedAge) setChildAgeState(storedAge);
    });
  }, []);

  const value = useMemo(() => ({
    language,
    setLanguage: (next: Language) => {
      setLanguageState(next);
      void AsyncStorage.setItem('parent-language', next);
    },
    completed,
    toggleCompleted: (id: string) => {
      setCompleted((current) => {
        const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
        void AsyncStorage.setItem('parent-completed', JSON.stringify(next));
        return next;
      });
    },
    childAge,
    setChildAge: (age: string) => {
      setChildAgeState(age);
      void AsyncStorage.setItem('parent-age', age);
    },
  }), [language, completed, childAge]);

  return <ParentContext.Provider value={value}>{children}</ParentContext.Provider>;
}

export function useParent() {
  const context = useContext(ParentContext);
  if (!context) throw new Error('useParent must be used within ParentProvider');
  return context;
}