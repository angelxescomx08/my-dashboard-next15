import { CartCounter } from "@/app/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Shopping cart',
 description: 'Counter page',
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <span>Productos en el carrito</span>
      <CartCounter value={20} />
    </div>
  );
}