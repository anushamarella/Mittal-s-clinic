import React, { useState } from 'react';

const Services = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'General Checkup', description: 'Routine health examinations and tests', price: 500 },
    { id: 2, name: 'Blood Test', description: 'Comprehensive blood analysis', price: 700 },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newService, setNewService] = useState({ name: '', description: '', price: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService(prev => ({ ...prev, [name]: value }));
  };

  const handleAddService = (e) => {
    e.preventDefault();
    if (
      newService.name.trim() === '' ||
      newService.description.trim() === '' ||
      newService.price === '' ||
      isNaN(newService.price) ||
      Number(newService.price) < 0
    ) return;

    const newEntry = {
      id: services.length + 1,
      name: newService.name,
      description: newService.description,
      price: Number(newService.price),
    };
    setServices(prev => [...prev, newEntry]);
    setNewService({ name: '', description: '', price: '' });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-indigo-900 drop-shadow-md">Services List</h1>

      <button
        onClick={() => setShowForm(true)}
        className="mb-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 active:scale-95 transition transform"
      >
        + Add New Service
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <form
            onSubmit={handleAddService}
            className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative"
          >
            <h2 className="text-2xl font-bold mb-6 text-indigo-800">Add New Service</h2>

            <label className="block mb-2 font-semibold text-gray-700" htmlFor="name">
              Service Name
            </label>
            <input
              id="name"
              name="name"
              value={newService.name}
              onChange={handleInputChange}
              type="text"
              placeholder="Service name"
              className="w-full mb-5 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />

            <label className="block mb-2 font-semibold text-gray-700" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={newService.description}
              onChange={handleInputChange}
              placeholder="Service description"
              className="w-full mb-5 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
              rows="3"
              required
            />

            <label className="block mb-2 font-semibold text-gray-700" htmlFor="price">
              Price (₹)
            </label>
            <input
              id="price"
              name="price"
              value={newService.price}
              onChange={handleInputChange}
              type="number"
              min="0"
              placeholder="Enter price in rupees"
              className="w-full mb-6 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 font-semibold transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="w-full max-w-5xl overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="w-full text-left border-collapse">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-6 py-3 border-r border-indigo-500">S.No</th>
              <th className="px-6 py-3 border-r border-indigo-500">Service Name</th>
              <th className="px-6 py-3 border-r border-indigo-500">Description</th>
              <th className="px-6 py-3">Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {services.length > 0 ? (
              services.map(({ id, name, description, price }, idx) => (
                <tr
                  key={id}
                  className={`border-b border-indigo-100 ${
                    idx % 2 === 0 ? 'bg-indigo-50' : ''
                  } hover:bg-indigo-100 transition`}
                >
                  <td className="px-6 py-4 border-r border-indigo-200 font-medium">{id}</td>
                  <td className="px-6 py-4 border-r border-indigo-200">{name}</td>
                  <td className="px-6 py-4 border-r border-indigo-200">{description}</td>
                  <td className="px-6 py-4">{price.toLocaleString('en-IN')}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No services available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;
