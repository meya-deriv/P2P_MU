import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import AdCard from "./AdCard";

interface Ad {
  id: string;
  title: string;
  price: number;
  currency: string;
  type: "buy" | "sell";
  paymentMethod: string;
  timeLimit: number;
  userRating: number;
  completedTrades: number;
}

interface MyAdsSectionProps {
  ads?: Ad[];
  onCreateAd?: () => void;
  onEditAd?: (id: string) => void;
}

const defaultAds: Ad[] = [
  {
    id: "1",
    title: "Buy Bitcoin with USD",
    price: 45000,
    currency: "USD",
    type: "buy",
    paymentMethod: "Bank Transfer",
    timeLimit: 30,
    userRating: 4.8,
    completedTrades: 156,
  },
  {
    id: "2",
    title: "Sell Ethereum for EUR",
    price: 2800,
    currency: "EUR",
    type: "sell",
    paymentMethod: "SEPA",
    timeLimit: 15,
    userRating: 4.9,
    completedTrades: 89,
  },
  {
    id: "3",
    title: "Buy USDT with GBP",
    price: 1,
    currency: "GBP",
    type: "buy",
    paymentMethod: "Bank Transfer",
    timeLimit: 20,
    userRating: 4.7,
    completedTrades: 234,
  },
];

const MyAdsSection = ({
  ads = defaultAds,
  onCreateAd = () => {},
  onEditAd = () => {},
}: MyAdsSectionProps) => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">My Advertisements</h1>
          <Button
            onClick={onCreateAd}
            className="bg-primary hover:bg-primary/90"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create New Ad
          </Button>
        </div>

        {ads.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500">You haven't created any ads yet.</p>
            <Button
              onClick={onCreateAd}
              variant="link"
              className="mt-4 text-primary"
            >
              Create your first ad
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ads.map((ad) => (
              <AdCard
                key={ad.id}
                title={ad.title}
                price={ad.price}
                currency={ad.currency}
                type={ad.type}
                paymentMethod={ad.paymentMethod}
                timeLimit={ad.timeLimit}
                userRating={ad.userRating}
                completedTrades={ad.completedTrades}
                onClick={() => onEditAd(ad.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAdsSection;
