import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Header } from '../../../components/Header'
import { Screen } from '../../../components/Screen'
import { Box, Text } from '../../../../../restyle'
import { ControlledInput } from '../../../../../components/ControlledInput'
import { Button } from '../../../../../components/Button'

export const RegisterUsername = () => {
  return (
    <Screen>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Box flex={1}>
          <Header name="criar conta" />
          <Box mt="xl" alignItems="center">
            <Text variant="subtitle">pra finalizar</Text>
            <Text variant="title">Qual é seu nome?</Text>
          </Box>
          <ControlledInput marginTop="ml" placeholder="Nome" />

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
