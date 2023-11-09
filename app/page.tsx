import Image from 'next/image'
import {SiDaisyui} from 'react-icons/si'
import {BiLogoTailwindCss} from 'react-icons/bi'
import {SiVercel} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'
export default function Home() {
  return (
    <>

    <main className="flex min-h-screen flex-col items-left  sm:p-24 md:p-[50px] pb-[100px]">
<h1 className='text-center text-[38px]'>О Сайте</h1>

<div className="flex flex-wrap gap-[10px] p-2">
<SiDaisyui className='text-8xl'/>
<BiLogoTailwindCss className='text-8xl'/>
<SiVercel className='text-7xl'/>

<TbBrandNextjs className='text-8xl'/>
</div>

<p>Сайт сей был изготовлен рабом божьим Сергеем в ночь с 8 на 9го февраля ибо не спалось ему.</p>
<p>В изготовлении сайта сего помогали вышеупомянутому рабу божьему помимо веры в Господа :</p>
<p>Next.js ибо
на этом фреймворке был этот сайт изготовлен.</p> 
<p>Vercel ибо на их хостинг выкладывал я сайт этот.</p>
<p>React ибо люб он мне, и лежит душа моя к нему.</p>
<p>Tailwind ибо с его помощью сайт этот я красивым делал, и стили оформлял, ибо лень мне было с CSS копаться, а Tailwind легок, прост, и тем богоугоден
</p>
<p>Daysi Ui ибо с его помощью шапку с навигацией я изготавливал, но не нравиться мне шапка сия, переделать надо будет ее</p>


 
    </main>
    
</>
  )
}
