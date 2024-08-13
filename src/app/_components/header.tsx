import Image from "next/image";
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { quickSearchOptions } from "../constants/search";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const Header = () => {
  return ( 
    <Card>
      <CardContent className="p-5 justify-between items-center flex flex-row">
        <Image src="/Logo.png" height={18} width={120} alt={"FSW Barber"} />
        <Sheet>
          <SheetTrigger asChild>
            <Button size='icon' variant='outline'>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="flex items-center py-5 border-b border-solid gap-3">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"/>
              </Avatar>

              <div>
                <p className="font-bold">Felipe Rocha</p>
                <p className="text-xs">felipe@fullstackclub.io</p>
              </div>
            </div>

            <div className="py-5 flex flex-col gap-2 border-b border-solid">
              <SheetClose asChild>
                <Button className="justify-start gap-2" variant='ghost' asChild>
                  <Link href="/">
                    <HomeIcon size={18} />
                    Início
                  </Link>
                </Button>
              </SheetClose>
              <Button className="justify-start gap-2" variant='ghost'>
                <CalendarIcon size={18} />
                Agendamentos
              </Button>
            </div>

            <div className="py-5 flex flex-col gap-2 border-b border-solid">
              {quickSearchOptions.map((option) => (
                 <Button key={option.title}
                  className="justify-start gap-2" 
                  variant='ghost'>
                 <Image alt={option.title} src={option.imageUrl} height={18} width={18}/>
                 {option.title}
               </Button>
              ))}
            </div>

            <div className="py-5 flex flex-col gap-2 border-b border-solid">
              <Button variant='ghost' className="justify-start gap-2">
                <LogOutIcon size={18} />
                Sair da conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
   );
}
 
export default Header;