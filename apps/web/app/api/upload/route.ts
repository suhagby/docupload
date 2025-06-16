import { NextRequest, NextResponse } from 'next/server'
import formidable from 'formidable'
import { prisma } from '@db/index'
import xlsx from 'xlsx'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/options'
import fs from 'fs'

export const POST = async (req: NextRequest) => {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const form = formidable({ multiples: false })
  const data = await new Promise<{ filepath: string }>((resolve, reject) => {
    form.parse(req as any, (err, fields, files) => {
      if (err) return reject(err)
      const file = files.file as formidable.File
      resolve({ filepath: file.filepath })
    })
  })

  const workbook = xlsx.readFile(data.filepath)
  const sheet = workbook.Sheets[workbook.SheetNames[0]]
  const rows = xlsx.utils.sheet_to_json<Record<string, any>>(sheet)

  await Promise.all(
    rows.map(row =>
      prisma.entry.create({
        data: {
          data: row as any,
          user: { connect: { email: session.user!.email! } },
        },
      })
    )
  )

  fs.unlinkSync(data.filepath)

  return NextResponse.json({ ok: true })
}
