export interface OrderBookEntry {
  price: string;
  quantity: string;
}

export interface OrderBook {
  bids: OrderBookEntry[];
  asks: OrderBookEntry[];
  lastUpdateId: number;
}

export interface TickerData {
  symbol: string;
  price: string;
}