import React, { useState } from 'react';

const Doctors = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Dr. John Smith', specialty: 'Cardiology' },
    { id: 2, name: 'Dr. Alice Brown', specialty: 'Neurology' },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newDoctor, setNewDoctor] = useState({ name: '', specialty: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor(prev => ({ ...prev, [name]: value }));
  };

  const handleAddDoctor = (e) => {
    e.preventDefault();
    if (newDoctor.name.trim() === '' || newDoctor.specialty.trim() === '') return;
    const newEntry = {
      id: doctors.length + 1,
      name: newDoctor.name,
      specialty: newDoctor.specialty,
    };
    setDoctors(prev => [...prev, newEntry]);
    setNewDoctor({ name: '', specialty: '' });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-indigo-900 drop-shadow-md">Doctors List</h1>

      <button
        onClick={() => setShowForm(true)}
        className="mb-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 active:scale-95 transition transform"
      >
        + Add New Doctor
      </button>

      {/* Modal backdrop */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          {/* Modal */}
          <form
            onSubmit={handleAddDoctor}
            className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative"
          >
            <h2 className="text-2xl font-bold mb-6 text-indigo-800">Add New Doctor</h2>

            <label className="block mb-2 font-semibold text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={newDoctor.name}
              onChange={handleInputChange}
              type="text"
              placeholder="Doctor's full name"
              className="w-full mb-5 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />

            <label className="block mb-2 font-semibold text-gray-700" htmlFor="specialty">
              Specialty
            </label>
            <input
              id="specialty"
              name="specialty"
              value={newDoctor.specialty}
              onChange={handleInputChange}
              type="text"
              placeholder="Specialty"
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

      <div className="w-full max-w-4xl overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="w-full text-left border-collapse">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-6 py-3 border-r border-indigo-500">#</th>
              <th className="px-6 py-3 border-r border-indigo-500">Name</th>
              <th className="px-6 py-3">Specialty</th>
            </tr>
          </thead>
          <tbody>
            {doctors.length > 0 ? (
              doctors.map(({ id, name, specialty }, idx) => (
                <tr
                  key={id}
                  className={`border-b border-indigo-100 ${
                    idx % 2 === 0 ? 'bg-indigo-50' : ''
                  } hover:bg-indigo-100 transition`}
                >
                  <td className="px-6 py-4 border-r border-indigo-200 font-medium">{id}</td>
                  <td className="px-6 py-4 border-r border-indigo-200">{name}</td>
                  <td className="px-6 py-4">{specialty}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-6 text-gray-500">
                  No doctors available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Doctors;
