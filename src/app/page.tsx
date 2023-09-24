import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { SignUp } from "@clerk/nextjs";
import { UserButton, auth } from '@clerk/nextjs'
import Link from "next/link";
import { ArrowRight, LogIn } from "lucide-react";
import FileUpload from "@/components/FileUpload";

export default async function Home() {

  const { userId } = await auth();
  const isAuth = !!userId;

  return (
    <div className='w-screen min-h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex flex-col items-center text-center'>
          <div className='flex items-center'>
            <h1 className='text-6xl font-bold text-white mr-3'>Chat with any PDF</h1>
            <UserButton afterSignOutUrl='/' />
          </div>
          <div className='flex mt-4 pt-4'>
            {isAuth && <Button>Go to Chats</Button>}
          </div>
          <p className='max-w-xl mt-4 text-lg text-slate-300 text-center'> Utilize this platform to upload any pdf you'd like. You'll then be able to interact with the chatGPT LLM in reference to your document. </p>
          <div className='w-full mt-4 pt-4'>
            {isAuth ? (
            <FileUpload />
            ) : (
              <Link href='/sign-in'>
                <Button> 
                  Login to get started.
                  <LogIn className='w-4 h-4 ml-2' />
                  </Button>
              </Link>
            )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

// bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900