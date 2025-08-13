import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI-Powered Study Planner
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Create personalized study plans and track your progress with AI assistance
        </p>
        <div className="space-x-4">
          <Link href="/auth/register">
            <Button>Get Started</Button>
          </Link>
          <Link href="/auth/login">
            <Button variant="secondary">Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
