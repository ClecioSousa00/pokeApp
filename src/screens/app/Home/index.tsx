import { Button } from '../../../components/Button'
import { Box, Text } from '../../../restyle'
import { signOut } from 'firebase/auth'
import { auth } from '../../../services/firebaseConfig'

export const Home = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Box>
      <Text>home</Text>
      <Button onPress={handleSignOut} variant="primary">
        <Text>sair</Text>
      </Button>
    </Box>
  )
}
