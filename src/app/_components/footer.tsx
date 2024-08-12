import { Card, CardContent } from "./ui/card";

const Footer = () => {
  return ( 
    <footer >
    <Card>
      <CardContent className="p-5">
        <p className="text-sm text-gray-400">
        © 2023 Copyright <span className="font-bold">FSW Barber</span>
        </p>
      </CardContent>
    </Card>
  </footer>
   );
}
 
export default Footer;