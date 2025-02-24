import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Clock, Search, Filter, ArrowUpDown } from "lucide-react";

interface Order {
  id: string;
  type: "buy" | "sell";
  crypto: string;
  amount: number;
  price: number;
  status: "active" | "completed" | "cancelled";
  date: string;
  counterparty: string;
}

interface OrdersSectionProps {
  orders?: Order[];
}

const defaultOrders: Order[] = [
  {
    id: "ORD-001",
    type: "buy",
    crypto: "BTC",
    amount: 0.5,
    price: 45000,
    status: "active",
    date: "2024-03-20T10:30:00",
    counterparty: "trader123",
  },
  {
    id: "ORD-002",
    type: "sell",
    crypto: "ETH",
    amount: 2.5,
    price: 2800,
    status: "completed",
    date: "2024-03-19T15:45:00",
    counterparty: "cryptomaster",
  },
  {
    id: "ORD-003",
    type: "buy",
    crypto: "BTC",
    amount: 0.25,
    price: 44500,
    status: "cancelled",
    date: "2024-03-18T09:15:00",
    counterparty: "satoshi99",
  },
];

const OrdersSection = ({ orders = defaultOrders }: OrdersSectionProps) => {
  const [activeTab, setActiveTab] = React.useState("active");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue={activeTab}
          onValueChange={(value) => setActiveTab(value)}
          className="w-full"
        >
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="active">Active Orders</TabsTrigger>
              <TabsTrigger value="history">Order History</TabsTrigger>
            </TabsList>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                <Search className="h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search orders..."
                  className="border-0 bg-transparent focus-visible:ring-0"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {["active", "history"].map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-0">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">
                        <Button variant="ghost" size="sm" className="-ml-4">
                          Order ID
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </Button>
                      </TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Crypto</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>
                        <Button variant="ghost" size="sm" className="-ml-4">
                          Date
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </Button>
                      </TableHead>
                      <TableHead>Counterparty</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">
                          {order.id}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.type === "buy" ? "default" : "destructive"
                            }
                          >
                            {order.type.toUpperCase()}
                          </Badge>
                        </TableCell>
                        <TableCell>{order.crypto}</TableCell>
                        <TableCell className="text-right">
                          {order.amount.toFixed(8)}
                        </TableCell>
                        <TableCell className="text-right">
                          ${order.price.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              order.status,
                            )}`}
                          >
                            {order.status.charAt(0).toUpperCase() +
                              order.status.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            {new Date(order.date).toLocaleDateString()}
                          </div>
                        </TableCell>
                        <TableCell>{order.counterparty}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default OrdersSection;
