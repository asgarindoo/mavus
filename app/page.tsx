import NavbarLP from "@/components/ui/NavbarLP";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <NavbarLP />

      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 ">
      <div className="container mx-auto px-6 -mt-20 md:-mt-26">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2">
            <span className="text-sm font-light text-muted-foreground">
              💡 Limited Offer: Upgrade to Pro and save 20%
            </span>
            <Button variant="ghost" size="sm" className="ml-4 h-auto p-0 font-light">
              Learn more →
            </Button>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl text-foreground">
            <span className="italic"> All-in-One </span> Business Management System
          </h1>

          <div className="max-w-2xl">
            <p className="text-sm md:text-xl font-light text-muted-foreground text-pretty">
              One System. Every Solution Your Business Needs.
            </p>
            <p className="text-sm md:text-xl font-light text-muted-foreground text-pretty">
              Manage sales, inventory, and finances — without the chaos
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" asChild className="font-light px-8">
              <Link href="/register">Start for free</Link>
            </Button>
            <Button variant="outline" size="lg" className="font-light px-8 bg-transparent rounded-sm hover:bg-gray-200 hover:text-foreground">
              Watch a Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="w-full max-w-6xl mt-12 mx-auto">
        <Image
          src="/placehoder_dashboard.png"
          alt="Dashboard Preview"
          width={1200}
          height={600}
          className="rounded-xl shadow-lg border"
          />
      </div>
    </section>

    </div>
  );
}
