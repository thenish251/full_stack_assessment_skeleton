import React, { useState } from 'react';

function EditUsersModal({ property, users, closeModal }) {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const toggleUser = (userId) => {
    setSelectedUsers(prev =>
      prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]
    );
  };

  const saveChanges = async () => {
    await fetch(`/api/properties/${property.id}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userIds: selectedUsers })
    });
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit Users for {property.address}</h2>
        <div className="mb-4">
          {users.map(user => (
            <div key={user.id} className="flex items-center">
              <input 
                type="checkbox" 
                checked={selectedUsers.includes(user.id)}
                onChange={() => toggleUser(user.id)}
                className="mr-2"
              />
              <span>{user.username}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button 
            className="bg-gray-500 text-white px-3 py-1 rounded mr-2" 
            onClick={closeModal}
          >
            Cancel
          </button>
          <button 
            className="bg-blue-500 text-white px-3 py-1 rounded" 
            onClick={saveChanges}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditUsersModal;
