import React from 'react';
import { OrderBookEntry } from '../types/types';

interface OrderBookProps {
  bids: OrderBookEntry[];
  asks: OrderBookEntry[];
}

export function OrderBook({ bids, asks }: OrderBookProps) {
  const formatNumber = (num: string) => Number(num).toLocaleString();
  const maxVolume = Math.max(
    ...bids.map(bid => parseFloat(bid.quantity)),
    ...asks.map(ask => parseFloat(ask.quantity))
  );

  const getVolumePercentage = (volume: string) => 
    (parseFloat(volume) / maxVolume) * 100;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-6">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-700"></div>
        <h3 className="text-xl font-bold text-green-400 mb-4">Buy Orders</h3>
        <div className="space-y-3">
          {bids.slice(0, 7).map((bid, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 bg-green-500/10 rounded-lg"
                   style={{ width: `${getVolumePercentage(bid.quantity)}%` }}></div>
              <div className="relative flex justify-between p-2 text-gray-200">
                <span className="font-mono">${formatNumber(bid.price)}</span>
                <span className="font-mono">{formatNumber(bid.quantity)} BTC</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-6">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-700"></div>
        <h3 className="text-xl font-bold text-red-400 mb-4">Sell Orders</h3>
        <div className="space-y-3">
          {asks.slice(0, 7).map((ask, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 bg-red-500/10 rounded-lg"
                   style={{ width: `${getVolumePercentage(ask.quantity)}%` }}></div>
              <div className="relative flex justify-between p-2 text-gray-200">
                <span className="font-mono">${formatNumber(ask.price)}</span>
                <span className="font-mono">{formatNumber(ask.quantity)} BTC</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}