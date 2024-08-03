export const HeroText = ({ children }) => {
  return (
    <>
      <p className="absolute bottom-64 text-white font-bold text-7xl drop-shadow-2xl shadow-xl uppercase">
        {children}
      </p>
    </>
  );
};
