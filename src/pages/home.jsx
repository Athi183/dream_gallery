import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white/90 backdrop-blur-lg p-12 rounded-3xl shadow-2xl text-center max-w-md">
        
        <h1 className="text-4xl font-semibold text-dreamPurple mb-4">
          Dream Gallery
        </h1>

        <p className="text-gray-600 mb-8 leading-relaxed">
          A calm space to collect your dreams, passions, and purpose.
        </p>

        <button
          onClick={() => navigate("/categories")}
          className="px-8 py-3 bg-white text-dreamPurple border border-lavender rounded-full hover:bg-lavender/40 transition-all duration-300 shadow-md"
        >
          Open My Dreams
        </button>

      </div>
    </div>
  );
}

export default Home;
