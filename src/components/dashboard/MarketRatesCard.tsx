import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  TrendingUpIcon,
  TrendingDownIcon,
} from "lucide-react";

interface CryptoRate {
  currency: string;
  price: number;
  change24h: number;
  volume24h: number;
}

interface MarketRatesCardProps {
  rates?: CryptoRate[];
}

const defaultRates: CryptoRate[] = [
  {
    currency: "BTC/USD",
    price: 45000.0,
    change24h: 2.5,
    volume24h: 1200000000,
  },
  {
    currency: "ETH/USD",
    price: 2800.0,
    change24h: -1.2,
    volume24h: 800000000,
  },
  {
    currency: "USDT/USD",
    price: 1.0,
    change24h: 0.01,
    volume24h: 500000000,
  },
];

const MarketRatesCard = ({ rates = defaultRates }: MarketRatesCardProps) => {
  return (
    <Card className="w-full bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <TrendingUpIcon className="h-5 w-5 text-primary" />
          Market Rates
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {rates.map((rate) => (
            <div
              key={rate.currency}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex flex-col">
                <span className="font-semibold">{rate.currency}</span>
                <span className="text-sm text-gray-500">
                  Vol: ${(rate.volume24h / 1000000).toFixed(2)}M
                </span>
              </div>

              <div className="flex flex-col items-end">
                <span className="font-bold">
                  ${rate.price.toLocaleString()}
                </span>
                <div
                  className={`flex items-center gap-1 text-sm ${rate.change24h >= 0 ? "text-green-600" : "text-red-600"}`}
                >
                  {rate.change24h >= 0 ? (
                    <ArrowUpIcon className="h-4 w-4" />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4" />
                  )}
                  <span>{Math.abs(rate.change24h)}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketRatesCard;
