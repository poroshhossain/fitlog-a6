"use client"

import { usePlanSave } from "@/contextApi/PlanSaveContext";
import { ProductType } from "@/type/ProductType"
import { PiNotepadDuotone } from "react-icons/pi";
import { toast } from "react-toastify";

const PlanBtn = ({ data }: { data: ProductType }) => {
    const { plan, setPlan } = usePlanSave();
    const handlePlan = () => {

        const alradyExit = plan.some(pd => pd.id === data.id);
        if (alradyExit) {
            toast.error(`${data.name} alrady added`)
            return
        }
        toast.success(`${data.name} added to Plan`)
        setPlan((prev) => [...prev, data])

    }
    return (
        <button onClick={handlePlan} className="bg-cPrimary text-[14px] hover:bg-cPrimary/30 rounded-2xl font-Inter font-semibold  btn btn-sm md:btn-md lg:btn-lg "><PiNotepadDuotone />Add to today's plan</button>

    )
}
export default PlanBtn