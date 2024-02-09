import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Text } from '../../restyle'
import {
  SpacingProps,
  VariantProps,
  createRestyleComponent,
  createVariant,
  spacing,
} from '@shopify/restyle'
import { ThemeProps } from '../../theme'

type BoxCustomProps = SpacingProps<ThemeProps> &
  VariantProps<ThemeProps, 'buttonVariants'>

const Box = createRestyleComponent<BoxCustomProps, ThemeProps>([
  spacing,
  createVariant({ themeKey: 'buttonVariants' }),
])

type ButtonProps = {
  children: React.ReactNode
} & BoxCustomProps &
  TouchableOpacityProps

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity {...rest} style={{ width: '100%' }} activeOpacity={0.7}>
      <Box {...rest}>{children}</Box>
    </TouchableOpacity>
  )
}
