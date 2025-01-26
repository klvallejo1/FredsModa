"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageSucess = () => {

    const router = useRouter();

    return ( 
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px.24">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <div className="flex justify-center sm:min-w-[400px]">
                    <Image src="" alt="Success" width={250} height={500} className="rounded-lg"></Image>
                </div>

                <div>
                    <h1 className="text-3xl">!Gracias por tu compra 🤗</h1>
                    <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iusto, excepturi nulla fugit asperiores at, quod facere aperiam possimus suscipit id minus quisquam tenetur esse nobis veniam iste consequuntur in?</p>
                    <p className="my-3">Contáctate a estos números para gestionar tu compra y el envío de la misma :)</p>

                    <Button onClick={()=> router.push("/") }>Volver a la tienda!</Button>
                </div>

            </div>

        </div>
     );
}
 
export default PageSucess;