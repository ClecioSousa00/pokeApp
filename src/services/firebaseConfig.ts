import AsyncStorage from '@react-native-async-storage/async-storage'
import { initializeApp } from 'firebase/app'
import { getReactNativePersistence, initializeAuth } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'

export const firebaseApp = initializeApp({
  apiKey: process.env.EXPO_PUBLIC_API_APIKEY,
  authDomain: process.env.EXPO_PUBLIC_API_AUTHDOMAIN,
  projectId: process.env.EXPO_PUBLIC_API_PROJECTID,
  storageBucket: process.env.EXPO_PUBLIC_API_STORAGEBUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_API_MESSAGINGSENDERID,
  appId: process.env.EXPO_PUBLIC_API_APPID,
})

export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage),
})

export const db = getFirestore(firebaseApp)

export const usersRef = collection(db, 'users')
