import { TouchableOpacity } from 'react-native'
import { Box, Text } from '../../../../restyle'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

type HeaderProps = {
  name: string
}

export const Header = ({ name }: HeaderProps) => {
  const navigation = useNavigation()
  return (
    <Box flexDirection="row" justifyContent="center">
      <Box position="absolute" left={0}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
      </Box>
      <Text textTransform="capitalize" variant="headerTitle">
        {name}
      </Text>
    </Box>
  )
}
