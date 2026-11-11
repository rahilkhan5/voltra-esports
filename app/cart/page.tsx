import type { Metadata } from "next";
import { CartView } from "./CartView";

export const metadata: Metadata = {
  title: "Cart",
  description: "Your Voltra demo cart.",
};

export default function CartPage() {
  return (
    <div className="wrap pt-14 sm:pt-20">
      <h1 className="display text-[clamp(3.4rem,9vw,6rem)]">Cart</h1>
      <CartView />
    </div>
  );
}
