import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import type { Href } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth, useSignUp } from '@clerk/expo';
import { Feather } from '@expo/vector-icons';
import { useColors } from '@/hooks/useColors';

export default function SignUpScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { signUp, errors, fetchStatus } = useSignUp();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const submit = async () => {
    setMessage('');
    const result = await signUp.password({ emailAddress, password });
    if (result.error) { setMessage(result.error.message); return; }
    await signUp.verifications.sendEmailCode();
  };
  const verify = async () => {
    const result = await signUp.verifications.verifyEmailCode({ code });
    if (result.error) { setMessage(result.error.message); return; }
    if (signUp.status === 'complete') await signUp.finalize({ navigate: () => router.replace('/(tabs)') });
  };
  if (isSignedIn) return null;
  const verifying = signUp.status === 'missing_requirements' && signUp.unverifiedFields.includes('email_address') && signUp.missingFields.length === 0;
  return <ScrollView style={{ backgroundColor: colors.background }} contentContainerStyle={[styles.content, { paddingTop: insets.top + 30, paddingBottom: insets.bottom + 28 }]} keyboardShouldPersistTaps="handled">
    <View style={[styles.mark, { backgroundColor: colors.secondary }]}><Feather name="heart" size={25} color={colors.primary} /></View>
    <Text style={[styles.kicker, { color: colors.primary }]}>PARENT+ CAMEROON</Text>
    <Text style={[styles.title, { color: colors.foreground }]}>{verifying ? 'Check your email.' : 'Join Parent+.'}</Text>
    <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>{verifying ? `We sent a verification code to ${emailAddress}.` : 'Create a private space for your parenting journey.'}</Text>
    {verifying ? <><Text style={[styles.label, { color: colors.foreground }]}>Verification code</Text><TextInput testID="verification-code" style={[styles.input, { borderColor: colors.input, backgroundColor: colors.card, color: colors.foreground }]} value={code} onChangeText={setCode} keyboardType="number-pad" placeholder="Enter 6-digit code" placeholderTextColor={colors.mutedForeground} /><Pressable testID="verify-submit" onPress={verify} disabled={!code || fetchStatus === 'fetching'} style={[styles.button, { backgroundColor: colors.foreground, opacity: !code ? 0.45 : 1 }]}><Text style={styles.buttonText}>Verify email</Text></Pressable><Pressable onPress={() => signUp.verifications.sendEmailCode()}><Text style={[styles.resend, { color: colors.primary }]}>Send a new code</Text></Pressable></> : <><Text style={[styles.label, { color: colors.foreground }]}>Email address</Text><TextInput testID="sign-up-email" style={[styles.input, { borderColor: colors.input, backgroundColor: colors.card, color: colors.foreground }]} autoCapitalize="none" keyboardType="email-address" value={emailAddress} onChangeText={setEmailAddress} placeholder="you@example.com" placeholderTextColor={colors.mutedForeground} /><Text style={[styles.label, { color: colors.foreground }]}>Password</Text><TextInput testID="sign-up-password" style={[styles.input, { borderColor: colors.input, backgroundColor: colors.card, color: colors.foreground }]} secureTextEntry value={password} onChangeText={setPassword} placeholder="At least 8 characters" placeholderTextColor={colors.mutedForeground} /><View nativeID="clerk-captcha" /><Pressable testID="sign-up-submit" onPress={submit} disabled={!emailAddress || !password || fetchStatus === 'fetching'} style={[styles.button, { backgroundColor: colors.foreground, opacity: !emailAddress || !password ? 0.45 : 1 }]}><Text style={styles.buttonText}>{fetchStatus === 'fetching' ? 'Creating account…' : 'Create account'}</Text></Pressable></>}
    {(message || errors.fields.emailAddress?.message || errors.fields.password?.message || errors.fields.code?.message) && <Text style={[styles.error, { color: colors.destructive }]}>{message || errors.fields.emailAddress?.message || errors.fields.password?.message || errors.fields.code?.message}</Text>}
    <View style={styles.footer}><Text style={[styles.footerText, { color: colors.mutedForeground }]}>Already have an account?</Text><Link href={'/(auth)/sign-in' as Href} asChild><Pressable><Text style={[styles.link, { color: colors.primary }]}> Sign in</Text></Pressable></Link></View>
  </ScrollView>;
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: 24 },
  mark: { width: 54, height: 54, borderRadius: 18, alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  kicker: { fontFamily: 'Inter_700Bold', letterSpacing: 1.2, fontSize: 11, marginBottom: 8 },
  title: { fontFamily: 'Inter_700Bold', fontSize: 34 },
  subtitle: { fontFamily: 'Inter_400Regular', fontSize: 15, lineHeight: 22, marginTop: 8, marginBottom: 28 },
  label: { fontFamily: 'Inter_600SemiBold', fontSize: 13, marginBottom: 8, marginTop: 5 },
  input: { height: 52, borderRadius: 14, borderWidth: 1, paddingHorizontal: 15, fontFamily: 'Inter_400Regular', fontSize: 14, marginBottom: 13 },
  button: { height: 54, borderRadius: 14, alignItems: 'center', justifyContent: 'center', marginTop: 7 },
  buttonText: { color: '#fbf7f0', fontFamily: 'Inter_600SemiBold', fontSize: 15 },
  resend: { textAlign: 'center', fontFamily: 'Inter_600SemiBold', fontSize: 13, marginTop: 20 },
  error: { fontFamily: 'Inter_500Medium', fontSize: 12, lineHeight: 17, marginTop: 12 },
  footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 22 },
  footerText: { fontFamily: 'Inter_400Regular', fontSize: 13 },
  link: { fontFamily: 'Inter_600SemiBold', fontSize: 13 },
});