import { Text } from '../../restyle'

type InputMessageProps = {
  errorMessage: string | undefined
  inputMessage: string
}

export const InputMessage = ({
  errorMessage,
  inputMessage,
}: InputMessageProps) => {
  return (
    <>
      {errorMessage && (
        <Text variant="messageInputErrorText" textAlign="center" mt="s">
          {errorMessage}
        </Text>
      )}
      {!errorMessage && (
        <Text variant="messageInputText" textAlign="center" mt="s">
          {inputMessage}
        </Text>
      )}
    </>
  )
}
