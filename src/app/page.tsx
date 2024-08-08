'use client'

import { SearchIcon } from "lucide-react";
import Header from "./_components/ui/header";
import { Input } from "./_components/ui/input";
import { Button } from "./_components/ui/button";
import Image from "next/image";

const Home = () => {
  return ( 
    //Header
    <>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Felipe</h2>
        <p>Segunda-feira, 05 de agosto.</p>

        <div className="mt-6 flex items-center gap-2">
        <Input placeholder="Faça sua busca..." />
        <Button >
          <SearchIcon />
        </Button>
        </div>

      <div className="relative w-full h-[150px] mt-6 rounded-xl">
        <Image src="/Banner.png" alt="Banner FSW" fill className="object-cover" />
      </div>

      </div>
    </>
   );
}
 
export default Home;