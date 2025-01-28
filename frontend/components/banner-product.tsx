import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return ( 
        <>
            <div className="mt-4 text-center">
                <p>Tenemos lo que buscas!</p>
                <h4 className="mt-2 text-5xl font-extrabold upperce">TENEMOS TU ESTILO🌿</h4>
                <p className="my-2 text-lg">Accesorios, camisetas, jeans, zapatillas</p>

                <Link href="#" className={buttonVariants()}>
                    Comprar
                </Link>
            </div>

            <div className="h-[350px] bg-cover lg:h-[600px] bg-[url('/wallpaper.jpg')] bg-center mt-5">

            </div>
        </>
     );
}
 
export default BannerProduct;