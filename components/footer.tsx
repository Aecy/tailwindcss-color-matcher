import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0 mb-8">
        <div className="text-sm">
          Developed by <a href="https://maved.fr" target="_blank" className="text-blue-500 hover:underline">Maved</a> with <span className="text-red-600">❤</span>
        </div>
        <div className="text-sm">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}