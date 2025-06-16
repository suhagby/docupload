import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from 'db/index'
import { authOptions } from './options'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }