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
  name: string
} & BoxCustomProps &
  TouchableOpacityProps

export const Button = ({ name, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity {...rest} style={{ width: '100%' }} activeOpacity={0.7}>
      <Box {...rest}>
        <Text textTransform="capitalize" variant="buttonText">
          {name}
        </Text>
      </Box>
    </TouchableOpacity>
  )
}
