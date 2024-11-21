export default function Footer() {
  return (
    <footer className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0 mt-16 mb-8">
        <div className="text-sm">
          Copyright &copy; 2024 - TailwindCSS Color Matcher
        </div>
        <div className="text-sm">
          Developed by <a href="https://maved.fr" target="_blank" className="text-blue-500 hover:underline">Maved</a> with <span className="text-red-600">❤</span>
        </div>
      </div>
    </footer>
  )
}