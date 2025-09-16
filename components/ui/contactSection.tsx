"use client"
export default function ContactSection() {
  const marqueeItems = Array.from({ length: 4 })

  return (
    <section className="h-full py-24 px-6 bg-white">


      <div className="max-w-7xl mx-auto">
        <div className="text-center pt-16 border-t border-gray-200">
          <p className="text-gray-600 font-medium mb-4">Still have questions?</p>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-black rounded-xl p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="relative z-10">
              {/* Header */}
              <div className="mb-12">
                <div className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">Contact</div>
                <a
                  href="mailto:info@mavus.com"
                  className=" text-4xl lg:text-6xl font-medium text-white hover:text-gray-300 transition-colors duration-300 block tracking-tight"
                >
                  info@mavus.com
                </a>
              </div>


            </div>
          </div>
        </div>

            {/* Marquee */}
        <div className="absolute left-0 right-0 z-0 overflow-hidden mt-4" >
        <div className="w-screen  h-20 bg-white shadow-lg ">
          <div className="animate-marquee whitespace-nowrap flex items-center space-x-12 px-12">
            {marqueeItems.map((_, i) => (
              <div key={i} className="flex items-center h-20 space-x-12">   
                <span className="text-4xl font-black text-black uppercase tracking-wider">Start for free</span>
                <span className="text-4xl font-black text-black">→</span>
              </div>
            ))}
            {marqueeItems.map((_, i) => (
              <div key={i} className="flex items-center h-20 space-x-12">
                <span className="text-4xl font-black text-black uppercase tracking-wider">Start for free</span>
                <span className="text-4xl font-black text-black">→</span>
              </div>
            ))}
          </div>
        </div>
        </div>

      </div>
    </section>
  )
}
