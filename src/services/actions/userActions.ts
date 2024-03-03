// firebaseAuth.ts
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../../services/firebaseConfig'

export const registerUser = async (
  email: string,
  password: string,
  username: string,
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )
    const user = userCredential.user
    await setDoc(doc(db, 'users', user.uid), {
      username,
      userId: user.uid,
    })
    return { success: true, user }
  } catch (error) {
    return { success: false, error }
  }
}
