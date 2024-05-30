'use client'

import { useSession, signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

export default function Component() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      redirect('/dashboard');
    }
  }, [session]);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 dark:bg-zinc-950">
      <div className="max-w-xl w-full bg-white dark:bg-zinc-800 rounded-lg shadow-xl p-12 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-zinc-800 dark:text-white">Iniciar Sesión</h1>
        <p className="text-2xl text-zinc-600 dark:text-zinc-400 mb-8">Reportería Avanzada Distrimex ADL</p>
        <Button className="w-full py-6 text-2xl font-bold bg-white text-zinc-950 rounded-lg hover:bg-zinc-100 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-950 transition duration-300" onClick={() => signIn('google')}>
          <FcGoogle className="mr-4 h-8 w-8" />
          Acceder con Google
        </Button>
      </div>
    </div>
  );
}

