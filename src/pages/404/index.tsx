import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function NotFoundPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/login')
  })

  return null
}
