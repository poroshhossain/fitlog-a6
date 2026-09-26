import { ProductType } from "@/type/ProductType";
import ProductCard from "./ProductCard";

const getProductsApi = async ():Promise<ProductType[]> => {
  const res = await fetch('https://api.api-store.workers.dev/api/fitlog');
  const data = res.json();
  return data

}

const Products = async () => {
  const getProducts = await getProductsApi();
  return (
    <section className="bg-cDark py-6 text-cLight">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start pb-4">
          <h2 className="text-[30px] font-Oswald font-bold uppercase">THE LIBRARY</h2>
          <p className="text-[14px] font-Inter font-semibold text-cLight/30">Twelve lifts covering every major muscle group.</p>
        </div>

        <div className="grid grid-cols-1 p-10 sm:p-0 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {
            getProducts.map((product) => <ProductCard key={product.id} product={product} />)
          }
        </div>
      </div>

    </section>
  )
}
export default Products