import Image from 'next/image'
import { Main } from './pages/main'
import { Footer } from './pages/footer'

export default function Home() {
  return (
    <>
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Авторsssssssssssssssssss</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>О Авторе</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Itsss</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">LOGO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">ЖМИ</a>
  </div>
</div>
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 md:p-[50px] p-3">
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
    <Footer/>
</>
  )
}
