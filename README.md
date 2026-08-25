# Parent+ Cameroon

A calm, offline-friendly parenting companion for families in Cameroon. The app includes age-matched parental lessons, child profiles, multilingual content, expert support requests, feedback, PPC course rewards, and an in-app personalized parental guide.

## Color palette

The interface uses a warm, accessible palette shared across the mobile experience:

| Token | Light | Dark |
| --- | --- | --- |
| Background | #FBF7F0 | #17231F |
| Foreground | #17352D | #F5EEE4 |
| Card | #FFFDF9 | #21312B |
| Primary | #D26A4B | #EF9270 |
| Secondary | #E3EFE7 | #2D443A |
| Muted | #F1E8DA | #293A33 |
| Accent | #F5D8BF | #604638 |
| Border | #E6DACB | #3A4E45 |

Theme selection is available during parent onboarding: System, Light, or Dark.

## Development

From the repository root:


```bash
pnpm install
pnpm --filter @workspace/parent-plus-cameroon dev

a```

The mobile app is in `artifacts/parent-plus-cameroon`. Set the Clerk and Expo variables used by the app before running it, especially `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` and `EXPO_PUBLIC_DOMAIN`.

## Export an Android APK with EAS

1. Install the Expo application services CLI and authenticate:

   ```bash
   npm install --global eas-cli
   eas login
   ```

2. Move into the mobile artifact and configure EAS once:

   ```bash
   cd artifacts/parent-plus-cameroon
   eas build:configure
   ```

3. Add an APK profile to `eas.json` (merge this with any existing profiles):

   ```json
   {
     "build": {
       "preview": {
         "distribution": "internal",
         "android": { "buildType": "apk" }
       },
       "production": {
         "android": { "buildType": "app-bundle" }
       }
     }
   }
   ```

4. Build the installable APK:

   ```bash
   eas build --platform android --profile preview
   ```

5. When the build completes, open the Expo build URL printed by EAS and download the `.apk` file. Install it on an Android device with:

   ```bash
   adb install path/to/parent-plus-cameroon.apk
   ```

For Google Play, use the production profile to create an Android App Bundle instead:

```bash
eas build --platform android --profile production
```

## Local release build (optional)

If you prefer to build locally and have Android Studio/SDK configured:

```bash
cd artifacts/parent-plus-cameroon
npx expo prebuild --platform android
cd android
./gradlew assembleRelease
```

The generated release APK is normally at `android/app/build/outputs/apk/release/app-release.apk`.
