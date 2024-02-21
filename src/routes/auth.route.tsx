import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { Onboarding } from '../screens/auth/Onboarding'
import { LogInSignUp } from '../screens/auth/LogInSignUp'
import { Register } from '../screens/auth/Register'
import { RegisterEmail } from '../screens/auth/Register/screens/RegisterEmail'
import { RegisterPassword } from '../screens/auth/Register/screens/RegisterPassword'
import { RegisterUsername } from '../screens/auth/Register/screens/RegisterUsername'

type StackNavigationProps = {
  onboarding: undefined
  logInSignUp: undefined
  register: undefined
  registerEmail: undefined
  registerPassword: { email: string }
  registerUsername: { email: string; password: string }
}

export type AuthRouteProps = NativeStackNavigationProp<StackNavigationProps>

const { Navigator, Screen } = createNativeStackNavigator<StackNavigationProps>()

export const AuthRoute = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="onboarding" component={Onboarding} />
      <Screen name="logInSignUp" component={LogInSignUp} />
      <Screen name="register" component={Register} />
      <Screen name="registerEmail" component={RegisterEmail} />
      <Screen name="registerPassword" component={RegisterPassword} />
      <Screen name="registerUsername" component={RegisterUsername} />
    </Navigator>
  )
}
