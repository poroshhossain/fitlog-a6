"use client"

import { ProductType } from "@/type/ProductType";
import React, { createContext, useContext, useState } from "react"

interface PlanSaveType {
    plan: ProductType[]
    setPlan: React.Dispatch<React.SetStateAction<ProductType[]>>
    save: ProductType[]
    setSave: React.Dispatch<React.SetStateAction<ProductType[]>>
}

const planSaveCreateContext = createContext<PlanSaveType | null>(null);

export const usePlanSave = () => {
    const context = useContext(planSaveCreateContext);
    if (!context) {
        throw new Error('context Error')
    }
    return context
}

const PlanSaveContext = ({ children }: { children: React.ReactNode }) => {
    const [plan, setPlan] = useState<ProductType[]>([]);
    const [save, setSave] = useState<ProductType[]>([]);

    const sharedState = {
        plan,
        setPlan,
        save,
        setSave
    }
    return (
        <planSaveCreateContext.Provider value={sharedState}>{children}</planSaveCreateContext.Provider>
    )
}
export default PlanSaveContext
