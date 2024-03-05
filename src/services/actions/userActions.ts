// firebaseAuth.ts
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/firebaseConfig'
import { RegisterUserProps } from '../types'
import { UserAccess } from '../dataAccess/userAccess'

export const registerUser = async ({
  email,
  password,
  username,
}: RegisterUserProps) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )
    const user = userCredential.user
    await UserAccess.setUserAccess({ username, user })

    return { success: true, user }
  } catch (error) {
    return { success: false, error }
  }
}

export const UserService = {
  registerUser,
}
