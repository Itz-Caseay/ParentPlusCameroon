import React, { useCallback, useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { useAuth, useSignIn, useSSO } from '@clerk/expo';
import { Link, useRouter } from 'expo-router';
import type { Href } from 'expo-router';
import { Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { useColors } from '@/hooks/useColors';

WebBrowser.maybeCompleteAuthSession();

export default function SignInScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { signIn, errors, fetchStatus } = useSignIn();
  const { startSSOFlow } = useSSO();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (Platform.OS === 'android') { void WebBrowser.warmUpAsync(); return () => { void WebBrowser.coolDownAsync(); }; }
  }, []);
  const finish = useCallback(() => router.replace('/(tabs)'), [router]);
  const submit = async () => {
    setMessage('');
    const result = await signIn.password({ emailAddress, password });
    if (result.error) { setMessage(result.error.message); return; }
    if (signIn.status === 'complete') await signIn.finalize({ navigate: () => finish() });
    else if (signIn.status === 'needs_client_trust') await signIn.mfa.sendEmailCode();
    else setMessage('Additional verification is required. Please check your email.');
  };
  const google = async () => {
    try {
      const result = await startSSOFlow({ strategy: 'oauth_google', redirectUrl: AuthSession.makeRedirectUri({ scheme: 'parent-plus-cameroon' }) });
      if (result.createdSessionId) await result.setActive?.({ session: result.createdSessionId, navigate: () => finish() });
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Google sign-in could not be completed.'); }
  };
  if (isSignedIn) return null;
  return <ScrollView style={{ backgroundColor: colors.background }} contentContainerStyle={[styles.content, { paddingTop: insets.top + 30, paddingBottom: insets.bottom + 26 }]} keyboardShouldPersistTaps="handled">
    <View style={[styles.mark, { backgroundColor: colors.secondary }]}><Feather name="heart" size={25} color={colors.primary} /></View>
    <Text style={[styles.kicker, { color: colors.primary }]}>PARENT+ CAMEROON</Text>
    <Text style={[styles.title, { color: colors.foreground }]}>Welcome back.</Text>
    <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>Your parenting journey is waiting for you.</Text>
    <Pressable testID="google-sign-in" onPress={google} style={[styles.google, { borderColor: colors.border, backgroundColor: colors.card }]}><Feather name="globe" size={18} color={colors.foreground} /><Text style={[styles.googleText, { color: colors.foreground }]}>Continue with Google</Text></Pressable>
    <View style={styles.divider}><View style={[styles.line, { backgroundColor: colors.border }]} /><Text style={[styles.or, { color: colors.mutedForeground }]}>or use email</Text><View style={[styles.line, { backgroundColor: colors.border }]} /></View>
    <Text style={[styles.label, { color: colors.foreground }]}>Email address</Text>
    <TextInput testID="sign-in-email" style={[styles.input, { borderColor: colors.input, backgroundColor: colors.card, color: colors.foreground }]} autoCapitalize="none" keyboardType="email-address" value={emailAddress} onChangeText={setEmailAddress} placeholder="you@example.com" placeholderTextColor={colors.mutedForeground} />
    <Text style={[styles.label, { color: colors.foreground }]}>Password</Text>
    <TextInput testID="sign-in-password" style={[styles.input, { borderColor: colors.input, backgroundColor: colors.card, color: colors.foreground }]} secureTextEntry value={password} onChangeText={setPassword} placeholder="Your password" placeholderTextColor={colors.mutedForeground} />
    {(message || errors.fields.identifier?.message || errors.fields.password?.message) && <Text style={[styles.error, { color: colors.destructive }]}>{message || errors.fields.identifier?.message || errors.fields.password?.message}</Text>}
    <Pressable testID="sign-in-submit" onPress={submit} disabled={!emailAddress || !password || fetchStatus === 'fetching'} style={({ pressed }) => [styles.button, { backgroundColor: colors.foreground, opacity: !emailAddress || !password || fetchStatus === 'fetching' ? 0.45 : pressed ? 0.8 : 1 }]}><Text style={styles.buttonText}>{fetchStatus === 'fetching' ? 'Signing in…' : 'Sign in'}</Text></Pressable>
    <View style={styles.footer}><Text style={[styles.footerText, { color: colors.mutedForeground }]}>New to Parent+?</Text><Link href={'/(auth)/sign-up' as Href} asChild><Pressable><Text style={[styles.link, { color: colors.primary }]}> Create an account</Text></Pressable></Link></View>
  </ScrollView>;
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: 24 },
  mark: { width: 54, height: 54, borderRadius: 18, alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  kicker: { fontFamily: 'Inter_700Bold', letterSpacing: 1.2, fontSize: 11, marginBottom: 8 },
  title: { fontFamily: 'Inter_700Bold', fontSize: 34 },
  subtitle: { fontFamily: 'Inter_400Regular', fontSize: 15, lineHeight: 22, marginTop: 8, marginBottom: 28 },
  google: { height: 52, borderRadius: 14, borderWidth: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 10 },
  googleText: { fontFamily: 'Inter_600SemiBold', fontSize: 14 },
  divider: { flexDirection: 'row', alignItems: 'center', gap: 10, marginVertical: 24 },
  line: { height: 1, flex: 1 },
  or: { fontFamily: 'Inter_400Regular', fontSize: 12 },
  label: { fontFamily: 'Inter_600SemiBold', fontSize: 13, marginBottom: 8, marginTop: 5 },
  input: { height: 52, borderRadius: 14, borderWidth: 1, paddingHorizontal: 15, fontFamily: 'Inter_400Regular', fontSize: 14, marginBottom: 13 },
  error: { fontFamily: 'Inter_500Medium', fontSize: 12, lineHeight: 17, marginBottom: 10 },
  button: { height: 54, borderRadius: 14, alignItems: 'center', justifyContent: 'center', marginTop: 7 },
  buttonText: { color: '#fbf7f0', fontFamily: 'Inter_600SemiBold', fontSize: 15 },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 22 },
  footerText: { fontFamily: 'Inter_400Regular', fontSize: 13 },
  link: { fontFamily: 'Inter_600SemiBold', fontSize: 13 },
});