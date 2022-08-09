import '../css/coin.css'

export const Coin = () => {
        return (
                <div className='coin'>
                        <div className='front jump'>
                                <div className='star'></div>
                                <span className='currency'>$</span>
                                <div className='shapes'>
                                        <div className='shape_l'></div>
                                        <div className='shape_r'></div>
                                        <span className='top'>عظمى</span>
                                        <span className='bottom'>عملة</span>
                                </div>
                        </div>
                        {/* <div className='shadow'></div> */}
                </div>

        )
}