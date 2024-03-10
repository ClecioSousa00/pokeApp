// firebaseAuth.ts
import { User, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/firebaseConfig'
import { RegisterUserProps, UserType } from '../types'
import { UserAccess } from '../dataAccess/userAccess'

export const registerUserAction = async ({
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

const getUserAction = async (user: User) => {
  try {
    const doc = await UserAccess.getUserAccess(user)
    if (doc.exists()) {
      const data = doc.data() as UserType

      return data
    }
    console.log('No such document!')
  } catch (error) {
    console.log('ERRO ao pegar o usuário', error)
  }
}

export const UserService = {
  registerUserAction,
  getUserAction,
}
