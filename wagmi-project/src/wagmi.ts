import { http, cookieStorage, createConfig, createStorage } from 'wagmi'
import {  baseSepolia } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

export const config =createConfig({ 
  
    chains: [baseSepolia],
    connectors: [
      injected(),
      coinbaseWallet({appName:'wagmi-project',preference:'smartWalletOnly'})    ],
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    transports: {
      
      [baseSepolia.id]: http(),
    },
  })


declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}
