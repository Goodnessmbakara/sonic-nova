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
    <div className="w-full max-w-5xl mx-auto">
      <div className="glass glass-card relative p-8 md:p-12">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-glow rounded-full blur-[100px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-glow rounded-full blur-[100px] opacity-10"></div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side: Game Visuals */}
          <div className="flex-1 flex flex-col items-center">
            <div className={cn(
              "relative w-64 h-64 rounded-full flex-center transition-all duration-500",
              streak > 0 ? "neon-border-primary" : "border-2 border-white/5",
              isCharging && "scale-90"
            )}>
              {/* Inner Rings */}
              <div className={cn(
                "absolute inset-4 rounded-full border border-white/5 transition-all duration-500",
                isCharging && "border-primary-neon animate-spin-slow"
              )}></div>
              
              {/* Pulsing Core */}
              <div className={cn(
                "absolute inset-0 rounded-full bg-primary-glow blur-2xl transition-opacity duration-500",
                streak > 0 ? "opacity-30" : "opacity-0",
                isCharging && "opacity-80"
              )}></div>
              
              <div className="relative z-10 flex flex-col items-center">
                {isCharging ? (
                  <Loader2 className="w-20 h-20 neon-text-primary animate-spin" />
                ) : (
                  <Zap className={cn(
                    "w-20 h-20 transition-all duration-500 transform",
                    streak > 0 ? "neon-text-primary scale-110 rotate-12" : "text-white/10"
                  )} />
                )}
              </div>

              {/* Streak Badge */}
              <div className="absolute -top-2 -right-2 glass glass-card bg-secondary-neon/20 border-secondary-neon/40 px-5 py-2 rounded-2xl flex items-center gap-2 transform rotate-12">
                <Flame className="w-5 h-5 text-secondary-neon fill-current" />
                <span className="text-2xl font-black font-mono">{streak}</span>
              </div>
            </div>

            <button 
              onClick={handleSonicAction}
              disabled={isCharging}
              className={cn(
                "sonic-button sonic-button-primary mt-12 w-full max-w-sm py-6 text-xl",
                isCharging && "opacity-50"
              )}
            >
              {isCharging ? "Broadcasting..." : "Execute Sonic Action"}
              {!isCharging && <Zap className="w-5 h-5" />}
            </button>
          </div>

          {/* Right Side: Info & Stats */}
          <div className="flex-1 w-full space-y-6">
            <div>
              <h2 className="text-3xl font-black mb-2 tracking-tighter">SONIC ARENA</h2>
              <p className="text-text-secondary">Consecutive on-chain actions within the Nakamoto window.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass bg-white/5 rounded-2xl p-6 border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Flame className="w-4 h-4 text-secondary-neon" />
                  <span className="text-xs font-black tracking-widest text-text-muted uppercase">Multiplier</span>
                </div>
                <div className="text-3xl font-bold font-mono text-secondary-neon">
                  x{(1 + streak * 0.1).toFixed(1)}
                </div>
              </div>

              <div className="glass bg-white/5 rounded-2xl p-6 border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-4 h-4 text-primary-neon" />
                  <span className="text-xs font-black tracking-widest text-text-muted uppercase">Confidence</span>
                </div>
                <div className="text-3xl font-bold font-mono text-primary-neon">99.9%</div>
              </div>
            </div>

            <div className="glass bg-primary-neon/5 rounded-2xl p-6 border-primary-neon/20">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-accent-gold" />
                  <span className="text-sm font-bold tracking-widest uppercase">Rewards Pool</span>
                </div>
                <span className="text-xs font-mono text-text-muted">BLOCK #872,001</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary-neon to-secondary-neon transition-all duration-1000" 
                  style={{ width: `${Math.min(streak * 5, 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-3 text-xs font-mono">
                <span className="text-text-secondary">Progress to Next Tier</span>
                <span className="text-primary-neon">{Math.min(streak * 5, 100)}%</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
