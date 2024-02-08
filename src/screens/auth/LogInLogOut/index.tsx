import { Image, TouchableOpacity } from 'react-native'
import { Box, Text } from '../../../restyle'
import { Button } from '../../../components/Button'
import { Screen } from '../components/Screen'
import { Feather } from '@expo/vector-icons'

export const LogInLogOut = () => {
  return (
    <Screen>
      <TouchableOpacity>
        <Box flexDirection="row" gap="xs" justifyContent="flex-end">
          <Text variant="headerTitle"> Pular</Text>
          <Feather name="arrow-right" size={24} color="black" />
        </Box>
      </TouchableOpacity>
      <Box justifyContent="flex-end" alignItems="center" flex={1}>
        <Image source={require('../../../assets/imgLogin.png')} alt="" />
        <Text variant="title" textAlign="center" mt="l" mb="sm">
          Está pronto para essa aventura?
        </Text>
        <Text variant="text" textAlign="center">
          Basta criar uma conta e começar a explorar o mundo dos Pokémon hoje!
        </Text>
        <Button
          name="criar conta"
          marginTop="xl"
          marginBottom="m"
          variant="primary"
        />

        <TouchableOpacity activeOpacity={0.7}>
          <Text variant="buttonTransparentText">Já tenho uma conta</Text>
        </TouchableOpacity>
      </Box>
    </Screen>
  )
}
