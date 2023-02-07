import { Heading, Text } from '@ignite-ui/react'
import Head from 'next/head'
import Image from 'next/image'

import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ignite Call | Home</title>
      </Head>
      <Container>
        <Hero>
          <Heading as="h1" size="4xl">
            Agendamento descomplicado
          </Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>

          <ClaimUsernameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            priority
            alt="Calendário simbolizando aplicação em funcionamento"
          />
        </Preview>
      </Container>
    </>
  )
}