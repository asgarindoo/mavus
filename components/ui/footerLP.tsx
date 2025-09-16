import Image from "next/image";
export default function FooterLP() {
  return (
    <div className="bg-black text-white py-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-8 right-12 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-6 left-1/3 w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="absolute bottom-4 right-1/4 w-1 h-1 bg-white rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative group">
            <Image
              src="/mavus_logo_lanescape.png"
              alt="Mavus Logo"
              width={100}
              height={50}
              className="invert brightness-200"
            />
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm font-light tracking-wider">© 2025 — All rights reserved</p>
          </div>
        </div>
      </div>
      </div>
  )
}