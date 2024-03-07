import { useNavigation } from '@react-navigation/native'
import { AuthRouteProps } from '../../../../../routes/auth.route'
import { useForm } from 'react-hook-form'
import { EmailSchema, EmailSchemaType } from '../../schema/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export const useRegisterEmailViewModel = () => {
  const navigation = useNavigation<AuthRouteProps>()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailSchemaType>({
    resolver: zodResolver(EmailSchema),
  })

  const onSubmit = (data: EmailSchemaType) => {
    navigation.navigate('registerPassword', { email: data.email })
  }
  return {
    control,
    errors,
    handleSubmit: handleSubmit(onSubmit),
  }
}
