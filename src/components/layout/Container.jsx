export default function Container({ children }) {
  return (
    <div className="max-w-[1280px] mx-auto px-6">
      {children}
    </div>
  );
}