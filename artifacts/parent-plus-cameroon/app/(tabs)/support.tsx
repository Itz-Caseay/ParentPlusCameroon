import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useColors } from '@/hooks/useColors';

const situations = [
  { title: 'My child is having a meltdown', icon: 'cloud-rain' as const, color: 'orange', guide: 'Pause. Take one slow breath. Move close enough for your child to feel safe, then name the feeling: “You are very upset.” Connection comes before correction.' },
  { title: 'We keep arguing at home', icon: 'message-circle' as const, color: 'green', guide: 'Lower the pace of the moment. Use fewer words, listen for the need underneath the behaviour, and agree on one small next step together.' },
  { title: 'My child will not listen', icon: 'volume-2' as const, color: 'blue', guide: 'Get their attention gently, say what you need in one clear sentence, and offer two simple choices. Follow through calmly and consistently.' },
  { title: 'I feel overwhelmed', icon: 'battery' as const, color: 'yellow', guide: 'You deserve care too. If it is safe, take a short pause, ask a trusted adult for support, and return when your body feels calmer.' },
];

export default function SupportScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState<string | null>(null);
  return <ScrollView style={{ backgroundColor: colors.background }} contentContainerStyle={[styles.content, { paddingTop: insets.top + 22 }]}>
    <Text style={[styles.kicker, { color: colors.primary }]}>PRACTICAL SUPPORT</Text>
    <Text style={[styles.title, { color: colors.foreground }]}>You’re not alone in this.</Text>
    <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>Choose a moment below for a calm, practical next step.</Text>
    {situations.map((item) => {
      const isOpen = selected === item.title;
      return <Pressable key={item.title} onPress={() => setSelected(isOpen ? null : item.title)} style={[styles.item, { backgroundColor: colors.card, borderColor: isOpen ? colors.primary : colors.border }]}>
        <View style={[styles.itemIcon, { backgroundColor: colors.secondary }]}><Feather name={item.icon} size={20} color={colors.primary} /></View>
        <View style={{ flex: 1 }}><Text style={[styles.itemTitle, { color: colors.foreground }]}>{item.title}</Text>{isOpen && <Text style={[styles.guide, { color: colors.mutedForeground }]}>{item.guide}</Text>}</View>
        <Feather name={isOpen ? 'chevron-up' : 'chevron-down'} size={19} color={colors.mutedForeground} />
      </Pressable>;
    })}
    <View style={[styles.safety, { backgroundColor: colors.accent }]}><Feather name="shield" size={18} color={colors.primary} /><Text style={[styles.safetyText, { color: colors.accentForeground }]}>This guidance is educational and not a replacement for emergency services or a qualified professional.</Text></View>
  </ScrollView>;
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: 20, paddingBottom: 110 },
  kicker: { fontFamily: 'Inter_700Bold', letterSpacing: 1.2, fontSize: 11, marginBottom: 8 },
  title: { fontFamily: 'Inter_700Bold', fontSize: 30, lineHeight: 36 },
  subtitle: { fontFamily: 'Inter_400Regular', fontSize: 15, lineHeight: 22, marginTop: 8, marginBottom: 22 },
  item: { borderWidth: 1, borderRadius: 17, padding: 15, marginBottom: 11, flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  itemIcon: { width: 42, height: 42, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  itemTitle: { fontFamily: 'Inter_600SemiBold', fontSize: 15, lineHeight: 21, paddingTop: 9 },
  guide: { fontFamily: 'Inter_400Regular', fontSize: 13, lineHeight: 20, marginTop: 10, paddingRight: 5 },
  safety: { borderRadius: 15, padding: 15, flexDirection: 'row', gap: 10, marginTop: 12, alignItems: 'flex-start' },
  safetyText: { flex: 1, fontFamily: 'Inter_500Medium', fontSize: 12, lineHeight: 18 },
});