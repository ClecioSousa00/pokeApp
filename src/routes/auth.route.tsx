import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { Onboarding } from '../screens/auth/Onboarding'
import { LogInSignUp } from '../screens/auth/LogInSignUp'
import { Register } from '../screens/auth/Register'
import { RegisterEmail } from '../screens/auth/Register/RegisterEmail'

type StackNavigationProps = {
  onboarding: undefined
  logInSignUp: undefined
  register: undefined
  registerEmail: undefined
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
    </Navigator>
  )
}
