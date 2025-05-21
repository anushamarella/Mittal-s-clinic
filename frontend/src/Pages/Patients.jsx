import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Patients = ({ patients, setPatients }) => {
  const navigate = useNavigate();
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingPatient, setEditingPatient] = useState(null);

  const handleDelete = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
  };

  const handleEdit = (patient) => {
    setEditingPatient(patient);
    setShowEditForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingPatient((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedPatients = patients.map((p) =>
      p.id === editingPatient.id ? editingPatient : p
    );
    setPatients(updatedPatients);
    setShowEditForm(false);
    setEditingPatient(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-emerald-900 drop-shadow-md">Patients List</h1>

      <button
        onClick={() => navigate('/add-patient')}
        className="mb-8 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 active:scale-95 transition transform"
      >
        Add New Patient
      </button>

      <div className="w-full overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead className="bg-emerald-600 text-white">
            <tr>
              <th className="px-6 py-3 border-r border-emerald-500">S.no</th>
              <th className="px-6 py-3 border-r border-emerald-500">Name</th>
              <th className="px-6 py-3 border-r border-emerald-500">Age</th>
              <th className="px-6 py-3 border-r border-emerald-500">Mobile</th>
              <th className="px-6 py-3 border-r border-emerald-500">Address</th>
              <th className="px-6 py-3 border-r border-emerald-500">DOB</th>
              <th className="px-6 py-3 border-r border-emerald-500">Gender</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.length > 0 ? (
              patients.map((patient, idx) => (
                <tr
                  key={patient.id}
                  className={`border-b border-emerald-100 ${
                    idx % 2 === 0 ? 'bg-emerald-50' : ''
                  } hover:bg-emerald-100 transition`}
                >
                  <td className="px-6 py-4 border-r border-emerald-200 font-medium">{patient.id}</td>
                  <td className="px-6 py-4 border-r border-emerald-200">{patient.name}</td>
                  <td className="px-6 py-4 border-r border-emerald-200">{patient.age}</td>
                  <td className="px-6 py-4 border-r border-emerald-200">{patient.mobile}</td>
                  <td className="px-6 py-4 border-r border-emerald-200">{patient.address}</td>
                  <td className="px-6 py-4 border-r border-emerald-200">{patient.dob}</td>
                  <td className="px-6 py-4 border-r border-emerald-200">{patient.gender}</td>
                  <td className="px-6 py-4 flex space-x-3 justify-center">
                    <button
                      onClick={() => handleEdit(patient)}
                      className="text-sm px-4 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(patient.id)}
                      className="text-sm px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-6 text-gray-500">
                  No patients available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {showEditForm && editingPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <form
            onSubmit={handleUpdate}
            className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg space-y-4"
          >
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">Edit Patient</h2>

            <input
              type="text"
              name="name"
              value={editingPatient.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-400"
              required
            />
            <input
              type="number"
              name="age"
              value={editingPatient.age}
              onChange={handleInputChange}
              placeholder="Age"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-400"
              required
            />
            <input
              type="text"
              name="mobile"
              value={editingPatient.mobile}
              onChange={handleInputChange}
              placeholder="Mobile"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-400"
              required
            />
            <input
              type="text"
              name="address"
              value={editingPatient.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-400"
              required
            />
            <input
              type="date"
              name="dob"
              value={editingPatient.dob}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-400"
              required
            />
            <select
              name="gender"
              value={editingPatient.gender}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-400"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <div className="flex justify-end space-x-3 mt-4">
              <button
                type="button"
                onClick={() => {
                  setShowEditForm(false);
                  setEditingPatient(null);
                }}
                className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 font-semibold transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-md bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Patients;
