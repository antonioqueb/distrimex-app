'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiDollar } from "react-icons/ci";
import { CiImport } from "react-icons/ci";
import { CiWavePulse1 } from "react-icons/ci";



export default function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (paths) => paths.includes(pathname);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed h-full inset-y-0 left-0 z-50 flex flex-col h-screen max-w-[280px] bg-white dark:bg-zinc-900 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
      <div className="flex items-center justify-between h-16 px-4 border-b border-zinc-200 dark:border-zinc-800">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          {/* <MountainIcon className="h-6 w-6" /> */}
          <span className='text-xl' >Distrimex</span>
        </Link>
        <button className="md:hidden" onClick={toggleSidebar}>
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="grid gap-1 p-4">
          <li>
            <Link
              className={`flex items-center gap-3 rounded-md px-3 py-4 text-sm font-medium transition-colors ${isActive(['/dashboard', '/dashboard/analisis']) ? 'text-primary bg-primary/10' : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50'}`}
              href="/dashboard/">
              <CiDollar className="h-7 w-7" />
              Valoración
            </Link>
          </li>
          {/* <li>
            <Link
              className={`flex items-center gap-3 rounded-md px-3 py-4 text-sm font-medium transition-colors ${isActive(['/dashboard/alcances']) ? 'text-primary bg-primary/10' : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50'}`}
              href="/dashboard/alcances">
              <CiWavePulse1 className="h-7 w-7" />
              Alcances
            </Link>
          </li> */}
          <li>
            <Link
              className={`flex items-center gap-3 rounded-md px-3 py-4 text-sm font-medium transition-colors ${isActive(['/dashboard/empleados/administrar', '/dashboard/carga', '/dashboard/carga/historial']) ? 'text-primary bg-primary/10' : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50'}`}
              href="/dashboard/carga">
              <CiImport className="h-7 w-7" />
              Subir XML
            </Link>
          </li>
          
          
        </ul>
      </nav>
    </div>
  );
}
