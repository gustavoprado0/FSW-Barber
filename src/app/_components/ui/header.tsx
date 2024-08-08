import Image from "next/image";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return ( 
    <Card>
      <CardContent className="p-5 justify-between items-center flex flex-row">
        <Image src="/Logo.png" height={18} width={120} alt={"FSW Barber"} />
        <Button size='icon' variant='outline'>
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
   );
}
 
export default Header;