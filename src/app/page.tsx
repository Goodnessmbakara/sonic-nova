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
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-40 px-6 hero-gradient">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] glow-overlay opacity-20"></div>
        
        <div className="relative z-10 w-full max-w-7xl flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full premium-glass border border-white/10 text-primary-neon text-xs font-bold tracking-[0.2em] uppercase mb-12 animate-slide-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-neon"></span>
            </span>
            Nakamoto Mainnet Ready
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-black mb-8 leading-[0.85] tracking-[-0.04em] animate-slide-up" style={{ animationDelay: '0.1s' }}>
            SONIC <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
              EXPANSION
            </span>
          </h1>
          
          <p className="text-text-secondary text-xl md:text-2xl max-w-3xl mx-auto mb-16 font-medium leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Experience the unprecedented speed of Stacks. Zero-lag transactions meet the security of Bitcoin. Built for the next billion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <button 
              className="sonic-button sonic-button-primary text-xl px-14 py-7 group premium-glass"
              onClick={() => document.getElementById('arena')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="fill-current w-6 h-6 group-hover:scale-110 transition-transform" />
              Start Streaking
            </button>
            <button className="sonic-button sonic-button-secondary text-xl px-14 py-7 premium-glass">
              <Trophy className="w-6 h-6" />
              Leaderboard
            </button>
          </div>
        </div>

        {/* Section Dip Transition */}
        <div className="absolute bottom-0 left-0 w-full h-[150px] bg-deep" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }}></div>
      </section>

      {/* Main Content Area */}
      <div className="relative z-20 w-full max-w-7xl px-6 -mt-20">
        {/* Partner / Trust Bar */}
        <div className="premium-glass rounded-4xl py-10 px-8 flex flex-wrap justify-around items-center gap-12 mb-32 border-white/5">
          <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity">
            <Globe className="w-8 h-8" />
            <span className="text-2xl font-black tracking-tighter">STACKS</span>
          </div>
          <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity">
            <Zap className="w-8 h-8" />
            <span className="text-2xl font-black tracking-tighter">REOWN</span>
          </div>
          <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity">
            <Cpu className="w-8 h-8" />
            <span className="text-2xl font-black tracking-tighter">CLARITY 4</span>
          </div>
          <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity">
            <Activity className="w-8 h-8" />
            <span className="text-2xl font-black tracking-tighter">NAKAMOTO</span>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="mb-40 text-center md:text-left flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              RELIABLE <span className="text-primary-neon">ON-CHAIN</span> <br />
              GAMING, ANYWHERE.
            </h2>
            <p className="text-text-secondary text-xl leading-relaxed mb-10 max-w-xl font-medium">
              Sonic Nova leverages the latest Bitcoin scaling technologies to provide a seamless, low-fee gaming experience directly on the world's most secure blockchain.
            </p>
            <button className="sonic-button sonic-button-primary px-10 py-5 rounded-2xl">
              Learn More
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="aspect-video premium-glass rounded-5xl border border-white/10 p-2 overflow-hidden animate-float">
               <div className="w-full h-full rounded-4xl bg-gradient-to-br from-primary-neon/20 to-secondary-neon/20 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-50" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=2070)' }}></div>
                 <Zap className="w-32 h-32 neon-text-primary animate-pulse" />
               </div>
            </div>
          </div>
        </section>

        {/* Stats Grid - Redesigned */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-40 w-full animate-slide-up">
          <StatCard 
            icon={<Globe className="w-6 h-6" />} 
            label="Ecosystem Scale" 
            value="3.2M+" 
            color="primary"
          />
          <StatCard 
            icon={<Activity className="w-6 h-6" />} 
            label="In-Sync Blocks" 
            value="1.4s" 
            color="secondary"
          />
          <StatCard 
            icon={<Cpu className="w-6 h-6" />} 
            label="Real-time Flow" 
            value="500 TPS" 
            color="gold"
          />
          <StatCard 
            icon={<Zap className="w-6 h-6" />} 
            label="Economic Efficiency" 
            value="12.5k STX" 
            color="primary"
          />
        </div>

        {/* Arena Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">THE SONIC ARENA</h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">Master the rhythm of the blockchain. Execute micro-actions to build your streak and earn rewards.</p>
        </div>

        {/* Arena Component */}
        <section id="arena" className="w-full mb-48">
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
