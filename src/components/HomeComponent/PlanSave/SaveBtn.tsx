
"use client"

import { usePlanSave } from "@/contextApi/PlanSaveContext";
import { ProductType } from "@/type/ProductType";
import { CiBookmark } from "react-icons/ci"
import { toast } from "react-toastify";

const SaveBtn = ({ data }: { data: ProductType }) => {
    const { save, setSave } = usePlanSave();
    const handleSave = () => {

        const alradyExit = save.some(pd => pd.id === data.id);
        if (alradyExit) {
            toast.error(`${data.name} alrady added`)
            return
        }
        toast.success(`${data.name} added to Saved`)
        setSave((prev) => [...prev, data])

    }

    return (
        <button onClick={handleSave}  className=" text-[14px] font-Inter font-semibold hover:bg-cPrimary/30 rounded-2xl btn-outline btn border border-cLight/10 text-cLight  btn-xs sm:btn-sm md:btn-md lg:btn-lg"><CiBookmark />Save for later</button>

    )
}
export default SaveBtn