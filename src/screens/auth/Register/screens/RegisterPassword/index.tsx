import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Button } from '../../../../../components/Button'
import { ControlledInput } from '../../../../../components/ControlledInput'
import { Box, Text } from '../../../../../restyle'
import { Header } from '../../../components/Header'
import { Screen } from '../../../components/Screen'
import { Feather } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import { ThemeProps } from '../../../../../theme'
import { useNavigation } from '@react-navigation/native'
import { AuthRouteProps } from '../../../../../routes/auth.route'
import { useForm } from 'react-hook-form'
import { PasswordSchema, PasswordSchemaType } from '../../schema/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputMessage } from '../../../../../components/InputMessage'

export const RegisterPassword = () => {
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
    navigation.navigate('registerUsername')
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

          {/* {errors.password?.message && (
            <Text variant="messageInputErrorText" textAlign="center" mt="s">
              {errors.password?.message}
            </Text>
          )}
          {!errors.password?.message && (
            <Text variant="messageInputText" textAlign="center" mt="s">
              Informe uma senha.
            </Text>
          )} */}
          <Box flex={1} justifyContent="flex-end">
            <Button variant="inactive" onPress={handleSubmit(onSubmit)}>
              <Text variant="buttonInactiveText" textTransform="capitalize">
                continuar
              </Text>
            </Button>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    </Screen>
  )
}
