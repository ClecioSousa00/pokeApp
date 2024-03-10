import { NavigationContainer } from '@react-navigation/native'
import { AuthRoute } from './auth.route'
import { useEffect, useState } from 'react'
import { auth } from '../services/firebaseConfig'

import { Home } from '../screens/app/Home'
import { UserService } from '../services/actions/userActions'
import { User } from 'firebase/auth'

// type User = {
//   uid: string
// }

export const Routes = () => {
  const [user, setUser] = useState<User | null>(null)

  // useEffect(() => {
  //   const auth = getAuth(app)
  //   const subscriber = onAuthStateChanged(auth, (userInfo) => {
  //     console.log(userInfo)
  //     setUser(userInfo)
  //   })
  //   return subscriber
  // }, [])

  // if (user) {
  //   UserService.getUserAction(user)
  // }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged((userInfo) => {
      // console.log(userInfo)

      setUser(userInfo)
      UserService.getUserAction(userInfo)
        .then((user) => {
          console.log(user.username)
        })
        .catch((error) => {
          console.log(error)
        })
    })
    return subscriber
  }, [])

  return (
    <NavigationContainer>{user ? <Home /> : <AuthRoute />}</NavigationContainer>
  )
}
