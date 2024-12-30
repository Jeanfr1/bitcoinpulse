import React from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

interface PriceDisplayProps {
  price: string;
  previousPrice: string;
}

export function PriceDisplay({ price, previousPrice }: PriceDisplayProps) {
  const priceNum = parseFloat(price);
  const prevPriceNum = parseFloat(previousPrice);
  const isIncreasing = priceNum > prevPriceNum;
  const isDecreasing = priceNum < prevPriceNum;
  const percentageChange = ((priceNum - prevPriceNum) / prevPriceNum) * 100;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 animate-gradient"></div>
      
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-3 mb-6">
          <Activity className="w-6 h-6 text-orange-500 animate-pulse" />
          <h2 className="text-xl font-bold text-gray-200">Live Bitcoin Price</h2>
        </div>

        <div className="relative">
          <span className={`text-6xl font-black tracking-tight ${
            isIncreasing ? 'text-green-400' : 
            isDecreasing ? 'text-red-400' : 
            'text-gray-100'
          } transition-colors duration-300`}>
            ${Number(price).toLocaleString()}
          </span>
          
          <div className={`flex items-center gap-2 mt-4 justify-center ${
            isIncreasing ? 'text-green-400' : 
            isDecreasing ? 'text-red-400' : 
            'text-gray-400'
          }`}>
            {isIncreasing && <TrendingUp className="w-5 h-5 animate-bounce" />}
            {isDecreasing && <TrendingDown className="w-5 h-5 animate-bounce" />}
            <span className="text-lg font-semibold">
              {percentageChange.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}