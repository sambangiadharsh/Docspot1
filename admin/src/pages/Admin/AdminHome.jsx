const AdminHome = () => {
  return (
    <div className="flex items-center justify-center min-h-[75vh] px-4 bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-5xl
 w-full text-center">

        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to DocSpot
        </h1>

        <p className="text-gray-600 mt-3 text-sm leading-6">
          Manage appointments, view schedules, and stay connected with your medical workflow.
          Use the sidebar to access your tools and continue your work efficiently.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="flex flex-col items-center bg-indigo-50 p-4 rounded-xl shadow hover:shadow-md transition">
            <span className="text-2xl">📅</span>
            <p className="text-gray-700 text-sm mt-1">Schedule</p>
          </div>

          <div className="flex flex-col items-center bg-indigo-50 p-4 rounded-xl shadow hover:shadow-md transition">
            <span className="text-2xl">🩺</span>
            <p className="text-gray-700 text-sm mt-1">Patients</p>
          </div>

          <div className="flex flex-col items-center bg-indigo-50 p-4 rounded-xl shadow hover:shadow-md transition">
            <span className="text-2xl">📊</span>
            <p className="text-gray-700 text-sm mt-1">Insights</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminHome;
