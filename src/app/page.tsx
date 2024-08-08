'use client'

import { SearchIcon } from "lucide-react";
import Header from "./_components/ui/header";
import { Input } from "./_components/ui/input";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar } from "./_components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const Home = () => {
  return ( 
    //Header
    <>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Felipe</h2>
        <p>Segunda-feira, 05 de agosto.</p>

        {/* Busca */}
        <div className="mt-6 flex items-center gap-2">
        <Input placeholder="Faça sua busca..." />
        <Button >
          <SearchIcon />
        </Button>
        </div>
        
      {/* Imagem */}
      <div className="relative w-full h-[150px] mt-6 rounded-xl">
        <Image src="/Banner.png" alt="Banner FSW" fill className="object-cover" />
      </div>
      
      {/* Agendamento */}

      <Card className="mt-6">
        <CardContent className="flex justify-between p-0">
          {/* Esquerda */}
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit">Confirmado</Badge>
            <h3 className="font-semibold">Corte de Cabelo</h3>

            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"></AvatarImage>
              </Avatar>
              <p className="text-sm">Barbearia FSW</p>
            </div>
          </div>
           {/* Direita */}
           <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
             <p className="text-sm">Agosto</p>
             <p className="text-2xl">05</p >
             <p className="text-sm">20:00</p>
           </div>
        </CardContent>
      </Card>

      </div>
    </>
   );
}
 
export default Home;