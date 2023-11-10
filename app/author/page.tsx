import React from 'react'
import Image from 'next/image'
const Author = () => {
  return (
   <div className='md:px-[300px] py-6'>
   <h1>Об Авторе</h1>
   <Image
   src='/boldme.webp'
   alt='Я'
width={600}
height={1000}
   />
   <p>Хочу заебываться на работе как он, а не так как я.</p>
   </div>
  )
}

export default Author