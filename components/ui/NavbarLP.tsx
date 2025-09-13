import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function NavbarLP() {
  return (
    <header className=" sticky top-0 z-50 w-full bg-background/50 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 lg:px-20 py-4 relative">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/mavus_logo_lanescape.png"
            alt="Mavus Logo"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Center: Navigation */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Testimoni
          </Link>
          <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <Button variant="ghost" asChild className=" bg-transparent rounded-sm font-light hover:bg-gray-200 hover:text-foreground"> 
            <Link href="/signin">Sign in</Link> 
          </Button> 
          <Button asChild className="rounded-sm font-light"> 
            <Link href="/signup">Start for free</Link> 
          </Button>
        </div>
      </div>
    </header>
  )
}

export default NavbarLP
