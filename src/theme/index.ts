import { createTheme } from '@shopify/restyle'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { textVariants } from '../theme/textVariants'
import { buttonVariants } from '../theme/buttonVariants'
import { inputVariants } from '../theme/inputVariants'

const theme = createTheme({
  colors,
  spacing,
  textVariants,
  buttonVariants,
  inputVariants,
})

type ThemeProps = typeof theme
export { theme, ThemeProps }
