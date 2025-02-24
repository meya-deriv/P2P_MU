import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Clock, DollarSign, MessageCircle, User } from "lucide-react";

interface AdCardProps {
  title?: string;
  price?: number;
  currency?: string;
  type?: "buy" | "sell";
  paymentMethod?: string;
  timeLimit?: number;
  userRating?: number;
  completedTrades?: number;
  onClick?: () => void;
}

const AdCard = ({
  title = "Buy Bitcoin with USD",
  price = 45000,
  currency = "USD",
  type = "buy",
  paymentMethod = "Bank Transfer",
  timeLimit = 30,
  userRating = 4.8,
  completedTrades = 156,
  onClick = () => {},
}: AdCardProps) => {
  return (
    <Card
      className="w-[300px] bg-white hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <CardHeader className="pb-4">
        <div className="flex justify-between items-center">
          <Badge variant={type === "buy" ? "default" : "destructive"}>
            {type.toUpperCase()}
          </Badge>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span className="text-sm text-gray-600">{userRating}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Seller Rating</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-gray-500" />
            <span className="text-lg font-medium">
              {price.toLocaleString()} {currency}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">{timeLimit} minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">
              {completedTrades} completed trades
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Button className="w-full" variant="outline">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AdCard;
