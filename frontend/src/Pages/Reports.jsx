import React, { useState } from 'react';

const Reports = () => {
  // State for filter
  const [filter, setFilter] = useState('daily'); // daily, weekly, monthly

  // Mock data structured by filter
  const data = {
    daily: {
      totalRevenue: 55000,
      totalPatients: 35,
      doctors: [
        { doctor: 'Dr. Smith', patients: 12, revenue: 18000 },
        { doctor: 'Dr. Lee', patients: 10, revenue: 16000 },
        { doctor: 'Dr. Johnson', patients: 13, revenue: 21000 },
      ],
    },
    weekly: {
      totalRevenue: 385000,
      totalPatients: 210,
      doctors: [
        { doctor: 'Dr. Smith', patients: 70, revenue: 115000 },
        { doctor: 'Dr. Lee', patients: 60, revenue: 96000 },
        { doctor: 'Dr. Johnson', patients: 80, revenue: 174000 },
      ],
    },
    monthly: {
      totalRevenue: 1650000,
      totalPatients: 900,
      doctors: [
        { doctor: 'Dr. Smith', patients: 300, revenue: 480000 },
        { doctor: 'Dr. Lee', patients: 280, revenue: 448000 },
        { doctor: 'Dr. Johnson', patients: 320, revenue: 720000 },
      ],
    },
  };

  const { totalRevenue, totalPatients, doctors } = data[filter];

  // Currency formatter for INR
  const inrFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  });

  return (
    <div className="min-h-screen p-8 bg-gradient-to-tr from-green-50 to-green-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10 text-green-900">Clinic Reports</h1>

      {/* Filter buttons */}
      <div className="mb-8 flex space-x-4">
        {['daily', 'weekly', 'monthly'].map((period) => (
          <button
            key={period}
            onClick={() => setFilter(period)}
            className={`px-5 py-2 rounded-full font-semibold transition ${
              filter === period
                ? 'bg-green-700 text-white shadow-lg'
                : 'bg-green-200 text-green-800 hover:bg-green-300'
            }`}
          >
            {period.charAt(0).toUpperCase() + period.slice(1)}
          </button>
        ))}
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Total Patients */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Patients Visited</h2>
          <p className="text-5xl font-extrabold text-green-900">{totalPatients}</p>
        </div>

        {/* Total Revenue */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Total Revenue Generated</h2>
          <p className="text-5xl font-extrabold text-green-900">
            {inrFormatter.format(totalRevenue)}
          </p>
        </div>

        {/* Total Sessions (optional, you can add more) */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Sessions Completed</h2>
          <p className="text-5xl font-extrabold text-green-900">--</p>
        </div>
      </div>

      {/* Doctor wise patients and revenue */}
      <section className="w-full max-w-4xl mt-16 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-green-800 mb-6 text-center">
          Patients & Revenue per Doctor
        </h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="px-6 py-3 border border-green-600">Doctor</th>
              <th className="px-6 py-3 border border-green-600">Patients</th>
              <th className="px-6 py-3 border border-green-600">Revenue Generated</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map(({ doctor, patients, revenue }, idx) => (
              <tr
                key={doctor}
                className={`border border-green-300 ${
                  idx % 2 === 0 ? 'bg-green-50' : 'bg-green-100'
                }`}
              >
                <td className="px-6 py-4 border-r border-green-300">{doctor}</td>
                <td className="px-6 py-4 text-center">{patients}</td>
                <td className="px-6 py-4 text-right font-mono">
                  {inrFormatter.format(revenue)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Reports;
