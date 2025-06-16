'use client'
import { useState } from 'react'
import { Button } from '@ui/index'

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null)
  const [message, setMessage] = useState('')

  const submit = async () => {
    if (!file) return
    const formData = new FormData()
    formData.append('file', file)
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
    if (res.ok) setMessage('Uploaded!')
    else setMessage('Upload failed')
  }

  return (
    <div className="space-y-2">
      <input type="file" accept=".xls,.xlsx" onChange={e => setFile(e.target.files?.[0] ?? null)} />
      <Button onClick={submit}>Upload</Button>
      {message && <p>{message}</p>}
    </div>
  )
}
