import { useState } from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Button } from '../../../../../components/Button'
import { ControlledInput } from '../../../../../components/ControlledInput'
import { Box, Text } from '../../../../../restyle'
import { Header } from '../../../components/Header'
import { Screen } from '../../../components/Screen'
import { useNavigation } from '@react-navigation/native'
import { AuthRouteProps } from '../../../../../routes/auth.route'
import { Controller, useForm } from 'react-hook-form'
import { EmailSchemaType, EmailSchema } from '../../schema/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputMessage } from '../../../../../components/InputMessage'

export const RegisterEmail = () => {
  const navigation = useNavigation<AuthRouteProps>()
  const [isFocused, setIsFocused] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailSchemaType>({
    resolver: zodResolver(EmailSchema),
  })

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const onSubmit = (data: EmailSchemaType) => {
    console.log('email', data.email)
    navigation.navigate('registerPassword')
  }

  console.log('erro', errors.email?.message)

  return (
    <Screen>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Box flex={1}>
          <Header name="criar conta" />
          <Box mt="xl" alignItems="center">
            <Text variant="subtitle">vamos começar!</Text>
            <Text variant="title">Qual é o seu e-mail?</Text>
          </Box>
          <ControlledInput
            marginTop="ml"
            name="email"
            control={control}
            placeholder="E-mail"
            keyboardType="email-address"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputMessage
            errorMessage={errors.email?.message}
            inputMessage="Informe o seu e-mail."
          />

          {/* {errors.email?.message && (
            <Text variant="messageInputErrorText" textAlign="center" mt="s">
              {errors.email?.message}
            </Text>
          )}
          {!errors.email?.message && (
            <Text variant="messageInputText" textAlign="center" mt="s">
              Informe o seu e-mail.
            </Text>
          )} */}

          <Box flex={1} justifyContent="flex-end">
            <Button
              variant={isFocused ? 'primary' : 'inactive'}
              onPress={handleSubmit(onSubmit)}
            >
              <Text
                variant={isFocused ? 'buttonText' : 'buttonInactiveText'}
                textTransform="capitalize"
              >
                continuar
              </Text>
            </Button>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    </Screen>
  )
}
