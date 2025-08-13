import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">
            StudyPlanner AI
          </Link>
          <nav className="flex space-x-4">
            <Link href="/dashboard" className="text-gray-600 hover:text-blue-600">
              Dashboard
            </Link>
            <Link href="/auth/login" className="text-gray-600 hover:text-blue-600">
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}