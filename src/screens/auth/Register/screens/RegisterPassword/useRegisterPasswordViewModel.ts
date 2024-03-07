import { useNavigation, useRoute } from '@react-navigation/native'
import { AuthRouteProps } from '../../../../../routes/auth.route'
import { PasswordSchema, PasswordSchemaType } from '../../schema/registerSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

type ParamsProps = {
  email: string
}

export const useRegisterPasswordViewModel = () => {
  const route = useRoute()
  const { email } = route.params as ParamsProps

  const navigation = useNavigation<AuthRouteProps>()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordSchemaType>({
    resolver: zodResolver(PasswordSchema),
  })

  const onSubmit = (data: PasswordSchemaType) => {
    console.log(data.password)
    navigation.navigate('registerUsername', { email, password: data.password })
  }

  return {
    control,
    errors,
    handleSubmit: handleSubmit(onSubmit),
  }
}
