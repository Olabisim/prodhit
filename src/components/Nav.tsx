
import 'alpinejs'
import '../css/index.css'
import { useRef, useState } from 'react'
import {Loader} from './Loader'

// const alpinetemplate:string = `
// <button id="mobile-icon" className="md:hidden">
// <i onClick="changeIcon(this)" className="fa-solid fa-bars"></i>
// </button>
// `


export const Nav:React.FC = () => {

        const [toggle, setToggle] = useState<boolean>(false)
        const [ loading, setLoading ] = useState<boolean>(false)

        const li1 = useRef<any>(null)
        const li2 = useRef<any>(null)
        const li3 = useRef<any>(null)
        const mobileMenu = useRef<any>(null)

        const data:number = 45
        const data2:number = 0
        const data3:number = 16

        const handleX = () => {
                // li1.current.transform.rotate('23deg')
                li1.current.style.transform = `rotate(${toggle ? data2 : data }deg)`
                li2.current.style.opacity = `${toggle ? 1 : data2 }`
                li3.current.style.transform = `rotate(-${toggle ? data2 : data}deg)`
                li3.current.style.marginTop = `-${toggle ? data2 : data3}px`
                mobileMenu.current.style.left = `-${toggle ? 200 : 0}%`
                // mobileMenu.current.style.overflow = `-${toggle ? 'hidden' : 'auto'}`
                setToggle(!toggle)
        }

        const handleConnect = () => {
                setLoading(true)
                setTimeout(() => setLoading(false), 2000)
                console.log('clicked')
        }

        return (
                <>

                        <header className="h-20 nav-header mt-2 pt-0 p-10">
                                <nav className="relative px-0 lg:px-2 py-0">
                                
                                <div className="container mx-auto flex justify-between items-center">
                                        <div className='flex'>

                                                <img src="../../Group.svg" alt="Tailwindcss Navigation" className='image-header' />
                                                <h2 className='Navlogo text-white text-xl lg:text-2xl font-thin mt-2 p-4 pt-2 tracking-wide' > PRODHIT</h2>
                                        </div>

                                        <ul className="hidden lg:flex space-x-12">
                                                <li><a href="#ss" className='nav-lisa active-nav-lisa hover:tracking-widest' >Home</a></li>
                                                <li><a href="#ss" className='nav-lisa hover:tracking-widest' >About Us</a></li>
                                                <li className="flex relative group">
                                                <a href="#ss" className="mr-1 nav-lisa hover:tracking-widest" >Our Team</a> 
                                                <i className="fa-solid fa-chevron-down fa-2xs pt-3"></i>
                                                {/* <!-- Submenu starts --> */}
                                                <ul className="absolute bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                                                        <li className="text-sm hover:bg-slate-100 leading-8 submenu_link p-4 hover:tracking-wider"><a href="#ss">Webdesign</a></li>
                                                        <li className="text-sm hover:bg-slate-100 leading-8 submenu_link p-4 hover:tracking-wider"><a href="#ss">Digital marketing</a></li>
                                                        <li className="text-sm hover:bg-slate-100 leading-8 submenu_link p-4 hover:tracking-wider"><a href="#ss">SEO</a></li>
                                                        <li className="text-sm hover:bg-slate-100 leading-8 submenu_link p-4 hover:tracking-wider"><a href="#ss">Ad campaigns</a></li>
                                                        <li className="text-sm hover:bg-slate-100 leading-8 submenu_link p-4 hover:tracking-wider"><a href="#ss">UX Design</a></li>
                                                </ul>
                                                {/* <!-- Submenu ends --> */}
                                                </li>
                                                <li><a href="#ss"  className='nav-lisa hover:tracking-widest'>Blog</a></li>
                                        </ul>

                                        
                                        <div className='hidden lg:flex'>
                                                <a href="#ss" className="Nav-button text-white m-2" role="button" onClick={() => handleConnect()}>
                                                        {
                                                                loading
                                                                ?
                                                                <Loader />
                                                                :
                                                                'Connect Wallet'
                                                        }
                                                </a>
                                                <img src="../../avatar.png " className="Nav-avatar mt-3" alt="Tailwindcss Navigation" />

                                        </div>
                                        
                                        {/* <!-- Mobile menu icon --> */}
                                        {/* <div dangerouslySetInnerHTML={{__html: alpinetemplate}} ></ div> */}
                                                <div className='block lg:hidden mobile_nav_icon p-3' onClick={() => handleX()}>
                                                        <div ref={li1} ></div>
                                                        <div ref={li2}></div>
                                                        <div ref={li3}></div>
                                                </div>
                                        </div>
                                
                                        {/* <!-- Mobile menu --> */}
                                        <div className="lg:hidden flex justify-center mt-3 w-full">
                                                <div id="mobile-menu" className="mobile-menu absolute top-23 w-full" ref={mobileMenu}> 
                                                        {/* <!-- add hidden here later --> */}
                                                        <ul className="main_menu_bg shadow-lg leading-9 font-bold h-screen">
                                                                <li className="pl-4 main_menu_bg_li "><a href="#home" className="block pl-10">Home</a></li>
                                                                <li className="pl-4 main_menu_bg_li "><a href="#news" className="block pl-10">News</a></li>
                                                                <li className="main_menu_bg_li">
                                                                <a href="#services" className="block pl-14">Services <i className="fa-solid fa-chevron-down fa-2xs pt-4"></i></a> 
                                                                
                                                                {/* <!-- Submenu starts --> */}
                                                                <ul className="bg-white text-gray-800 w-full">
                                                                        <li className="text-sm leading-8 font-normal hover:bg-slate-200 font-extrabold main_menu_bg_li_inner"><a className="block pl-16" href="#ss">Web design</a></li>
                                                                        <li className="text-sm leading-8 font-normal hover:bg-slate-200 font-extrabold main_menu_bg_li_inner"><a className="block pl-16" href="#ss">Digital marketing</a></li>
                                                                        <li className="text-sm leading-8 font-normal hover:bg-slate-200 font-extrabold main_menu_bg_li_inner"><a className="block pl-16" href="#ss">SEO</a></li>
                                                                        <li className="text-sm leading-8 font-normal hover:bg-slate-200 font-extrabold main_menu_bg_li_inner"><a className="block pl-16" href="#ss">Ad campaigns</a></li>
                                                                        <li className="text-sm leading-8 font-normal hover:bg-slate-200 font-extrabold main_menu_bg_li_inner"><a className="block pl-16" href="#ss">UX Design</a></li>
                                                                </ul>
                                                                {/* <!-- Submenu ends --> */}
                                                                </li>
                                                                <li className="pl-4 main_menu_bg_li "><a href="#about" className="block pl-10">About</a></li>
                                                                <li className="pl-4 main_menu_bg_li "><a href="#contact" className="block pl-10">Contact</a></li>
                                                        </ul>
                                                </div>
                                        </div>

                                </nav>
                        </header>

                        {/* <hr /> */}

                </>
        )
}