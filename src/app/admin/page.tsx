import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
        <div className="text-sm text-gray-400">Logged in as {session.user?.name}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6">
          <h2 className="text-xl font-bold mb-4 text-blue-400">Manage Portfolio</h2>
          <p className="text-gray-400 mb-6 text-sm">Add, edit, or remove portfolio items.</p>
          <button className="bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg transition-all w-full border border-blue-500/30">
            Edit Portfolio
          </button>
        </div>

        <div className="glass-panel p-6">
          <h2 className="text-xl font-bold mb-4 text-purple-400">Manage Clients</h2>
          <p className="text-gray-400 mb-6 text-sm">Update client testimonials and details.</p>
          <button className="bg-purple-600/20 text-purple-400 hover:bg-purple-600 hover:text-white px-4 py-2 rounded-lg transition-all w-full border border-purple-500/30">
            Edit Clients
          </button>
        </div>

        <div className="glass-panel p-6">
          <h2 className="text-xl font-bold mb-4 text-emerald-400">Manage Stats</h2>
          <p className="text-gray-400 mb-6 text-sm">Update company statistics and ROI metrics.</p>
          <button className="bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white px-4 py-2 rounded-lg transition-all w-full border border-emerald-500/30">
            Edit Stats
          </button>
        </div>
      </div>
    </div>
  );
}
