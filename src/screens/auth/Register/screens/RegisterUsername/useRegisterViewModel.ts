import { useRoute } from '@react-navigation/native'
import { UserData } from './model'
import { useForm } from 'react-hook-form'
import { UsernameSchema, UsernameSchemaType } from '../../schema/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../../../../services/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'
import { registerUser } from '../../../../../services/actions/userActions'

export const useRegisterViewModel = () => {
  const route = useRoute()
  const { email, password } = route.params as UserData

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UsernameSchemaType>({
    resolver: zodResolver(UsernameSchema),
  })

  const onSubmit = async (data: UsernameSchemaType) => {
    const registerUserResponse = await registerUser(
      email,
      password,
      data.username,
    )

    if (!registerUserResponse.success) {
      const errorCode = registerUserResponse.error.code
      const errorMessage = registerUserResponse.error.message
      console.log(errorCode)
      console.log('---------------------------------')
      console.log(errorMessage)
    }

    // console.log(data.username, email, password)
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then(async (userCredential) => {
    //     // Signed up
    //     const user = userCredential.user
    //     await setDoc(doc(db, 'users', user.uid), {
    //       username: data.username,
    //       userId: user.uid,
    //     })
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code
    //     const errorMessage = error.message
    //     // ..
    //   })
  }

  return {
    control,
    errors,
    handleSubmit: handleSubmit(onSubmit),
  }
}
