
import { useState } from 'react'
import { ethers} from 'ethers'
import { MetaMaskInpageProvider } from '@metamask/providers';
// import {Loader} from './Loader'



declare global {
        interface Window{
          ethereum?:MetaMaskInpageProvider
        }
      }


export const ConnectWallet = () => {

                
        // const [errorMessage, setErrorMessage] = useState('');
        const [defaultAccount, setDefaultAccount] = useState(null);
        const [userBalance, setUserBalance] = useState('');
        const [connButtonText, setConnButtonText] = useState('Connect Wallet');
        

        const ethereum = window.ethereum as MetaMaskInpageProvider;

        const connectWalletHandler = () => {
                console.log('got inside connect walllet handler')
                if(window.ethereum) {
                        
                        setConnButtonText("loading...")

                        ethereum.request({method: "eth_requestAccounts"})
                        .then((result: any) => {
                                console.log('not success result')
                                accountChangedHandler(result[0]);
                                console.log('after called')
                                console.log(userBalance)
                                setConnButtonText(`balance $${userBalance}`)
                        })
                        .catch(() => {
                                console.log('not success error')
                                setConnButtonText('connect Wallet')
                        })
                        
                }
                else {
                        // setErrorMessage('Install Metamask')
                }

        }

        const accountChangedHandler = (newAccount: any) => {
                console.log('accountChangedHandler called')
                setDefaultAccount(newAccount)
                getUserBalance(newAccount.toString())
        }

        const getUserBalance = (address: any) => {
                console.log('getUserBalance called')
                ethereum.request({ method: 'eth_getBalance', params: [address, 'latest']})
                .then( async (balance: any) => {
                        console.log('getUserBalance balance before called')
                        await setUserBalance(ethers.utils.formatEther(balance))
                })
        }

        const chainChangedHandler = () => { 
                window.location.reload();
        }

        ethereum.on('accountsChanged', accountChangedHandler)

        ethereum.on('chainChanged', chainChangedHandler)


 
        return (

                <>

                        <button className="Nav-button text-white m-2" onClick={() => connectWalletHandler()}>
                                {
                                        connButtonText
                                }
                        </button>
                        Address: {defaultAccount}
                
                </>
        )
}

