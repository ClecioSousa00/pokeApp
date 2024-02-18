import {
  SpacingProps,
  VariantProps,
  createRestyleComponent,
  createVariant,
  spacing,
} from '@shopify/restyle'
import { TextInput, TextInputProps } from 'react-native'
import { ThemeProps } from '../../theme'

type BoxCustomProps = SpacingProps<ThemeProps> &
  VariantProps<ThemeProps, 'inputVariants'>

const Box = createRestyleComponent<BoxCustomProps, ThemeProps>([
  spacing,
  createVariant({ themeKey: 'inputVariants' }),
])

type ControlledInputProps = {
  children?: React.ReactNode
} & BoxCustomProps &
  TextInputProps

export const ControlledInput = ({
  children,
  ...rest
}: ControlledInputProps) => {
  return (
    <Box {...rest}>
      <TextInput {...rest} />
      {!!children && children}
    </Box>
  )
}
