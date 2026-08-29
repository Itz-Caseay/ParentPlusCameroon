import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useColors } from "@/hooks/useColors";
import { Language, useParent } from "@/context/ParentContext";
import { useClerk, useUser } from "@clerk/expo";
import { router } from "expo-router";
import type { Href } from "expo-router";

export default function ProfileScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { language, setLanguage, childAge, setChildAge, children } = useParent();
  const { signOut } = useClerk();
  const { user } = useUser();
  const ages = ["0–2 years", "3–5 years", "6–9 years", "10–14 years", "15–18 years"];
  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={[styles.content, { paddingTop: insets.top + 22 }]}
    >
      <Text style={[styles.kicker, { color: colors.primary }]}>YOUR SPACE</Text>
      <Text style={[styles.title, { color: colors.foreground }]}>
        Profile & settings
      </Text>
      <View style={[styles.profileCard, { backgroundColor: colors.secondary }]}>
        <View style={[styles.bigAvatar, { backgroundColor: colors.primary }]}>
          <Text style={styles.bigAvatarText}>
            {(user?.firstName?.[0] ?? "P").toUpperCase()}
          </Text>
        </View>
        <View>
          <Text style={[styles.profileName, { color: colors.foreground }]}>
            {user?.firstName ||
              user?.emailAddresses?.[0]?.emailAddress ||
              "Parent"}
          </Text>
          <Text style={[styles.profileMeta, { color: colors.mutedForeground }]}>
            Cameroon · pilot participant
          </Text>
        </View>
      </View>
      <Text style={[styles.section, { color: colors.foreground }]}>
        Your children
      </Text>
      <View
        style={[
          styles.childrenWrap,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
      >
        {children.length ? (
          children.map((child, index) => (
            <View
              key={`${child.name}-${index}`}
              style={[
                styles.childRow,
                {
                  borderBottomColor:
                    index === children.length - 1 ? 'transparent' : colors.border,
                },
              ]}
            >
              <View style={[styles.childBadge, { backgroundColor: colors.secondary }]}>
                <Feather name="user" size={16} color={colors.primary} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.childName, { color: colors.foreground }]}>
                  {child.name}
                </Text>
                <Text style={[styles.childMeta, { color: colors.mutedForeground }]}>
                  {child.age} · {child.sex}
                </Text>
              </View>
              <Text
                style={[
                  styles.childAgePill,
                  {
                    backgroundColor: colors.accent,
                    color: colors.accentForeground,
                  },
                ]}
              >
                {child.educationLevel}
              </Text>
            </View>
          ))
        ) : (
          <Text style={[styles.emptyChildren, { color: colors.mutedForeground }]}>
            No children added yet.
          </Text>
        )}
      </View>
      <Text style={[styles.section, { color: colors.foreground }]}>
        Language / Langue
      </Text>
      <View
        style={[
          styles.languageRow,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
      >
        {(["EN", "FR"] as Language[]).map((item) => (
          <Pressable
            key={item}
            testID={`language-${item}`}
            onPress={() => setLanguage(item)}
            style={[
              styles.languageButton,
              {
                backgroundColor:
                  language === item ? colors.primary : colors.background,
              },
            ]}
          >
            <Text
              style={[
                styles.languageText,
                {
                  color:
                    language === item
                      ? colors.primaryForeground
                      : colors.mutedForeground,
                },
              ]}
            >
              {item === "EN" ? "English" : "Français"}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={[styles.section, { color: colors.foreground }]}>
        Child age group
      </Text>
      {ages.map((age) => (
        <Pressable
          key={age}
          onPress={() => setChildAge(age)}
          style={[
            styles.option,
            {
              backgroundColor: colors.card,
              borderColor: childAge === age ? colors.primary : colors.border,
            },
          ]}
        >
          <Text style={[styles.optionText, { color: colors.foreground }]}>
            {age}
          </Text>
          {childAge === age && (
            <Feather name="check-circle" size={19} color={colors.primary} />
          )}
        </Pressable>
      ))}
      <Pressable
        onPress={() => router.push("/children" as Href)}
        style={[styles.addChildButton, { backgroundColor: colors.primary }]}
      >
        <Feather name="user-plus" size={18} color={colors.primaryForeground} />
        <Text style={[styles.addChildButtonText, { color: colors.primaryForeground }]}>
          Add child profile
        </Text>
      </Pressable>
      <View style={[styles.note, { backgroundColor: colors.accent }]}>
        <Feather name="lock" size={16} color={colors.primary} />
        <Text style={[styles.noteText, { color: colors.accentForeground }]}>
          We only use your preferences to make learning more relevant. Your
          information stays private.
        </Text>
      </View>
      <Pressable
        testID="logout-button"
        onPress={() => signOut(() => router.replace("/(auth)/sign-in" as Href))}
        style={[styles.logout, { borderColor: colors.border }]}
      >
        <Feather name="log-out" size={17} color={colors.destructive} />
        <Text style={[styles.logoutText, { color: colors.destructive }]}>
          Log out
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: 20, paddingBottom: 110 },
  kicker: {
    fontFamily: "Inter_700Bold",
    letterSpacing: 1.2,
    fontSize: 11,
    marginBottom: 8,
  },
  title: { fontFamily: "Inter_700Bold", fontSize: 29, marginBottom: 22 },
  profileCard: {
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  bigAvatar: {
    width: 53,
    height: 53,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
  },
  bigAvatarText: {
    color: "#fffdf9",
    fontFamily: "Inter_700Bold",
    fontSize: 21,
  },
  profileName: { fontFamily: "Inter_700Bold", fontSize: 16, marginBottom: 4 },
  profileMeta: { fontFamily: "Inter_400Regular", fontSize: 12 },
  section: {
    fontFamily: "Inter_700Bold",
    fontSize: 17,
    marginTop: 28,
    marginBottom: 11,
  },
  languageRow: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 4,
    flexDirection: "row",
    gap: 5,
  },
  languageButton: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  languageText: { fontFamily: "Inter_600SemiBold", fontSize: 13 },
  childrenWrap: {
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 12,
  },
  childRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  childBadge: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  childName: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
    marginBottom: 3,
  },
  childMeta: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
  },
  childAgePill: {
    overflow: "hidden",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 5,
    fontFamily: "Inter_600SemiBold",
    fontSize: 10,
  },
  emptyChildren: {
    fontFamily: "Inter_500Medium",
    fontSize: 13,
    paddingVertical: 12,
  },
  option: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 15,
    marginBottom: 9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionText: { fontFamily: "Inter_500Medium", fontSize: 14 },
  addChildButton: {
    height: 52,
    borderRadius: 14,
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  addChildButtonText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
  },
  note: {
    borderRadius: 14,
    marginTop: 17,
    padding: 14,
    flexDirection: "row",
    gap: 10,
  },
  noteText: {
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    lineHeight: 18,
  },
  logout: {
    height: 50,
    borderRadius: 14,
    borderWidth: 1,
    marginTop: 26,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  logoutText: { fontFamily: "Inter_600SemiBold", fontSize: 14 },
});
