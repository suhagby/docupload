'use client'
import { signIn } from 'next-auth/react'
import { Button } from '@suhagby/ui'

export default function Login() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-xl font-bold">Login</h1>
      <Button onClick={() => signIn('google')}>Login with Google</Button>
      <Button onClick={() => signIn()}>Login with Email</Button>
    </div>
  )
}
