import { useState, useEffect } from 'react';
import { OrderBook, TickerData } from '../types/types';

export function useBitcoinData() {
  const [price, setPrice] = useState('0');
  const [previousPrice, setPreviousPrice] = useState('0');
  const [orderBook, setOrderBook] = useState<OrderBook>({ bids: [], asks: [], lastUpdateId: 0 });

  useEffect(() => {
    // WebSocket for price updates
    const priceWs = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
    priceWs.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setPreviousPrice(price);
      setPrice(data.c);
    };

    // WebSocket for order book
    const depthWs = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@depth20@100ms');
    depthWs.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setOrderBook({
        bids: data.bids.map(([price, quantity]: string[]) => ({ price, quantity })),
        asks: data.asks.map(([price, quantity]: string[]) => ({ price, quantity })),
        lastUpdateId: data.lastUpdateId
      });
    };

    return () => {
      priceWs.close();
      depthWs.close();
    };
  }, [price]);

  return { price, previousPrice, orderBook };
}