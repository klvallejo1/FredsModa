"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CartItemsFinal from "../cart/components/cart-items-final";
import { Separator } from "@radix-ui/react-dropdown-menu";

const PageSucess = () => {
  const router = useRouter();
  const { items, removeAll } = useCart();
  const prices = items.map((product) => product.attributes.price);
  const totalPrice = prices.reduce((total, price) => total + price, 0);

  const home = async () => {
    try {
      removeAll();
      router.push("/");
    } catch (error) {
      console.error("Error");
    }
  };

  return (
    <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
      <div className="flex flex-col-reverse gap-2 sm:flex-row">
        <div className="flex-1">
          {items.length === 0 && (
            <p className="dark:text-white">No hay productos en el carrito 😱</p>
          )}
          <ul>
            {items.map((item) => (
              <CartItemsFinal key={item.id} product={item}></CartItemsFinal>
            ))}
          </ul>
        </div>

        <div className="flex-shrink-0 sm:w-1/3">
          <h1 className="text-3xl font-bold">¡Gracias por tu compra 🤗!</h1>
          <Separator className="dark:border-slate-700" />
          <p className="my-3 text-justify">
            Para gestionar el pago y envío o entrega de tus productos, toma una captura de pantalla 
            a los productos a tu izquierda ⬅️, y envíala a uno de los siguientes números de Whatsapp.
            Te responderemos lo más pronto posible 😉.
          </p>
          <p className="my-3 text-center font-bold">
            📲0979736788
          </p>
          <p className="my-3 text-center font-bold">
           📲0968800615
          </p>
          <div className="flex justify-center">
            <Button onClick={home}>Volver a la tienda y vaciar el carrito!</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSucess;
