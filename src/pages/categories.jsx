const categories = [
  { title: "Passion", emoji: "💜" },
  { title: "Tech", emoji: "💻" },
  { title: "Family", emoji: "🤍" },
  { title: "Creative", emoji: "🎭" },
  { title: "Life Purpose", emoji: "🌱" },
];

function Categories() {
  return (
    <div className="min-h-screen px-8 py-16">
      <h2 className="text-3xl text-center text-dreamPurple mb-12 font-semibold">
        Your Dream Spaces
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 text-center shadow-xl
                       hover:scale-105 transition-all duration-500 cursor-pointer"
          >
            <div className="text-4xl mb-4">{cat.emoji}</div>
            <h3 className="text-xl text-dreamPurple font-medium">
              {cat.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
