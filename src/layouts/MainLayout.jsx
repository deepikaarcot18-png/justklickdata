import Navbar from "../components/layout/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <div className="mt-6 h-[70vh]">
        {children}
      </div>

    </div>
  );
}