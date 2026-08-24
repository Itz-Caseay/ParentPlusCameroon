import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useColors } from '@/hooks/useColors';
import { useParent } from '@/context/ParentContext';
import { lessons } from '@/constants/lessons';

export default function LessonPlayerScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { language, toggleCompleted } = useParent();
  const lesson = useMemo(() => lessons.find((item) => item.id === id) ?? lessons[0], [id]);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [quizOpen, setQuizOpen] = useState(false);
  const [choice, setChoice] = useState<number | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const hand = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (!playing) return;
    const loop = Animated.loop(Animated.sequence([
      Animated.timing(hand, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.timing(hand, { toValue: 0, duration: 700, useNativeDriver: true }),
    ]));
    loop.start();
    return () => loop.stop();
  }, [hand, playing]);
  useEffect(() => {
    if (!playing || quizOpen) return;
    const timer = setInterval(() => setProgress((value) => {
      if (value >= 100) {
        void Speech.stop();
        setPlaying(false);
        setQuizOpen(true);
        return 100;
      }
      return value + 5;
    }), 900);
    return () => clearInterval(timer);
  }, [playing, quizOpen]);
  const speak = () => {
    void Speech.stop();
    setPlaying(true);
    Speech.speak(`${lesson.title[language]}. ${lesson.narration[language]}`, {
      language: language === 'FR' ? 'fr-FR' : 'en-US',
      rate: 0.9,
      onDone: () => setPlaying(false),
      onStopped: () => setPlaying(false),
    });
  };
  const togglePlayback = () => {
    if (playing) {
      void Speech.stop();
      setPlaying(false);
      return;
    }
    if (progress >= 100) setProgress(0);
    speak();
  };
  const submitQuiz = () => { if (choice === null) return; const result = choice === lesson.quiz.answer ? 1 : 0; setScore(result); if (result) toggleCompleted(lesson.id); };
  return <ScrollView style={{ backgroundColor: colors.background }} contentContainerStyle={[styles.content, { paddingTop: insets.top + 12, paddingBottom: insets.bottom + 30 }]}>
    <Pressable onPress={() => router.back()} style={styles.back}><Feather name="arrow-left" size={20} color={colors.foreground} /><Text style={[styles.backText, { color: colors.foreground }]}>Back to lessons</Text></Pressable>
    <View style={[styles.video, { backgroundColor: colors.foreground }]}>
      <View style={styles.videoTop}><View style={styles.videoBadge}><Feather name="wifi-off" size={12} color={colors.primaryForeground} /><Text style={styles.videoBadgeText}>OFFLINE READY</Text></View><Text style={styles.videoTime}>{Math.round(progress)}%</Text></View>
      <View style={presenterStyles.presenter}><Image source={require('../../assets/images/ai-presenter.png')} style={presenterStyles.presenterImage} /><Animated.View style={[presenterStyles.gestureHand, { backgroundColor: colors.accent, transform: [{ translateY: hand.interpolate({ inputRange: [0, 1], outputRange: [0, -16] }) }, { rotate: hand.interpolate({ inputRange: [0, 1], outputRange: ['-20deg', '20deg'] }) }] }]} /><Animated.View style={[presenterStyles.gestureHand, presenterStyles.gestureHandRight, { backgroundColor: colors.accent, transform: [{ translateY: hand.interpolate({ inputRange: [0, 1], outputRange: [0, -11] }) }, { rotate: hand.interpolate({ inputRange: [0, 1], outputRange: ['20deg', '-20deg'] }) }] }]} /></View>
      <Text style={styles.signCaption}>{lesson.title[language]}</Text><Text style={styles.signSubcaption}>{playing ? 'AI presenter is signing with the voice' : 'AI presenter · captions on'}</Text>
      <Pressable testID="play-lesson" onPress={togglePlayback} style={styles.play}><Feather name={playing ? 'pause' : 'play'} size={20} color={colors.foreground} /><Text style={[styles.playText, { color: colors.foreground }]}>{playing ? 'Pause lesson' : 'Play with signing'}</Text></Pressable>
      <View style={styles.progressTrack}><View style={[styles.progressFill, { backgroundColor: colors.primary, width: `${progress}%` }]} /></View>
    </View>
    <View style={styles.titleRow}><View style={{ flex: 1 }}><Text style={[styles.title, { color: colors.foreground }]}>{lesson.title[language]}</Text><Text style={[styles.meta, { color: colors.mutedForeground }]}>{lesson.duration} · {lesson.age}</Text></View><Pressable testID="read-aloud" onPress={speak} style={[styles.audioButton, { backgroundColor: colors.secondary }]}><Feather name="volume-2" size={19} color={colors.primary} /><Text style={[styles.audioText, { color: colors.primary }]}>Read aloud</Text></Pressable></View>
    <Text style={[styles.body, { color: colors.mutedForeground }]}>{lesson.narration[language]}</Text>
    {quizOpen && <View style={[styles.quiz, { backgroundColor: colors.card, borderColor: colors.border }]}><View style={styles.quizHeading}><Feather name="check-circle" size={19} color={colors.primary} /><Text style={[styles.quizTitle, { color: colors.foreground }]}>Quick parent quiz</Text></View><Text style={[styles.question, { color: colors.foreground }]}>{lesson.quiz.question[language]}</Text>{lesson.quiz.options.map((option, index) => <Pressable key={option.EN} onPress={() => setChoice(index)} style={[styles.option, { borderColor: choice === index ? colors.primary : colors.border, backgroundColor: choice === index ? colors.secondary : colors.background }]}><Text style={[styles.optionText, { color: colors.foreground }]}>{option[language]}</Text>{choice === index && <Feather name="check" size={16} color={colors.primary} />}</Pressable>)}{score === null ? <Pressable testID="submit-quiz" onPress={submitQuiz} disabled={choice === null} style={[styles.submit, { backgroundColor: colors.primary, opacity: choice === null ? 0.45 : 1 }]}><Text style={styles.submitText}>Check answer</Text></Pressable> : <View style={[styles.result, { backgroundColor: score ? colors.secondary : colors.accent }]}><Feather name={score ? 'award' : 'refresh-cw'} size={18} color={colors.primary} /><Text style={[styles.resultText, { color: colors.foreground }]}>{score ? 'Well done — lesson completed.' : 'Not quite. Try again and listen for the key idea.'}</Text>{!score && <Pressable onPress={() => { setScore(null); setChoice(null); }}><Text style={[styles.tryAgain, { color: colors.primary }]}>Try again</Text></Pressable>}</View>}</View>}
  </ScrollView>;
}

