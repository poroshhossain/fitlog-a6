"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { RxHamburgerMenu } from "react-icons/rx";
import MainLogo from "@/assets/logo.png"
import Image from "next/image";
import { useState } from "react";
import { usePlanSave } from "@/contextApi/PlanSaveContext";

const Navber = () => {
    const { plan, save } = usePlanSave();
    const pathname = usePathname();
    const navLinks = [
        { label: 'Workouts', path: '/' },
        { label: 'My Plan', path: '/plan' },
    ]
    const [active, setActive] = useState<'plan' | 'saved'>('plan');
    return (
        <nav className="bg-cDark border-b border-cLight/5">
            <div className="max-w-7xl mx-auto">
                <div className="navbar shadow-sm">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                {/* <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg> */}
                                <RxHamburgerMenu className="text-cLight" />
                            </div>
                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content bg-cDark rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {navLinks.map(menu => <li key={menu.path}><Link className={`${pathname === menu.path ? 'text-cPrimary' : ''} text-cLight font-Inter font-semibold text-[12px]`} href={menu.path}>{menu.label}</Link></li>)}

                            </ul>
                        </div>
                        <Link href='/' className="text-xl text-cLight font-Oswald flex items-center gap-3  ">
                            <Image src={MainLogo} alt="main Logo" className="w-8" /> <span className="uppercase text-[18px]">FITLOG</span> </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks.map(menu => <li key={menu.path}><Link className={`${pathname === menu.path ? 'text-cPrimary bg-cPrimary/15 rounded-2xl' : ''} text-cLight font-Inter font-semibold text-[12px]`} href={menu.path}>{menu.label}</Link></li>)}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="flex items-center gap-6">
                            <Link onClick={() => setActive('plan')} href={'/plan'} className="text-cLight flex items-center gap-1 font-Inter text-[12px]" >Plan<span className={`${active === 'plan' ? 'bg-cPrimary text-cDark ' : ''} border border-cLight/50  w-6 h-6 rounded-full flex items-center justify-center`} >{plan.length}</span></Link>
                            <Link onClick={() => setActive('saved')} href={'/plan'} className="text-cLight flex items-center gap-1 font-Inter text-[12px]" >Saved<span className={`${active === 'saved' ? 'bg-cPrimary  text-cDark ' : ''}  border border-cLight/50 w-6 h-6 rounded-full flex items-center justify-center`} >{save.length}</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navber