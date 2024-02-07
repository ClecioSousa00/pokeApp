import { createTheme } from '@shopify/restyle'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { textVariants } from '../theme/textVariants'
import { buttonVariants } from '../theme/buttonVariants'

const theme = createTheme({
  colors,
  spacing,
  textVariants,
  buttonVariants,
})

type ThemeProps = typeof theme
export { theme, ThemeProps }
