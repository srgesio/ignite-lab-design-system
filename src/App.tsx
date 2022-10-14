import { EnvelopeSimple, Lock } from 'phosphor-react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import './styles/global.css'

export function App() {

  return (
    <div className='w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100 flex-col'>
      <header className='flex items-center flex-col'>
        <Logo />
        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>
        <Text size='lg' className='text-gray-400 mt-1'>
          Faça login e comece a usar!
        </Text>
      </header>
      <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>
            Endereço de Email
          </Text>

          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>
            <TextInput.Input id='email' placeholder='Digite seu e-mail' />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>
            Sua Senha
          </Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id='password' placeholder='***********' type={'password'} />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>

          <Checkbox id='remember' />
          <Text size='sm' className='text-gray-200'>
            Lembrar-me de mim por 30 dias
          </Text>
        </label>
        <Button type='submit' className='mt-4'>
          Entrar na plataforma
        </Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text size='sm' asChild className='text-gray-400 underline hover:text-gray-200'>
          <a href="/">

            Esqueceu sua senha?
          </a>
        </Text>
        <Text size='sm' asChild className='text-gray-400 underline hover:text-gray-200'>
          <a href="/">

            Não possui conta? Crie uma agora
          </a>
        </Text>
      </footer>
    </div>


  )
}