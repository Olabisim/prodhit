
import { useState } from 'react'
import { ethers} from 'ethers'
import { MetaMaskInpageProvider } from '@metamask/providers';
import {Loader} from './Loader'



declare global {
        interface Window{
          ethereum?:MetaMaskInpageProvider
        }
      }


export const ConnectWallet = () => {

                
        const [errorMessage, setErrorMessage] = useState('');
        const [defaultAccount, setDefaultAccount] = useState(null);
        const [userBalance, setUserBalance] = useState('');
        const [connButtonText, setConnButtonText] = useState('Connect Wallet');
        const [ loading, setLoading ] = useState<boolean>(false)
        

        const ethereum = window.ethereum as MetaMaskInpageProvider;

        const connectWalletHandler = () => {
                console.log('got inside connect walllet handler')
                if(window.ethereum) {
                        setLoading(true)

                        ethereum.request({method: "eth_requestAccounts"})
                        .then((result: any) => {
                                
                                setLoading(false)
                                accountChangedHandler(result[0]);
                                setConnButtonText(`balance $${userBalance}`)
                                console.log(userBalance)
                        })
                        .catch(() => {
                                
                                setLoading(false)
                                setConnButtonText('connect Wallet')
                        })
                }
                else {
                        setErrorMessage('Install Metamask')
                }

        }

        const accountChangedHandler = (newAccount: any) => {
                setDefaultAccount(newAccount)
                getUserBalance(newAccount.toString())
        }

        const getUserBalance = (address: any) => {
                ethereum.request({ method: 'eth_getBalance', params: [address, 'latest']})
                .then((balance: any) => {
                        setUserBalance(ethers.utils.formatEther(balance))
                })
        }

        const chainChangedHandler = () => { 
                window.location.reload();
        }

        ethereum.on('accountsChanged', accountChangedHandler)

        ethereum.on('chainChanged', chainChangedHandler)


 
        return (

                <>

                        <a href="#ss" className="Nav-button text-white m-2" role="button" onClick={() => connectWalletHandler()}>
                                {
                                        loading
                                        ?
                                        <Loader />
                                        :
                                        connButtonText
                                }
                        </a>
                
                </>
        )
}

