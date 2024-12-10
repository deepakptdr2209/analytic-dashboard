import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ChartData, AnalyticsMetrics } from '../../types';
import { mockChartData } from '../../mockData';

interface AnalyticsState {
  metrics: AnalyticsMetrics;
  chartData: ChartData;
  loading: boolean;
  error: string | null;
}

const initialState: AnalyticsState = {
  metrics: {
    totalUsers: 0,
    activeUsers: 0,
    deletedUsers: 0,
  },
  chartData: {
    registrationTrend: [],
    usersByStatus: [],
    usersByRegion: [],
  },
  loading: false,
  error: null,
};

export const fetchAnalytics = createAsyncThunk('analytics/fetchAnalytics', async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockChartData;
});

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    updateMetrics: (state, action) => {
      state.metrics = { ...state.metrics, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnalytics.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAnalytics.fulfilled, (state, action) => {
        state.loading = false;
        state.chartData = action.payload;
      })
      .addCase(fetchAnalytics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch analytics';
      });
  },
});

export const { updateMetrics } = analyticsSlice.actions;
export default analyticsSlice.reducer;