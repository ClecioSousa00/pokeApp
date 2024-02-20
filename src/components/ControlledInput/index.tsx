import {
  SpacingProps,
  VariantProps,
  createRestyleComponent,
  createVariant,
  spacing,
} from '@shopify/restyle'
import { TextInput, TextInputProps } from 'react-native'
import { ThemeProps } from '../../theme'
import { Controller, Control } from 'react-hook-form'

type BoxCustomProps = SpacingProps<ThemeProps> &
  VariantProps<ThemeProps, 'inputVariants'>

const Box = createRestyleComponent<BoxCustomProps, ThemeProps>([
  spacing,
  createVariant({ themeKey: 'inputVariants' }),
])

type ControlledInputProps = {
  children?: React.ReactNode
  name: string
  control: Control
} & BoxCustomProps &
  TextInputProps

export const ControlledInput = ({
  children,
  name,
  control,
  ...rest
}: ControlledInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Box {...rest}>
          <TextInput
            {...rest}
            style={{ flex: 1 }}
            value={value}
            onChangeText={onChange}
          />
          {!!children && children}
        </Box>
      )}
    />
  )
}
