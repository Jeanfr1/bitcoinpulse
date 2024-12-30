import React from 'react';
import { Header } from './components/Header';
import { PriceDisplay } from './components/PriceDisplay';
import { OrderBook } from './components/OrderBook';
import { useBitcoinData } from './hooks/useBitcoinData';

function App() {
  const { price, previousPrice, orderBook } = useBitcoinData();

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <PriceDisplay price={price} previousPrice={previousPrice} />
        <OrderBook bids={orderBook.bids} asks={orderBook.asks} />
      </div>
    </div>
  );
}

export default App;