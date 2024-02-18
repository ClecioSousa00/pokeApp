import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Button } from '../../../../components/Button'
import { ControlledInput } from '../../../../components/ControlledInput'
import { Box, Text } from '../../../../restyle'
import { Header } from '../../components/Header'
import { Screen } from '../../components/Screen'

export const RegisterEmail = () => {
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
            placeholder="E-mail"
            keyboardType="email-address"
          />
          <Box flex={1} justifyContent="flex-end">
            <Button variant="inactive">
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
