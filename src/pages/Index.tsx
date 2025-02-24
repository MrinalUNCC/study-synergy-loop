
import { LearningPath } from "@/components/LearningPath";
import { Leaderboard } from "@/components/Leaderboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Learning Path</h1>
            <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-full transition-colors">
              Start Learning
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <LearningPath />
          </div>
          <div>
            <Leaderboard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
