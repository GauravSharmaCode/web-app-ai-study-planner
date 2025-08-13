import Header from '@/src/components/layout/Header';

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Dashboard
          </h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600">
              Welcome to your study planner dashboard!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}