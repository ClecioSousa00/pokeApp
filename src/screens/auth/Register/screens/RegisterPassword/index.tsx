import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'

import { Button } from '../../../../../components/Button'
import { ControlledInput } from '../../../../../components/ControlledInput'
import { Box, Text } from '../../../../../restyle'
import { Header } from '../../../components/Header'
import { Screen } from '../../../components/Screen'
import { ThemeProps } from '../../../../../theme'

import { InputMessage } from '../../../../../components/InputMessage'
import { useRegisterPasswordViewModel } from './useRegisterPasswordViewModel'

export const RegisterPassword = () => {
  const { control, errors, handleSubmit } = useRegisterPasswordViewModel()
  const theme = useTheme<ThemeProps>()
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
