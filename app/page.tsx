export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
                E
              </div>
              <span className="text-xl font-bold text-gray-900">ERPro</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-500 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-500 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-gray-500 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-500 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <a
                href="/signin"
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Sign In
              </a>
              <a
                href="#pricing"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Sign Up for Free
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm mb-6">
              ⚡ Trusted by 10,000+ businesses
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              All-in-One Business Management System for{" "}
              <span className="text-blue-600">Micro, Small, and Medium Enterprises</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Streamline your operations, boost productivity, and grow your business with our comprehensive ERP solution
              designed specifically for MSMEs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="px-8 py-3 text-lg rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Start Free Trial →
              </a>
              <button className="px-8 py-3 text-lg rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
