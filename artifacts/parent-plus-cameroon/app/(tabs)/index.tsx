import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useColors } from '@/hooks/useColors';
import { useParent } from '@/context/ParentContext';

const copy = {
  EN: { hello: 'Good morning,', name: 'Parent', subtitle: 'Small steps. Stronger families.', continue: 'Continue learning', today: 'Today’s gentle practice', tip: 'Before correcting, connect.', tipBody: 'Get close, lower your voice, and name what your child may be feeling.', support: 'Need support right now?', supportBody: 'Find calm, practical guidance for common parenting moments.' },
  FR: { hello: 'Bonjour,', name: 'Parent', subtitle: 'De petits pas. Des familles plus fortes.', continue: 'Continuer à apprendre', today: 'La pratique douce du jour', tip: 'Avant de corriger, connectez-vous.', tipBody: 'Approchez-vous, baissez la voix et nommez ce que votre enfant peut ressentir.', support: 'Besoin de soutien maintenant ?', supportBody: 'Des conseils pratiques pour les moments difficiles.' },
};

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { language, completed, childAge } = useParent();
  const t = copy[language];
  const progress = Math.min(completed.length / 6, 1);
  return (
    <ScrollView style={{ backgroundColor: colors.background }} contentContainerStyle={[styles.content, { paddingTop: insets.top + 20 }]}>
      <View style={styles.header}>
        <View>
          <Text style={[styles.eyebrow, { color: colors.primary }]}>{t.hello}</Text>
          <Text style={[styles.title, { color: colors.foreground }]}>{t.name}</Text>
        </View>
        <Pressable testID="profile-button" onPress={() => router.push('/profile')} style={[styles.avatar, { backgroundColor: colors.secondary }]}>
          <Text style={[styles.avatarText, { color: colors.primary }]}>P</Text>
        </Pressable>
      </View>
      <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>{t.subtitle}</Text>

      <View style={[styles.hero, { backgroundColor: colors.primary }]}>
        <View style={styles.heroCopy}>
          <Text style={styles.heroKicker}>YOUR PARENTING PATH</Text>
          <Text style={styles.heroTitle}>Grow together, one moment at a time.</Text>
          <Text style={styles.heroMeta}>{childAge} · {completed.length} lessons completed</Text>
        </View>
        <View style={styles.progressRing}><Text style={styles.progressText}>{Math.round(progress * 100)}%</Text></View>
      </View>

      <Pressable testID="continue-learning" onPress={() => router.push('/learn')} style={({ pressed }) => [styles.primaryButton, { backgroundColor: colors.foreground, opacity: pressed ? 0.82 : 1 }]}>
        <Text style={styles.primaryButtonText}>{t.continue}</Text><Feather name="arrow-right" size={18} color={colors.background} />
      </Pressable>

      <Text style={[styles.sectionTitle, { color: colors.foreground }]}>{t.today}</Text>
      <View style={[styles.tipCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <View style={[styles.tipIcon, { backgroundColor: colors.accent }]}><Feather name="sun" size={20} color={colors.primary} /></View>
        <View style={{ flex: 1 }}><Text style={[styles.tipTitle, { color: colors.foreground }]}>{t.tip}</Text><Text style={[styles.tipBody, { color: colors.mutedForeground }]}>{t.tipBody}</Text></View>
        <Feather name="bookmark" size={19} color={colors.mutedForeground} />
      </View>

      <Pressable onPress={() => router.push('/support')} style={[styles.supportCard, { backgroundColor: colors.secondary }]}>
        <View style={{ flex: 1 }}><Text style={[styles.supportTitle, { color: colors.foreground }]}>{t.support}</Text><Text style={[styles.supportBody, { color: colors.mutedForeground }]}>{t.supportBody}</Text></View>
        <View style={[styles.circleArrow, { backgroundColor: colors.card }]}><Feather name="arrow-up-right" size={19} color={colors.primary} /></View>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: 20, paddingBottom: 110 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  eyebrow: { fontFamily: 'Inter_600SemiBold', fontSize: 13, letterSpacing: 0.4 },
  title: { fontFamily: 'Inter_700Bold', fontSize: 31, marginTop: 2 },
  subtitle: { fontFamily: 'Inter_400Regular', fontSize: 15, marginTop: 5, marginBottom: 24 },
  avatar: { width: 46, height: 46, borderRadius: 23, alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontFamily: 'Inter_700Bold', fontSize: 18 },
  hero: { borderRadius: 24, padding: 22, minHeight: 182, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  heroCopy: { flex: 1, paddingRight: 12 },
  heroKicker: { color: '#f8dfc8', fontFamily: 'Inter_700Bold', fontSize: 10, letterSpacing: 1.3, marginBottom: 13 },
  heroTitle: { color: '#fffdf9', fontFamily: 'Inter_700Bold', fontSize: 24, lineHeight: 29 },
  heroMeta: { color: '#f9d9c6', fontFamily: 'Inter_500Medium', fontSize: 12, marginTop: 13 },
  progressRing: { width: 70, height: 70, borderRadius: 35, borderWidth: 7, borderColor: '#f4b39a', alignItems: 'center', justifyContent: 'center' },
  progressText: { color: '#fffdf9', fontFamily: 'Inter_700Bold', fontSize: 16 },
  primaryButton: { borderRadius: 15, height: 54, marginTop: 13, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 },
  primaryButtonText: { color: '#fbf7f0', fontFamily: 'Inter_600SemiBold', fontSize: 15 },
  sectionTitle: { fontFamily: 'Inter_700Bold', fontSize: 20, marginTop: 30, marginBottom: 13 },
  tipCard: { borderRadius: 18, borderWidth: 1, padding: 17, flexDirection: 'row', alignItems: 'flex-start', gap: 13 },
  tipIcon: { width: 40, height: 40, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  tipTitle: { fontFamily: 'Inter_600SemiBold', fontSize: 15, marginBottom: 5 },
  tipBody: { fontFamily: 'Inter_400Regular', fontSize: 13, lineHeight: 19 },
  supportCard: { borderRadius: 19, marginTop: 14, padding: 18, flexDirection: 'row', alignItems: 'center' },
  supportTitle: { fontFamily: 'Inter_700Bold', fontSize: 16, marginBottom: 5 },
  supportBody: { fontFamily: 'Inter_400Regular', fontSize: 13, lineHeight: 18, paddingRight: 10 },
  circleArrow: { width: 42, height: 42, borderRadius: 21, alignItems: 'center', justifyContent: 'center' },
});