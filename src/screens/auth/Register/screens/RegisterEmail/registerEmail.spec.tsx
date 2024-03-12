import { render } from '@testing-library/react-native'
import { RegisterEmail } from '.'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@shopify/restyle'
import { theme } from '../../../../../theme'

describe('Screen: RegisterEmail', () => {
  it('render', () => {
    render(
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <RegisterEmail />
        </NavigationContainer>
      </ThemeProvider>,
    )
  })
})
