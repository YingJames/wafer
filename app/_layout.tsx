import '~/global.css';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { NAV_THEME } from '~/lib/constants';
import { useColorScheme } from '~/lib/useColorScheme';
import { PortalHost } from '@rn-primitives/portal';
import { ThemeToggle } from '~/components/ThemeToggle';
import { setAndroidNavigationBar } from '~/lib/android-navigation-bar';
import { Cabin_400Regular, Cabin_700Bold, useFonts } from '@expo-google-fonts/cabin';
import * as SplashScreen from 'expo-splash-screen';
import { TextClassContext } from '~/components/ui/text';

const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    Cabin_400Regular,
    Cabin_700Bold,
  });

  useEffect(() => {
    const initializeApp = async () => {
      console.log('Fonts Loaded:', fontsLoaded);
      console.log('Error Loading Fonts:', error);

      // Check if fonts are loaded
      if (!fontsLoaded) return; // Wait until fonts are loaded

      try {
        // Handle color scheme
        const theme = await AsyncStorage.getItem('theme');
        console.log('Stored Theme:', theme);

        if (Platform.OS === 'web') {
          // Adds the background color to the html element to prevent white background on overscroll.
          document.documentElement.classList.add('bg-background');
        }

        if (!theme) {
          await AsyncStorage.setItem('theme', colorScheme);
          setColorScheme(colorScheme);
        } else {
          // ONLY LIGHT MODE
          const colorTheme = theme === 'dark' ? 'light' : 'light';
          if (colorTheme !== colorScheme) {
            setColorScheme(colorTheme);
          }
        }

        setIsColorSchemeLoaded(true);
        await SplashScreen.hideAsync(); // Hide splash screen after fonts and theme are set
      } catch (err) {
        console.error('Error initializing app:', err);
      }
    };

    initializeApp();
  }, [fontsLoaded, colorScheme]); // Run effect when fontsLoaded or colorScheme changes

  if (!fontsLoaded || !isColorSchemeLoaded) {
    return null; // or a loading screen
  }

  if (!isColorSchemeLoaded) {
    return null;
  }

  return (
    <TextClassContext.Provider value="font-cabin-regular">
      <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
        <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
        <Stack screenOptions={{headerShown: false}}>
          <Stack.Screen name='index'/>
          <Stack.Screen name='signup'/>
        </Stack>
        <PortalHost />
      </ThemeProvider>
    </TextClassContext.Provider>
  );
}
