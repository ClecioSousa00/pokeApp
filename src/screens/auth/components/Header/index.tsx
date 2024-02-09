import { TouchableOpacity } from 'react-native'
import { Box, Text } from '../../../../restyle'
import { Feather } from '@expo/vector-icons'

type HeaderProps = {
  name: string
}

export const Header = ({ name }: HeaderProps) => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <Box position="absolute" left={0}>
        <TouchableOpacity>
          <Feather name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
      </Box>
      <Text textTransform="capitalize" variant="headerTitle">
        {name}
      </Text>
    </Box>
  )
}
