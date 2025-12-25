'use client'

import { useState } from 'react'
import { Zap, Shield, Flame, Trophy, Loader2 } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function Arena() {
  const [streak, setStreak] = useState(0)
  const [isCharging, setIsCharging] = useState(false)
  
  const handleSonicAction = () => {
    setIsCharging(true)
    setTimeout(() => {
      setStreak(s => s + 1)
      setIsCharging(false)
    }, 600)
  }

  return (
    <div className="w-full">
      <div className="premium-glass relative p-10 md:p-20 rounded-5xl overflow-hidden border border-white/10">
        {/* Background Decorative Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-glow rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-glow rounded-full blur-[120px] opacity-10"></div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left Side: Game Visuals */}
          <div className="flex-1 flex flex-col items-center w-full">
            <div className={cn(
              "relative w-72 h-72 md:w-96 md:h-96 rounded-full flex items-center justify-center transition-all duration-700",
              streak > 0 ? "border-2 border-primary-neon/30" : "border-2 border-white/5",
              isCharging && "scale-95"
            )}>
              {/* Spinning Pulse Rings */}
              <div className={cn(
                "absolute inset-0 rounded-full border border-primary-neon/20 animate-spin-slow opacity-0 transition-opacity duration-1000",
                streak > 0 && "opacity-100"
              )}></div>
              <div className={cn(
                "absolute inset-8 rounded-full border border-secondary-neon/20 animate-reverse-spin opacity-0 transition-opacity duration-1000",
                streak > 5 && "opacity-100"
              )}></div>
              
              {/* Core Glow */}
              <div className={cn(
                "absolute inset-0 rounded-full bg-primary-glow blur-3xl transition-opacity duration-700",
                streak > 0 ? "opacity-20" : "opacity-0",
                isCharging && "opacity-60"
              )}></div>
              
              <div className="relative z-10 flex flex-col items-center">
                {isCharging ? (
                  <div className="relative">
                    <Loader2 className="w-24 h-24 md:w-32 md:h-32 neon-text-primary animate-spin" />
                    <div className="absolute inset-0 blur-xl neon-text-primary opacity-50 animate-pulse">
                       <Loader2 className="w-24 h-24 md:w-32 md:h-32" />
                    </div>
                  </div>
                ) : (
                  <Zap className={cn(
                    "w-24 h-24 md:w-32 md:h-32 transition-all duration-700 transform",
                    streak > 0 ? "neon-text-primary scale-110 drop-shadow-[0_0_30px_rgba(0,242,255,0.8)]" : "text-white/5"
                  )} />
                )}
              </div>

              {/* Streak Badge - Premium Styling */}
              <div className="absolute -top-4 -right-4 premium-glass bg-secondary-neon/20 border-secondary-neon/40 px-8 py-4 rounded-3xl flex items-center gap-3 transform rotate-6 animate-float">
                <Flame className="w-7 h-7 text-secondary-neon fill-current" />
                <span className="text-4xl font-black font-mono tracking-tighter">{streak}</span>
              </div>
            </div>

            <button 
              onClick={handleSonicAction}
              disabled={isCharging}
              className={cn(
                "sonic-button sonic-button-primary mt-16 w-full max-w-md py-8 rounded-3xl text-2xl premium-glass transition-all duration-500",
                isCharging ? "opacity-50 cursor-wait bg-white/10 border-white/20" : "hover:scale-105"
              )}
            >
              {isCharging ? "TRANSMITTING..." : "EXECUTE SONIC ACTION"}
              {!isCharging && <Zap className="w-7 h-7 animate-pulse" />}
            </button>
            <p className="mt-6 text-text-muted text-sm font-bold tracking-widest uppercase opacity-50">
               Nakamoto Settlement: <span className="text-success">Confirmed</span>
            </p>
          </div>

          {/* Right Side: Info & Stats Grid */}
          <div className="flex-1 w-full space-y-10">
            <div>
              <div className="inline-block px-4 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black tracking-[0.3em] uppercase text-primary-neon mb-6">
                Active Zone
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-[-0.03em] leading-none">
                SONIC <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-neon to-secondary-neon">PROTOCOL</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed max-w-lg">
                Your actions are batched and executed with sub-second finality. Keep the streak alive to maximize your reward multiplier.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="premium-glass rounded-3xl p-8 border-white/10 bg-white/5">
                <div className="flex items-center gap-4 mb-4">
                  <Flame className="w-5 h-5 text-secondary-neon" />
                  <span className="text-xs font-black tracking-widest text-text-muted uppercase">Multiplier</span>
                </div>
                <div className="text-4xl font-black font-mono text-secondary-neon tracking-tighter">
                  x{(1 + streak * 0.1).toFixed(1)}
                </div>
              </div>

              <div className="premium-glass rounded-3xl p-8 border-white/10 bg-white/5">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="w-5 h-5 text-primary-neon" />
                  <span className="text-xs font-black tracking-widest text-text-muted uppercase">On-Chain Confidence</span>
                </div>
                <div className="text-4xl font-black font-mono text-primary-neon tracking-tighter">99.9%</div>
              </div>
            </div>

            <div className="premium-glass rounded-4xl p-10 border-primary-neon/20 bg-primary-neon/5 relative overflow-hidden">
               {/* Progress Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-neon/5 to-transparent pointer-events-none"></div>
              
              <div className="flex justify-between items-center mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-accent-gold" />
                  <span className="text-sm font-bold tracking-widest uppercase">Global Reward Pool</span>
                </div>
                <span className="text-xs font-mono text-text-muted bg-black/40 px-3 py-1 rounded-full">BLOCK #872,001</span>
              </div>
              
              <div className="h-4 w-full bg-black/40 rounded-full overflow-hidden border border-white/5 relative z-10">
                <div 
                  className="h-full bg-gradient-to-r from-primary-neon via-secondary-neon to-accent-gold transition-all duration-1000 shadow-[0_0_20px_rgba(0,242,255,0.5)]" 
                  style={{ width: `${Math.min(streak * 5, 100)}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between mt-4 text-xs font-mono relative z-10">
                <span className="text-text-secondary uppercase tracking-widest">Growth Phase</span>
                <span className="text-primary-neon font-black">{Math.min(streak * 5, 100)}%</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
