'use client'

import { useSession, signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaBorderAll } from "react-icons/fa";

export default function Component() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      redirect('/dashboard');
    }
  }, [session]);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 dark:bg-zinc-950 bg-white dark:bg-zinc-950">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white dark:bg-zinc-800 rounded-lg sm:shadow-xl p-6 sm:p-8 md:p-12 text-center">
        <h1 className="text-2xl sm:text-4xl font-extrabold mb-4 sm:mb-6 text-zinc-800 dark:text-white">Iniciar Sesión</h1>
        <p className="text-sm sm:text-lg text-zinc-600 dark:text-zinc-400 mb-6 sm:mb-8">Reportería Avanzada Distrimex ADL</p>
        <Button className="w-full py-2 sm:py-6 text-sm sm:text-2xl font-bold bg-zinc-200 text-zinc-950 rounded-lg hover:bg-zinc-100 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-950 transition duration-300"  onClick={() => signIn('google')}>
          <FcGoogle className="mr-2 sm:mr-4 h-4 sm:h-8 w-4 sm:w-8 " />
          Acceder con Google
        </Button>
      </div>
    </div>
  );
}
