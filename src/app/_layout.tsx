
import React, { useEffect, useState } from 'react';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  Stack,
} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    async function prepareApp() {
      await SplashScreen.hideAsync();
      setAppReady(true);
    }

    prepareApp();
  }, []);

  if (!appReady) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="cadastro" />
        <Stack.Screen name="home" />
      </Stack>
    </ThemeProvider>
  );
}
