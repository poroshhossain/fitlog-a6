import NotFound from "@/app/not-found";
import PlanBtn from "@/components/HomeComponent/PlanSave/PlanBtn";
import SaveBtn from "@/components/HomeComponent/PlanSave/SaveBtn";
import { ProductType } from "@/type/ProductType";
import Image from "next/image";
import Link from "next/link";

interface ProductDetailsPageProp {
    params: Promise<{
        productId: string
    }>
}
const ProductDetailsPage = async ({ params }: ProductDetailsPageProp) => {
    // console.log(params);
    const { productId } = await params;
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${productId}`);
    if (!res.ok) {
        return <NotFound />
    }
    const data: ProductType = await res.json();
    const { name, description, muscleGroups, equipment, difficulty, sets, reps, duration, caloriesBurned, rating, instructions } = data;
    return (
        <section className="bg-cDark text-cLight">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 px-4">
                    <div className="relative aspect-square">
                        <Image
                            src={data.image}
                            alt={data.name}
                            fill
                            loading="eager"
                            className="object-cover rounded-[10px]"
                            sizes="(max-width: 768px) 100vw, 50vw"

                        />
                    </div>
                    <div className="px-4">
                        <h1 className="font-Oswald font-bold text-cLight text-[36px] uppercase" >{name}</h1>
                        <p className="font-Inter text-[16px] mb-4 text-cLight/30 capitalize" >{description}</p>
                        <div className="flex items-center gap-3">
                            {
                                muscleGroups.map((mcl, i) => <button key={i} className="bg-cPrimary py-1 px-3 text-cDark rounded-2xl font-Inter font-bold text-[12px]">{mcl}</button>)
                            }
                        </div>
                        <div className="">
                            <div className="space-y-2 my-6 bg-cSecondary p-4 border border-cLight/5 rounded-2xl text-[12px] font-Inter font-bold">
                                <div className="flex justify-between  py-4 px-3 border-b border-cLight/5 ">
                                    <span>EQUIPMENT</span>
                                    <span>{equipment}</span>
                                </div>

                                <div className="flex justify-between py-4 px-3 border-b border-cLight/5">
                                    <span>DIFFICULTY</span>
                                    <span>{difficulty}</span>
                                </div>
                                <div className="flex justify-between py-4 px-3 border-b border-cLight/5">
                                    <span>SETS</span>
                                    <span>{sets}</span>
                                </div>
                                <div className="flex justify-between py-4 px-3 border-b border-cLight/5">
                                    <span>REPS</span>
                                    <span>{reps}</span>
                                </div>
                                <div className="flex justify-between py-4 px-3 border-b border-cLight/5">
                                    <span>DURATION</span>
                                    <span>{duration}Min</span>
                                </div>
                                <div className="flex justify-between py-4 px-3 border-b border-cLight/5">
                                    <span>CALORIES</span>
                                    <span>{caloriesBurned}kcal</span>
                                </div>
                                <div className="flex justify-between py-4 px-3 border-b border-cLight/5">
                                    <span>RATING</span>
                                    <span>{rating}</span>
                                </div>
                            </div>
                            <h2 className="font-Oswald font-bold uppercase py-4">INSTRUCTIONS</h2>
                            <ol className="list-decimal pl-5 space-y-2">
                                {
                                    instructions.map((item, i) => <li className="font-Inter text-[12px]" key={i}>{item}</li>)
                                }
                            </ol>
                            <div className="flex flex-col md:flex-row items-center gap-3 mt-6">
                                <PlanBtn data={data} />
                                <SaveBtn data={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProductDetailsPage