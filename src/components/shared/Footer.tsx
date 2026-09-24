import FooterLogo from '@/assets/footer-logo.png';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
    const footerItem = {
        name: 'footer logo',
        path: '/',
        src: FooterLogo,
        copyright: '© 2026 FitLog — Workout Library. Train hard, log honest.'
    }
    return (
        <footer className="bg-cDark py-6 border-t border-cLight/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-4 sm:flex-row justify-between items-center  ">
                    <Link href={`${footerItem.path}`} className="flex items-center gap-2" >
                        <Image src={footerItem.src} className='w-5' alt={footerItem.name} />
                        <span className='text-cLight text-[14px] font-bold font-Oswald capitalize'>FITLOG</span>
                    </Link>

                    <p className='text-cLight/50 text-[12px] font-Inter capitalize text-center'>{footerItem.copyright}</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer