import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/options'
import { motion } from 'framer-motion'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main className="p-8 space-y-4">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold">
        Welcome to DocUpload
      </motion.h1>
      {session ? (
        <Link href="/dashboard" className="underline">
          Go to dashboard
        </Link>
      ) : (
        <Link href="/api/auth/signin" className="underline">
          Sign in
        </Link>
      )}
    </main>
  )
}
