import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
    return ( 
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercasse font-bladk text-2xl text-primary">DESCUENTOS INCREIBLES</h2>
            <h3 className="mt-3 font-semibold">20% DESCUENTO</h3>

            <div className="max.w.md mx-auto sm:flex justify-center mt-5 gap-8">
                <Link href="#" className={buttonVariants()}>
                    Comprar
                </Link>
                <Link href="#" className={buttonVariants({variant: "outline"})}>
                    Mas Informacion
                </Link>

            </div>

        </div>
     );
}
 
export default BannerDiscount;