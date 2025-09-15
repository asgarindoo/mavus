import NavbarLP from "@/components/ui/NavbarLP";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import LogoMarquee from "@/components/ui/logoMarquee";
import { BarChart3, Users, Calendar, FileText, TrendingUp, Package } from "lucide-react"
import { PricingCard } from "@/components/ui/pricingCard";
import TestimonialSection from "@/components/ui/testimonialSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <NavbarLP />

      <section className="w-full py-24 md:py-32 lg:py-40 ">
      {/* Hero Section */}
      <div className="container mx-auto px-6 -mt-20 md:-mt-26">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2">
            <span className="text-xs md:text-sm font-light text-muted-foreground">
              💡 Limited Offer: Upgrade to Pro and save 20%
            </span>
            <Button variant="ghost" size="sm" className="ml-4 h-auto p-0 font-light text-xs md:text-sm">
              Upgrade →
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
              Manage task, inventory, and customers — without the chaos
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" asChild className="font-light px-4 sm:px-8 w-full sm:w-auto">
              <Link href="/register">Start for free</Link>
            </Button>
            <Button variant="outline" size="lg" className="font-light px-4 sm:px-8 w-full sm:w-auto bg-transparent rounded-sm hover:bg-gray-200 hover:text-foreground">
              Watch a Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="w-full max-w-6xl mt-12 mx-auto px-4">
      <div className="relative w-full aspect-[2/1] md:aspect-[16/9] lg:aspect-[21/9]">
        <Image
          src="/placehoder_dashboard.png"
          alt="Dashboard Preview"
          fill
          className="object-cover rounded-md shadow-lg border"
          priority
        />
      </div>
    </div>

      {/*Marquee Logo Business*/}
      <div className="mt-20 text-center text-sm border-t border-gray-200 mx-4 sm:mx-10 lg:mx-40">
        <p className="py-10 sm:py-12 lg:py-16 text-lg sm:text-xl lg:text-2xl font-medium">
          Trusted by over 100 businesses in Indonesia
        </p>
        <LogoMarquee />
      </div>

      {/* Features Section */}
       <div className="container mx-auto my-24 px-6">

        <div className="text-center space-y-4 mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-black text-balance">
            Complete modules for your business
          </h2>
          <p className="text-sm md:text-lg lg:text-xl font-light text-gray-600 max-w-2xl mx-auto text-pretty">
            Manage all aspects of your business in one integrated platform with powerful and easy-to-use modules
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-lg overflow-hidden">
            <div className="p-6 border-b  md:border-r border-gray-200 ">
              <div className="space-y-4"> 
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-black"/>
                  </div>
                  <h3 className="text-lg font-medium text-black">Dashboard</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  Business summary center displaying KPIs, task progress, recent invoices, and cash flow.
                </p>
                <Link href="#" className="inline-flex items-center text-black font-medium hover:underline text-sm">
                  ↳ View dashboard
                </Link>
              </div>
            </div>

            <div className="p-6 border-b border-gray-200">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-lg font-medium text-black">Customers</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  Client database and interaction history, complete with categories for easy searching.
                </p>
                <Link href="#" className="inline-flex items-center text-black font-medium hover:underline text-sm">
                  ↳ Manage customers
                </Link>
              </div>
            </div>

            <div className="p-6 border-b md:border-r lg:border-r-0 lg:border-l border-gray-200">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-lg font-medium text-black">Tasks</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  Manage projects and main tasks with progress tracking and deadlines.
                </p>
                <Link href="#" className="inline-flex items-center text-black font-medium hover:underline text-sm">
                  ↳ Manage tasks
                </Link>
              </div>
            </div>

            <div className="p-6 border-b lg:border-b-0 border-gray-200">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Package className="w-5 h-5 text-black" />
                </div>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-medium text-black">Inventory</h3>
                </div>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  Manage product stock with automatic alerts and inventory tracking.
                </p>
                <Link href="#" className="inline-flex items-center text-black font-medium hover:underline text-sm">
                  ↳ Manage inventory
                </Link>
              </div>
            </div>

            <div className="p-6 border-b md:border-r lg:border-l lg:border-b-0 border-gray-200">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-black" />
                </div>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-medium text-black">Invoices</h3>
                </div>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  Create and monitor invoices and payment status with automatic calculations.
                </p>
                <Link href="#" className="inline-flex items-center text-black font-medium hover:underline text-sm">
                  ↳ Create invoice
                </Link>
              </div>
            </div>


            <div className="p-6 border-b lg:border-b-0 border-gray-200">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-lg font-medium text-black">Reports</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  Business analytics reports and performance graphs that can be exported.
                </p>
                <Link href="#" className="inline-flex items-center text-black font-medium hover:underline text-sm">
                  ↳ View reports
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto px-6">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-4xl text-foreground text-balance">
          Pricing Plan
        </h2>
        <p className="text-sm md:text-lg font-light text-muted-foreground max-w-2xl mx-auto text-pretty">
          Choose the plan that fits your business needs. Upgrade anytime as you grow
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <PricingCard
          title="Free"
          description="Perfect for small businesses getting started"
          price="$0"
          features={[
            "Up to 5 team members",
            "Basic project management",
            "Document storage (1GB)",
            "Email support",
            "Standard integrations",
            "Basic analytics",
          ]}
          buttonText="Get started free"
          buttonLink="/register"
        />

        <PricingCard
          title="Pro"
          description="For growing businesses"
          price="$49"
          features={[
            "Unlimited team members",
            "Advanced project management",
            "Unlimited document storage",
            "Priority support",
            "Premium integrations",
            "Advanced analytics & reporting",
            "Financial management tools",
            "Process automation",
            "Custom branding",
          ]}
          buttonText="Start Pro trial"
          buttonLink="/register"
          highlight
          highlightLabel="Most Popular"
        />
      </div>
    </div>
    {/* Testimonial Section */}
      <TestimonialSection />
    </section>

    </div>
  );
}
