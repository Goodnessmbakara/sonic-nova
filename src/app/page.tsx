'use client'

import { Zap, Activity, Trophy, Play, Globe, Cpu } from 'lucide-react'
import Arena from '@/components/Arena'

export default function Home() {
  return (
    <main className="min-h-screen relative bg-deep overflow-hidden flex flex-col items-center">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(0,242,255,0.15)_0%,transparent_70%)] animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(255,0,229,0.1)_0%,transparent_70%)] animate-pulse-slow"></div>
        <div className="scanline"></div>
      </div>

      {/* Header / Nav */}
      <nav className="sticky top-0 z-50 w-full px-6 py-4 flex justify-center">
        <div className="glass glass-card w-full max-w-7xl flex justify-between items-center rounded-2xl py-3 px-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-neon/10 flex-center border border-primary-neon/30">
              <Zap className="neon-text-primary w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter">
              SONIC <span className="neon-text-primary">NOVA</span>
            </span>
          </div>
          <button className="sonic-button sonic-button-secondary">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center">
        
        {/* Hero Section */}
        <section className="text-center mt-24 md:mt-32 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary-neon/10 border border-primary-neon/20 text-primary-neon text-xs font-bold tracking-widest uppercase mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-neon"></span>
            </span>
            Nakamoto Release Live
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black mb-6 leading-[0.9] tracking-[ -0.05em]">
            BITCOIN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-neon via-secondary-neon to-accent-gold">
              SPEED LIMITLESS
            </span>
          </h1>
          
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Unleashing the next generation of Stacks performance. 
            High-octane gaming with instant settlement and Bitcoin security.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button 
              className="sonic-button sonic-button-primary text-lg px-10 py-5 group"
              onClick={() => document.getElementById('arena')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="fill-current w-5 h-5 group-hover:scale-110 transition-transform" />
              Enter Arena
            </button>
            <button className="sonic-button sonic-button-secondary text-lg px-10 py-5">
              <Trophy className="w-5 h-5" />
              Leaderboard
            </button>
          </div>
        </section>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-24 w-full">
          <StatCard 
            icon={<Globe className="w-5 h-5" />} 
            label="Total Artifacts" 
            value="3.2M+" 
            color="primary"
          />
          <StatCard 
            icon={<Activity className="w-5 h-5" />} 
            label="Block Time" 
            value="1.4s" 
            color="secondary"
          />
          <StatCard 
            icon={<Cpu className="w-5 h-5" />} 
            label="Throughput" 
            value="500 TPS" 
            color="gold"
          />
          <StatCard 
            icon={<Zap className="w-5 h-5" />} 
            label="Gas Saved" 
            value="12.5k STX" 
            color="primary"
          />
        </div>

        {/* Arena Section */}
        <section id="arena" className="w-full mt-32 mb-40">
          <Arena />
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-50">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-bold tracking-widest uppercase">Sonic Nova &copy; 2025</span>
          </div>
          <div className="flex gap-8 text-xs font-bold tracking-[0.2em] uppercase opacity-30">
            <span>Clarity 4</span>
            <span>Nakamoto</span>
            <span>Reown AppKit</span>
          </div>
        </div>
      </footer>
    </main>
  )
}

function StatCard({ icon, label, value, color }: { icon: React.ReactNode, label: string, value: string, color: 'primary' | 'secondary' | 'gold' }) {
  const colors = {
    primary: 'border-b-primary-neon text-primary-neon',
    secondary: 'border-b-secondary-neon text-secondary-neon',
    gold: 'border-b-accent-gold text-accent-gold'
  }

  return (
    <div className="glass glass-card flex flex-col gap-4 border-b-2 transition-transform hover:-translate-y-1">
      <div className={cn("inline-flex w-10 h-10 rounded-xl bg-white/5 flex-center border border-white/10", colors[color])}>
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black tracking-widest uppercase text-text-muted mb-1">{label}</p>
        <p className="text-2xl font-bold font-mono tracking-tighter">{value}</p>
      </div>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ')
}
