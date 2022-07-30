
import { useState } from 'react'
import { Loader } from './Loader'

export const Footer = () => {
        
        const [ loading, setLoading ] = useState<boolean>(false)
        
        const handleX = () => {
                setLoading(true)
                setTimeout(() => setLoading(false), 2000)
                console.log('clicked')
        }

        return (
                <div className="footer text-white mt-20 pt-5">
                        <div className="container">
                                
                                <div className="footer-in m-5 grid grid-cols-1 lg:grid-cols-3 tracking-wide leading-loose">
                                        <div className="footerin2 flex lg:justify-center m-5">
                                                <div>
                                                        <h2 className="m-4 ml-0 font-bold text-xl" style={{display: 'flex'}}>
                                                                <img src="../../Group.svg" alt="Tailwindcss Navigation" width="40px" className="mr-4 image-header" />
                                                                PRODHIT
                                                        </h2>
                                                        <p className="mb-12 ml-0">
                                                                Enabling You Become A Shareholder <br />
                                                                Of Musics From Spotify.
                                                        </p>
                                                        <a href="#connect" className="Nav-button text-white mt-3" role="button" style={{padding: '15px 40px !important', marginTop: '25px'}} onClick={() => handleX()} >
                                                                {
                                                                        loading
                                                                        ?
                                                                        <Loader />
                                                                        :
                                                                        'Connect Wallet'
                                                                }
                                                        </a>

                                                </div>
                                        </div>
                                        <div className="footerin2 flex lg:justify-center m-5" >
                                                <div>
                                                        <h2 className="m-4 ml-0 font-bold text-xl">
                                                                SOCIALS
                                                        </h2>
                                                        <ul className="mb-3 ml-0">
                                                                <li> <a href="#footerfacebook">Facebook</a></li>
                                                                <li><a href="#footertwiiter">Twitter</a></li>
                                                                <li><a href="#footerinstagram">Instagram</a></li>
                                                        </ul>

                                                </div>
                                        </div>
                                        <div className="footerin2 flex lg:justify-center m-5">
                                                <div>

                                                        <h2 className="m-4 ml-0 font-bold text-xl">
                                                                HELP
                                                        </h2>
                                                        <ul className="mb-3 ml-0">
                                                                <li><a href="#footersupport">Support</a></li>
                                                                <li><a href="#footerterms">Terms & Conditions</a></li>
                                                                <li><a href="#footerprivacy">Privacy Policy</a></li>
                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                        
                        </div>

                        <div className="bottom-footer tracking-wide lg:tracking-wider text-sm lg:text-lg mt-16">

                                <p className="text-center">© Copyright 2022 by Prodhit</p>

                        </div>
                </div>
        )
}