import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { useColors } from '@/hooks/useColors';
import { useParent } from '@/context/ParentContext';

const options = ['Communication', 'Education'];

export default function ObjectiveScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { objective, setObjective } = useParent();
  const [selected, setSelected] = useState<string>(objective ?? '');
  const [other, setOther] = useState<string>(objective && !options.includes(objective) ? objective : '');
  const [error, setError] = useState('');

  const currentValue = selected === 'Other' ? other.trim() : selected;

  const continueToApp = () => {
    const finalValue = selected === 'Other' ? other.trim() : selected;

    if (!finalValue) {
      setError('Please choose an option or tell us your goal.');
      return;
    }

    setObjective(finalValue);
    router.replace('/(tabs)');
  };

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + 24, paddingBottom: insets.bottom + 28 },
      ]}
    >
      <View style={styles.progress}>
        <View style={[styles.done, { backgroundColor: colors.primary }]} />
        <View style={[styles.done, { backgroundColor: colors.primary }]} />
        <View style={[styles.done, { backgroundColor: colors.primary }]} />
      </View>

      <Text style={[styles.kicker, { color: colors.primary }]}>LAST STEP</Text>
      <Text style={[styles.title, { color: colors.foreground }]}>
        What is your main objective for visiting our app?
      </Text>

      <View style={[styles.optionsWrap, { backgroundColor: colors.card, borderColor: colors.border }]}> 
        {options.map((option) => {
          const isSelected = selected === option;
          return (
            <Pressable
              key={option}
              onPress={() => {
                setSelected(option);
                setError('');
              }}
              style={[
                styles.option,
                {
                  borderColor: isSelected ? colors.primary : colors.border,
                  backgroundColor: isSelected ? colors.accent : colors.card,
                },
              ]}
            >
              <Text style={[styles.optionText, { color: colors.foreground }]}>{option}</Text>
              {isSelected ? (
                <Feather name="check-circle" size={18} color={colors.primary} />
              ) : null}
            </Pressable>
          );
        })}

        <Pressable
          onPress={() => {
            setSelected('Other');
            setError('');
          }}
          style={[
            styles.option,
            {
              borderColor: selected === 'Other' ? colors.primary : colors.border,
              backgroundColor: selected === 'Other' ? colors.accent : colors.card,
            },
          ]}
        >
          <Text style={[styles.optionText, { color: colors.foreground }]}>Other</Text>
          {selected === 'Other' ? (
            <Feather name="check-circle" size={18} color={colors.primary} />
          ) : null}
        </Pressable>

        {selected === 'Other' ? (
          <TextInput
            value={other}
            onChangeText={(value) => {
              setOther(value);
              setError('');
            }}
            placeholder="Tell us your objective"
            placeholderTextColor={colors.mutedForeground}
            style={[
              styles.input,
              {
                borderColor: colors.input,
                color: colors.foreground,
                backgroundColor: colors.background,
              },
            ]}
          />
        ) : null}
      </View>

      {error ? <Text style={[styles.error, { color: colors.destructive }]}>{error}</Text> : null}

      <Pressable
        onPress={continueToApp}
        style={[styles.button, { backgroundColor: colors.foreground }]}
      >
        <Text style={styles.buttonText}>Continue</Text>
        <Feather name="arrow-right" size={18} color="#fff" />
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: 24 },
  progress: { flexDirection: 'row', gap: 6, marginBottom: 28 },
  done: { height: 4, borderRadius: 3, flex: 1 },
  kicker: {
    fontFamily: 'Inter_700Bold',
    letterSpacing: 1.2,
    fontSize: 11,
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 30,
    lineHeight: 36,
    marginBottom: 18,
  },
  optionsWrap: {
    borderWidth: 1,
    borderRadius: 18,
    padding: 12,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 14,
    marginBottom: 10,
  },
  optionText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 13,
    fontFamily: 'Inter_400Regular',
    marginTop: 4,
  },
  error: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    marginTop: 12,
  },
  button: {
    height: 54,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    marginTop: 18,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 15,
  },
});
