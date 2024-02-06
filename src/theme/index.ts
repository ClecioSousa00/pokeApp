import { createTheme } from '@shopify/restyle'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { textVariants } from '../theme/textVariants'

const theme = createTheme({
  colors,
  spacing,
  textVariants,
})

type ThemeProps = typeof theme
export { theme, ThemeProps }
