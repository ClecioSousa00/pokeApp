import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { User } from 'firebase/auth'

type UserInfo = {
  username: string
  user: User
}

const setUserAccess = async ({ username, user }: UserInfo) => {
  await setDoc(doc(db, 'users', user.uid), {
    username,
    userId: user.uid,
  })
}

const getUserAccess = async (user: User) => {
  const docRef = doc(db, 'users', user.uid)
  const response = await getDoc(docRef)
  return response
}

export const UserAccess = {
  setUserAccess,
  getUserAccess,
}
