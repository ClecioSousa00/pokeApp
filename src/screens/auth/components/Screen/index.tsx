import { Box } from '../../../../restyle'
import { Header } from '../Header'

type ScreenProps = {
  children: React.ReactNode
}

export const Screen = ({ children }: ScreenProps) => {
  return (
    <Box flex={1} bg="white" px="ml" pb="xl" pt="ml">
      {children}
    </Box>
  )
}
