export default function Spinner() {
  return (
    <div className="fixed inset-0 h-screen flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
      <div className="w-16 h-16">
        <img src="/Spinner.gif" alt="spinner" />
      </div>
    </div>
  );
}
