import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import type { Href } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useColors } from '@/hooks/useColors';
import { useParent } from '@/context/ParentContext';
import { lessonsForAge } from '@/constants/lessons';

export default function LearnScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { completed, language, childAge } = useParent();
  const lessons = lessonsForAge(childAge);
  const copy = language === 'FR' ? { kicker: 'ACADÉMIE PARENT +', title: 'Apprendre ensemble.', subtitle: 'Des leçons adaptées à l’âge de votre enfant.', offline: 'Disponible hors connexion', complete: 'Quiz réussi' } : { kicker: 'PARENT+ ACADEMY', title: 'Learn together.', subtitle: 'Lessons matched to your child’s age.', offline: 'Available offline', complete: 'Quiz passed' };
  return <ScrollView style={{ backgroundColor: colors.background }} contentContainerStyle={[styles.content, { paddingTop: insets.top + 22 }]}>
    <Text style={[styles.kicker, { color: colors.primary }]}>{copy.kicker}</Text><Text style={[styles.title, { color: colors.foreground }]}>{copy.title}</Text><Text style={[styles.subtitle, { color: colors.mutedForeground }]}>{copy.subtitle}</Text>
    <View style={[styles.offline, { backgroundColor: colors.secondary }]}><Feather name="download-cloud" size={16} color={colors.primary} /><Text style={[styles.offlineText, { color: colors.foreground }]}>{copy.offline}</Text><View style={[styles.dot, { backgroundColor: colors.primary }]} /></View>
    <View style={[styles.agePill, { backgroundColor: colors.accent }]}><Feather name="users" size={15} color={colors.primary} /><Text style={[styles.ageText, { color: colors.accentForeground }]}>For {childAge}</Text></View>
    {lessons.map((lesson) => {
      const done = completed.includes(lesson.id);
      return <Pressable key={lesson.id} testID={`lesson-${lesson.id}`} onPress={() => router.push(`/lesson/${lesson.id}` as Href)} style={({ pressed }) => [styles.lesson, { backgroundColor: colors.card, borderColor: done ? colors.primary : colors.border, opacity: pressed ? 0.8 : 1 }]}>
        <View style={[styles.lessonIcon, { backgroundColor: done ? colors.secondary : colors.accent }]}><Feather name={lesson.icon} size={21} color={colors.primary} /></View><View style={{ flex: 1 }}><Text style={[styles.lessonTitle, { color: colors.foreground }]}>{lesson.title[language]}</Text><Text style={[styles.lessonDesc, { color: colors.mutedForeground }]}>{lesson.description[language]}</Text><Text style={[styles.lessonLength, { color: colors.mutedForeground }]}>{done ? copy.complete : `${lesson.duration} · Video + quiz`}</Text></View><View style={[styles.check, { backgroundColor: done ? colors.primary : colors.background, borderColor: done ? colors.primary : colors.border }]}>{done ? <Feather name="check" size={15} color={colors.primaryForeground} /> : <Feather name="play" size={14} color={colors.primary} />}</View>
      </Pressable>;
    })}
  </ScrollView>;
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: 20, paddingBottom: 110 }, kicker: { fontFamily: 'Inter_700Bold', letterSpacing: 1.2, fontSize: 11, marginBottom: 8 }, title: { fontFamily: 'Inter_700Bold', fontSize: 30 }, subtitle: { fontFamily: 'Inter_400Regular', fontSize: 15, lineHeight: 22, marginTop: 8, marginBottom: 18 }, offline: { borderRadius: 12, padding: 11, flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 10 }, offlineText: { fontFamily: 'Inter_600SemiBold', fontSize: 12, flex: 1 }, dot: { width: 8, height: 8, borderRadius: 4 }, agePill: { alignSelf: 'flex-start', borderRadius: 20, paddingHorizontal: 11, paddingVertical: 7, flexDirection: 'row', gap: 6, alignItems: 'center', marginBottom: 17 }, ageText: { fontFamily: 'Inter_600SemiBold', fontSize: 12 }, lesson: { borderWidth: 1, borderRadius: 18, padding: 15, marginBottom: 12, flexDirection: 'row', alignItems: 'center', gap: 13 }, lessonIcon: { width: 48, height: 48, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }, lessonTitle: { fontFamily: 'Inter_600SemiBold', fontSize: 15, marginBottom: 5 }, lessonDesc: { fontFamily: 'Inter_400Regular', fontSize: 12, lineHeight: 17 }, lessonLength: { fontFamily: 'Inter_500Medium', fontSize: 11, marginTop: 7 }, check: { width: 30, height: 30, borderRadius: 15, borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
});