"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    quote:
      "By leveraging Moment's smart order router and limiting our own spread to just 0.1%, Webull is able to deliver some of the most competitive pricing available to individual bond buyers.",
    author: "Webull Team",
    company: "Webull",
    logo: "W",
    study: "Read Webull study",
  },
  {
    id: 2,
    quote:
      "In just 8 weeks, we automated over 90% of our bond trading operations and pioneered fractional bond access, breaking down barriers that once kept retail investors out.",
    author: "Bill Capuzzi",
    position: "CEO of Apex Fintech Solutions",
    company: "APEX",
    logo: "A",
    study: "Read Apex study",
  },
  {
    id: 3,
    quote:
      "The platform's intuitive design and powerful analytics have transformed how we approach fixed income trading, delivering exceptional results for our clients.",
    author: "Sarah Chen",
    position: "Head of Trading",
    company: "Goldman Sachs",
    logo: "GS",
    study: "Read Goldman study",
  },
  {
    id: 4,
    quote:
      "Our trading efficiency improved by 300% within the first quarter of implementation. The seamless integration was beyond our expectations.",
    author: "Michael Rodriguez",
    position: "CTO",
    company: "Morgan Stanley",
    logo: "MS",
    study: "Read Morgan study",
  },
  {
    id: 5,
    quote:
      "The real-time market data and execution speed have given us a significant competitive advantage in the fixed income space.",
    author: "Jennifer Park",
    position: "Portfolio Manager",
    company: "BlackRock",
    logo: "BR",
    study: "Read BlackRock study",
  },
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-slide
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const getVisibleTestimonials = () => {
    const next = (currentIndex + 1) % testimonials.length
    return [testimonials[currentIndex], testimonials[next]]
  }

  const [primary, secondary] = getVisibleTestimonials()

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      {/* Header with navigation */}
      <div className="flex items-start justify-between mb-16">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-light text-black leading-tight text-balance">
            What Our Clients Say
          </h2>
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-2 mt-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            className="w-12 h-12 rounded-full border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all duration-200 bg-transparent"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all duration-200 bg-transparent"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Testimonial cards */}
      <div className="flex flex-col md:flex-row gap-6 overflow-hidden md:[mask-image:_linear-gradient(to_right,white_0%,white_calc(100%-200px),transparent_100%)] md:[-webkit-mask-image:_linear-gradient(to_right,white_0%,white_calc(100%-200px),transparent_100%)] md:[mask-repeat:no-repeat] md:[-webkit-mask-repeat:no-repeat]">
        {/* Primary testimonial */}
        <div className="flex-1 md:flex-[3] transition-all duration-700 ease-in-out transform" key={`primary-${primary.id}`}>
          <div className="bg-white border border-gray-100 rounded-lg p-6 md:p-12 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Company logo */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center font-medium">
                {primary.logo}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-light">{primary.company}</div>
            </div>

            {/* Quote */}
            <blockquote className="text-lg sm:text-xl md:text-2xl font-light text-black leading-relaxed mb-8 text-pretty">
              &quot;{primary.quote}&quot;
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-black">{primary.author}</div>
                {primary.position && <div className="text-sm text-gray-500 font-light">{primary.position}</div>}
              </div>
              <button className="text-sm text-gray-400 hover:text-black transition-colors duration-200 font-light underline underline-offset-4">
                {primary.study}
              </button>
            </div>
          </div>
        </div>

        {/* Secondary testimonial (desktop only) */}
        <div
          className="hidden md:block flex-[3] transition-all duration-700 ease-in-out transform relative overflow-hidden"
          key={`secondary-${secondary.id}`}
          style={{ marginRight: "-50%" }}
        >
          <div className="bg-white border border-gray-100 rounded-lg p-6 md:p-12 h-full shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
            {/* Company logo */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center font-medium">
                {secondary.logo}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-light">{secondary.company}</div>
            </div>

            {/* Quote */}
            <blockquote className="text-lg sm:text-xl md:text-2xl font-light text-black leading-relaxed mb-8 text-pretty">
              &quot;{secondary.quote}&quot;
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-black">{secondary.author}</div>
                {secondary.position && <div className="text-sm text-gray-500 font-light">{secondary.position}</div>}
              </div>
              <button className="text-sm text-gray-400 hover:text-black transition-colors duration-200 font-light underline underline-offset-4">
                {secondary.study}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center gap-2 mt-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              setIsAutoPlaying(false)
              setTimeout(() => setIsAutoPlaying(true), 10000)
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-black w-8" : "bg-gray-300 hover:bg-gray-400 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
