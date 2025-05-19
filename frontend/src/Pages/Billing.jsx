import React, { useState } from 'react';

const Billing = () => {
  const [bills, setBills] = useState([
    {
      id: 1,
      patientName: 'John Doe',
      assignedDoctor: 'Dr. Smith',
      services: 'General Consultation',
      requiredSessions: 1,
      cost: 50,
      date: '2025-05-15',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      assignedDoctor: 'Dr. Lee',
      services: 'Blood Test, X-Ray',
      requiredSessions: 2,
      cost: 120,
      date: '2025-05-16',
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newBill, setNewBill] = useState({
    patientName: '',
    assignedDoctor: '',
    services: '',
    requiredSessions: '',
    cost: '',
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBill((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddBill = (e) => {
    e.preventDefault();
    const { patientName, assignedDoctor, services, requiredSessions, cost, date } = newBill;

    if (
      patientName.trim() === '' ||
      assignedDoctor.trim() === '' ||
      services.trim() === '' ||
      requiredSessions === '' ||
      cost === '' ||
      date === ''
    ) {
      alert('Please fill all fields.');
      return;
    }

    if (isNaN(cost) || Number(cost) <= 0) {
      alert('Please enter a valid positive cost.');
      return;
    }

    if (!Number.isInteger(Number(requiredSessions)) || Number(requiredSessions) <= 0) {
      alert('Please enter a valid positive number for required sessions.');
      return;
    }

    const newEntry = {
      id: bills.length + 1,
      patientName,
      assignedDoctor,
      services,
      requiredSessions: Number(requiredSessions),
      cost: Number(cost),
      date,
    };

    setBills((prev) => [...prev, newEntry]);
    setNewBill({ patientName: '', assignedDoctor: '', services: '', requiredSessions: '', cost: '', date: '' });
    setShowForm(false);
  };

  const totalAmount = bills.reduce((sum, bill) => sum + bill.cost, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-blue-900 drop-shadow-md">Clinic Billing</h1>

      <button
        onClick={() => setShowForm(true)}
        className="mb-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 active:scale-95 transition transform"
      >
        + Add New Bill
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <form
            onSubmit={handleAddBill}
            className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative"
          >
            <h2 className="text-2xl font-bold mb-6 text-blue-800">New Billing Entry</h2>

            <label className="block mb-2 font-semibold text-gray-700" htmlFor="patientName">
              Patient Name
            </label>
            <input
              id="patientName"
              name="patientName"
              value={newBill.patientName}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter patient name"
              className="w-full mb-5 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <label className="block mb-2 font-semibold text-gray-700" htmlFor="assignedDoctor">
              Assigned Doctor
            </label>
            <input
              id="assignedDoctor"
              name="assignedDoctor"
              value={newBill.assignedDoctor}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter doctor's name"
              className="w-full mb-5 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <label className="block mb-2 font-semibold text-gray-700" htmlFor="services">
              Services Provided
            </label>
            <textarea
              id="services"
              name="services"
              value={newBill.services}
              onChange={handleInputChange}
              placeholder="List of services (e.g. Consultation, X-Ray)"
              rows="3"
              className="w-full mb-5 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              required
            />

            <label className="block mb-2 font-semibold text-gray-700" htmlFor="requiredSessions">
              Required Sessions
            </label>
            <input
              id="requiredSessions"
              name="requiredSessions"
              value={newBill.requiredSessions}
              onChange={handleInputChange}
              type="number"
              min="1"
              placeholder="Number of sessions"
              className="w-full mb-5 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <label className="block mb-2 font-semibold text-gray-700" htmlFor="cost">
              Total Cost (₹)
            </label>
            <input
              id="cost"
              name="cost"
              value={newBill.cost}
              onChange={handleInputChange}
              type="number"
              min="0"
              step="0.01"
              placeholder="Enter cost"
              className="w-full mb-5 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <label className="block mb-2 font-semibold text-gray-700" htmlFor="date">
              Date
            </label>
            <input
              id="date"
              name="date"
              value={newBill.date}
              onChange={handleInputChange}
              type="date"
              className="w-full mb-6 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                className="px-5 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Add Bill
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="w-full max-w-7xl overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 border-r border-blue-500">#</th>
              <th className="px-6 py-3 border-r border-blue-500">Patient Name</th>
              <th className="px-6 py-3 border-r border-blue-500">Assigned Doctor</th>
              <th className="px-6 py-3 border-r border-blue-500">Services</th>
              <th className="px-6 py-3 border-r border-blue-500">Required Sessions</th>
              <th className="px-6 py-3 border-r border-blue-500">Cost (₹)</th>
              <th className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {bills.length > 0 ? (
              bills.map(({ id, patientName, assignedDoctor, services, requiredSessions, cost, date }, idx) => (
                <tr
                  key={id}
                  className={`border-b border-blue-100 ${
                    idx % 2 === 0 ? 'bg-blue-50' : ''
                  } hover:bg-blue-100 transition`}
                >
                  <td className="px-6 py-4 border-r border-blue-200 font-medium">{id}</td>
                  <td className="px-6 py-4 border-r border-blue-200">{patientName}</td>
                  <td className="px-6 py-4 border-r border-blue-200">{assignedDoctor}</td>
                  <td className="px-6 py-4 border-r border-blue-200 whitespace-pre-wrap">{services}</td>
                  <td className="px-6 py-4 border-r border-blue-200 text-center">{requiredSessions}</td>
                  <td className="px-6 py-4 border-r border-blue-200">₹{cost.toFixed(2)}</td>
                  <td className="px-6 py-4">{date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No billing records found.
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr className="bg-blue-200 font-bold text-blue-900">
              <td colSpan="5" className="px-6 py-3 text-right border-t border-blue-400">
                Total Amount:
              </td>
              <td colSpan="2" className="px-6 py-3 border-t border-blue-400">
                ₹{totalAmount.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Billing;
