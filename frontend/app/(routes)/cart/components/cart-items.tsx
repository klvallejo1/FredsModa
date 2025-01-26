import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface CartItemProps {
  product: ProductType;
}

const CartItem = (props: CartItemProps) => {
  const { product } = props;
  const router = useRouter();
  const { removeItem } = useCart();

  return (
    <li className="flex py-6 border-b dark:border-gray-700">
      <div
        onClick={() => router.push(`/product/${product.attributes.slug}`)}
        className="cursor-pointer"
      >
        <img
          className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.attributes.images.data[0].attributes.url}`}
          alt="Product"
        />
      </div>
      <div className="flex justify-between flex-1 px-6">
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold dark:text-white">
              {product.attributes.productName}
            </h2>
            <button
              className={cn(
                "rounded-full flex items-center justify-center bg-white dark:bg-red-800 border dark:border-gray-700 shadow-md p-1 hover:scale-110 transition"
              )}
              onClick={() => removeItem(product.id)}
            >
              <X size={20} className="text-black dark:text-white" />
            </button>
          </div>
          <p className="font-bold dark:text-white">
            {formatPrice(product.attributes.price)}
          </p>

          <div className="flex items-center justify-between gap-3">
            <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
              {product.attributes.size}
            </p>
            <p className="px-2 py-1 text-white bg-yellow-900 rounded-full w-fit">
              {product.attributes.origin}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
