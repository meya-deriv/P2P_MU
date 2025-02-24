import React from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import NavigationTabs from "./dashboard/NavigationTabs";
import BuySellSection from "./dashboard/BuySellSection";
import OrdersSection from "./dashboard/OrdersSection";
import MyAdsSection from "./dashboard/MyAdsSection";
import ProfileSection from "./dashboard/ProfileSection";

interface HomeProps {
  defaultTab?: string;
  onTabChange?: (tab: string) => void;
}

const Home = ({
  defaultTab = "buy-sell",
  onTabChange = () => {},
}: HomeProps) => {
  const handleTabChange = (tab: string) => {
    onTabChange(tab);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavigationTabs activeTab={defaultTab} onTabChange={handleTabChange} />

      <Tabs defaultValue={defaultTab} onValueChange={handleTabChange}>
        <TabsContent value="buy-sell" className="m-0">
          <BuySellSection />
        </TabsContent>

        <TabsContent value="orders" className="m-0">
          <div className="p-6">
            <OrdersSection />
          </div>
        </TabsContent>

        <TabsContent value="my-ads" className="m-0">
          <MyAdsSection />
        </TabsContent>

        <TabsContent value="profile" className="m-0">
          <ProfileSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Home;
