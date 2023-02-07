import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import Head from 'next/head'
import { ArrowRight } from 'phosphor-react'

import { Container, Form, Header } from './styles'

export default function Register() {
  return (
    <>
      <Head>
        <title>Ignite Call | Crie sua conta</title>
      </Head>
      <Container>
        <Header>
          <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
          <Text>
            Precisamos de algumas informações para criar seu perfil! Ah, você
            pode editar essas informações depois.
          </Text>

          <MultiStep size={4} currentStep={1} />
        </Header>

        <Form as="form">
          <label>
            <Text size="sm">Nome de usuário</Text>
            <TextInput prefix="ignite.com/" placeholder="seu-usuário" />
          </label>

          <label>
            <Text size="sm">Nome completo</Text>
            <TextInput placeholder="Seu nome" />
          </label>

          <Button type="submit">
            Próximo passo
            <ArrowRight />
          </Button>
        </Form>
      </Container>
    </>
  )
}
