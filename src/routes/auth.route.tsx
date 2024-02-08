import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { Onboarding } from '../screens/auth/Onboarding'
import { LogInLogOut } from '../screens/auth/LogInLogOut'

type StackNavigationProps = {
  onboarding: undefined
  logInLogOut: undefined
}

export type AuthRouteProps = NativeStackNavigationProp<StackNavigationProps>

const { Navigator, Screen } = createNativeStackNavigator<StackNavigationProps>()

export const AuthRoute = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="onboarding" component={Onboarding} />
      <Screen name="logInLogOut" component={LogInLogOut} />
    </Navigator>
  )
}
