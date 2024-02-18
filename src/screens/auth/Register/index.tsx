import { Image } from 'react-native'
import { Box, Text } from '../../../restyle'
import { Header } from '../components/Header'
import { Screen } from '../components/Screen'
import { Button } from '../../../components/Button'
import GoogleIcon from '../../../assets/googleIcon.svg'
import { useNavigation } from '@react-navigation/native'
import { AuthRouteProps } from '../../../routes/auth.route'

export const Register = () => {
  const navigation = useNavigation<AuthRouteProps>()

  return (
    <Screen>
      <Header name="entrar" />
      <Box justifyContent="flex-end" alignItems="center" flex={1}>
        <Image source={require('../../../assets/imgRegister.png')} alt="" />
        <Text variant="title" textAlign="center" mt="l" mb="sm">
          Falta pouco para explorar esse mundo!
        </Text>
        <Text variant="text" textAlign="center">
          Como deseja se conectar?
        </Text>
        <Button
          onPress={() => navigation.navigate('registerEmail')}
          variant="primary"
          marginTop="xl"
        >
          <Text variant="buttonText">Continuar com um e-mail</Text>
        </Button>
        <Button variant="outline" marginTop="sm">
          <Box flexDirection="row" gap="xs">
            <GoogleIcon />
            <Text variant="buttonText" color="inactiveSecondary">
              Continuar com google
            </Text>
          </Box>
        </Button>
      </Box>
    </Screen>
  )
}
