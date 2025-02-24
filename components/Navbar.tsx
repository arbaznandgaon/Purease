'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Darkmodetoggle from "./Darkmodetoggle";
import Userdropdown from "./Userdropdown";
import Logo from "./Logo";
import { getSession, useSession } from "next-auth/react";
import { Session } from "next-auth";

type Navitem = { navitem: string; href: string }
type Navitems = Readonly<(Navitem)[]>;

const navitems: Navitems = [
  { navitem: "Sage", href: "/" },
  { navitem: "About Us", href: "/" },
  { navitem: "Pricing", href: "/" },
  { navitem: "Blog", href: "/" },
  { navitem: "Responsible Ai", href: "/" },
  { navitem: "Tests", href: "/" },
] as const ;

export default function Navbar({session} :{session :Session | null}) {
  const [isFixed ,setIsFixed] = useState<boolean>(false);

  const transitionNavbar = ():void => {
    window.scrollY>100 ? setIsFixed(true) : setIsFixed(false);
  }
  
  useEffect(()=>{
    window.addEventListener('scroll' ,transitionNavbar)
    return () => window.removeEventListener('scroll' ,transitionNavbar)
  },[]);
  

  return (
    <div className={`w-full ${isFixed ? 'fixed border-b bg-white' : 'relative bg-[#f2faf7]'} top-0 z-50  dark:bg-inherit `}>
      <div className=" max-w-7xl mx-auto flex justify-between items-center p-6">
        <div className=""><Logo isLink height={12} width={50} /></div>
        <div className="hidden md:flex  items-center space-x-6 text-sm">
            {navitems.map((item : Navitem) => <Link href={item.href} key={item.navitem}>{item.navitem}</Link>)}
            <Darkmodetoggle />
            <Userdropdown session={session} />
        </div>
      </div>
    </div>
  );
}
