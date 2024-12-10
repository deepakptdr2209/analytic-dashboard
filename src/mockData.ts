import { User, ChartData } from './types';
import { addMonths, format } from 'date-fns';

export const mockUsers: User[] = Array.from({ length: 50 }, (_, i) => ({
  id: `user-${i + 1}`,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  status: Math.random() > 0.3 ? 'active' : 'inactive',
  region: ['North', 'South', 'East', 'West'][Math.floor(Math.random() * 4)],
  registrationDate: format(addMonths(new Date(2023, 0, 1), i % 6), 'yyyy-MM-dd'),
}));

export const mockChartData: ChartData = {
  registrationTrend: Array.from({ length: 6 }, (_, i) => ({
    date: format(addMonths(new Date(2023, 0, 1), i), 'MMM yyyy'),
    count: Math.floor(Math.random() * 20) + 5,
  })),
  usersByStatus: [
    { status: 'Active', count: 35 },
    { status: 'Inactive', count: 15 },
  ],
  usersByRegion: [
    { region: 'North', count: 12 },
    { region: 'South', count: 15 },
    { region: 'East', count: 8 },
    { region: 'West', count: 15 },
  ],
};