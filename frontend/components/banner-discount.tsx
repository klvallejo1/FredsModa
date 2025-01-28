import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
    return ( 
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercasse font-bladk text-3xl text-primary">DESCUENTOS INCREÍBLES LOS PRIMEROS DÍAS DEL MES🗓️</h2>
            <h3 className="mt-3 font-semibold">Hasta el 50% DE DESCUENTO!</h3>

            <div className="max.w.md mx-auto sm:flex justify-center mt-5 gap-8">
                <Link href="#" className={buttonVariants()}>
                    Comprar YA!
                </Link>
            </div>
        </div>
     );
}
 
export default BannerDiscount;