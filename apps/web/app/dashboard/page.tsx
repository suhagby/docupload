import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import UploadForm from './upload-form'
import { authOptions } from '../api/auth/[...nextauth]/options'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return redirect('/auth/login')
  }
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <UploadForm />
    </div>
  )
}
