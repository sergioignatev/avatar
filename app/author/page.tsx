import React from 'react'
import Image from 'next/image'
const Author = () => {
  return (
   <div className='px-2 py-6'>
   <h1>Об Авторе</h1>
   <Image
   src='/me.jpg'
   alt='Я'
width={1000}
height={1000}
   />
   <p>Да Татьяна, именно то что ты подумала. У меня действительно есть вторая работа, и я на ней иногда прям заебываюсь.</p>
   </div>
  )
}

export default Author