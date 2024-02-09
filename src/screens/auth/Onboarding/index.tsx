import { Image } from 'react-native'
import { Box, Text } from '../../../restyle'
import { Button } from '../../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthRouteProps } from '../../../routes/auth.route'
import { Screen } from '../components/Screen'

export const Onboarding = () => {
  const navigation = useNavigation<AuthRouteProps>()

  return (
    <Screen>
      <Box justifyContent="flex-end" alignItems="center" flex={1}>
        <Image source={require('../../../assets/onboardImage.png')} alt="" />
        <Text variant="title" textAlign="center" mt="l" mb="sm">
          Todos os Pokémons em um só Lugar
        </Text>
        <Text variant="text" textAlign="center">
          Acesse uma vasta lista de Pokémon de todas as gerações já feitas pela
          Nintendo
        </Text>
        <Button
          variant="primary"
          onPress={() => navigation.navigate('logInSignUp')}
          marginTop="xl"
        >
          <Text variant="buttonText">Vamos começar</Text>
        </Button>
      </Box>
    </Screen>
  )
}
