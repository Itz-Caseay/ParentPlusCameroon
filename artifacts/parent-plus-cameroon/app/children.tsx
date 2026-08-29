import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useColors } from "@/hooks/useColors";
import { useParent } from "@/context/ParentContext";
type Child = { name: string; age: string; sex: string; educationLevel: string };

export default function ChildrenSetupScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { saveChildren, children: existingChildren } = useParent();
  const [children, setChildren] = useState<Child[]>(existingChildren);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [level, setLevel] = useState("");
  const [error, setError] = useState("");
  const ageNumber = Number(age.trim());
  const isAgeValid = age.trim() !== "" && Number.isInteger(ageNumber) && ageNumber >= 0 && ageNumber <= 18;
  const isFormReady = !!name.trim() && !!age.trim() && !!sex && !!level && isAgeValid;

  const addChild = () => {
    if (!name.trim() || !age.trim() || !sex || !level) {
      setError("Complete every child detail before adding.");
      return;
    }

    const parsedAge = Number(age.trim());
    if (!Number.isInteger(parsedAge) || parsedAge < 0) {
      setError("Age must be a whole number between 0 and 18 years.");
      return;
    }

    if (parsedAge > 18) {
      setError("This child is old enough to take certain decisions.");
      return;
    }

    setChildren((current) => [
      ...current,
      { name: name.trim(), age: `${parsedAge} years`, sex, educationLevel: level },
    ]);
    setName("");
    setAge("");
    setSex("");
    setLevel("");
    setError("");
  };
  const finish = () => {
    const allChildren = [...existingChildren, ...children].filter(
      (child, index, list) =>
        index === list.findIndex((item) => item.name === child.name && item.age === child.age && item.sex === child.sex && item.educationLevel === child.educationLevel),
    );
    if (!allChildren.length) {
      setError("Add at least one child to continue.");
      return;
    }
    saveChildren(allChildren);
    router.replace("/objective");
  };
  const Choice = ({
    label,
    selected,
    onPress,
  }: {
    label: string;
    selected: boolean;
    onPress: () => void;
  }) => (
    <Pressable
      onPress={onPress}
      style={[
        styles.chip,
        {
          borderColor: selected ? colors.primary : colors.border,
          backgroundColor: selected ? colors.accent : colors.card,
        },
      ]}
    >
      <Text style={[styles.chipText, { color: colors.foreground }]}>
        {label}
      </Text>
    </Pressable>
  );
  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + 24, paddingBottom: insets.bottom + 28 },
      ]}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.progress}>
        <View style={[styles.done, { backgroundColor: colors.primary }]} />
        <View style={[styles.done, { backgroundColor: colors.primary }]} />
        <View style={[styles.done, { backgroundColor: colors.primary }]} />
      </View>
      <Text style={[styles.kicker, { color: colors.primary }]}>
        STEP 3 OF 3
      </Text>
      <Text style={[styles.title, { color: colors.foreground }]}>
        Who are we learning for?
      </Text>
      <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
        Add your child or children so we can tailor their learning journey.
      </Text>
      {children.map((child, index) => (
        <View
          key={child.name + index}
          style={[
            styles.childCard,
            { backgroundColor: colors.card, borderColor: colors.border },
          ]}
        >
          <View style={styles.cardTop}>
            <View
              style={[styles.childIcon, { backgroundColor: colors.secondary }]}
            >
              <Feather name="user" size={17} color={colors.primary} />
            </View>
            <Text style={[styles.childName, { color: colors.foreground }]}>
              {child.name}
            </Text>
            <Text style={[styles.age, { color: colors.mutedForeground }]}>
              {child.age}
            </Text>
          </View>
          <Text style={[styles.detail, { color: colors.mutedForeground }]}>
            {child.sex} · {child.educationLevel}
          </Text>
        </View>
      ))}
      <View
        style={[
          styles.formCard,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
      >
        <Text style={[styles.formTitle, { color: colors.foreground }]}>
          {children.length ? "Add another child" : "Add your first child"}
        </Text>
        <TextInput
          style={[
            styles.input,
            { borderColor: colors.input, color: colors.foreground },
          ]}
          value={name}
          onChangeText={setName}
          placeholder="Child's name"
          placeholderTextColor={colors.mutedForeground}
        />
        <TextInput
          style={[
            styles.input,
            { borderColor: colors.input, color: colors.foreground },
          ]}
          value={age}
          onChangeText={(value) => {
            const numeric = value.replace(/[^0-9]/g, '');
            setAge(numeric);
          }}
          placeholder="Age (0-18)"
          keyboardType="number-pad"
          maxLength={2}
          placeholderTextColor={colors.mutedForeground}
        />
        <Text style={[styles.label, { color: colors.foreground }]}>Sex</Text>
        <View style={styles.row}>
          <Choice
            label="Girl"
            selected={sex === "Girl"}
            onPress={() => setSex("Girl")}
          />
          <Choice
            label="Boy"
            selected={sex === "Boy"}
            onPress={() => setSex("Boy")}
          />
        </View>
        <Text style={[styles.label, { color: colors.foreground }]}>
          Level of education
        </Text>
        <View style={styles.wrap}>
          <Choice
            label="Nursery"
            selected={level === "Nursery"}
            onPress={() => setLevel("Nursery")}
          />
          <Choice
            label="Primary"
            selected={level === "Primary"}
            onPress={() => setLevel("Primary")}
          />
          <Choice
            label="Secondary"
            selected={level === "Secondary"}
            onPress={() => setLevel("Secondary")}
          />
        </View>
        <Pressable
          onPress={addChild}
          style={[
            styles.addButton,
            {
              borderColor: '#f4b39a',
              backgroundColor: isFormReady ? '#f4b39a' : '#fff',
            },
          ]}
        >
          <Feather
            name="plus"
            size={17}
            color={isFormReady ? '#fff' : '#f4b39a'}
          />
          <Text
            style={[
              styles.addText,
              { color: isFormReady ? '#fff' : '#f4b39a' },
            ]}
          >
            Add child
          </Text>
        </Pressable>
      </View>
      {error ? (
        <Text style={[styles.error, { color: colors.destructive }]}>
          {error}
        </Text>
      ) : null}
      <Pressable
        onPress={finish}
        style={[styles.button, { backgroundColor: colors.foreground }]}
      >
        <Text style={styles.buttonText}>Save and finish</Text>
        <Feather name="check" size={18} color="#fff" />
      </Pressable>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  content: { paddingHorizontal: 24 },
  progress: { flexDirection: "row", gap: 6, marginBottom: 28 },
  done: { height: 4, borderRadius: 3, flex: 1 },
  kicker: {
    fontFamily: "Inter_700Bold",
    letterSpacing: 1.2,
    fontSize: 11,
    marginBottom: 8,
  },
  title: { fontFamily: "Inter_700Bold", fontSize: 30 },
  subtitle: {
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
    marginBottom: 20,
  },
  childCard: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
  },
  cardTop: { flexDirection: "row", alignItems: "center", gap: 9 },
  childIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  childName: { fontFamily: "Inter_600SemiBold", fontSize: 14, flex: 1 },
  age: { fontFamily: "Inter_400Regular", fontSize: 12 },
  detail: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    marginTop: 8,
    marginLeft: 41,
  },
  formCard: { borderWidth: 1, borderRadius: 16, padding: 15, marginTop: 4 },
  formTitle: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
    marginBottom: 13,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 13,
    fontFamily: "Inter_400Regular",
    marginBottom: 10,
  },
  label: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    marginBottom: 8,
    marginTop: 3,
  },
  row: { flexDirection: "row", gap: 8 },
  wrap: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: {
    minHeight: 42,
    borderWidth: 1,
    borderRadius: 11,
    paddingHorizontal: 13,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  chipText: { fontFamily: "Inter_500Medium", fontSize: 12 },
  addButton: {
    height: 46,
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: 16,
  },
  addText: { fontFamily: "Inter_600SemiBold", fontSize: 13 },
  error: { fontFamily: "Inter_500Medium", fontSize: 12, marginTop: 12 },
  button: {
    height: 54,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    marginTop: 18,
  },
  buttonText: { color: "#fff", fontFamily: "Inter_600SemiBold", fontSize: 15 },
});
