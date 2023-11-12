'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { randomArray } from "../author/array"

const navbar={main:[{id:Date.now(),title:"Об Авторе",href:"/author"},{id:Date.now(),title:"Главная",href:"/"}],
dropdown:'Фильмы',dropitems:[{ id:Date.now(),title:'Добавлю Наполеон' ,href:"/napoleon"},{id:Date.now(),title:'Аватар' ,href:"/avatar"}]
}
export function NavBar(){

let [randomNumber,setRandomNumber]=useState(randomArray.length)
let [index,setIndex]=useState(0)
 function incr(){
if(index<randomNumber){
    setIndex(prev=>prev+1)
    alert(`${randomArray[index]} !`)
}
else if(index===randomNumber){
    setIndex(0)
    alert("Конец, Дальше по второму кругу")
}
else{
    alert(`${randomArray[index]} !`)
}
 }

    return <div  className="navbar bg-base-100 sticky top-0 z-10">
      
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {navbar.main.map(nav=><li key={nav.id}><Link href={nav.href}>{nav.title}</Link></li>)}
          <li>
            <a>{navbar.dropdown}</a>
            <ul className="p-2">
              {navbar.dropitems.map(item=><li key={item.id}><Link href={item.href}>{item.title}</Link></li>)}
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
      {navbar.main.map(nav=><li key={nav.id}><Link href={nav.href}>{nav.title}</Link></li>)}
       
        <li tabIndex={0}>
          <details>
            <summary>{navbar.dropdown}</summary>
            <ul className="p-2">
            {navbar.dropitems.map(item=><li key={item.id}><Link href={item.href}>{item.title}</Link></li>)}
            </ul>
          </details>
        </li>
      </ul>
    </div>
   <div onClick={incr} className="navbar-end">
      <a className="btn">Интересный факт</a>
    </div>

  </div>
}