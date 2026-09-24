import { ProductType } from "@/type/ProductType"
import Image from "next/image";
import Link from "next/link";
import { MdAccessTime } from "react-icons/md";
import kcalIcon from "@/assets/kcal.png"
import { IoMdStarOutline } from "react-icons/io";
import { GoFlame } from "react-icons/go";

interface ProductCardProp {
    product: ProductType
}
const ProductCard = ({ product }: ProductCardProp) => {
    console.log(product);
    return (
        <Link href={`/products/${product.id}`} className="bg-cSecondary rounded-2xl">
            <div className="relative aspect-square overflow-hidden w-full h-50 mx-auto  rounded-t-2xl">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                />
            </div>
            <div className="px-6 py-4">
                <div className="flex items-center gap-4 py-4">
                    <button className="bg-cPrimary py-1 px-3 text-cDark rounded-2xl font-Inter font-bold text-[12px]">{product.muscleGroups[0]}</button>
                    <button className="bg-cPrimary py-1 px-3 text-cDark rounded-2xl font-Inter font-bold text-[12px]">{product.muscleGroups[1]}</button>
                </div>
                <h2 className="font-Oswald text-[18px] font-bold text-cLight uppercase">{product.name}</h2>
                <p className="font-Inter text-[12px] text-cLight/45 py-2">{product.equipment}</p>

                <div className="border-t border-cLight/5 flex items-center gap-4 py-4 text-[12px] capitalize text-cLight/45 font-Inter">
                    <li className="flex items-center gap-2 text-[14px]" ><MdAccessTime />{product.duration} min</li>
                    <li className="flex items-center gap-2 text-[14px]" > <GoFlame /> {product.caloriesBurned}kcal</li>
                    <li className="flex items-center gap-2 text-[14px]" ><IoMdStarOutline />{product.rating}</li>
                </div>
            </div>
        </Link>
    )
}
export default ProductCard