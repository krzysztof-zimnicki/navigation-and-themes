import Image from 'next/image'
import Navigation from '../components/navigation'

export default function Home() {
  return (

    <><Navigation></Navigation><aside className='flex h-[100vh]'>
    <div className='flex m-auto'>
    <h1 className='m-auto dark:text-white text-3xl pb-32'> 🐕 I'm the Conact page.</h1>
    </div>
    </aside>
    </>
    
  )
}
