import React from 'react';
import { Bitcoin, Wallet, TrendingUp } from 'lucide-react';

export function Header() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 mb-8">
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-orange-500/20 p-3 rounded-xl">
            <Bitcoin className="w-8 h-8 text-orange-500" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-gray-100">Bitcoin Pulse</h1>
            <p className="text-gray-400">Real-time market insights</p>
          </div>
        </div>
        
        <div className="hidden md:flex gap-4">
          <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-lg">
            <Wallet className="w-4 h-4 text-orange-500" />
            <span className="text-gray-300">Live Trading</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-lg">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-gray-300">Market Data</span>
          </div>
        </div>
      </div>
    </div>
  );
}