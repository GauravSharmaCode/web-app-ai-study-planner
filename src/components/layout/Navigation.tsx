import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gray-50 border-r min-h-screen w-64 p-4">
      <div className="space-y-2">
        <Link 
          href="/dashboard" 
          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
        >
          Dashboard
        </Link>
        <Link 
          href="/plans/new" 
          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
        >
          Create Plan
        </Link>
      </div>
    </nav>
  );
}