import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Bitcoin, ClipboardList, FileText, User } from "lucide-react";

interface NavigationTab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface NavigationTabsProps {
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  tabs?: NavigationTab[];
}

const defaultTabs: NavigationTab[] = [
  {
    id: "buy-sell",
    label: "Buy/Sell",
    icon: <Bitcoin className="w-4 h-4" />,
  },
  {
    id: "orders",
    label: "Orders",
    icon: <ClipboardList className="w-4 h-4" />,
  },
  {
    id: "my-ads",
    label: "My Ads",
    icon: <FileText className="w-4 h-4" />,
  },
  {
    id: "profile",
    label: "Profile",
    icon: <User className="w-4 h-4" />,
  },
];

const NavigationTabs = ({
  activeTab = "buy-sell",
  onTabChange = () => {},
  tabs = defaultTabs,
}: NavigationTabsProps) => {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      {/* Logo Section */}
      <div className="h-16 px-4 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center">
          <img
            src="https://deriv.com/static/media/deriv-logo.7a5c3576.svg"
            alt="Deriv Logo"
            className="h-8"
          />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="px-4">
        <Tabs
          defaultValue={activeTab}
          onValueChange={onTabChange}
          className="h-12"
        >
          <TabsList className="h-full w-full max-w-2xl mx-auto bg-transparent gap-8">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors",
                  "data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary",
                  "hover:text-primary",
                )}
              >
                {tab.icon}
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default NavigationTabs;
