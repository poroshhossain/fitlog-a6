
import HeroImg from '@/assets/banner.png'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
    const heroItem = {
        title: "Train WITH INTENT. LOG EVERY SET.",
        subTitle: "WORKOUT LIBRARY",
        des: "FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.",
        btn: "BROWSE WORKOUts",

        img: HeroImg

    }
    return (
        <section className='bg-cDark py-10'>
            <div className="max-w-7xl mx-auto bg-cSecondary rounded-2xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 py-14 px-4">
                    <div className="text-cLight space-y-2">
                        <h4 className='font-Inter text-[12px] text-cPrimary uppercase'>{heroItem.subTitle}</h4>
                        <h1 className='font-Oswald text-[60px] font-bold leading-none uppercase'>{heroItem.title}</h1>
                        <p className='font-Inter text-[16px] text-cLight/45 capitalize mb-10 mt-5'>{heroItem.des}</p>
                        <Link href={'/'} className=' bg-cPrimary py-2 px-3 text-cDark rounded-[10px] uppercase text-[12px] font-Inter font-bold hover:bg-cPrimary/45' >{heroItem.btn}</Link>
                    </div>
                    <div className="mx-auto py-6 w-full sm:w-1/2 ">
                        <Image src={heroItem.img} alt={heroItem.title} loading='eager' className='w-full h-auto' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner