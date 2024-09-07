import React, { useState, useEffect } from 'react';
import EditUsersModal from './components/EditUsersModal';

function App() {
  const [properties, setProperties] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    fetch('/api/properties').then(res => res.json()).then(data => setProperties(data));
    fetch('/api/users').then(res => res.json()).then(data => setUsers(data));
  }, []);

  const handleEditUsers = (property) => {
    setSelectedProperty(property);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-6">Properties</h1>
      <div className="grid grid-cols-3 gap-4">
        {properties.map(property => (
          <div key={property.id} className="p-4 border rounded shadow">
            <p>{property.address}</p>
            <button 
              className="bg-blue-500 text-white px-3 py-1 mt-2 rounded"
              onClick={() => handleEditUsers(property)}
            >
              Edit Users
            </button>
          </div>
        ))}
      </div>
      {selectedProperty && (
        <EditUsersModal 
          property={selectedProperty} 
          users={users} 
          closeModal={() => setSelectedProperty(null)} 
        />
      )}
    </div>
  );
}

export default App;
