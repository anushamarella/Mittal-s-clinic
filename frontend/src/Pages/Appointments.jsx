import React, { useState } from 'react';

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: 'John Doe',
      date: '2025-05-20',
      time: '10:00',
      doctor: 'Dr. Smith',
      reason: 'Routine Checkup',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      date: '2025-05-21',
      time: '14:30',
      doctor: 'Dr. Adams',
      reason: 'Follow-up',
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    date: '',
    time: '',
    doctor: '',
    reason: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment(prev => ({ ...prev, [name]: value }));
  };

  const handleAddAppointment = (e) => {
    e.preventDefault();
    const { patientName, date, time, doctor, reason } = newAppointment;
    if (
      patientName.trim() === '' ||
      date === '' ||
      time === '' ||
      doctor.trim() === '' ||
      reason.trim() === ''
    ) {
      alert('Please fill all fields.');
      return;
    }
    const newEntry = {
      id: appointments.length + 1,
      ...newAppointment,
    };
    setAppointments(prev => [...prev, newEntry]);
    setNewAppointment({
      patientName: '',
      date: '',
      time: '',
      doctor: '',
      reason: '',
    });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-green-900 drop-shadow-md">Clinic Appointments</h1>

      <button
        onClick={() => setShowForm(true)}
        className="mb-8 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 active:scale-95 transition transform"
      >
        + Schedule New Appointment
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <form
            onSubmit={handleAddAppointment}
            className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative"
          >
            <h2 className="text-2xl font-bold mb-6 text-green-800">New Appointment</h2>

            <label className="block mb-2 font-semibold text-gray-700" htmlFor="patientName">
              Patient Name
            </label>
            <input
              id="patientName"
              name="patientName"
              value={newAppointment.patientName}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter patient name"
              className="w-full mb-5 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />

            <label className="block mb-2 font-semibold text-gray-700" htmlFor="date">
              Date
            </label>
            <input
              id="date"
              name="date"
              value={newAppointment.date}
              onChange={handleInputChange}
              type="date"
              className="w-full mb-5 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />

            <label className="block mb-2 font-semibold text-gray-700" htmlFor="time">
              Time
            </label>
            <input
              id="time"
              name="time"
              value={newAppointment.time}
              onChange={handleInputChange}
              type="time"
              className="w-full mb-5 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />

            <label className="block mb-2 font-semibold text-gray-700" htmlFor="doctor">
              Doctor
            </label>
            <input
              id="doctor"
              name="doctor"
              value={newAppointment.doctor}
              onChange={handleInputChange}
              type="text"
              placeholder="Doctor's name"
              className="w-full mb-5 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />

            <label className="block mb-2 font-semibold text-gray-700" htmlFor="reason">
              Reason for Visit
            </label>
            <textarea
              id="reason"
              name="reason"
              value={newAppointment.reason}
              onChange={handleInputChange}
              placeholder="Describe the reason"
              rows="3"
              className="w-full mb-6 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
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
                className="px-5 py-2 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition"
              >
                Schedule
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="w-full max-w-6xl overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="w-full text-left border-collapse">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-6 py-3 border-r border-green-500">#</th>
              <th className="px-6 py-3 border-r border-green-500">Patient Name</th>
              <th className="px-6 py-3 border-r border-green-500">Date</th>
              <th className="px-6 py-3 border-r border-green-500">Time</th>
              <th className="px-6 py-3 border-r border-green-500">Doctor</th>
              <th className="px-6 py-3">Reason</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map(({ id, patientName, date, time, doctor, reason }, idx) => (
                <tr
                  key={id}
                  className={`border-b border-green-100 ${
                    idx % 2 === 0 ? 'bg-green-50' : ''
                  } hover:bg-green-100 transition`}
                >
                  <td className="px-6 py-4 border-r border-green-200 font-medium">{id}</td>
                  <td className="px-6 py-4 border-r border-green-200">{patientName}</td>
                  <td className="px-6 py-4 border-r border-green-200">{date}</td>
                  <td className="px-6 py-4 border-r border-green-200">{time}</td>
                  <td className="px-6 py-4 border-r border-green-200">{doctor}</td>
                  <td className="px-6 py-4">{reason}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No appointments scheduled.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
