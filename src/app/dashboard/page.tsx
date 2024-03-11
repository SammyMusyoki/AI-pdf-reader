import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async ( ) => {
    const  { getUser } =  getKindeServerSession()

    const user = await getUser()

    if (!user || !user.id) redirect('/auth-callback?origin=dashboard')

    
  return (
    <div>
      <span>{user.email}</span>
    </div>
  )
}

export default Page
