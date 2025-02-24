import React from "react";
import MarketRatesCard from "./MarketRatesCard";
import TradeForm from "./TradeForm";

interface BuySellSectionProps {
  onTrade?: (data: any) => void;
  marketRates?: any[];
}

const BuySellSection = ({
  onTrade = () => {},
  marketRates = [],
}: BuySellSectionProps) => {
  return (
    <div className="w-full min-h-[800px] p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Buy & Sell Crypto</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left column - Market Rates */}
          <div className="space-y-6">
            <MarketRatesCard rates={marketRates} />

            {/* Additional market information could go here */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Market Overview</h3>
              <p className="text-gray-600">
                24h Volume: $2.1B | Active Traders: 15,234 | Available Pairs:
                50+
              </p>
            </div>
          </div>

          {/* Right column - Trade Form */}
          <div className="space-y-6">
            <TradeForm onSubmit={onTrade} />

            {/* Trade tips */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Trading Tips</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Always verify seller's reputation before trading</li>
                <li>Use secure payment methods only</li>
                <li>Never share your private keys</li>
                <li>Check current market rates before trading</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySellSection;
