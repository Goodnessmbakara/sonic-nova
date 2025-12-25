'use client'

import { createAppKit } from '@reown/appkit/react'
import { STACKS_MAINNET, STACKS_TESTNET } from '@stacks/network'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

// 1. Get projectId at https://cloud.reown.com
const projectId = 'YOUR_PROJECT_ID' // User will need to replace this, or I'll use a placeholder for now

// 2. Create a metadata object
const metadata = {
  name: 'Sonic Nova',
  description: 'High-Speed Stacks Gaming Hub',
  url: 'https://sonic-nova.vercel.app', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/17922993']
}

// Note: Reown AppKit Stacks support is via the Universal Provider or dedicated Stacks adapter if available.
// For now, we will configure the modal and bridge it to Stacks.js.

const queryClient = new QueryClient()

export function WalletProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

// Initializing AppKit
if (typeof window !== 'undefined' && projectId !== 'YOUR_PROJECT_ID') {
  createAppKit({
    adapters: [], // Stacks adapter config goes here if supported natively, else we use the Stacks.js direct integration
    networks: [STACKS_MAINNET, STACKS_TESTNET], 
    metadata,
    projectId,
    features: {
      analytics: true
    }
  })
} else if (typeof window !== 'undefined') {
  console.warn('Sonic Nova: NEXT_PUBLIC_REOWN_PROJECT_ID is missing. Wallet features will be disabled.')
}
