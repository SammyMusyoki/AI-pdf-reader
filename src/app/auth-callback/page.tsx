"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { trpc } from '../_trpc/client'
import { Loader2 } from 'lucide-react'

const Page = () => {
    const router = useRouter()

    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')

    const { data, error } = trpc.authCallBack.useQuery(undefined);

    useEffect(() => {
        if (data?.success) {
            // User is synced in the database
            router.push(origin ? `${origin}` : '/dashboard')
        }
        if (error) {
            if (error.data?.code === "UNAUTHORIZED" ) {
                router.push("/sign-in")
            }
        }
    }, [data, error, router, origin])

    // trpc.authCallBack.useQuery(undefined, {
    //     onSuccess: ({success}: any) => {
    //         if (success) {
    //             // User is synced in db
    //             router.push(origin ? `${origin}` : '/dashboard')
    //         }
    //     },
    //     onError: ({err}: any) => {
    //         if(err.data?.code === "UNAUTHORIZED") {
    //             router.push("/sign-in")
    //         }
    //     },
    //     retry: true,
    //     retryDelay: 500,
    // })

    return (
        <div className='w-full mt-24 flex justify-center'>
            <div className="flex flex-col items-center gap-2">
            <Loader2 className='h-8 w-8 animate-spin text-violet-700' />
            <h3 className='font-semibold text-xl'>Setting up your account ...</h3>
            <p>You will be redirected automatically.</p>

            </div>
        </div>
    )
}

export default Page
