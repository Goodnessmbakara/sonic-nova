'use client'

import { Zap, Activity, Trophy, Play } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-glow rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-glow rounded-full blur-[120px] animate-pulse-slow"></div>

      {/* Header / Nav */}
      <nav className="absolute top-0 w-full p-8 flex justify-between items-center max-w-7xl">
        <div className="flex items-center gap-2">
          <Zap className="neon-text-primary w-8 h-8" />
          <span className="text-2xl font-extrabold glitch-text tracking-tighter">
            Sonic <span className="neon-text-primary">Nova</span>
          </span>
        </div>
        <button className="sonic-button sonic-button-secondary">
          Connect Wallet
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center z-10 animate-slide-up">
        <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight">
          BITCOIN <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-neon to-secondary-neon">
            SPEED LIMITLESS
          </span>
        </h1>
        <p className="text-text-secondary text-xl max-w-2xl mx-auto mb-10 font-light">
          Experience the Nakamoto release on Stacks. High-octane on-chain gaming, 
          instant streaks, and Bitcoin-level security.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="sonic-button sonic-button-primary text-xl px-12 py-6">
            <Play className="fill-current" />
            Enter Arena
          </button>
          <button className="sonic-button sonic-button-secondary text-xl px-12 py-6">
            View Leaderboard
          </button>
        </div>
      </section>

      {/* Stats Counter */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full max-w-5xl">
        <StatCard 
          icon={<Activity className="neon-text-primary" />} 
          label="Sonic TXs" 
          value="1,204,562" 
        />
        <StatCard 
          icon={<Zap className="neon-text-secondary" />} 
          label="Avg Latency" 
          value="1.2s" 
        />
        <StatCard 
          icon={<Trophy className="text-accent-gold" />} 
          label="Total Rewards" 
          value="12,000 STX" 
        />
      </div>

      {/* Footer Decoration */}
      <div className="mt-20 opacity-30 text-xs tracking-widest text-center">
        POWERED BY STACKS NAKAMOTO • CLARITY 4 SECURED • REOWN INTEGRATED
      </div>
    </main>
  )
}

function StatCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="glass p-6 flex flex-col items-center gap-2 border-l-4 border-l-primary-neon">
      <div className="p-3 rounded-full bg-white/5 mb-2">
        {icon}
      </div>
      <span className="text-text-secondary uppercase text-xs tracking-widest font-bold">
        {label}
      </span>
      <span className="text-3xl font-black font-mono tracking-tighter">
        {value}
      </span>
    </div>
  )
}
