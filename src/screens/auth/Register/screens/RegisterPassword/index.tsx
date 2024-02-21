import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Button } from '../../../../../components/Button'
import { ControlledInput } from '../../../../../components/ControlledInput'
import { Box, Text } from '../../../../../restyle'
import { Header } from '../../../components/Header'
import { Screen } from '../../../components/Screen'
import { Feather } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import { ThemeProps } from '../../../../../theme'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AuthRouteProps } from '../../../../../routes/auth.route'
import { useForm } from 'react-hook-form'
import { PasswordSchema, PasswordSchemaType } from '../../schema/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputMessage } from '../../../../../components/InputMessage'

type ParamsProps = {
  email: string
}

export const RegisterPassword = () => {
  const route = useRoute()
  const { email } = route.params as ParamsProps

  const theme = useTheme<ThemeProps>()
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

  return (
    <Screen>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Box flex={1}>
          <Header name="criar conta" />
          <Box mt="xl" alignItems="center">
            <Text variant="subtitle">agora</Text>
            <Text variant="title">Crie uma senha</Text>
          </Box>
          <ControlledInput
            marginTop="ml"
            variant="inputIcon"
            name="password"
            control={control}
            placeholder="Senha"
            secureTextEntry={true}
          >
            <Feather name="eye" size={20} color={theme.colors.inactive} />
          </ControlledInput>

          <InputMessage
            errorMessage={errors.password?.message}
            inputMessage="Informe sua senha."
          />

          <Box flex={1} justifyContent="flex-end">
            <Button variant="primary" onPress={handleSubmit(onSubmit)}>
              <Text variant="buttonText" textTransform="capitalize">
                continuar
              </Text>
            </Button>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    </Screen>
  )
}
