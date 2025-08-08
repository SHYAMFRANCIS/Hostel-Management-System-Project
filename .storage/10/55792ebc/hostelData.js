// Mock data for Hostel Management System

// Stats Cards Data
export const hostelStats = [
  {
    title: 'Total Students',
    value: '120',
    change: '+5%',
    trend: 'up',
    icon: {
      path: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      bgColor: 'bg-blue-500'
    }
  },
  {
    title: 'Present Today',
    value: '105',
    change: '+2%',
    trend: 'up',
    icon: {
      path: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      bgColor: 'bg-green-500'
    }
  },
  {
    title: 'On Leave',
    value: '15',
    change: '-3%',
    trend: 'down',
    icon: {
      path: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      bgColor: 'bg-yellow-500'
    }
  },
  {
    title: 'Missing Items',
    value: '8',
    change: '+1',
    trend: 'up',
    icon: {
      path: 'M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z',
      bgColor: 'bg-red-500'
    }
  }
];

// Attendance Data (Last 7 Days)
export const attendanceData = [
  { name: 'Mon', present: 110, absent: 10 },
  { name: 'Tue', present: 115, absent: 5 },
  { name: 'Wed', present: 108, absent: 12 },
  { name: 'Thu', present: 112, absent: 8 },
  { name: 'Fri', present: 105, absent: 15 },
  { name: 'Sat', present: 118, absent: 2 },
  { name: 'Sun', present: 120, absent: 0 },
];

// Leave Requests Status
export const leaveRequestsData = [
  { name: 'Approved', value: 65 },
  { name: 'Pending', value: 25 },
  { name: 'Rejected', value: 10 },
];

export const LEAVE_COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

// Missing Items by Category
export const missingItemsData = [
  { name: 'Electronics', value: 40 },
  { name: 'Books', value: 30 },
  { name: 'Clothing', value: 20 },
  { name: 'Other', value: 10 },
];

export const MISSING_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Recent Leaves
export const recentLeaves = [
  { id: 1, student: "John Doe", room: "A-101", reason: "Family function", startDate: "2023-08-05", endDate: "2023-08-12", status: "Approved" },
  { id: 2, student: "Jane Smith", room: "B-205", reason: "Medical", startDate: "2023-08-07", endDate: "2023-08-10", status: "Pending" },
  { id: 3, student: "Robert Johnson", room: "C-103", reason: "Personal", startDate: "2023-08-10", endDate: "2023-08-13", status: "Rejected" },
  { id: 4, student: "Mary Williams", room: "A-302", reason: "College event", startDate: "2023-08-09", endDate: "2023-08-11", status: "Approved" },
];

// Recent Missing Items
export const recentMissingItems = [
  { id: 1, student: "Mike Brown", room: "D-105", item: "Laptop", location: "Library", date: "2023-08-06", status: "Missing" },
  { id: 2, student: "Sarah Davis", room: "B-210", item: "Textbook", location: "Cafeteria", date: "2023-08-05", status: "Found" },
  { id: 3, student: "David Miller", room: "A-104", item: "Wallet", location: "Gym", date: "2023-08-07", status: "Missing" },
  { id: 4, student: "Lisa Wilson", room: "C-202", item: "Headphones", location: "Study Room", date: "2023-08-04", status: "Missing" },
];

// Mock Users
export const mockUsers = [
  { id: 1, name: "Admin User", email: "admin@hostel.com", password: "admin123", role: "admin" },
  { id: 2, name: "John Doe", email: "john@example.com", password: "password", role: "student", room: "A-101" },
  { id: 3, name: "Jane Smith", email: "jane@example.com", password: "password", role: "student", room: "B-205" },
];