const presenterStyles = StyleSheet.create({
  presenter: { height: 205, alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', borderRadius: 18 },
  presenterImage: { width: 205, height: 205, resizeMode: 'cover' },
  gestureHand: { width: 18, height: 52, borderRadius: 14, position: 'absolute', marginLeft: -74, top: 124, zIndex: 3 },
  gestureHandRight: { marginLeft: 74 },
});

const styles = StyleSheet.create({
  content: { paddingHorizontal: 20 }, back: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 }, backText: { fontFamily: 'Inter_600SemiBold', fontSize: 13 }, video: { borderRadius: 24, padding: 16, minHeight: 360 }, videoTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, videoBadge: { flexDirection: 'row', alignItems: 'center', gap: 5 }, videoBadgeText: { color: '#fffdf9', fontFamily: 'Inter_700Bold', fontSize: 9, letterSpacing: 1 }, videoTime: { color: '#f9d9c6', fontFamily: 'Inter_600SemiBold', fontSize: 12 }, cartoon: { height: 205, alignItems: 'center', justifyContent: 'center', position: 'relative' }, sun: { width: 112, height: 112, borderRadius: 56, position: 'absolute', top: 42, opacity: 0.85 }, head: { width: 86, height: 78, borderRadius: 42, zIndex: 2, alignItems: 'center', justifyContent: 'center' }, eyeRow: { flexDirection: 'row', gap: 22, marginTop: 4 }, eye: { width: 6, height: 8, borderRadius: 4, backgroundColor: '#17352d' }, smile: { width: 20, height: 9, borderBottomWidth: 2, borderColor: '#17352d', borderRadius: 12, marginTop: 8 }, cartoonBody: { width: 105, height: 84, borderTopLeftRadius: 48, borderTopRightRadius: 48, marginTop: -2, zIndex: 1 }, hand: { width: 25, height: 63, borderRadius: 15, position: 'absolute', marginLeft: -133, top: 118, zIndex: 3 }, handRight: { marginLeft: 133 }, signCaption: { color: '#fffdf9', fontFamily: 'Inter_700Bold', fontSize: 18, textAlign: 'center' }, signSubcaption: { color: '#f9d9c6', fontFamily: 'Inter_400Regular', fontSize: 11, textAlign: 'center', marginTop: 5 }, play: { marginTop: 15, height: 44, borderRadius: 13, backgroundColor: '#fffdf9', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }, playText: { fontFamily: 'Inter_600SemiBold', fontSize: 13 }, progressTrack: { height: 4, borderRadius: 2, backgroundColor: '#496259', marginTop: 14, overflow: 'hidden' }, progressFill: { height: 4, borderRadius: 2 }, titleRow: { flexDirection: 'row', alignItems: 'center', marginTop: 24, gap: 12 }, title: { fontFamily: 'Inter_700Bold', fontSize: 23, lineHeight: 28 }, meta: { fontFamily: 'Inter_400Regular', fontSize: 12, marginTop: 5 }, audioButton: { borderRadius: 12, paddingVertical: 9, paddingHorizontal: 10, alignItems: 'center', gap: 4 }, audioText: { fontFamily: 'Inter_600SemiBold', fontSize: 10 }, body: { fontFamily: 'Inter_400Regular', fontSize: 14, lineHeight: 22, marginTop: 15 }, quiz: { borderWidth: 1, borderRadius: 18, padding: 16, marginTop: 24 }, quizHeading: { flexDirection: 'row', gap: 8, alignItems: 'center' }, quizTitle: { fontFamily: 'Inter_700Bold', fontSize: 16 }, question: { fontFamily: 'Inter_600SemiBold', fontSize: 15, lineHeight: 21, marginTop: 17, marginBottom: 12 }, option: { borderWidth: 1, borderRadius: 12, padding: 13, marginBottom: 8, flexDirection: 'row', justifyContent: 'space-between' }, optionText: { flex: 1, fontFamily: 'Inter_400Regular', fontSize: 13, lineHeight: 18 }, submit: { height: 48, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginTop: 7 }, submitText: { color: '#fffdf9', fontFamily: 'Inter_600SemiBold', fontSize: 14 }, result: { borderRadius: 12, padding: 12, flexDirection: 'row', alignItems: 'center', gap: 8, flexWrap: 'wrap' }, resultText: { flex: 1, fontFamily: 'Inter_500Medium', fontSize: 12, lineHeight: 17 }, tryAgain: { fontFamily: 'Inter_700Bold', fontSize: 12, marginLeft: 26 },
});