import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'EN' | 'FR';
export type ThemePreference = 'system' | 'light' | 'dark';
export type ChildProfile = { name: string; age: string; sex: string; educationLevel: string };
export type ParentProfile = { name: string; imageUri: string | null; singleParent: boolean; language: Language; theme: ThemePreference };

type ParentContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  completed: string[];
  toggleCompleted: (id: string) => void;
  childAge: string;
  theme: ThemePreference;
  parentProfile: ParentProfile | null;
  setTheme: (theme: ThemePreference) => void;
  saveParentProfile: (profile: ParentProfile) => void;
  children: ChildProfile[];
  ppcPoints: number;
  awardProgress: (points: number) => void;
  saveChildren: (children: ChildProfile[]) => void;
  setChildAge: (age: string) => void;
};

const ParentContext = createContext<ParentContextValue | null>(null);

export function ParentProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('EN');
  const [completed, setCompleted] = useState<string[]>(['listen-first']);
  const [childAge, setChildAgeState] = useState('3–5 years');
  const [theme, setThemeState] = useState<ThemePreference>('system');
  const [parentProfile, setParentProfile] = useState<ParentProfile | null>(null);
  const [children, setChildren] = useState<ChildProfile[]>([]);
  const [ppcPoints, setPpcPoints] = useState(0);

  useEffect(() => {
    AsyncStorage.multiGet(['parent-language', 'parent-completed', 'parent-age', 'parent-theme', 'parent-profile', 'parent-children', 'ppc-points']).then((values) => {
      const storedLanguage = values[0][1];
      const storedCompleted = values[1][1];
      const storedAge = values[2][1];
      const storedTheme = values[3][1];
      const storedProfile = values[4][1];
      if (storedLanguage === 'EN' || storedLanguage === 'FR') setLanguageState(storedLanguage);
      if (storedCompleted) setCompleted(JSON.parse(storedCompleted) as string[]);
      if (storedAge) setChildAgeState(storedAge);
      if (storedTheme === 'system' || storedTheme === 'light' || storedTheme === 'dark') setThemeState(storedTheme);
      if (storedProfile) setParentProfile(JSON.parse(storedProfile) as ParentProfile);
      if (values[5][1]) setChildren(JSON.parse(values[5][1]) as ChildProfile[]);
      if (values[6][1]) setPpcPoints(Number(values[6][1]) || 0);
    });
  }, []);

  const value = useMemo(() => ({
    language,
    setLanguage: (next: Language) => {
      setLanguageState(next);
      void AsyncStorage.setItem('parent-language', next);
    },
    completed,
    theme,
    parentProfile,
    children,
    ppcPoints,
    awardProgress: (points: number) => { setPpcPoints((current) => { const next = current + points; void AsyncStorage.setItem('ppc-points', String(next)); return next; }); },
    saveChildren: (next: ChildProfile[]) => { setChildren(next); void AsyncStorage.setItem('parent-children', JSON.stringify(next)); },
    setTheme: (next: ThemePreference) => { setThemeState(next); void AsyncStorage.setItem('parent-theme', next); },
    saveParentProfile: (profile: ParentProfile) => { setParentProfile(profile); void AsyncStorage.setItem('parent-profile', JSON.stringify(profile)); },
    toggleCompleted: (id: string) => {
      setCompleted((current) => {
        const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
        void AsyncStorage.setItem('parent-completed', JSON.stringify(next));
        if (!current.includes(id) && next.length >= 15 && current.length < 15) { setPpcPoints((points) => { const awarded = points + 5; void AsyncStorage.setItem('ppc-points', String(awarded)); return awarded; }); }
        return next;
      });
    },
    childAge,
    setChildAge: (age: string) => {
      setChildAgeState(age);
      void AsyncStorage.setItem('parent-age', age);
    },
  }), [language, completed, childAge, theme, parentProfile, children, ppcPoints]);

  return <ParentContext.Provider value={value}>{children}</ParentContext.Provider>;
}

export function useParent() {
  const context = useContext(ParentContext);
  if (!context) throw new Error('useParent must be used within ParentProvider');
  return context;
}