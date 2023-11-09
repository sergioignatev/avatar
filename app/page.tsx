import Image from 'next/image'
import { Main } from './pages/main'
import { Footer } from './pages/footer'
import { NavBar } from './pages/NavBar'

export default function Home() {
  return (
    <>

    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 md:p-[50px] pb-[100px]">
<div className="sm:text-[100px] text-[40px] pb -4">АВАТАР 2</div>
<Image
src='/images.jpg'
alt='Avatar'
width={800}
height={1000}
className='rounded-[10px]'
/>
  <Main/>
 
    </main>
    
</>
  )
}
