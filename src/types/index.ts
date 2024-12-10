export interface User {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  region: string;
  registrationDate: string;
}

export interface AnalyticsMetrics {
  totalUsers: number;
  activeUsers: number;
  deletedUsers: number;
}

export interface ChartData {
  registrationTrend: {
    date: string;
    count: number;
  }[];
  usersByStatus: {
    status: string;
    count: number;
  }[];
  usersByRegion: {
    region: string;
    count: number;
  }[];
}