import Image from "next/image";
import { MenuIcon} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetTrigger } from "./ui/sheet";
import SideBarSheet from "./sidebar-sheet";

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
          <SideBarSheet />
        </Sheet>
      </CardContent>
    </Card>
   );
}
 
export default Header;