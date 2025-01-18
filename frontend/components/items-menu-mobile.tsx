import { Link, Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/shop" className="block">Tienda</Link>
                <Link href="/shop" className="block">Tienda</Link>
                <Link href="/shop" className="block">Tienda</Link>
            </PopoverContent>
        </Popover>
    );
}

export default ItemsMenuMobile;