'use client'
import Image from "next/image"
import Link from "next/link"
import { randomArray } from "../author/array"
interface Navigation{
    id:any,
    movie:string
}
const navbar={main:[{title:"Об Авторе",href:"/author"},{title:"Главная",href:"/"}],
dropdown:'Фильмы',dropitems:['Добавлю Наполеон',"Че нить добавлю"]
}
export function NavBar(){

let randomNumber=randomArray.length

    return <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link href='/author'>Об Авторе</Link></li>

          <li><Link href='/'>Главная</Link></li>
          <li>
            <a>Фильмы</a>
            <ul className="p-2">
              <li>Наполеон</li>
              <li><a>Че Нить добавлю</a></li>
            </ul>
          </li>
        </ul>

      </div>
      <Link href='/' className="btn btn-ghost normal-case text-xl bg-white rounded-lg">

        <Image
        alt='Logo'
        src='/logo.png'
        width={30}
        height={50}
        className="rounded-[200px]"
        />
      </Link>
    </div>

    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li><Link href='/author'>Об Авторе</Link></li>
       
        <li><Link href='/'>Главная</Link></li>
       
        <li tabIndex={0}>
          <details>
            <summary>ФИЛЬМЫ</summary>
            <ul className="p-2">
              <li><a>Здесь будет Наполеон</a></li>
              <li><a>Пока Ничего</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
    <div onClick={()=>alert(randomArray[Math.floor(Math.random()*randomNumber)])} className="navbar-end">
      <a className="btn">Рандомный факт</a>
    </div>
  </div>
}