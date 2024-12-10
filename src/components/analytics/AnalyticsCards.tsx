import React from 'react';
import { Users, UserCheck, UserMinus } from 'lucide-react';
import { AnalyticsMetrics } from '../../types';

interface AnalyticsCardsProps {
  metrics: AnalyticsMetrics;
}

const AnalyticsCards: React.FC<AnalyticsCardsProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center">
          <Users className="w-12 h-12 text-blue-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Total Users</p>
            <h3 className="text-2xl font-bold">{metrics.totalUsers}</h3>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center">
          <UserCheck className="w-12 h-12 text-green-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Active Users</p>
            <h3 className="text-2xl font-bold">{metrics.activeUsers}</h3>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center">
          <UserMinus className="w-12 h-12 text-red-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Deleted Users</p>
            <h3 className="text-2xl font-bold">{metrics.deletedUsers}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCards;