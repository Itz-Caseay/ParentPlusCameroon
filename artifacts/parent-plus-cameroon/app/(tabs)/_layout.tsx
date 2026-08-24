import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useColors } from '@/hooks/useColors';
import { Redirect } from 'expo-router';
import type { Href } from 'expo-router';
import { useAuth } from '@clerk/expo';
import { useEffect } from 'react';
import { setAuthTokenGetter } from '@workspace/api-client-react';

export default function TabLayout() {
  const colors = useColors();
  const { isSignedIn, getToken } = useAuth();
  useEffect(() => {
    setAuthTokenGetter(() => getToken());
  }, [getToken]);
  if (!isSignedIn) return <Redirect href={'/(auth)/sign-in' as Href} />;
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.mutedForeground,
        tabBarLabelStyle: { fontFamily: 'Inter_600SemiBold', fontSize: 11 },
        tabBarStyle: {
          height: Platform.OS === 'web' ? 84 : 68,
          paddingTop: 8,
          paddingBottom: Platform.OS === 'web' ? 34 : 8,
          backgroundColor: colors.card,
          borderTopColor: colors.border,
        },
        tabBarBackground: () => Platform.OS === 'ios'
          ? <BlurView intensity={80} tint="light" style={StyleSheet.absoluteFill} />
          : <View style={[StyleSheet.absoluteFill, { backgroundColor: colors.card }]} />,
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} /> }} />
      <Tabs.Screen name="learn" options={{ title: 'Learn', tabBarIcon: ({ color, size }) => <Feather name="book-open" color={color} size={size} /> }} />
      <Tabs.Screen name="support" options={{ title: 'Support', tabBarIcon: ({ color, size }) => <Feather name="heart" color={color} size={size} /> }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: ({ color, size }) => <Feather name="user" color={color} size={size} /> }} />
    </Tabs>
  );
}