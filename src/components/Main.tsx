
export const Main:React.FC = () => {
        return (
                <div>
                        
                        <div className="main-main p-10 ">

                                <div className="flex">

                                        <div className="w-1/2 text-white">

                                                <h2 className="text-5xl pt-20 leading-snug font-semibold tracking-wide">
                                                        Become A <span>Shareholder</span> <br /> Of Your Favorite <br /> <span>Music</span>

                                                </h2>
                                                <p className="tracking-widest font-semibold mt-5 mb-5 text-lg shade-white pb-10"> 
                                                        Enabling You Become A Shareholder <br /> Of Musics From Spotify.
                                                </p>
                                                <a href="#ss" className="Nav-button text-white mt-3" role="button" style={{padding: '15px 40px !important', marginTop: '30px'}} >Connect Wallet</a>

                                        </div>
                                        <div className="w-1/2">
                                                <div className="flex">

                                                        <div className="w-1/2 m-3 mr-0 nav-landingside-1">
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

                                                        </div>

                                                </div>

                                        </div>

                                </div>

                        </div>
                
                </div>
        )
}