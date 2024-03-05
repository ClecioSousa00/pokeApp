import { useForm } from 'react-hook-form'
import { useRoute } from '@react-navigation/native'
import { zodResolver } from '@hookform/resolvers/zod'

import { UserData } from './model'
import { UsernameSchema, UsernameSchemaType } from '../../schema/registerSchema'
import { UserService } from '../../../../../services/actions/userActions'
import { FirebaseErrors } from '../../../../../services/firebaseErrorMensages'
import { Alert } from 'react-native'

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
    const registerUserResponse = await UserService.registerUser({
      email,
      password,
      username: data.username,
    })

    if (!registerUserResponse.success) {
      const errorCode = registerUserResponse.error.code
      Alert.alert(
        'Oops',
        `Não foi possível efetuar o login: ${FirebaseErrors[errorCode]}`,
      )
    }
  }

  return {
    control,
    errors,
    handleSubmit: handleSubmit(onSubmit),
  }
}
