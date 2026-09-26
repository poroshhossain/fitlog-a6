"use client"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { usePlanSave } from "@/contextApi/PlanSaveContext"
import { useState } from "react";
import { ProductType } from "@/type/ProductType";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { FaCheck, FaFireFlameCurved } from "react-icons/fa6"
import { IoTimeOutline } from "react-icons/io5"
import { CiStar } from "react-icons/ci"
import { RxCross1 } from "react-icons/rx"
import { toast } from "react-toastify";


const PlanPage = () => {
  const { plan, setPlan, save, setSave } = usePlanSave();
  const [sortby, setSortby] = useState<'duration' | 'calories' | 'rating'>('duration');

  const sortedItem = (product: ProductType[]) => {
    const sortedProduct = [...product];

    if (sortby === 'duration') {
      sortedProduct.sort((a, b) => b.duration - a.duration)
    } else if (sortby === 'calories') {
      sortedProduct.sort((a, b) => b.caloriesBurned - a.caloriesBurned)
    } else if (sortby === 'rating') {
      sortedProduct.sort((a, b) => b.rating - a.rating)
    }
    return sortedProduct
  }
  const sortedPlan = sortedItem(plan);
  const sortedSave = sortedItem(save);


  const [activeTab, setActiveTab] = useState<'plan' | 'save'>('plan');
  const activeItem = activeTab === 'save' ? save : plan;

  const handleRemovePlan = (item: ProductType) => {
    const deleteItem = plan.filter(pd => pd.id !== item.id);
    toast.info(`${item.name} Remove item form Plan`)
    setPlan(deleteItem)


  }
  const handleRemoveSave = (item: ProductType) => {
    const deleteItem = save.filter(pd => pd.id !== item.id);
    toast.info(`${item.name} Remove item form Saved`)
    setSave(deleteItem)


  }

  const [mark, setMark] = useState<number[]>([])

  const handleMarkAsDone = (id: number) => {
    setMark(prev => [...prev, id])

    toast.success("Workout marked as done!")
  }
  return (
    <section className="bg-cDark text-cLight ">
      <div className="max-w-7xl mx-auto p-4">
        <div className="min-h-screen flex flex-col">

          <div className="py-4">
            <h1 className="text-[30px] font-Oswald font-bold uppercase text-cLight ">MY PLAN</h1>
            <p className="text-[12px] font-Inter capitalize text-cLight/60">Cap of five lifts for today. Finish them, then load more.</p>
          </div>
          <div className="grid  grid-cols-3 justify-center items-center gap-6 bg-cSecondary/60 p-4 rounded-2xl">

            <div className="border-b border-cLight/5 py-3">
              <span className="text-[12px] font-Inter text-cLight/50">Exercises</span>
              <h4 className="font-Oswald font-bold text-[36px] text-cPrimary">
                {
                  activeItem.length
                }
              </h4>
            </div>
            <div className="border-b border-cLight/5 py-3">
              <span className="text-[12px] font-Inter text-cLight/50">Minutes</span>
              <h4 className="font-Oswald font-bold text-[36px] text-cLight">
                {
                  activeItem.reduce((curr, item) => curr + item.duration, 0)
                }
              </h4>
            </div>
            <div className="border-b border-cLight/5 py-3">
              <span className="text-[12px] font-Inter text-cLight/50">Calories</span>
              <h4 className="font-Oswald font-bold text-[36px] text-cLight">
                {
                  activeItem.reduce((curr, item) => curr + item.caloriesBurned, 0)
                }
              </h4>
            </div>
          </div>

          {/* plan tab */}
          <div className="mt-6">
            <Tabs
              value={activeTab}
              onValueChange={(value) => setActiveTab(value)}
              defaultValue="plan" className="w-full mt-6">

              <div className="flex justify-between items-center mb-6">
                <TabsList className='bg-cSecondary border border-cLight/5 p-6'>

                  <TabsTrigger className='p-4 cursor-pointer text-cLight/50 hover:text-cPrimary data-active:bg-cLight/10 data-active:text-cPrimary border data-active:border-cLight/15 ' value="plan">Today’s Plan</TabsTrigger>

                  <TabsTrigger className='p-4 cursor-pointer text-cLight/50 hover:text-cPrimary data-active:bg-cLight/10 data-active:text-cPrimary border data-active:border-cLight/15 ' value="save">Saved</TabsTrigger>

                </TabsList>
                <div className="flex items-center gap-3">
                  <h3 className="text-[12px] font-Inter text-cLight/50">Sort By</h3>
                  <Select
                    value={sortby}
                    onValueChange={(value) => setSortby(value as 'duration' | 'calories' | 'rating')}
                    defaultValue={'duration'}>
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="duration">Duration</SelectItem>
                        <SelectItem value="calories">Calories</SelectItem>
                        <SelectItem value="rating">Rating</SelectItem>

                      </SelectGroup>
                    </SelectContent>
                  </Select>



                </div>
              </div>

              <TabsContent value="plan">
                <div className="bg-cSecondary/30 border border-cLight/10 py-6 px-4 rounded-2xl h-full">
                  {sortedPlan.length ? (
                    <div className="">
                      {
                        sortedPlan.map(item => {
                          return (
                            <section key={item.id} className="py-3 m-3 bg-cSecondary/25">
                              <div className="flex items-center justify-between gap-4">
                                <div className="flex items-start gap-4">
                                  <div className="relative w-37.5 h-25">
                                    <Image src={item.image} alt={item.name}
                                      fill
                                      sizes="50vw"
                                      className="object-cover rounded-[10px]" />
                                  </div>
                                  <div className="px-4">
                                    <h2 className="font-Oswald font-bold text-[16px] text-cLight uppercase">{item.name}</h2>
                                    <p className="text=[12px] font-Inter capitalize text-cLight/50">{item.equipment}</p>
                                    <div className="flex items-center gap-2 font-Inter text-[12px] text-cLight/50 pt-4">
                                      <p className="flex items-center gap-1" ><span className="text-cPrimary text-[14px]" ><IoTimeOutline /></span> {item.duration} min</p>
                                      <p className="flex items-center gap-1" > <span className="text-cPrimary text-[14px]"><FaFireFlameCurved /></span> {item.caloriesBurned} fcal</p>
                                      <p className="flex items-center gap-1" ><span className="text-cPrimary text-[14px]" ><CiStar /></span>{item.rating}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Link href={`/products/${item.id}`}><Button className='text-[12px] font-Inter py-3 px-5 cursor-pointer rounded-2xl  hover:bg-cPrimary hover:text-cDark border border-cLight/50'>View Details</Button></Link>
                                  {!mark.includes(item.id) && (
                                    <Button onClick={() => handleMarkAsDone(item.id)} className='text-[12px] font-Inter py-3 px-5 cursor-pointer rounded-2xl bg-cPrimary text-cDark hover:bg-cPrimary hover:text-cDark border border-cLight/50'><FaCheck /> Mark as Done</Button>
                                  )

                                  }

                                  <Button onClick={() => handleRemovePlan(item)} className='text-[12px] font-Inter hover:text-cPrimary font-bold cursor-pointer hover:bg-cPrimary/10'><RxCross1 /></Button>
                                </div>
                              </div>
                            </section>
                          )
                        })
                      }
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center p-10">
                      <h2 className="text-[20px] font-bold font-Oswald uppercase">NOTHING HERE yet</h2>
                      <p className="font-Inter text-[12px] text-cLight/50 pb-6">Browse the library and add a lift to get today moving.</p>
                      <Link href={'/'}><Button className='bg-cPrimary hover:bg-cPrimary/5 hover:text-cPrimary text-cDark cursor-pointer text-[12px] font-bold p-4 rounded-2xl '>Go to workouts</Button></Link>
                    </div>
                  )}
                </div>
              </TabsContent>


              <TabsContent value="save">
                <div className="bg-cSecondary/30 border border-cLight/10 py-6 px-4 rounded-2xl h-full">
                  {sortedSave.length ? (
                    <div className="">
                      {
                        sortedSave.map(item => {
                          return (
                            <section key={item.id} className="py-3 m-3 bg-cSecondary/25">
                              <div className="flex items-center justify-between gap-4">
                                <div className="flex items-start gap-4">
                                  <div className="relative w-37.5 h-25">
                                    <Image src={item.image} alt={item.name}
                                      fill
                                      sizes="50vw"
                                      className="object-cover rounded-[10px]" />
                                  </div>
                                  <div className="px-4">
                                    <h2 className="font-Oswald font-bold text-[16px] text-cLight uppercase">{item.name}</h2>
                                    <p className="text=[12px] font-Inter capitalize text-cLight/50">{item.equipment}</p>
                                    <div className="flex items-center gap-2 font-Inter text-[12px] text-cLight/50 pt-4">
                                      <p className="flex items-center gap-1" ><span className="text-cPrimary text-[14px]" ><IoTimeOutline /></span> {item.duration} min</p>
                                      <p className="flex items-center gap-1" > <span className="text-cPrimary text-[14px]"><FaFireFlameCurved /></span> {item.caloriesBurned} fcal</p>
                                      <p className="flex items-center gap-1" ><span className="text-cPrimary text-[14px]" ><CiStar /></span>{item.rating}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Link href={`/products/${item.id}`}><Button className='text-[12px] font-Inter py-3 px-5 cursor-pointer rounded-2xl  hover:bg-cPrimary hover:text-cDark border border-cLight/50'>View Details</Button></Link>
                                  {!mark.includes(item.id) && (
                                    <Button onClick={() => handleMarkAsDone(item.id)} className='text-[12px] font-Inter py-3 px-5 cursor-pointer rounded-2xl bg-cPrimary text-cDark hover:bg-cPrimary hover:text-cDark border border-cLight/50'><FaCheck /> Mark as Done</Button>
                                  )

                                  }

                                  <Button onClick={() => handleRemoveSave(item)} className='text-[12px] font-Inter hover:text-cPrimary font-bold cursor-pointer hover:bg-cPrimary/10'><RxCross1 /></Button>
                                </div>
                              </div>
                            </section>
                          )
                        })
                      }
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center p-10">
                      <h2 className="text-[20px] font-bold font-Oswald uppercase">NOTHING HERE yet</h2>
                      <p className="font-Inter text-[12px] text-cLight/50 pb-6">Browse the library and add a lift to get today moving.</p>
                      <Link href={'/'}><Button className='bg-cPrimary hover:bg-cPrimary/5 hover:text-cPrimary text-cDark cursor-pointer text-[12px] font-bold p-4 rounded-2xl '>Go to workouts</Button></Link>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>


        </div>
      </div>
    </section>
  )
}
export default PlanPage