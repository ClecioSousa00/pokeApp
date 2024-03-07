import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Button } from '../../../../../components/Button'
import { ControlledInput } from '../../../../../components/ControlledInput'
import { Box, Text } from '../../../../../restyle'
import { Header } from '../../../components/Header'
import { Screen } from '../../../components/Screen'

import { InputMessage } from '../../../../../components/InputMessage'
import { useRegisterEmailViewModel } from './useRegisterEmailViewModel'

export const RegisterEmail = () => {
  const { control, errors, handleSubmit } = useRegisterEmailViewModel()

  return (
    <Screen>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Box flex={1}>
          <Header name="criar conta" />
          <Box mt="xl" alignItems="center">
            <Text variant="subtitle">vamos começar!</Text>
            <Text variant="title">Qual é o seu e-mail?</Text>
          </Box>
          <ControlledInput
            marginTop="ml"
            name="email"
            control={control}
            placeholder="E-mail"
            keyboardType="email-address"
          />
          <InputMessage
            errorMessage={errors.email?.message}
            inputMessage="Informe o seu e-mail."
          />

          <Box flex={1} justifyContent="flex-end">
            <Button variant={'primary'} onPress={handleSubmit}>
              <Text variant={'buttonText'} textTransform="capitalize">
                continuar
              </Text>
            </Button>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    </Screen>
  )
}
