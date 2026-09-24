import { ProductType } from "@/type/ProductType";

const ProductDetailsPage = async({params}) => {
const {productId} =await params;
console.log(productId);
  return (
    <div>ProductDetailsPage</div>
  )
}
export default ProductDetailsPage