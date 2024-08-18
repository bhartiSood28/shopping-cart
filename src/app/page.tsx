'use client';
import ProductCard from "./_components/ProductCard";
import { getAllProducts } from "./lib/Product";
import AddToCartButton from "./_components/AddToCartButton";
import useSWR from "swr";
import Loader from "./_components/Loader";

export default function Home() {
  const { data, isLoading } = useSWR(() => 'all-products', () => getAllProducts());
  if (isLoading) {
    return <div className="flex w-full h-[100vh] justify-center items-center"><Loader /></div>
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-gray-400 to-gray-200">
      <div className="grid grid-cols-4 gap-2">
        {data?.products?.map((product: any) => {
          return (
            <div key={product?.id} className="border border-gray-600 p-2 min-h-[280px] bg-white">
              <ProductCard data={product} />
              <AddToCartButton data={product} />
            </div>
          )
        })}
      </div>
    </main>
  );
}
