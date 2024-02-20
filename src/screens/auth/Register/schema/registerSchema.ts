import z from 'zod'

export const EmailSchema = z.object({
  email: z
    .string({ required_error: 'Informe um e-mail.' })
    .email('Insira um e-mail válido.')
    .min(5, 'Informe um e-mail.'),
})

export const PasswordSchema = z.object({
  password: z
    .string({ required_error: 'Você deve informar uma senha.' })
    .min(8, 'Sua senha deve conter no mínimo 8 caracteres.'),
})

export const UsernameSchema = z.object({
  username: z
    .string({ required_error: 'Informe seu nome de usuário.' })
    .min(5, 'Seu nome deve ter no mínimo 5 caracteres.'),
})

export type EmailSchemaType = z.infer<typeof EmailSchema>
export type PasswordSchemaType = z.infer<typeof PasswordSchema>
export type UsernameSchemaType = z.infer<typeof UsernameSchema>
