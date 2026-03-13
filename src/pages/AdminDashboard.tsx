import { Link } from 'react-router-dom';
import { useProperties } from '../hooks/useProperties';

const AdminDashboard = () => {
  const { properties, deleteProperty } = useProperties();
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-premium-black text-white p-8 hidden lg:block">
        <div className="flex items-center space-x-2 mb-12">
          <div className="w-6 h-6 bg-premium-gold rotate-45 flex items-center justify-center">
            <span className="text-white -rotate-45 font-serif font-bold italic text-xs">G</span>
          </div>
          <span className="text-lg font-serif font-bold tracking-tight">GOLDEN ESTATE</span>
        </div>
        
        <nav className="space-y-6">
          <Link to="/coming-soon" className="flex items-center text-premium-gold font-bold">
            <span className="w-2 h-2 bg-premium-gold rounded-full mr-3"></span>
            Dashboard
          </Link>
          <Link to="/coming-soon" className="flex items-center text-gray-400 hover:text-white transition-colors">
            <span className="w-2 h-2 border border-gray-400 rounded-full mr-3"></span>
            Properties
          </Link>
          <Link to="/coming-soon" className="flex items-center text-gray-400 hover:text-white transition-colors">
            <span className="w-2 h-2 border border-gray-400 rounded-full mr-3"></span>
            Leads
          </Link>
          <Link to="/coming-soon" className="flex items-center text-gray-400 hover:text-white transition-colors">
            <span className="w-2 h-2 border border-gray-400 rounded-full mr-3"></span>
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 md:p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-serif">Admin Dashboard</h1>
          <button className="bg-premium-gold text-white px-6 py-2 text-sm font-bold uppercase tracking-widest">
            + New Property
          </button>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 border border-gray-100 shadow-sm">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">Total Listings</p>
            <p className="text-4xl font-serif">{properties.length}</p>
          </div>
          <div className="bg-white p-8 border border-gray-100 shadow-sm">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">Active Inquiries</p>
            <p className="text-4xl font-serif">24</p>
          </div>
          <div className="bg-white p-8 border border-gray-100 shadow-sm">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-bold">Total Sales</p>
            <p className="text-4xl font-serif">$12.4M</p>
          </div>
        </div>

        {/* Property List */}
        <div className="bg-white border border-gray-100 shadow-sm">
          <div className="p-6 border-b border-gray-50">
            <h2 className="text-xl font-serif">Property Inventory</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 text-xs uppercase tracking-widest text-gray-400 font-bold">
                  <th className="px-6 py-4">Property</th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {properties.map(p => (
                  <tr key={p.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium">{p.title}</td>
                    <td className="px-6 py-4 text-sm">{p.type}</td>
                    <td className="px-6 py-4 text-sm">${p.price.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] uppercase font-bold tracking-tighter rounded-full">Active</span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-4">
                      <button className="text-premium-gold font-bold">Edit</button>
                      <button 
                        className="text-red-500 font-medium"
                        onClick={() => deleteProperty(p.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
