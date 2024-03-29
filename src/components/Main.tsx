import {FirstMainSvg, SecondMainSvg, LandingPageSvg} from '../components/svg/BodySvgs'
import '../css/starbackground.css'
import { Loader } from './Loader'
import { useState, useRef, useEffect } from 'react'
import '../css/slideanimation.css'
import { Coin} from '../components/Coin'

interface cardArrayTypes {
        image: string,
        h2: string,
        p: any,
        submit: string,
        plus: boolean
}


const cardArray:cardArrayTypes[] = [
        { image: 'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vbmV5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60', h2: 'ethereum', p: <>You Can Submit Your Song <br />For Distribution</>, submit: 'Submit Music', plus: true },
        { image: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uZXl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', h2: 'solana', p: <>Roddy Ricch <br />85% Available Stocks</>, submit: 'Execute Order', plus: false },
        { image: 'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vbmV5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60', h2: 'bitcoin', p: <>Chris Brown ft Drake <br />65% Available Stocks</>, submit: 'Execute Order', plus: false },
        { image: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uZXl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', h2: 'anything', p: <>You Can Submit Your Song <br />For Distribution</>, submit: 'Submit Music', plus: true }
]


export const Main:React.FC = () => {

        const [ loading, setLoading ] = useState<boolean>(false)
        const [ musicalHead, setmusicalHead ] = useState<boolean>(false)
        const [ musicalSub, setmusicalSub ] = useState<boolean>(false)
        const [ musicalSubContent, setmusicalSubContent ] = useState<boolean>(false)
        const [ aboutPart1, setaboutPart1 ] = useState<boolean>(false)
        const [ aboutPart2, setaboutPart2 ] = useState<boolean>(false)
        const [ teamPart, setteamPart ] = useState<boolean>(false)
        const [ teamPart2, setteamPart2 ] = useState<boolean>(false)
        
        const [ rangeValue, setrangeValue ] = useState<number>(50)

        const landingpageText = useRef<any>(null)

        const rangeControl = useRef<any>(null)

        const rangeControlDiv = useRef<any>(null)

        // input range functionality
        // function decimalSeparator(number:number) {
        //         return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        // }


        const handleRange = (e: any) => {
                setrangeValue(e.currentTarget.value)

        }
                        // rangeControlDiv.current.tex

        
        // input range functionality end
        
        const handleX = () => {
                setLoading(true)
                setTimeout(() => setLoading(false), 2000)
                console.log('clicked')
        }

        const myScrollFunc = function () {
                let y = window.scrollY;
                console.log(y)

                y >= 260 ? setmusicalHead(true) : setmusicalHead(false)
                
                y >= 320 ? setmusicalSub(true) : setmusicalSub(false)

                y >= 500 ? setmusicalSubContent(true) : setmusicalSubContent(false)

                y >= 1550 ? setaboutPart1(true) : setaboutPart1(false) 

                y >= 2150 ? setaboutPart2(true) : setaboutPart2(false) 

                y >= 2850 ? setteamPart(true) : setteamPart(false) 

                y >= 2950 ? setteamPart2(true) : setteamPart2(false) 
                
        }

        useEffect(() => {
                window.addEventListener("scroll", myScrollFunc)
        }, [])

        return (
                <div>
                        {/* <div className='stars'></div> */}
                        <div className='stars2'></div>
                        <div id='stars2'></div>
                        <div id='stars3'></div>
                        <div className="main-main p-10 pb-0 pt-0 lg:pt-10" style={{overflow: 'hidden'}}>
                                <div className="main__bg__cover">
                                        {/* <div className="main__bg"></div>
                                        <div className="main__bg layer1"></div>
                                        <div className="main__bg layer2"></div> */}
                                </div>
                                                        
                                <div className="main-main-in">
                                        <div className="text-white main_header_content bounceIn" ref={landingpageText}>

                                                <h2 className="text-3xl lg:text-4xl md:pt-20 leading-relaxed lg:leading-snug font-semibold tracking-wide font-extra-bold heading_main_text animate-in">
                                                        Become A <span>Shareholder</span> <br /> Of Your Favorite <br /> <span>Music</span>

                                                </h2>
                                                <p className="tracking-widest font-semibold mt-5 mb-5 lg:text-lg shade-white pb-10 "> 
                                                        Enabling You Become A Shareholder <br /> Of Musics From Spotify.
                                                </p>
                                                <a href="#connect" className="Nav-button text-white mt-3" role="button" style={{padding: '15px 40px !important', marginTop: '30px'}} onClick={() => handleX()} >
                                                        {
                                                                loading
                                                                ?
                                                                <Loader />
                                                                :
                                                                'Connect Wallet'
                                                        }
                                                </a>

                                        </div>
                                        <div className="mt-6">
                                                <div className="header_svg_container slideLeftToRight">

                                                        <LandingPageSvg />

                                                </div>

                                        </div>

                                </div>

                        </div>
                        <div className="main-main2 text-white text-center mt-32 lg:mt-0 mb-32" >
                                
                        {/* {

                                musicalHead
                                        &&
                                         */}
                                <div className={` ${musicalHead ? 'visibility_false slideDown' : 'visibility_true '}`}>
                                        <h2 className={`font-normal text-3xl lg:text-4xl lg:tracking-wide  ${musicalHead ? 'visibility_false slideDown' : 'visibility_true '}`}>Musical Genres</h2>
                                        <div className="under_musical"></div>
                                </div>
                        {/* } */}
                                <div className="mt-4 lg:mt-7">
                                        <div className={`ul-main ${musicalSub ? 'visibility_false slideDown' : 'visibility_true '}`}>
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

                                                <div className={`main-content ${musicalSubContent ? 'visibility_false slideDown' : 'visibility_true '}`}>
                                                        {
                                                                cardArray.map((e, i) => 
                                                                        (
                                                                                <div className="main-content-box p-4 text-left ml-8 mr-8" key={i}>  

                                                                                    
                                                                                        <h3 className='pb-5 uppercase text-base md:text-xl font-black tracking-widest'>
                                                                                                {e.h2}   
                                                                                        </h3>
                                                                                        {/* <img src={`${e.image}`} alt="fir" /> */}
                                                                                        < Coin />
                                                                                        {/* <h2 className="text-lg lg:text-2xl p-2 pl-0 lg:tracking-wide ">{e.h2}</h2>
                                                                                        <p className="tracking-wide text-sm lg:text-lg mb-7">{e.p}</p> */}

                                                                                        <div ref={rangeControlDiv} className="range_cont pt-10">

                                                                                                
                                                                                                <h3 className={`pb-5 ${Number(rangeValue) === Number(1000) && 'gold'}`}>
                                                                                                        $ {rangeValue}        
                                                                                                </h3>

                                                                                                <input 
                                                                                                        type="range"
                                                                                                        min="100"
                                                                                                        max="1000"
                                                                                                        value={rangeValue}
                                                                                                        ref={rangeControl}
                                                                                                        onInput={handleRange}
                                                                                                        className='mb-10 range_input'
                                                                                                />
                                                                                        </div>
                                                                                        <button className="text-center tracking-widest text-sm lg:text-xl font-medium capitalize">
                                                                                                Buy Shares
                                                                                        </button>
                                                                                </div>
                                                                        )  
                                                                )
                                                        }
                                                </div>


                                        </div>
                                </div>
                        </div>

                        <div className="main-main3 text-white p-1 pb-16 md:pb-1">

                                <div className="container mx-auto pb-20 lg:pb-0 ">
                                                
                                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-center m-5 mt-0 ${aboutPart1 ? 'visibility_false slideLeftToRight' : 'visibility_true '}`}>
                                                <div className={`flex justify-center`}>
                                                        {/* <img src="../../crypto_portfolio_2jy5.svg" alt="last pic" /> */}
                                                        <FirstMainSvg />
                                                </div>

                                                <div className={`justify-center w-full md:pr-24 md:pt-7 items-center text-center md:text-left adjust_margintop_about_section`}>
                                                        <h2 className="text-2xl lg:text-4xl font-normal ">What is <span>Prodhit? </span></h2>
                                                        <br />
                                                        <p className="text-sm lg:text-xl tracking-wider leading-relaxed font-normal p-10 md:p-0">     Prodhit Is The Fastest Growing Music
                                                                Platform Where You Can Buy Shares
                                                                From Songs On Spotify And Also Submit 
                                                                Your Song For Distribution And Earn.
                                                        </p>
                                                </div>
                                        </div>
                                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-center m-5 mt-0 lg:pl-14 second_grid_adjustment -mt-28 md:-mt-20 ${aboutPart2 ? 'visibility_false slideRightToLeft' : 'visibility_true '}`}>
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

                        <div className={`main-main4 text-center text-white mt-24 md:mt-36`}>
                                <div className={`${teamPart ? 'visibility_false slideDown' : 'visibility_true '}`}>
                                        <h2 className={`text-3xl lg:text-4xl tracking-wide mb-5`}>Our <span>Team</span></h2>
                                        <p className="tracking-wide text-base lg:text-xl" >Our Highly Qualified And Skilled Team</p>
                                </div>
                                <div className={`main-main4-overflow ${teamPart2 ? 'visibility_false slideDown' : 'visibility_true '}`}>
                                      
                                        <div className="main-main4-contain">
                                                
                                                <div className="m-10 loading">
                                                        <div className="main-main4-div1 image"></div>
                                                        <div className="main-main4-div2 loading m-10 ml-0"></div>
                                                </div>
                                                <div className="m-10 loading">
                                                        <div className="main-main4-div1 image"></div>
                                                        <div className="main-main4-div2 m-10 ml-0"></div>
                                                </div>
                                                <div className="m-10 loading">
                                                        <div className="main-main4-div1 image"></div>
                                                        <div className="main-main4-div2 m-10 ml-0"></div>
                                                </div>
                                        </div>  
                                </div>

                        </div>
                
                </div>
        )
}