'use client'

import { createAppKit } from '@reown/appkit/react'
import { StacksMainnet, StacksTestnet } from '@stacks/network'
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
if (typeof window !== 'undefined') {
  createAppKit({
    adapters: [], // Stacks adapter config goes here if supported natively, else we use the Stacks.js direct integration
    networks: [], // Placeholder for now - using Stacks.js manually for actual txs
    metadata,
    projectId,
    features: {
      analytics: true
    }
  })
}
