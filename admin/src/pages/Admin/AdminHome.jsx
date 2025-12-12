const AdminHome = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-indigo-50 to-blue-100 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-xl w-full text-center animate-fadeIn">
        
        <div className="text-5xl mb-4 animate-bounce">🎉</div>
        
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, Admin
        </h1>

        <p className="text-gray-600 mt-3 text-sm leading-6">
          Manage doctors, appointments, and patients efficiently using the menu on the left.  
          You have full control over the DocSpot platform.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="flex flex-col items-center bg-indigo-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
            <span className="text-2xl">🩺</span>
            <p className="text-gray-700 text-sm mt-1">Doctors</p>
          </div>

          <div className="flex flex-col items-center bg-indigo-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
            <span className="text-2xl">📅</span>
            <p className="text-gray-700 text-sm mt-1">Appointments</p>
          </div>

          <div className="flex flex-col items-center bg-indigo-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
            <span className="text-2xl">👥</span>
            <p className="text-gray-700 text-sm mt-1">Patients</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminHome;
