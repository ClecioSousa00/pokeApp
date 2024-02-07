import { Image } from 'react-native'
import { Box, Text } from '../../restyle'
import { Button } from '../../components/Button'

export const Onboarding = () => {
  return (
    <Box
      flex={1}
      bg="white"
      justifyContent="flex-end"
      alignItems="center"
      px="ml"
      pb="xl"
    >
      <Image source={require('../../assets/onboardImage.png')} alt="" />
      <Text variant="title" textAlign="center" mt="l" mb="sm">
        Todos os Pokémons em um só Lugar
      </Text>
      <Text variant="text" textAlign="center">
        Acesse uma vasta lista de Pokémon de todas as gerações já feitas pela
        Nintendo
      </Text>
      <Button name="vamos começar" marginTop="xl" />
    </Box>
  )
}
