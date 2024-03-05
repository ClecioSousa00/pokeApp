import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Header } from '../../../components/Header'
import { Screen } from '../../../components/Screen'
import { Box, Text } from '../../../../../restyle'
import { ControlledInput } from '../../../../../components/ControlledInput'
import { Button } from '../../../../../components/Button'
import { InputMessage } from '../../../../../components/InputMessage'
import { useRegisterViewModel } from './useRegisterViewModel'

export const RegisterUsername = () => {
  const { control, errors, handleSubmit } = useRegisterViewModel()

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
            <Button variant="primary" onPress={handleSubmit}>
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
