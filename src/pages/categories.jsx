const categories = [
  { title: "Passion", emoji: "💜", count: 3 },
  { title: "Tech", emoji: "💻", count: 1 },
  { title: "Family", emoji: "🤍", count: 0 },
  { title: "Creative", emoji: "🎭", count: 2 },
  { title: "Life Purpose", emoji: "🌱", count: 4 },
  { title: "Add a new dream", emoji: "+", count: 0 },
];

function CategoryCard({ title, emoji, count, isAdd }) {
  const layers = Math.min(count, 3);

  return (
    <div
      className="relative w-56 h-36 cursor-pointer group animate-float"
      style={{ animationDelay: `${Math.random() * 2}s` }}
    >
      {/* Back stacked cards */}
      {/* Stacked cards */}
{!isAdd &&
  [...Array(layers)].map((_, i) => {
    const offset = (layers - i - 1) * 8;

    return (
      <div
        key={i}
        className="absolute inset-0 rounded-3xl bg-white shadow-xl"
        style={{
          transform: `translate(${offset}px, ${offset}px)`,
          zIndex: i,
        }}
      />
    );
  })}


      {/* Front glass card */}
      <div
        className={`absolute inset-0 rounded-3xl flex flex-col items-center justify-center
  z-20 bg-white
          ${
            isAdd
              ? "bg-white/70 border-2 border-dashed border-dreamPurple hover:bg-white/85"
              : count === 0
              ? "bg-white/30 border-2 border-dashed border-lavender/60"
              : "bg-transparent"
          }
          backdrop-blur-sm transition-all duration-300`}
      >
        <div className="z-20 text-center pointer-events-none">
          <div
            className={`mb-2 text-4xl ${
              isAdd ? "text-dreamPurple" : ""
            }`}
          >
            {isAdd ? "+" : emoji}
          </div>

          <h3 className="text-lg font-medium text-dreamPurple">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}


function Categories() {
  
  return (
    <div className="min-h-screen px-8 py-16">
      <h2 className="text-3xl text-center text-dreamPurple mb-14 font-semibold">
        Your Dream Spaces
      </h2>

      <div className="flex flex-wrap justify-center gap-12">
        {categories.map((cat, i) => (
          <CategoryCard key={i} {...cat} />
        ))}
      </div>
      {/* Floating Add Dream Button */}


    </div>
    
  );
  
}


export default Categories;
