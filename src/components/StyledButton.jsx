const StyledButton = ({ title, className = "", onClick }) => {
  return (
    <button onClick={onClick} className={`active:translate-y-1 transition-colors cursor-pointer hover:text-Primary hover:bg-Secondary font-extrabold px-4 md:px-7 py-2 md:py-3 rounded-4xl text-md md:text-xl border-4 border-White shadow-[6px_6px_0_0_theme(colors.Darker-White)]
      ${className}
    `}>
      {title}
    </button>
  );
};

export default StyledButton;

