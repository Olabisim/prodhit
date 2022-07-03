
import 'alpinejs'
import './index.css'

const alpinetemplate:string = `
<button id="mobile-icon" className="md:hidden">
<i onClick="changeIcon(this)" className="fa-solid fa-bars"></i>
</button>
`


export const Nav:React.FC = () => {
        return (
                <>

                        <header className="h-20 nav-header mt-2 pt-0">
                                <nav className="relative px-2 py-0">
                                
                                <div className="container mx-auto flex justify-between items-center">
                                        <div className='flex'>

                                                <img src="../../Group.svg" alt="Tailwindcss Navigation" />
                                                <h2 className='Navlogo text-white text-xl font-bold mt-2 p-4 pt-2' > PRODHIT</h2>
                                        </div>

                                        <ul className="hidden md:flex space-x-12">
                                                <li><a href="#ss" className='nav-lisa active-nav-lisa' >Home</a></li>
                                                <li><a href="#ss" className='nav-lisa' >About Us</a></li>
                                                <li className="flex relative group">
                                                <a href="#ss" className="mr-1 nav-lisa" >Our Team</a> 
                                                <i className="fa-solid fa-chevron-down fa-2xs pt-3"></i>
                                                {/* <!-- Submenu starts --> */}
                                                <ul className="absolute bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                                                        <li className="text-sm hover:bg-slate-100 leading-8"><a href="#ss">Webdesign</a></li>
                                                        <li className="text-sm hover:bg-slate-100 leading-8"><a href="#ss">Digital marketing</a></li>
                                                        <li className="text-sm hover:bg-slate-100 leading-8"><a href="#ss">SEO</a></li>
                                                        <li className="text-sm hover:bg-slate-100 leading-8"><a href="#ss">Ad campaigns</a></li>
                                                        <li className="text-sm hover:bg-slate-100 leading-8"><a href="#ss">UX Design</a></li>
                                                </ul>
                                                {/* <!-- Submenu ends --> */}
                                                </li>
                                                <li><a href="#ss"  className='nav-lisa'>Blog</a></li>
                                        </ul>

                                        
                                        <div className='hidden md:flex'>
                                                <a href="#ss" className="Nav-button text-white m-2" role="button">Connect Wallet</a>
                                                <img src="../../avatar.png " className="Nav-avatar mt-3" alt="Tailwindcss Navigation" />

                                        </div>
                                        
                                        {/* <!-- Mobile menu icon --> */}
                                        <div dangerouslySetInnerHTML={{__html: alpinetemplate}} ></ div>
                                        
                                        </div>
                                
                                        {/* <!-- Mobile menu --> */}
                                        <div className="md:hidden flex justify-center mt-3 w-full">
                                                <div id="mobile-menu" className="mobile-menu absolute top-23 w-full"> 
                                                {/* <!-- add hidden here later --> */}
                                                <ul className="bg-gray-100 shadow-lg leading-9 font-bold h-screen">
                                                <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="hssttps://google.com" className="block pl-7">Home</a></li>
                                                <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="#ss" className="block pl-7">News</a></li>
                                                <li className="border-b-2 border-white hover:bg-red-400 hover:text-white">
                                                <a href="#ss" className="block pl-11">Services <i className="fa-solid fa-chevron-down fa-2xs pt-4"></i></a> 
                                                
                                                {/* <!-- Submenu starts --> */}
                                                <ul className="bg-white text-gray-800 w-full">
                                                        <li className="text-sm leading-8 font-normal hover:bg-slate-200"><a className="block pl-16" href="#ss">Webdesign</a></li>
                                                        <li className="text-sm leading-8 font-normal hover:bg-slate-200"><a className="block pl-16" href="#ss">Digital marketing</a></li>
                                                        <li className="text-sm leading-8 font-normal hover:bg-slate-200"><a className="block pl-16" href="#ss">SEO</a></li>
                                                        <li className="text-sm leading-8 font-normal hover:bg-slate-200"><a className="block pl-16" href="#ss">Ad campaigns</a></li>
                                                        <li className="text-sm leading-8 font-normal hover:bg-slate-200"><a className="block pl-16" href="#ss">UX Design</a></li>
                                                </ul>
                                                {/* <!-- Submenu ends --> */}
                                                </li>
                                                <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="#ss" className="block pl-7">About</a></li>
                                                <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="#ss" className="block pl-7">Contact</a></li>
                                                </ul>
                                                </div>
                                        </div>

                                </nav>
                        </header>

                        {/* <hr /> */}

                </>
        )
}