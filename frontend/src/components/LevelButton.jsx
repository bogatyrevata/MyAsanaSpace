function LevelButton({ level, label, isActive, onClick, gradient }) {
  const baseClasses =
    "difficulty-btn px-8 py-4 rounded-xl font-bold shadow-lg transform hover:scale-105 transition-all";
  const activeClasses = isActive ? gradient : "bg-gray-200 text-gray-600";

  return (
    <button
      onClick={() => onClick(level)}
      className={`${baseClasses} ${activeClasses}`}
      data-level={level}
    >
      {label}
    </button>
  );
}

export default LevelButton;