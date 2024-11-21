import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0 mb-8">
        <p>
          Developed by <a href="https://maved.fr" target="_blank" className="text-blue-500 hover:underline">Maved</a> with <span className="text-red-600">❤</span>
        </p>
        <div>
          <ul className="flex items-center gap-2">
            <li>
              <Link href="https://linktr.ee/aecymv" target="_blank">🌴</Link>
            </li>
            <li>
              <Link href="https://buymeacoffee.com/aecy" target="_blank">☕</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/" className="group">
                Home
                <div className="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </Link>
            </li>
            <li>
              <Link href="/about" className="group">
                About
                <div className="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}