const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#1E4C5C] flex items-center justify-center">
      <img
        src="/assets/logo.png"
        alt="Rio Frame Logo"
        className="w-32 h-auto animate-pulse"
      />
    </div>
  );
};

export default Loader;
