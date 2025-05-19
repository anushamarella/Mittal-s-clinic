import React from 'react';
import { FaUserMd, FaUsers, FaCalendarCheck, FaFileInvoiceDollar } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js modules
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Dashboard = () => {
  // Sales data for line chart
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Revenue (₹)',
        data: [50000, 62000, 58000, 74000, 67000, 84500],
        fill: true,
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#1D4ED8',
        pointBorderColor: '#1D4ED8',
        pointRadius: 5
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#374151',
          font: { size: 14 }
        }
      },
      title: {
        display: true,
        text: 'Revenue Trends (2025)',
        font: { size: 20 },
        color: '#111827',
        padding: { top: 10, bottom: 20 }
      }
    },
    scales: {
      x: {
        ticks: { color: '#6B7280', font: { size: 12 } },
        grid: { display: false }
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `₹${value}`,
          color: '#6B7280',
          font: { size: 12 }
        },
        grid: {
          color: '#E5E7EB'
        }
      }
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Clinic Management Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <DashboardCard icon={<FaUsers />} label="Total Patients" value="1280" color="bg-blue-500" />
        <DashboardCard icon={<FaCalendarCheck />} label="Appointments Today" value="32" color="bg-green-500" />
        <DashboardCard icon={<FaUserMd />} label="Available Doctors" value="15" color="bg-purple-500" />
        <DashboardCard icon={<FaFileInvoiceDollar />} label="Revenue" value="₹84,500" color="bg-yellow-500" />
      </div>

      {/* Revenue Line Chart */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="h-80">
          <Line data={salesData} options={options} />
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ icon, label, value, color }) => (
  <div className={`p-4 rounded-lg shadow text-white ${color} flex items-center justify-between`}>
    <div className="text-3xl">{icon}</div>
    <div className="text-right">
      <div className="text-sm">{label}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  </div>
);

export default Dashboard;
