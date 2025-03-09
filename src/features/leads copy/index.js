import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FinanceAccounting = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://bakcend-n9kq.onrender.com/User/get');
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch users');
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">User Management Board</h2>

      {isLoading && <p>Loading users...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-7xl">
        <h3 className="text-lg font-semibold mb-4">List of Users</h3>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 py-3 px-4 text-left text-sm font-medium text-gray-600">First Name</th>
                <th className="border border-gray-300 py-3 px-4 text-left text-sm font-medium text-gray-600">Last Name</th>
                <th className="border border-gray-300 py-3 px-4 text-left text-sm font-medium text-gray-600">Email</th>
                <th className="border border-gray-300 py-3 px-4 text-left text-sm font-medium text-gray-600">Phone</th>
                <th className="border border-gray-300 py-3 px-4 text-left text-sm font-medium text-gray-600">Business Name</th>
                <th className="border border-gray-300 py-3 px-4 text-left text-sm font-medium text-gray-600">Business Type</th>
                <th className="border border-gray-300 py-3 px-4 text-left text-sm font-medium text-gray-600">Street Address</th>
                <th className="border border-gray-300 py-3 px-4 text-left text-sm font-medium text-gray-600">City</th>
                <th className="border border-gray-300 py-3 px-4 text-left text-sm font-medium text-gray-600">State</th>
                <th className="border border-gray-300 py-3 px-4 text-left text-sm font-medium text-gray-600">Pin Code</th>
                <th className="border border-gray-300 py-3 px-4 text-left text-sm font-medium text-gray-600">Date Joined</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user._id} className="border-b border-gray-300">
                  <td className="border border-gray-300 py-3 px-4 text-sm text-gray-800">{user.firstName}</td>
                  <td className="border border-gray-300 py-3 px-4 text-sm text-gray-800">{user.lastName}</td>
                  <td className="border border-gray-300 py-3 px-4 text-sm text-gray-800">{user.email}</td>
                  <td className="border border-gray-300 py-3 px-4 text-sm text-gray-800">{user.phone}</td>
                  <td className="border border-gray-300 py-3 px-4 text-sm text-gray-800">{user.businessName}</td>
                  <td className="border border-gray-300 py-3 px-4 text-sm text-gray-800">{user.businessType}</td>
                  <td className="border border-gray-300 py-3 px-4 text-sm text-gray-800">{user.streetAddress}</td>
                  <td className="border border-gray-300 py-3 px-4 text-sm text-gray-800">{user.city}</td>
                  <td className="border border-gray-300 py-3 px-4 text-sm text-gray-800">{user.state}</td>
                  <td className="border border-gray-300 py-3 px-4 text-sm text-gray-800">{user.pinCode}</td>
                  <td className="border border-gray-300 py-3 px-4 text-sm text-gray-800">{new Date(user.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4 space-x-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="px-4 py-2 bg-gray-100 rounded-md">Page {currentPage} of {totalPages}</span>
          <button
            className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinanceAccounting;
