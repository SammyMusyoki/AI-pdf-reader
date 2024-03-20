import { db } from '@/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

interface PageProps {
    params: {
        fileid: string
    }
}

const Page = async ({params}: PageProps) => {
    // Retrieve file id
    const {fileid} = params
    
    const { getUser } = getKindeServerSession()
    
    const user = await getUser()
    if (!user || !user.id) redirect(`/auth-callback?origin=dashboard/${fileid}`)

    // make database call
    const file = await db.file.findFirst({
        where: {
            id: fileid,
            userId: user.id
        }
    })
  return (
    <div>
      {fileid}
      Hello World
    </div>
  )
}

export default Page
