import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Header } from '../../../components/Header'
import { Screen } from '../../../components/Screen'
import { Box, Text } from '../../../../../restyle'
import { ControlledInput } from '../../../../../components/ControlledInput'
import { Button } from '../../../../../components/Button'
import { useForm } from 'react-hook-form'
import { UsernameSchema, UsernameSchemaType } from '../../schema/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputMessage } from '../../../../../components/InputMessage'
import { useRoute } from '@react-navigation/native'

type ParamsProps = {
  email: string
  password: string
}

export const RegisterUsername = () => {
  const route = useRoute()
  const { email, password } = route.params as ParamsProps

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UsernameSchemaType>({
    resolver: zodResolver(UsernameSchema),
  })

  const onSubmit = (data: UsernameSchemaType) => {
    console.log(data.username, email, password)
  }

  return (
    <Screen>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Box flex={1}>
          <Header name="criar conta" />
          <Box mt="xl" alignItems="center">
            <Text variant="subtitle">pra finalizar</Text>
            <Text variant="title">Qual é seu nome?</Text>
          </Box>
          <ControlledInput
            marginTop="ml"
            name="username"
            control={control}
            placeholder="Nome"
          />
          <InputMessage
            errorMessage={errors.username?.message}
            inputMessage="Esse será seu nome de usuário no aplicativo."
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
