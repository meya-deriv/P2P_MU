import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import {
  User,
  Shield,
  Star,
  Clock,
  Settings,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface ProfileStats {
  completedTrades: number;
  successRate: number;
  averageResponse: number;
  verificationLevel: "unverified" | "basic" | "advanced" | "full";
  rating: number;
  totalTrades: number;
}

interface ProfileSectionProps {
  stats?: ProfileStats;
}

const defaultStats: ProfileStats = {
  completedTrades: 156,
  successRate: 98.5,
  averageResponse: 15,
  verificationLevel: "basic",
  rating: 4.8,
  totalTrades: 160,
};

const ProfileSection = ({ stats = defaultStats }: ProfileSectionProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6 bg-gray-50">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="w-8 h-8 text-gray-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Trading Profile</h2>
            <div className="flex items-center gap-2 mt-1">
              <Badge
                variant={
                  stats.verificationLevel === "unverified"
                    ? "destructive"
                    : "default"
                }
                className="flex items-center gap-1"
              >
                <Shield className="w-3 h-3" />
                {stats.verificationLevel.charAt(0).toUpperCase() +
                  stats.verificationLevel.slice(1)}{" "}
                Verification
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                {stats.rating.toFixed(1)}
              </Badge>
            </div>
          </div>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Settings className="w-4 h-4" />
          Settings
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg">Trading Statistics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Success Rate</span>
                <span className="font-medium">{stats.successRate}%</span>
              </div>
              <Progress value={stats.successRate} className="h-2" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <CheckCircle className="w-4 h-4" />
                  Completed
                </div>
                <span className="text-2xl font-bold">
                  {stats.completedTrades}
                </span>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <Clock className="w-4 h-4" />
                  Avg. Response
                </div>
                <span className="text-2xl font-bold">
                  {stats.averageResponse}m
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg">Verification Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Email Verification</span>
                </div>
                <Badge variant="success">Complete</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Phone Verification</span>
                </div>
                <Badge variant="success">Complete</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                  <span>ID Verification</span>
                </div>
                <Badge variant="warning">Pending</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileSection;
