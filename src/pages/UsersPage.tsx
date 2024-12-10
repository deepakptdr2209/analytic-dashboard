import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchUsers, deleteUser } from '../store/slices/usersSlice';
import UserTable from '../components/users/UserTable';
import { User } from '../types';

const UsersPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteUser(id));
  };

  const handleView = (user: User) => {
    // Implement user details view
    console.log('View user:', user);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-full">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">User Management</h2>
      <UserTable users={users} onDelete={handleDelete} onView={handleView} />
    </div>
  );
};

export default UsersPage;