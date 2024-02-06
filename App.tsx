import React from 'react'

import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins'

import { ThemeProvider } from '@shopify/restyle'

import { theme } from './src/theme'
import { Routes } from './src/routes'
import { Box } from './src/restyle'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  })

  if (!fontsLoaded) return null

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Box flex={1} justifyContent="center" alignItems="center" bg="primary">
        <Routes />
      </Box>
    </ThemeProvider>
  )
}
