import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchAnalytics } from '../store/slices/analyticsSlice';
import AnalyticsCards from '../components/analytics/AnalyticsCards';
import Charts from '../components/analytics/Charts';

const AnalyticsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { chartData, metrics, loading, error } = useSelector(
    (state: RootState) => state.analytics
  );
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [selectedRegion, setSelectedRegion] = useState('all');

  useEffect(() => {
    dispatch(fetchAnalytics());
  }, [dispatch]);

  if (loading) {
    return <div className="flex justify-center items-center h-full">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Analytics Dashboard</h2>
      
      <div className="mb-6 flex gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Start Date
          </label>
          <input
            type="date"
            className="border rounded p-2"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            End Date
          </label>
          <input
            type="date"
            className="border rounded p-2"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Region
          </label>
          <select
            className="border rounded p-2"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            <option value="all">All Regions</option>
            <option value="north">North</option>
            <option value="south">South</option>
            <option value="east">East</option>
            <option value="west">West</option>
          </select>
        </div>
      </div>

      <AnalyticsCards metrics={metrics} />
      <Charts data={chartData} />
    </div>
  );
};

export default AnalyticsPage;