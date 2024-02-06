import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { Onboarding } from '../screens/Onboarding'

type StackNavigationProps = {
  onboarding: undefined
}

export type AuthRouteProps = NativeStackNavigationProp<StackNavigationProps>

const { Navigator, Screen } = createNativeStackNavigator<StackNavigationProps>()

export const AuthRoute = () => {
  return (
    <Navigator>
      <Screen name="onboarding" component={Onboarding}></Screen>
    </Navigator>
  )
}
