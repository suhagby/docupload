'use client'
import { signIn } from 'next-auth/react'
import { Button } from '@ui/index'

export default function Signup() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-xl font-bold">Signup</h1>
      <Button onClick={() => signIn('google')}>Signup with Google</Button>
      <Button onClick={() => signIn()}>Signup with Email</Button>
    </div>
  )
}
