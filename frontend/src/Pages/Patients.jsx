import React, { useState } from 'react';

const Patients = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: 'Jane Doe', age: 28 },
    { id: 2, name: 'Mark Wilson', age: 45 },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newPatient, setNewPatient] = useState({ name: '', age: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient(prev => ({ ...prev, [name]: value }));
  };

  const handleAddPatient = (e) => {
    e.preventDefault();
    if (newPatient.name.trim() === '' || newPatient.age.trim() === '') return;
    if (isNaN(newPatient.age) || Number(newPatient.age) <= 0) return; // Basic validation for age
    const newEntry = {
      id: patients.length + 1,
      name: newPatient.name,
      age: Number(newPatient.age),
    };
    setPatients(prev => [...prev, newEntry]);
    setNewPatient({ name: '', age: '' });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-emerald-900 drop-shadow-md">Patients List</h1>

      <button
        onClick={() => setShowForm(true)}
        className="mb-8 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 active:scale-95 transition transform"
      >
        + Add New Patient
      </button>

      {/* Modal backdrop */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          {/* Modal */}
          <form
            onSubmit={handleAddPatient}
            className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative"
          >
            <h2 className="text-2xl font-bold mb-6 text-emerald-800">Add New Patient</h2>

            <label className="block mb-2 font-semibold text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={newPatient.name}
              onChange={handleInputChange}
              type="text"
              placeholder="Patient's full name"
              className="w-full mb-5 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />

            <label className="block mb-2 font-semibold text-gray-700" htmlFor="age">
              Age
            </label>
            <input
              id="age"
              name="age"
              value={newPatient.age}
              onChange={handleInputChange}
              type="number"
              min="0"
              placeholder="Age"
              className="w-full mb-6 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
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
                className="px-5 py-2 rounded-md bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="w-full max-w-4xl overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="w-full text-left border-collapse">
          <thead className="bg-emerald-600 text-white">
            <tr>
              <th className="px-6 py-3 border-r border-emerald-500">#</th>
              <th className="px-6 py-3 border-r border-emerald-500">Name</th>
              <th className="px-6 py-3">Age</th>
            </tr>
          </thead>
          <tbody>
            {patients.length > 0 ? (
              patients.map(({ id, name, age }, idx) => (
                <tr
                  key={id}
                  className={`border-b border-emerald-100 ${
                    idx % 2 === 0 ? 'bg-emerald-50' : ''
                  } hover:bg-emerald-100 transition`}
                >
                  <td className="px-6 py-4 border-r border-emerald-200 font-medium">{id}</td>
                  <td className="px-6 py-4 border-r border-emerald-200">{name}</td>
                  <td className="px-6 py-4">{age}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-6 text-gray-500">
                  No patients available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;
