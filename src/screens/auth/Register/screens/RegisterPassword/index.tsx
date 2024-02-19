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

export const RegisterPassword = () => {
  const theme = useTheme<ThemeProps>()
  const navigation = useNavigation<AuthRouteProps>()
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
            variant="inputIcon"
            marginTop="ml"
            placeholder="Senha"
            secureTextEntry={true}
          >
            <Feather name="eye" size={20} color={theme.colors.inactive} />
          </ControlledInput>
          <Box flex={1} justifyContent="flex-end">
            <Button
              variant="inactive"
              onPress={() => navigation.navigate('registerUsername')}
            >
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
