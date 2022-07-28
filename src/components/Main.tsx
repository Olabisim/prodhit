import {FirstMainSvg, SecondMainSvg, LandingPageSvg} from '../components/svg/BodySvgs'


export const Main:React.FC = () => {
        return (
                <div>
                        
                        <div className="main-main p-10 pb-0 pt-0 lg:pt-10">

                                <div className="main-main-in">

                                        <div className="text-white main_header_content">

                                                <h2 className="text-3xl lg:text-5xl md:pt-20 leading-relaxed lg:leading-snug font-semibold tracking-wide font-extra-bold heading_main_text">
                                                        Become A <span>Shareholder</span> <br /> Of Your Favorite <br /> <span>Music</span>

                                                </h2>
                                                <p className="tracking-widest font-semibold mt-5 mb-5 lg:text-lg shade-white pb-10"> 
                                                        Enabling You Become A Shareholder <br /> Of Musics From Spotify.
                                                </p>
                                                <a href="#ss" className="Nav-button text-white mt-3" role="button" style={{padding: '15px 40px !important', marginTop: '30px'}} >Connect Wallet</a>

                                        </div>
                                        <div className="">
                                                <div className="header_svg_container">

                                                <LandingPageSvg />

                                                        {/* <div className="w-1/2 m-3 mr-0 nav-landingside-1">
                                                                <img src="../../Rectangle-1.png" alt="first pic" width='300px' />
                                                        </div>
                                                        <div className="w-1/2 m-3 nav-landingside-2">
                                                                <img src="../../Rectangle-2.png" alt="first pic" width='300px' />

                                                        </div>

                                                </div>  
                                                <div className="flex">

                                                        <div className="w-1/2 m-3 mr-0 nav-landingside-3">
                                                                <img src="../../Rectangle-3.png" alt="first pic" width='300px' />
                                                        </div>
                                                        <div className="w-1/2 m-3 nav-landingside-4">
                                                                <img src="../../Rectangle-4.png" alt="first pic" width='300px' />

                                                        </div> */}

                                                </div>

                                        </div>

                                </div>

                        </div>

                        <div className="main-main2 text-white text-center mt-32 lg:mt-0 mb-32" >
                                <div>
                                        <h2 className="font-normal text-3xl lg:text-4xl lg:tracking-wide">Musical Genres</h2>
                                        <div className="under_musical"></div>
                                </div>
                                <div className="mt-4 lg:mt-7">
                                        <div className="ul-main">
                                                <ul>
                                                        <li><a href="#jzz">Jazz</a></li>
                                                        <li><a href="#jzz" className="active" >Hip-Hop</a></li>
                                                        <li><a href="#jzz">Blues</a></li>
                                                        <li><a href="#jzz">Rock</a></li>
                                                        <li><a href="#jzz">Funk</a></li>
                                                        <li><a href="#jzz">Funk</a></li>
                                                        <li><a href="#jzz">Funk</a></li>
                                                </ul>
                                        </div>
                                        <div className="ul-main mt-10 lg:mt-14">

                                                <div className="main-content">
                                                        <div className="main-content-box p-4 text-left ml-8 mr-8">
                                                                
                                                                <img src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vbmV5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="fir" />
                                                                <h2 className="text-lg lg:text-2xl p-2 pl-0 lg:tracking-wide ">Are you a Music Artist ?</h2>
                                                                <p className="tracking-wide text-sm lg:text-lg mb-7">You Can Submit Your Song <br />For Distribution</p>
                                                                <button className="text-center tracking-wide text-sm lg:text-xl font-medium">
                                                                        <span className="text-2xl lg:text-4xl pr-4">+</span>
                                                                        Submit Music
                                                                </button>
                                                        </div>

                                                        <div className="main-content-box p-4 text-left ml-8 mr-8">
                                                                
                                                                <img src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uZXl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="fir" />
                                                                <h2 className="text-lg lg:text-2xl p-2 pl-0 lg:tracking-widest">The Box</h2>
                                                                <p className="tracking-wide text-sm lg:text-lg mb-7">Roddy Ricch <br />85% Available Stocks </p>
                                                                <button className="text-center tracking-wide text-sm lg:text-xl font-medium">
                                                                        Execute Order
                                                                </button>
                                                        </div>
                                                        <div className="main-content-box p-4 text-left ml-8 mr-8">
                                                                
                                                                <img src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vbmV5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="fir" />
                                                                <h2 className="text-lg lg:text-2xl p-2 pl-0 lg:tracking-widest">No Guidance</h2>
                                                                <p className="tracking-wide text-sm lg:text-lg mb-7">Chris Brown ft Drake <br />65% Available Stocks</p>
                                                                <button className="text-center tracking-wide text-sm lg:text-xl font-medium">
                                                                        Execute Order
                                                                </button>
                                                        </div>
                                                        <div className="main-content-box p-4 text-left ml-8 mr-8">
                                                                
                                                                <img src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uZXl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="fir" />
                                                                <h2 className="text-lg lg:text-2xl p-2 pl-0 lg:tracking-widest">Are you a Music Artist ?</h2>
                                                                <p className="tracking-wide text-sm lg:text-lg font-bold mb-7">You Can Submit Your Song <br />For Distribution</p>
                                                                <button className="text-center tracking-wide text-sm lg:text-xl font-medium">
                                                                        <span className="text-2xl lg:text-4xl pr-4">+</span>
                                                                        Submit Music
                                                                </button>
                                                        </div>
                                                </div>


                                        </div>
                                </div>
                        </div>

                        <div className="main-main3 text-white p-1 pb-16 md:pb-1">

                                <div className="container mx-auto">
                                                
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center m-5 mt-0">
                                                <div className="flex justify-center">
                                                        {/* <img src="../../crypto_portfolio_2jy5.svg" alt="last pic" /> */}
                                                        <FirstMainSvg />
                                                </div>

                                                <div className="justify-center w-full md:pr-24 md:pt-7 items-center text-center md:text-left adjust_margintop_about_section">
                                                        <h2 className="text-2xl lg:text-4xl font-normal ">What is <span>Prodhit? </span></h2>
                                                        <br />
                                                        <p className="text-sm lg:text-xl tracking-wider leading-relaxed font-normal p-10 md:p-0">     Prodhit Is The Fastest Growing Music
                                                                Platform Where You Can Buy Shares
                                                                From Songs On Spotify And Also Submit 
                                                                Your Song For Distribution And Earn.
                                                        </p>
                                                </div>
                                        </div>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center m-5 mt-0 lg:pl-14 second_grid_adjustment -mt-28 md:-mt-20">
                                                <div className="justify-center w-full md:pr-10 md:pt-7 items-center text-center md:text-left adjust_margintop_about_section2">
                                                        <h2 className="text-2xl lg:text-4xl font-normal ">How it <span>Works </span></h2>
                                                        <br />
                                                        <p className="text-sm lg:text-xl tracking-wider leading-relaxed font-normal p-10 md:p-0">     
                                                                It’s Easy.After Connecting Your Wallet
                                                                And Buying Shares From Any Song By
                                                                Clicking On “EXECUTE ORDER”,All Money
                                                                Collected Is Used For Advertisement,
                                                                Generating 10 BILLION Youtube Impression
                                                                With As Low As $8,000.Once Spotify and
                                                                Apple Pays For Streams,The Payment Will
                                                                Be Distributed To A Smart Contract Which
                                                                Will Pay Out Shareholders.
                                                        </p>
                                                </div>
                                                <div className="flex justify-center">
                                                        <SecondMainSvg />
                                                </div>

                                        </div>
                                
                                </div>
                                
                        </div>

                        <div className="main-main4 text-center text-white mt-24 md:mt-36">
                                <div>
                                        <h2 className="text-3xl lg:text-4xl tracking-wide mb-5">Our <span>Team</span></h2>
                                        <p className="tracking-wide text-base lg:text-xl" >Our Highly Qualified And Skilled Team</p>
                                </div>
                                <div className="main-main4-overflow">
                                      
                                        <div className="main-main4-contain">
                                                
                                                <div className="m-10 loading">
                                                        <div className="main-main4-div1 image"></div>
                                                        <div className="main-main4-div2 loading m-10 ml-0"></div>
                                                        {/* <div className="main-main4-div3"></div> */}
                                                </div>
                                                <div className="m-10 loading">
                                                        <div className="main-main4-div1 image"></div>
                                                        <div className="main-main4-div2 m-10 ml-0"></div>
                                                        {/* <div className="main-main4-div3"></div> */}
                                                </div>
                                                <div className="m-10 loading">
                                                        <div className="main-main4-div1 image"></div>
                                                        <div className="main-main4-div2 m-10 ml-0"></div>
                                                        {/* <div className="main-main4-div3"></div> */}
                                                </div>
                                        </div>  
                                </div>

                        </div>
                
                </div>
        )
}