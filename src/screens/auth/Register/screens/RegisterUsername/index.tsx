import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Header } from '../../../components/Header'
import { Screen } from '../../../components/Screen'
import { Box, Text } from '../../../../../restyle'
import { ControlledInput } from '../../../../../components/ControlledInput'
import { Button } from '../../../../../components/Button'
import { useForm } from 'react-hook-form'
import { UsernameSchema, UsernameSchemaType } from '../../schema/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputMessage } from '../../../../../components/InputMessage'

export const RegisterUsername = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UsernameSchemaType>({
    resolver: zodResolver(UsernameSchema),
  })

  const onSubmit = (data: UsernameSchemaType) => {
    console.log(data.username)
  }

  return (
    <Screen>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Box flex={1}>
          <Header name="criar conta" />
          <Box mt="xl" alignItems="center">
            <Text variant="subtitle">pra finalizar</Text>
            <Text variant="title">Qual é seu nome?</Text>
          </Box>
          <ControlledInput
            marginTop="ml"
            name="name"
            control={control}
            placeholder="Nome"
          />
          <InputMessage
            errorMessage={errors.username?.message}
            inputMessage="Esse será seu nome de usuário no aplicativo."
          />
          {/* {errors.username?.message && (
            <Text variant="messageInputErrorText" textAlign="center" mt="s">
              {errors.username?.message}
            </Text>
          )}
          {!errors.username?.message && (
            <Text variant="messageInputText" textAlign="center" mt="s">
              Esse será seu nome de usuário no aplicativo.
            </Text>
          )} */}
          {/* <ControlledInput marginTop="ml" placeholder="Nome" /> */}

          <Box flex={1} justifyContent="flex-end">
            <Button variant="inactive" onPress={handleSubmit(onSubmit)}>
              <Text variant="buttonInactiveText" textTransform="capitalize">
                continuar
              </Text>
            </Button>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    </Screen>
  )
}
