import { styles } from '@/lib/styles'
import { cn } from '@/lib/utils'
import React from 'react'
import LoginButton from '../auth/buttons/login-button'
import { Button } from '../ui/button'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { currentUser } from '@/lib/auth-user'

const Hero = async () => {

    const user = await currentUser()

    return (
        <div className={cn(styles.container, 'py-20 mx-auto text-center flex flex-col items-center max-w-3xl mt-20')}>
            <h1 className={cn(styles.title)}>Authentication free example with <span className={cn(styles.gradients.text_highlight)}>Next.js</span>.</h1>
            <p className={cn(styles.subtitle)}>Typescript, React.js, Next.js 15, Prisma, MongoDB, Shadcn, Tailwind, Next-auth, Resend, Zod and more.</p>
            <div className="flex flex-col md:flex-row items-center justify-center mt-4 gap-4">
                {!user && <LoginButton asChild mode='modal' className='w-full'>
                    <Button className='w-full' variant={'default'} size={'lg'}>Try it out</Button>
                </LoginButton>}

                <Link href={'https://github.com/Enzo-21/next-auth'} target='_blank'>
                    <Button variant={'secondary'} size={'lg'}>View code on github
                        <FaGithub className='ml-2' />
                    </Button>
                </Link>

            </div>


        </div>
    )
}

export default Hero