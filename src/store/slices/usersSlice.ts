import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';
import { mockUsers } from '../../mockData';

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  deletedUsers: number;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  deletedUsers: 0,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockUsers;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
      state.deletedUsers += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export const { deleteUser } = usersSlice.actions;
export default usersSlice.reducer;