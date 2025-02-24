import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRightLeft, DollarSign, Bitcoin } from "lucide-react";

interface TradeFormProps {
  mode?: "buy" | "sell";
  onSubmit?: (data: TradeFormData) => void;
  cryptoOptions?: Array<{ value: string; label: string }>;
  fiatOptions?: Array<{ value: string; label: string }>;
}

interface TradeFormData {
  mode: "buy" | "sell";
  cryptoAmount: string;
  fiatAmount: string;
  cryptoCurrency: string;
  fiatCurrency: string;
}

const defaultCryptoOptions = [
  { value: "BTC", label: "Bitcoin" },
  { value: "ETH", label: "Ethereum" },
  { value: "USDT", label: "Tether" },
];

const defaultFiatOptions = [
  { value: "USD", label: "US Dollar" },
  { value: "EUR", label: "Euro" },
  { value: "GBP", label: "British Pound" },
];

const TradeForm = ({
  mode = "buy",
  onSubmit = () => {},
  cryptoOptions = defaultCryptoOptions,
  fiatOptions = defaultFiatOptions,
}: TradeFormProps) => {
  const [activeTab, setActiveTab] = React.useState<"buy" | "sell">(mode);
  const [formData, setFormData] = React.useState<TradeFormData>({
    mode: mode,
    cryptoAmount: "",
    fiatAmount: "",
    cryptoCurrency: cryptoOptions[0].value,
    fiatCurrency: fiatOptions[0].value,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="w-full max-w-[600px] p-6 bg-white">
      <Tabs
        defaultValue={activeTab}
        onValueChange={(value) => setActiveTab(value as "buy" | "sell")}
      >
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger
            value="buy"
            className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
          >
            Buy Crypto
          </TabsTrigger>
          <TabsTrigger
            value="sell"
            className="data-[state=active]:bg-red-500 data-[state=active]:text-white"
          >
            Sell Crypto
          </TabsTrigger>
        </TabsList>

        {["buy", "sell"].map((tab) => (
          <TabsContent key={tab} value={tab}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>I want to {tab}</Label>
                  <div className="flex gap-4">
                    <Select
                      defaultValue={formData.cryptoCurrency}
                      onValueChange={(value) =>
                        setFormData({ ...formData, cryptoCurrency: value })
                      }
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Crypto" />
                      </SelectTrigger>
                      <SelectContent>
                        {cryptoOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      type="number"
                      placeholder="Amount"
                      value={formData.cryptoAmount}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          cryptoAmount: e.target.value,
                        })
                      }
                      className="flex-1"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRightLeft className="text-gray-400" />
                </div>

                <div className="space-y-2">
                  <Label>For</Label>
                  <div className="flex gap-4">
                    <Select
                      defaultValue={formData.fiatCurrency}
                      onValueChange={(value) =>
                        setFormData({ ...formData, fiatCurrency: value })
                      }
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Currency" />
                      </SelectTrigger>
                      <SelectContent>
                        {fiatOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      type="number"
                      placeholder="Amount"
                      value={formData.fiatAmount}
                      onChange={(e) =>
                        setFormData({ ...formData, fiatAmount: e.target.value })
                      }
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className={`w-full ${tab === "buy" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}`}
              >
                {tab === "buy" ? (
                  <>
                    <Bitcoin className="w-4 h-4 mr-2" /> Buy Crypto
                  </>
                ) : (
                  <>
                    <DollarSign className="w-4 h-4 mr-2" /> Sell Crypto
                  </>
                )}
              </Button>
            </form>
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  );
};

export default TradeForm;
